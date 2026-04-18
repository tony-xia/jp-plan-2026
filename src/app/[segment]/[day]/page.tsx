import Link from "next/link";
import { notFound } from "next/navigation";
import { getTrip, getSegment, getDay } from "@/lib/content";
import { SegmentNav } from "@/components/SegmentNav";
import { DaySeal } from "@/components/DaySeal";
import { ActivityItem } from "@/components/ActivityItem";
import { BookingItem } from "@/components/BookingItem";
import { t } from "@/lib/strings";

export function generateStaticParams() {
  const params: { segment: string; day: string }[] = [];
  const trip = getTrip();
  for (const seg of trip.segments) {
    for (const dayId of seg.days) {
      params.push({ segment: seg.id, day: dayId });
    }
  }
  return params;
}

export default async function DayPage({
  params,
}: {
  params: Promise<{ segment: string; day: string }>;
}) {
  const { segment: segmentId, day: dayId } = await params;
  const trip = getTrip();
  const segment = getSegment(segmentId);
  const day = getDay(dayId);
  if (!segment || !day || day.city !== segmentId) notFound();

  const globalIndex = new Map<string, number>();
  trip.segments.forEach((s) => {
    s.days.forEach((id) => {
      globalIndex.set(id, globalIndex.size + 1);
    });
  });
  const n = globalIndex.get(day.id) ?? 0;

  return (
    <div className="min-h-full bg-background">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <SegmentNav trip={trip} current={segmentId} />

        <Link
          href={`/${segmentId}`}
          className="mt-10 inline-block text-sm text-muted hover:text-accent transition-colors"
        >
          ← {segment.name.zh} {t.backToSegment}
        </Link>

        <header className="mt-8 mb-12">
          <div className="flex items-start gap-5">
            <DaySeal n={n} />
            <div>
              <div className="font-mono text-xs text-muted">
                {day.date} · {segment.name.zh} {segment.name.ja}
              </div>
              <h1 className="mt-2 text-4xl sm:text-5xl font-serif-jp font-semibold leading-tight">
                {day.title_zh}
              </h1>
            </div>
          </div>
          {day.intro_zh && (
            <p className="mt-6 text-base text-muted leading-relaxed max-w-prose">
              {day.intro_zh}
            </p>
          )}
        </header>

        {day.activities.length > 0 && (
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] text-muted mb-2">
              {t.activities}
            </h2>
            <div>
              {day.activities.map((a) => (
                <ActivityItem key={a.id} activity={a} trip={trip} />
              ))}
            </div>
          </section>
        )}

        {day.bookings && day.bookings.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xs uppercase tracking-[0.3em] text-muted mb-2">
              {t.bookings}
            </h2>
            <div>
              {day.bookings.map((b) => (
                <BookingItem key={b.id} booking={b} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
