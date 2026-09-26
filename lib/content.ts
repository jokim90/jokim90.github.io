/**
 * ─────────────────────────────────────────────────────────────
 *  content.ts — 사이트의 모든 텍스트/데이터는 이 파일에서 수정합니다.
 *  컴포넌트 코드를 건드리지 않고 여기만 고치면 됩니다.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Jungrun Kim",
  handle: "jokim90",
  github: "https://github.com/jokim90",
  email: "jokim90@gmail.com",
  location: "Seoul, Korea",
  role: "International Broadcast Specialist · Sports Marketing & PR · Global Business",
  tagline:
    "International broadcast production, sports marketing and PR, event direction, " +
    "and global partnership and contract management.",
  intro:
    "International sports media specialist with 11 years building Korea's racing content " +
    "into a global export business — now reaching 29 countries on five continents, with " +
    "KRW 150 billion+ (approx. USD 100M+) in annual revenue. The only Korean " +
    "English-language racing broadcaster in the world, contributing to the international " +
    "business not only on air but across planning, production and event direction.",
  heroHeadline: ["Korea, live.", "To the world."] as [string, string],
};

/** About 페이지 전용 텍스트 (헤드라인 2줄 + 본문 문단) */
export const about = {
  headline: ["Exporting Korea to the world,", "bringing the world to Korea."] as [string, string],
  paragraphs: [
    "I brand and export Korean sports content overseas, and plan Korea's international events.",
    "I joined Korea Racing Authority in 2015 as the dedicated content lead — its " +
      "international announcer — for the export business it had just launched. Over the " +
      "next decade I grew that business to 29 countries and, as of 2026, KRW 150 billion+ " +
      "in annual revenue, and turned Korean racing from a domestic product into a " +
      "recognized international sports brand.",
    "Working inside a government-affiliated public corporation also made me a capable " +
      "PR administrator. I know how public-sector communication actually gets done in " +
      "Korea — the approval chains, the procurement rules, the ministry-level protocol, " +
      "the timing of an official announcement — and I can move a project through those " +
      "procedures without losing momentum. For an international organization operating " +
      "in Korea, that knowledge is the difference between a plan and an approved plan.",
    "Along the way I became the only Korean English-language racing broadcaster in the " +
      "world, with more than 1,000 live race broadcasts. Today I work as a broadcast " +
      "specialist responsible for everything from planning to delivery QA alongside local " +
      "production companies, and since 2024 my role has expanded beyond planning, " +
      "production and presenting into hands-on contract work for the international " +
      "business — so I now sit on both sides of the deal, the creative and the commercial.",
    "In 2026, within the International Business Division, I led the successful staging " +
      "of the Korea Cup, Korea's flagship international race, and served as Chief " +
      "Director of its international media conference — building a track record in " +
      "hosting international events at home.",
    "I am completing an M.S. in Artificial Intelligence at Yonsei University in 2026, " +
      "with research on AI-generated live sports commentary.",
  ] as string[],
};

export type Highlight = {
  title: string;
  description: string;
  tags: string[];
  link?: string; // 외부 링크 (선택)
};

export type Section = {
  slug: string;
  gate: number;          // 게이트 번호 (경마 새들클로스 표준색)
  silkBg: string;
  silkFg: string;
  title: string;
  tagline: string;
  description: string;
  highlights: Highlight[];
  videos?: { title: string; youtubeId: string }[]; // YouTube 영상 ID만 입력
  images?: { title: string; src: string }[];       // public/ 폴더의 이미지 경로 (예: /images/work/broadcast/1.jpg)
  pdfs?: { title: string; href: string }[];        // public/ 폴더의 PDF 경로
};

/**
 * 6개 포트폴리오 섹션.
 * 게이트 칩 색: 새들클로스 표준 (1=흰, 2=검, 3=빨, 4=파, 5=노, 6=초록)
 */
