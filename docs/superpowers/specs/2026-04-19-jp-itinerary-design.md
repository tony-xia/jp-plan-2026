# Japan Travel Itinerary — Design Spec

**Date:** 2026-04-19
**Project:** `jp-plan-2026`
**Status:** v1 design, approved for implementation

## 1. Purpose

A read-only itinerary website for the user's Japan trip with friends traveling from China. Displays the plan in **Chinese** while surfacing **English and Japanese labels inline** for anything friends might need to show a local (places, restaurants, dishes, addresses, stations). Addresses link directly into **Apple Maps** and **Google Maps** for on-the-ground navigation.

v1 is read-only. Future phases (reserved in the data model, not built): comments/reactions per day and place, expanded booking details, an AI chat that can propose and apply itinerary edits via tool calls.

## 2. Users & context

- **Author:** user (edits YAML, pushes to git, Actions deploys)
- **Viewers:** small group of friends (China, iPhone-heavy), viewing during trip prep and on the ground in Japan
- **Network reality:** friends access from China → Azure Web App selected by user (region TBD)

## 3. Scope

**In scope (v1):**
- Trip overview page (title, dates, travelers, segments, master timeline)
- City segment pages (Tokyo, Kyoto, Osaka, etc.)
- Day detail pages (activities, bookings, addresses with map links)
- Tri-lingual label rendering for proper nouns (zh primary + en + ja inline)
- Clickable Apple Maps / Google Maps links for every address
- Modern editorial design with restrained Japanese cues (typography-led)

**Out of scope (v1, reserved in schema):**
- Comments, reactions, RSVP
- Photo galleries
- Budget tracking, packing list
- Interactive maps (links only)
- Language switcher (Chinese is the UI; en/ja are annotations, not a flip)
- Authentication (public, unlisted URL)

## 4. Stack

- **Next.js 15** — App Router, React Server Components, SSG
- **TypeScript**, **Tailwind CSS 4**
- **`output: "standalone"`** — ships self-contained `server.js` for Azure
- **Zod** — schema validation at build time
- **js-yaml** — content parsing
- **pnpm** — package manager
- **Node 20** — runtime (Azure + local via `.nvmrc`)
- **next/font** — Google Fonts (Noto Serif JP display, Noto Sans SC body, Noto Sans JP for ja strings)
- **GitHub Actions + `azure/webapps-deploy@v3`** — CI/CD to Azure Web App (Linux, Code)

## 5. Data model

Schema source of truth: `src/lib/schema.ts` (Zod). Content authored in `src/content/trip.yaml`, validated at build time.

```ts
TriName     = { zh: string; en?: string; ja: string }
Address     = { full: TriName }
Place       = {
  id: string;              // stable slug
  name: TriName;
  kind: "restaurant" | "sight" | "shrine" | "shop" | "hotel" | "station" | "other";
  address?: Address;
  notes_zh?: string;
  dishes?: TriName[];
}
Activity    = {
  id: string;
  start?: string;          // "HH:mm"
  end?: string;
  place: Place | { ref: string };   // inline or reference to places library
  notes_zh?: string;
}
Booking     = {
  id: string;
  kind: "flight" | "hotel" | "shinkansen" | "other";
  title_zh: string;
  confirmation?: string;
  from?: TriName;
  to?: TriName;
  start: string;           // ISO datetime
  end?: string;
  address?: Address;
  details_zh?: string;
}
Day         = {
  id: string;              // "day-01"
  date: string;            // ISO date
  city: string;            // CitySegment.id
  title_zh: string;
  intro_zh?: string;
  activities: Activity[];
  bookings?: Booking[];
}
CitySegment = { id: string; name: TriName; days: string[] }
Trip        = {
  title_zh: string;
  travelers: string[];
  startDate: string;
  endDate: string;
  segments: CitySegment[];
  days: Day[];
  places: Place[];         // shared library for reusable refs
  bookings: Booking[];     // trip-level (e.g. international flight)
}
```

**Design rules:**
- `TriName.zh` and `TriName.ja` always required; `en` optional (not every place has a real English name).
- Every entity has a **stable `id`** — future comments and AI edits anchor here.
- `Activity.place` is a union: inline `Place` (one-off) or `{ ref }` pointing to `Trip.places` (reused across days, e.g. hotel).
- Hotel check-ins appear on the day they happen (day-level `bookings`). International flights appear at trip level.

## 6. Routes & rendering

| Route | Contents |
|---|---|
| `/` | Trip header, travelers, segments overview, master timeline |
| `/[segment]` | e.g. `/tokyo` — segment header with vertical JP name accent, list of days in that segment |
| `/[segment]/[day]` | e.g. `/tokyo/day-01` — day header with hanko day seal, intro prose, activities timeline, day-level bookings |

All pages are statically rendered (SSG) via `generateStaticParams`. No dynamic server endpoints in v1.

## 7. UI components

