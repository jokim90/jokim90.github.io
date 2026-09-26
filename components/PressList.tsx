"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import type { PressItem } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

/** 언론 보도 한 건 — 네이버 뉴스 검색 결과 스타일 (매체·날짜 / 제목 / 요약 / 우측 썸네일) */
export type PressEntry = PressItem & {
  gate?: number;
  silkBg?: string;
  silkFg?: string;
  sectionTitle?: string;
};

function Thumb({ src, alt, outlet }: { src?: string; alt: string; outlet: string }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div
        className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-lg border border-ink/10 bg-turf-soft/60 font-display text-lg font-black text-turf dark:border-chalk/10 dark:bg-night dark:text-amber sm:h-[104px] sm:w-[104px]"
        aria-hidden
      >
        {outlet.slice(0, 1)}
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="h-[88px] w-[88px] shrink-0 rounded-lg border border-ink/10 object-cover dark:border-chalk/10 sm:h-[104px] sm:w-[104px]"
    />
  );
}

export function PressRow({ item, showGate = false }: { item: PressEntry; showGate?: boolean }) {
  const { u } = useLanguage();
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group flex gap-4 border-b border-ink/10 py-5 transition-colors last:border-b-0 dark:border-chalk/10 sm:gap-6"
    >
      <div className="min-w-0 flex-1">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] tracking-wider text-ink/50 dark:text-chalk/50">
          {showGate && item.gate && (
            <span
              className="flex h-5 w-5 items-center justify-center rounded border border-ink/15 text-[10px] font-bold dark:border-chalk/15"
              style={{ backgroundColor: item.silkBg, color: item.silkFg }}
              title={item.sectionTitle}
            >
              {item.gate}
            </span>
          )}
          <span className="font-medium text-ink/70 dark:text-chalk/70">{item.outlet}</span>
          <span aria-hidden>·</span>
          <span>{item.date}</span>
          {item.lang === "ko" && (
            <>
              <span aria-hidden>·</span>
              <span>{u.press.inKorean}</span>
            </>
          )}
        </p>
        <h3 className="mt-1.5 font-display text-base font-bold leading-snug tracking-tight group-hover:text-turf dark:group-hover:text-amber sm:text-lg">
          {item.title}
          <span className="ml-1.5 font-mono text-xs text-ink/40 dark:text-chalk/40">↗</span>
        </h3>
        {item.excerpt && (
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink/60 dark:text-chalk/60">
            {item.excerpt}
          </p>
        )}
      </div>
      <Thumb src={item.image} alt={item.title} outlet={item.outlet} />
    </a>
  );
}

/** 홈 페이지용: 6개 섹션의 press를 모아 최신순으로 */
export default function Press({ limit = 8 }: { limit?: number }) {
  const { t, u } = useLanguage();
  const items: PressEntry[] = t.sections
    .flatMap((s) =>
      (s.press ?? []).map((p) => ({
        ...p,
        gate: s.gate,
        silkBg: s.silkBg,
        silkFg: s.silkFg,
        sectionTitle: s.title,
      }))
    )
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    .slice(0, limit);

  if (items.length === 0) return null;

  return (
    <section id="press" className="mx-auto max-w-rail scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <p className="font-mono text-xs tracking-widest text-turf dark:text-amber">
          {u.press.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-5xl">
          {u.press.title}
        </h2>
      </Reveal>
      <div className="mt-10 max-w-3xl">
        {items.map((item, i) => (
          <Reveal key={item.href} delay={i * 0.05}>
            <PressRow item={item} showGate />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
