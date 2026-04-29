# CLAUDE.md

Guidance for Claude Code in this repo.

## Trip requirements — source of truth

Index/decision log: [`docs/requirements.md`](docs/requirements.md). Phase files: [`phase-1-hokkaido.md`](docs/requirements/phase-1-hokkaido.md), [`phase-2-tokyo.md`](docs/requirements/phase-2-tokyo.md). Cross-phase open items: [`open-questions.md`](docs/requirements/open-questions.md).

- **Before editing `src/content/`**: read the relevant phase file(s), reconcile against every requirement. If the change conflicts, stop and flag — never silently override.
- **When the user states/refines/resolves/rules-out a requirement**: update the matching phase file *first*, same turn, before any YAML edit.
- **Google Maps short-links** (`maps.app.goo.gl/...`) from the user: store verbatim in the matching phase file. These pins override any address-string search.
- Surface YAML/requirement conflicts — don't quietly fix either side.

## Stack & commands

**Next.js 16** (App Router). When APIs differ from training data, check `node_modules/next/dist/docs/`. See [AGENTS.md](AGENTS.md).

```bash
npm install
npm run dev        # :3000
npm run build      # → .next/standalone/
npm run start
npm run typecheck
npm run lint
```

## Architecture

Read-only Japan-trip itinerary site. UI in Chinese; proper nouns render tri-lingually (zh + en + ja) so users can show their phone to locals.

**Content → schema → render.** Source of truth: [`src/content/`](src/content/) — `trip.yaml` (metadata + segments), `bookings.yaml` (trip-level), `places/*.yaml` (by geographic cluster), `days/day-NN.yaml` (one per day). Build-time assembly in [`src/lib/content.ts`](src/lib/content.ts), validated by Zod schema in [`src/lib/schema.ts`](src/lib/schema.ts). Fully static via `generateStaticParams` — no runtime API/DB/auth.

**Entities** (all have stable `id`):
- `Trip` → `segments[]` → `days[]`
- `Day` → `activities[]` + day-level `bookings[]`
- `Activity.place` = inline `Place` OR `{ ref: "place-id" }` into `Trip.places`. Use `resolvePlace()`.
- `TriName = { zh, en?, ja }` — render via `<TriName>`.

**Routes:** `/` (home/timeline) · `/[segment]/[day]`.

**Visual language**: editorial/Japanese-restrained — warm paper `#FAF7F2`, Noto Serif JP headings, hanko seal for day numbers, `writing-mode: vertical-rl` accents. See [`src/app/globals.css`](src/app/globals.css) (Tailwind v4 `@theme inline`).

**Map links**: every `Address` → Apple Maps + Google Maps (JP address string) + Gaode (ZH address string). All queries prefixed with `日本 `. See [`src/lib/maps.ts`](src/lib/maps.ts).

**Travel times**: delimited section in [`docs/requirements/travel-times.md`](docs/requirements/travel-times.md) (between `## Travel times (auto-generated — do not edit by hand)` and `<!-- /travel-times -->`). Claude populates via OSM (Nominatim + OSRM demo) — no keys, no build/runtime calls. Parsed by [`src/lib/travel-times.ts`](src/lib/travel-times.ts), merged in [`src/lib/content.ts`](src/lib/content.ts), rendered by `ActivityItem` as `→ 下一站 X min · Y km`. Ask Claude to refresh when the itinerary changes.

## Tone & voice — happy & relaxed

All user-facing copy — `intro_zh`, `title_zh`, `details_zh`, booking notes, requirements docs — should read **happy, relaxed, unhurried**, like a friend telling you about a comfortable trip they're excited about. Never a packed tour itinerary, never a checklist of obligations. The reader should finish a paragraph feeling *eager and at ease*, not *briefed*.

- **Prefer verb-led, invitational titles** over noun-listed checklists. The reliable move: keep the place / scene noun, slot a quiet verb of enjoyment in front of it.
  - "（函馆山夜景）" → "（享受函馆山夜景）" *(insert 享受 — keeps the scene, adds the invitation)*
  - "（朝市 → 元町 → 金森 → 五稜郭塔）" → "（朝市 · 元町 · 金森 · 五稜郭塔）" with title verb "漫游函馆"
  - Verb shortlist: **享受 / 漫游 / 漫步 / 漫逛 / 自驾去 / 北上 / 慢慢开**. 享受 is the default for scenery/experience nouns. Stack a leisurely modifier in front when it fits — **悠闲漫游**, **慢慢享受**, **轻松自驾** — doubling down reinforces the unhurried voice.
  - Replace "+" between list items with " · " — "+" reads like an additive checklist; "·" reads like a tasting menu.