export const sections: Section[] = [
  {
    slug: "broadcast",
    gate: 1,
    silkBg: "#FFFFFF",
    silkFg: "#131A16",
    title: "Global Broadcast Production",
    tagline: "End-to-end English-language production and live on-air delivery",
    description:
      "English-language racing content for international markets — planned, directed, " +
      "produced and delivery-checked. A recurring weekly international program and " +
      "race-day coverage are the mainstays. I own the full lifecycle from concept and " +
      "scripting through production, editing, QA and scheduling, and I'm the only Korean " +
      "English-language racing broadcaster in the world, calling live races on air.",
    highlights: [
      {
        title: "Korea Cup international broadcast",
        description:
          "English-language broadcast content for KRA's flagship international race, produced for overseas broadcasters and audiences.",
        tags: ["Korea Cup", "Flagship", "International"],
      },
      {
        title: "Weekly international racing program",
        description:
          "A recurring English-language program on a fixed weekly cycle: planning, scripting, recording, editing, QA and scheduling.",
        tags: ["Weekly cycle", "Full-stack production", "Scheduling"],
      },
      {
        title: "Live presenting & commentary, 1,000+ broadcasts",
        description:
          "The only Korean English-language racing broadcaster in the world; live race broadcasts plus interview planning and production in a real-time environment.",
        tags: ["Live", "On-air", "English commentary", "Interviews"],
      },
      {
        title: "On-site broadcast production",
        description:
          "Broadcast production at overseas race days, including the Hong Kong International Races.",
        tags: ["On-site", "Live production", "International"],
      },
      {
        title: "Co-produced programming with Arirang TV (2026)",
        description:
          "Joint program production with Arirang TV, Korea's public international broadcaster, taking Korean racing to an English-language TV audience.",
        tags: ["Co-production", "Arirang TV", "2026"],
      },
    ],
    videos: [
      { title: "2026.09 Production with Arirang TV media", youtubeId: "k7eJ7oRJAZM" },
      { title: "End to end production work sample", youtubeId: "RmTNens-v7A" },
      { title: "Interview as a broadcast announcer (2023)", youtubeId: "5EJWg__j-_8" },
    ],
    images: [
      { title: "End-to-end production, on site — Hong Kong International Races", src: "/images/work/broadcast/end-to-end.jpg" },
    ],
  },
  {
    slug: "business",
    gate: 2,
    silkBg: "#131A16",
    silkFg: "#FFFFFF",
    title: "International Business & Contracts",
    tagline: "Export growth, partnerships and deal terms",
    description:
      "The commercial side of Korean racing abroad. I joined in 2015 as the dedicated " +
      "content lead for an export business launched a year earlier, and helped grow it to " +
      "29 countries and KRW 150 billion+ in annual revenue. Since 2024 I also handle " +
      "contract engagement with overseas broadcast and distribution partners, working " +
      "directly on deal terms.",
    highlights: [
      {
        title: "Export business build-out, 2015–present",
        description:
          "From a one-year-old venture to 29 markets and KRW 150 billion+ in annual revenue over 11 years.",
        tags: ["29 countries", "KRW 150B+", "Market expansion"],
      },
      {
        title: "Contract engagement (since 2024)",
        description:
          "Direct engagement with overseas partners on contract terms, distribution scope and delivery obligations.",
        tags: ["Contracts", "Negotiation", "Distribution"],
      },
      {
        title: "France Galop · World Horse Racing · Racing and Sports",
        description:
          "Content and distribution partnerships with official overseas sports bodies and top-tier sports media, from coordination through delivery.",
        tags: ["Partnership", "France", "Global media", "Australia"],
      },
      {
        title: "International media relations",
        description:
          "Ongoing relationships with international racing and sports media outlets.",
        tags: ["Media relations", "Global"],
      },
    ],
  },
  {
    slug: "pr",
    gate: 3,
    silkBg: "#A6192E",
    silkFg: "#FFFFFF",
    title: "PR & Public Affairs",
    tagline: "Press, broadcast exposure and Korean public-sector procedure",
    description:
      "A capable PR administrator inside a government-affiliated public corporation, with " +
      "working knowledge of how Korean government and public-institution procedure " +
      "actually runs — approval chains, procurement rules, ministry-level protocol and the " +
      "timing of official announcements. I plan and run press events, prepare official " +
      "materials, place coverage with major broadcasters, and move projects through those " +
      "steps without losing momentum.",
    highlights: [
      {
        title: "Arirang TV co-production",
        description:
          "Program co-production partnership carrying Korean racing to international viewers.",
        tags: ["Co-production", "Arirang TV"],
      },
      {
        title: "YTN · KBS N and other outlets",
        description:
          "News exposure and race broadcast collaborations with domestic broadcasters to widen coverage and reach.",
        tags: ["News coverage", "Race broadcast", "YTN", "KBS N"],
      },
      {
        title: "Press events & press materials",
        description:
          "Planning and running press conferences and media events; drafting press releases and official announcements in Korean and English.",
        tags: ["Press events", "Press releases", "Bilingual"],
      },
      {
        title: "Korean government procedure",
        description:
          "Navigating approvals, procurement rules and reporting lines of a public institution so that plans become approved plans.",
        tags: ["Public sector", "Approvals", "Procurement"],
      },
      {
        title: "Protocol, ceremonies & delegations",
        description:
          "Official ceremonies and visiting delegations: run-of-show, MC scripts, interpretation and logistics.",
        tags: ["Protocol", "Ceremonies", "Delegations"],
      },
      {
        title: "International press engagement",
        description:
          "Virtual international studio and roundtables with overseas journalists for Korea Cup and Korea Sprint.",
        tags: ["International press", "Roundtable", "Korea Cup"],
      },
    ],
    images: [
      {
        title: "Virtual international studio — Korea Cup & Korea Sprint roundtable with international journalists",
        src: "/images/work/strategy/virtual-studio.jpg",
      },
    ],
  },
  {
    slug: "events",
    gate: 4,
    silkBg: "#0F3FA8",
    silkFg: "#FFFFFF",
    title: "Event Marketing & Direction",
    tagline: "From ideation to on-site direction and reporting",
    description:
      "Leading marketing and media events end to end, with a focus on growing the " +
      "international profile of Korean racing. Chief Director of the 2026 Korea Cup Press " +
      "Conference and a contributor to the successful staging of the 2026 Korea Cup.",
    highlights: [
      {
        title: "Chief Director, 2026 Korea Cup Press Conference",
        description:
          "Overall direction and production of the press conference for domestic and international media.",
        tags: ["Chief Director", "Press conference", "2026"],
      },
      {
        title: "2026 Korea Cup staging",
        description:
          "Contributed to the successful staging of the flagship international race, across its international broadcast and event execution.",
        tags: ["Korea Cup", "Event execution", "International"],
      },
      {
        title: "Korea Cup VIP invitation strategy",
        description:
          "Developed the invitation strategy targeting equestrian-linked royalty and global racing figures through embassy channels in the UK, France, Japan and Hong Kong.",
        tags: ["VIP", "Embassies", "Strategy"],
      },
      {
        title: "Korea Cup international promotion",
        description:
          "Planned and executed promotion across global racing media ahead of the race.",
        tags: ["Promotion", "Global media", "Campaign"],
      },
      {
        title: "Creative & event agency coordination",
        description:
          "Briefing and steering creative and event agencies so that event expressions match market objectives.",
        tags: ["Agencies", "Creative", "Objectives"],
      },
    ],
    videos: [
      { title: "Korea Cup international promotion", youtubeId: "44hkp7DSYv4" },
    ],
  },
  {
    slug: "vendor",
    gate: 5,
    silkBg: "#E8C31E",
    silkFg: "#131A16",
    title: "Subcontractor Contracts & Management",
    tagline: "Procurement, production-company operations and multi-project delivery QA",
    description:
      "End-to-end media producer working with local broadcast vendors — from Scope of Work " +
      "and vendor selection through negotiation, budgets, contract administration, " +
      "deliverable management and performance evaluation, across multiple simultaneous " +
      "productions.",
    highlights: [
      {
        title: "Arirang TV media production procurement",
        description:
          "SOW, proposal evaluation, budget planning and contract administration for the co-produced program.",
        tags: ["Procurement", "SOW", "Contracts"],
      },
      {
        title: "Annual vendor contracts",
        description:
          "Managing annual production contracts and outsourcing across broadcast production vendors.",
        tags: ["Vendor ops", "Annual contracts"],
      },
      {
        title: "Negotiation, budgets & delivery",
        description:
          "Negotiating terms, holding budgets and managing deliverables and timelines across concurrent projects.",
        tags: ["Negotiation", "Budgets", "Timelines"],
      },
      {
        title: "Vendor performance evaluation",
        description:
          "Evaluating vendor performance and feeding results into the next cycle of selection.",
        tags: ["Evaluation", "Quality"],
      },
      {
        title: "Public-sector workflow & documentation standards",
        description:
          "A core public-institution competency: built the workflow system and documentation standards for recurring production work so operational know-how stays with the organization.",
        tags: ["Workflow", "Documentation", "Playbooks"],
      },
    ],
  },
  {
    slug: "editorial",
    gate: 6,
    silkBg: "#1C5940",
    silkFg: "#FFFFFF",
    title: "Editorial, Language QA & Localization",
    tagline: "One brand voice across 29 markets, in Korean and English",
    description:
      "Editorial ownership of everything published in Korean and English — from first " +
      "draft to publication approval — and the localization that makes content work " +
      "across languages and cultures. The result: consistent messaging and a unified " +
      "corporate brand across 29 markets.",
    highlights: [
      {
        title: "Scripts, press releases & features",
        description:
          "Writing and editing broadcast scripts, press releases, feature articles and newsletters.",
        tags: ["Scriptwriting", "Press releases", "Features"],
      },
      {
        title: "Translation review & language QA",
        description:
          "Reviewing translations and running language QA across all outbound multilingual content.",
        tags: ["Translation", "Language QA"],
      },
      {
        title: "Terminology, fact-checking & final approval",
        description:
          "Terminology standards, fact verification and final publication approval.",
        tags: ["Terminology", "Fact-checking", "Approval"],
      },
      {
        title: "Cross-cultural adaptation",
        description:
          "Adapting content and messaging for international audiences, not just translating it.",
        tags: ["Localization", "Adaptation"],
      },
      {
        title: "Dual-language subtitle workflow",
        description:
          "Hands-on Korean–English subtitle generation workflow for broadcast content.",
        tags: ["Subtitles", "KO ↔ EN", "Workflow"],
      },
    ],
    videos: [
      { title: "Hands-on: dual-language subtitle generation workflow", youtubeId: "U02dflzVhtU" },
      { title: "Localization sample", youtubeId: "gA01EU1JX1Q" },
    ],
  },
];

