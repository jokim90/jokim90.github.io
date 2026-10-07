"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import * as en from "./content";
import * as ko from "./content.ko";

export type Lang = "en" | "ko";

/** 언어별 콘텐츠(lib/content.ts ↔ lib/content.ko.ts) 매핑 */
const content = { en, ko };

/** 컴포넌트에 하드코딩되어 있던 UI 라벨(칩, 버튼, 섹션 제목 등) */
export const ui = {
  en: {
    nav: { work: "WORK", about: "ABOUT", github: "GITHUB" },
    theme: {
      light: "LIGHT",
      dark: "DARK",
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
    },
    lang: { toKo: "Switch to Korean", toEn: "Switch to English" },
    hero: {
      onAir: "SPORTS · MEDIA · AI",
      viewWork: "VIEW PORTFOLIO ↓",
      github: "GITHUB ↗",
      rec: "REC",
      onSet: "ON SET — ONE OF 1,000+ LIVE INTERNATIONAL BROADCASTS",
      resume: "RESUME ↓",
      resumeFiles: [
        { label: "English", href: "/docs/Jungrun_Kim_Resume_EN.pdf" },
        { label: "한국어", href: "/docs/Jungrun_Kim_Resume_KO.pdf" },
      ],
      academic: "ACADEMIC CAREER",
      schools: [
        { label: "SKKU · B.A.", title: "Sungkyunkwan University — B.A. French Language & Literature", href: "https://www.google.com/search?q=how+competitive+must+you+be+to+go+to+skku+university&hl=ko", logo: "/images/skku-emblem.png" },
        { label: "YONSEI · M.S.", title: "Yonsei University — M.S. Artificial Intelligence (2026)", href: "https://en.wikipedia.org/wiki/Yonsei_University", logo: "/images/yonsei-emblem.png" },
        { label: "OES", title: "Oregon Episcopal School — Portland, Oregon, USA", href: "https://www.google.com/search?q=oregon+episcopal+school", logo: "/images/oes-emblem.png" },
        { label: "BCS", title: "Bishop's College School — Quebec, Canada", href: "https://www.google.com/search?q=bishop%27s+college+school", logo: "/images/bcs-emblem.svg" },
      ],
    },
    race: {
      cardLabel: (n: number) => `TODAY'S CARD — ${n} RUNNERS`,
      portfolio: "Projects",
      intro:
        "Each portfolio piece is told as Problem → Strategy → Build → Partners → Outcome → Lessons.",
      lab: "BUILD LAB — AI × SPORTS",
      labIntro:
        "Where the M.S. in AI meets eleven years of sports-media operations: working prototypes with a business case attached.",
    },
    skills: {
      formGuide: "FORM GUIDE",
      title: "Capabilities",
      intro: "No self-scored bars. Each capability is paired with the evidence behind it and the outcome it produced.",
      capability: "CAPABILITY",
      evidence: "EVIDENCE",
      outcome: "OUTCOME",
    },
    timeline: { runningLine: "RUNNING LINE", title: "Career" },
    education: { pedigree: "PEDIGREE", title: "Education" },
    footer: { offAir: "OFF AIR", github: "GITHUB", email: "EMAIL" },
    about: {
      eyebrow: "ABOUT",
      coreExpertise: "CORE EXPERTISE",
      onSet: "ON SET — LIVE INTERNATIONAL INTERVIEW, SEOUL",
      github: "GITHUB ↗",
      email: "EMAIL",
      showCapabilities: "CAPABILITIES ↓",
      hideCapabilities: "HIDE CAPABILITIES ↑",
    },
    work: {
      gate: (g: number, total: number) => `GATE ${g} / ${total}`,
      lab: "BUILD LAB",
      open: "OPEN LIVE ↗",
      proves: "WHAT THIS PORTFOLIO SHOWS",
      caseStudy: "PORTFOLIO DETAIL",
      problem: "PROBLEM",
      strategy: "STRATEGY",
      build: "BUILD",
      partners: "PARTNERS",
      outcome: "OUTCOME",
      lessons: "LESSONS",
      highlights: "SELECTED HIGHLIGHTS",
      footage: "FOOTAGE",
      gallery: "GALLERY",
      documents: "DOCUMENTS",
      press: "IN THE NEWS",
      prev: (gate: number, title: string) => `← GATE ${gate} · ${title.toUpperCase()}`,
      next: (gate: number, title: string) => `GATE ${gate} · ${title.toUpperCase()} →`,
    },
    pdf: { label: "PDF ↗" },
    press: { eyebrow: "IN THE NEWS", title: "Press", inKorean: "in Korean" },
  },
  ko: {
    nav: { work: "업무", about: "소개", github: "GITHUB" },
    theme: {
      light: "라이트",
      dark: "다크",
      toLight: "라이트 모드로 전환",
      toDark: "다크 모드로 전환",
    },
    lang: { toKo: "한국어로 전환", toEn: "영어로 전환" },
    hero: {
      onAir: "스포츠 · 미디어 · AI",
      viewWork: "포트폴리오 보기 ↓",
      github: "GITHUB ↗",
      rec: "REC",
      onSet: "촬영 현장 — 1,000회 이상의 국제 라이브 중계 중 한 장면",
      resume: "이력서 ↓",
      resumeFiles: [
        { label: "한국어", href: "/docs/Jungrun_Kim_Resume_KO.pdf" },
        { label: "English", href: "/docs/Jungrun_Kim_Resume_EN.pdf" },
      ],
      academic: "학력",
      schools: [
        { label: "성균관대 · 학사", title: "성균관대학교 — 프랑스어문학 학사", href: "https://www.google.com/search?q=how+competitive+must+you+be+to+go+to+skku+university&hl=ko", logo: "/images/skku-emblem.png" },
        { label: "연세대 · 석사", title: "연세대학교 — 인공지능 석사 (2026)", href: "https://en.wikipedia.org/wiki/Yonsei_University", logo: "/images/yonsei-emblem.png" },
        { label: "OES", title: "Oregon Episcopal School — 미국 오리건주 포틀랜드", href: "https://www.google.com/search?q=oregon+episcopal+school", logo: "/images/oes-emblem.png" },
        { label: "BCS", title: "Bishop's College School — 캐나다 퀘벡", href: "https://www.google.com/search?q=bishop%27s+college+school", logo: "/images/bcs-emblem.svg" },
      ],
    },
    race: {
      cardLabel: (n: number) => `오늘의 출마표 — ${n}개 부문`,
      portfolio: "프로젝트",
      intro:
        "각 포트폴리오는 문제 → 전략 → 실행 → 파트너 → 결과 → 교훈 순으로 서술합니다.",
      lab: "BUILD LAB — AI × SPORTS",
      labIntro:
        "AI 석사와 11년의 스포츠 미디어 운영 경험이 만나는 곳: 비즈니스 케이스가 붙은 작동하는 프로토타입.",
    },
    skills: {
      formGuide: "폼 가이드",
      title: "역량",
      intro: "자기평가 점수 대신, 각 역량을 뒷받침하는 증거와 그로 인한 결과를 함께 적었습니다.",
      capability: "역량",
      evidence: "증거",
      outcome: "결과",
    },
    timeline: { runningLine: "경력 발자취", title: "커리어" },
    education: { pedigree: "혈통", title: "학력" },
    footer: { offAir: "방송 종료", github: "GITHUB", email: "이메일" },
    about: {
      eyebrow: "소개",
      coreExpertise: "핵심 역량",
      onSet: "촬영 현장 — 서울 국제 라이브 인터뷰",
      github: "GITHUB ↗",
      email: "이메일",
      showCapabilities: "역량 보기 ↓",
      hideCapabilities: "역량 접기 ↑",
    },
    work: {
      gate: (g: number, total: number) => `게이트 ${g} / ${total}`,
      lab: "BUILD LAB",
      open: "라이브 열기 ↗",
      proves: "이 포트폴리오가 보여주는 역량",
      caseStudy: "포트폴리오 상세",
      problem: "문제",
      strategy: "전략",
      build: "실행",
      partners: "파트너",
      outcome: "결과",
      lessons: "교훈",
      highlights: "주요 하이라이트",
      footage: "영상",
      gallery: "갤러리",
      documents: "문서",
      press: "언론 보도",
      prev: (gate: number, title: string) => `← 게이트 ${gate} · ${title}`,
      next: (gate: number, title: string) => `게이트 ${gate} · ${title} →`,
    },
    pdf: { label: "PDF ↗" },
    press: { eyebrow: "언론 보도", title: "보도자료", inKorean: "국문" },
  },
} as const;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** 현재 언어의 콘텐츠 (site, sections, timeline, capabilities, stats, about) */
  t: typeof en;
  /** 현재 언어의 UI 라벨 */
  u: (typeof ui)[Lang];
};

const LanguageContext = createContext<Ctx | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "ko" || saved === "en") {
        setLangState(saved);
        document.documentElement.lang = saved;
      }
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
      document.documentElement.lang = l;
    } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang], u: ui[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
