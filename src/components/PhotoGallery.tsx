"use client";

import { useCallback, useEffect, useState } from "react";

type Props = {
  photos: string[];
  alt: string;
  externalLinks?: { href: string; label: string }[];
};

export function PhotoGallery({ photos, alt, externalLinks }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length));
  }, [photos.length]);
  const prev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + photos.length) % photos.length,
    );
  }, [photos.length]);

  useEffect(() => {
    if (openIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, next, prev]);

  if (photos.length === 0) return null;

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto -mx-1 px-1 py-1 snap-x snap-mandatory sm:grid sm:grid-cols-4 sm:gap-3 sm:overflow-visible sm:snap-none">
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="flex-none snap-start relative h-28 w-40 sm:h-auto sm:w-full sm:aspect-[4/3] overflow-hidden rounded border border-hairline bg-surface cursor-zoom-in hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`${alt} — 查看大图 ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${alt} ${i + 1}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {externalLinks && externalLinks.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
          {externalLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer noopener"
              className="underline decoration-hairline underline-offset-2 hover:decoration-accent hover:text-accent"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      )}

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} — 大图预览`}
          onClick={close}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[openIndex]}
            alt={`${alt} ${openIndex + 1} / ${photos.length}`}
            className="max-h-[92vh] max-w-[94vw] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 text-white text-xl leading-none hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="关闭"
          >
            ×
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white text-2xl leading-none hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="上一张"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white text-2xl leading-none hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="下一张"
              >
                ›
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-mono tracking-wider">
                {openIndex + 1} / {photos.length}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
