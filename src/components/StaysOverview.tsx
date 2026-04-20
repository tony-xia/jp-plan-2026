type Stay = {
  zh: string;
  en: string;
  ja: string;
  note_zh?: string;
  nights: number;
  dates: string;
};

const stays: { segment_zh: string; segment_en: string; nights: number; items: Stay[] }[] = [
  {
    segment_zh: "北海道",
    segment_en: "Hokkaido",
    nights: 19,
    items: [
      { zh: "函館", en: "Hakodate", ja: "函館", nights: 3, dates: "12/27 – 12/29" },
      { zh: "札幌", en: "Sapporo", ja: "札幌", note_zh: "前段", nights: 3, dates: "12/30 – 1/1" },
      { zh: "稚内", en: "Wakkanai", ja: "稚内", nights: 2, dates: "1/2 – 1/3" },
      { zh: "網走", en: "Abashiri", ja: "網走", nights: 2, dates: "1/4 – 1/5" },
      { zh: "美瑛", en: "Biei", ja: "美瑛", nights: 1, dates: "1/6" },
      { zh: "小樽", en: "Otaru", ja: "小樽", nights: 3, dates: "1/7 – 1/9" },
      { zh: "洞爺", en: "Tōya", ja: "洞爺", note_zh: "Windsor", nights: 2, dates: "1/10 – 1/11" },
      { zh: "札幌", en: "Sapporo", ja: "札幌", note_zh: "返程", nights: 3, dates: "1/12 – 1/14" },
    ],
  },
  {
    segment_zh: "东京",
    segment_en: "Tokyo",
    nights: 4,
    items: [
      { zh: "东京", en: "Tokyo", ja: "東京", nights: 4, dates: "1/15 – 1/18" },
    ],
  },
];

export function StaysOverview() {
  return (
    <section className="mb-16">
      <header className="mb-6 flex items-baseline gap-3">
        <h2 className="text-2xl font-serif-jp font-semibold">住宿概览</h2>
        <span className="annot annot-ja">滞在一覧 · 23 晚</span>
      </header>
      <div className="space-y-8">
        {stays.map((group) => (
          <div key={group.segment_en}>
            <div className="flex items-baseline gap-3 mb-2">
              <h3 className="text-base font-serif-jp font-semibold text-muted">
                {group.segment_zh}
              </h3>
              <span className="annot">
                {group.segment_en} · {group.nights} 晚
              </span>
            </div>
            <ul>
              {group.items.map((s, i) => (
                <li
                  key={`${group.segment_en}-${i}`}
                  className="rule flex items-baseline gap-4 py-2.5"
                >
                  <span className="flex-1 min-w-0">
                    <span className="font-serif-jp text-base">{s.zh}</span>
                    <span className="annot annot-ja ml-2">
                      {s.en} · {s.ja}
                      {s.note_zh ? ` · ${s.note_zh}` : ""}
                    </span>
                  </span>
                  <span className="font-mono text-xs text-muted tabular-nums">
                    {s.dates}
                  </span>
                  <span className="font-serif-jp text-sm text-accent w-10 text-right tabular-nums">
                    {s.nights} 晚
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
