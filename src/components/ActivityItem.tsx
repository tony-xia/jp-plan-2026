import type { Activity, Trip } from "@/lib/schema";
import { resolvePlace } from "@/lib/schema";
import { TriName } from "./TriName";
import { AddressLinks } from "./AddressLinks";
import { PhotoGallery } from "./PhotoGallery";
import { t } from "@/lib/strings";

export function ActivityItem({
  activity,
  trip,
}: {
  activity: Activity;
  trip: Trip;
}) {
  const place = resolvePlace(activity.place, trip);
  const timeLabel = [activity.start, activity.end].filter(Boolean).join(" – ");

  return (
    <div className="grid grid-cols-[5rem_1fr] gap-6 py-6 rule">
      <div className="pt-1">
        <div className="font-mono text-sm text-muted tracking-wider">
          {timeLabel || "—"}
        </div>
        <div className="mt-1 annot">{t.placeKind[place.kind]}</div>
      </div>
      <div>
        <div className="flex items-baseline gap-3">
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
      </div>
    </div>
  );
}
