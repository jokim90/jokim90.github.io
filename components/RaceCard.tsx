"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Section } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

/**
 * 홈의 포트폴리오 그리드.
 * 각 섹션을 출마표(race card)의 게이트처럼 배치하고,
 * 게이트 번호 칩은 실제 새들클로스 표준색을 따릅니다.
 * Business Case(4) 와 Build Lab(2) 을 구분해 보여줍니다.
 */
function Card({ s, labLabel, openLabel }: { s: Section; labLabel: string; openLabel: string }) {
  const isLab = s.kind === "lab";
  return (
    <Link
      href={`/work/${s.slug}/`}
      className={`group flex h-full flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg
        ${
          isLab
            ? "border-turf/40 bg-turf-soft/40 hover:border-turf dark:border-amber/40 dark:bg-night-card dark:hover:border-amber"
            : "border-ink/10 bg-white/60 hover:border-turf dark:border-chalk/10 dark:bg-night-card dark:hover:border-amber"
        }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-md border border-ink/15 font-mono text-sm font-bold dark:border-chalk/15"
            style={{ backgroundColor: s.silkBg, color: s.silkFg }}
          >
            {s.gate}
          </span>
          {isLab && (
            <span className="rounded-full bg-turf px-2.5 py-1 font-mono text-[10px] tracking-widest text-chalk dark:bg-amber dark:text-night">
              {labLabel}
            </span>
          )}
        </div>
        <span className="font-mono text-xs text-ink/40 transition-transform group-hover:translate-x-1 dark:text-chalk/40">
          →
        </span>
      </div>
      <h3 className="mt-5 font-display text-xl font-bold tracking-tight">{s.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-chalk/60">{s.tagline}</p>
      {isLab && s.status && (
        <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] tracking-wider text-turf dark:text-amber">
          <span>{s.status}</span>
          {s.url && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber px-2.5 py-0.5 font-bold text-night animate-liveGlow">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-crimson animate-pulseDot" aria-hidden />
              <span className="animate-blinkText">{openLabel}</span>
            </span>
          )}
        </p>
      )}
      {s.capabilities && s.capabilities.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {s.capabilities.map((c) => (
            <span
              key={c}
              className="rounded-full border border-ink/15 px-2 py-0.5 font-mono text-[10px] tracking-wide text-ink/60 dark:border-chalk/15 dark:text-chalk/60"
            >
              {c}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}

export default function RaceCard() {
  const { t, u } = useLanguage();
  const { sections } = t;
  const cases = sections.filter((s) => s.kind !== "lab");
  const labs = sections.filter((s) => s.kind === "lab");

  return (
    <section id="work" className="mx-auto max-w-rail scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <p className="font-mono text-xs tracking-widest text-turf dark:text-amber">
          {u.race.cardLabel(sections.length)}
        </p>
        <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-5xl">
          {u.race.portfolio}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ink/60 dark:text-chalk/60 sm:text-base">
          {u.race.intro}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {cases.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.06}>
            <Card s={s} labLabel={u.work.lab} openLabel={u.work.open} />
          </Reveal>
        ))}
      </div>

      {labs.length > 0 && (
        <div id="lab" className="mt-16 scroll-mt-20">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-turf dark:text-amber">{u.race.lab}</p>
            <p className="mt-3 max-w-4xl text-pretty text-sm leading-relaxed text-ink/60 dark:text-chalk/60 sm:text-base">
              {u.race.labIntro}
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {labs.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Card s={s} labLabel={u.work.lab} openLabel={u.work.open} />
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
