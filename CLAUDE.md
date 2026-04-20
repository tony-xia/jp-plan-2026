# CLAUDE.md

Guidance for Claude Code in this repo.

## Trip requirements — source of truth

Index/decision log: [`docs/requirements.md`](docs/requirements.md). Phase files: [`phase-2-hokkaido.md`](docs/requirements/phase-2-hokkaido.md) (live Phase 1), [`phase-3-tokyo.md`](docs/requirements/phase-3-tokyo.md) (live Phase 2). Cross-phase open items: [`open-questions.md`](docs/requirements/open-questions.md).

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

## Misc

- **Design spec**: [`docs/superpowers/specs/2026-04-19-jp-itinerary-design.md`](docs/superpowers/specs/2026-04-19-jp-itinerary-design.md).
- **Playwright screenshots**: `filename` must start with `.playwright/` (gitignored, never committed).
