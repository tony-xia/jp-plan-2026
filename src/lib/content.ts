import { readFileSync } from "node:fs";
import { join } from "node:path";
import yaml from "js-yaml";
import { Trip, type Day, type CitySegment, type TravelTime } from "./schema";
import { loadTravelTimes } from "./travel-times";

let cached: Trip | null = null;

function loadYaml<T = unknown>(path: string): T {
  return yaml.load(readFileSync(path, "utf8")) as T;
}

export function getTrip(): Trip {
  if (cached) return cached;
  const root = join(process.cwd(), "src/content");

  const meta = loadYaml<Record<string, unknown>>(join(root, "trip.yaml"));
  const bookingsDoc = loadYaml<{ bookings: unknown[] }>(
    join(root, "bookings.yaml"),
  );

  const merged = {
    ...meta,
    bookings: bookingsDoc.bookings,
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
