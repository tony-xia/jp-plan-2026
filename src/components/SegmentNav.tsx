import Link from "next/link";
import type { Trip } from "@/lib/schema";

export function SegmentNav({
  trip,
  current,
}: {
  trip: Trip;
  current?: string;
}) {
  return (
    <nav className="flex items-baseline gap-6 text-sm">
      <Link
        href="/"
        className={
          current === undefined
            ? "text-foreground font-medium"
            : "text-muted hover:text-foreground transition-colors"
        }
      >
        <span className="font-serif-jp">首页</span>
      </Link>
      {trip.segments.map((s) => {
        const active = current === s.id;
        return (
          <Link
            key={s.id}
            href={`/${s.id}`}
            className={
              active
                ? "text-foreground font-medium"
                : "text-muted hover:text-foreground transition-colors"
            }
          >
            <span className="font-serif-jp">{s.name.zh}</span>
            <span className="ml-1 annot annot-ja">{s.name.ja}</span>
          </Link>
        );
      })}
    </nav>
  );
}
