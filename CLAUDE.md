# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Trip requirements — read first, keep updated

[`docs/requirements.md`](docs/requirements.md) is the index and decision log (trip basics, night allocation, group composition). The phase-specific requirements live in [`docs/requirements/phase-1-karuizawa.md`](docs/requirements/phase-1-karuizawa.md), [`docs/requirements/phase-2-hokkaido.md`](docs/requirements/phase-2-hokkaido.md), and [`docs/requirements/phase-3-tokyo.md`](docs/requirements/phase-3-tokyo.md). Treat the whole set as the living source of truth for itinerary decisions.

**Before** editing any file under [`src/content/`](src/content/): read the relevant phase file(s) and reconcile the change against every requirement. If the change conflicts with a requirement, stop and flag it to the user — do not silently override.

**Whenever** the user states a new requirement, refines an existing one, resolves an open question, or rules something out: update the matching phase file (or [`docs/requirements/open-questions.md`](docs/requirements/open-questions.md) for cross-phase items) *first*, in the same turn, *before* touching any YAML or other file. Capture requirements immediately so future sessions inherit them.

**Every Google Maps short-link (`maps.app.goo.gl/...`) the user sends must be stored in the matching phase file** against the place it describes, verbatim. Never drop one, never substitute your own. These pins override any address-string search.

If you notice a requirement the YAML violates, surface it rather than quietly "fixing" either side.

## Next.js version notice

This is **Next.js 16** with the App Router. APIs may differ from older training data. When in doubt, consult `node_modules/next/dist/docs/` and heed deprecation notices. See [AGENTS.md](AGENTS.md).

## Commands

```bash
npm install              # install deps
npm run dev              # dev server on :3000
npm run build            # production build → .next/standalone/
npm run start            # run the production build
npm run typecheck        # tsc --noEmit
npm run lint             # ESLint
```

## Travel times

Drive times between places live in a delimited section of `docs/requirements/travel-times.md` (between `## Travel times (auto-generated — do not edit by hand)` and `<!-- /travel-times -->`). Claude populates this by directly querying OSM public services (Nominatim for geocoding, OSRM demo for routing) — no runtime or build-time API calls, no keys, no pipeline script. `src/lib/travel-times.ts` parses the section at build time; `src/lib/content.ts` merges the entries into the returned `Trip` under `travelTimes`; `ActivityItem` renders `→ 下一站 X min · Y km` when a matching pair exists. Ask Claude to refresh the table when the itinerary changes.

## Architecture in one page

A **read-only** Japan-trip itinerary site. UI is Chinese; proper nouns (places, dishes, addresses) render tri-lingually (zh primary + en + ja inline) so users can point their phone at locals.

**Content → schema → render.** The single source of truth is the content tree under [`src/content/`](src/content/): `trip.yaml` (metadata + segments), `bookings.yaml` (trip-level bookings), `places/*.yaml` (places grouped by geographic cluster), and `days/day-NN.yaml` (one file per day). At build time, [`src/lib/content.ts`](src/lib/content.ts) assembles these into a single `Trip` and validates against the Zod schema in [`src/lib/schema.ts`](src/lib/schema.ts). Pages are fully statically rendered via `generateStaticParams` — there is no runtime API, DB, or auth.

**Key entities** (all have stable `id` for future comments / AI edits):

- `Trip` → `segments[]` (cities) → `days[]` (referenced by id)
- `Day` → `activities[]` + day-level `bookings[]`
- `Activity.place` is either inline `Place` OR `{ ref: "place-id" }` into `Trip.places` (shared library, e.g. the hotel you return to each night). Use `resolvePlace()`.
- `TriName = { zh, en?, ja }` — `en` optional, others required. Always render via the `<TriName>` component.

**Routes:**

- `/` — home, timeline, trip-level bookings
- `/[segment]/[day]` — day detail (e.g. `/tokyo/day-01`)

