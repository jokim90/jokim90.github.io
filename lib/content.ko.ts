/**
 * ─────────────────────────────────────────────────────────────
 *  content.ko.ts — content.ts의 한국어 버전.
 *  구조(slug, gate, silkBg/silkFg 등)는 content.ts와 반드시 동일하게 유지합니다.
 * ─────────────────────────────────────────────────────────────
 */
import type { Section } from "./content";

export const site = {
  name: "Jungrun Kim",
  handle: "jokim90",
  github: "https://github.com/jokim90",
  email: "jokim90@gmail.com",
  location: "대한민국 서울",
  role: "국제 미디어 프로듀서 · 언어 전문가 · 글로벌 콘텐츠 운영",
  tagline:
    "국제 방송 제작, 로컬라이제이션, 한-영 콘텐츠 검수, 미디어 운영, 글로벌 파트너십 관리.",
  intro:
    "10년 이상의 경력을 가진 국제 미디어 전문가로서, 다국어 방송 콘텐츠 제작과 " +
    "글로벌 파트너십 주도, 로컬라이제이션 및 에디토리얼 품질 관리, 기획부터 " +
    "배포까지 국제 미디어 프로젝트를 총괄해왔습니다.",
  heroHeadline: ["서울에서 라이브.", "글로벌 프로덕션"] as [string, string],
};

export const about = {
  headline: ["기획부터", "배포까지."] as [string, string],
  paragraphs: [
    "한국마사회(KRBC)에서 10년 넘게 방송기획 및 제작, 라이브 프로덕션부터 오디오·영상 후반 작업, " +
      "방송 송출까지 국제 방송 제작을 엔드투엔드로 담당했으며, 한국어와 영어로 " +
      "발행되는 모든 콘텐츠의 에디토리얼 품질과 언어 QA를 책임져왔습니다.",
    "스튜디오 밖에서는 프랑스 갈롭(France Galop), 월드 호스 레이싱(World Horse " +
      "Racing), 레이싱 앤 스포츠 오스트레일리아(Racing & Sports Australia), " +
      "아리랑TV와의 콘텐츠 파트너십을 주도했고, SOW 작성부터 벤더 선정, 예산, " +
      "계약, 납품까지 프로덕션 조달 전 과정을 관리했습니다.",
  ] as [string, string],
};

