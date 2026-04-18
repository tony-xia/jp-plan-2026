import { notFound } from "next/navigation";
import { getTrip, getDaysForSegment, getSegment } from "@/lib/content";
import { SegmentNav } from "@/components/SegmentNav";
import { DayCard } from "@/components/DayCard";

export function generateStaticParams() {
  return getTrip().segments.map((s) => ({ segment: s.id }));
}

export default async function SegmentPage({
  params,
}: {
  params: Promise<{ segment: string }>;
}) {
  const { segment: segmentId } = await params;
  const trip = getTrip();
  const segment = getSegment(segmentId);
  if (!segment) notFound();

  const days = getDaysForSegment(segmentId);

  // Global day index across the whole trip
  const globalIndex = new Map<string, number>();
  trip.segments.forEach((s) => {
    s.days.forEach((id) => {
      globalIndex.set(id, globalIndex.size + 1);
    });
  });

  return (
    <div className="min-h-full bg-background">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <SegmentNav trip={trip} current={segmentId} />

        <header className="mt-16 mb-16 relative">
          <div
            className="vertical-ja absolute right-0 top-0 hidden sm:block text-sm"
            aria-hidden
          >
            {segment.name.ja}
          </div>
          <div className="annot uppercase tracking-[0.3em] text-xs">
            {segment.name.en || segment.name.ja}
          </div>
          <h1 className="mt-3 text-5xl font-serif-jp font-semibold leading-tight">
            {segment.name.zh}
          </h1>
          <div className="mt-4 text-sm text-muted font-mono">
            {days.length > 0 && (
              <>
                {days[0].date} — {days[days.length - 1].date}
              </>
            )}
          </div>
        </header>

        <div>
          {days.map((d) => (
            <DayCard
              key={d.id}
              day={d}
              n={globalIndex.get(d.id) ?? 0}
              trip={trip}
              segmentId={segmentId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