export const timeline = [
  {
    period: "2026",
    title: "Chief Director, Korea Cup Press Conference · Arirang TV co-production",
    detail:
      "Chief Director of the 2026 Korea Cup Press Conference; contributed to staging the " +
      "2026 Korea Cup; co-produced programming with Arirang TV and broadcast collaborations " +
      "with YTN and KBS N. Annual export revenue reaches KRW 150 billion+.",
  },
  {
    period: "2024",
    title: "Contract engagement, international business",
    detail:
      "Role expands beyond planning, production and presenting into contract engagement " +
      "with overseas broadcast and distribution partners.",
  },
  {
    period: "2015 —",
    title: "International Broadcast Announcer & Producer, Korea Racing Authority (KRBC)",
    detail:
      "Joined as the dedicated export content lead through KRA's competitive public-sector " +
      "recruitment. Race-day programming, English-language content, international " +
      "distribution to 29 countries, and 1,000+ live race broadcasts.",
  },
  {
    period: "2015.01 — 2015.03",
    title: "Reporter, Yonhap News TV (Intern)",
    detail: "Ombudsman broadcast reporter.",
  },
  {
    period: "2014.09 — 2014.11",
    title: "Reporter, TBS (Freelance)",
    detail: "English live broadcast reporter.",
  },
];