| Component | Responsibility |
|---|---|
| `TriName` | Renders `{zh, en?, ja}` — zh primary (serif for headings, sans for body), en + ja stacked underneath in smaller muted text. `en` omitted gracefully. |
| `AddressLinks` | Stacked `address.full` in zh / en? / ja + two thin-bordered pill buttons: **Apple 地图**, **Google 地图**. Query uses the Japanese string for best geocoding. `target="_blank" rel="noreferrer"`. |
| `DaySeal` | Red square "hanko" stamp with day number in serif — one per day card. |
| `DayCard` | Day summary row for timeline and segment pages. |
| `ActivityItem` | Time range + `TriName` + optional place kind icon + notes. |
| `BookingItem` | Kind badge + title + from/to TriNames + times + optional address. |
| `SegmentNav` | Thin top nav, segment names in zh + subtle ja underline. |
| `Timeline` | Master timeline on home: day-by-day one-liners grouped by segment. |

## 8. Visual design language

**Modern editorial with restrained Japanese cues.** Not kitschy — no cherry blossoms, no torii icons plastered everywhere.

- **Typography-led.** Large serif headings (Noto Serif JP / Shippori-style Mincho) mixed with clean sans body. Mincho serif immediately reads "Japanese editorial" without icons.
- **Palette:** warm paper off-white base `#FAF7F2`, near-black ink `#1A1A1A`, one muted accent (deep indigo `#2E3A59` or vermillion `#C8463C`) used sparingly on links/CTAs.
- **Generous vertical whitespace** — magazine rhythm, not dashboard density.
- **Hairline dividers** (1px warm grey) between sections — printed guidebook layout.
- **Hanko seal motif** for day numbers — small red square stamp, one per day card.
- **Vertical JP accent text** — `writing-mode: vertical-rl` for the Japanese city name beside segment titles. One accent per page max.
- **Motion:** minimal — subtle fade-up on scroll. No parallax.
- **Dark mode:** not v1.

## 9. Map links

Addresses render as clickable. For every address:

- **Apple Maps:** `https://maps.apple.com/?q={encodeURIComponent(address.full.ja)}`
- **Google Maps:** `https://www.google.com/maps/search/?api=1&query={encodeURIComponent(address.full.ja)}`

Both open in a new tab. Japanese address string used for the query — best geocoding precision in Japan.

## 10. i18n strategy

- UI chrome (buttons, labels like "第一天", "酒店", "行程") lives in `src/lib/strings.ts` as a simple flat zh-only dict. No i18n framework — too few strings to justify.
- Proper nouns in content live as `TriName` objects. `<TriName>` component handles display.
- `<html lang="zh-Hans">`. Font stack via `next/font` with `font-serif-jp` (Noto Serif JP, for display), `font-zh` (Noto Sans SC, body Chinese), `font-ja` (Noto Sans JP, for Japanese annotations).

## 11. Deployment

**Target:** Azure Web App (Linux, Code mode), Node 20.

**Build output:** Next.js `standalone` mode → `.next/standalone/server.js` + `.next/static` + `public/`.

**Startup command:** `node server.js`.

**App settings:** `WEBSITE_NODE_DEFAULT_VERSION=~20`.

**Pipeline (`.github/workflows/azure-deploy.yml`):** on push to `main` →
1. Checkout
2. Setup pnpm + Node 20
3. `pnpm install --frozen-lockfile`
4. `pnpm build`
5. Assemble deploy artifact: copy `.next/static` into `.next/standalone/.next/static`, copy `public` into `.next/standalone/public`
6. `azure/webapps-deploy@v3` with `package: .next/standalone`, auth via `${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}`

User will provide: Azure Web App name, publish profile (or OIDC config if preferred).

## 12. Verification

- `pnpm typecheck` — 0 errors
- `pnpm lint` — 0 errors
- `pnpm build` — succeeds; `.next/standalone/server.js` present
- `pnpm start` → `curl -s localhost:3000 | grep` trip title (zh)
- `curl -s localhost:3000/tokyo/day-01` contains zh title + en/ja proper noun markup + `maps.apple.com` + `google.com/maps` hrefs
- Sample YAML parses and validates against Zod schema

## 13. Forward compatibility (phase 2 hints, not built)

- **Comments/reactions:** every `Day`, `Place`, `Activity`, `Booking` already has `id`. Adding a Postgres table `comments(entity_type, entity_id, ...)` is purely additive.
- **AI chat itinerary edits:** the typed Zod schema is the tool-call contract. The agent's write path can be git-PR-based (edits YAML, opens PR) initially, then DB-backed when reads move off YAML.
- **Expanded bookings:** `Booking` fields are already nullable so new ones (seat, PNR, etc.) are non-breaking additions.
- **Photos:** `Place` and `Day` get an optional `photos?: Photo[]` later; file-based (`/public/photos/...`) or Azure Blob Storage.

## 14. Open items (user-provided)

- Azure Web App name, region, resource group
- Deploy auth: publish profile (simpler) vs OIDC federated identity (no long-lived secret) — default: publish profile
- Real itinerary content — v1 ships with sample placeholder data the user replaces
