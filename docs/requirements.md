# Trip Requirements

**Travel times** between places are stored in [`requirements/travel-times.md`](requirements/travel-times.md) — an auto-generated table maintained by Claude (Nominatim + OSRM). The Next.js build parses that file to surface drive times under each activity. Ask Claude to refresh the table when the itinerary changes.

This file is the source of truth for trip-planning decisions. The itinerary in [`src/content/`](../src/content/) must always reflect these requirements. Whenever a new requirement is stated or an existing one changes, update the matching phase file first, then update the YAML.

## Contents

- [`requirements/phase-1-hokkaido.md`](requirements/phase-1-hokkaido.md) — **Phase 1 (Hokkaido, 20 nights).** Day-1 Haneda → Hakodate Shinkansen + clockwise self-drive loop Hakodate → Sapporo → Wakkanai → Abashiri → (Biei day-stop) → Otaru → Toya.
- [`requirements/phase-2-tokyo.md`](requirements/phase-2-tokyo.md) — **Phase 2 (Tokyo, 4 nights).** Shibuya-area base, car-enthusiast day, Oedo antique market.
- [`requirements/travel-times.md`](requirements/travel-times.md) — auto-generated drive-time table.
- [`requirements/open-questions.md`](requirements/open-questions.md) — cross-phase open items (Day-1 Shinkansen booking mechanics, gear/electronics packing list).

## Trip basics

- **Travelers:** Tony, AZhu, Crystal, Du — **2 gentlemen + 2 ladies → always 2 rooms / 2 bedrooms** (no single-room option). Drives hotel vs. Airbnb cost comparisons throughout.
- **Dates:** 2026-12-26 → 2027-01-19 (25 days, 24 nights).
- **Shape:** two phases — Phase 1 = **Hokkaido** (Day-1 lands at Haneda and goes straight to Hakodate by Shinkansen, single Sapporo stay covers NYE + NYD, clockwise self-drive loop starts day-10, Windsor Toya is the final Hokkaido stay); Phase 2 = **Tokyo** via direct 特急 北斗 + 北海道新幹線 Toya → Tokyo. Karuizawa is **parked** for this trip.

## Locked night allocation (✅ sums to 24)

| City | Nights | Dates (check-in → check-out) | Day IDs | Lodging |
|---|---|---|---|---|
| Hakodate | **2** | 2026-12-26 → 2026-12-28 | day-01, day-02 | ✅ **BOOKED** — Airbnb SMALL TOWN HOTEL Hakodate Bldg 1 (listing 22116280) |
| Sapporo | **7** | 2026-12-28 → 2027-01-04 · NYE + NYD | day-03 → day-09 | Premier Hotel -Tsubaki- Sapporo (ex-Renaissance, Marriott) |
| Wakkanai | **2** | 2027-01-04 → 2027-01-06 | day-10, day-11 | ✅ **BOOKED** — Surfeel Hotel Wakkanai |
| Abashiri | **3** | 2027-01-06 → 2027-01-09 | day-12, day-13, day-14 | ✅ **BOOKED** — Dormy Inn Abashiri (天然温泉 天都の湯) |
| Biei | 0 | day-stop 2027-01-09 | (day-15) | — (drive-through en route to Otaru) |
| Otaru | **3** | 2027-01-09 → 2027-01-12 | day-15, day-16, day-17 | Airbnb — entire building (listing 1308367449883578040) × 2 nights + Hotel Neuschloss 小樽 × 1 night |
| Toya | **3** | 2027-01-12 → 2027-01-15 | day-18, day-19, day-20 | The Windsor Hotel TOYA, Vignette Collection |
| Tokyo | **4** | 2027-01-15 → 2027-01-19 | day-21 → day-24 | (candidate) Airbnb — Asakusa/SkyTree 4BR (listing 1489650534115740682) |
| **Total** | **24** | | day-01 → day-25 | |

## Clockwise drive-loop rationale

