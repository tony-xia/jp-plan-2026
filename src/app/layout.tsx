import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { getTrip } from "@/lib/content";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zh",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ja",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif-jp",
  display: "swap",
});

export function generateMetadata(): Metadata {
  const trip = getTrip();
  return {
    title: trip.title_zh,
    description: `${trip.title_zh} · ${trip.startDate} — ${trip.endDate}`,
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="zh-Hans"
      className={`${notoSansSC.variable} ${notoSansJP.variable} ${notoSerifJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