export const sections: Section[] = [
  {
    slug: "broadcast",
    gate: 1,
    silkBg: "#FFFFFF",
    silkFg: "#131A16",
    title: "글로벌 방송 제작",
    tagline: "기획부터 송출까지, 엔드투엔드 국제 방송 제작",
    description:
      "국제 시청자를 위한 엔드투엔드 방송 제작 — 라이브 프로덕션, 오디오 녹음 및 " +
      "후반 작업, 영상 편집, 방송 송출, 프로덕션 기획, 에디토리얼·언어 QA까지 " +
      "아우릅니다. 사용 툴: Adobe Audition, Premiere Pro, EDIUS, Photoshop, Illustrator.",
    highlights: [
      {
        title: "데일리 라이브: 오디오 방송 제작",
        description:
          "한국의 대표 경마 데이를 글로벌 시청자를 위해 국제 방송으로 제작했습니다.",
        tags: ["라이브 프로덕션", "라이브 방송", "인터뷰", "국제", "플래그십 이벤트"],
      },
      {
        title: "이중언어 저널리스트: 정부기관 방송 송출",
        description:
          "한국마사회(채널: KRBC)를 대표하여 국제 시청자를 위한 영어 방송을 제작·송출했습니다.",
        tags: ["방송 송출", "영어", "한국어", "저널리즘", "이중언어"],
      },
      {
        title: "카메라 앞에서, 카메라와 함께: 라이브 인터뷰 및 리포팅",
        description: "경주 당일 전체 중계를 위한 인터뷰 진행 및 방송 실행을 담당했습니다.",
        tags: ["프로덕션 기획", "스크립트 작성", "스케줄링", "편집", "인터뷰", "리포팅"],
      },
      {
        title: "풀스택 미디어 프로듀서",
        description:
          "기획, 스크립트, 녹음, 편집, QA, 납기 준수까지 엔드투엔드 미디어 제작을 수행합니다.",
        tags: ["주간 사이클", "정시 납품", "풀스택 제작"],
      },
    ],
    videos: [
      { title: "라이브 방송 샘플", youtubeId: "RmTNens-v7A" },
    ],
    images: [
      { title: "엔드투엔드 프로덕션 현장 — 홍콩 국제경주", src: "/images/work/broadcast/end-to-end.jpg" },
    ],
  },
  {
    slug: "editorial",
    gate: 2,
    silkBg: "#131A16",
    silkFg: "#FFFFFF",
    title: "에디토리얼 완성도 & 언어 QA",
    tagline: "언어 품질과 에디토리얼 전문성",
    description:
      "국제 방송사의 모든 문서 콘텐츠에 대한 에디토리얼 책임 — 초고 작성부터 " +
      "발행 승인까지, 한국어와 영어 모두.",
    highlights: [
      {
        title: "방송 대본 및 특집 기사",
        description: "방송 대본, 보도자료, 특집 기사, 뉴스레터를 작성 및 편집했습니다.",
        tags: ["대본 작성", "보도자료", "특집기사"],
      },
      {
        title: "영어 에디토리얼 라이팅",
        description:
          "국제 시청자 및 파트너를 위한 오리지널 영어 에디토리얼 콘텐츠를 작성했습니다.",
        tags: ["영어", "에디토리얼"],
      },
      {
        title: "번역 검수 및 언어 QA",
        description:
          "모든 다국어 발행 콘텐츠에 대해 번역을 검수하고 언어 QA를 진행했습니다.",
        tags: ["번역 검수", "언어 QA"],
      },
      {
        title: "용어 관리, 팩트 체크 및 발행 승인",
        description:
          "용어 표준을 관리하고 사실관계를 검증했으며 최종 발행 승인 권한을 보유했습니다.",
        tags: ["용어 관리", "팩트체크", "에디토리얼 QA"],
      },
    ],
    videos: [
      { title: "실전 작업: 한영 이중언어 자막 제작 워크플로우", youtubeId: "U02dflzVhtU" },
    ],
  },
  {
    slug: "localization",
    gate: 3,
    silkBg: "#A6192E",
    silkFg: "#FFFFFF",
    title: "로컬라이제이션 & 글로벌 커뮤니케이션",
    tagline: "다국어 및 크로스컬처 커뮤니케이션",
    description:
      "언어와 문화의 경계를 넘어 콘텐츠와 커뮤니케이션이 통하도록 만듭니다 — " +
      "한영 커뮤니케이션, 크로스컬처 각색, 글로벌 미디어 조율.",
    highlights: [
      {
        title: "로컬라이제이션 사례 연구",
        description:
          "단순 번역이 아닌 콘텐츠 각색 과정을 보여주는 로컬라이제이션 프로젝트를 사례로 문서화했습니다.",
        tags: ["로컬라이제이션", "사례 연구"],
      },
      {
        title: "크로스컬처 각색",
        description:
          "서로 다른 문화적 맥락을 가진 국제 시청자에 맞게 콘텐츠와 메시지를 각색했습니다.",
        tags: ["각색", "문화"],
      },
      {
        title: "국제 이해관계자 커뮤니케이션",
        description:
          "국제 회의록 작성을 포함해 글로벌 파트너와 영-한 커뮤니케이션을 수행했습니다.",
        tags: ["이해관계자", "한↔영", "문서화"],
      },
      {
        title: "글로벌 미디어 조율",
        description: "국제 미디어 파트너 간 콘텐츠와 커뮤니케이션 흐름을 조율했습니다.",
        tags: ["조율", "글로벌 미디어"],
      },
    ],
    videos: [
      { title: "로컬라이제이션 샘플", youtubeId: "gA01EU1JX1Q" },
    ],
  },
  {
    slug: "strategy",
    gate: 4,
    silkBg: "#0F3FA8",
    silkFg: "#FFFFFF",
    title: "국제 콘텐츠 & 미디어 전략",
    tagline: "글로벌 이니셔티브, 파트너십, 오디언스 인게이지먼트",
    description:
      "글로벌 콘텐츠 그 이면의 전략 — 국제 프로모션, 파트너십 기반 " +
      "콘텐츠, 배포, 성과 측정. 각 이니셔티브는 배경, 목표, 과제, 역할, 실행, " +
      "산출물, 결과, 핵심 인사이트를 포함한 전체 사례 연구로 문서화되어 있습니다.",
    highlights: [
      {
        title: "코리아컵 국제 프로모션",
        description:
          "글로벌 경마 미디어를 대상으로 코리아컵 국제경주 프로모션을 기획 및 실행했습니다.",
        tags: ["프로모션", "대외홍보"],
      },
      {
        title: "프랑스 갈롭 파트너십",
        description: "계약부터 라이브 방송 콘텐츠 납품까지, 프랑스 갈롭과의 파트너십 협업을 진행했습니다.",
        tags: ["파트너십", "프랑스"],
      },
      {
        title: "월드 호스 레이싱 협업",
        description:
          "한국 경마를 글로벌 시청자에게 전달하기 위해 월드 호스 레이싱과 콘텐츠 협업을 진행했습니다.",
        tags: ["협업", "글로벌 미디어"],
      },
      {
        title: "레이싱 앤 스포츠 오스트레일리아",
        description: "레이싱 앤 스포츠 오스트레일리아와 국제 콘텐츠 조율을 진행했습니다.",
        tags: ["파트너십", "호주"],
      },
      {
        title: "국제 미디어 릴레이션",
        description: "국제 경마 및 스포츠 미디어 매체와의 관계를 지속적으로 관리했습니다.",
        tags: ["미디어 릴레이션", "커뮤니케이션"],
      },
      {
        title: "오디언스 인게이지먼트 & 성과 측정",
        description:
          "인게이지먼트 캠페인을 설계하고 콘텐츠 성과를 측정해 그 결과를 기획에 다시 반영했습니다.",
        tags: ["오디언스", "캠페인", "성과 측정"],
      },
    ],
    videos: [
      { title: "코리아컵 국제 프로모션", youtubeId: "44hkp7DSYv4" },
    ],
    images: [
      {
        title: "버추얼 국제 스튜디오 — 코리아컵 & 코리아스프린트 국제 저널리스트 라운드테이블",
        src: "/images/work/strategy/virtual-studio.jpg",
      },
    ],
  },
  {
    slug: "vendor",
    gate: 5,
    silkBg: "#E8C31E",
    silkFg: "#131A16",
    title: "벤더 & 프로덕션 관리",
    tagline: "조달, 벤더 운영, 납품 관리",
    description:
      "SOW 작성 및 벤더 선정부터 계약 관리, 산출물 관리, 성과 평가까지 " +
      "프로덕션 조달과 벤더 관리 전 주기를 담당합니다.",
    highlights: [
      {
        title: "아리랑TV 프로덕션 조달",
        description:
          "아리랑TV와의 프로덕션 조달을 주도했습니다: SOW 작성, 제안서 평가, 예산 기획, 계약 관리.",
        tags: ["조달", "SOW", "계약"],
      },
      {
        title: "연간 벤더 관리",
        description: "방송 제작 벤더 전반에 걸쳐 연간 제작 계약 및 아웃소싱을 관리했습니다.",
        tags: ["벤더 운영", "연간 계약"],
      },
      {
        title: "산출물 & 성과 관리",
        description:
          "동시에 진행되는 여러 프로젝트의 산출물, 일정, 벤더 성과 평가를 관리했습니다.",
        tags: ["산출물", "평가", "일정 관리"],
      },
      {
        title: "크리에이티브 에이전시 관리",
        description:
          "이해관계자 및 리스크 관리를 병행하며 크리에이티브 에이전시와 제작 벤더를 조율했습니다.",
        tags: ["에이전시", "리스크 관리", "이해관계자"],
      },
    ],
  },
  {
    slug: "innovation",
    gate: 6,
    silkBg: "#1C5940",
    silkFg: "#FFFFFF",
    title: "프로세스 혁신",
    tagline: "운영 사고와 워크플로우 설계",
    description:
      "방송 이면의 운영적 사고 — 방송, 에디토리얼, 프로덕션 워크플로우 전반에서 " +
      "업무가 만들어지고 문서화되고 개선되는 방식을 최적화합니다.",
    highlights: [
      {
        title: "방송 워크플로우 최적화",
        description: "반복되는 방송 제작 워크플로우를 개선해 소요 시간과 오류를 줄였습니다.",
        tags: ["워크플로우", "방송"],
      },
      {
        title: "에디토리얼 & 프로덕션 워크플로우",
        description:
          "작가, 프로듀서, QA를 연결하는 에디토리얼 및 프로덕션 워크플로우를 설계했습니다.",
        tags: ["에디토리얼", "프로덕션"],
      },
      {
        title: "문서화 표준",
        description: "운영 지식이 개인을 넘어 조직에 남도록 문서화 표준을 수립했습니다.",
        tags: ["문서화", "표준"],
      },
      {
        title: "운영 개선 및 교훈",
        description: "운영 개선 사항과 교훈을 재사용 가능한 플레이북 형태로 정리했습니다.",
        tags: ["개선", "자동화"],
      },
    ],
  },
];

