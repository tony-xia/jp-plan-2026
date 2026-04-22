# Trip Requirements

**Travel times** between places are stored in [`requirements/travel-times.md`](requirements/travel-times.md) — an auto-generated table maintained by Claude (Nominatim + OSRM). The Next.js build parses that file to surface drive times under each activity. Ask Claude to refresh the table when the itinerary changes.

This list is the source of truth for trip-planning decisions. The itinerary in [`src/content/trip.yaml`](../src/content/trip.yaml) must always reflect these requirements. Whenever a new requirement is stated or an existing one changes, update this file first, then update the YAML.

## Contents

- [`requirements/phase-1-hokkaido.md`](requirements/phase-1-hokkaido.md) — **Phase 1.** Day-1 Haneda → Hakodate Shinkansen + clockwise drive loop Hakodate → Sapporo → Wakkanai → Abashiri → Biei → Otaru → Toya.
- [`requirements/phase-2-tokyo.md`](requirements/phase-2-tokyo.md) — **Phase 2.** Tokyo base area, car-enthusiast requirement, antique markets.
- [`requirements/travel-times.md`](requirements/travel-times.md) — auto-generated drive-time table
- [`requirements/open-questions.md`](requirements/open-questions.md) — cross-phase open questions (includes **Gear & electronics** packing list)

## Trip basics

- **Travelers:** Tony, AZhu, Crystal, Du
- **Dates:** 2026-12-26 → 2027-01-19 (25 days, 24 nights) *(2026-04-22 fifth-pass: start pulled 1 day earlier; Hakodate -1; Biei overnight dropped; Sapporo front +4; Sapporo return -1)*
- **Two phases (2026-04-20 restructure):** Phase 1 = **Hokkaido** (Day-1 lands at Haneda and heads straight to Hakodate by Shinkansen); Phase 2 = **Tokyo**. Karuizawa is **parked** — user decision 2026-04-20 to simplify to two phases and redirect those 3 nights into Hokkaido.

## Confirmed night allocation

### Current plan (2026-04-22 fifth-pass — Sapporo front expanded, Hakodate & Biei & return trimmed) — ✅ sums to 24

| Phase | Nights | Breakdown |
|---|---|---|
| Phase 1 (Hokkaido) | **20** | Hakodate 2 · **Sapporo 7 (front, includes NYE + NYD)** · Wakkanai 2 · Abashiri 2 · Biei 0 (day-stop only) · Otaru 3 · Windsor Toya 2 · **Sapporo 2 (return, end of Hokkaido)** |
| Phase 2 (Tokyo) | **4** | 2027-01-15 → 2027-01-19 |
| **Total** | **24** | |

> 🔄 **2026-04-22 fifth-pass changes:** (1) start date pulled 1 day earlier to 2026-12-26 (adds 1 night at the front of the trip); (2) Hakodate reduced from 3 → 2 nights; (3) Biei overnight dropped — Biei becomes a daytime drive-through stop on the Abashiri → Otaru leg only (trees + Blue Pond light-up must fit into that drive-day); (4) Sapporo front grows from 3 → 7 nights (+2 user-requested, +1 moved from Sapporo return, +1 absorbed from the start-date shift); (5) Sapporo return trims from 3 → 2 nights (1 moved to front). Net Hokkaido +1 (was 19 → 20); Tokyo unchanged at 4.

> ✅ **Extra-nights distribution locked (user, 2026-04-20 second pass):** Sapporo +1 (front, for NYE + NYD spread), Wakkanai +1 (weather buffer), Toya +1 initially. Then a third-pass restructure the same day: Sapporo -1 and Toya -1 and Tokyo -1, with **3 new nights added back as a Sapporo return leg AFTER Toya**. Final allocation per table above. Rationale for the return leg: (a) catches 年末年始 closures (ROYCE' Town, 頭大佛, 大倉山, 白い恋人 illumination) that likely miss out in the Dec 31 / Jan 1 front-Sapporo window when many attractions are closed; (b) converts the Toya → Tokyo transit day into two legs (Toya → Sapporo via 特急 北斗, then Sapporo → Tokyo later) so we don't burn a full travel day in one shot; (c) gives flight-out flexibility via 新千歳 as backup if weather closes the Shinkansen.

> ✅ **Windsor Toya availability + cost (checked 2026-04-20 on Booking.com):** NYE-peak window 2027-01-01 → 01-03 shows **every room type "Not available"** for 2 rooms × 4 adults — essentially sold out on Booking.com. Late-Phase-1 window 2027-01-10 → 01-12 is **open with the cheapest 2-room × 2-night combo at AUD 1,347** (2 × Premium Queen Sea Side, room-only; breakfast +AUD 43 each). The end-of-Hokkaido slot is validated on both cost and availability. Direct-booking (Vignette / Hotel Story) is the confirm-step before locking.

**Rationale for restructure (user, 2026-04-20, two successive decisions):**

1. **Clockwise drive loop (driver-side sea views).** Japan drives on the left. In the old anti-clockwise route, Abashiri → Wakkanai put the Sea of Okhotsk on the **passenger side** — the driver misses the coast. Flipping to **clockwise** (Sapporo → Wakkanai up the Sea of Japan coast; Wakkanai → Cape Sōya → Abashiri eastward along the Okhotsk top) keeps the ocean on the **driver's side** throughout the coastal legs.
2. **Toya at end of Hokkaido (cost + availability).** Windsor + Toya-area hotels are priced up for 元旦 (first few days of January) — and Booking.com confirmed 2026-04-20 that the NYE window (Jan 1–3) is essentially **not bookable** for 2 rooms × 4 adults. Moving the Toya stay to the **end of Hokkaido** pushes it ~10 days past the peak and into full availability.
3. **Drop Karuizawa; Day-1 straight to Hakodate (2026-04-20, later-same-day decision).** User chose to park Karuizawa entirely rather than operate three phases. **Day-1 = Haneda morning arrival → Tokyo Station → Tōhoku/Hokkaido Shinkansen → 新函館北斗 → JR 函館ライナー → Hakodate.** Rationale: simpler itinerary, eliminates the Phase-1→Phase-2 cross-country transit day, redirects 3 Karuizawa nights into Hokkaido for more depth. Karuizawa's must-visits (Peepolo Norikura, Kurumayama, Karuizawa Kogen Church, Kurofu-yama drone day) are **dropped from this trip** — revisit in a future trip or flag to user if they want to carve a side-trip.
4. **Hotel continuity.** All Hokkaido stays previously shortlisted (Hakodate Airbnbs, Surfeel Wakkanai, Windsor Toya, Hotel Neuschloss Otaru candidate) remain in play — only their **dates** shift earlier (Hakodate arrival is now Dec 27 evening, not Dec 30).

## Group composition (applies to every phase)

- 4 travelers: **2 gentlemen + 2 ladies** → **always need 2 rooms / 2 bedrooms** (no single-room option). This drives hotel vs. Airbnb cost comparisons throughout the trip.
