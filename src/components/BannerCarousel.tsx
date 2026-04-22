"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type BannerCarouselProps = {
  srcs: string[];
  alt: string;
  intervalMs?: number;
  fadeMs?: number;
};

export function BannerCarousel({
  srcs,
  alt,
  intervalMs = 5000,
  fadeMs = 1000,
}: BannerCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (srcs.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % srcs.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [srcs.length, intervalMs]);

  return (
    <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] overflow-hidden bg-background">
      {srcs.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          fill
          priority={i === 0}
          sizes="100vw"
          className="object-cover transition-opacity ease-in-out"
          style={{
            opacity: i === index ? 1 : 0,
            transitionDuration: `${fadeMs}ms`,
          }}
        />
      ))}
      <div
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--background))",
        }}
      />
    </div>
  );
}