- **Avoid urgency / scarcity language**: 紧、赶、压缩、抓紧、必须 X 点前、塞、硬、最硬单日、密集, "tight", "rush", "must-do by", "no buffer", "bundled 日".
- **Avoid drill-sergeant timing precision** ("~7–9 hr door-to-door", "1h30 driving + 40 min lunch"): prefer soft framings — "一整天慢慢开"、"中午在 Rusutsu 吃饭休息"、"看天气 / 光线决定方向". Keep precise figures only where the user needs them for a real decision (transit reservations, opening hours, sunset windows).
- **Frame options as flex, not constraints**: "时间紧则…" → "如果想多停就…"; "若 loop 跑长则降级" → "天气好就多拍几张"; "如未完成 X" → "X 没去到的话".
- **Drives are part of the experience**, not a cost — describe scenery, not duration thresholds. Having a car = freedom to linger.
- **⚠️ warnings**: keep only for genuine logistics (closures, reservations, drone regs, tax, weather-dependent transit). Don't ⚠️ a soft preference. Never use 🚨 — too alarmist for this trip's voice.
- **Requirements docs (`docs/requirements/*.md`)** follow the same tone — they're read by the user, not just internal scaffolding.
- **UI labels in `src/lib/strings.ts` and `src/components/`** are part of the voice too. "必去" → "想去", "Must-do" → "おすすめ · Recommended", "Nice-to-do" → "気まま · As you like".

When the user pushes back on a "tight" / "hurried" framing, treat it as a tone correction across the project, not just that one line.

## Editing guidelines

- **Single day** → edit `src/content/days/day-NN.yaml` only (top-level key `day:`; day-level `bookings:` live here).
- **New place** → `src/content/places/<shard>.yaml` (geographic cluster). Shared transit hubs → `places/00-transit.yaml`. Place `id`s must be globally unique (loader fails the build on collisions). Day files reference via `{ ref: "place-id" }`.
- **Trip-level booking** (flight, inter-segment shinkansen, hotel master) → `src/content/bookings.yaml`. Day-level bookings stay in the day file.
- **Segment / trip metadata** → `src/content/trip.yaml` (only `title_zh`, `travelers`, `startDate`, `endDate`, `segments:`, `stays:`).
- **Stay** = contiguous nights in one city (home-page city list). Update `stays:` in `trip.yaml` whenever a city is added, split (e.g. front vs return leg), or its `dayIds` / `lodgingBookingIds` change.
- **UI string** → `src/lib/strings.ts` (zh only).
- **Proper nouns** always use `<TriName>`. **Addresses** always use `<AddressLinks>`.
- **User-verified Google Maps pins**: mirror onto both `Place.googleMapsUrl` *and* any `Booking.googleMapsUrl` with the same address. `BookingItem` only honors `booking.googleMapsUrl`, not the library Place pin — so bookings need their own copy.
- **Keep render pure** — React 19 compiler flags reassigned variables in render. Precompute indices/maps before JSX (see `Timeline.tsx`).

## Deployment

Azure Web App **`jp-plan`** (`jp-plan.azurewebsites.net`), Linux/Container mode. [`.github/workflows/azure-deploy.yml`](.github/workflows/azure-deploy.yml) on push to `main` builds [`Dockerfile`](Dockerfile) → GHCR (`ghcr.io/<owner>/jp-plan-2026:<sha>`) → `azure/webapps-deploy@v3`. Container listens on `PORT=8080`; Web App needs `WEBSITES_PORT=8080`. Next.js `output: "standalone"` ([`next.config.ts`](next.config.ts)) produces the minimal `server.js` bundle.

## HDR video from YouTube → Apple-friendly MP4

YouTube serves HDR in AV1 or VP9.2 (HLG, BT.2020, 10-bit). **Apple platforms (QuickTime, Safari HDR rendering, iOS Photos, AirPlay) don't decode AV1** — they need HEVC. Workflow:

1. **Download.** `yt-dlp -F <url>` to list formats; the HDR ones are tagged `HDR`. Pick the AV1/MP4 line at the resolution you want (e.g. `401` = 2160p HDR AV1, `701` = same res higher bitrate). Mux to MKV — safest container for HDR side-data during yt-dlp's merge step:

   ```bash
   yt-dlp -f "401+bestaudio" --merge-output-format mkv <url>
   ```

2. **Convert to HEVC HLG MP4** for Apple playback. Stream-copy is *not* an option — the codec must change. Use `hevc_videotoolbox` (Apple Silicon hardware encoder, supports 10-bit), tag as `hvc1` (Safari/QuickTime require this; the default `hev1` won't play), and keep BT.2020 + HLG flags so HDR signaling survives:

   ```bash
   ffmpeg -i in.mkv \
     -c:v hevc_videotoolbox -profile:v main10 -pix_fmt p010le -b:v 15M -tag:v hvc1 \
     -color_primaries bt2020 -color_trc arib-std-b67 -colorspace bt2020nc \
     -c:a aac -b:a 192k -movflags +faststart out.mp4
   ```

3. **Verify** with `ffprobe`: expect `codec_name=hevc`, `profile=Main 10`, `codec_tag_string=hvc1`, `pix_fmt=yuv420p10le`, `color_transfer=arib-std-b67`, plus a `Mastering display metadata` side-data block.

4. **Web embedding.** Single `<video src="…hevc.mp4">` works in Safari (renders as HDR on capable displays) and Chrome/Edge on macOS via the system HEVC decoder. For Chrome on Linux/Windows + Firefox, also serve the original AV1 MP4 as a `<source>` fallback (`type="video/mp4; codecs=av01.0.12M.10"`) — the HEVC source needs `type="video/mp4; codecs=hvc1.2.4.L150.B0"` so Safari picks it for HDR.

## Misc

- **Design spec**: [`docs/superpowers/specs/2026-04-19-jp-itinerary-design.md`](docs/superpowers/specs/2026-04-19-jp-itinerary-design.md).
- **Playwright screenshots**: `filename` must start with `.playwright/` (gitignored, never committed).
