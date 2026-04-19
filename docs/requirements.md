# Trip Requirements

This list is the source of truth for trip-planning decisions. The itinerary in [`src/content/trip.yaml`](../src/content/trip.yaml) must always reflect these requirements. Whenever a new requirement is stated or an existing one changes, update this file first, then update the YAML.

## Trip basics

- **Travelers:** Tony, AZhu, Crystal, Du
- **Dates:** 2026-12-27 → 2027-01-18 (23 days, 22 nights)
- **Three phases:** Phase 1 = **Karuizawa (preferred)** with **Fuji as fallback** if Karuizawa accommodation is too expensive; Phase 2 = Hokkaido; Phase 3 = Tokyo.

## Confirmed night allocation (2026-04-19)

| Phase | Nights | Breakdown |
|---|---|---|
| Phase 1 (Karuizawa / Fuji) | 3 | 2026-12-27 → 2026-12-30 |
| Phase 2 (Hokkaido) | **14** | Hakodate 2 · Toyako / Windsor 2 · Biei 1 · Abashiri 2 · Wakkanai 1 · Otaru 2 + Neuschloss 1 · **Sapporo 3** |
| Phase 3 (Tokyo) | 5 | 2027-01-14 → 2027-01-18 (incl. Sapporo→Tokyo transit on arrival day) |
| **Total** | **22** | |

