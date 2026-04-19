import type { Booking } from "@/lib/schema";
import { TriName } from "./TriName";
import { AddressLinks } from "./AddressLinks";
import { PhotoGallery } from "./PhotoGallery";
import { t } from "@/lib/strings";

function fmt(dt: string): string {
  const d = new Date(dt);
  if (Number.isNaN(d.getTime())) return dt;
  return d.toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function BookingItem({ booking }: { booking: Booking }) {
  return (
    <div className="py-5 rule">
      <div className="flex items-baseline gap-3">
        <span className="inline-block text-xs uppercase tracking-widest text-accent font-medium">
          {t.bookingKind[booking.kind]}
        </span>
        <h3 className="text-base font-serif-jp font-semibold">
          {booking.title_zh}
        </h3>
      </div>
      {(booking.from || booking.to) && (
        <div className="mt-2 grid grid-cols-[auto_auto_1fr] items-center gap-3 text-sm">
          {booking.from && <TriName name={booking.from} />}
          {booking.from && booking.to && (
            <span className="text-muted">→</span>
          )}
          {booking.to && <TriName name={booking.to} />}
        </div>
      )}
      <div className="mt-2 text-sm text-muted font-mono">
        {fmt(booking.start)}
        {booking.end ? ` – ${fmt(booking.end)}` : ""}
      </div>
      {booking.confirmation && (
        <div className="mt-1 text-xs text-muted">
          # {booking.confirmation}
        </div>
      )}
      {booking.details_zh && (
        <p className="mt-2 text-sm text-muted leading-relaxed">
          {booking.details_zh}
        </p>
      )}
      {booking.address && (
        <div className="mt-3">
          <AddressLinks
            address={booking.address}
            googleMapsUrl={booking.googleMapsUrl}
          />
        </div>
      )}
      {booking.photos && booking.photos.length > 0 && (
        <div className="mt-4">
          <PhotoGallery
            photos={booking.photos}
            alt={booking.title_zh}
            externalLinks={[
              booking.bookingUrl
                ? { href: booking.bookingUrl, label: "Booking.com" }
                : null,
              booking.airbnbUrl
                ? { href: booking.airbnbUrl, label: "Airbnb" }
                : null,
            ].filter((x): x is { href: string; label: string } => x !== null)}
          />
        </div>
      )}
    </div>
  );
}
