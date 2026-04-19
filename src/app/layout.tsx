import type { Metadata } from "next";
import { getTrip } from "@/lib/content";
import "./globals.css";

const GOOGLE_FONTS_HREF =
  "https://fonts.googleapis.com/css2?" +
  [
    "family=Noto+Sans+SC:wght@400;500;700",
    "family=Noto+Sans+JP:wght@400;500",
    "family=Noto+Serif+JP:wght@400;600;700",
  ].join("&") +
  "&display=swap";

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
    <html lang="zh-Hans" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={GOOGLE_FONTS_HREF} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
