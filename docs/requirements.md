# Trip Requirements

**Travel times** between places are stored in [`requirements/travel-times.md`](requirements/travel-times.md) — an auto-generated table maintained by Claude (Nominatim + OSRM). The Next.js build parses that file to surface drive times under each activity. Ask Claude to refresh the table when the itinerary changes.

This list is the source of truth for trip-planning decisions. The itinerary in [`src/content/trip.yaml`](../src/content/trip.yaml) must always reflect these requirements. Whenever a new requirement is stated or an existing one changes, update this file first, then update the YAML.

## Contents

- [`requirements/phase-1-karuizawa.md`](requirements/phase-1-karuizawa.md) — Karuizawa (preferred) and Fuji fallback, Day-1 arrival, Day-4 exit transit
- [`requirements/phase-2-hokkaido.md`](requirements/phase-2-hokkaido.md) — clockwise drive loop: Hakodate → Sapporo → Wakkanai → Abashiri → Biei → Otaru → Toya
- [`requirements/phase-3-tokyo.md`](requirements/phase-3-tokyo.md) — Tokyo base area, car-enthusiast requirement, antique markets
- [`requirements/travel-times.md`](requirements/travel-times.md) — auto-generated drive-time table
- [`requirements/open-questions.md`](requirements/open-questions.md) — cross-phase open questions

## Trip basics

- **Travelers:** Tony, AZhu, Crystal, Du
- **Dates:** 2026-12-27 → 2027-01-18 (23 days, 22 nights)
- **Three phases:** Phase 1 = **Karuizawa (preferred)** with **Fuji as fallback** if Karuizawa accommodation is too expensive; Phase 2 = Hokkaido; Phase 3 = Tokyo.

## Confirmed night allocation

Two competing allocations below — one confirmed historic (2026-04-19), one proposed (2026-04-20) with the clockwise-roadtrip restructure. **Phase 2 total is locked at 14 nights; the proposed plan currently sums to 12 and has a 2-night gap to resolve (see open questions).**

### Historic (2026-04-19, anti-clockwise) — what `trip.yaml` currently reflects

| Phase | Nights | Breakdown |
|---|---|---|
| Phase 1 (Karuizawa / Fuji) | 3 | 2026-12-27 → 2026-12-30 |
| Phase 2 (Hokkaido) | **14** | Hakodate 2 · Toyako / Windsor 2 · Biei 1 · Abashiri 2 · Wakkanai 1 · Otaru 2 + Neuschloss 1 · **Sapporo 3** |
| Phase 3 (Tokyo) | 5 | 2027-01-14 → 2027-01-18 (incl. Sapporo→Tokyo transit on arrival day) |
| **Total** | **22** | |

### Confirmed (2026-04-20, clockwise restructure with A+B gap-close) — ✅ sums to 22

| Phase | Nights | Breakdown |
|---|---|---|
| Phase 1 (Karuizawa / Fuji) | 3 | 2026-12-27 → 2026-12-30 |
| Phase 2 (Hokkaido) | **14** | Hakodate 2 · **Sapporo 3 (car pickup)** · Wakkanai 1 · Abashiri 2 · Biei 1 · **Otaru 3** · **Windsor Toya 2 (end)** |
| Phase 3 (Tokyo) | 5 | unchanged |
| **Total** | **22** | |

> ✅ **Night-count gap closed 2026-04-20**: user chose **A + B** — Sapporo +1 (3 front-end nights) and Otaru +1 (3 nights). Sapporo +1 restores the full must-visit list (Shiroi Koibito, Hokudai, 二条, Kani Honke, NANDA, 頭大仏, 大倉山, Moiwa, ROYCE' Town — pick based on time, not forced compression). Otaru +1 restores the Rusutsu two-route loop + drone-day weather retry buffer; optional Neuschloss re-add is back on the table for the drone-day night.

> ✅ **Windsor Toya availability + cost (checked 2026-04-20 on Booking.com):** NYE-peak window 2027-01-01 → 01-03 shows **every room type "Not available"** for 2 rooms × 4 adults — essentially sold out on Booking.com. Late-Phase-2 window 2027-01-10 → 01-12 is **open with the cheapest 2-room × 2-night combo at AUD 1,347** (2 × Premium Queen Sea Side, room-only; breakfast +AUD 43 each). The restructure is validated on both cost and availability. Direct-booking (Vignette / Hotel Story) is the confirm-step before locking.

**Rationale for restructure (user, 2026-04-20):**

1. **Driving direction → sea-side views.** Japan drives on the left. In the old anti-clockwise route, Abashiri → Wakkanai put the Sea of Okhotsk on the **passenger side** — the driver misses the coast. Flipping to **clockwise** (Sapporo → Wakkanai up the Sea of Japan coast; Wakkanai → Cape Sōya → Abashiri eastward along the Okhotsk top) keeps the ocean on the **driver's side** throughout the coastal legs.
2. **Lake Toya cost + availability.** Windsor + Toya-area hotels are priced up for 元旦 (first few days of January) — and Booking.com confirmed 2026-04-20 that the NYE window (Jan 1–3) is essentially **not bookable** for 2 rooms × 4 adults. Moving the Toya stay to the **end of Phase 2** pushes it ~10 days past the peak and into full availability (cheapest 2-rm × 2-night at AUD 1,347 for Jan 10–12).
3. **Hotel continuity.** All previously shortlisted stays (Hakodate Airbnbs, Surfeel Wakkanai, Windsor Toya) remain in the plan — only their **dates** shift. With the A+B gap-close giving Otaru 3 nights, **Hotel Neuschloss Otaru is back in consideration** for 1 of those nights (the drone-day / 祝津 night) if pricing holds.

## Group composition (applies to every phase)

- 4 travelers: **2 gentlemen + 2 ladies** → **always need 2 rooms / 2 bedrooms** (no single-room option). This drives hotel vs. Airbnb cost comparisons throughout the trip.