/** 학력 (경마 은어로 "혈통"에 해당) */
export const education = [
  {
    period: "2024.03 — 2026.12 (Expected)",
    school: "Yonsei University",
    degree: "Master's Degree, Artificial Intelligence",
    detail:
      "LLMOps, vision-language models and applied AI; research on AI-generated live sports commentary.",
  },
  {
    period: "2010 — 2015",
    school: "Sungkyunkwan University (SKKU)",
    degree: "Bachelor's Degree, French Language and Literature",
    detail: "Coursework in French language and literature.",
  },
  {
    period: "2013.09 — 2014.01",
    school: "Université Grenoble Alpes",
    degree: "Exchange Semester, French Literature",
    detail: "",
  },
  {
    period: "2005 — 2009",
    school: "Oregon Episcopal School",
    degree: "High School · Portland, Oregon, USA",
    detail: "",
  },
  {
    period: "2003 — 2005",
    school: "Bishop's College School",
    degree: "Middle School · Quebec, Canada",
    detail: "",
  },
];

export const skills = [
  {
    group: "Production & Broadcast",
    items: [
      { name: "Live & broadcast production", level: 95 },
      { name: "On-air presenting & commentary", level: 92 },
      { name: "Premiere Pro / Audition / EDIUS", level: 88 },
      { name: "Photoshop / Illustrator", level: 60 },
    ],
  },
  {
    group: "PR & Public Affairs",
    items: [
      { name: "Press events & press materials", level: 90 },
      { name: "Media relations", level: 88 },
      { name: "Korean government & public-institution procedure", level: 90 },
      { name: "Protocol & delegation handling", level: 85 },
    ],
  },
  {
    group: "Business & Partnerships",
    items: [
      { name: "International market expansion", level: 92 },
      { name: "Contract engagement & negotiation", level: 85 },
      { name: "Vendor & agency management", level: 88 },
      { name: "Budgets & procurement", level: 85 },
    ],
  },
  {
    group: "Marketing & Events",
    items: [
      { name: "Event direction & execution", level: 90 },
      { name: "Brand positioning", level: 82 },
      { name: "Audience & fan development", level: 80 },
    ],
  },
  {
    group: "AI & Digital",
    items: [
      { name: "LLMOps & applied AI", level: 80 },
      { name: "AI-assisted content workflows", level: 85 },
      { name: "Generative image / video tools", level: 90 },
      { name: "Next.js / React", level: 70 },
    ],
  },
  {
    group: "Languages",
    items: [
      { name: "Korean (native)", level: 100 },
      { name: "English (native-level · professional broadcaster)", level: 100 },
      { name: "French (working)", level: 70 },
    ],
  },
];

export const stats = [
  "11 years in international sports media",
  "29 countries · KRW 150B+ annual export revenue",
  "1,000+ live broadcasts and international event hosting",
  "Chief Director, 2026 Korea Cup international press conference",
  "Media partners at home and abroad: Arirang TV · YTN · KBS N · France Galop · World Horse Racing",
  "KO / EN bilingual · FR working",
];
