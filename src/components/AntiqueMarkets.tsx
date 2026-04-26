import type { Address } from "@/lib/schema";
import { amapUrl, appleMapsUrl, googleMapsUrl } from "@/lib/maps";
import { t } from "@/lib/strings";

type Item = {
  id: string;
  date_zh?: string;
  title: { zh: string; ja: string; en?: string };
  imageUrl?: string;
  imageAlt?: string;
  websiteUrl?: string;
  address?: Address;
  hours_zh?: string;
  notes_zh: string;
};

type Group = {
  id: string;
  title_zh: string;
  annot?: string;
  intro_zh?: string;
  items: Item[];
};

const GROUPS: Group[] = [
  {
    id: "tokyo-onroute",
    title_zh: "东京 · 行程内可逛",
    annot: "1/15 – 1/19 · 新年缓冲期之后,市集和店都重新开门",
    items: [
      {
        id: "oedo-antique-market",
        date_zh: "1/17 (周日)",
        title: {
          zh: "大江戸骨董市",
          ja: "大江戸骨董市",
          en: "Oedo Antique Market",
        },
        imageUrl:
          "/photos/antique-markets/tokyo-international-forum.jpg",
        imageAlt: "Tokyo International Forum (Oedo Antique Market venue)",
        websiteUrl: "https://www.antique-market.jp/english/",
        address: {
          full: {
            zh: "东京都千代田区丸之内 3-5-1 东京国际论坛",
            ja: "東京都千代田区丸の内3-5-1 東京国際フォーラム",
            en: "Tokyo International Forum, 3-5-1 Marunouchi, Chiyoda-ku, Tokyo",
          },
        },
        hours_zh: "9:00 – 16:00",
        notes_zh:
          "日本最大的露天古董市,约 250 摊。每月第一、第三个周日开市,1/17 是第三个周日所以应该会开。距离东京站走 5 分钟,逛 2–3 小时刚好。出发前可以再去官网确认一次当月日期。",
      },
      {
        id: "tomioka-hachimangu-flea",
        date_zh: "1/15 (周五)",
        title: {
          zh: "富岡八幡宮 蚤の市",
          ja: "富岡八幡宮 蚤の市",
          en: "Tomioka Hachimangū Flea Market",
        },
        imageUrl:
          "/photos/antique-markets/tomioka-hachimangu.jpg",
        imageAlt: "Tomioka Hachimangū shrine",
        address: {
          full: {
            zh: "东京都江东区富冈 1-20-3 富冈八幡宫",
            ja: "東京都江東区富岡1-20-3 富岡八幡宮",
            en: "Tomioka Hachimangū, 1-20-3 Tomioka, Kōtō-ku, Tokyo",
          },
        },
        hours_zh: "8:00 – 18:00 (每月 15 日 / 28 日)",
        notes_zh:
          "刚到东京当天就开。每月 15 日和 28 日的露天蚤市,约 120 摊——伊万里瓷器、和服、老木工具、昭和杂货。比 Oedo 更生活感、价格也更亲民。从浅草坐地铁到门前仲町大概 15 分钟。",
      },
      {
        id: "hanazono-shrine-antique",
        date_zh: "1/17 (周日)",
        title: {
          zh: "花園神社 青空骨董市",
          ja: "花園神社 青空骨董市",
          en: "Hanazono Shrine Antique Market",
        },
        imageUrl:
          "/photos/antique-markets/hanazono-shrine.jpg",
        imageAlt: "Hanazono Shrine main hall",
        address: {
          full: {
            zh: "东京都新宿区新宿 5-17-3 花园神社",
            ja: "東京都新宿区新宿5-17-3 花園神社",
            en: "Hanazono Jinja, 5-17-3 Shinjuku, Shinjuku-ku, Tokyo",
          },
        },
        hours_zh: "6:30 – 15:00",
        notes_zh:
          "平时每周日都开,但元旦前后会停几次,1/17 处于「新年过后重启」的边界——出发前去官网或社群最近一两条贴文确认就好。Oedo 之后顺路过来,新宿吃个晚饭刚好。",
      },
      {
        id: "kotto-dori-aoyama",
        date_zh: "随时(店家各自营业)",
        title: {
          zh: "骨董通り (青山古董街)",
          ja: "骨董通り",
          en: "Kotto-dōri (Aoyama Antique Street)",
        },
        imageUrl:
          "/photos/antique-markets/kotto-dori.jpg",
        imageAlt: "Kotto-dōri street in Aoyama",
        address: {
          full: {
            zh: "东京都港区南青山 5 丁目 骨董通り",
            ja: "東京都港区南青山5丁目 骨董通り",
            en: "Kotto-dōri, Minami-Aoyama 5-chōme, Minato-ku, Tokyo",
          },
        },
        notes_zh:
          "战后形成的古董一条街,连接青山通和六本木通。现在画廊比古董店多了,但仍有几家老铺值得慢慢逛。可以和根津美術館 (Nezu Museum) 顺道,馆藏的东方古美术也是这个区的气质。",
      },
    ],
  },
  {
    id: "tokyo-auctions",
    title_zh: "东京 · 拍卖行",
    annot: "1 月场次表 10 月才会公布 · 即便错过拍卖日,预展提前 3–4 天对外免费开放",
    intro_zh:
      "拍卖行通常只提前 3 个月公布日程,所以现在还没 1 月 2027 的具体日期。即便拍卖日错过 1/19 离开,预展通常提前几天对公众开放,可以去现场看实物、翻图录,完全免费。出发前一两个月再来核对一次日期最稳。",
    items: [
      {
        id: "mainichi-auction",
        title: {
          zh: "毎日オークション",
          ja: "毎日オークション",
          en: "Mainichi Auction",
        },
        websiteUrl: "https://www.my-auction.co.jp/en/",
        address: {
          full: {
            zh: "东京都江东区有明 3-5-7 TOC 有明 W-5F",
            ja: "東京都江東区有明3-5-7 TOC有明 W-5F",
            en: "TOC Ariake Bldg. W-5F, 3-5-7 Ariake, Kōtō-ku, Tokyo",
          },
        },
        notes_zh:
          "长项是茶道具、传统工艺、日本古美术——和这次北海道行程的气质比较合。每月一两场,品类穿插。",
      },
      {
        id: "shinwa-auction",
        title: {
          zh: "シンワ オークション",
          ja: "シンワ オークション",
          en: "Shinwa Auction",
        },
        websiteUrl: "https://english.shinwa-auction.com/",
        address: {
          full: {
            zh: "东京都千代田区丸之内 2-3-2 Yusen 大厦",
            ja: "東京都千代田区丸の内2-3-2 ユーセンビル",
            en: "Yusen Bldg., 2-3-2 Marunouchi, Chiyoda-ku, Tokyo",
          },
        },
        notes_zh:
          "现代/当代艺术为主(年六场)+ 陶艺(年四场,3/6/9/12 月)。1 月通常是现代场,在丸之内办——离 Oedo 现场就一站路。",
      },
      {
        id: "tokyo-chuo-auction",
        title: {
          zh: "東京中央オークション",
          ja: "東京中央オークション",
          en: "Tokyo Chuo Auction",
        },
        websiteUrl: "https://www.chuo-auction.com/en/",
        address: {
          full: {
            zh: "东京都中央区银座 東京中央オークション",
            ja: "東京都中央区銀座 東京中央オークション",
            en: "Tokyo Chuo Auction, Ginza, Chūō-ku, Tokyo",
          },
        },
        notes_zh:
          "中国古今书画、文房、茶具、紫砂、老酒——中文图录最齐,沟通也方便。常和香港场联动,1 月可能是网拍 + 实拍混合。",
      },
      {
        id: "est-ouest-auctions",
        title: {
          zh: "エスト・ウエスト オークションズ",
          ja: "エスト・ウエスト オークションズ",
          en: "Est-Ouest Auctions",
        },
        websiteUrl: "https://www.est-ouest.co.jp/en/",
        address: {
          full: {
            zh: "东京都中央区银座 エスト・ウエスト",
            ja: "東京都中央区銀座 エスト・ウエスト・オークションズ",
            en: "Est-Ouest Auctions, Ginza, Chūō-ku, Tokyo",
          },
        },
        notes_zh:
          "1984 年成立,日本最早对公众开放的拍卖会。一年 8–10 场,日中古美术兼营,品类比较杂——预展常摆在银座 Swim 大厦。",
      },
      {
        id: "sbi-art-auction",
        title: {
          zh: "SBI アートオークション",
          ja: "SBI アートオークション",
          en: "SBI Art Auction",
        },
        websiteUrl: "https://www.sbiartauction.co.jp/en/",
        address: {
          full: {
            zh: "东京都涩谷区代官山 Hillside Forum (会场)",
            ja: "東京都渋谷区猿楽町29-18 ヒルサイドフォーラム",
            en: "Hillside Forum, 29-18 Sarugaku-chō, Shibuya-ku, Tokyo",
          },
        },
        notes_zh:
          "季度性现代/当代场,会场常在代官山 Hillside Forum。2026 年 1 月场是 1/24–25——2027 年大概率也是 1 月底,可能刚好错过 1/19 离开;预展提前几天开,可以去看。",
      },
    ],
  },
  {
    id: "hokkaido",
    title_zh: "北海道 · 古道具",
    annot: "整体古美术氛围淡,主要是几家个体店",
    items: [
      {
        id: "sapporo-28th-flea",
        date_zh: "12/28 (周一)",
        title: {
          zh: "札幌 月例 28日市",
          ja: "札幌 28日縁日",
          en: "Sapporo 28th-of-month Temple Market",
        },
        notes_zh:
          "札幌市内某佛寺旁的露天小型市集,每月 28 日开。冬季是否运营网上没有明确资讯——出发前查一下当月情况。即便不开,12/28 也是札幌入住第一天,顺路一探不费时。",
      },
      {
        id: "otaru-daisho-roman",
        title: {
          zh: "アンティーク大正浪漫",
          ja: "アンティーク大正浪漫",
          en: "Antique Daisho Roman",
        },
        imageUrl:
          "/photos/antique-markets/otaru-sakaimachi.jpg",
        imageAlt: "Otaru — Sakaimachi area",
        address: {
          full: {
            zh: "北海道小樽市堺町 アンティーク大正浪漫",
            ja: "北海道小樽市堺町 アンティーク大正浪漫",
            en: "Antique Daisho Roman, Sakaimachi, Otaru, Hokkaidō",
          },
        },
        notes_zh:
          "古董店 + 小咖啡馆,藏在堺町通り旁的小巷里,店主夫妇人很好。逛堺町时顺路进去喝杯咖啡、看看老物件刚好。",
      },
      {
        id: "hakodate-retro-life",
        title: {
          zh: "函館レトロ生活",
          ja: "函館レトロ生活",
          en: "Hakodate Retro Life",
        },
        imageUrl:
          "/photos/antique-markets/hakodate.jpg",
        imageAlt: "Hakodate cityscape",
        websiteUrl: "https://www.retrolife.biz/",
        address: {
          full: {
            zh: "北海道函館市 函館レトロ生活",
            ja: "北海道函館市 函館レトロ生活",
            en: "Hakodate Retro Life, Hakodate, Hokkaidō",
          },
        },
        notes_zh:
          "昭和老玩具、版画、招牌、明治大正瓷器、相机收音机——是那种「一推门就回到过去」的店。⚠️ 11 月底到 3 月营业时间不固定,12/26–27 在函館那两天想去的话先打电话确认。",
      },
    ],
  },
];