**Visual language** is editorial/Japanese-restrained (not kitsch): warm paper `#FAF7F2` base, Noto Serif JP for headings, hanko (red square seal) for day numbers, `writing-mode: vertical-rl` accents for Japanese text. Defined in [`src/app/globals.css`](src/app/globals.css) via Tailwind v4 `@theme inline`.

**Map links** — every `Address` renders three buttons: Apple Maps and Google Maps (queried with the **Japanese** address string) plus Gaode / 高德地图 (queried with the **Chinese** address string, for Chinese-app users). All queries are prefixed with `日本 ` to disambiguate the country. See [`src/lib/maps.ts`](src/lib/maps.ts).

## Deployment

Azure Web App **`jp-plan`** (`jp-plan.azurewebsites.net`) — **Linux, Container mode**. [`.github/workflows/azure-deploy.yml`](.github/workflows/azure-deploy.yml) on push to `main` builds the [`Dockerfile`](Dockerfile) multi-stage image, pushes to **GHCR** (`ghcr.io/<owner>/jp-plan-2026:<sha>`), and points the Web App at the new tag via `azure/webapps-deploy@v3`. The container listens on `PORT=8080`; the Web App must have `WEBSITES_PORT=8080` in its app settings. Next.js `output: "standalone"` in [`next.config.ts`](next.config.ts) produces the minimal `server.js` bundle the runner stage copies in.

## Editing guidelines

- **Adding / editing a single day** = edit `src/content/days/day-NN.yaml` only. The file's top-level key is `day:`; schema fields match the `Day` Zod type. Day-level `bookings:` live inside the day file.
- **Adding a new place** = put it in the matching `src/content/places/<shard>.yaml` (geographic cluster). Transit hubs referenced by multiple phases go in `places/00-transit.yaml`. Place `id`s must be globally unique — the loader fails the build on collisions. Day files reference places via `{ ref: "place-id" }`.
- **Adding a trip-level booking** (flight, trans-segment shinkansen, hotel master entry) = edit `src/content/bookings.yaml`. Day-level bookings stay inside the matching day file.
- **Adding a segment or changing trip metadata** = edit `src/content/trip.yaml`. This file now only holds metadata (`title_zh`, `travelers`, `startDate`, `endDate`) and `segments:`. The build will fail loudly if the schema is violated.
- **Adding a UI string** → `src/lib/strings.ts` (zh only).
- **Never** render a proper noun without `<TriName>` — skipping annotations defeats the purpose of the site.
- **Every address** gets `<AddressLinks>` — not a plain text rendering.
- **When a phase file under `docs/requirements/` has a specific Google Maps link for a place** (e.g. `[Google Maps](https://maps.app.goo.gl/...)`), mirror it onto **both** the matching `Place.googleMapsUrl` field **and** any `Booking.googleMapsUrl` that uses the same address. The user-verified pin overrides the address-string search that the Google button would otherwise generate. Apple Maps and Gaode still derive from the address. Bookings render via `BookingItem` which only honors `booking.googleMapsUrl`, not the library Place pin — so the mirror must be on the booking itself, not just the Place.
- **Keep render pure.** React 19 compiler flags reassigned variables during render. Precompute indices/maps before the JSX (see `Timeline.tsx` for the pattern).

## Design spec

Full design: [`docs/superpowers/specs/2026-04-19-jp-itinerary-design.md`](docs/superpowers/specs/2026-04-19-jp-itinerary-design.md). Includes rationale for tri-lingual labels, phase-2 hints (comments, AI chat, Postgres migration), and the YAGNI list.

## Browser screenshots — always under `.playwright/`

When taking browser screenshots with the Playwright MCP (`mcp__playwright__browser_take_screenshot`), **always pass a `filename` that begins with `.playwright/`** — e.g. `.playwright/home-viewport.jpeg`. Never let a screenshot land at the repo root or any other path. The `.playwright/` folder is gitignored; do not commit screenshot artifacts.