export const timeline = [
  {
    period: "2014.09 — 2014.11",
    title: "기자, TBS (프리랜서)",
    detail: "English Live Broadcast Reporter.",
  },
  {
    period: "2015.01 — 2015.03",
    title: "기자, 연합뉴스 (인턴)",
    detail: "연합뉴스TV 옴부즈맨 대학생 방송 기자.",
  },
  {
    period: "2016 —",
    title: "방송인 & 프로듀서, 한국마사회 (KRBC)",
    detail:
      "10년간 라이브 방송과 국제 프로덕션을 담당: 경주 당일 중계방송, 영어 방송MC " +
      "글로벌 미디어 콘텐츠 생산.",
  },
  {
    period: "—",
    title: "국제 파트너십",
    detail:
      "프랑스 갈롭, 월드 호스 레이싱, 레이싱 앤 스포츠 오스트레일리아, 아리랑TV와의 " +
      "협업을 주도했습니다.",
  },
];

/** 학력 (경마 은어로 "혈통"에 해당) */
export const education = [
  {
    period: "2024.03 — 2026.12 (졸업예정)",
    school: "연세대학교",
    degree: "인공지능학 석사",
    detail: "대규모 언어 모델 운영(LLMOps) 및 응용 AI에 중점.",
  },
  {
    period: "2010 — 2015",
    school: "성균관대학교 (SKKU)",
    degree: "불어불문학 학사",
    detail: "프랑스어 및 문예창작 관련 과정 수료.",
  },
  {
    period: "2013.09 — 2014.01",
    school: "그르노블 알프스 대학교 (Université Grenoble Alpes)",
    degree: "교환학기, 프랑스 문학",
    detail: "교환학생; 미디어 기획 및 문예창작 활동 참여.",
  },
  {
    period: "2005 — 2009",
    school: "Oregon Episcopal School",
    degree: "고등학교",
    detail: "",
  },
  {
    period: "2003 — 2005",
    school: "Bishop's College School",
    degree: "중학교",
    detail: "",
  },
];

