"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";

export default function Timeline() {
  const { t, u } = useLanguage();
  const { timeline } = t;

  return (
    <section className="mx-auto max-w-rail px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <p className="font-mono text-xs tracking-widest text-turf dark:text-amber">
          {u.timeline.runningLine}
        </p>
        <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-5xl">
          {u.timeline.title}
        </h2>
      </Reveal>

      <ol className="mt-12 border-l-2 border-ink/10 dark:border-chalk/10">
        {timeline.map((item, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <li className="relative pb-12 pl-8 last:pb-0">
              <span
                className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-turf dark:bg-amber"
                aria-hidden
              />
              <p className="font-mono text-xs tracking-widest text-ink/50 dark:text-chalk/50">
                {item.period}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/60 dark:text-chalk/60">
                {item.detail}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
