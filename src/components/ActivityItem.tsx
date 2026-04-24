import type { Activity, Day, PlaceKind, Trip } from "@/lib/schema";
import { resolvePlace } from "@/lib/schema";

const PLACE_KIND_ICON: Record<PlaceKind, string> = {
  restaurant: "🍜",
  sight: "🗾",
  shrine: "⛩️",
  shop: "🛍️",
  hotel: "🏨",
  station: "🚉",
  other: "📍",
};
import { findTravelTime, findCoveringBooking } from "@/lib/content";
import { TriName } from "./TriName";
import { AddressLinks } from "./AddressLinks";
import { PhotoGallery } from "./PhotoGallery";
import { t } from "@/lib/strings";

export function ActivityItem({
  activity,
  nextActivity,
  day,
  trip,
}: {
  activity: Activity;
  nextActivity?: Activity;
  day: Day;
  trip: Trip;
}) {
  const place = resolvePlace(activity.place, trip);
  const nextPlace = nextActivity ? resolvePlace(nextActivity.place, trip) : null;
  const coveredBy =
    nextPlace && nextPlace.id !== place.id
      ? findCoveringBooking(trip, day, place.id, nextPlace.id)
      : undefined;
  const travel =
    nextPlace && nextPlace.id !== place.id && !coveredBy
      ? findTravelTime(trip, place.id, nextPlace.id)
      : undefined;

  return (
    <div className="py-6 rule">
      <div>
        <div className="flex items-baseline gap-3">
          <span
            className="text-lg leading-none shrink-0"
            aria-label={t.placeKind[place.kind]}
            title={t.placeKind[place.kind]}
          >
            {PLACE_KIND_ICON[place.kind]}
          </span>
          <TriName
            name={place.name}
            as="h3"
            primaryClassName="text-xl font-serif-jp font-semibold leading-tight"
          />
        </div>
        {activity.notes_zh && (
          <p className="mt-2 text-sm text-muted leading-relaxed">
            {activity.notes_zh}
          </p>
        )}
        {place.notes_zh && (
          <p className="mt-1 text-sm text-muted leading-relaxed">
            {place.notes_zh}
          </p>
        )}
        {place.dishes && place.dishes.length > 0 && (
          <div className="mt-3">
            <div className="annot mb-1">{t.signatureDishes}</div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {place.dishes.map((d, i) => (
                <li key={i}>
                  <TriName name={d} />
                </li>
              ))}
            </ul>
          </div>
        )}
        {place.address && (
          <div className="mt-4">
            <AddressLinks
              address={place.address}
              googleMapsUrl={place.googleMapsUrl}
            />
          </div>
        )}
        {place.photos && place.photos.length > 0 && (
          <div className="mt-4">
            <PhotoGallery
              photos={place.photos}
              alt={place.name.zh}
              externalLinks={[
                place.bookingUrl
                  ? { href: place.bookingUrl, label: "Booking.com" }
                  : null,
                place.airbnbUrl
                  ? { href: place.airbnbUrl, label: "Airbnb" }
                  : null,
              ].filter((x): x is { href: string; label: string } => x !== null)}
            />
          </div>
        )}
        {travel && nextPlace && (
          <div className="mt-4 flex items-center gap-2 text-xs text-muted">
            <span className="annot">→ 下一站</span>
            <span className="font-mono tracking-wide">
              {travel.durationMin >= 60
                ? `${Math.floor(travel.durationMin / 60)} 小时 ${travel.durationMin % 60} 分`
                : `${travel.durationMin} 分钟`}
              {" · "}
              {travel.distanceKm} km
            </span>
            <span className="text-hairline">·</span>
            <span className="truncate">{nextPlace.name.zh}</span>
          </div>
        )}
      </div>
    </div>
  );
}
