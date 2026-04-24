# Trip Requirements

**Travel times** between places are stored in [`requirements/travel-times.md`](requirements/travel-times.md) — an auto-generated table maintained by Claude (Nominatim + OSRM). The Next.js build parses that file to surface drive times under each activity. Ask Claude to refresh the table when the itinerary changes.

This file is the source of truth for trip-planning decisions. The itinerary in [`src/content/`](../src/content/) must always reflect these requirements. Whenever a new requirement is stated or an existing one changes, update the matching phase file first, then update the YAML.

## Contents

- [`requirements/phase-1-hokkaido.md`](requirements/phase-1-hokkaido.md) — **Phase 1 (Hokkaido, 20 nights).** Day-1 Haneda → Hakodate Shinkansen + clockwise self-drive loop Hakodate → Sapporo → Wakkanai → Abashiri → (Biei day-stop) → Otaru → Toya.
- [`requirements/phase-2-tokyo.md`](requirements/phase-2-tokyo.md) — **Phase 2 (Tokyo, 4 nights).** Shibuya-area base, car-enthusiast day, Oedo antique market.
- [`requirements/travel-times.md`](requirements/travel-times.md) — auto-generated drive-time table.
- [`requirements/open-questions.md`](requirements/open-questions.md) — cross-phase open items (Day-1 Shinkansen booking mechanics, gear/electronics packing list).

## Trip basics

- **Travelers:** Tony, AZhu, Crystal, Du — 2 gentlemen + 2 ladies → always 2 rooms / 2 bedrooms.
- **Dates:** 2026-12-26 → 2027-01-19 (25 days, 24 nights).
- **Shape:** Phase 1 Hokkaido (Haneda → Hakodate Shinkansen → Sapporo 7N NYE+NYD → clockwise self-drive loop day-10 → Windsor Toya final) → Phase 2 Tokyo via 特急 北斗 + 北海道新幹線. Karuizawa parked.

## Locked night allocation (✅ sums to 24)

| City | Nights | Dates (check-in → check-out) | Day IDs | Lodging |
|---|---|---|---|---|
| Hakodate | **2** | 2026-12-26 → 2026-12-28 | day-01, day-02 | ✅ **BOOKED** — Airbnb SMALL TOWN HOTEL Hakodate Bldg 1 (listing 22116280) |
| Sapporo | **7** | 2026-12-28 → 2027-01-04 · NYE + NYD | day-03 → day-09 | ✅ **BOOKED** — Premier Hotel -Tsubaki- Sapporo (ex-Renaissance, Marriott) |
| Wakkanai | **2** | 2027-01-04 → 2027-01-06 | day-10, day-11 | ✅ **BOOKED** — Surfeel Hotel Wakkanai |
| Abashiri | **3** | 2027-01-06 → 2027-01-09 | day-12, day-13, day-14 | ✅ **BOOKED** — Dormy Inn Abashiri (天然温泉 天都の湯) |
| Biei | 0 | day-stop 2027-01-09 | (day-15) | — (drive-through en route to Otaru) |
| Otaru | **3** | 2027-01-09 → 2027-01-12 | day-15, day-16, day-17 | ✅ **BOOKED** — Grids Premium Hotel Otaru (稻穗 1-3-13, ~9-min walk from JR 小樽駅) |
| Toya | **3** | 2027-01-12 → 2027-01-15 | day-18, day-19, day-20 | ✅ **BOOKED** — The Windsor Hotel TOYA, Vignette Collection |
| Tokyo | **4** | 2027-01-15 → 2027-01-19 | day-21 → day-24 | (candidate) Airbnb — Asakusa/SkyTree 4BR (listing 1489650534115740682) |
| **Total** | **24** | | day-01 → day-25 | |

## Clockwise drive-loop rationale

1. **Ocean on driver's side** on every coastal leg (Japan drives left; clockwise Sapporo → Wakkanai → Cape Sōya → Okhotsk → Abashiri).
2. **Toya at the end** — NYE+NYD windsor sold out / surged; late-Phase-1 window (01-10→01-12) available at AUD 1,347 (2 rooms × 2 nights).
3. **Day-1 direct to Hakodate** via Haneda → Tokyo Station → Shinkansen → 新函館北斗 → 函館ライナー. Eliminates Phase-1/2 cross-country transit day.
4. **Rental window:** pickup day-3 afternoon Sapporo-city branch; dropoff day-18 morning same branch. Loop starts day-10 morning. Car parked during Sapporo week except ROYCE' / 頭大佛 / 大倉山 trips.

## Decision log

- **2026-04-20** — Karuizawa parked; clockwise loop; Day-1 Haneda+Shinkansen to Hakodate; Windsor Toya moved to end.
- **2026-04-21** — Hotel shortlists built.
- **2026-04-22** — Sapporo return leg dropped; +1 to Abashiri (→3), +1 to Toya (→3). Rental pickup moved to day-3. Day-21 Tokyo transit is direct.
- **2026-04-23** — Hakodate Airbnb 22116280, Premier -Tsubaki- Sapporo, Surfeel Wakkanai, Dormy Inn Abashiri all BOOKED.
- **2026-04-24** — Grids Premium Hotel Otaru BOOKED (replaces prior Airbnb+Neuschloss split). Windsor Toya BOOKED.

**⚠️ Hokkaido accommodation tax** effective 2026-04-01: per-person-per-night, paid at check-in, not in prepaid fare. Tiers: < ¥6,000 exempt; ¥6k–¥20k → ¥100; ¥20k–¥50k → ¥200; ≥ ¥50k → ¥500. Applies to all Hokkaido stays (80 person-nights total).
