import { z } from "zod";

export const TriName = z.object({
  zh: z.string().min(1),
  en: z.string().optional(),
  ja: z.string().min(1),
});
export type TriName = z.infer<typeof TriName>;

export const Address = z.object({
  full: TriName,
});
export type Address = z.infer<typeof Address>;

export const PlaceKind = z.enum([
  "restaurant",
  "sight",
  "shrine",
  "shop",
  "hotel",
  "station",
  "other",
]);
export type PlaceKind = z.infer<typeof PlaceKind>;

export const Place = z.object({
  id: z.string().min(1),
  name: TriName,
  kind: PlaceKind,
  address: Address.optional(),
  googleMapsUrl: z.string().url().optional(),
  notes_zh: z.string().optional(),
  dishes: z.array(TriName).optional(),
  photos: z.array(z.string().min(1)).optional(),
  bookingUrl: z.string().url().optional(),
  airbnbUrl: z.string().url().optional(),
});
export type Place = z.infer<typeof Place>;

export const PlaceRef = z.object({ ref: z.string().min(1) });
export type PlaceRef = z.infer<typeof PlaceRef>;

export const Activity = z.object({
  id: z.string().min(1),
  start: z.string().optional(),
  end: z.string().optional(),
  place: z.union([Place, PlaceRef]),
  notes_zh: z.string().optional(),
});
export type Activity = z.infer<typeof Activity>;

export const BookingKind = z.enum(["flight", "hotel", "shinkansen", "other"]);
export type BookingKind = z.infer<typeof BookingKind>;

export const Booking = z.object({
  id: z.string().min(1),
  kind: BookingKind,
  title_zh: z.string().min(1),
  confirmation: z.string().optional(),
  from: TriName.optional(),
  to: TriName.optional(),
  start: z.string().min(1),
  end: z.string().optional(),
  address: Address.optional(),
  googleMapsUrl: z.string().url().optional(),
  details_zh: z.string().optional(),
  photos: z.array(z.string().min(1)).optional(),
  bookingUrl: z.string().url().optional(),
  airbnbUrl: z.string().url().optional(),
});
export type Booking = z.infer<typeof Booking>;

export const Day = z.object({
  id: z.string().min(1),
  date: z.string().min(1),
  city: z.string().min(1),
  title_zh: z.string().min(1),
  intro_zh: z.string().optional(),
  activities: z.array(Activity),
  bookings: z.array(Booking).optional(),
});
export type Day = z.infer<typeof Day>;

export const CitySegment = z.object({
  id: z.string().min(1),
  name: TriName,
  days: z.array(z.string().min(1)),
});
export type CitySegment = z.infer<typeof CitySegment>;

export const TravelTime = z.object({
  from: z.string().min(1),
  to: z.string().min(1),
  durationMin: z.number().int().nonnegative(),
  distanceKm: z.number().nonnegative(),
});
export type TravelTime = z.infer<typeof TravelTime>;

export const Trip = z.object({
  title_zh: z.string().min(1),
  travelers: z.array(z.string().min(1)),
  startDate: z.string().min(1),
  endDate: z.string().min(1),
  segments: z.array(CitySegment),
  days: z.array(Day),
  places: z.array(Place),
  bookings: z.array(Booking),
  travelTimes: z.array(TravelTime).optional(),
});
export type Trip = z.infer<typeof Trip>;

export function isPlaceRef(p: Place | PlaceRef): p is PlaceRef {
  return (p as PlaceRef).ref !== undefined;
}

export function resolvePlace(p: Place | PlaceRef, trip: Trip): Place {
  if (!isPlaceRef(p)) return p;
  const found = trip.places.find((x) => x.id === p.ref);
  if (!found) throw new Error(`Unknown place ref: ${p.ref}`);
  return found;
}
