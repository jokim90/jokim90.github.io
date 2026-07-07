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
      onAir: "ON AIR",
      viewWork: "VIEW WORK ↓",
      github: "GITHUB ↗",
      rec: "REC",
      onSet: "ON SET — INTERNATIONAL BROADCAST",
    },
    race: {
      cardLabel: (n: number) => `TODAY'S CARD — ${n} RUNNERS`,
      portfolio: "Portfolio",
    },
    skills: { formGuide: "FORM GUIDE", title: "Skills" },
    timeline: { runningLine: "RUNNING LINE", title: "Career" },
    education: { pedigree: "PEDIGREE", title: "Education" },
    footer: { offAir: "OFF AIR", github: "GITHUB", email: "EMAIL" },
    about: {
      eyebrow: "ABOUT",
      coreExpertise: "CORE EXPERTISE",
      onSet: "ON SET — LIVE INTERNATIONAL INTERVIEW, SEOUL",
      github: "GITHUB ↗",
      email: "EMAIL",
    },
    work: {
      gate: (g: number, total: number) => `GATE ${g} / ${total}`,
      footage: "FOOTAGE",
      gallery: "GALLERY",
      documents: "DOCUMENTS",
      prev: (gate: number, title: string) => `← GATE ${gate} · ${title.toUpperCase()}`,
      next: (gate: number, title: string) => `GATE ${gate} · ${title.toUpperCase()} →`,
    },
    pdf: { label: "PDF ↗" },
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
      onAir: "방송 중",
      viewWork: "업무 보기 ↓",
      github: "GITHUB ↗",
      rec: "REC",
      onSet: "촬영 현장 — 국제 방송",
    },
    race: {
      cardLabel: (n: number) => `오늘의 출마표 — ${n}개 부문`,
      portfolio: "포트폴리오",
    },
    skills: { formGuide: "폼 가이드", title: "스킬" },
    timeline: { runningLine: "경력 발자취", title: "커리어" },
    education: { pedigree: "혈통", title: "학력" },
    footer: { offAir: "방송 종료", github: "GITHUB", email: "이메일" },
    about: {
      eyebrow: "소개",
      coreExpertise: "핵심 역량",
      onSet: "촬영 현장 — 서울 국제 라이브 인터뷰",
      github: "GITHUB ↗",
      email: "이메일",
    },
    work: {
      gate: (g: number, total: number) => `게이트 ${g} / ${total}`,
      footage: "영상",
      gallery: "갤러리",
      documents: "문서",
      prev: (gate: number, title: string) => `← 게이트 ${gate} · ${title}`,
      next: (gate: number, title: string) => `게이트 ${gate} · ${title} →`,
    },
    pdf: { label: "PDF ↗" },
  },
} as const;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** 현재 언어의 콘텐츠 (site, sections, timeline, skills, stats, about) */
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
