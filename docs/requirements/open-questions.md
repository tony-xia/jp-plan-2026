# Open questions (cross-phase)

> Part of the trip-requirements split. See [`../requirements.md`](../requirements.md) for the index. Phase-specific open questions stay with their phase file.

## 🆕 Where do the 3 extra Hokkaido nights go? (2026-04-20 restructure)

With Karuizawa parked, 3 nights move from Phase-1 into Hokkaido. Previous clockwise allocation was Hakodate 2 · Sapporo 3 · Wakkanai 1 · Abashiri 2 · Biei 1 · Otaru 3 · Toya 2 = 14. New total = **17-18** depending on which baseline (requirements table said 14; YAML had 15 via an earlier +1 to Hakodate). Candidates for the +3, ranked by the existing rationale in [`phase-2-hokkaido.md`](phase-2-hokkaido.md):

1. **Hakodate +1 (→ 3 nights).** Absorbs Day-1 jetlag after ~6 hr Haneda → Hakodate Shinkansen haul. Gives a gentle Day-2 before NYE hits. Also decouples NYE from the arrival day — NYE can now fall cleanly in Hakodate (Dec 31) rather than having the arrival-and-NYE squeeze.
2. **Wakkanai +1 (→ 2 nights).** Weather buffer — Wakkanai has one of Japan's worst winter flight/whiteout-cancellation rates; Cape Sōya morning may blow out. Also lets the Sapporo → Wakkanai 5–6 hr winter drive arrive with daylight to spare.
3. **Abashiri +1 (→ 3 nights).** Adds a proper Shiretoko (Utoro) day — Road to Heaven, Oshinkoshin Falls, Okhotsk Ryūhyō Museum. Current 2-night plan compresses these.
4. **Rumoi / Mashike mid-drive overnight (→ 1 extra night on the NW leg).** Splits the Sapporo → Wakkanai 330 km / 5–6 hr winter drive into 2 × ~3 hr legs with a west-coast sunset. Alternative to Wakkanai +1 for the same weather-buffer / drive-length problem.
5. **Biei +1 (→ 2 nights).** Lower priority — Biei's highlights (Blue Pond + trees) comfortably fit in 1 night. +1 only if drone work or Furano side-trip gets added.
6. **Toya +1 (→ 3 nights).** Low priority — 2 nights already covers the Windsor stay, ropeway, Silo deck. Extra night mostly sits indoors at the resort.
7. **Sapporo +1 (→ 4 nights).** Low priority — 3 already fits the must-visit list without compression per the 2026-04-20 A+B gap-close analysis.

**Default recommendation** (pending user pick): **Hakodate +1 + Wakkanai +1 + Abashiri +1** (each solves a distinct pain point). Alternative: **Hakodate +1 + Rumoi +1 + Abashiri +1** if the user prefers a mid-drive split over a Wakkanai weather-buffer.

**Next action:** user picks a distribution, then I update `trip.yaml`, `bookings.yaml`, and the `src/content/days/*.yaml` files in one pass.

## 🆕 Day-1 Shinkansen booking (2026-04-20)

- **Flight arrival time must be locked first** — the Tōhoku/Hokkaido Shinkansen 特大荷物 seats need to pair with the landing-plus-buffer window. Rough target: land by ~10:00 Haneda, board Shinkansen by ~12:30 Tokyo Station, arrive 函館駅 ~18:00–19:00.
- **Book all three legs (Haneda→Tokyo, Shinkansen, 函館ライナー) together** once flights are chosen. JR East / JR Hokkaido joint reservation.
- **Oversize-bag seats on はやぶさ are the pinch point** — New-Year-adjacent dates book out.

## 🆕 Gear & electronics (2026-04-20)

Confirmed packing list (user, 2026-04-20):

- **1–2 drones** — DJI-class. ⚠️ JP drone law: no-fly over populated/DID zones, airports, national parks without permit; sub-100g drones exempt from most rules. Flag activity-by-activity when we plan (Biei, Cape Sōya, Shiretoko candidates).
- **Insta360 Action6 + mount equipment** — chest/helmet/handlebar action mounts.
- **360° camera + mount equipment** — brand TBD; invisible-stick / car-roof / bike-helmet mounts.
- **Tripod** — likely travel tripod; check carry-on liquids+length limits (CA / JL both allow up to ~60 cm folded in cabin typically).
- **Mirrorless camera** — **TBD**: bringing or not. Decide before final pack.
- **1× MacBook** — for offload + editing on the road.
- **Powerbanks** — ⚠️ airline Wh limits (ANA/JAL: ≤100 Wh freely; 100–160 Wh max 2 with approval; >160 Wh forbidden). Tag each bank with Wh before departure.
- **Power adapters** — Japan = Type A (two flat pins), 100 V / 50–60 Hz. MacBook USB-C handles it; confirm chargers for drones/cameras are 100 V compatible.

**Implications to track:**
- Drone no-fly zones vs. planned shooting days (Biei, Shiretoko, Cape Sōya, Kurofu — though Kurofu is parked with Karuizawa).
- Total checked/carry-on baggage weight with 4 travelers + camera kit — affects rental car trunk space on the Hokkaido drive loop.
- 元旦 shop closures may mean forgotten cables/adapters can't be bought in Hokkaido Jan 1–3.

## Carried-over questions

*(Phase-1 Karuizawa questions are parked along with the phase itself — see [`phase-1-karuizawa.md`](phase-1-karuizawa.md) for historical context.)*
