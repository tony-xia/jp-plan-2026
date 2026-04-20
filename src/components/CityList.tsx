import Link from "next/link";
import type { Trip, Day, Stay, Booking } from "@/lib/schema";
import { resolvePlace } from "@/lib/schema";
import { BookingItem } from "./BookingItem";

function mdShort(dateIso: string): string {
  const [, m, d] = dateIso.split("-");
  return `${Number(m)}/${Number(d)}`;
}

function formatStayRange(firstDate: string, lastDate: string): string {
  if (firstDate === lastDate) return mdShort(firstDate);
  return `${mdShort(firstDate)} – ${mdShort(lastDate)}`;
}

export function CityList({ trip }: { trip: Trip }) {
  const dayById = new Map(trip.days.map((d) => [d.id, d]));
  const bookingById = new Map(trip.bookings.map((b) => [b.id, b]));

  const staysBySegment = new Map<string, Stay[]>();
  trip.stays.forEach((s) => {
    const list = staysBySegment.get(s.segmentId) ?? [];
    list.push(s);
    staysBySegment.set(s.segmentId, list);
  });

  const nightsFor = (stay: Stay): number => {
    const days = stay.dayIds.map((id) => dayById.get(id)).filter((d): d is Day => !!d);
    if (days.length === 0) return 0;
    const lastDate = days[days.length - 1].date;
    return lastDate === trip.endDate ? days.length - 1 : days.length;
  };

  return (
    <div className="space-y-14">
      {trip.segments.map((segment) => {
        const stays = staysBySegment.get(segment.id) ?? [];
        const segmentNights = stays.reduce((n, s) => n + nightsFor(s), 0);
        return (
          <section key={segment.id}>
            <header className="mb-4 flex items-baseline gap-3">
              <h2 className="text-3xl font-serif-jp font-semibold">
                {segment.name.zh}
              </h2>
              <span className="annot annot-ja text-sm">
                {segment.name.ja}
                {segment.name.en ? ` · ${segment.name.en}` : ""}
                {` · ${segmentNights} 晚`}
              </span>
            </header>
            <div>
              {stays.map((stay) => (
                <StayCard
                  key={stay.id}
                  stay={stay}
                  trip={trip}
                  dayById={dayById}
                  bookingById={bookingById}
                  segmentId={segment.id}
                  nights={nightsFor(stay)}
                />
              ))}
            </div>
            {stays.length === 0 && (
              <p className="text-sm text-muted">（暂无城市）</p>
            )}
          </section>
        );
      })}
    </div>
  );
}

function StayCard({
  stay,
  trip,
  dayById,
  bookingById,
  segmentId,
  nights,
}: {
  stay: Stay;
  trip: Trip;
  dayById: Map<string, Day>;
  bookingById: Map<string, Booking>;
  segmentId: string;
  nights: number;
}) {
  const days = stay.dayIds
    .map((id) => dayById.get(id))
    .filter((d): d is Day => d !== undefined);
  const lodgings = stay.lodgingBookingIds
    .map((id) => bookingById.get(id))
    .filter((b): b is Booking => b !== undefined);

  const firstDate = days[0]?.date ?? "";
  const lastDate = days[days.length - 1]?.date ?? firstDate;
  const range = formatStayRange(firstDate, lastDate);

  return (
    <details className="group rule [&_summary::-webkit-details-marker]:hidden">
      <summary className="cursor-pointer list-none flex items-baseline gap-4 -mx-2 px-2 py-6 rounded-sm hover:bg-white/60 transition-colors">
        <span
          className="font-serif-jp text-muted text-base transition-transform group-open:rotate-90 inline-block w-3"
          aria-hidden
        >
          ›
        </span>
        <span className="flex-1 min-w-0">
          <span className="font-serif-jp text-xl font-semibold">
            {stay.city.zh}
          </span>
          <span className="annot annot-ja ml-2">
            {stay.city.en ? `${stay.city.en} · ` : ""}
            {stay.city.ja}
            {stay.note_zh ? ` · ${stay.note_zh}` : ""}
          </span>
        </span>
        <span className="font-mono text-xs text-muted tabular-nums">
          {range}
        </span>
        <span className="font-serif-jp text-sm text-accent w-20 text-right tabular-nums">
          {days.length} 天 · {nights} 晚
        </span>
      </summary>

      <div className="mt-4 pl-7 space-y-8">
        {lodgings.length > 0 && (
          <div>
            <h3 className="text-sm font-serif-jp font-semibold text-muted mb-1">
              住宿候选
            </h3>
            <span className="annot annot-ja">宿泊候補 · {lodgings.length} 项</span>
            <div className="mt-2">
              {lodgings.map((b) => (
                <BookingItem key={b.id} booking={b} />
              ))}
            </div>
          </div>
        )}

        {days.length > 0 && (
          <div>
            <h3 className="text-sm font-serif-jp font-semibold text-muted mb-1">
              每日行程
            </h3>
            <span className="annot annot-ja">日程 · {days.length} 天</span>
            <ul className="mt-2">
              {days.map((d) => {
                const preview = d.activities
                  .slice(0, 3)
                  .map((a) => resolvePlace(a.place, trip).name.zh)
                  .join(" · ");
                return (
                  <li key={d.id} className="rule">
                    <Link
                      href={`/${segmentId}/${d.id}`}
                      className="block py-3 -mx-2 px-2 rounded-sm hover:bg-white/60 transition-colors"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-muted tabular-nums w-16 shrink-0">
                          {mdShort(d.date)}
                        </span>
                        <span className="font-serif-jp text-base font-semibold truncate">
                          {d.title_zh}
                        </span>
                      </div>
                      {preview && (
                        <p className="mt-1 ml-[4.75rem] text-sm text-muted truncate">
                          {preview}
                        </p>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </details>
  );
}
