# Open questions (cross-phase)

> Part of the trip-requirements split. See [`../requirements.md`](../requirements.md) for the index. Phase-specific open questions stay with their phase file.

## 🆕 Day-1 Shinkansen booking mechanics

- **Flight arrival time must be locked first.** The Tōhoku/Hokkaido Shinkansen 特大荷物 seats need to pair with the landing-plus-buffer window. Target: land by ~10:00 Haneda, board Shinkansen by ~12:30 Tokyo Station, arrive 函館駅 ~18:00–19:00.
- **Book all three legs together** (Haneda → Tokyo, Shinkansen, 函館ライナー) once flights are chosen — JR East / JR Hokkaido joint reservation.
- **Oversize-bag seats on はやぶさ are the pinch point** — NYE-adjacent dates book out early.

## 🆕 Gear & electronics (packing list)

Confirmed packing list (user, 2026-04-20):

- **1–2 drones** — DJI-class. ⚠️ JP drone law: no-fly over populated/DID zones, airports, national parks without permit; sub-100 g drones exempt from most rules. Flag activity-by-activity when we plan (Biei trees, Cape Sōya, Shiretoko, Asari Sky Loop — see phase-1 doc for the Asari DIPS 2.0 stack).
- **Insta360 Action6 + mount equipment** — chest/helmet/handlebar action mounts.
- **360° camera + mount equipment** — brand TBD; invisible-stick / car-roof / bike-helmet mounts.
- **Tripod** — travel tripod; check carry-on length/liquid limits (CA/JL allow up to ~60 cm folded in cabin typically).
- **Mirrorless camera** — **TBD**, bringing or not. Decide before final pack.
- **1 × MacBook** — offload + editing on the road.
- **Powerbanks** — ⚠️ airline Wh limits (ANA/JAL: ≤100 Wh freely; 100–160 Wh max 2 with approval; >160 Wh forbidden). Tag each bank with Wh before departure.
- **Power adapters** — Japan = Type A (two flat pins), 100 V / 50–60 Hz. MacBook USB-C handles it; confirm drone/camera chargers are 100 V compatible.

**Implications to track:**
- Drone no-fly zones vs. planned shooting days (Biei, Cape Sōya, Shiretoko, Asari Sky Loop).
- Total checked + carry-on weight for 4 travelers + camera kit affects rental-car trunk space on the drive loop.
- 元旦 shop closures (Jan 1–3) — forgotten cables/adapters can't be restocked in Hokkaido during this window.

## Resolved

### 2026-04-22 — Night allocation locked (was: "where do the 3 extra Hokkaido nights go?")

Final locked allocation: Hakodate 2 · Sapporo 7 · Wakkanai 2 · Abashiri 3 · Biei 0 (day-stop) · Otaru 3 · Toya 3 = 20 Hokkaido + Tokyo 4 = 24 nights. See [`../requirements.md`](../requirements.md) for the stay-by-stay table and [`phase-1-hokkaido.md`](phase-1-hokkaido.md) for the per-place activity grouping. The sixth-pass rationale (Sapporo return leg dropped; +1 Abashiri for 知床 Utoro day, +1 Toya for Windsor + Silo/Usu/Noboribetsu room) is captured in the requirements.md decision log.

### 2026-04-23 — Data conventions: drop times + transit hubs from activities

User: the per-day view is a loose place list, not a minute-by-minute schedule; transit hubs clutter it and the arrival/departure times belong on the bookings (flight / Shinkansen / 特急), not on activities. Applied: `Activity.start`/`Activity.end` removed from `src/content/days/*.yaml`; station/airport-ref activities deleted from day files. The `Place` entries in `places/00-transit.yaml` stay, still referenced from `Booking.from` / `to` / `coveredLegs`.

## Carried-over / parked

- Phase-1 Karuizawa questions were parked with the phase itself on 2026-04-20 and have since been removed from the repo.
