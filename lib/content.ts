/**
 * ─────────────────────────────────────────────────────────────
 *  content.ts — 사이트의 모든 텍스트/데이터는 이 파일에서 수정합니다.
 *  컴포넌트 코드를 건드리지 않고 여기만 고치면 됩니다.
 *
 *  포지셔닝 (2026.10 커리어 전략안 기준):
 *  "Global Sports, Media & AI Business Strategist"
 *  New Business · Strategic Partnerships · Content/Product Strategy
 *  — 포트폴리오는 작품 모음이 아니라 "사업을 만들어온 증거"로 구성합니다.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Jungrun Kim",
  handle: "JO Kim",
  github: "https://github.com/jokim90",
  email: "jokim90@gmail.com",
  location: "Seoul, Korea",
  role: "Global Sports, Media & AI Business Strategist",
  tagline:
    "New Business Development · Strategic Partnerships · Content/Product Strategy",
  intro:
    "Eleven years turning Korean sports content into a global business. I joined Korea " +
    "Racing Authority's export venture in its early days and helped grow it to 29 markets " +
    "and KRW 150 billion+ in annual revenue — planning the content, negotiating " +
    "distribution and partner contracts, staging international events like the 2026 " +
    "Korea Cup, and running production operations across multiple vendors. Now completing " +
    "an M.S. in AI (Yonsei, 2026) and building prototypes that turn that domain experience " +
    "into new fan-experience and content-platform products.",
  heroHeadline: [
    "I build global sports & media businesses",
    "at the intersection of content, partnerships and AI.",
  ] as [string, string],
};

/** About 페이지 전용 텍스트 (헤드라인 2줄 + 본문 문단) */
export const about = {
  headline: ["From executing the content", "to building the business around it."] as [
    string,
    string,
  ],
  paragraphs: [
    "I have spent eleven years in Korea Racing Authority's International Business " +
      "Division watching — and helping — Korean sports content become a business in " +
      "overseas markets, from the early days of the export venture to a 29-market, " +
      "KRW 150 billion+ operation. I came in as the dedicated content lead. Along the way " +
      "the job became planning the content, negotiating distribution and contract terms " +
      "with overseas partners, staging international events, and commissioning and " +
      "managing the production companies that make it all.",
    "Since 2024 I have worked directly on terms with overseas broadcasters and " +
      "distributors — scope, delivery obligations, contract conditions — and coordinated " +
      "content partnerships with France Galop, World Horse Racing and Racing and Sports. " +
      "On the domestic side I write the Scope of Work, select the vendor, negotiate, hold " +
      "the budget and sign off on delivery. I have sat on the buying side of the table as " +
      "much as the creative side.",
    "In 2026 I was Chief Director of the Korea Cup's first-ever press conference and " +
      "contributed to staging the race — " +
      "the first initiative of its kind I structured from zero, across international " +
      "media promotion, a VIP invitation strategy run through embassy channels, and " +
      "agency briefing.",
    "Working inside a government-affiliated public corporation also taught me how to " +
      "move a plan through Korean public-sector procedure — approvals, procurement rules, " +
      "ministry-level protocol — without losing momentum. For an international " +
      "organization operating in Korea, that is the difference between a plan and an " +
      "approved plan.",
    "I am completing an M.S. in Artificial Intelligence at Yonsei University (2026), " +
      "focused on LLMOps, vision-language models and applied AI. My research — " +
      "AI-generated real-time sports commentary — is deliberately framed as a product and " +
      "business case for live sports and global content localization, and I am building " +
      "it out as working prototypes in the Build Lab section of this site.",
    "The on-air side is still part of the story: I am the only Korean English-language " +
      "racing broadcaster in the world, with 1,000+ live race broadcasts. It is how I " +
      "understand the content value chain end to end — and why I want the next role to be " +
      "about designing the business and the fan experience around that content, not only " +
      "executing it.",
  ] as string[],
};

export type Highlight = {
  title: string;
  description: string;
  tags: string[];
  link?: string; // 외부 링크 (선택)
};

export type PressItem = {
  title: string;
  outlet: string;
  date: string;      // YYYY.MM.DD (정렬용, 표시용 겸용)
  href: string;
  excerpt?: string;
  image?: string;    // 기사 대표 이미지 URL (og:image)
  lang?: "ko" | "en";
};

/** 각 프로젝트를 Problem → Strategy → Build → Partners → Outcome → Lessons 로 서술 */
export type CaseStudy = {
  problem: string;
  strategy: string;
  build: string;
  partners: string;
  outcome: string;
  lessons: string;
};

