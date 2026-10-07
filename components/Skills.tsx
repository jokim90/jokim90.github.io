"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";

/**
 * 역량 섹션 — 자기평가 점수 막대 대신
 * "Capability + Evidence + Outcome" 3열 구조로 보여줍니다.
 */
export default function Skills() {
  const { t, u } = useLanguage();
  const { capabilities } = t;

  return (
    <section
      id="capabilities"
      className="scroll-mt-20 border-y border-ink/10 bg-turf-soft/40 dark:border-chalk/10 dark:bg-night-card/50"
    >
      <div className="mx-auto max-w-rail px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-turf dark:text-amber">
            {u.skills.formGuide}
          </p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-5xl">
            {u.skills.title}
          </h2>
          <p className="mt-4 max-w-4xl text-pretty text-sm leading-relaxed text-ink/60 dark:text-chalk/60 sm:text-base">
            {u.skills.intro}
          </p>
        </Reveal>

        <div className="mt-12 space-y-12">
          {capabilities.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.04}>
              <h3 className="font-mono text-xs tracking-widest text-ink/50 dark:text-chalk/50">
                {g.group.toUpperCase()}
              </h3>

              {/* 열 머리글 (md 이상) */}
              <div className="mt-4 hidden grid-cols-[1fr_1.6fr_1.1fr] gap-6 border-b border-ink/10 pb-2 font-mono text-[10px] tracking-widest text-ink/40 dark:border-chalk/10 dark:text-chalk/40 md:grid">
                <span>{u.skills.capability}</span>
                <span>{u.skills.evidence}</span>
                <span>{u.skills.outcome}</span>
              </div>

              <ul className="divide-y divide-ink/10 dark:divide-chalk/10">
                {g.items.map((c) => (
                  <li
                    key={c.name}
                    className="grid gap-2 py-4 md:grid-cols-[1fr_1.6fr_1.1fr] md:gap-6"
                  >
                    <p className="font-display text-base font-bold tracking-tight">{c.name}</p>
                    <p className="text-sm leading-relaxed text-ink/60 dark:text-chalk/60">
                      <span className="mr-2 font-mono text-[10px] tracking-widest text-ink/40 dark:text-chalk/40 md:hidden">
                        {u.skills.evidence}
                      </span>
                      {c.evidence}
                    </p>
                    <p className="text-sm font-medium leading-relaxed text-turf dark:text-amber">
                      <span className="mr-2 font-mono text-[10px] tracking-widest text-ink/40 dark:text-chalk/40 md:hidden">
                        {u.skills.outcome}
                      </span>
                      {c.outcome}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
