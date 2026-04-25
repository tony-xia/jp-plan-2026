#!/usr/bin/env python3
"""Insert `photos:` arrays into src/content/places/*.yaml based on what's in
public/photos/<id>/. Uses string-based insertion to preserve comments/formatting.
"""
from __future__ import annotations

import glob
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PHOTO_DIR = ROOT / "public" / "photos"


def files_for(place_id: str) -> list[str]:
    d = PHOTO_DIR / place_id
    if not d.exists():
        return []
    files = sorted(p.name for p in d.iterdir() if p.suffix.lower() in (".jpg", ".jpeg", ".png", ".webp"))
    return [f"/photos/{place_id}/{n}" for n in files]


def insert_photos_block(text: str, place_id: str, photo_paths: list[str]) -> str:
    if not photo_paths:
        return text
    pattern = re.compile(
        r"(?P<head>^  - id: " + re.escape(place_id) + r"\s*$\n(?:    [^\n]*\n|[ \t]*\n)*?)(?=^  - id: |\Z)",
        re.M,
    )
    m = pattern.search(text)
    if not m:
        print(f"  not found in YAML: {place_id}")
        return text
    block = m.group("head")
    photos_yaml = "    photos:\n" + "".join(f"      - {p}\n" for p in photo_paths)
    # If photos: already exists, replace it (incl. its list items).
    photos_re = re.compile(r"^    photos:\s*$\n(?:      - .*\n)*", re.M)
    if photos_re.search(block):
        new_block = photos_re.sub(photos_yaml, block, count=1)
    else:
        new_block = block.rstrip("\n") + "\n" + photos_yaml
    return text[: m.start()] + new_block + text[m.end():]


def main():
    for f in sorted(glob.glob("src/content/places/*.yaml")):
        text = Path(f).read_text()
        # Find every place id in this file.
        ids = re.findall(r"^  - id: (\S+)\s*$", text, re.M)
        original = text
        for pid in ids:
            paths = files_for(pid)
            if paths:
                text = insert_photos_block(text, pid, paths)
        if text != original:
            Path(f).write_text(text)
            print(f"updated {f}")


if __name__ == "__main__":
    main()
