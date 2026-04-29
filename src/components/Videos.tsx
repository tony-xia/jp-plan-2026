type Video = {
  id: string;
  title_zh: string;
  title_ja?: string;
  title_en?: string;
  src: string;
};

const VIDEOS: Video[] = [
  {
    id: "kushiro-hdr",
    title_zh: "钏路 · HDR",
    title_ja: "釧路",
    title_en: "Kushiro, Hokkaido",
    src: "https://jpplan.blob.core.windows.net/website/KUSHIRO%20Hokkaido%20HDR.mp4?sp=r&st=2026-04-28T01:24:16Z&se=2026-06-01T09:39:16Z&spr=https&sv=2025-11-05&sr=b&sig=%2BEGQgn1dBF1m7bpLWKD%2BxPu2Uwiq2NOfc9bVurCPmh4%3D",
  },
];

export function Videos() {
  return (
    <section className="mt-20">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="cursor-pointer list-none flex items-baseline gap-4 -mx-2 px-2 py-6 rounded-sm hover:bg-white/60 transition-colors rule">
          <span
            className="font-serif-jp text-muted text-base transition-transform group-open:rotate-90 inline-block w-3"
            aria-hidden
          >
            ›
          </span>
          <span className="flex-1 min-w-0">
            <span className="font-serif-jp text-3xl font-semibold">
              影像
            </span>
            <span className="annot annot-ja ml-3">
              映像 · Videos
            </span>
          </span>
          <span className="font-serif-jp text-sm text-accent w-20 text-right tabular-nums">
            {VIDEOS.length} 段
          </span>
        </summary>

        <div className="mt-4 mb-6 pl-7 space-y-10">
          {VIDEOS.map((v) => (
            <figure key={v.id}>
              <video
                src={v.src}
                controls
                preload="metadata"
                playsInline
                className="w-full rounded border border-hairline bg-black"
              />
              <figcaption className="mt-3 flex items-baseline gap-3 flex-wrap">
                <span className="font-serif-jp text-lg font-semibold">
                  {v.title_zh}
                </span>
                {(v.title_ja || v.title_en) && (
                  <span className="annot annot-ja">
                    {[v.title_ja, v.title_en].filter(Boolean).join(" · ")}
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </details>
    </section>
  );
}
