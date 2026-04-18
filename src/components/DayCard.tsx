import Link from "next/link";
import type { Day, Trip } from "@/lib/schema";
import { resolvePlace } from "@/lib/schema";
import { DaySeal } from "./DaySeal";

export function DayCard({
  day,
  n,
  trip,
  segmentId,
}: {
  day: Day;
  n: number;
  trip: Trip;
  segmentId: string;
}) {
  const preview = day.activities
    .slice(0, 3)
    .map((a) => resolvePlace(a.place, trip).name.zh)
    .join(" · ");

  return (
    <Link
      href={`/${segmentId}/${day.id}`}
      className="group block py-6 rule hover:bg-white/50 transition-colors -mx-4 px-4 rounded-sm"
    >
      <div className="flex items-start gap-5">
        <DaySeal n={n} />
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-muted">{day.date}</span>
          </div>
          <h3 className="mt-1 text-xl font-serif-jp font-semibold leading-snug group-hover:text-accent transition-colors">
            {day.title_zh}
          </h3>
          {preview && (
            <p className="mt-2 text-sm text-muted truncate">{preview}</p>
          )}
          {day.intro_zh && (
            <p className="mt-1 text-sm text-muted leading-relaxed line-clamp-2">
              {day.intro_zh}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
