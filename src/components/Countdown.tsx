"use client";

import { useEffect, useState } from "react";
import { t } from "@/lib/strings";

type CountdownProps = {
  startDate: string; // "YYYY-MM-DD"
  endDate: string; // "YYYY-MM-DD"
};

type Remaining =
  | { kind: "pending"; days: number; hours: number; minutes: number; seconds: number }
  | { kind: "in-progress" }
  | { kind: "ended" };

function computeRemaining(startDate: string, endDate: string, now: Date): Remaining {
  const [sy, sm, sd] = startDate.split("-").map(Number);
  const [ey, em, ed] = endDate.split("-").map(Number);
  const start = new Date(sy, sm - 1, sd, 0, 0, 0, 0).getTime();
  // End-of-day on endDate (local).
  const end = new Date(ey, em - 1, ed, 23, 59, 59, 999).getTime();
  const nowMs = now.getTime();

  if (nowMs >= end) return { kind: "ended" };
  if (nowMs >= start) return { kind: "in-progress" };

  const diff = start - nowMs;
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  return { kind: "pending", days, hours, minutes, seconds };
}

export function Countdown({ startDate, endDate }: CountdownProps) {
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(computeRemaining(startDate, endDate, new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [startDate, endDate]);

  // Reserve vertical space before hydration to avoid layout shift.
  if (!remaining) {
    return <div className="mt-8 h-[92px]" aria-hidden />;
  }

  if (remaining.kind === "in-progress") {
    return (
      <div className="mt-8 flex items-center gap-3 text-accent">
        <span className="vertical-ja inline-block" aria-hidden>
          旅
        </span>
        <span className="font-serif-jp text-2xl tracking-wide">
          {t.countdown.inProgress}
        </span>
      </div>
    );
  }

  if (remaining.kind === "ended") {
    return (
      <div className="mt-8 text-muted font-serif-jp text-xl tracking-wide">
        {t.countdown.ended}
      </div>
    );
  }

  const units: Array<{ value: number; label: string }> = [
    { value: remaining.days, label: t.countdown.days },
    { value: remaining.hours, label: t.countdown.hours },
    { value: remaining.minutes, label: t.countdown.minutes },
    { value: remaining.seconds, label: t.countdown.seconds },
  ];

  return (
    <div className="mt-8">
      <div className="annot uppercase tracking-[0.3em] text-xs mb-3">
        {t.countdown.label}
      </div>
      <div className="flex items-baseline gap-4 sm:gap-6">
        {units.map((u, i) => (
          <div key={u.label} className="flex items-baseline gap-1.5">
            <span
              className={
                "font-mono tabular-nums leading-none " +
                (i === 0
                  ? "text-5xl sm:text-6xl text-accent font-semibold"
                  : "text-2xl sm:text-3xl text-foreground")
              }
            >
              {i === 0 ? u.value : String(u.value).padStart(2, "0")}
            </span>
            <span className="font-serif-jp text-sm text-muted">{u.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
