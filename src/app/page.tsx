import { getTrip } from "@/lib/content";
import { CityList } from "@/components/CityList";
import { AntiqueMarkets } from "@/components/AntiqueMarkets";
import { DrivingGuide } from "@/components/DrivingGuide";
import { BannerCarousel } from "@/components/BannerCarousel";
import { Countdown } from "@/components/Countdown";
import { HashAutoOpen } from "@/components/HashAutoOpen";

const HOME_BANNERS = [
  "/banners/home/home-1.jpg",
  "/banners/home/home-2.jpg",
  "/banners/home/home-3.jpg",
  "/banners/home/home-4.jpg",
  "/banners/home/home-5.jpg",
  "/banners/home/home-6.jpg",
  "/banners/home/home-7.jpg",
];

export default function Home() {
  const trip = getTrip();

  return (
    <div className="min-h-full bg-background">
      <HashAutoOpen />
      <BannerCarousel srcs={HOME_BANNERS} alt="" />
      <div className="mx-auto max-w-3xl px-6 pt-6 pb-14">
        <header className="mt-10 mb-16">
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
          </div>
        </header>

        <CityList trip={trip} />

        <AntiqueMarkets />

        <DrivingGuide />

        <div className="mt-24 pt-8 rule flex justify-center">
          <Countdown startDate={trip.startDate} endDate={trip.endDate} />
        </div>

        <footer className="mt-16 pt-8 rule text-xs text-muted text-center">
          <span className="vertical-ja inline-block mr-2" aria-hidden>
            旅
          </span>
          {trip.title_zh} · {trip.startDate}
        </footer>
      </div>
    </div>
  );
}
