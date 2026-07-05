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
  email: "hello@example.com", // TODO: 실제 이메일로 교체
  location: "Seoul, Korea",
  role: "International Media Producer · Language Expert · Global Content Operations",
  tagline:
    "International broadcast production, localization, editorial excellence, media operations, and global partnership management.",
  intro:
    "International media professional with 10+ years of experience producing multilingual " +
    "broadcast content, leading global partnerships, managing localization and editorial " +
    "quality, and delivering international media projects from concept through distribution.",
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
    tagline: "End-to-end international broadcast production",
    description:
      "End-to-end broadcast production for international audiences — live production, " +
      "audio recording and post-production, video editing, broadcast delivery, production " +
      "planning, and editorial & language QA. Tools: Adobe Audition, Premiere Pro, EDIUS, " +
      "Photoshop, Illustrator.",
    highlights: [
      {
        title: "Korea Cup",
        description:
          "International broadcast production for Korea's flagship race day, produced for a global audience.",
        tags: ["Live production", "International", "Flagship event"],
      },
      {
        title: "KRBC International",
        description:
          "English-language broadcast production and delivery for KRBC's international programming.",
        tags: ["Broadcast delivery", "English", "KRBC"],
      },
      {
        title: "YTN Cup",
        description:
          "Production planning and broadcast execution for the YTN Cup race-day coverage.",
        tags: ["Production planning", "Event"],
      },
      {
        title: "Weekly International Racing Broadcast",
        description:
          "Recurring weekly production cycle: scripting, recording, editing, QA, and on-time delivery.",
        tags: ["Weekly cycle", "Post-production", "Editorial QA"],
      },
    ],
    videos: [
      // { title: "Broadcast sample", youtubeId: "ABC123" }, // ← YouTube ID로 교체
    ],
  },
  {
    slug: "editorial",
    gate: 2,
    silkBg: "#131A16",
    silkFg: "#FFFFFF",
    title: "Editorial Excellence & Language QA",
    tagline: "Language quality and editorial expertise",
    description:
      "Editorial ownership across the full written output of an international broadcaster — " +
      "from first draft to publication approval, in Korean and English.",
    highlights: [
      {
        title: "Broadcast scripts & feature articles",
        description:
          "Wrote and edited broadcast scripts, press releases, feature articles, and newsletters.",
        tags: ["Scriptwriting", "Press releases", "Features"],
      },
      {
        title: "English editorial writing",
        description:
          "Original English-language editorial writing for international audiences and partners.",
        tags: ["English", "Editorial"],
      },
      {
        title: "Translation review & Language QA",
        description:
          "Reviewed translations and ran language QA across all outbound multilingual content.",
        tags: ["Translation review", "Language QA"],
      },
      {
        title: "Terminology, fact verification & publication approval",
        description:
          "Managed terminology standards, verified facts, and held final publication approval.",
        tags: ["Terminology", "Fact-checking", "Editorial QA"],
      },
    ],
  },
  {
    slug: "localization",
    gate: 3,
    silkBg: "#A6192E",
    silkFg: "#FFFFFF",
    title: "Localization & Global Communication",
    tagline: "Multilingual & cross-cultural communication",
    description:
      "Making content and conversations work across languages and cultures — " +
      "Korean–English communication, cross-cultural adaptation, and global media coordination.",
    highlights: [
      {
        title: "Localization case studies",
        description:
          "Documented localization projects showing how content was adapted, not just translated.",
        tags: ["Localization", "Case study"],
      },
      {
        title: "Cross-cultural adaptation",
        description:
          "Adapted content and messaging for international audiences with different cultural contexts.",
        tags: ["Adaptation", "Culture"],
      },
      {
        title: "International stakeholder communication",
        description:
          "English–Korean communication with global partners, including international meeting documentation.",
        tags: ["Stakeholders", "KO ↔ EN", "Documentation"],
      },
      {
        title: "Global media coordination",
        description:
          "Coordinated content and communication flows across international media partners.",
        tags: ["Coordination", "Global media"],
      },
    ],
  },
  {
    slug: "strategy",
    gate: 4,
    silkBg: "#0F3FA8",
    silkFg: "#FFFFFF",
    title: "International Content & Media Strategy",
    tagline: "Global initiatives, partnerships & audience engagement",
    description:
      "Global content initiatives and the strategy behind them — international promotion, " +
      "partnership-driven content, distribution, and performance measurement. Each initiative " +
      "is documented as a full case study: background, objectives, challenges, my role, " +
      "execution, deliverables, results, and key learnings.",
    highlights: [
      {
        title: "Korea Cup International Promotion",
        description:
          "Planned and executed international promotion for Korea Cup across global racing media.",
        tags: ["Promotion", "Case study"],
      },
      {
        title: "France Galop Partnership",
        description:
          "Partnership collaboration with France Galop, from coordination through content delivery.",
        tags: ["Partnership", "France"],
      },
      {
        title: "World Horse Racing Collaboration",
        description:
          "Content collaboration with World Horse Racing to bring Korean racing to global audiences.",
        tags: ["Collaboration", "Global media"],
      },
      {
        title: "Racing & Sports Australia",
        description:
          "International content coordination with Racing & Sports Australia.",
        tags: ["Partnership", "Australia"],
      },
      {
        title: "International Media Relations",
        description:
          "Ongoing relationship management with international racing and sports media outlets.",
        tags: ["Media relations", "Communication"],
      },
      {
        title: "Audience engagement & performance measurement",
        description:
          "Designed engagement campaigns and measured content performance to feed results back into planning.",
        tags: ["Audience", "Campaigns", "Measurement"],
      },
    ],
  },
  {
    slug: "vendor",
    gate: 5,
    silkBg: "#E8C31E",
    silkFg: "#131A16",
    title: "Vendor & Production Management",
    tagline: "Procurement, vendor operations & delivery",
    description:
      "Full-cycle production procurement and vendor management — from Scope of Work and " +
      "vendor selection through contract administration, deliverable management, and performance evaluation.",
    highlights: [
      {
        title: "Arirang TV production procurement",
        description:
          "Led production procurement with Arirang TV: SOW, proposal evaluation, budget planning, " +
          "and contract administration.",
        tags: ["Procurement", "SOW", "Contracts"],
      },
      {
        title: "Annual vendor management",
        description:
          "Managed annual production contracts and outsourcing across broadcast production vendors.",
        tags: ["Vendor ops", "Annual contracts"],
      },
      {
        title: "Deliverable & performance management",
        description:
          "Managed deliverables, timelines, and vendor performance evaluation across concurrent projects.",
        tags: ["Deliverables", "Evaluation", "Timelines"],
      },
      {
        title: "Creative agency management",
        description:
          "Coordinated creative agencies and production vendors with stakeholder and risk management.",
        tags: ["Agencies", "Risk management", "Stakeholders"],
      },
    ],
  },
  {
    slug: "innovation",
    gate: 6,
    silkBg: "#1C5940",
    silkFg: "#FFFFFF",
    title: "Process Innovation",
    tagline: "Operational thinking & workflow design",
    description:
      "Operational thinking behind the broadcasts — optimizing how work gets made, " +
      "documented, and improved across broadcast, editorial, and production workflows.",
    highlights: [
      {
        title: "Broadcast workflow optimization",
        description:
          "Streamlined recurring broadcast production workflows to reduce turnaround and errors.",
        tags: ["Workflow", "Broadcast"],
      },
      {
        title: "Editorial & production workflow",
        description:
          "Designed editorial and production workflows connecting writers, producers, and QA.",
        tags: ["Editorial", "Production"],
      },
      {
        title: "Documentation standards",
        description:
          "Established documentation standards so operational knowledge survives beyond individuals.",
        tags: ["Documentation", "Standards"],
      },
      {
        title: "Operational improvements & lessons learned",
        description:
          "Captured operational improvements and lessons learned as reusable playbooks.",
        tags: ["Improvement", "Playbooks"],
      },
    ],
  },
];

