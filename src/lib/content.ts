import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import yaml from "js-yaml";
import { Trip, type Day, type CitySegment, type TravelTime, type Booking } from "./schema";
import { loadTravelTimes } from "./travel-times";

let cached: Trip | null = null;

function loadYaml<T = unknown>(path: string): T {
  return yaml.load(readFileSync(path, "utf8")) as T;
}

function loadDayShards(daysDir: string): unknown[] {
  const files = readdirSync(daysDir)
    .filter((f) => f.endsWith(".yaml"))
    .sort();
  return files.map((f) => {
    const doc = loadYaml<{ day: unknown }>(join(daysDir, f));
    if (!doc || typeof doc !== "object" || !("day" in doc)) {
      throw new Error(`Day shard ${f} must contain a top-level 'day:' key`);
    }
    return doc.day;
  });
}

function loadPlaceShards(placesDir: string): unknown[] {
  const files = readdirSync(placesDir)
    .filter((f) => f.endsWith(".yaml"))
    .sort();
  const out: unknown[] = [];
  for (const f of files) {
    const doc = loadYaml<{ places: unknown[] }>(join(placesDir, f));
    if (!doc || typeof doc !== "object" || !Array.isArray(doc.places)) {
      throw new Error(`Place shard ${f} must contain a top-level 'places:' array`);
    }
    out.push(...doc.places);
  }
  return out;
}

function assertUnique(ids: string[], label: string) {
  const seen = new Set<string>();
  const dupes: string[] = [];
  for (const id of ids) {
    if (seen.has(id)) dupes.push(id);
    seen.add(id);
  }
  if (dupes.length > 0) {
    throw new Error(`Duplicate ${label}(s): ${dupes.join(", ")}`);
  }
}

export function getTrip(): Trip {
  if (cached) return cached;
  const root = join(process.cwd(), "src/content");

  const meta = loadYaml<Record<string, unknown>>(join(root, "trip.yaml"));
  const bookingsDoc = loadYaml<{ bookings: unknown[] }>(
    join(root, "bookings.yaml"),
  );
  const places = loadPlaceShards(join(root, "places"));
  const days = loadDayShards(join(root, "days"));

  assertUnique(
    places.map((p) => (p as { id: string }).id),
    "place id",
  );
  assertUnique(
    days.map((d) => (d as { id: string }).id),
    "day id",
  );

  const merged = {
    ...meta,
    bookings: bookingsDoc.bookings,
    places,
    days,
    travelTimes: loadTravelTimes(),
  };

  const result = Trip.safeParse(merged);
  if (!result.success) {
    const issues = result.error.issues
      .map((i) => `  - ${i.path.join(".")}: ${i.message}`)
      .join("\n");
    throw new Error(`Invalid trip content:\n${issues}`);
  }
  cached = result.data;
  return cached;
}

export function findTravelTime(
  trip: Trip,
  fromPlaceId: string,
  toPlaceId: string,
): TravelTime | undefined {
  return (trip.travelTimes ?? []).find(
    (t) => t.from === fromPlaceId && t.to === toPlaceId,
  );
}

export function findCoveringBooking(
  trip: Trip,
  day: Day,
  fromPlaceId: string,
  toPlaceId: string,
): Booking | undefined {
  const candidates: Booking[] = [...(day.bookings ?? []), ...trip.bookings];
  return candidates.find((b) =>
    (b.coveredLegs ?? []).some(
      (l) => l.from === fromPlaceId && l.to === toPlaceId,
    ),
  );
}

export function getSegment(segmentId: string): CitySegment | undefined {
  return getTrip().segments.find((s) => s.id === segmentId);
}

export function getDay(dayId: string): Day | undefined {
  return getTrip().days.find((d) => d.id === dayId);
}

export function getDaysForSegment(segmentId: string): Day[] {
  const segment = getSegment(segmentId);
  if (!segment) return [];
  const byId = new Map(getTrip().days.map((d) => [d.id, d]));
  return segment.days
    .map((id) => byId.get(id))
    .filter((d): d is Day => d !== undefined);
}
