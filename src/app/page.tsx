import { getTrip } from "@/lib/content";
import { Timeline } from "@/components/Timeline";
import { BookingItem } from "@/components/BookingItem";
import { Banner } from "@/components/Banner";

export default function Home() {
  const trip = getTrip();

  return (
    <div className="min-h-full bg-background">
      <Banner src="/banners/tokyo.jpg" alt="" priority />
      <div className="mx-auto max-w-3xl px-6 pt-6 pb-14">
        <header className="mt-10 mb-20">
          <div className="annot uppercase tracking-[0.3em] text-xs">
            Japan · 日本
          </div>
          <h1 className="mt-3 text-5xl sm:text-6xl font-serif-jp font-semibold leading-tight tracking-tight">
            {trip.title_zh}
          </h1>
          <div className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-1 text-sm text-muted font-mono">
            <span>
              {trip.startDate} — {trip.endDate}
            </span>
            <span>·</span>
            <span>{trip.travelers.join(" / ")}</span>
          </div>
        </header>

        <Timeline trip={trip} />

        {trip.bookings.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-serif-jp font-semibold mb-2">
              往返航班
            </h2>
            <span className="annot annot-ja">フライト</span>
            <div className="mt-4">
              {trip.bookings.map((b) => (
                <BookingItem key={b.id} booking={b} />
              ))}
            </div>
          </section>
        )}

        <footer className="mt-24 pt-8 rule text-xs text-muted text-center">
          <span className="vertical-ja inline-block mr-2" aria-hidden>
            旅
          </span>
          {trip.title_zh} · {trip.startDate}
        </footer>
      </div>
    </div>
  );
}
