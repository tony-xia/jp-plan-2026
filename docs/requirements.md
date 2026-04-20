# Trip Requirements

**Travel times** between places are stored in [`requirements/travel-times.md`](requirements/travel-times.md) — an auto-generated table maintained by Claude (Nominatim + OSRM). The Next.js build parses that file to surface drive times under each activity. Ask Claude to refresh the table when the itinerary changes.

This list is the source of truth for trip-planning decisions. The itinerary in [`src/content/trip.yaml`](../src/content/trip.yaml) must always reflect these requirements. Whenever a new requirement is stated or an existing one changes, update this file first, then update the YAML.

> 🗂️ **Filename note (2026-04-20 restructure):** the phase files are still named `phase-1-karuizawa.md` / `phase-2-hokkaido.md` / `phase-3-tokyo.md` after the original three-phase plan. With Karuizawa parked, the **two live phases are now Hokkaido + Tokyo**; the phase-number in the filename no longer matches the phase-number in this doc. Filenames will be renormalized in a follow-up pass.

## Contents

- [`requirements/phase-2-hokkaido.md`](requirements/phase-2-hokkaido.md) — **Phase 1 (live).** Day-1 Haneda → Hakodate Shinkansen + clockwise drive loop Hakodate → Sapporo → Wakkanai → Abashiri → Biei → Otaru → Toya.
- [`requirements/phase-3-tokyo.md`](requirements/phase-3-tokyo.md) — **Phase 2 (live).** Tokyo base area, car-enthusiast requirement, antique markets.
- [`requirements/phase-1-karuizawa.md`](requirements/phase-1-karuizawa.md) — **PARKED 2026-04-20.** Retained for reference; no longer part of the itinerary.
- [`requirements/travel-times.md`](requirements/travel-times.md) — auto-generated drive-time table
- [`requirements/open-questions.md`](requirements/open-questions.md) — cross-phase open questions

## Trip basics

- **Travelers:** Tony, AZhu, Crystal, Du
- **Dates:** 2026-12-27 → 2027-01-18 (23 days, 22 nights)
- **Two phases (2026-04-20 restructure):** Phase 1 = **Hokkaido** (Day-1 lands at Haneda and heads straight to Hakodate by Shinkansen); Phase 2 = **Tokyo**. Karuizawa is **parked** — user decision 2026-04-20 to simplify to two phases and redirect those 3 nights into Hokkaido.

## Confirmed night allocation

### Current plan (2026-04-20, Karuizawa parked + 3 nights redirected to Hokkaido) — ✅ sums to 22

| Phase | Nights | Breakdown |
|---|---|---|
| Phase 1 (Hokkaido) | **18** | Hakodate N₁ · Sapporo N₂ (car pickup) · Wakkanai N₃ · Abashiri N₄ · Biei N₅ · Otaru N₆ · Windsor Toya N₇ — individual N's to be set (see open questions) |
| Phase 2 (Tokyo) | 4 | 2027-01-14 → 2027-01-18, unchanged |
| **Total** | **22** | |

> ⚠️ **Open: where do the 3 extra Hokkaido nights go?** The previous clockwise plan ran Hakodate 2 · Sapporo 3 · Wakkanai 1 · Abashiri 2 · Biei 1 · Otaru 3 · Toya 2 = 14 (requirements-table tally; YAML had 15 via an extra Hakodate night already absorbed). The 3 new nights are unallocated — see [`requirements/open-questions.md`](requirements/open-questions.md) for candidates (Hakodate jetlag-absorber, Wakkanai weather-buffer, Abashiri Shiretoko/Utoro day, Rumoi mid-drive split, etc.). User decides before the YAML refactor.

> ✅ **Windsor Toya availability + cost (checked 2026-04-20 on Booking.com):** NYE-peak window 2027-01-01 → 01-03 shows **every room type "Not available"** for 2 rooms × 4 adults — essentially sold out on Booking.com. Late-Phase-1 window 2027-01-10 → 01-12 is **open with the cheapest 2-room × 2-night combo at AUD 1,347** (2 × Premium Queen Sea Side, room-only; breakfast +AUD 43 each). The end-of-Hokkaido slot is validated on both cost and availability. Direct-booking (Vignette / Hotel Story) is the confirm-step before locking.

**Rationale for restructure (user, 2026-04-20, two successive decisions):**

1. **Clockwise drive loop (driver-side sea views).** Japan drives on the left. In the old anti-clockwise route, Abashiri → Wakkanai put the Sea of Okhotsk on the **passenger side** — the driver misses the coast. Flipping to **clockwise** (Sapporo → Wakkanai up the Sea of Japan coast; Wakkanai → Cape Sōya → Abashiri eastward along the Okhotsk top) keeps the ocean on the **driver's side** throughout the coastal legs.
2. **Toya at end of Hokkaido (cost + availability).** Windsor + Toya-area hotels are priced up for 元旦 (first few days of January) — and Booking.com confirmed 2026-04-20 that the NYE window (Jan 1–3) is essentially **not bookable** for 2 rooms × 4 adults. Moving the Toya stay to the **end of Hokkaido** pushes it ~10 days past the peak and into full availability.
3. **Drop Karuizawa; Day-1 straight to Hakodate (2026-04-20, later-same-day decision).** User chose to park Karuizawa entirely rather than operate three phases. **Day-1 = Haneda morning arrival → Tokyo Station → Tōhoku/Hokkaido Shinkansen → 新函館北斗 → JR 函館ライナー → Hakodate.** Rationale: simpler itinerary, eliminates the Phase-1→Phase-2 cross-country transit day, redirects 3 Karuizawa nights into Hokkaido for more depth. Karuizawa's must-visits (Peepolo Norikura, Kurumayama, Karuizawa Kogen Church, Kurofu-yama drone day) are **dropped from this trip** — revisit in a future trip or flag to user if they want to carve a side-trip.
4. **Hotel continuity.** All Hokkaido stays previously shortlisted (Hakodate Airbnbs, Surfeel Wakkanai, Windsor Toya, Hotel Neuschloss Otaru candidate) remain in play — only their **dates** shift earlier (Hakodate arrival is now Dec 27 evening, not Dec 30).

## Group composition (applies to every phase)

- 4 travelers: **2 gentlemen + 2 ladies** → **always need 2 rooms / 2 bedrooms** (no single-room option). This drives hotel vs. Airbnb cost comparisons throughout the trip.