export const timeline = [
  {
    period: "2016 —",
    title: "Broadcaster & Producer, Korea Racing Authority (KRBC)",
    detail:
      "A decade of live broadcasting and international production: race-day programming, " +
      "English-language content, and global media partnerships.",
  },
  {
    period: "—",
    title: "International Partnerships",
    detail:
      "Led collaborations with France Galop, World Horse Racing, Racing & Sports Australia, and Arirang TV.",
  },
  {
    period: "2024 —",
    title: "AI Graduate Program",
    detail:
      "Graduate study in AI focused on machine-generated sports commentary — bringing " +
      "emerging technology literacy into media production.",
  },
];

export const skills = [
  {
    group: "Production",
    items: [
      { name: "Live & broadcast production", level: 95 },
      { name: "Audio post-production", level: 90 },
      { name: "Production planning & delivery", level: 90 },
    ],
  },
  {
    group: "Media Technology",
    items: [
      { name: "Adobe Audition", level: 90 },
      { name: "Adobe Premiere Pro / EDIUS", level: 85 },
      { name: "Photoshop / Illustrator", level: 75 },
    ],
  },
  {
    group: "Language & Editorial",
    items: [
      { name: "Korean (native)", level: 100 },
      { name: "English (professional)", level: 90 },
      { name: "Editorial & Language QA", level: 92 },
    ],
  },
  {
    group: "Operations",
    items: [
      { name: "Vendor & procurement management", level: 88 },
      { name: "Global partnership management", level: 85 },
      { name: "Workflow & process design", level: 82 },
    ],
  },
];

export const stats = [
  "10+ years in international media",
  "KO / EN bilingual",
  "Korea Cup · YTN Cup · KRBC International",
  "France Galop · WHR · Arirang TV",
  "Editorial & Language QA owner",
  "Full-cycle vendor management",
];