export type Section = {
  slug: string;
  gate: number;          // 게이트 번호 (경마 새들클로스 표준색)
  silkBg: string;
  silkFg: string;
  title: string;
  tagline: string;
  description: string;
  kind?: "case" | "lab"; // lab = Build Lab (AI × Sports 프로토타입)
  status?: string;       // lab 전용: 진행 상태 표시
  url?: string;          // 라이브 프로토타입/외부 링크
  capabilities?: string[]; // 이 케이스가 증명하는 역량 (칩)
  caseStudy?: CaseStudy;
  highlights: Highlight[];
  videos?: { title: string; youtubeId: string }[]; // YouTube 영상 ID만 입력
  images?: { title: string; src: string }[];       // public/ 폴더의 이미지 경로 (예: /images/work/broadcast/1.jpg)
  pdfs?: { title: string; href: string }[];        // public/ 폴더의 PDF 경로
  press?: PressItem[];                             // 언론 보도 (외부 링크)
};

/**
 * 6개 포트폴리오 섹션 — 4개 Business Case + 2개 Build Lab (AI × Sports).
 * 순서: Business → Partnership → Project ownership → Content execution → AI.
 * 게이트 칩 색: 한국마사회 새들클로스 표준 (1=흰, 2=노, 3=빨, 4=검, 5=파, 6=초록)
 */
