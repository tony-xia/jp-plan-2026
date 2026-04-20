# Trip Requirements

**Travel times** between places are stored in [`requirements/travel-times.md`](requirements/travel-times.md) — an auto-generated table maintained by Claude (Nominatim + OSRM). The Next.js build parses that file to surface drive times under each activity. Ask Claude to refresh the table when the itinerary changes.

This list is the source of truth for trip-planning decisions. The itinerary in [`src/content/trip.yaml`](../src/content/trip.yaml) must always reflect these requirements. Whenever a new requirement is stated or an existing one changes, update this file first, then update the YAML.

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

## Phase 1 — must-visits (apply regardless of scenario)

Day 1 (2026-12-27) begins with **morning landing at Haneda**, all four travelers on the ground together. Transport afterwards differs per scenario (see below), but these stops are committed either way:

- **Peepolo Norikura (ピーポロ乗鞍)** — [Google Maps](https://maps.app.goo.gl/pvGbjzcmBPzgbhno8) — 〒390-1513 長野県松本市安曇4306. Filming location of the female lead's family home in the 1997 Fuji TV drama *Love Generation*; now operates as an inn. **Conditional stay:** if we can book 2 rooms (hard + expensive) we overnight here; otherwise day-visit only.
- **Norikura Kogen Tourist Information Center (乗鞍高原観光案内所)** — [Google Maps](https://maps.app.goo.gl/XCjfPPEbcHXeXyAL8) — 〒390-1520 長野県松本市安曇4306-5. Short stop en-route to Peepolo for food / water.
- **Kurumayama Kogen SKYPARK (車山高原スカイパーク)** — [Google Maps](https://maps.app.goo.gl/HiFvjatoUm2D692F7) — 〒391-0301 長野県茅野市北山3413. Ride the lift to the summit for winter panoramas (Yatsugatake, Fuji, Alps). **Explicitly not skiing.**

> ⚠️ **Geography flag for the Fuji scenario:** all three must-visits are in **central Nagano** (Matsumoto / Chino / Suwa area). From a Fuji base that's a ~3–4 hr one-way drive. Fitting them in means either a multi-day loop up to Nagano or an out-and-back that eats most of a day.

## Phase 1 — Scenario A: Karuizawa base (**preferred**)

- **Transport (updated 2026-04-20):** meet at Haneda → **transit to Tokyo Station → Hokuriku Shinkansen (あさま / はくたか) to Karuizawa Station (軽井沢駅)** → **rent the car at/near Karuizawa Station** → drive as one group to the stay.
  - **Do NOT rent a car at the airport.** The user confirmed on 2026-04-20: car rental happens at the destination station, not at Haneda. This avoids a long same-day drive Tokyo → Karuizawa (~180 km, 2.5–3 hr in winter) on arrival-day fatigue and New-Year traffic.
  - Haneda → Tokyo Station: Tokyo Monorail → JR Yamanote, or Keikyū → JR, ~30 min.
  - Tokyo → Karuizawa: Hokuriku Shinkansen, ~70–90 min.
  - Rental pickup at Karuizawa Station area (same branch used for Phase-1 return on day 03 afternoon — single-branch round trip keeps logistics simple).
- **Stay:** 2BR / 2BA Airbnb in Karuizawa (hotels too expensive for 2 rooms over these dates). Candidate listings (shortlisted 2026-04-19, not booked):
  1. [Airbnb listing 1085044790321680945](https://www.airbnb.com/rooms/1085044790321680945) — checked for 2026-12-27 → 12-30 (3 nights). Photos mirrored at `public/photos/airbnb-karuizawa-primary/01-08.jpg` (pulled 2026-04-20).
  2. [Airbnb listing 32528623](https://www.airbnb.com/rooms/32528623) — checked 2026-12-25 → 12-28 (dates need shifting). Photos at `public/photos/airbnb-karuizawa-alt/01-08.jpg`.
  - Verify before booking: 2 BR + 2 BA, 4-guest cap, parking, winter heating, late-check-in tolerated.
- **Karuizawa-only visits (need Karuizawa base):**
  - **Karuizawa Kogen Church (軽井沢高原教会)** — [Google Maps](https://maps.app.goo.gl/nKpKNUERk1h9fF598) — 〒389-0195 長野県北佐久郡軽井沢町長倉星野2144. Famous historic church in the Hoshino Resorts area. Origin: 1921 "Arts Freedom Education Seminar" in a lumber shed on the Hoshino Onsen grounds (attended by Uchimura Kanzō, Kitahara Hakushū, Shimazaki Tōson); Uchimura named the shed **星野遊学堂** — that sign still hangs at the entrance. Renamed Karuizawa Kogen Church in 1941. From 1965 it pioneered Japanese church weddings for non-Christians. 100 years in 2021.
  - **Kurofu-yama hike (黒斑山) with drone view of Mt. Asama**
    - Trailhead (morning drive): **Takamine Kogen Visitor Center (高峰高原ビジターセンター)** — [Google Maps](https://maps.app.goo.gl/eV9spDDBfbpCVDyz5) — 〒384-0041 長野県小諸市高峰高原704. The 車坂峠 pass trailhead is adjacent.
    - Summit: **Kurofu-yama (黒斑山)** 2,404 m — [Google Maps](https://maps.app.goo.gl/QJGSUSwnEk115ggY7). Outer caldera rim of Mt. Asama — the best viewpoint of the Asama cone.
    - Plan: drive to Takamine Kogen in the morning, hike up, fly a drone from the summit to film Mt. Asama, then descend.
    - Trailhead is ~30–40 min drive from Karuizawa.
    - **⚠️ Caveats to resolve:**
      1. Visitor center **closed** early-Nov → late-Apr; our window is entirely in the closure. Trailhead / parking reachable but no indoor facilities.
      2. Winter ascent is **serious** — deep snow, need snowshoes + crampons + winter kit. Plan gear / guide / group fitness.
      3. Drone flight — registration done, MLIT/JCAB drone-map green. Remaining:
         - **MOE / national-park layer.** Kurofu-yama is inside **Joshin'etsu-Kogen National Park**. Drone maps don't show this. Contact **関東地方環境事務所** / local **自然保護官事務所** ~2 weeks before, describe the summit flight, get written confirmation. If the point is in a **特別地域 / 特別保護地区**, may need permission or be restricted.
         - **Active-volcano layer.** Mt. Asama is active. Re-check JMA alert level the week of the trip.

## Phase 1 — Scenario B: Fuji base (**fallback** if Karuizawa accommodation is too expensive)

- **Transport (confirmed 2026-04-20):** meet at Haneda → transit to Tokyo/Shinagawa → **Tōkaidō Shinkansen (こだま) to Shin-Fuji Station (新富士駅)** → **rent the car at/near Shin-Fuji Station** → drive to the stay.
  - Consistent with the Karuizawa scenario: **no airport car rental**. Pickup happens at the destination station.
- **Stay:** Airbnb preferred (hotels not yet checked). Candidate listing (shortlisted 2026-04-19, not booked):
  1. [Airbnb listing 1643751316846284459](https://www.airbnb.com/rooms/1643751316846284459) — checked 2026-12-25 → 12-28 (dates need shifting). Photos at `public/photos/airbnb-fuji/01-08.jpg`.
  - Verify before booking: 2 BR + 2 BA, 4-guest cap, parking, winter heating, location vs Shin-Fuji pickup.
- **Additional visits in this scenario:**
  - **Mount Omuro (大室山)** — [Chairlift](https://maps.app.goo.gl/bZqpZULJuGMviKf28) · [Mountain](https://maps.app.goo.gl/o7tHqcbqhDcBxzya8) — 静岡県伊東市富戸1317-5. Iconic bowl-shaped cinder cone in Izu, chairlift (6 min) to the 580 m summit, views of Fuji / Izu Seven Islands / Sagami Bay from the crater rim walk. **Conditional on winter view being worthwhile:** the famous grass cover is burnt/brown in winter (山焼き is in February, after our trip), but the panoramas remain. User wants to confirm the winter scene is still photo-worthy before committing.
  - **Izu Kogen / Kawana Stained Glass Museum (伊豆高原ステンドグラス美術館 / 川奈ステンドグラス美術館)** — [Google Maps](https://maps.app.goo.gl/TMoBRDxtovzwWS2g6) — 静岡県伊東市川奈1439-1. Note: the museum was renamed to *Kawana Stained Glass Museum* but Google Maps still shows the old name. **Only if time allows.**
  - **Hakone onsen day** — option, not committed. Good soak candidate if we build in a Hakone leg.
- **User also wants to drive to one of these Fuji viewpoints — but both are blocked by winter road closures:**
  - **Fujinomiya Trail 5th Station parking (富士宮口5合目 駐車場)** — [Google Maps](https://maps.app.goo.gl/GuHRYqpnprTyAaNX7). ⚠️ The 富士山スカイライン 2合目→5合目 section is **closed early-Nov through late-Apr** each year. Our whole trip window falls inside the closure — **driving up is not possible in Dec/Jan, and entering on foot risks criminal penalty.**
  - **Okuniwa Observation Deck (奥庭展望台)** — [Google Maps](https://maps.app.goo.gl/9mCMcFLJo3xvSv9h6). On the Fuji Subaru Line (Yamanashi side). ⚠️ In winter, the Subaru Line is usually closed above the lower parking lots (Kenmaruo / Osawa), and Okuniwa's toilets/shelter are shut. The 御中道 trail to Okuniwa is winter-closed. Realistically **not reachable in Dec/Jan** except on rare clear-dry days with partial openings.
  - **→ Net:** these two drives likely can't happen on this trip. If a high-view drive on Fuji is important, we'd need a substitute (e.g. Mt. Omuro, Hakone viewpoints, Fuji 1st-station 馬返し area, or the eastern 籠坂峠 area) — flag for the user.

## Phase 2 — Hokkaido

**Phase 2 shape (proposed 2026-04-20, clockwise self-drive loop):**

**Hakodate → train to Sapporo → 2 nights Sapporo (car pickup) → drive NW to Wakkanai (1 night) → Cape Sōya → drive E along Okhotsk coast to Abashiri (2 nights) → drive W to Biei (1 night) → drive SW to Otaru (2 nights) → drop car in Sapporo → train to 洞爺 → Windsor Toya (2 nights, end of Phase 2) → JR 特急 北斗 + 北海道新幹線 to Tokyo.**

Key differences vs. the old anti-clockwise plan:

- **Sapporo is now at the START of the drive loop**, not the end. Car pickup happens after a 2-night city stay — this gives the Sapporo must-visits at least one full day (the non-pickup day), but most of Sapporo's heavy activity list (Shiroi Koibito, Hokudai, 二条市場, 頭大仏, 大倉山, Kani Honke, NANDA, Moiwa, ROYCE' Town) originally spread across 3 back-end nights must now compress or move.
- **Windsor Toya is at the END of Phase 2**, accessed car-free via the hotel shuttle from JR 洞爺駅 (same ~40-min free shuttle, reservation-required; schedule unchanged). From Toya, onward to Tokyo is JR 特急 北斗 → 北海道新幹線 はやぶさ (via 新函館北斗).
- **Biei only once** in the loop (between Abashiri and Otaru), skipping the old Sapporo → Biei → Abashiri direction.
- **Hotel Neuschloss Otaru is dropped** from the proposed plan (Otaru = 2 nights, not 2 + 1). Re-add if the user wants to restore the coastal-castle night.
- **Drive legs (winter estimates):**
  - Sapporo → Wakkanai: ~330 km / **5–6 hr winter** via Dōō Expressway + Route 5 / 231. Longest single leg of the trip; consider splitting with an intermediate overnight (Rumoi / Mashike / Asahikawa) — this is also one way to close the 2-night gap.
  - Wakkanai → Cape Sōya → Abashiri: ~380–400 km including the Cape detour / ~**6–7 hr winter** on Route 238 along the Okhotsk coast (this is the "ocean on the driver's side" leg — the whole point of the clockwise flip). Long + scenic; start early.
  - Abashiri → Biei: ~220 km / **4–5 hr winter**.
  - Biei → Otaru: ~200 km / **3–4 hr winter** (via Asahikawa → Dōō Expressway).
  - Otaru → Sapporo (car drop): ~40 km / 45 min.

Phase 2 is a **winter self-drive leg** from Sapporo onward, so snow-driving prep / winter tires are assumed.

### Hakodate (2 nights — confirmed)

- **Arrival into Hakodate:** Tōhoku/Hokkaido Shinkansen to **新函館北斗 (Shin-Hakodate-Hokuto)**, then local **JR 函館ライナー** into Hakodate city. Per the **Day-4 transit requirement above (2026-04-20)**, arrival is on day-04 (2026-12-30) evening via Karuizawa → Tokyo → Shin-Hakodate-Hokuto → Hakodate. First Hakodate night = NYE-eve day; day-05 = NYE full day; day-06 = New Year's Day full day; day-07 = train to Toya.
- **Stay candidates** (shortlisted 2026-04-20, not booked; 4 guests, 2 gents + 2 ladies ⇒ **2 rooms / 2 bedrooms minimum**). Airbnb candidates priced for 2026-12-30 → 2027-01-01 (2 nights, 4 adults):
  1. **Airbnb — Hakodate Motomachi HIST Terrace I** — [Airbnb listing 1461937569120840875](https://www.airbnb.com.au/rooms/1461937569120840875). 6 guests · 3 BR · 6 beds · 2 baths · **4.92 ★ / 12 reviews · Guest favourite**. **A$854.45 total** (~A$427/night). "Rare find — usually booked." Motomachi historic-hillside area.
  2. **Airbnb — Hakodate Bay Japandi (136 ㎡, entire building)** — [Airbnb listing 896063721679005442](https://www.airbnb.com.au/rooms/896063721679005442). 10 guests · 2 BR · 5 beds · 2 baths · **New listing (0 reviews, new host)**. **A$767.10 total** (discounted from A$922.10; ~A$384/night). 3-min walk to Hakodate Bay (red-brick warehouses). Free residential garage + in-unit dryer.
  3. **Hotel — TOKYU STAY Hakodate-Asaichi Akari no Yu (東急ステイ函館朝市 灯の湯)** — [Google Maps](https://maps.app.goo.gl/NB15MnFHp38YbuYz8). 3-star hotel · 4.4 ★ / 1,277 reviews · in-house 灯の湯 onsen bath · right by 函館朝市 morning market and JR 函館駅 (walking distance). Rates to be priced for 2026-12-30 → 2027-01-01; would require **2 rooms** for our 2-gents-+-2-ladies setup.
  - Verify before booking (Airbnbs): 2 BR + 2 BA, 4-guest cap, winter heating, late-check-in tolerated (day-04 arrival ~late-afternoon/evening), parking (not strictly required — we have no car in Hakodate), price holds.
  - Verify before booking (hotel): 2 rooms available on target dates, twin/double layout, breakfast inclusion, onsen access hours, winter price level vs Airbnb total.
  - ⚠️ **Open question — Hakodate window is 2 nights or 3?** `trip.yaml` currently has Hakodate = **2026-12-31 → 2027-01-02** (2 nights), but the day-04 transit plan puts us in Hakodate the **evening of 2026-12-30**. The shortlisted Airbnbs were priced for **2026-12-30 → 2027-01-01** (2 nights, which would require shifting Windsor Toya earlier to Jan 1 → Jan 3 — matches the Windsor price-check the user ran on 2026-04-20). Alternative: keep 2 nights at current Dec 31 → Jan 2 and crash cheap near Shin-Hakodate-Hokuto for Dec 30 night, OR extend Hakodate to 3 nights Dec 30 → Jan 2. **Decide before booking either Airbnb.**
- **Committed must-visit (after sunset, night-view):**
  - **Mt. Hakodate Observatory (函館山展望台)** — [Google Maps](https://maps.app.goo.gl/J8tzCmFUpPLwpddQ7). The iconic "million-dollar" night panorama over Hakodate's hourglass isthmus.
    - ⚠️ **Winter access = ropeway only.** The 登山自動車道 (summit road) is closed to cars/buses/taxis in winter; only the 函館山ロープウェイ (125-person gondola, ~3 min from 山麓駅) operates. Our trip window is entirely inside the winter-ropeway season. Plan for **heavy cold-weather kit** — the summit is exposed and Dec/Jan nights are brutal.

### Lake Toya — Windsor Hotel base (2 nights) — NOW END OF PHASE 2

> 📍 **Position change (2026-04-20):** in the clockwise restructure this stay moves from **early Phase 2** (right after Hakodate) to the **end of Phase 2**, after Otaru + car drop in Sapporo. Rationale: Windsor and the Toya area are most expensive during 元旦 (the first few days of January); shifting ~10 days later should cut rates materially. We enter Toya car-free via the JR 特急 北斗 + hotel shuttle, and leave directly to Tokyo via Shinkansen without returning to Sapporo.

- **Stay:** **The Windsor Hotel TOYA, Vignette Collection (ザ・ウィンザーホテル洞爺)** — [Google Maps](https://maps.app.goo.gl/xoQjgjuWjxHSuTPB6) · [Booking.com](https://www.booking.com/hotel/jp/the-windsor-toya-resort-spa.html) · address 〒049-5722 北海道虻田郡洞爺湖町清水336 · photos `public/photos/windsor-hotel-toya/1,2,3,5,6,7.jpg` (from official site, pulled 2026-04-20). 2 nights, must book **2 rooms**.
  - **Hotel shuttle from JR 洞爺駅 (Toya Station):** hotel runs a **free shuttle, advance reservation required by 18:00 the day before**. Current published departures from JR Toya Station: **11:00 / 13:00 / 14:20 / 16:55 / 19:00** (~40-min ride). Coordinate our arriving train to hit one of these slots; taxi only if we miss them. Verify schedule with the hotel at booking — times drift seasonally.
  - **Arrival (new plan):** from Sapporo Station on JR 特急 北斗 → 洞爺駅 (~2 hr), then shuttle. Book shuttle the day before from the Otaru hotel.
  - **Departure (new plan):** JR 特急 北斗 洞爺駅 → 新函館北斗 (~2.5 hr) → 北海道新幹線 はやぶさ → 東京 (~4 hr). ~7 hr in motion + transfers; this replaces the Sapporo → Tokyo transit in the old plan (the train legs are roughly the same, just starting from Toya instead of Sapporo).
- **During-stay visits (all rim-of-Lake-Toya / Usu volcano viewpoints, reachable by hotel shuttle or taxi; may need a rental or a hotel-arranged car since we don't pick up our own rental until Sapporo):**
  - **Silo Observation Deck (サイロ展望台)** — [Google Maps](https://maps.app.goo.gl/vbz1fb4sMXW5NMvJ8). Free entry, **winter hours 8:30–17:00 (Nov–Apr)**. In Jan–Mar a courtyard "snow play area" (スノーモービル / スノーラフティング) runs — extra winter activity option.
  - **Usuzan Ropeway summit lookouts (有珠山ロープウェイ・洞爺湖展望台 + 火口原展望台)** — [Google Maps](https://maps.app.goo.gl/XEf1pdWgJFufiVg66) — base station: 〒052-0102 北海道有珠郡壮瞥町字昭和新山184-5. **Winter hours 9:00–16:00** (seasonal). Two lookouts are reachable from the summit station: 洞爺湖展望台 right beside the station, and 火口原展望台 a ~7-min walk further. ⚠️ The 外輪山遊歩道 (outer-rim trail) and the longer walk to **銀沼大火口 / 外輪山展望台 is closed Nov–Apr** — that extended walk is **not** available on our trip.
  - **Noboribetsu Jigokudani (登別地獄谷)** — [Google Maps](https://maps.app.goo.gl/FbdgvTbkqZjrhgtx7). Volcanic "hell valley" with active sulfur vents + onsen town. **Time-permitting**, ~40–50 min drive east of Lake Toya.

### Sapporo pickup (3 nights, START of Phase 2 drive loop) — NEW 2026-04-20, A+B gap-close

> 📍 **New role:** Sapporo is now the **entry point** for the Hokkaido self-drive leg — not the exit. **3 nights** here (Hakodate → JR 特急 北斗 → Sapporo Station) before picking up the rental car and driving NW to Wakkanai.

- **Transport in:** JR 特急 北斗 Hakodate → 札幌駅 (~3 hr 30 min). Book reserved seats with luggage space.
- **Stay:** central Sapporo (Sapporo Station / Odori / Susukino corridor), **3 nights**, 2 rooms. Hotel not yet shortlisted.
- **Car pickup:** book a Sapporo-city rental branch (Sapporo Station / Susukino). Pickup on the morning of night-3 → day 4 of the leg, so the long Wakkanai drive leaves with full daylight.
- **Activity fit:** 3 nights = 2 full sightseeing days + pickup morning. The Sapporo must-visit list below fits cleanly at this allocation — no forced drop. ROYCE' Town (rail day out) and 頭大仏 (real travel time) are both doable without compression.

### Sapporo → Wakkanai drive (day 1 of loop)

- **Realistic distance flag:** Sapporo → Wakkanai is **~330 km / ~4 hr** in summer on Dōō Expressway + Route 40; in winter with snow/ice and coastal wind gusts budget **5–6 hr**. Start early; this is the longest single drive in the new plan.
- **Intermediate stop options (optional, and one way to close the 2-night gap):** Rumoi / Mashike on the Sea of Japan coast (Route 231) or Asahikawa on the expressway. Rumoi-area overnight splits the drive into 2 × ~3 hr legs and adds a west-coast sunset.

### Wakkanai (1 night, Surfeel Hotel)

> 📍 **New flow (2026-04-20):** Wakkanai is reached **from Sapporo** (not from Abashiri) on day 1 of the drive loop. Cape Sōya is done as a **same-trip detour on the way out** toward Abashiri the next morning — not as a round-trip from Wakkanai. This keeps the Okhotsk coast on the driver's side.

- **Drive in:** Sapporo → Wakkanai (see above, ~330 km / 5–6 hr winter).
- **Stay:** **Surfeel Hotel Wakkanai (サフィールホテル稚内)** — [Google Maps](https://maps.app.goo.gl/zGtEvTEBRbSQzsES6) · [Booking.com](https://www.booking.com/hotel/jp/ana-crowne-plaza-wakkanai.html) · address 〒097-0023 北海道稚内市開運1-2-2 · photos `public/photos/surfeel-hotel-wakkanai/01-06.jpg` (from official site, pulled 2026-04-20). **1 night**, 2 rooms. Central Wakkanai location (near 稚内駅 / port area).
- **Evening-of-arrival options (after the long drive):** ノシャップ岬 for sunset over the Sea of Japan with Rishiri-Fuji silhouette on clear days (co-located 寒流水族館 as winter indoor fallback); 稚内公園 / 氷雪の門 if daylight remains; otherwise hotel + early dinner to bank rest for the next day.
- **Next-morning Cape Sōya run (before continuing to Abashiri):**
  - **Cape Sōya / 宗谷岬 (Sōya-misaki)** — [Google Maps](https://maps.app.goo.gl/JrgXYnrJ37Jim4146). **The northernmost point of mainland Japan.** ~30 km / ~40 min drive north of Wakkanai city along Route 238. The 最北端の地 monument + the "Song of Cape Sōya" stone are the key photo subjects. On clear days Sakhalin is visible ~43 km across the strait.
    - **Winter access:** Route 238 is maintained year-round; own car is straightforward.
    - ⚠️ **Weather warning:** Wakkanai has one of the worst winter flight-cancellation rates in Japan; gale-force winds + whiteouts + ice on the cape plateau are common. Plan a flexible morning window; if whiteout-cancelled, this is the argument for **Wakkanai 2 nights** (weather buffer) — see the 2-night gap open question.
- **Dropped in winter:** 白い道 (Soya Hills) disappears under snow — out of the plan.

### Wakkanai → Cape Sōya → Abashiri (long Okhotsk-coast leg)

- **Drive:** Cape Sōya → Abashiri via Route 238 is **~320 km / ~5–6 hr winter** along the Sea of Okhotsk coast (Hamatonbetsu → Monbetsu → Saroma → Abashiri). Together with the Cape Sōya detour this is effectively a full driving day — leave Wakkanai at dawn, budget arrivals at Abashiri after dark.
- **Winter caveat:** coastal Route 238 is prone to closures during blizzards / high winds. Check the Hokkaido Development Bureau road-info page morning-of; have a fallback of re-routing inland via Route 40 + 39 through Asahikawa if the coast shuts (adds ~1 hr and removes the ocean view — i.e. negates the whole point of the clockwise flip).

### Abashiri (2 nights)
- **Stay:** **Abashiri (網走)** city — [Google Maps](https://maps.app.goo.gl/T6FTh8gxwZdsac4D8). 2 nights, 2 rooms. Hotel not yet shortlisted.
- **🚨 CRITICAL DRIFT-ICE TIMING FLAG:** Abashiri's headline winter attraction is the **Sea of Okhotsk drift ice (流氷 / ryūhyō)**. The ice arrives at the coast **mid-to-late January**, with **peak viewing in February to early March**. Our Phase 2 window likely falls in **early–mid January at the latest** — meaning drift ice may not have arrived yet, and the **「おーろら」icebreaker cruise does not start operating until late January**. **Substitute plan needed:** rely on indoor/simulated drift-ice experiences (see Okhotsk Ryūhyō Museum below) and scenic winter coast/snow landscapes instead of actual pack ice on water. If we specifically want to see real drift ice, Phase 2 timing would need to shift later — which conflicts with the 23-day trip shape.
- **Must-visit (from user):**
  - **ビューポイントパーキング流氷街道・鱒浦 (View Point Parking Ryūhyō-Kaidō Masuura)** — [Google Maps](https://maps.app.goo.gl/vo1ReQWx2c8NjGNF7) — 〒099-3119 北海道網走市鱒浦. Roadside parking/viewpoint on the "感動の径 (Road of Emotion)" coastal drive. Clear-day views of the Shiretoko mountains across the bay. Named for drift-ice viewing — in our window the ice isn't there yet, but the coast and snowscape are still worthwhile.
  - **Road to Heaven / 天に続く道 (Tenni Tsuzuku Michi)** — [Google Maps](https://maps.app.goo.gl/pBAcvmhnakXA1Nkv7) — 北海道斜里郡斜里町峰浜 (国道334号・244号). ~28 km straight road that appears to lead into the sky; ~15 min drive from 知床斜里駅, ~1 hr from Abashiri. ⚠️ **Winter caveats:**
    - **Starting-point parking lot and viewing deck are CLOSED in winter.**
    - Snow plowing is **only guaranteed in February** — in late Dec / early Jan mornings the road may be impassable until plowed. Check road conditions day-of.
    - Best shots traditionally come from the starting-point overlook, but with the deck closed we'd be shooting from roadside pullouts only.
- **Additional "amazing view" suggestions (user asked for these):**
  - **能取岬 (Cape Notoro) / Notoro-misaki lighthouse area** — classic Okhotsk coast overlook ~20 min drive from Abashiri city. Lighthouse, cliffs, Sea of Okhotsk. One of the best drift-ice lookouts (again, not-yet-arrived for us) but still dramatic winter coastline.
  - **オホーツク流氷館 (Okhotsk Ryūhyō Museum) + 天都山展望台 (Tentōzan Observatory)** — co-located on Mt Tento above Abashiri. Indoor **−15 °C chamber with real preserved drift ice** (the key drift-ice substitute for our window), plus a 360° observatory over Abashiri's five lakes + Sea of Okhotsk + Shiretoko + Akan ranges. **High priority given the timing flag.**
  - **博物館 網走監獄 (Abashiri Prison Museum)** — open-air museum preserving the historical prison buildings; well-regarded rainy/snowy-day indoor option.
  - **Shiretoko Utoro area (知床ウトロ) — on the way to / from 天に続く道:** 
    - **オシンコシンの滝 (Oshinkoshin Falls)** — visible year-round; often partially frozen in deep winter, dramatic.
    - **Shiretoko National Park winter closures flag:** 知床峠 (Shiretoko Pass) is **closed Nov–late-April**; 知床五湖 winter access requires a registered guide. Plan for the coast-and-Utoro side only, not the cross-peninsula drive.

### Abashiri → Biei (1 night)

- **Drive:** Abashiri → Biei is **~220 km / ~3–4 hr** on expressway in summer; in winter with snow/ice, budget **4–5 hr**. Plan a mid-morning start to arrive by mid-afternoon with daylight.
- **Stay:** 1 night in **Biei / Furano area** (hotel or Airbnb, 2 rooms). Not yet shortlisted.
- **Must-visit trees + Blue Pond:** see the Biei place details below (moved from the old "Sapporo → Biei" section — content is identical, only the arrival direction changed).

_Biei place details (unchanged — trees + Blue Pond)_

- **Christmas Tree (クリスマスツリーの木)** — [Google Maps](https://maps.app.goo.gl/v37b29Xiu6mHhsXE8) — 〒071-0471 北海道上川郡美瑛町. Lone spruce shaped like a Christmas tree; ~10 min drive from 美瑛駅. ⚠️ **No parking on site; access road is residential and all surrounding land is private farmland.** Do not park on the road and **never step onto snow fields / pastures** — this is an explicit local request from the 観光協会. View and shoot from the roadside only.
- **Seven Stars Tree (セブンスターの木)** — [Google Maps](https://maps.app.goo.gl/3riQPkZq4ZmvXZEY8) — 〒071-0224 北海道上川郡美瑛町北瑛. Oak featured on the Seven Star cigarette pack (1976). **Has a parking lot** (including bus parking). Easier stop than Christmas Tree.
- **Shirogane Blue Pond (白金青い池)** — [Google Maps](https://maps.app.goo.gl/xM18uZ819nFR4Kz77). User asked: **what time of day is best?**
  - **Daytime in our window:** the pond is largely frozen/snow-covered in late Dec / Jan, so the signature bright-blue daytime effect **is not the main draw in winter** (clearest blue is May–June). Afternoon is better than morning if going by daylight, but don't chase the summer photos here.
  - **Winter light-up:** runs **2026-10-24 → 2027-04-22 (equivalent dates), from sunset until 21:00 daily.** January ~17:00 start. A ~10-min lighting pattern loops throughout the evening.
  - **Special extended hours** (Dec 31 → Jan 3, light-up until 02:00) **does NOT apply in the new plan** — we're past Jan 3 by the time we reach Biei in the clockwise route. Standard 21:00 close applies.
  - **→ Recommended plan:** arrive ~1 hr before sunset, photograph the daylight pond briefly, then stay through light-up start so we see both states in one visit. Budget ~45–60 min at the pond. Bring a tripod if any of us wants to shoot — night exposure is long.

### Biei → Otaru (3 nights) — A+B gap-close

- **Drive:** Biei → Otaru is **~200 km / ~3–4 hr** in winter via Asahikawa → Dōō Expressway. Lunch stop around Asahikawa is natural.
- **Stay (primary):** central Otaru, **2 nights**, 2 rooms. Hotel not yet shortlisted.
- **Stay (split, 1 night):** **Hotel Neuschloss Otaru (ホテルノイシュロス小樽)** — [Google Maps](https://maps.app.goo.gl/EVydysyveUp9Q3DHA) · [Booking.com](https://www.booking.com/hotel/jp/hotel-neuschloss.html) — 〒047-0047 北海道小樽市祝津3丁目282 · photos `public/photos/hotel-neuschloss-otaru/01-07.jpg` (from official site, pulled 2026-04-20). **1 night, pairs with the drone day / 祝津 coastal day** (adjacent to Otaru Aquarium). All-ocean-view castle-style resort inside the Niseko-Shakotan-Otaru Kaigan Quasi-National Park. Every room has a private open-air bath (源泉掛け流し). Western-style doubles (2 guests) and Japanese-Western quad rooms (4 guests) both exist. Check-in 15:00, check-out 11:00. Creative French dinner. TEL 0134-22-9111. ⚠️ **Gated on price** — check 2 rooms × 1 night vs. central Otaru room rate for the same date; if unexpectedly expensive, fall back to 3 nights central Otaru.
- **Day allocation (3 nights, 2 full days + 1 half):**
  - **Night 1 (central Otaru, arrival):** check-in late afternoon after Biei drive; evening **天狗山 night view** (after sunset) + **Otaru Canal** gas-lamp walk. Dinner in Sakaimachi.
  - **Day 2 (central Otaru):** **Uomasa lunch** (pick a non-Sunday, arrive 20–30 min pre-opening) + **Otaru Music Box Museum** + Sakaimachi shopping + glass/LeTAO. Evening either canal retry or early rest.
  - **Day 3 (Rusutsu two-route loop):** full-day 7–9 hr drive, 中山峠 outbound / Niseko-coast return (or flipped). Overnight central Otaru.
  - **Day 4 (drone day + 祝津):** morning flight window at 朝里 (Sky Loop, Asari Dam), afternoon **Otaru Aquarium** + check-in Hotel Neuschloss; sunset shoot from the Shukutsu coast + Neuschloss dinner + private open-air bath.
  - **Morning of day 5:** check out Neuschloss → drive to Sapporo, drop car, board 特急 北斗 to 洞爺. (Weather blowout contingency: if drone day is un-flyable, ground-only filming + Nikka Whisky Yoichi as Plan B.)
- **Must-visit (from user):**
  - **Mt. Tengu Ropeway / 小樽天狗山ロープウェイ base station** — [Google Maps](https://maps.app.goo.gl/jEUzKT7ByXnta1xF9). 532 m summit, ~4-min ride. **Winter ropeway season: 2026-11-29 → 2027-03-31 (equivalent dates), daily 09:00–20:00** (last up 19:48, last down 20:00). Round-trip ¥1,800 adult. **One of Hokkaido's "Three Great Night Views"** (with 函館山 Phase 2 and 藻岩山 Sapporo — we'll hit 2 of the 3). Summit has a "heart object" photo spot. Go **after sunset** for the night-view payoff.
  - **Otaru Aquarium / おたる水族館** — [Google Maps](https://maps.app.goo.gl/UNnUot3kmno1LSoQ7). On the Shukutsu coast, co-located with Hotel Neuschloss. Winter program includes sea lion / penguin shows; well-regarded family attraction. Verify winter hours at time of booking — some outdoor exhibits may run reduced schedules.
  - **Otaru Music Box Museum / 小樽オルゴール堂 (Main Hall)** — [Google Maps](https://maps.app.goo.gl/3kq8Va1PePPcY8a89) — 〒047-0027 北海道小樽市住吉町4-1. Iconic steam clock out front, two-floor historic building packed with music boxes. At the end of 堺町本通り (Sakaimachi shopping street) — pair with Otaru Canal walk, LeTAO, glass shops.
  - **Uomasa / 魚真 (sushi)** — [Google Maps](https://maps.app.goo.gl/CPaQc68SWsABcke29) — 〒047-0032 北海道小樽市稲穂2-5-11. Local-favorite, well-priced sushi. Lunch **12:00–14:00**, dinner **16:00–21:30**, **closed Sundays**. ~6-min walk from JR 小樽駅. ⚠️ **No reservations taken — first-come first-served; queues common from pre-opening.** Plan arrival 20–30 min before opening for a table. Pick a non-Sunday day.
- **Rusutsu day-trip from Otaru (added 2026-04-20)** — user wants a drive to **Rusutsu (ルスツ)** during the Otaru stay; explicitly requested that **outbound and return routes differ so we see different winter landscapes.**
  - **Rusutsu village / Rusutsu Resort (ルスツリゾート)** — 〒048-1711 北海道虻田郡留寿都村泉川13. One of Hokkaido's largest ski/resort complexes; in winter, even for non-skiers there are snow-play areas (snow tubing, snow rafting, snowmobile), onsen, and panoramic Mt Yōtei (羊蹄山) views from the resort base. The surrounding village is a classic snowbound Hokkaido town.
  - **Two-route loop (the whole point of the drive):**
    - **Outbound — north / mountain-pass route:** Otaru → 札樽自動車道 → 道央道 → 喜茂別 IC → R230 south over **中山峠 (Nakayama-tōge)** → Rusutsu. ~100 km / ~1.75–2.25 hr in winter. 中山峠 is a classic Hokkaido winter pass with Mt Yōtei views; the 峠の茶屋 (あげいも / potato dumplings) is a famous roadside stop, open year-round.
    - **Return — south / Niseko-coastal route:** Rusutsu → R276 west → Niseko (ニセコ) → Kutchan (倶知安) → R5 north along the coast via Yoichi (余市) → Otaru. ~95–105 km / ~2–2.5 hr in winter. Passes the Niseko ski-resort corridor (different mountain views) and the R5 coastal stretch back into Otaru.
    - **Can flip direction** (Niseko outbound, 中山峠 return) for sunset on the return mountain pass — pick based on weather/light on the day.
  - ⚠️ **Winter-driving flag:** 中山峠 and the Niseko corridor both sit at higher elevations; closures / chain restrictions happen in blizzards. Check the Hokkaido Development Bureau road conditions page (北海道開発局 道路情報) morning-of. Allow **7–9 hr** door-to-door for the loop + on-site time.
  - ✅ **Fit (A+B gap-close, 3 Otaru nights):** Rusutsu two-route loop is the **day-3 full-day** slot in the allocation above. Uomasa keeps day-2 lunch (must-be-weekday), drone-day is day-4 with Neuschloss overnight. 中山峠 outbound / Niseko return is the default; flip to Niseko-out / 中山峠-return for sunset on the mountain pass if the weather favors it.

- **Full drone / self-filming day — 朝里 (Asari) area:**
  - User target: **Asari district, Otaru (朝里, 〒047-0151)** — [Google Maps](https://maps.app.goo.gl/uq4xJXgwdisyyzFa9). Dedicated full day for drone aerials + ground self-filming.
  - **Prime drone subject:** **朝里スカイループ (Asari Sky Loop)** — the spiral / double-loop viaduct structure on the 札樽自動車道 Asari IC area. One of Hokkaido's most-photographed infrastructure shots from the air, especially striking with winter forest around it. Nearby: **朝里ダム (Asari Dam)** winter landscapes and **朝里川温泉 (Asarigawa Onsen)** village for warm-up stops.
  - ⚠️ **Drone regulatory stack — verify before the day:**
    1. **DID (人口集中地区 / densely inhabited district):** central Otaru falls inside DID; the **Asari area itself is largely outside DID** (residential but low-density, bordering forest), but boundaries must be confirmed on the **地理院地図 DID layer**. Any DID overflight requires **MLIT/JCAB permission via DIPS 2.0, applied ≥10 business days in advance.**
    2. **Expressway overflight rule:** flying **directly over** the 札樽自動車道 expressway is **not allowed** without specific permission (risk to drivers if the drone falls). Shoot the Sky Loop from an **offset angle / side position** over adjacent non-road ground, not vertically above the roadway.
    3. **Quasi-National Park layer:** the Otaru coast (and Hotel Neuschloss area) is inside the **Niseko-Shakotan-Otaru Kaigan Quasi-National Park**. Drone flight in Hokkaido 国定公園 / 道立自然公園 is **not explicitly permit-required** by Hokkaido rules, but check each 自然保護官事務所 / local signage for restrictions, especially around protected cliffs / seabird areas.
    4. **Weather / wind:** winter Hokkaido coast gusts are brutal. Consumer drones are marginal above ~10 m/s; have a no-fly fallback plan (ground-only filming day) if conditions are bad. Plan the drone day flexibly, not on a fixed date.
    5. **Battery cold performance:** LiPo batteries lose ~30–40% capacity at −10 °C. Bring extras, keep in inside pockets, pre-warm before flights.
- **Suggested extra Otaru content (only partially doable with 2 nights — full list if the gap-close adds a 3rd Otaru night):**
  - **Otaru Canal (小樽運河)** at dusk — gas-lamp street and canal walk, iconic Otaru postcard scene.
  - **Sakaimachi-dōri (堺町通り)** — main shopping / snack / glassware street; includes Music Box Museum.
  - **Nikka Whisky Yoichi distillery (ニッカウヰスキー余市蒸溜所)** — ~30 km / 40 min drive west, free tours. (Note: production tours require online reservations far in advance.)
  - **Shakotan Peninsula / 神威岬 (Cape Kamui)** — Shakotan blue coast. ⚠️ Cape Kamui's 遊歩道 is **closed in winter** due to snow; only the base area / 積丹岬 area is accessible. Coastal drive still rewarding on clear days.
  - **Daytime Tengu Ski** — optional for anyone who skis; we're "explicitly not skiing" per Phase 1 note, but Tengu has a beginner area if interest shifts.

### Otaru → Sapporo car drop + onward to Toya (end of drive loop)

> 📍 **No back-end Sapporo stay in the clockwise plan.** The rental car is dropped at a Sapporo-city branch on the morning of the Otaru → Toya transit day; we then take JR 特急 北斗 to 洞爺駅 and the Windsor shuttle to the hotel (see **Lake Toya — Windsor Hotel base** section above for end-of-Phase-2 detail).

- **Drive:** Otaru → Sapporo is short, **~40 km / 45 min** on 札樽自動車道. Morning drop-off gives us daylight for the Toya transit (Sapporo → 洞爺駅 ~2 hr by 特急 北斗; catch one of the Windsor shuttle slots, e.g. 13:00 / 14:20 / 16:55 — the 19:00 slot is a safety net).
- **Car return branch:** Sapporo-city (Sapporo Station / Susukino) is the natural drop-off; confirm branch + hours when booking the Sapporo-pickup rental. New Chitose Airport is the wrong direction for the Toya leg — avoid.
- **Luggage:** same 4-traveler + winter kit haul. Book reserved 特大荷物 seats on the 北斗 (and pre-book Windsor shuttle the evening before).

### Sapporo activity inventory (3 front-end nights + car-drop morning ~10 days later)

> 📍 **Allocation (2026-04-20, A+B gap-close):** Sapporo = **3 front-end nights** (2 full sightseeing days + pickup morning of day 4) + the Otaru → Sapporo car-drop morning later in Phase 2 (no overnight). The full must-visit list below fits at this allocation — no forced drop.
- **Transit to Tokyo (new clockwise plan — departs from Toya, not Sapporo):** see the Lake Toya — Windsor Hotel base section above. Route: 洞爺駅 → 新函館北斗 on JR 特急 北斗 (~2.5 hr) → 東京 on 北海道新幹線 はやぶさ (~4 hr). Total ~7 hr in motion + transfer buffer. Shorter than the old Sapporo → Tokyo transit (~8 hr) because we're already ~200 km south.
- **Must-visit (from user):**
  - **Shiroi Koibito Park (白い恋人パーク)** — [Google Maps](https://maps.app.goo.gl/b1ApSWrbx2XNN8M96). Ishiya's chocolate-factory theme park in 宮の沢 (west Sapporo). Park hours **10:00–18:00**; paid-area last entry 16:30. **Winter illumination "Blooming Snow Fantasy" runs 2026-11-15 → 2027-03-31 (equivalent), 16:00–19:00 nightly, free viewing.** Nearest subway: 東西線 宮の沢駅 (7-min walk). Plan a late-afternoon visit so daytime factory + evening illumination stack in one trip.
  - **Hokkaido University / 北海道大学 (札幌キャンパス)** — [Google Maps](https://maps.app.goo.gl/Zm63kDKX2KVeC9Ez6). Famous open campus, walkable from JR 札幌駅 北口. **Winter highlights:** the Poplar Avenue (ポプラ並木) and main road snow-covered, Clark bust, Furukawa Memorial Hall. The Ginkgo Avenue (イチョウ並木) is bare in winter — that's a fall attraction, not ours. Free entry; self-guided walk.
  - **Kani Honke Sapporo Station Main Branch (かに本家 札幌駅前本店)** — [Google Maps](https://maps.app.goo.gl/AjyvERYf8gcbVFik6). Established crab-specialty restaurant near Sapporo Station. **Reservations strongly recommended**, especially for group of 4 at dinner. Multiple course options (Taraba / Zuwai / Kegani).
  - **Seafood Buffet NANDA (海鮮ビュッフェ NANDA)** — [Google Maps](https://maps.app.goo.gl/mh3XyFZpWTyg1W9z5). Popular all-you-can-eat seafood (crab, sushi, etc.) near Susukino. **Advance reservation recommended.**
  - **Hill of the Buddha / 頭大仏殿 (真駒内滝野霊園)** — [Google Maps](https://maps.app.goo.gl/FaoXKA6y4uEwWEU8A). Ando Tadao's lavender-hill Buddha installation in south Sapporo. **Winter hours (Nov–Mar) 10:00–15:00** (shorter than summer). ⚠️ The signature 水庭 (water garden) is **drained 11/4 → late-April** — no mirror-pool reflection in our window. The hill is a snow-white lavender field instead, which many find equally striking. Access: 中央バス 真108 from 地下鉄真駒内駅 (~20 min, ¥500 one-way). 3,300-space free parking for car. **Allow 60–90 min on-site.**
- **Nice-to-have (user-listed, pick based on time and weather):**
  - **Mt. Moiwa Ropeway (藻岩山ロープウェイ)** — [Google Maps](https://maps.app.goo.gl/Gtsbqa2DhGt3RzNF6). 531 m summit; **third of Hokkaido's Three Great Night Views** (with Hakodate + Tengu we'll already have hit). **Winter hours (Dec–Mar) 11:00–22:00**, last up 21:30. Closed at 年末年始 (New Year) — verify exact dates for 2026/27. **Best arrival**: ~2 hr before sunset (mid-Dec: ~14:00; mid-Jan: ~14:30) to catch magic hour + blue hour + full night in one visit. ⚠️ User note: we already commit to Hakodate and Tengu night views — Moiwa may be redundant unless snow / clarity conditions favor a substitution.
  - **Asahiyama Memorial Park (旭山記念公園)** — [Google Maps](https://maps.app.goo.gl/oCMB4WRPtNXdXhUa6). Free hillside city park with panoramic Sapporo views; less-touristy than Moiwa. Good daytime alternative if Moiwa is weather-fogged. Winter: road may be snow-restricted for cars; walkable from 円山公園 area.
  - **Mt. Okura Ski Jump Stadium / 大倉山ジャンプ競技場 展望台** — [Google Maps](https://maps.app.goo.gl/bgX3JkzsXUjqXAzS9). 1972 Sapporo Olympics ski-jump venue; two-seat chairlift to the top-of-hill observatory. **Winter hours (Nov 1 – Apr 28) 9:00–17:00**, lift ¥1,000 RT adult, ¥500 child, 113-space free parking. Access: 地下鉄東西線 円山公園駅 → 中央バス "くらまる号" → 大倉山ジャンプ競技場.
  - **ROYCE' Cacao & Chocolate Town (ロイズカカオ＆チョコレートタウン)** — [Google Maps](https://maps.app.goo.gl/7rrKgTdQvdv2sNUdA) — 〒061-3775 北海道石狩郡当別町. Opened 2023, farm-to-bar chocolate factory experience in Tōbetsu. **Hours 10:00–17:00, last entry 15:00.** Admission ¥1,200 (HS+), ¥500 (ages 4–MS), free age 3 and under. ⚠️ **Reservation REQUIRED via the official site (e-tix)** — do not turn up without a booking. Access: JR 学園都市線 (Gakuentoshi Line) 札幌 → ロイズタウン駅 (~30 min), 7-min walk (free shuttle). **Tight integration with the rail ride is part of the experience.**
- **Additional Sapporo content worth considering (user didn't list but classic):**
  - **大通公園 (Odori Park) + TV Tower** — central park ribbon, always-open walk. **Sapporo Snow Festival (さっぽろ雪まつり)** is usually early February — **too late for our trip window**, but pre-festival snow-sculpture prep may be visible. Verify dates.
  - **二条市場 (Nijo Market)** — morning seafood market, kaisen-don breakfast.
  - **狸小路 / ススキノ (Susukino)** — night food/drink district; Sapporo Ramen row.
  - **札幌市時計台** (Clock Tower) — compact historic landmark, 5-min stop.

## Phase 3 — Tokyo (5 nights — confirmed)

Phase 3 base: **Shibuya** area (shopping + in-line with salon / massage / Gonpachi walkable). Trip wraps **2027-01-18**. **5 nights locked** (2027-01-14 → 2027-01-18) — trimmed from the original 6 to give Sapporo a 3rd night. The day-19 (arrival) half-day is largely consumed by the Sapporo→Tokyo transit, so **4 active Tokyo days** remain.

### Day-level Tokyo allocation (locked in `trip.yaml`)

| Day | Date | Weekday | Plan |
|---|---|---|---|
| 19 | 2027-01-14 | Thu | Sapporo→Tokyo transit (~8 hr), arrive Shibuya evening |
| 20 | 2027-01-15 | Fri | **Car-enthusiast day 1 — Subaru**: Subaru Star Square Ebisu (flagship showroom, walkable from Shibuya) + Tokyo Subaru Mitaka + light Shibuya shopping + Mominotakumi massage (evening) |
| 21 | 2027-01-16 | Sat | **Car-enthusiast day 2 — Autobacs**: A PIT Autobacs Shinonome (2+ hr morning/midday) + Nezu Museum optional + Gonpachi dinner |
| 22 | 2027-01-17 | Sun | Oedo Antique Market (3rd Sun) + K-two haircut |
| 23 | 2027-01-18 | Mon | Departure |

### Car-enthusiast requirement (2026-04-20)

- **User is a car enthusiast — Autobacs + Subaru are must-visits in Tokyo, and must fall on the first 2 full days after the Tokyo arrival day** (i.e. day-20 and day-21, not day-22+). Arrival day (day-19) is eaten by the ~8 hr Sapporo→Tokyo transit and does not count.
- **Distribution (chosen 2026-04-20):** bundle both Subaru stops on day-20 (Fri — Subaru Star Square Ebisu + Tokyo Subaru Mitaka; Fri open for Mitaka), and Autobacs Shinonome as a 2+ hr block on day-21 (Sat). This frees day-22 (Sun) for Oedo Antique Market + haircut only.
- **Venues:**
  - **Subaru Star Square (スバルスタースクエア)** — Subaru's flagship brand showroom in **Ebisu, Tokyo** (恵比寿). Walkable / one-stop train from Shibuya base — fits day-20 easily alongside existing Shibuya plans.
  - **Tokyo SUBARU Mitaka (東京スバル 三鷹店)** — already captured above as a committed must-visit; kept and scheduled on day-20 (Fri, Mitaka is closed Tue/Wed so Fri works).
  - **A PIT AUTOBACS SHINONOME (A PIT オートバックス 東雲)** — already captured above; ≥2 hours on-site, moved from day-22 to day-21.


### Must-visit (committed)

- **Tokyo SUBARU Mitaka (東京スバル 三鷹店)** — [Google Maps](https://maps.app.goo.gl/uC6JZiCyG4enm6m27) — 〒181-0015 東京都三鷹市大沢3-9-6. Subaru flagship dealership near Subaru's Mitaka district. Showroom **10:00–18:00, closed Tuesdays + Wednesdays.** Service bay 10:00–17:00. TEL 0422-32-3181. Adjacent G-PARK 三鷹 used-car branch at 大沢3-9-1 (10:00–18:00, same closure days) if interested in used-JDM inventory. ⚠️ **Do not plan this on a Tue/Wed.** Mitaka is ~30–40 min by car from central Tokyo; by train ~30 min on 中央線 to 三鷹駅 + 15 min bus/taxi.
- **A PIT AUTOBACS SHINONOME (A PIT オートバックス 東雲)** — [Google Maps](https://maps.app.goo.gl/2Qest64bWM4xbK6p6) — 〒135-0062 東京都江東区東雲2-7-20. Flagship Autobacs auto-parts megastore with attached Starbucks + car-specialist Tsutaya bookstore. **Hours 9:00–22:00**, open daily. **User requested ≥2 hours on-site** — plan the full block. 24-h parking available. ~20 min by car from central Tokyo; りんかい線 東雲駅 ~10-min walk.
- **Massage — もみの匠 渋谷店 (Mominotakumi Shibuya, "Massage Spa Shibuya")** — [Google Maps](https://maps.app.goo.gl/evEUDACWVjCUu5wQ7) — 〒150-0041 東京都渋谷区神南1-22-9 サンクスビル9F. **Hours 11:00–23:00 (last booking 22:00), open 365 days/yr.** Signature 60-min whole-body ¥3,980. Online booking 24/7 at mominotakumi.com/sb/, phone 03-6416-0995. Walkable from 渋谷駅.
- **Haircut — STAR TOKYO Shibuya by K-two** — [Google Maps](https://maps.app.goo.gl/LoKkhxgsmHddXDhm9) — 〒150-0046 東京都渋谷区松濤1-29-1 渋谷クロスロード7F. Hours **weekdays 11:00–20:00, Sat/holidays 10:00–20:00, Sun 10:00–19:00.** TEL 03-5422-3311. Specialty: 髪質改善 + layered cuts + Korean-hair styling + men's cuts. **Book ahead** via Hot Pepper Beauty / Rakuten Beauty / phone — English may be limited, ask host for English-speaking stylist when booking.

### Nice-to-have

- **Gonpachi Nishi-Azabu (権八 西麻布)** — [Google Maps](https://maps.app.goo.gl/v2BupfdH7LTYcA1r9). The iconic three-story izakaya at Nishi-Azabu Crossing, ~10-min walk from 六本木 / 乃木坂 / 広尾. **Hours 11:30 until 03:30 next day** (late-night friendly). Famous as the inspiration for the "House of Blue Leaves" fight scene in *Kill Bill Vol. 1*; also hosted the 2002 Bush–Koizumi "izakaya summit." **Reservation recommended** (autoreserve, Ikyu, Hot Pepper). Party-of-4, 2-hour slot typical.

### Base area + shopping

- **User preference: stay in a shopping area like Shibuya.** Rationale: 2 of the 4 committed appointments (massage + haircut) are in Shibuya; Gonpachi (Nishi-Azabu), Harajuku, Omotesando, Roppongi are all ≤2 stops. Autobacs Shinonome is ~30 min away; Subaru Mitaka is ~45 min — both day-trips from Shibuya work.
- **Alternative bases worth considering:** 新宿 (more hotel inventory, similar access), 銀座/丸の内 (closer to Oedo Antique Market + auction houses), 六本木 (closest to Gonpachi, but less shopping).
- **2BR/2BA equivalent for 4 guests:** harder in Tokyo hotels; check Airbnb in Shibuya / Harajuku / Omotesando as Phase 1/2 — Tokyo hotel rates for 2 rooms × 7+ nights over New-Year-adjacent window can be steep, verify before committing.

### Public antique / ancient-art auctions & markets

User interest: **"public small auctions about old ancient legacies."** Most traditional Japanese dealer-syndicate auctions (e.g. 東京美術倶楽部) are **trade-only** — you must be a licensed antique dealer to bid. The public-accessible path splits into (1) modern-style auction houses with open preview + bidding, and (2) public antique markets where you buy direct from dealers. Recommendations for our ~Jan 11–18 window:

- **大江戸骨董市 (Oedo Antique Market)** — Tokyo International Forum open plaza (千代田区丸の内3-5-1). **~250 dealers, Japan's largest outdoor antique market.** Held **1st + 3rd Sundays** of each month, 09:00–16:00, **free entry**. **Estimated January 2027 dates: Jan 3 (1st Sun) and Jan 17 (3rd Sun)** — Jan 17 should fall inside our Tokyo window and is the **top recommendation** for this interest. Covers kimono/obi, ukiyo-e, ceramics (Imari, Kutani, Arita), Meiji/Taishō glass, Buddhist art, netsuke, swords, old coins, etc. ⚠️ Weather-contingent — held outdoors; check the day-before update on antique-market.jp.
- **毎日オークション (Mainichi Auction)** — monthly at their Tokyo auction house. **Public 下見会 (preview) runs 2–3 days before each sale, open to walk-ins.** Covers paintings, prints, sculptures, **antiques (骨董品)**, jewelry, watches. 30+ auctions/year, avg ~1,200 lots. Jan 2027 dates not yet published; check my-auction.co.jp/schedule/index ~1 month out.
- **Shinwa Auction (シンワオークション)** — Yusen Building, 2-3-2 Marunouchi, Chiyoda-ku. Covers modern ceramics + Japanese antiques. **3-day public previews** before each sale. Check schedule closer to date.
- **東京中央オークション (Tokyo Chuo Auction)** — heavyweight for **Chinese calligraphy, painting, porcelain, and Asian artworks.** Well-regarded if the user's interest leans Chinese ancient art. Holds Tokyo sessions periodically (e.g. Mar 2026); Jan 2027 session may or may not exist — check chuo-auction.com.
- **SBI Art Auction / 廻 MEGURU / Tokyo Culture Auction / iArt / A.C.N. Auction Tokyo** — smaller houses, each with public previews; good for "small auctions" vibe. Check individual schedules for Jan 2027.
- **平和島全国古民具骨董まつり (Heiwajima Antique Fair)** — Japan's oldest indoor antique fair. **Out of window** for our trip: the Dec 2026 edition is Dec 5–6 (before Phase 3) and the next after that is Mar 2027. Noted so user doesn't try to plan around it.

### Additional Tokyo content worth considering (not requested, but typical for this window)

- **年末年始 traditions near our dates:** 初詣 at 明治神宮 (Meiji Shrine, near Shibuya/Harajuku) on Jan 1–3 is a major cultural scene (huge crowds); still worth-seeing through mid-January. 浅草寺 (Sensō-ji) and 深大寺 (Jindai-ji, near Mitaka — can combine with Subaru day) similar.
- **Museums (rainy-day fallback):** 国立西洋美術館 / 国立博物館 (Ueno), 根津美術館 (Omotesando — ancient Asian art, fits the auction interest), サントリー美術館, 21_21 Design Sight.
- **Shibuya-adjacent shopping:** 表参道ヒルズ, 原宿, 明治通り, SCRAMBLE SQUARE, MIYASHITA PARK.
- **Haneda departure day:** Shibuya → HND is ~40 min by Narita Express / Limousine Bus / taxi. Confirm flight time and build a buffer — New-Year-adjacent trains may be busier than usual.

## Open questions / to revisit

- **Phase 1 decision driver = Karuizawa accommodation cost.** Karuizawa is the preferred base; only fall back to Fuji if the Karuizawa 2BR/2BA Airbnb options turn out too expensive. **Next action:** price the two Karuizawa Airbnb candidates for the correct 2026-12-27 → ~12-30 window and compare against a comparable Fuji Airbnb. Either way Peepolo Norikura + Norikura stop + Kurumayama are committed — which matters for geography (see flag above).
- **Phase 1 — rental car pickup and return (updated 2026-04-20).** User confirmed: **pickup** on day-01 afternoon at the destination station (Karuizawa Station for Scenario A, Shin-Fuji Station for Scenario B) — NOT at Haneda airport. **Return** on day-03 afternoon (2026-12-29) at the same station-area branch. Implications:
  - Day-03 itinerary must finish the drive-heavy activities (Kurumayama, any Norikura / Peepolo errands, any geography-required trips) **before** the afternoon return. **Karuizawa Kogen Church now also slots into day-03** (on the way back from Kurumayama, before car return) since day-04 is now a full transit day to Hakodate.
  - Day-04 has **no car and leaves Karuizawa entirely** — see the Phase 1 → Phase 2 transit requirement below. Church / Hoshino-area walking is no longer possible on day-04.
  - ⚠️ Choose a **rental-car return branch that is walkable from our accommodation** (or plan a taxi back). Candidates: Karuizawa Station area drop-off for Scenario A; Shin-Fuji Station area drop-off for Scenario B.

## Phase 1 → Phase 2 transit — Day 4 (updated 2026-04-20)

- **Day 4 (2026-12-30) is a full travel day: Karuizawa → Hakodate by train + Shinkansen.** No stops, no sightseeing planned — the user explicitly noted this will take many hours. Morning departure from the Karuizawa accommodation, arrive Hakodate late afternoon / evening. Check in at Hakodate hotel that night (first of 2 Hakodate nights).
- **Airbnb → Karuizawa Station on day-04 (confirmed 2026-04-20):** rental car was returned on day-03, so the user will **call an Uber or taxi** from the Karuizawa Airbnb to 軽井沢駅 on day-04 morning with luggage. Do **not** plan to walk or rely on the rental car. (Uber coverage in Karuizawa can be thin — having a local taxi number as backup is prudent; hosts usually help.)
- **Routing (best-judgment, ~6.5–7.5 hr in-motion + transfer buffer):**
  - **Leg 1:** Karuizawa Station → Tokyo Station via **Hokuriku Shinkansen** (あさま / はくたか), ~70–90 min. Stay on through train to Tokyo rather than transferring at Omiya — Tokyo Station has the simpler cross-platform transfer to the Tohoku/Hokkaido line.
  - **Leg 2:** Tokyo Station → Shin-Hakodate-Hokuto Station via **Tohoku/Hokkaido Shinkansen** (はやぶさ, through-running), ~4 hr.
  - **Leg 3:** Shin-Hakodate-Hokuto Station → Hakodate Station via **JR 函館ライナー (Hakodate Liner)** local, ~15–20 min.
  - Total ~6–7 hr travel + ~45–60 min transfer buffers; realistic 8 hr door-to-door.
- **Same-day implications:**
  - **No sightseeing on day 4.** Karuizawa Kogen Church moves to day-03 (while the car is still available). Any other Karuizawa-area stops must fit into day-01 through day-03.
  - **NYE dinner plan shifts to day-05 (2026-12-31)** in Hakodate — day-04 evening is arrival + check-in only; plan a simple hotel-area dinner for the late arrival.
  - **Luggage is heavy on this day** — 4 travelers + all Hokkaido-winter kit through 2 Shinkansen + 1 local train. Reserve seats with luggage space (特大荷物スペースつき座席 on the Tohoku/Hokkaido Shinkansen) well in advance — required for oversize bags since 2020, and this route is heavily booked over New Year.
  - **Book all three legs together** (ideally as a single JR-East / JR-Hokkaido reservation) once the accommodation departure time is confirmed.
- **Fuji winter-drive substitutes:** since Fujinomiya 5th and Okuniwa are closed in winter, decide whether a lower-elevation Fuji viewpoint replaces them or whether we drop the high-drive idea entirely.
- **Mt. Omuro winter view check** — user wants to verify before committing.
- The Phase 1 `src/content/trip.yaml` segment is labeled `fuji-or-karuizawa` — rename once the scenario is chosen.
- The Peepolo Norikura stay is tentatively slotted on day-02 (2026-12-28 → 29) in `trip.yaml` but marked 待确认. Adjust once the scenario + booking are confirmed.
- ~~**Phase 2 — Hakodate nights:** decide **1 vs 2 nights** in Hakodate.~~ ✅ **Resolved 2026-04-19 → 2 nights.** (Day-number labels from the old anti-clockwise plan are now stale — in the clockwise plan: arrive day-04 evening, NYE + 元旦 in Hakodate, depart day-07 morning on JR 特急 北斗 to **Sapporo**, not Toya.)
- ~~**🚨 Phase 2 — the 2-night gap.**~~ ✅ **Resolved 2026-04-20 → A+B**: Sapporo +1 (3 front-end nights) + Otaru +1 (3 nights, with optional Neuschloss 1-night split on the drone-day / 祝津 night). Sums to 14.
- ~~**Phase 2 — Sapporo activity compression.**~~ ✅ **Resolved by Sapporo +1**: full must-visit list fits at 3 nights.
- **Phase 2 — how to get around Lake Toya during the 2-night Windsor stay.** Same options as before (shuttle + taxi / local rental / hired driver). Note: in the new plan Toya is **end of Phase 2**, so Noboribetsu-Jigokudani is now a side trip **from** Windsor, not **on the way to** Sapporo — and there's no rental car there since we dropped it in Sapporo.
- ~~**Phase 2 — Sapporo overnight: avoid or accept?**~~ ✅ **Resolved 2026-04-20 (clockwise plan) → 2 front-end nights.** Supersedes the old "skip Sapporo" preference.
- **Phase 2 — Biei / Furano 1-night accommodation** not yet shortlisted. Need 2 rooms.
- ~~**Phase 2 — confirm Blue Pond plan around New Year.**~~ ✅ **Resolved by re-ordering.** In the clockwise plan Biei comes **after** Jan 3, so the extended 02:00 light-up window no longer applies — standard 21:00 close. Plan a standard late-afternoon-into-light-up visit.
- **🚨 Phase 2 — drift-ice timing reconciliation.** Unchanged in spirit: Abashiri's headline attraction is drift ice, and our window (Abashiri roughly early-mid-January in the clockwise plan) is still on the early-edge of arrival. Same options as before: (a) accept no real drift ice + Okhotsk Ryūhyō Museum substitute, (b) shift Phase 2 later, (c) skip Abashiri / Shiretoko. Option (a) is the working plan.
- ~~**Phase 2 — Abashiri 1 vs 2 nights**~~ ✅ **Resolved → 2 nights** (carries over).
- **Phase 2 — Abashiri lodging** not yet shortlisted. Need 2 rooms.
- **🚨 Phase 2 — the long winter drives (new 2026-04-20, clockwise plan).** The old Abashiri → Wakkanai "toughest single leg" is replaced by **two** long legs: **Sapporo → Wakkanai (~330 km, 5–6 hr winter)** and **Wakkanai → Cape Sōya → Abashiri (~380–400 km, 6–7 hr winter)** — back-to-back. Confirm drivers are OK; consider a Rumoi overnight on the first leg to soften it (doubles as a gap-close).
- **Phase 2 — 天に続く道 road condition check.** In late Dec / early Jan the road is only reliably plowed in February; morning closures are possible. Plan day-of based on local conditions; have a fallback if the road is shut.
- ~~**Phase 2 — return path from Wakkanai to Otaru**~~ ✅ **Resolved by re-routing.** In the clockwise plan Otaru is reached from Biei (inland), not directly from Wakkanai. The old ~330 km Wakkanai → Otaru back-end leg no longer exists.
- ~~**Phase 2 — Otaru 3 vs 4 nights**~~ ✅ **Resolved 2026-04-20 (A+B) → 3 nights total**: 2 central Otaru + 1 Hotel Neuschloss (drone-day / 祝津 night). Matches the original resolution structure.
- **Phase 2 — Hotel Neuschloss pricing check.** Re-added to the primary plan as the drone-day night. Price-check 2 rooms × 1 night; if materially more expensive than an equivalent central Otaru room, fall back to 3 nights central Otaru and drop the split.
- ~~**Phase 2 — Otaru → Phase 3 transit.**~~ ✅ **Resolved 2026-04-20 (clockwise plan).** Otaru → Sapporo (car drop) → JR 特急 北斗 → 洞爺駅 → Windsor 2 nights → JR 特急 北斗 → 新函館北斗 → 北海道新幹線 → 東京. Rail throughout; New-Chitose flight path not used.
- **Phase 2 — drone day permissions lead time.** If the Asari drone day touches any DID zone or requires other MLIT/JCAB-approved operations, **file the DIPS 2.0 application ≥10 business days in advance** — this is a standing deadline, not a task to leave to the week of. Add to pre-trip checklist once the specific flight area is chosen. ⚠️ Even tighter in the 2-night Otaru plan — if drone day gets weather-blown there is no retry slot.
- ~~**🚨 Phase 2 — total night-count sanity check.**~~ ✅ **Resolved 2026-04-20 (A+B) → 3 / 14 / 5.** Phase 2 breakdown: Hakodate 2 · Sapporo 3 (front-end) · Wakkanai 1 · Abashiri 2 · Biei 1 · Otaru 3 (2 central + 1 Neuschloss) · Windsor Toya 2 (end).
- **Phase 2 — Uomasa is closed Sundays.** Schedule the Otaru sushi visit on a weekday and arrive before the open time to avoid the queue; otherwise pick a lunch or early-dinner slot on a Monday/Tuesday. ⚠️ Date mapping changes in the clockwise plan — re-check day-of-week once YAML dates are fixed.
- ~~**Phase 2 — Sapporo 2 vs 3 vs 4 nights**~~ ✅ **Resolved 2026-04-20 (A+B) → 3 front-end nights** (no back-end stay). Full must-visit list fits.
- **Phase 2 — rental-car drop-off point (new clockwise plan).** Sapporo-city branch on the Otaru → Toya transit morning. New Chitose not used (wrong direction); Otaru branch not used (car drives us into Sapporo anyway). Confirm branch + morning hours at pickup-booking time.
- **Phase 2 — ROYCE' Cacao & Chocolate Town reservation.** Reservation is **required**. Book on the official e-tix site ≥2 weeks out for weekend slots, ≥1 week for weekdays — entry slots sell out in peak winter season. Fits cleanly in the 3-night Sapporo allocation (rail-ride day).
- **Phase 2 — Kani Honke + NANDA reservations.** Both need advance booking for a party of 4; book ≥2–3 weeks out. With 3 Sapporo nights we have **2 dinner slots** — both fit (one each night, pick which on arrival vs. post-activity day).
- **Phase 2 — Moiwa redundancy check.** Still true: we already commit to 函館山 + 小樽天狗山. Decide whether the "all three of Hokkaido's Three Great Night Views" completion is worth the evening slot vs. an alternative Sapporo activity. With 3 Sapporo nights there's room for it if wanted.
- **Phase 2 — New Year closures (年末年始, 2026-12-31 → 2027-01-03).** Date mapping changes in the clockwise plan — the Jan 2–3 window now falls in **Sapporo** (not Otaru / Sapporo back-end). Audit every Sapporo activity against 年末年始 hours once dates are fixed.
- **Phase 2 — Windsor Toya shuttle reservation from Otaru.** In the new plan the Windsor shuttle is booked from the Otaru hotel the evening before the transit day (deadline 18:00 the day before). Don't forget — miss the slot and it's taxi (~¥15k+ from 洞爺駅).
- **Phase 2 — Windsor + Toya-area pricing check (the cost motivation for this restructure).** The whole point of moving Windsor to the end of Phase 2 is to escape the 元旦 price peak. Price-check Windsor + any Toya fallbacks for the new late-window dates before locking the restructure; if the savings aren't material, the old anti-clockwise plan (Toya early) may still be right for cost.
- ~~**Phase 3 — Subaru Mitaka is closed Tue + Wed.**~~ ✅ **Resolved 2026-04-20** → scheduled on day-20 (Fri 2027-01-15), open.
- ~~**Phase 3 — day for Autobacs Shinonome.**~~ ✅ **Resolved 2026-04-20** → day-21 (Sat 2027-01-16) morning/midday 2+ hr block, ahead of Gonpachi dinner.
- **Phase 3 — Subaru Star Square Ebisu hours / closed days.** Confirm the flagship showroom's opening hours for Fri 2027-01-15 (and whether Jan mid-month has any special hours). Booking / appointment requirement also TBD — some Subaru brand showrooms in Japan accept walk-ins, others require reservation for cockpit / sim experiences.
- **Phase 3 — book Mominotakumi + K-two appointments early.** Massage is flexible (365-day operation, online 24/7 booking) so do closer to date; **haircut (K-two) should book ≥2 weeks out**, especially for English-speaking stylist availability and weekend slots.
- **Phase 3 — confirm Jan 2027 auction / antique-market schedule ~late Dec 2026.** Target = **Oedo Antique Market Jan 17 (3rd Sunday)** if it falls in-window. Also monitor Mainichi / Shinwa / Tokyo Chuo / SBI Art / MEGURU websites for Jan 2027 preview dates once they publish (~1 month out).
- **Phase 3 — Gonpachi reservation** if committed: book ≥1–2 weeks out for a party of 4, specify 2-hour slot.
- **Phase 3 — Tokyo base decision: Shibuya vs Shinjuku vs Ginza/Marunouchi.** Shibuya is user-preferred and closest to committed appointments; Ginza/Marunouchi puts us next to Oedo Antique Market + auction houses. Could split: Shibuya for most of stay + 1 night near the Oedo Sunday for the auction/market weekend. Decide once Phase 3 night-count is fixed.
- **Phase 3 — 2-room lodging strategy in Tokyo.** Same 2BR/2BA requirement as Phase 1/2. Airbnb likely cheaper than 2 Tokyo hotel rooms over 7+ nights — price both before committing.
- **Phase 3 — departure day (2027-01-18) logistics.** Confirm flight time, Haneda vs Narita, and plan the last-night hotel location accordingly (early flight → stay near airport the night before).
