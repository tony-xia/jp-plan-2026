import type { Trip } from "@/lib/schema";
import { DayCard } from "./DayCard";

export function Timeline({ trip }: { trip: Trip }) {
  const dayById = new Map(trip.days.map((d) => [d.id, d]));

  // Precompute a global day index so render stays pure.
  const globalIndex = new Map<string, number>();
  trip.segments.forEach((s) => {
    s.days.forEach((id) => {
      globalIndex.set(id, globalIndex.size + 1);
    });
  });

  return (
    <div className="space-y-16">
      {trip.segments.map((segment) => (
        <section key={segment.id}>
          <header className="mb-4 flex items-baseline gap-4">
            <h2 className="text-3xl font-serif-jp font-semibold">
              {segment.name.zh}
            </h2>
            <span className="annot annot-ja text-sm">
              {segment.name.ja}
              {segment.name.en ? ` · ${segment.name.en}` : ""}
            </span>
          </header>
          <div>
            {segment.days.map((dayId) => {
              const d = dayById.get(dayId);
              if (!d) return null;
              return (
                <DayCard
                  key={dayId}
                  day={d}
                  n={globalIndex.get(dayId) ?? 0}
                  trip={trip}
                  segmentId={segment.id}
                />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
