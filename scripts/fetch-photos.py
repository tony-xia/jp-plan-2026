#!/usr/bin/env python3
"""Fetch 2-3 winter photos per place from Bing Image Search.

Reads src/content/places/*.yaml, for each Place without a `photos` field,
queries Bing image search for "<ja-name> 冬", filters out stock-photo
watermark domains, downloads up to N images to public/photos/<id>/, and
prints a YAML snippet to stdout (does NOT mutate the YAML — caller does that
after spot-checking).
"""
from __future__ import annotations

import argparse
import glob
import html
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PHOTO_DIR = ROOT / "public" / "photos"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Safari/605.1.15"

# Stock-photo / watermark domains — always have a visible watermark on the public preview.
BLOCKED_DOMAINS = (
    "aflo.com", "imagemart.jp", "pixta.jp", "pixtastock", "amanaimages",
    "photolibrary.jp", "shutterstock", "gettyimages", "istockphoto", "alamy",
    "dreamstime", "123rf", "fotolia", "stock.adobe", "depositphotos",
    "canstockphoto", "ac-illust", "photo-ac.com", "freepik",
    "stocksnap", "unsplash", "pexels",  # generic stock — diverts away from real spot
    "ftcdn.net",  # Adobe Stock CDN — watermarked previews
    "media-pedia.com",  # tabloid aggregator with watermarks
    # YouTube/video thumbnails — usually have promotional text overlays.
    "ytimg.com", "ggpht.com", "vimeocdn.com",
    # TikTok / IG / X — auth-walled or low quality.
    "tiktokcdn", "cdninstagram", "fbcdn.net", "pbs.twimg.com",
)

# Title patterns that flag YouTube-style thumbnail decoration.
TITLE_BLOCK_PATTERNS = (
    re.compile(r"\b4K\b", re.I),
    re.compile(r"\bUltra\s*HD\b", re.I),
    re.compile(r"\bHDR\b"),
    re.compile(r"【.*?】"),  # Japanese decorated brackets — usually clickbait.
)

# Tracking sites / known low-res aggregators.
SOFT_AVOID = ("blogimg.goo.ne.jp", "ameblo.jp", "img.4travel.jp")


def fetch_bing(query: str) -> list[dict]:
    # filterui:photo-photo limits to photographs (not illustrations/clipart);
    # filterui:imagesize-large limits to >500px.
    url = ("https://www.bing.com/images/search?q=" + urllib.parse.quote(query) +
           "&qft=+filterui:photo-photo+filterui:imagesize-large&form=IRFLTR")
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "ja,en;q=0.5"})
    with urllib.request.urlopen(req, timeout=30) as r:
        body = r.read().decode("utf-8", errors="replace")
    items = []
    # Parse iusc m=".." JSON blobs.
    for match in re.finditer(r'class="iusc"[^>]*\bm="([^"]*)"', body):
        raw = html.unescape(match.group(1))
        try:
            obj = json.loads(raw)
        except json.JSONDecodeError:
            continue
        items.append({
            "murl": obj.get("murl"),
            "purl": obj.get("purl"),
            "title": obj.get("t", ""),
            "desc": obj.get("desc", ""),
        })
    return items


def url_ok(u: str, title: str = "") -> bool:
    if not u:
        return False
    low = u.lower()
    if any(b in low for b in BLOCKED_DOMAINS):
        return False
    if low.endswith((".svg", ".gif")):
        return False
    for pat in TITLE_BLOCK_PATTERNS:
        if pat.search(title):
            return False
    return True


def winter_score(item: dict) -> int:
    """Higher = more likely to be a winter shot."""
    text = (item.get("title", "") + " " + item.get("desc", "")).lower()
    score = 0
    for kw, pts in [
        ("冬", 3), ("雪", 3), ("winter", 3), ("snow", 3),
        ("イルミネーション", 2), ("クリスマス", 1), ("初詣", 2),
        ("正月", 1), ("12月", 1), ("1月", 1), ("2月", 1),
    ]:
        if kw in text:
            score += pts
    # Penalize summer/autumn cues.
    for kw, pts in [
        ("夏", 2), ("紅葉", 2), ("桜", 3), ("春", 2), ("autumn", 2), ("summer", 2),
    ]:
        if kw in text:
            score -= pts
    return score


def upgrade_googleusercontent(u: str) -> str:
    """For lh3.googleusercontent.com URLs, request a larger version."""
    return re.sub(r"=w\d+-h\d+(?:-[a-z0-9-]+)*$", "=w1600-h1200-no", u)