> ✅ **Night-count locked**: user confirmed Sapporo = 3 nights; Phase 3 = 5 nights (trimmed from 6). `src/content/trip.yaml` is aligned with this split.

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
  1. [Airbnb listing 1085044790321680945](https://www.airbnb.com/rooms/1085044790321680945) — checked for 2026-12-27 → 12-30 (3 nights).
  2. [Airbnb listing 32528623](https://www.airbnb.com/rooms/32528623) — checked 2026-12-25 → 12-28 (dates need shifting).
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
  1. [Airbnb listing 1643751316846284459](https://www.airbnb.com/rooms/1643751316846284459) — checked 2026-12-25 → 12-28 (dates need shifting).
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

Phase 2 shape: **Hakodate → Lake Toya (Windsor Hotel) → train to Sapporo for rental-car pickup → drive to Biei / Furano**. User prefers **not** to overnight in Sapporo (pick up the car and drive out the same day if feasible). Phase 2 is a **winter self-drive leg** from Sapporo onward, so snow-driving prep / winter tires are assumed.

### Hakodate (2 nights — confirmed)

- **Arrival into Hakodate:** Tōhoku/Hokkaido Shinkansen to **新函館北斗 (Shin-Hakodate-Hokuto)**, then local **JR 函館ライナー** into Hakodate city. Per the **Day-4 transit requirement above (2026-04-20)**, arrival is on day-04 (2026-12-30) evening via Karuizawa → Tokyo → Shin-Hakodate-Hokuto → Hakodate. First Hakodate night = NYE-eve day; day-05 = NYE full day; day-06 = New Year's Day full day; day-07 = train to Toya.
- **Committed must-visit (after sunset, night-view):**
  - **Mt. Hakodate Observatory (函館山展望台)** — [Google Maps](https://maps.app.goo.gl/J8tzCmFUpPLwpddQ7). The iconic "million-dollar" night panorama over Hakodate's hourglass isthmus.
    - ⚠️ **Winter access = ropeway only.** The 登山自動車道 (summit road) is closed to cars/buses/taxis in winter; only the 函館山ロープウェイ (125-person gondola, ~3 min from 山麓駅) operates. Our trip window is entirely inside the winter-ropeway season. Plan for **heavy cold-weather kit** — the summit is exposed and Dec/Jan nights are brutal.

### Lake Toya — Windsor Hotel base (2 nights)

- **Stay:** **The Windsor Hotel TOYA, Vignette Collection (ザ・ウィンザーホテル洞爺)** — [Google Maps](https://maps.app.goo.gl/xoQjgjuWjxHSuTPB6). 2 nights, must book **2 rooms**.
  - **Hotel shuttle from JR 洞爺駅 (Toya Station):** hotel runs a **free shuttle, advance reservation required by 18:00 the day before**. Current published departures from JR Toya Station: **11:00 / 13:00 / 14:20 / 16:55 / 19:00** (~40-min ride). Coordinate our arriving train to hit one of these slots; taxi only if we miss them. Verify schedule with the hotel at booking — times drift seasonally.
- **During-stay visits (all rim-of-Lake-Toya / Usu volcano viewpoints, reachable by hotel shuttle or taxi; may need a rental or a hotel-arranged car since we don't pick up our own rental until Sapporo):**
  - **Silo Observation Deck (サイロ展望台)** — [Google Maps](https://maps.app.goo.gl/vbz1fb4sMXW5NMvJ8). Free entry, **winter hours 8:30–17:00 (Nov–Apr)**. In Jan–Mar a courtyard "snow play area" (スノーモービル / スノーラフティング) runs — extra winter activity option.
  - **Usuzan Ropeway summit lookouts (有珠山ロープウェイ・洞爺湖展望台 + 火口原展望台)** — [Google Maps](https://maps.app.goo.gl/XEf1pdWgJFufiVg66) — base station: 〒052-0102 北海道有珠郡壮瞥町字昭和新山184-5. **Winter hours 9:00–16:00** (seasonal). Two lookouts are reachable from the summit station: 洞爺湖展望台 right beside the station, and 火口原展望台 a ~7-min walk further. ⚠️ The 外輪山遊歩道 (outer-rim trail) and the longer walk to **銀沼大火口 / 外輪山展望台 is closed Nov–Apr** — that extended walk is **not** available on our trip.
  - **Noboribetsu Jigokudani (登別地獄谷)** — [Google Maps](https://maps.app.goo.gl/FbdgvTbkqZjrhgtx7). Volcanic "hell valley" with active sulfur vents + onsen town. **Time-permitting**, ~40–50 min drive east of Lake Toya.

### Sapporo → Biei / Furano drive leg (1 night)

- **Transport:** train from Toyako area into Sapporo → **pick up rental car in Sapporo**. User prefers **not** to overnight in Sapporo — pick up and drive out same day if feasible.
- **Realistic distance flag:** Sapporo → Biei is **~180 km / ~2.5 hr** on expressway in summer; in winter with snow and careful driving budget **3–3.5 hr**. If we clear the rental pickup by mid-afternoon we can reach Biei before dinner; if pickup is late, consider overnight in Chitose / Tomakomai / Sapporo despite the preference.
- **Stay:** 1 night in **Biei / Furano area** (hotel or Airbnb, 2 rooms). Not yet shortlisted.
- **Must-visit trees (Biei patchwork hills — in winter these are lone trees on a pure-white snow field):**
  - **Christmas Tree (クリスマスツリーの木)** — [Google Maps](https://maps.app.goo.gl/v37b29Xiu6mHhsXE8) — 〒071-0471 北海道上川郡美瑛町. Lone spruce shaped like a Christmas tree; ~10 min drive from 美瑛駅. ⚠️ **No parking on site; access road is residential and all surrounding land is private farmland.** Do not park on the road and **never step onto snow fields / pastures** — this is an explicit local request from the 観光協会. View and shoot from the roadside only.
  - **Seven Stars Tree (セブンスターの木)** — [Google Maps](https://maps.app.goo.gl/3riQPkZq4ZmvXZEY8) — 〒071-0224 北海道上川郡美瑛町北瑛. Oak featured on the Seven Star cigarette pack (1976). **Has a parking lot** (including bus parking). Easier stop than Christmas Tree.
- **Shirogane Blue Pond (白金青い池)** — [Google Maps](https://maps.app.goo.gl/xM18uZ819nFR4Kz77). User asked: **what time of day is best?**
  - **Daytime in our window:** the pond is largely frozen/snow-covered in late Dec / Jan, so the signature bright-blue daytime effect **is not the main draw in winter** (clearest blue is May–June). Afternoon is better than morning if going by daylight, but don't chase the summer photos here.
  - **Winter light-up — this is the main event for us:** runs **2026-10-24 → 2027-04-22 (equivalent dates), from sunset until 21:00 daily.** Month-by-month start times relevant to our trip: **December ~16:30**, **January ~17:00**. A ~10-min lighting pattern loops throughout the evening.
  - **Special extended hours for our dates:** **Dec 31 → Jan 3, light-up is extended until 2:00 AM** (we'll be in Hokkaido over New Year — plan accordingly if schedule allows).
  - **→ Recommended plan:** arrive ~1 hr before sunset, photograph the daylight pond briefly, then stay through light-up start so we see both states in one visit. Budget ~45–60 min at the pond. Bring a tripod if any of us wants to shoot — night exposure is long.

### Biei/Furano → Abashiri (1–2 nights)

- **Drive:** Biei → Abashiri is **~220 km / ~3–4 hr** on expressway in summer; in winter with snow/ice, budget **4–5 hr**. Plan a mid-morning start to arrive by mid-afternoon with daylight.
- **Stay:** **Abashiri (網走)** city — [Google Maps](https://maps.app.goo.gl/T6FTh8gxwZdsac4D8). 1–2 nights, 2 rooms. Hotel not yet shortlisted.
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

### Abashiri → Wakkanai / Cape Sōya (1 night preferred, 2 nights possible)

- **Drive:** Abashiri → Wakkanai is **~326 km / ~4 hr** in summer on Route 238 coastal road; in winter budget **5–6+ hr** with snow, ice, and wind gusts along the Okhotsk coast. This is a **long, serious winter drive** — arguably the toughest on the whole trip. Start early, leave buffer, monitor road closures (coastal Route 238 is prone to closures during blizzards / high winds).
- **Stay:** **Surfeel Hotel Wakkanai (サフィールホテル稚内)** — [Google Maps](https://maps.app.goo.gl/zGtEvTEBRbSQzsES6). **User preference: 1 night**, 2 rooms. Central Wakkanai location (near 稚内駅 / port area).
- **Must-visit (main reason for the leg):**
  - **Cape Sōya / 宗谷岬 (Sōya-misaki)** — [Google Maps](https://maps.app.goo.gl/JrgXYnrJ37Jim4146). **The northernmost point of mainland Japan.** ~30 km / ~40 min drive north of Wakkanai city along Route 238. The 最北端の地 monument + the "Song of Cape Sōya" stone are the key photo subjects. On clear days Sakhalin is visible ~43 km across the strait.
    - **Winter access:** Route 238 is maintained year-round; own car is straightforward. Bus (宗谷バス, ~¥1,390 one-way) and taxi (~¥10,000 one-way from city) also run year-round. We have the rental, so drive.
    - ⚠️ **Weather warning:** Wakkanai has one of the worst winter flight-cancellation rates in Japan; gale-force winds + whiteouts + ice on the cape plateau are common. Plan a flexible window (morning-of check), not a single fixed slot.
- **Additional "amazing view" suggestions near Wakkanai (for judgment call on 1 vs 2 nights):**
  - **ノシャップ岬 (Noshappu Cape) + ノシャップ寒流水族館** — westernmost cape of the Wakkanai peninsula, sunset views over the Sea of Japan with Rishiri-Fuji silhouette on clear days. Co-located aquarium has winter indoor option.
  - **稚内公園 / 氷雪の門 (Wakkanai Park / Gate of Ice & Snow monument)** — hillside park above the town with Karafuto (Sakhalin) memorials and a 100-m observatory tower. Commanding view of the port, Rishiri, Rebun on clear days.
  - **白い道 (White Road, Soya Hills)** — famous summer scallop-shell white road inland from Cape Sōya. **In winter this disappears under snow** — drop from the list for our trip.
- **→ 1-night recommendation rationale:** Wakkanai's main payoff (Cape Sōya) is a 2–3 hr round-trip from the hotel. One full day covering drive-in + Cape Sōya + Noshappu + overnight + early drive-out next morning is adequate. A second night only makes sense if the Cape Sōya weather window requires a redo the next day.

### Wakkanai → Otaru (3–4 nights)

- **Drive:** Wakkanai → Otaru is **~330 km / ~4 hr** in summer, likely **5–6+ hr in winter** via Dōō Expressway + Route 5. Similar magnitude to the Abashiri → Wakkanai leg. Start early, plan a lunch stop (e.g. Rumoi / Mashike on Route 231 coastal option, or Asahikawa on the expressway option).
- **Stay (primary):** central Otaru, 3–4 nights, 2 rooms. Hotel not yet shortlisted.
- **Stay (optional split):** **Hotel Neuschloss Otaru (ホテルノイシュロス小樽)** — [Google Maps](https://maps.app.goo.gl/EVydysyveUp9Q3DHA) — 〒047-0047 北海道小樽市祝津3丁目282. **1–2 nights if price is acceptable.** All-ocean-view castle-style resort inside the Niseko-Shakotan-Otaru Kaigan Quasi-National Park. Every room has a private open-air bath (源泉掛け流し). Western-style doubles (2 guests) and Japanese-Western quad rooms (4 guests) both exist. Check-in 15:00, check-out 11:00. Located in **Shukutsu** on the northwest coast, **adjacent to Otaru Aquarium** — handy combined day. Creative French dinner. TEL 0134-22-9111.
- **Must-visit (from user):**
  - **Mt. Tengu Ropeway / 小樽天狗山ロープウェイ base station** — [Google Maps](https://maps.app.goo.gl/jEUzKT7ByXnta1xF9). 532 m summit, ~4-min ride. **Winter ropeway season: 2026-11-29 → 2027-03-31 (equivalent dates), daily 09:00–20:00** (last up 19:48, last down 20:00). Round-trip ¥1,800 adult. **One of Hokkaido's "Three Great Night Views"** (with 函館山 Phase 2 and 藻岩山 Sapporo — we'll hit 2 of the 3). Summit has a "heart object" photo spot. Go **after sunset** for the night-view payoff.
  - **Otaru Aquarium / おたる水族館** — [Google Maps](https://maps.app.goo.gl/UNnUot3kmno1LSoQ7). On the Shukutsu coast, co-located with Hotel Neuschloss. Winter program includes sea lion / penguin shows; well-regarded family attraction. Verify winter hours at time of booking — some outdoor exhibits may run reduced schedules.
  - **Otaru Music Box Museum / 小樽オルゴール堂 (Main Hall)** — [Google Maps](https://maps.app.goo.gl/3kq8Va1PePPcY8a89) — 〒047-0027 北海道小樽市住吉町4-1. Iconic steam clock out front, two-floor historic building packed with music boxes. At the end of 堺町本通り (Sakaimachi shopping street) — pair with Otaru Canal walk, LeTAO, glass shops.
  - **Uomasa / 魚真 (sushi)** — [Google Maps](https://maps.app.goo.gl/CPaQc68SWsABcke29) — 〒047-0032 北海道小樽市稲穂2-5-11. Local-favorite, well-priced sushi. Lunch **12:00–14:00**, dinner **16:00–21:30**, **closed Sundays**. ~6-min walk from JR 小樽駅. ⚠️ **No reservations taken — first-come first-served; queues common from pre-opening.** Plan arrival 20–30 min before opening for a table. Pick a non-Sunday day.
- **Full drone / self-filming day — 朝里 (Asari) area:**
  - User target: **Asari district, Otaru (朝里, 〒047-0151)** — [Google Maps](https://maps.app.goo.gl/uq4xJXgwdisyyzFa9). Dedicated full day for drone aerials + ground self-filming.
  - **Prime drone subject:** **朝里スカイループ (Asari Sky Loop)** — the spiral / double-loop viaduct structure on the 札樽自動車道 Asari IC area. One of Hokkaido's most-photographed infrastructure shots from the air, especially striking with winter forest around it. Nearby: **朝里ダム (Asari Dam)** winter landscapes and **朝里川温泉 (Asarigawa Onsen)** village for warm-up stops.
  - ⚠️ **Drone regulatory stack — verify before the day:**
    1. **DID (人口集中地区 / densely inhabited district):** central Otaru falls inside DID; the **Asari area itself is largely outside DID** (residential but low-density, bordering forest), but boundaries must be confirmed on the **地理院地図 DID layer**. Any DID overflight requires **MLIT/JCAB permission via DIPS 2.0, applied ≥10 business days in advance.**
    2. **Expressway overflight rule:** flying **directly over** the 札樽自動車道 expressway is **not allowed** without specific permission (risk to drivers if the drone falls). Shoot the Sky Loop from an **offset angle / side position** over adjacent non-road ground, not vertically above the roadway.
    3. **Quasi-National Park layer:** the Otaru coast (and Hotel Neuschloss area) is inside the **Niseko-Shakotan-Otaru Kaigan Quasi-National Park**. Drone flight in Hokkaido 国定公園 / 道立自然公園 is **not explicitly permit-required** by Hokkaido rules, but check each 自然保護官事務所 / local signage for restrictions, especially around protected cliffs / seabird areas.
    4. **Weather / wind:** winter Hokkaido coast gusts are brutal. Consumer drones are marginal above ~10 m/s; have a no-fly fallback plan (ground-only filming day) if conditions are bad. Plan the drone day flexibly, not on a fixed date.
    5. **Battery cold performance:** LiPo batteries lose ~30–40% capacity at −10 °C. Bring extras, keep in inside pockets, pre-warm before flights.
- **Suggested extra Otaru content (3–4 nights gives room):**
  - **Otaru Canal (小樽運河)** at dusk — gas-lamp street and canal walk, iconic Otaru postcard scene.
  - **Sakaimachi-dōri (堺町通り)** — main shopping / snack / glassware street; includes Music Box Museum.
  - **Nikka Whisky Yoichi distillery (ニッカウヰスキー余市蒸溜所)** — ~30 km / 40 min drive west, free tours. (Note: production tours require online reservations far in advance.)
  - **Shakotan Peninsula / 神威岬 (Cape Kamui)** — Shakotan blue coast. ⚠️ Cape Kamui's 遊歩道 is **closed in winter** due to snow; only the base area / 積丹岬 area is accessible. Coastal drive still rewarding on clear days.
  - **Daytime Tengu Ski** — optional for anyone who skis; we're "explicitly not skiing" per Phase 1 note, but Tengu has a beginner area if interest shifts.

### Sapporo (3 nights — confirmed) — end of Phase 2

- **Drive:** Otaru → Sapporo is short, **~40 km / 45 min** on 札樽自動車道. Drop the rental car in Sapporo on the way in or on the morning of Phase 3 departure (whichever is simpler for the lease terms).
- **Car return:** most major rental chains have Sapporo city branches (Sapporo Station / Susukino) and New Chitose Airport branches. Confirm drop-off point when booking the rental back in Sapporo at the start of the Biei leg.
- **Stay:** central Sapporo (Sapporo Station / Odori / Susukino corridor), **3 nights (confirmed)**, 2 rooms. Hotel not yet shortlisted.
- **Transit to Tokyo (user-confirmed plan: overland train + Shinkansen):**
  - **Leg 1:** JR 特急 北斗 (Limited Express Hokuto) 札幌 → 新函館北斗. **~3 hr 30 min.**
  - **Leg 2:** 北海道新幹線 (Hokkaido Shinkansen) 新函館北斗 → 東京. **~4 hr.**
  - **Total: ~8 hours + transfer buffer.** This is effectively a full travel day — lose ~1 Phase-3 Tokyo day to transit.
  - ⚠️ **Hokkaido Shinkansen extension to Sapporo is NOT available** in our window — opening was revised in Dec 2024 from FY2030 to **FY2038**. The Shin-Hakodate-Hokuto transfer is unavoidable.
  - **Alternative (for reference, not user-preferred):** fly Sapporo 新千歳 (CTS) → Tokyo 羽田 (HND) or 成田 (NRT) in ~1.5 hr flight time; ~3.5–4 hr total door-to-door. Much faster but user explicitly chose rail. Keep as a bad-weather backup.
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
- ~~**Phase 2 — Hakodate nights:** decide **1 vs 2 nights** in Hakodate.~~ ✅ **Resolved 2026-04-19 → 2 nights.** Updated 2026-04-20 for new day-04 transit: arrive **day-04 (2026-12-30) evening** after Karuizawa → Tokyo → Shin-Hakodate-Hokuto → Hakodate rail day; **day-05 (2026-12-31, NYE)** = 朝市 / 元町坂 / Red-Brick Warehouses + NYE dinner; **day-06 (2027-01-01)** = 元旦 daytime + Mt. Hakodate ropeway night view; **day-07** = JR 特急 北斗 to Toya.
- **Phase 2 — how to get around Lake Toya during the 2-night Windsor stay.** Options: (a) rely on the Windsor shuttle for station runs only + taxis for Silo / Usuzan / Noboribetsu, (b) book a short-term rental locally for 1–2 days, (c) arrange a hired driver / local tour. We don't have our own rental until Sapporo. Need to price / decide.
- **Phase 2 — Sapporo overnight: avoid or accept?** User prefers to skip it, but that only works if rental-car pickup timing allows a safe winter drive to Biei the same day. If pickup runs late, overnight Sapporo (or Chitose) becomes the safer option. Confirm once train + rental pickup time is known.
- **Phase 2 — Biei / Furano 1-night accommodation** not yet shortlisted. Need 2 rooms.
- **Phase 2 — confirm Blue Pond plan around New Year.** We're in Hokkaido over 2026-12-31 → 2027-01-03; Blue Pond extends light-up to 02:00 during that window. Decide whether to deliberately schedule the visit inside that extended-hours window for the novelty, or take the standard late-afternoon-into-evening visit.
- **🚨 Phase 2 — drift-ice timing reconciliation (biggest Phase-2 decision).** Abashiri's headline attraction is drift ice, but it typically arrives only **mid-to-late January**. Our Phase 2 falls earlier. Decide:
  - (a) Accept no real drift ice; substitute with the Okhotsk Ryūhyō Museum (indoor −15 °C chamber with preserved ice) + scenic Okhotsk coast. Keeps the 23-day shape.
  - (b) Shift Phase 2 later in the trip (requires compressing Phase 1 or 3).
  - (c) Skip Abashiri / Shiretoko entirely and replace with other Hokkaido content (Otaru, Niseko, etc.) if drift ice was the main reason for this leg.
- ~~**Phase 2 — Abashiri 1 vs 2 nights**~~ ✅ **Resolved → 2 nights.** Day-10 = 网走 + 知床方向 full loop (流氷館 + 能取岬 + 天に続く道 + オシンコシン滝 + 鱒浦); day-11 = drive to Wakkanai.
- **Phase 2 — Abashiri lodging** not yet shortlisted. Need 2 rooms.
- **Phase 2 — the Abashiri → Wakkanai winter drive (~326 km, 5–6+ hr in winter) is the trip's toughest single leg.** Confirm all four drivers are comfortable with long snow/ice driving, or consider splitting with an intermediate overnight (e.g. Monbetsu, Hamatonbetsu) or switching to train (JR line exists but slower with transfers).
- **Phase 2 — 天に続く道 road condition check.** In late Dec / early Jan the road is only reliably plowed in February; morning closures are possible. Plan day-of based on local conditions; have a fallback if the road is shut.
- **Phase 2 — return path from Wakkanai to Otaru is a commitment.** Wakkanai → Otaru is ~330 km / 5–6+ hr in winter — on par with Abashiri → Wakkanai. Confirm drivers are OK with two back-to-back long winter legs, or consider breaking with an overnight in Rumoi / Asahikawa.
- ~~**Phase 2 — Otaru 3 vs 4 nights**~~ ✅ **Resolved → 3 nights total** (2 at central Otaru + 1 at Hotel Neuschloss on drone-day night). No weather-retry buffer; if drone day blows out, accept ground-only filming.
- **Phase 2 — Hotel Neuschloss split decision** gated on price (user said "if price is ok"). Check rates for 2 rooms (4 guests) for candidate nights; compare against central Otaru hotels. Neuschloss is ~7 km from central Otaru — splitting means changing base mid-stay.
- **Phase 2 — Otaru → Phase 3 transit.** Otaru to Tokyo most naturally goes Otaru → Sapporo/New-Chitose → Haneda by air, or train to Hakodate → Shinkansen to Tokyo. Decide based on Phase 3 start location and the rental-car drop-off point. (New Chitose drop-off is easiest for flights; Sapporo drop-off is the standard choice if we want the 北海道新幹線 onward.)
- **Phase 2 — drone day permissions lead time.** If the Asari drone day touches any DID zone or requires other MLIT/JCAB-approved operations, **file the DIPS 2.0 application ≥10 business days in advance** — this is a standing deadline, not a task to leave to the week of. Add to pre-trip checklist once the specific flight area is chosen.
- ~~**🚨 Phase 2 — total night-count sanity check.**~~ ✅ **Resolved → 3 / 14 / 5.** See the "Confirmed night allocation" table at the top. Phase 2 = 14 nights (Hakodate 2 · Toyako 2 · Biei 1 · Abashiri 2 · Wakkanai 1 · Otaru 2+1 · Sapporo 3); Phase 3 = 5 nights.
- **Phase 2 — Uomasa is closed Sundays.** Schedule the Otaru sushi visit on a weekday and arrive before the open time to avoid the queue; otherwise pick a lunch or early-dinner slot on a Monday/Tuesday.
- ~~**Phase 2 — Sapporo 2 vs 3 vs 4 nights**~~ ✅ **Resolved → 3 nights.** Day-16 = 祝津→札幌 + 白い恋人 illumination; day-17 = 二条 + 頭大仏 + 大倉山 + 蟹本家; day-18 = ROYCE' Town + 藻岩山 + NANDA. (Trimmed from Tokyo: Phase 3 = 5 nights instead of 6.)
- **Phase 2 — rental-car drop-off point.** Options: (a) Sapporo city branch (convenient if we stay central), (b) New Chitose Airport branch (only makes sense if we flip to the flight option to Tokyo), (c) Otaru branch (if we split Otaru/Sapporo differently). Confirm with the rental company at the original Sapporo pickup booking.
- **Phase 2 — ROYCE' Cacao & Chocolate Town reservation.** Reservation is **required**. Book on the official e-tix site ≥2 weeks out for weekend slots, ≥1 week for weekdays — entry slots sell out in peak winter season.
- **Phase 2 — Kani Honke / NANDA reservations.** Both need advance booking for a party of 4; book ≥2–3 weeks out for winter dinner slots.
- **Phase 2 — Moiwa redundancy check.** We already commit to 函館山 (Phase 2 start) and 小樽天狗山 (Otaru). Adding Moiwa gives us "all three of Hokkaido's Three Great Night Views" in one trip but repeats the same visual pattern three times. Decide if the completion is worth the extra evening; otherwise skip and use the slot for another Sapporo activity.
- **Phase 2 — New Year closures (年末年始, 2026-12-31 → 2027-01-03).** Many attractions run reduced/closed schedules over this window (Moiwa Ropeway is explicitly listed as closing 年末年始; temples often free/open, commercial venues often closed). Audit every planned activity in the Dec 28 – Jan 3 window against its holiday schedule before finalizing.
- ~~**Phase 3 — Subaru Mitaka is closed Tue + Wed.**~~ ✅ **Resolved 2026-04-20** → scheduled on day-20 (Fri 2027-01-15), open.
- ~~**Phase 3 — day for Autobacs Shinonome.**~~ ✅ **Resolved 2026-04-20** → day-21 (Sat 2027-01-16) morning/midday 2+ hr block, ahead of Gonpachi dinner.
- **Phase 3 — Subaru Star Square Ebisu hours / closed days.** Confirm the flagship showroom's opening hours for Fri 2027-01-15 (and whether Jan mid-month has any special hours). Booking / appointment requirement also TBD — some Subaru brand showrooms in Japan accept walk-ins, others require reservation for cockpit / sim experiences.
- **Phase 3 — book Mominotakumi + K-two appointments early.** Massage is flexible (365-day operation, online 24/7 booking) so do closer to date; **haircut (K-two) should book ≥2 weeks out**, especially for English-speaking stylist availability and weekend slots.
- **Phase 3 — confirm Jan 2027 auction / antique-market schedule ~late Dec 2026.** Target = **Oedo Antique Market Jan 17 (3rd Sunday)** if it falls in-window. Also monitor Mainichi / Shinwa / Tokyo Chuo / SBI Art / MEGURU websites for Jan 2027 preview dates once they publish (~1 month out).
- **Phase 3 — Gonpachi reservation** if committed: book ≥1–2 weeks out for a party of 4, specify 2-hour slot.
- **Phase 3 — Tokyo base decision: Shibuya vs Shinjuku vs Ginza/Marunouchi.** Shibuya is user-preferred and closest to committed appointments; Ginza/Marunouchi puts us next to Oedo Antique Market + auction houses. Could split: Shibuya for most of stay + 1 night near the Oedo Sunday for the auction/market weekend. Decide once Phase 3 night-count is fixed.
- **Phase 3 — 2-room lodging strategy in Tokyo.** Same 2BR/2BA requirement as Phase 1/2. Airbnb likely cheaper than 2 Tokyo hotel rooms over 7+ nights — price both before committing.
- **Phase 3 — departure day (2027-01-18) logistics.** Confirm flight time, Haneda vs Narita, and plan the last-night hotel location accordingly (early flight → stay near airport the night before).