export const sections: Section[] = [
  {
    slug: "business",
    gate: 1,
    silkBg: "#FFFFFF",
    silkFg: "#131A16",
    kind: "case",
    title: "Global Sports Content Business Expansion",
    tagline: "Taking Korean racing content from an early-stage export venture to 29 markets",
    capabilities: ["New business", "Partnerships", "International distribution"],
    description:
      "The commercial story of Korean racing abroad. I joined in 2015 as the dedicated " +
      "content lead for an export business launched a year earlier, and contributed to " +
      "its growth to 29 countries and KRW 150 billion+ in annual revenue. Since 2024 I " +
      "also handle contract engagement with overseas broadcast and distribution partners, " +
      "working directly on deal terms.",
    caseStudy: {
      problem:
        "I joined Korea Racing Authority in 2015 as the dedicated content lead for an export " +
        "business that was one year old. My brief was to build the international content and " +
        "the partner-facing work the business would grow on.",
      strategy:
        "I treated the content as an export product rather than a broadcast: a consistent " +
        "English-language program and race-day feed that overseas partners could schedule, " +
        "then used that product to open and deepen distribution relationships market by market.",
      build:
        "I designed and ran the recurring international program and race-day coverage end to " +
        "end; set the editorial, terminology and localization standards; and from 2024 took on " +
        "contract engagement with overseas partners directly — distribution scope, delivery " +
        "obligations and deal terms.",
      partners:
        "I worked directly with overseas broadcasters and distributors, with France Galop, " +
        "World Horse Racing and Racing and Sports, and with our local production vendors.",
      outcome:
        "Over 11 years I contributed to the business growing to 29 countries on five " +
        "continents and KRW 150 billion+ in annual revenue. My accountability grew with it: " +
        "from content lead to the person negotiating partner terms.",
      lessons:
        "One reliable product that partners can schedule opens more markets than any one-off " +
        "deal — and the person who understands both the content and the contract is the one " +
        "who can keep the relationship growing.",
    },
    highlights: [
      {
        title: "Export business build-out, 2015–present",
        description:
          "From a one-year-old venture to 29 markets and KRW 150 billion+ in annual revenue over 11 years.",
        tags: ["29 countries", "KRW 150B+", "Market expansion"],
        link: "https://www.joongang.co.kr/article/25152927",
      },
      {
        title: "Contract engagement with overseas partners (since 2024)",
        description:
          "Direct engagement on contract terms, distribution scope and delivery obligations with overseas broadcasters and distributors.",
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
          "Ongoing relationships with international racing and sports media outlets that carry the brand into each market.",
        tags: ["Media relations", "Global"],
      },
    ],
    press: [
      {
        title: "K-Racing enjoyed worldwide: Korea Racing Authority leads global racing",
        outlet: "Kyeonggi Ilbo",
        date: "2025.02.24",
        href: "https://www.kyeonggi.com/article/20250224580128",
        excerpt: "KRA exported racing content to 24 countries on six continents in 2024, a record KRW 125.8 billion in revenue. Jungrun Kim is pictured as international broadcast announcer.",
        image: "https://ypzxxdrj8709.edge.naverncp.com/data2/content/image/2025/02/24/.cache/512/20250224580132.jpg",
        lang: "ko",
      },
      {
        title: "Race broadcast exports top KRW 500 billion in 10 years — K-Racing surges ahead",
        outlet: "JoongAng Ilbo",
        date: "2023.04.06",
        href: "https://www.joongang.co.kr/article/25152927",
        excerpt: "Ten years after the first trial feed to Singapore, KRA's export business passes KRW 500 billion in cumulative overseas sales, reaching 23 countries. Pictured: KRBC international announcers Middleton and Jungrun Kim.",
        image: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202304/06/d9ab71ae-82b5-449f-a842-38428d12581e.jpg",
        lang: "ko",
      },
    ],
  },
  {
    slug: "korea-cup",
    gate: 2,
    silkBg: "#E8C31E",
    silkFg: "#131A16",
    kind: "case",
    title: "International Event Hosting",
    tagline: "Structuring Korea's flagship international race as a media and fan platform — from zero",
    capabilities: ["0→1 planning", "Cross-functional", "Brand", "International media"],
    description:
      "In 2026 I was accountable for the international media side of Korea's only " +
      "international race meeting: Chief Director of its first-ever press conference, and " +
      "owner of the international promotion, VIP invitation strategy and agency direction. " +
      "I treated the race day as a platform that domestic and overseas stakeholders could " +
      "all join, and I contributed to the staging of the race itself.",
    caseStudy: {
      problem:
        "In 2026 I was accountable for the international media side of the Korea Cup and " +
        "Korea Sprint: a press conference the event had never held, an international media " +
        "program and a VIP invitation strategy that did not yet exist. Trainers, media, " +
        "embassies and agencies at home and abroad had to move in one direction.",
      strategy:
        "I positioned the race as a media platform rather than a single event: a launch moment " +
        "(the press conference), a channel (international promotion and press roundtables) " +
        "and a guest strategy (embassy-channel VIP invitations), and I briefed agencies " +
        "against those objectives rather than against a run-of-show.",
      build:
        "As Chief Director I planned, directed and produced the first-ever Korea Cup & Korea " +
        "Sprint press conference (JW Marriott Seoul, 4 September 2026); planned and executed " +
        "promotion across global racing media; designed the VIP invitation strategy through " +
        "UK, France, Japan and Hong Kong embassy channels; ran the virtual international " +
        "studio and journalist roundtables; and briefed and steered the creative and event " +
        "agencies.",
      partners:
        "I coordinated directly with overseas connections and trainers, international racing " +
        "media, embassies, Arirang TV, and the creative and event agencies, inside KRA's " +
        "International Business Division.",
      outcome:
        "The press conference and international media program ran as I planned them, with " +
        "domestic and international coverage, and I contributed to staging the race itself. " +
        "Six days later KRA and Arirang TV signed an MOU on international sports content — a " +
        "partnership I now work on through co-production and procurement.",
      lessons:
        "An event becomes a platform when every stakeholder has a reason to show up that is " +
        "theirs, not yours — and when one person owns the story, the guest list and the " +
        "agency brief together.",
    },
    highlights: [
      {
        title: "Chief Director, 2026 Korea Cup Press Conference",
        description:
          "Overall direction and production of the race's first-ever press conference for domestic and international media.",
        tags: ["Chief Director", "Press conference", "2026"],
        link: "https://www.ekn.kr/web/view.php?key=20260906027241038",
      },
      {
        title: "2026 Korea Cup staging",
        description:
          "Contributed to the successful staging of the flagship international race across its international broadcast and event execution.",
        tags: ["Korea Cup", "Event execution", "International"],
      },
      {
        title: "VIP invitation strategy",
        description:
          "Invitation strategy targeting equestrian-linked royalty and global racing figures through embassy channels in the UK, France, Japan and Hong Kong.",
        tags: ["VIP", "Embassies", "Strategy"],
      },
      {
        title: "International promotion & press roundtables",
        description:
          "Promotion across global racing media ahead of the race, plus a virtual international studio and roundtables with overseas journalists.",
        tags: ["Promotion", "Global media", "Roundtable"],
      },
      {
        title: "Arirang TV MOU & co-production",
        description:
          "Co-produced programming with Korea's public international broadcaster, carrying Korean racing to English-language TV audiences.",
        tags: ["Co-production", "Arirang TV", "MOU"],
        link: "https://m.ekn.kr/view.php?key=20260911021503596",
      },
      {
        title: "Creative & event agency direction",
        description:
          "Briefing and steering creative and event agencies so that event expressions match market objectives.",
        tags: ["Agencies", "Creative", "Objectives"],
      },
    ],
    videos: [
      { title: "Korea Cup international promotion", youtubeId: "44hkp7DSYv4" },
    ],
    images: [
      { title: "Virtual international studio — Korea Cup & Korea Sprint roundtable with international journalists", src: "/images/work/strategy/virtual-studio.jpg" },
    ],
    press: [
      {
        title: "KRA and Arirang TV sign MOU to take K-Racing global",
        outlet: "Energy Economy",
        date: "2026.09.11",
        href: "https://m.ekn.kr/view.php?key=20260911021503596",
        excerpt: "Korea Racing Authority and the Korea International Broadcasting Foundation (Arirang TV) agree to jointly plan and produce international sports content and expand Korean culture, tourism and sport through overseas broadcast networks.",
        image: "https://www.ekn.kr/mnt/file/202609/news-p.v1.20260911.56a246e6c36e46a2a7b62a692e49f05a_R.jpg",
        lang: "ko",
      },
      {
        title: "Toward an advanced racing nation: making racing an everyday leisure",
        outlet: "Energy Economy",
        date: "2026.09.06",
        href: "https://www.ekn.kr/web/view.php?key=20260906027241038",
        excerpt: "KRA holds the first press conference since the launch of the Korea Cup and Korea Sprint, at JW Marriott Seoul on 4 September, with owners, trainers and jockeys from Korea, Japan and Hong Kong ahead of the KRW 3 billion race meeting.",
        image: "https://www.ekn.kr/mnt/file/202609/news-p.v1.20260906.114eac3826fb4344b3172d21e342e486_R.png",
        lang: "ko",
      },
    ],
  },
  {
    slug: "partners",
    gate: 3,
    silkBg: "#A6192E",
    silkFg: "#FFFFFF",
    kind: "case",
    title: "International Partner & Contract Operations",
    tagline: "Negotiation, SOW, procurement and governance — one operating chain from overseas partner to local vendor",
    capabilities: ["Negotiation", "SOW", "Procurement", "Governance"],
    description:
      "The operating system behind multi-market delivery: overseas partner terms on one " +
      "side, production vendors on the other, and a public-sector approval and procurement " +
      "process in between. I own that chain — from Scope of Work and vendor selection " +
      "through negotiation, budgets, contract administration, delivery QA and performance " +
      "evaluation — across several productions at once.",
    caseStudy: {
      problem:
        "I am the person accountable for the chain between an overseas partner's delivery " +
        "terms, our local production vendors and a public-sector procurement and approval " +
        "system. A gap anywhere in that chain is mine to close.",
      strategy:
        "I own the whole chain as one system: scope agreed with the overseas partner first, " +
        "translated into a Scope of Work and vendor contract, and routed through procurement " +
        "and approval so delivery is both fast and defensible.",
      build:
        "I negotiate contract terms, distribution scope and delivery obligations with overseas " +
        "broadcasters and distributors (since 2024); write the SOWs, evaluate proposals, set " +
        "budgets and administer contracts for production vendors, including the Arirang TV " +
        "co-production; manage annual vendor contracts and concurrent productions; evaluate " +
        "vendor performance into the next selection cycle; and built the workflow and " +
        "documentation standards so the know-how stays with the organization.",
      partners:
        "Overseas broadcasters and distributors, France Galop, World Horse Racing, Racing and " +
        "Sports, Arirang TV, domestic production companies, and KRA's procurement and " +
        "approval lines.",
      outcome:
        "Multi-market delivery across concurrent productions that I sign off on; a " +
        "repeatable procurement-to-delivery playbook I wrote; and contract engagement added " +
        "to my role in 2024 as a standing responsibility.",
      lessons:
        "Governance is a feature, not friction. Partners trust a counterpart who can say what " +
        "is possible, by when and with what approval — and then deliver exactly that.",
    },
    highlights: [
      {
        title: "Overseas contract engagement",
        description:
          "Direct negotiation of contract terms, distribution scope and delivery obligations with overseas broadcast and distribution partners.",
        tags: ["Contracts", "Negotiation", "Since 2024"],
      },
      {
        title: "Arirang TV media production procurement",
        description:
          "SOW, proposal evaluation, budget planning and contract administration for the co-produced program.",
        tags: ["Procurement", "SOW", "Contracts"],
      },
      {
        title: "Annual vendor contracts & concurrent delivery",
        description:
          "Annual production contracts and outsourcing across broadcast vendors; negotiating terms, holding budgets and managing deliverables and timelines across projects running in parallel.",
        tags: ["Vendor ops", "Budgets", "Timelines"],
      },
      {
        title: "Vendor performance evaluation",
        description:
          "Evaluating vendor performance and feeding results into the next cycle of selection.",
        tags: ["Evaluation", "Quality"],
      },
      {
        title: "Korean public-sector procedure",
        description:
          "Approvals, procurement rules, ministry-level protocol and official-announcement timing inside a government-affiliated corporation — so plans become approved plans.",
        tags: ["Public sector", "Approvals", "Protocol"],
      },
      {
        title: "Workflow & documentation standards",
        description:
          "Built the workflow system and documentation standards for recurring production work so operational know-how stays with the organization.",
        tags: ["Workflow", "Documentation", "Playbooks"],
      },
    ],
  },
  {
    slug: "broadcast",
    gate: 4,
    silkBg: "#131A16",
    silkFg: "#FFFFFF",
    kind: "case",
    title: "Content Production",
    tagline: "The end-to-end content value chain the business is built on — 1,000+ live broadcasts",
    capabilities: ["End-to-end production", "Live", "Editorial & localization QA"],
    description:
      "Why I understand the content value chain first-hand. English-language racing " +
      "content for international markets — planned, scripted, produced, edited, " +
      "quality-checked and scheduled — on a fixed weekly cycle plus race-day coverage. " +
      "I am the only Korean English-language racing broadcaster in the world, with 1,000+ " +
      "live race broadcasts, and I own Korean–English editorial, terminology and " +
      "localization QA so the brand reads the same across 29 markets.",
    highlights: [
      {
        title: "Weekly international program & race-day coverage",
        description:
          "A recurring English-language product on a fixed weekly cycle: planning, scripting, recording, editing, QA and scheduling — the feed overseas partners build on.",
        tags: ["Weekly cycle", "Full-stack production", "Scheduling"],
      },
      {
        title: "Live presenting & commentary, 1,000+ broadcasts",
        description:
          "The only Korean English-language racing broadcaster in the world; live race calls plus interview planning and production in a real-time environment.",
        tags: ["Live", "On-air", "English commentary"],
        link: "https://blog.naver.com/jobarajob/220814900553",
      },
      {
        title: "Korea Cup international broadcast",
        description:
          "English-language broadcast content for KRA's flagship international race, produced for overseas broadcasters and audiences.",
        tags: ["Korea Cup", "Flagship", "International"],
      },
      {
        title: "On-site production abroad",
        description:
          "Broadcast production at overseas race days, including the Hong Kong International Races.",
        tags: ["On-site", "Hong Kong", "International"],
      },
      {
        title: "Editorial, terminology & fact-checking",
        description:
          "Editorial ownership of everything published in Korean and English — scripts, press releases, features — with terminology standards, fact verification and final approval.",
        tags: ["Editorial", "Terminology", "Approval"],
      },
      {
        title: "Localization & cross-cultural adaptation",
        description:
          "Translation review and language QA on all outbound multilingual content; adapting messaging for international audiences rather than merely translating it.",
        tags: ["Localization", "Language QA", "29 markets"],
      },
    ],
    videos: [
      { title: "2026.09 Production with Arirang TV media", youtubeId: "k7eJ7oRJAZM" },
      { title: "End-to-end production work sample", youtubeId: "RmTNens-v7A" },
      { title: "Interview as a broadcast announcer (2023)", youtubeId: "5EJWg__j-_8" },
    ],
    images: [
      { title: "End-to-end production, on site — Hong Kong International Races", src: "/images/work/broadcast/end-to-end.jpg" },
      { title: "On set — live international broadcast interview, Seoul", src: "/images/on-set.jpg" },
    ],
    press: [
      {
        title: "International announcer debut — Korea Racing Authority (2015)",
        outlet: "Naver Blog",
        date: "2015",
        href: "https://blog.naver.com/jobarajob/220814900553",
        excerpt: "Feature on Jungrun Kim's debut as KRA's international announcer, the English-language voice of Korean racing for overseas broadcasts.",
        lang: "ko",
      },
    ],
  },
  {
    slug: "ai-live-companion",
    gate: 5,
    silkBg: "#0F3FA8",
    silkFg: "#FFFFFF",
    kind: "lab",
    status: "Prototype in development · 2026 Q4",
    title: "AI Sports Live Companion",
    tagline: "An AI product layer that turns a live race feed into a personalized, multilingual fan companion",
    capabilities: ["AI product thinking", "Prototype", "Business case", "LLMOps"],
    description:
      "Build Lab. My Yonsei M.S. research on AI-generated real-time sports commentary, " +
      "reframed as a product: a live companion that uses race data, vision-language " +
      "models and LLMs to generate commentary, answer fan questions and personalize the " +
      "experience per market — evaluated as a business case, not only a research result.",
    caseStudy: {
      problem:
        "The live content I export to 29 markets is still one feed, one language, one " +
        "commentary track. Overseas fans new to Korean racing cannot ask what a form line " +
        "means, who a jockey is or why a horse is the favorite — in real time, in their own " +
        "language. That gap caps engagement, and therefore the value of the content I sell.",
      strategy:
        "Instead of more broadcasting, I am adding a product layer on top of the feed: a live " +
        "companion that turns real-time race data and video into generated commentary, fan " +
        "Q&A and per-market personalization — measured on engagement, retention and " +
        "localization cost per market, not just model quality.",
      build:
        "I am building it on my M.S. research at Yonsei (LLMOps, VLM, applied AI). Scope: live " +
        "data ingestion → event detection → commentary generation → multilingual delivery, " +
        "with a business case I am writing on target markets, unit economics and partner fit. " +
        "Working prototype and demo video planned for 2026 Q4.",
      partners:
        "Yonsei University AI program; my own domain knowledge from KRA's international feed " +
        "and overseas partner requirements (independent prototype, not an official KRA " +
        "product).",
      outcome:
        "Status: prototype in development. What I will deliver — a working prototype, a demo " +
        "video and an 8–10 page business case.",
      lessons:
        "The hard part of AI in sports is not the model. It is defining the fan problem " +
        "precisely enough that the model is worth building — and eleven years of watching " +
        "overseas audiences meet Korean content is my dataset.",
    },
    highlights: [
      {
        title: "From research to product framing",
        description:
          "AI-generated real-time sports commentary (M.S. research) positioned as an applied product and business use case for live sports.",
        tags: ["Research → product", "LLMOps", "VLM"],
      },
      {
        title: "The fan problem",
        description:
          "Overseas fans need real-time, in-language answers to 'what am I looking at?' — the companion is built around that question, not around the technology.",
        tags: ["Fan experience", "Multilingual", "Real-time"],
      },
      {
        title: "Business case",
        description:
          "Target markets, unit economics and partner fit written up as an 8–10 page case alongside the prototype.",
        tags: ["Unit economics", "Partner fit", "Go-to-market"],
      },
      {
        title: "Pipeline scope",
        description:
          "Live data ingestion → event detection → commentary generation → multilingual delivery, with evaluation metrics defined up front.",
        tags: ["Pipeline", "Evaluation", "Prototype"],
      },
    ],
  },
  {
    slug: "localization-agent",
    gate: 6,
    silkBg: "#1C5940",
    silkFg: "#FFFFFF",
    kind: "lab",
    status: "Example shipped: Jeju Racing Race Card · official KRA product planned for 2026 Q4",
    url: "https://jokim90.github.io/jeju-racecard/",
    title: "Global Sports Localization & Distribution Agent",
    tagline: "Automating the Korean–English content pipeline so more markets can be served, faster — a distribution lever, not a translation tool",
    capabilities: ["LLM workflow", "Globalization", "Unit economics", "Operations"],
    description:
      "Build Lab. Localization as a distribution lever, not a translation task: an LLM-driven " +
      "agent that drafts, applies house terminology, generates dual-language subtitles and " +
      "flags fact-check items — with a human approval gate — so each new market costs less " +
      "to serve. The shipped example of the same thinking is my Jeju Racing Race Card: a " +
      "bilingual race card, form guide and primer that makes Korean pony racing legible to " +
      "overseas punters, fed automatically from KRA open data.",
    caseStudy: {
      problem:
        "Every new market I serve needs the same chain: script → translation review → " +
        "terminology QA → subtitles → fact-check → delivery. I run that chain by hand today, " +
        "and it caps how many markets and formats can be served per week.",
      strategy:
        "I treat localization as a distribution cost line, not an editorial chore. An agent " +
        "that automates the repeatable steps and leaves judgment to a human approval gate " +
        "lowers cost per market and makes 'more markets, faster' a product decision rather " +
        "than a staffing one.",
      build:
        "Shipped example — Jeju Racing Race Card: I designed a live-action data pipeline on KRA " +
        "open data and built a website that explains Jeju racing, a uniquely Korean product " +
        "unfamiliar to overseas fans, in English and Korean. Because new races are carded every " +
        "week and several run on a single day, a pipeline that updates itself in real time was a " +
        "core design point. Providing overseas racing fans with a data-driven prediction model is " +
        "another distinctive part of this work. Next step: the agent layer on top of the subtitle " +
        "and editorial workflow I already run.",
      partners:
        "An independent prototype built on KRA open data from data.go.kr. I am now planning the " +
        "selection of an outsourced development vendor; after server development, it is scheduled " +
        "for release as an official product of KRA's International Business Division, as early as " +
        "2026 Q4.",
      outcome:
        "One localization product live and self-updating at jokim90.github.io/jeju-racecard, " +
        "in Korean and English. The agent that generalizes it to the broadcast pipeline is in " +
        "development; the subtitle workflow and localization samples below are the base.",
      lessons:
        "Localization automation only matters if it is measured as 'how many more markets, " +
        "how much faster' — the metric a distribution business actually cares about.",
    },
    highlights: [
      {
        title: "Open the live Jeju Racing Race Card",
        description:
          "Race Card · Results · Model record · Jeju 101, Korean/English, updated automatically from KRA open data via GitHub Actions.",
        tags: ["Live", "KO / EN", "data.go.kr"],
        link: "https://jokim90.github.io/jeju-racecard/",
      },
      {
        title: "Jeju 101 primer — localization as explanation",
        description:
          "Classes and ratings, weight rules, apprentice allowances, distances and entry procedures, rewritten for a reader who knows Thoroughbred form but not Korean ponies.",
        tags: ["Primer", "Localization", "Fan experience"],
      },
      {
        title: "Dual-language subtitle workflow (today)",
        description:
          "The hands-on Korean–English subtitle generation workflow for broadcast content that the agent automates.",
        tags: ["Subtitles", "KO ↔ EN", "Workflow"],
      },
      {
        title: "Terminology & QA standards (today)",
        description:
          "House terminology, translation review and fact-checking standards that keep one brand voice across 29 markets — encoded as the agent's rules.",
        tags: ["Terminology", "QA", "Brand voice"],
      },
      {
        title: "Agent scope",
        description:
          "Terminology-aware drafts → subtitle generation → QA checklist → delivery packaging, with a human approval gate before anything ships.",
        tags: ["LLM agent", "Human-in-the-loop", "Delivery"],
      },
      {
        title: "Unit economics",
        description:
          "Hours per episode and markets served per week as the success metrics — the numbers a distribution business tracks.",
        tags: ["Unit economics", "Throughput", "Markets"],
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
    title: "Chief Director, Korea Cup Press Conference · Arirang TV MOU & co-production",
    detail:
      "Chief Director of the first-ever Korea Cup press conference; contributed to staging " +
      "the 2026 Korea Cup; Arirang TV MOU and co-production and " +
      "broadcast collaborations with YTN and KBS N. Annual export revenue reaches KRW 150 " +
      "billion+.",
  },
  {
    period: "2024",
    title: "Contract engagement with overseas partners",
    detail:
      "Role expands beyond planning, production and presenting into direct negotiation of " +
      "contract terms, distribution scope and delivery obligations with overseas broadcast " +
      "and distribution partners.",
  },
  {
    period: "2015 —",
    title:
      "International Broadcast Announcer & Producer · International Business Division, Korea Racing Authority (KRA / KRBC)",
    detail:
      "Functional scope: global content business · strategic partnerships · contracts · " +
      "live sports · international events. Joined through KRA's competitive public-sector " +
      "recruitment as the dedicated export content lead in the venture's second year; " +
      "contributed to its growth to 29 countries, with 1,000+ live race broadcasts along " +
      "the way.",
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
    degree: "M.S. in Artificial Intelligence",
    detail:
      "Focus: LLMOps, vision-language models (VLM), applied AI. Research: AI-generated real-time sports commentary.",
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

/**
 * 역량 — 자기평가 점수 대신 "Capability + Evidence + Outcome" 구조.
 * 순서: Business → Partnership → Project ownership → Content execution → AI → Languages
 */
export type Capability = { name: string; evidence: string; outcome: string };

export const capabilities: { group: string; items: Capability[] }[] = [
  {
    group: "New Business & Strategy",
    items: [
      {
        name: "Market expansion",
        evidence:
          "Dedicated content lead from the export venture's early days; helped take Korean racing content to 29 countries on five continents.",
        outcome: "29 countries · KRW 150B+ annual revenue (2026)",
      },
      {
        name: "0→1 initiative design",
        evidence:
          "First-ever Korea Cup press conference, VIP invitation strategy and international media program, structured from zero.",
        outcome: "Korea Cup staged as a media platform, not a single race day",
      },
      {
        name: "Business case & product framing",
        evidence:
          "AI Sports Live Companion and Localization Agent business cases, with the Jeju Racing Race Card shipped as the first live example.",
        outcome: "Build Lab: one example live, two prototypes in development",
      },
    ],
  },
  {
    group: "Strategic Partnerships & Global BD",
    items: [
      {
        name: "Contract engagement",
        evidence:
          "Direct negotiation of terms, distribution scope and delivery obligations with overseas broadcasters and distributors since 2024.",
        outcome: "Standing responsibility across the partner portfolio",
      },
      {
        name: "Content & distribution partnerships",
        evidence: "France Galop · World Horse Racing · Racing and Sports · Arirang TV.",
        outcome: "Multi-year partner relationships; 2026 Arirang TV MOU",
      },
      {
        name: "Cross-border coordination",
        evidence:
          "APAC and global partners, embassies and international press, in Korean, English and French.",
        outcome: "Partner-facing in three languages",
      },
    ],
  },
  {
    group: "Project Ownership & Operations",
    items: [
      {
        name: "Procurement & vendor management",
        evidence:
          "SOW, proposal evaluation, budgets, contract administration and performance evaluation across concurrent productions.",
        outcome: "Repeatable procurement-to-delivery playbook",
      },
      {
        name: "Public-sector governance",
        evidence:
          "Approvals, procurement rules and ministry-level protocol inside a government-affiliated corporation.",
        outcome: "Plans become approved plans without losing momentum",
      },
      {
        name: "Event & program direction",
        evidence:
          "Chief Director, 2026 Korea Cup Press Conference; international event hosting and agency direction.",
        outcome: "Press conference and media program delivered with domestic and international coverage",
      },
    ],
  },
  {
    group: "Content & Product Execution",
    items: [
      {
        name: "End-to-end content production",
        evidence:
          "Weekly international program and race-day coverage: concept, script, production, QA and scheduling.",
        outcome: "A reliable product overseas partners can schedule",
      },
      {
        name: "Live broadcasting",
        evidence:
          "1,000+ live race broadcasts; the only Korean English-language racing broadcaster in the world.",
        outcome: "First-hand understanding of the content value chain",
      },
      {
        name: "Editorial, terminology & localization QA",
        evidence:
          "Korean–English editorial ownership, terminology standards and the dual-language subtitle workflow.",
        outcome: "One brand voice across 29 markets",
      },
    ],
  },
  {
    group: "Applied AI",
    items: [
      {
        name: "LLMOps · VLM · applied AI",
        evidence:
          "M.S. in AI, Yonsei University (2026); research on AI-generated real-time sports commentary.",
        outcome: "Framed as a product and business use case for live sports",
      },
      {
        name: "AI-assisted content workflows",
        evidence:
          "Generative image and video tools in production; LLM workflow design for localization and distribution.",
        outcome: "Build Lab: Jeju Racing Race Card live",
      },
    ],
  },
  {
    group: "Languages",
    items: [
      {
        name: "Korean · English · French",
        evidence:
          "Korean native; English at professional broadcast level (raised in the US); French working (SKKU, Université Grenoble Alpes).",
        outcome: "KO / EN / FR",
      },
    ],
  },
];

export const stats = [
  "11 years building Korean sports content into a global business",
  "29 countries · contributed to KRW 150B+ annual export revenue",
  "Contract engagement with overseas broadcasters & distributors since 2024",
  "Chief Director, first-ever Korea Cup press conference (2026)",
  "Partners: France Galop · World Horse Racing · Racing and Sports · Arirang TV",
  "M.S. AI (Yonsei, 2026) · Build Lab: AI × Sports prototypes",
  "1,000+ live broadcasts · KO / EN / FR",
];
