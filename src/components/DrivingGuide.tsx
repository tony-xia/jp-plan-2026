import { Fragment } from "react";

type Tip = {
  id: string;
  title_zh: string;
  title_ja?: string;
  warning?: boolean;
  body_zh: string;
};

type Resource = {
  label_zh: string;
  url: string;
  desc_zh?: string;
};

type Group = {
  id: string;
  title_zh: string;
  annot?: string;
  intro_zh?: string;
  tips: Tip[];
  resources?: Resource[];
};

const GROUPS: Group[] = [
  {
    id: "license-legal",
    title_zh: "驾照法律前提",
    annot: "出发前先确认 · 这是 #1 关键",
    intro_zh:
      "在动手之前先把这一关过了。日本对外国驾照的认可规则比较窄,中国大陆驾照单独是不能在日本租车开的——这一点国内攻略里常被略过。",
    tips: [
      {
        id: "prc-license-status",
        title_zh: "中国大陆驾照 + 翻译件 ≠ 可在日驾",
        warning: true,
        body_zh:
          "JAF 官方翻译服务只覆盖法国、瑞士、德国、比利时、台湾、摩纳哥——**没有中国大陆**。中国又不是 1949 年日内瓦公约成员国,所以国内办的「国际驾照」在日本也不被承认。租车公司有权直接拒租。",
      },
      {
        id: "valid-paths",
        title_zh: "合规路径有这几条",
        body_zh:
          "**(1)** 持**香港驾照** + 香港运输署签发的 IDP (1949 年日内瓦公约格式)——入境后可连续驾驶 12 个月,日本租车公司接受度高。 **(2)** 持**台湾驾照** + JAF 中文翻译件 (出发前在线申请,日本便利店打印)。 **(3)** 持英联邦 / 北美 / 欧盟 / 澳新 等 1949 公约成员国驾照 + 该国签发的 IDP 原件。 **(4)** 在日本居住后做「外免切替」拿日本驾照 (不适用游客)。 **(5)** 同行人里有以上证件的话,由那位主驾。",
      },
      {
        id: "hk-license-detail",
        title_zh: "香港驾照路径 · 现办来得及吗?",
        body_zh:
          "**已经有 HK 驾照的话**,这是最顺的路径之一:在 HK 运输署 (TD) 申请 IDP,工本费 ¥80 港币,当场或一两天发证;入境日本后凭 HK 驾照原件 + IDP 原件,12 个月内合法驾驶,无需 JAF 翻译。 **从零开始办 HK 驾照不现实**——必须有 HK 身份证 / 居住身份才能申请;若持其他认可国家驾照 (英、美、澳、加、日 等) 可走「直接发牌」(direct issue) 转 HK 驾照,但本身需要赴港 + 预约 + 证件齐全;持中国大陆驾照不在直接发牌名单上,需在 HK 居住后参加考试。 **结论**:这趟行程能走 HK 路径的前提是「证件已经到手」。",
      },
      {
        id: "verify-before-rental",
        title_zh: "取车现场会查证件",
        body_zh:
          "租车公司取车时一定核对原件 + 翻译件 / IDP + 护照。提前发邮件给租车公司确认你的证件组合 OK,免得到了札幌站柜台被拒,后面整段行程都崩。",
      },
    ],
    resources: [
      {
        label_zh: "JAF · 在日驾驶 (英文)",
        url: "https://english.jaf.or.jp/driving-in-japan",
        desc_zh: "外国驾照在日效力的官方说明",
      },
      {
        label_zh: "JAF · 驾照翻译申请",
        url: "https://english.jaf.or.jp/driving-in-japan/drive-in-japan/about-dltas",
        desc_zh: "覆盖国家清单 + 在线申请流程",
      },
      {
        label_zh: "香港运输署 · IDP 申请",
        url: "https://www.td.gov.hk/en/public_services/licences_and_permits/driving_licences/international_driving_permit/index.html",
        desc_zh: "1949 日内瓦公约格式,日本可用",
      },
      {
        label_zh: "香港运输署 · 海外驾照转 HK 驾照",
        url: "https://www.td.gov.hk/en/public_services/licences_and_permits/driving_licences/how_to_apply_for_a_driving_licence/driving_in_hong_kong_for_overseas_driving_licence_/index.html",
        desc_zh: "Direct Issue 名单与流程",
      },
    ],
  },
  {
    id: "habits",
    title_zh: "日本驾驶习惯 · 中国司机适应清单",
    annot: "证件 OK 之后 · 习惯上的差别",
    intro_zh:
      "假设证件这一关已过。下面这些是中国老司机第一次在日本开,最容易栽跟头的差别。",
    tips: [
      {
        id: "left-side",
        title_zh: "左侧通行",
        body_zh:
          "和中国正好反过来。**最危险的不是开直路**,而是从停车场 / 加油站 / 单行道出来时——下意识会开到右侧车道。前两天每次发动车之前在心里默念一句「靠左」。方向盘也在右边,雨刷器和转向灯位置也是左右对调,起步前先试一下。",
      },
      {
        id: "yield-left",
        title_zh: "无标志路口让左",
        body_zh:
          "日本规则是「左方优先」——来自你左侧的车有路权。中国是右方优先,正好反过来。郊区无信号交叉口尤其要注意。",
      },
      {
        id: "pedestrian-priority",
        title_zh: "行人绝对优先",
        body_zh:
          "见到斑马线一定要停,**哪怕行人还在路边没踏上去**。这是日本警察执法最严的一条,路口很多隐藏摄像头。被抓 = 罚款 + 扣点 + 国际驾照备注。",
      },
      {
        id: "stop-sign",
        title_zh: "止まれ = 完全停 3 秒",
        title_ja: "止まれ",
        body_zh:
          "不是 rolling stop——前轮要明显地完全停住,默数 1-2-3 再起步。日本驾照考试这一条是必扣项,实路上常有交警蹲点。",
      },
      {
        id: "no-red-turn",
        title_zh: "红灯不能左转",
        body_zh:
          "日本是左侧通行,所以「红灯左转」对应中国的「红灯右转」——一律不允许,必须等绿灯。",
      },
      {
        id: "speed-limits",
        title_zh: "限速 · 摄像头多",
        body_zh:
          "高速 **100 km/h** (部分新路段 120),都市快速 60-80,市区 40-60,住宅 30。雪天会有临时限速降到 50 或 30。固定 + 移动摄像头都密,日本本地司机普遍守速,跟着大家开就好。",
      },
      {
        id: "zero-tolerance-drink",
        title_zh: "酒驾零容忍",
        warning: true,
        body_zh:
          "**0.03% 血液酒精浓度即触发**——一杯啤酒就过线。后果是吊销驾照 + 留案底,**同车乘客也会被罚款**。跨年夜想喝酒就找「代行運転」(代驾) 把车开回酒店,Sapporo 市区随处可叫。",
      },
      {
        id: "no-phone",
        title_zh: "手机零容忍",
        body_zh:
          "行驶中拿起手机看 = 当场罚款 + 扣分。导航必须放固定支架上,不能拿在手上看。",
      },
      {
        id: "etc-card",
        title_zh: "ETC 卡",
        title_ja: "ETC カード",
        body_zh:
          "高速过路费走 ETC 自动扣款。租车时加租 ETC 卡 (一周 ¥330 左右),过收费站走「ETC」通道直接通过。没卡的话走「一般」通道现金 / 信用卡付,北海道高速上普通通道也能用,只是慢一点。",
      },
      {
        id: "gas-station",
        title_zh: "加油站",
        title_ja: "ガソリンスタンド",
        body_zh:
          "「**フルサービス**」店员加油,多见于乡下;「**セルフ**」自助,城市常见。油品三种:**レギュラー** (普通汽油,租车几乎都用这个)、**ハイオク** (高辛烷,贵 ¥10-20/L,跑车用)、**軽油** (柴油,**千万别加错**——租车都不是柴油)。说一句「レギュラー満タン」(满油 regular) 就行,刷卡或现金。",
      },
      {
        id: "parking",
        title_zh: "停车规则",
        body_zh:
          "**路边几乎不能停**。要找「コインパーキング」(投币计时停车场)、便利店 / 商场配套停车场,或酒店专用车场。札幌、东京市区路边违停 5 分钟内即拖。",
      },
      {
        id: "narrow-roads",
        title_zh: "窄路礼让",
        body_zh:
          "日本郊区路 (尤其是北海道乡下国道) 很窄,会车时礼让先停的一方,擦边过去时降速。雪天路边堆雪后实际车道更窄,要多让多等。",
      },
    ],
    resources: [
      {
        label_zh: "JAF · Rules of the Road (英文)",
        url: "https://english.jaf.or.jp/driving-in-japan/rules-of-the-road",
        desc_zh: "JAF 官方翻译的「交通の教則」全套",
      },
      {
        label_zh: "JAF · Traffic Rules in Japan",
        url: "https://english.jaf.or.jp/driving-in-japan/traffic-rules",
        desc_zh: "速查版规则总览,带图",
      },
      {
        label_zh: "JNTO · 租车指南",
        url: "https://www.japan.travel/en/plan/getting-around/cars/",
        desc_zh: "日本国家旅游局官方租车注意事项",
      },
    ],
  },
  {
    id: "hokkaido-winter",
    title_zh: "北海道冬季雪路",
    annot: "12/28 札幌取车 · 1/14 早晨札幌还车 · 整整 16 天雪中开",
    intro_zh:
      "这次行程租车 12/28 在札幌取,1/14 早晨在札幌还,中间 16 天全程在 Hokkaido 雪里跑。这是全程技术含量最高的一段——本地老司机和外地新手的差别在这里被无限放大。",
    tips: [
      {
        id: "studless-default",
        title_zh: "冬胎是标配,不用问",
        title_ja: "スタッドレスタイヤ",
        body_zh:
          "北海道租车 11 月-4 月默认装 studless 雪胎。取车时确认胎面侧壁有「STUDLESS」或「スタッドレス」字样即可。备用雪链 (タイヤチェーン) 一般在后备箱——但有 studless 基本用不上。",
      },
      {
        id: "pick-4wd",
        title_zh: "升级 4WD",
        body_zh:
          "4WD 升级费一般每天 ¥1000-2000。冬季强烈建议——坡道起步、停车场雪堆、未铲除小路差异巨大,一次拖车费就够升级一周。这次北海道行程绕远路 (Sapporo → Wakkanai → 知床 → Toya),4WD 不是奢侈是必要。",
      },
      {
        id: "daily-road-info",
        title_zh: "每天早上查道路情報",
        title_ja: "道路情報",
        body_zh:
          "国土交通省北海道開発局的「**北の道ナビ**」实时显示封路、积雪深度、除雪车作业。出门前花 2 分钟过一遍当天的路线——尤其 day-10 (札幌 → 稚内) 和 day-12 (稚内 → 网走) 这两段。需求文档里也写了「每个驾驶日早上查」,执行就好。",
      },
      {
        id: "yellow-arrows",
        title_zh: "黄色下箭头 = 车道边界",
        title_ja: "矢羽根",
        body_zh:
          "路面被雪盖住、白线看不见时,**头顶悬挂的黄色「↓」箭头杆就是车道分割线**。看不到地面就抬头看箭头,这是北海道独有的设计——内地司机第一次遇到会懵。看到双向多个箭头时,跟着自己车道那一列开就行。",
      },
      {
        id: "red-poles",
        title_zh: "红色矮杆 = 路缘",
        title_ja: "視線誘導標",
        body_zh:
          "路两侧的红白细杆指示路缘位置 (积雪覆盖白线时辨认路边的唯一参照)。**开到红杆外侧 = 已经压到雪堆里了**——会陷,尤其窄路。",
      },
      {
        id: "ground-blizzard",
        title_zh: "地吹雪 (ground blizzard)",
        title_ja: "地吹雪 / じふぶき",
        warning: true,
        body_zh:
          "风把地面雪吹起来形成瞬间白茫茫,能见度 0。**Okhotsk 海岸 (浜頓別 → 網走) 和宗谷岬最危险**——风从西伯利亚直吹下来。一旦遇到,**立刻**:靠路边、停车、双闪、不要下车,等过去 (一般 5-15 分钟)。⚠️ 千万不要冒险继续开,后车追尾是最常见死法。",
      },
      {
        id: "black-ice",
        title_zh: "黑冰 (アイスバーン)",
        title_ja: "アイスバーン",
        body_zh:
          "看起来湿润但其实是冰面。**桥面、隧道口、阴影处、清早 5-9 点最常见**。判断方法:前车飞溅的水花变少 + 轮胎噪音变小 = 已经在冰上。任何时候降速,温柔操作。",
      },
      {
        id: "engine-braking",
        title_zh: "下坡用引擎制动",
        body_zh:
          "挂低档 (D2 / B / 2),让转速控制车速,**少踩刹车**。雪面急刹车 = 失控,ABS 也救不了你 (ABS 是防抱死,不是防滑)。",
      },
      {
        id: "following-distance",
        title_zh: "跟车距离 ≥ 3 倍",
        body_zh:
          "干路跟 30 米的话,雪路要 90 米起。前车刹车你才反应,**绝对来不及**。日本本地司机间距都拉得很开,不要插队。",
      },
      {
        id: "halve-speed",
        title_zh: "整体降速一半",
        body_zh:
          "干路 100 → 雪路 50。雪天高速电子限速会降到 50 km/h,跟着开就行。开慢不丢人,丢车才丢人。",
      },
      {
        id: "no-overnight-roadside",
        title_zh: "不要路边过夜停",
        warning: true,
        body_zh:
          "凌晨 3-4 点除雪车 (除雪車) 作业,会把路边停车堆埋,严重的会刮蹭车身。**一律停室内 / 酒店专用车场**。Premier Hotel Tsubaki (札幌) 和 Windsor Toya 都有专用车场。",
      },
      {
        id: "lights-on",
        title_zh: "大灯白天也开",
        body_zh:
          "雪天能见度差,前后灯都打开是给别人看你,不是看路。日本本地司机白天雪中也都开大灯。",
      },
      {
        id: "mountain-closures",
        title_zh: "山道冬季封锁",
        warning: true,
        body_zh:
          "**美幌峠 (Bihoro Pass)、知床縦貫道路、知床 → 羅臼 大部分山路 11-4 月封闭**。这次行程已经在「不安排封路段」上做过规划,但 day-of 还是要去 北の道ナビ 上确认一次,临时大雪会扩大封路范围。",
      },
      {
        id: "fuel-early",
        title_zh: "加油提前到半箱",
        body_zh:
          "北海道乡下加油站普遍 **18:00-19:00 关门**,周日有的不开。从札幌往北 (Wakkanai 方向) 开始,见到加油站、油表低于半箱就加上。Wakkanai → Abashiri 那段沿海几乎没人烟,出发前一定满油。",
      },
      {
        id: "trust-locals",
        title_zh: "不逞强 · 信本地人",
        body_zh:
          "酒店前台或当地人说「**今日危ない**」(今天很危险) 或「**やめたほうがいい**」(别去比较好) 时,**信他们**。这次 day-10 (札幌 → 稚内) 和 day-12 (稚内 → 网走) 是天气最敏感的两段,真遇到大风雪建议改室内行程,或多住一晚等天气。机票退签都比命重要。",
      },
    ],
    resources: [
      {
        label_zh: "北の道ナビ (国交省·北海道开发局)",
        url: "https://northern-road.ceri.go.jp/navi/",
        desc_zh: "实时道路情報·封路·积雪·除雪状况——每天早上必看",
      },
      {
        label_zh: "北の道ナビ · 冬道运转技术官方指南",
        url: "https://northern-road.ceri.go.jp/navi/info/guide1_1.html",
        desc_zh: "国交省整理的雪路驾驶 8 大要点,带图",
      },
      {
        label_zh: "北海道警察 · 冬道を安全に運転する (PDF)",
        url: "https://www.police.pref.hokkaido.lg.jp/info/koutuu/rule-gaikokujin/slip_jiko/slip_japanese.pdf",
        desc_zh: "道警官方雪路安全手册 (日文)",
      },
      {
        label_zh: "北海道庁 · 冬季运转安全",
        url: "https://www.pref.hokkaido.lg.jp/ks/cak/kat/safety-drive/winter.html",
        desc_zh: "道庁的冬季驾驶要点 + 装备清单",
      },
      {
        label_zh: "国土交通省 · 道路情报提供系统",
        url: "https://www.road-info-prvs.mlit.go.jp/",
        desc_zh: "全日本封路 / 限制实时查询",
      },
    ],
  },
  {
    id: "tools",
    title_zh: "Apps · 救援电话 · 工具",
    tips: [
      {
        id: "yahoo-carnavi",
        title_zh: "Yahoo!カーナビ (推荐主力)",
        title_ja: "Yahoo!カーナビ",
        body_zh:
          "实时事故、封路、雪情、ETC 价格——日本本地司机几乎都用这个。日文 UI 但箭头清晰,语音可改英文。**完全免费**,出发前 App Store 下好,登录免费 Yahoo Japan 账号。",
      },
      {
        id: "google-maps",
        title_zh: "Google Maps (备用)",
        body_zh:
          "国内熟悉,但日本郊区精度不如 Yahoo!,**也没有冬季封路实时数据**。市区找店、查营业时间还是 Google 顺。同时开两个 App 互相印证。",
      },
      {
        id: "jaf-roadside",
        title_zh: "JAF 救援电话",
        title_ja: "JAF ロードサービス",
        body_zh:
          "**日本国内手机:8139** (#JAF) / **海外手机:+81-570-00-8139**。租车保险大多包含 JAF 24h 路上救援——被雪困住、电池没电、爆胎、油尽都打这个。出发前存进通讯录。",
      },
      {
        id: "rental-hotline",
        title_zh: "租车公司客服热线",
        body_zh:
          "取车时把租车公司 24h 紧急电话拍照存手机。半夜出事直接打租车公司,他们调度 JAF 比你自己叫快。",
      },
    ],
  },
];

function FormattedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-foreground">
              {p.slice(2, -2)}
            </strong>
          );
        }
        return <Fragment key={i}>{p}</Fragment>;
      })}
    </>
  );
}

export function DrivingGuide() {
  const totalTips = GROUPS.reduce((n, g) => n + g.tips.length, 0);
  return (
    <section className="mt-12">
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
              开车指南
            </span>
            <span className="annot annot-ja ml-3">
              中国司机 · 日本驾驶 · 北海道冬季
            </span>
          </span>
          <span className="font-serif-jp text-sm text-accent w-20 text-right tabular-nums">
            {totalTips} 条
          </span>
        </summary>

        <div className="mt-4 mb-6 pl-7">
          <p className="mb-10 text-sm text-muted leading-relaxed max-w-prose">
            分四块:**驾照法律前提**(出发前一定先确认),**日本驾驶习惯**(中国司机常踩的坑),**北海道冬季雪路**(全程最技术的部分),以及**App 和救援工具**。每节末尾贴了官方 (JAF · 北海道开发局 · 北海道警察) 链接,深入的话直接戳。
          </p>

          <div className="space-y-14">
            {GROUPS.map((g) => (
              <div key={g.id}>
                <header className="mb-4">
                  <h3 className="text-xl font-serif-jp font-semibold">
                    {g.title_zh}
                  </h3>
                  {g.annot && (
                    <div className="annot mt-1">{g.annot}</div>
                  )}
                  {g.intro_zh && (
                    <p className="mt-3 text-sm text-muted leading-relaxed max-w-prose">
                      <FormattedText text={g.intro_zh} />
                    </p>
                  )}
                </header>
                <ul>
                  {g.tips.map((tip) => (
                    <li key={tip.id} className="rule py-5">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        {tip.warning && (
                          <span
                            className="text-accent text-sm shrink-0"
                            aria-hidden
                          >
                            ⚠️
                          </span>
                        )}
                        <h4 className="text-base font-serif-jp font-semibold">
                          {tip.title_zh}
                        </h4>
                        {tip.title_ja && tip.title_ja !== tip.title_zh && (
                          <span className="annot annot-ja">
                            {tip.title_ja}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-muted leading-relaxed max-w-prose">
                        <FormattedText text={tip.body_zh} />
                      </p>
                    </li>
                  ))}
                </ul>

                {g.resources && g.resources.length > 0 && (
                  <div className="mt-6 pl-3 border-l-2 border-hairline">
                    <div className="annot mb-2">官方资源 · Official guides</div>
                    <ul className="space-y-2">
                      {g.resources.map((r) => (
                        <li key={r.url} className="text-sm">
                          <a
                            href={r.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-foreground underline decoration-hairline underline-offset-2 hover:decoration-accent hover:text-accent"
                          >
                            {r.label_zh} ↗
                          </a>
                          {r.desc_zh && (
                            <span className="annot ml-2">
                              · {r.desc_zh}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </details>
    </section>
  );
}