export const skills = [
  {
    group: "프로덕션",
    items: [
      { name: "라이브 & 방송 제작", level: 95 },
      { name: "오디오 후반 작업", level: 90 },
      { name: "프로덕션 기획 및 납품", level: 90 },
    ],
  },
  {
    group: "미디어 기술",
    items: [
      { name: "Adobe Premiere Pro / Edius", level: 90 },
      { name: "Camera Operation DJI", level: 85 },
      { name: "Photoshop / Illustrator", level: 75 },
    ],
  },
  {
    group: "언어 & 에디토리얼",
    items: [
      { name: "한국어 (모국어)", level: 100 },
      { name: "영어 (비즈니스 능통)", level: 95 },
      { name: "에디토리얼 & 언어 QA", level: 92 },
    ],
  },
  {
    group: "오퍼레이션",
    items: [
      { name: "하청업체 운영 & 조달 관리", level: 90 },
      { name: "글로벌 파트너십 관리", level: 85 },
      { name: "워크플로우 & 프로세스 설계", level: 82 },
    ],
  },
];

export const stats = [
  "국제 미디어 경력 10년 이상",
  "한/영 이중언어",
  "코리아컵 · YTN컵 · KRBC 인터내셔널",
  "France Galop · WHR · Arirang TV",
  "에디토리얼 & 언어 QA 총괄",
  "하청업체 관리 풀사이클",
];
