# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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

## Architecture in one page

A **read-only** Japan-trip itinerary site. UI is Chinese; proper nouns (places, dishes, addresses) render tri-lingually (zh primary + en + ja inline) so users can point their phone at locals.

**Content → schema → render.** The single source of truth is [`src/content/trip.yaml`](src/content/trip.yaml). At build time, [`src/lib/content.ts`](src/lib/content.ts) reads it and validates against the Zod schema in [`src/lib/schema.ts`](src/lib/schema.ts). Pages are fully statically rendered via `generateStaticParams` — there is no runtime API, DB, or auth.

**Key entities** (all have stable `id` for future comments / AI edits):

- `Trip` → `segments[]` (cities) → `days[]` (referenced by id)
- `Day` → `activities[]` + day-level `bookings[]`
- `Activity.place` is either inline `Place` OR `{ ref: "place-id" }` into `Trip.places` (shared library, e.g. the hotel you return to each night). Use `resolvePlace()`.
- `TriName = { zh, en?, ja }` — `en` optional, others required. Always render via the `<TriName>` component.

**Routes:**

- `/` — home, timeline, trip-level bookings
- `/[segment]` — city page (e.g. `/tokyo`)
- `/[segment]/[day]` — day detail (e.g. `/tokyo/day-01`)

**Visual language** is editorial/Japanese-restrained (not kitsch): warm paper `#FAF7F2` base, Noto Serif JP for headings, hanko (red square seal) for day numbers, `writing-mode: vertical-rl` accents for Japanese text. Defined in [`src/app/globals.css`](src/app/globals.css) via Tailwind v4 `@theme inline`.

**Map links** — every `Address` renders three buttons: Apple Maps and Google Maps (queried with the **Japanese** address string) plus Gaode / 高德地图 (queried with the **Chinese** address string, for Chinese-app users). All queries are prefixed with `日本 ` to disambiguate the country. See [`src/lib/maps.ts`](src/lib/maps.ts).

## Deployment

Azure Web App **`jp-plan`** (`jp-plan.azurewebsites.net`) — **Linux, Container mode**. [`.github/workflows/azure-deploy.yml`](.github/workflows/azure-deploy.yml) on push to `main` builds the [`Dockerfile`](Dockerfile) multi-stage image, pushes to **GHCR** (`ghcr.io/<owner>/jp-plan-2026:<sha>`), and points the Web App at the new tag via `azure/webapps-deploy@v3`. The container listens on `PORT=8080`; the Web App must have `WEBSITES_PORT=8080` in its app settings. Next.js `output: "standalone"` in [`next.config.ts`](next.config.ts) produces the minimal `server.js` bundle the runner stage copies in.

## Editing guidelines

- **Adding a day / place / booking** = edit `trip.yaml` only. The build will fail loudly if the schema is violated.
- **Adding a UI string** → `src/lib/strings.ts` (zh only).
- **Never** render a proper noun without `<TriName>` — skipping annotations defeats the purpose of the site.
- **Every address** gets `<AddressLinks>` — not a plain text rendering.
- **Keep render pure.** React 19 compiler flags reassigned variables during render. Precompute indices/maps before the JSX (see `Timeline.tsx` for the pattern).

## Design spec

Full design: [`docs/superpowers/specs/2026-04-19-jp-itinerary-design.md`](docs/superpowers/specs/2026-04-19-jp-itinerary-design.md). Includes rationale for tri-lingual labels, phase-2 hints (comments, AI chat, Postgres migration), and the YAGNI list.
