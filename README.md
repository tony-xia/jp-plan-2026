# jp-plan-2026

日本之旅 2026 — a read-only itinerary site for a Japan trip with friends from China. Chinese UI, with English and Japanese shown inline for places, dishes, and addresses so they can be pointed at locals. Every address links out to Apple Maps and Google Maps.

## Stack

Next.js 16 (App Router, SSG, `output: "standalone"`), TypeScript, Tailwind CSS 4, Zod-validated YAML content. Deployed as a Docker image to Azure Web App (Linux, Container) via GitHub Actions.

## Local development

```bash
nvm use                  # Node 20
npm install
npm run dev              # http://localhost:3000
```

Scripts:

| | |
|---|---|
| `npm run dev` | Next dev server |
| `npm run build` | Production build → `.next/standalone/` |
| `npm run start` | `next start` (prod mode) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |

## Editing the itinerary

All content lives in [`src/content/trip.yaml`](src/content/trip.yaml). The schema is enforced at build time by Zod — see [`src/lib/schema.ts`](src/lib/schema.ts). Proper nouns use a `TriName` shape:

```yaml
name:
  zh: 浅草寺
  en: Sensō-ji
  ja: 浅草寺
```

`zh` and `ja` are required; `en` is optional. IDs (`day-01`, `park-hyatt-tokyo`, …) must be stable — they anchor future features like comments.

## Deployment

Target: Azure Web App **`jp-plan`** (`jp-plan.azurewebsites.net`) — **Linux, Container** mode. Image hosted on **GitHub Container Registry** (GHCR).

### One-time Azure setup

In the Azure portal for the Web App:

1. **Deployment Center → Source**: *Container Registry* → *GitHub Container Registry* (or "Private Registry" pointing at `https://ghcr.io`).
2. **Configuration → Application settings**:
   - `WEBSITES_PORT = 8080` (the container listens on 8080)
   - `WEBSITES_ENABLE_APP_SERVICE_STORAGE = false`
3. If the GHCR package is **private**, also set:
   - `DOCKER_REGISTRY_SERVER_URL = https://ghcr.io`
   - `DOCKER_REGISTRY_SERVER_USERNAME = <your-github-username>`
   - `DOCKER_REGISTRY_SERVER_PASSWORD = <PAT with read:packages>`
   Simpler alternative: make the GHCR package **public** (Packages → jp-plan-2026 → Package settings → Change visibility → Public) and skip the creds.
4. **Deployment Center → Manage publish profile → Download publish profile**.

### GitHub secret

Add the publish-profile XML as a repo secret named `AZURE_WEBAPP_PUBLISH_PROFILE`. `GITHUB_TOKEN` (auto-provided) is used to push to GHCR — no separate registry secret needed.

### Pipeline

Push to `main` triggers [`.github/workflows/azure-deploy.yml`](.github/workflows/azure-deploy.yml): install → typecheck → lint → build Docker image from [`Dockerfile`](Dockerfile) → push `ghcr.io/<owner>/jp-plan-2026:<sha>` and `:latest` → `azure/webapps-deploy@v3` points the Web App at the new `<sha>` tag.

### Local Docker test

```bash
docker build -t jp-plan .
docker run --rm -p 8080:8080 jp-plan
# open http://localhost:8080
```

## Project layout

```
src/
  app/
    layout.tsx                  Root layout, lang=zh-Hans, fonts
    page.tsx                    Home (timeline, travelers, trip-level bookings)
    [segment]/page.tsx          City segment (Tokyo, Kyoto, ...)
    [segment]/[day]/page.tsx    Day detail
    globals.css                 Warm paper palette, hanko seal, vertical-ja
  components/
    TriName, AddressLinks, DaySeal, DayCard, ActivityItem, BookingItem,
    SegmentNav, Timeline
  lib/
    schema.ts                   Zod schema + types
    content.ts                  YAML loader with build-time validation
    maps.ts                     Apple/Google Maps URL builders
    strings.ts                  Chinese UI string dict
  content/
    trip.yaml                   The itinerary
```

Design spec: [`docs/superpowers/specs/2026-04-19-jp-itinerary-design.md`](docs/superpowers/specs/2026-04-19-jp-itinerary-design.md).