export function AntiqueMarkets() {
  const totalItems = GROUPS.reduce((n, g) => n + g.items.length, 0);
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
              古美術市集
            </span>
            <span className="annot annot-ja ml-3">
              骨董 · 古道具 · Antiques
            </span>
          </span>
          <span className="font-serif-jp text-sm text-accent w-20 text-right tabular-nums">
            {totalItems} 处
          </span>
        </summary>

        <div className="mt-4 mb-6 pl-7">
          <p className="mb-10 text-sm text-muted leading-relaxed max-w-prose">
            旅程跨年末年始,大部分拍卖行和市集会停 1 周左右(约 12/29 – 1/5)。下面这些是按时间和地点整理出来的——有兴趣的话可以挑一两个顺路逛逛,不必追着跑。
          </p>

          <div className="space-y-12">
            {GROUPS.map((g) => (
              <div key={g.id}>
                <header className="mb-3">
                  <h3 className="text-xl font-serif-jp font-semibold">
                    {g.title_zh}
                  </h3>
                  {g.annot && (
                    <div className="annot mt-1">{g.annot}</div>
                  )}
                  {g.intro_zh && (
                    <p className="mt-3 text-sm text-muted leading-relaxed max-w-prose">
                      {g.intro_zh}
                    </p>
                  )}
                </header>
                <ul>
                  {g.items.map((it) => (
                    <li key={it.id} className="rule">
                      <ItemCard item={it} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </details>
    </section>
  );
}

function ItemCard({ item }: { item: Item }) {
  return (
    <div className="py-6 flex gap-5 items-start">
      {item.imageUrl ? (
        <a
          href={item.websiteUrl ?? (item.address ? googleMapsUrl(item.address) : "#")}
          target="_blank"
          rel="noreferrer noopener"
          className="shrink-0 block w-28 sm:w-36 aspect-[4/3] overflow-hidden rounded border border-hairline bg-surface hover:opacity-90 transition-opacity"
          aria-label={item.imageAlt ?? item.title.zh}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.imageUrl}
            alt={item.imageAlt ?? item.title.zh}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </a>
      ) : (
        <div className="shrink-0 hidden sm:flex w-36 aspect-[4/3] items-center justify-center rounded border border-hairline bg-surface text-muted">
          <span className="vertical-ja text-xs">古美術</span>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-3 flex-wrap">
          {item.date_zh && (
            <span className="font-mono text-xs text-accent tabular-nums">
              {item.date_zh}
            </span>
          )}
          <h4 className="text-lg font-serif-jp font-semibold leading-tight">
            {item.title.zh}
          </h4>
          <span className="annot annot-ja">
            {item.title.ja}
            {item.title.en ? ` · ${item.title.en}` : ""}
          </span>
        </div>

        {item.hours_zh && (
          <div className="mt-1 annot">{item.hours_zh}</div>
        )}

        <p className="mt-2 text-sm text-muted leading-relaxed max-w-prose">
          {item.notes_zh}
        </p>

        {item.address && (
          <div className="mt-4 text-sm leading-relaxed">
            <div className="text-foreground">{item.address.full.zh}</div>
            <div className="annot annot-ja">{item.address.full.ja}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              <a
                href={appleMapsUrl(item.address)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-3 py-1 text-xs border border-hairline rounded-full text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                {t.openInAppleMaps}
              </a>
              <a
                href={googleMapsUrl(item.address)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-3 py-1 text-xs border border-hairline rounded-full text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                {t.openInGoogleMaps}
              </a>
              <a
                href={amapUrl(item.address)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-3 py-1 text-xs border border-hairline rounded-full text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                {t.openInAmap}
              </a>
              {item.websiteUrl && (
                <a
                  href={item.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-3 py-1 text-xs border border-hairline rounded-full text-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  官网 ↗
                </a>
              )}
            </div>
          </div>
        )}

        {!item.address && item.websiteUrl && (
          <div className="mt-3">
            <a
              href={item.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs underline decoration-hairline underline-offset-2 hover:decoration-accent hover:text-accent text-muted"
            >
              官网 ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
