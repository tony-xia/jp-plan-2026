# jp-plan-2026

日本之旅 2026 — a read-only itinerary site for a Japan trip with friends from China. Chinese UI, with English and Japanese shown inline for places, dishes, and addresses so they can be pointed at locals. Every address links out to Apple Maps and Google Maps.

## Stack

Next.js 15 (App Router, SSG, `output: "standalone"`), TypeScript, Tailwind CSS 4, Zod-validated YAML content. Deployed to Azure Web App (Linux, Code) via GitHub Actions.

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

Target: Azure Web App **`jpplan`** (`jpplan.azurewebsites.net`), Linux, Code.

### One-time Azure setup

In the Azure portal for the Web App:

1. **Configuration → General settings → Stack**: Node 20 LTS
2. **Configuration → General settings → Startup Command**: `node server.js`
3. **Configuration → Application settings**: `WEBSITE_NODE_DEFAULT_VERSION=~20`
4. **Deployment Center → Manage publish profile → Download publish profile**

### GitHub secret

Add the publish-profile XML as a repo secret named `AZURE_WEBAPP_PUBLISH_PROFILE`.

### Pipeline

Push to `main` triggers [`.github/workflows/azure-deploy.yml`](.github/workflows/azure-deploy.yml): install → typecheck → lint → build → assemble standalone artifact → deploy.

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