1. **Ocean on driver's side.** Japan drives on the left. Clockwise (Sapporo → Wakkanai up Sea of Japan → Cape Sōya → Okhotsk coast east to Abashiri) keeps the sea on the driver's side on every coastal leg.
2. **Toya at the end of Hokkaido.** Windsor + Toya hotels are fully sold out / price-surged for NYE+NYD on Booking.com for 2 rooms × 4 adults; the late-Phase-1 window (2027-01-10 → 01-12) is open with the cheapest 2-room × 2-night combo **AUD 1,347** (Premium Queen Sea Side × 2, room-only). Moving Toya ~10 days past the peak gives us availability + substantially lower rate.
3. **Day-1 direct to Hakodate** via Haneda → Tokyo Station → Tōhoku/Hokkaido Shinkansen はやぶさ → 新函館北斗 → JR 函館ライナー → Hakodate. Simpler than adding a Tokyo night; eliminates a Phase-1 → Phase-2 cross-country transit day.
4. **Rental-car window.** Pickup **day-3 afternoon** (2026-12-28) at a Sapporo-city branch, after 特急 北斗 arrival from Hakodate. Dropoff **day-18 morning** (2027-01-12) at the **same Sapporo branch**, before boarding 特急 北斗 to 洞爺駅. Rental duration ~16 days (Dec 28 → Jan 12). During the Sapporo week the car stays parked except for optional day-trips (ROYCE' Town, 頭大佛, 大倉山). Drive loop itself begins **day-10 morning** (2027-01-04).

## Decision log (chronological, trimmed)

- **2026-04-20** — Karuizawa parked; Phase 1 restructured to clockwise loop; Day-1 arrives Hakodate via Haneda + Shinkansen; Windsor Toya moved to end of Hokkaido.
- **2026-04-21** — Hotel shortlists built; provisional picks.
- **2026-04-23** — **Dormy Inn Abashiri BOOKED** (2027-01-06 → 2027-01-09, 2 rooms × 3 nights). Hokkaido accommodation tax applies.
- **2026-04-23** — **Surfeel Hotel Wakkanai BOOKED** (2027-01-04 → 2027-01-06, 2 rooms × 2 nights). Hokkaido accommodation tax applies — pay on arrival.
- **2026-04-23** — **Hakodate Airbnb 22116280 BOOKED** (2026-12-26 → 2026-12-28, entire 4LDK, 4 guests). ⚠️ **Hokkaido accommodation tax** effective 2026-04-01: per-person-per-night, paid at check-in, not included in prepaid fare. Tiers (per person per night): < ¥6,000 exempt; ¥6,000–¥19,999 → ¥100; ¥20,000–¥49,999 → ¥200; ≥ ¥50,000 → ¥500. Applies to every Hokkaido stay — budget line-item across Hakodate / Sapporo / Wakkanai / Abashiri / Otaru / Toya (8 + 28 + 8 + 12 + 12 + 12 = 80 person-nights in Hokkaido).
- **2026-04-22** — Final structural pass: Sapporo return leg dropped (was 2 nights); its purpose (year-end-closure items like ROYCE' Town, 頭大佛, 大倉山, 白い恋人 illumination revisit) now absorbed into the 7-night Sapporo front week. Freed 2 nights redistributed: **Abashiri +1 (2→3)** for a dedicated 知床 Utoro day / weather buffer; **Toya +1 (2→3)** for a proper Windsor spa + Silo/Usu/Noboribetsu program. Rental-car pickup moved earlier to **day-3 arrival afternoon** (was day-10). Day-21 Tokyo transit is now **direct** via 特急 北斗 洞爺 → 新函館北斗 + 新幹線, not looping through Sapporo. Hotels locked: Hakodate Airbnb 22116280, Sapporo Premier Hotel -Tsubaki-, Wakkanai Surfeel, Abashiri Dormy Inn, Otaru Airbnb 1308367449883578040 + Neuschloss split, Toya Windsor.