def pick_best(items: list[dict], n: int = 3) -> list[dict]:
    seen_hosts = set()
    chosen = []
    # Sort by winter score desc, then by title length (longer = more descriptive).
    ranked = sorted(items, key=lambda x: (-winter_score(x), -len(x.get("title", ""))))
    for it in ranked:
        u = it["murl"]
        if not url_ok(u, it.get("title", "")):
            continue
        host = urllib.parse.urlparse(u).netloc
        # Limit one image per host for diversity.
        if host in seen_hosts:
            continue
        chosen.append(it)
        seen_hosts.add(host)
        if len(chosen) >= n:
            break
    return chosen


def download(url: str, dest: Path) -> bool:
    try:
        url_up = upgrade_googleusercontent(url)
        req = urllib.request.Request(url_up, headers={"User-Agent": UA, "Referer": "https://www.bing.com/"})
        with urllib.request.urlopen(req, timeout=30) as r:
            data = r.read()
        if len(data) < 8000:  # likely a tiny placeholder
            return False
        # Check magic bytes — accept JPEG, PNG, WebP.
        if not (data[:3] == b"\xff\xd8\xff" or data[:8] == b"\x89PNG\r\n\x1a\n" or data[:4] == b"RIFF"):
            return False
        dest.write_bytes(data)
        return True
    except Exception as e:
        print(f"  download failed: {e}", file=sys.stderr)
        return False


def process_place(place_id: str, ja: str, kind: str, force: bool = False, no_winter: bool = False) -> list[str]:
    out_dir = PHOTO_DIR / place_id
    if out_dir.exists() and any(out_dir.glob("*.jpg")) and not force:
        existing = sorted(p.name for p in out_dir.glob("*.jpg"))
        return [f"/photos/{place_id}/{n}" for n in existing]
    out_dir.mkdir(parents=True, exist_ok=True)

    query = ja if no_winter else f"{ja} 冬"
    print(f"  search: {query}", file=sys.stderr)
    items = fetch_bing(query)
    if not items:
        # Fallback: query without 冬
        items = fetch_bing(ja)
    chosen = pick_best(items, n=3)
    if len(chosen) < 3:
        # Try 雪 as alternate winter keyword.
        more = fetch_bing(f"{ja} 雪")
        for it in more:
            if it not in chosen:
                chosen.append(it)
        chosen = pick_best(chosen + items, n=3)

    paths = []
    idx = 1
    for it in chosen:
        ext = ".jpg"
        if it["murl"].lower().endswith(".png"):
            ext = ".png"
        elif it["murl"].lower().endswith(".webp"):
            ext = ".webp"
        dest = out_dir / f"{idx:02d}{ext}"
        ok = download(it["murl"], dest)
        if ok:
            paths.append(f"/photos/{place_id}/{dest.name}")
            idx += 1
        # Polite delay.
        time.sleep(0.3)
    return paths


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--ids", nargs="*", help="Only process these place ids")
    ap.add_argument("--skip-kinds", nargs="*", default=["station", "hotel"], help="Skip these kinds")
    ap.add_argument("--force", action="store_true")
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--no-winter", action="store_true", help="Drop 冬 from query (for year-round indoor places)")
    args = ap.parse_args()

    import yaml
    todo = []
    for f in sorted(glob.glob("src/content/places/*.yaml")):
        with open(f) as fh:
            d = yaml.safe_load(fh)
        for p in d.get("places", []):
            if args.ids and p["id"] not in args.ids:
                continue
            if not args.ids:
                if p.get("photos"):
                    continue
                if p.get("kind") in args.skip_kinds:
                    continue
            todo.append({"id": p["id"], "ja": p["name"].get("ja"), "kind": p.get("kind"), "file": f})

    if args.limit:
        todo = todo[: args.limit]

    print(f"Processing {len(todo)} places", file=sys.stderr)
    results = {}
    for i, p in enumerate(todo, 1):
        print(f"[{i}/{len(todo)}] {p['id']} ({p['ja']})", file=sys.stderr)
        try:
            paths = process_place(p["id"], p["ja"], p["kind"], force=args.force, no_winter=args.no_winter)
            results[p["id"]] = paths
            print(f"  → {len(paths)} photos", file=sys.stderr)
        except Exception as e:
            print(f"  ERROR: {e}", file=sys.stderr)
            results[p["id"]] = []
        time.sleep(1.0)

    print(json.dumps(results, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
