"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";

function Bar({ level }: { level: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/10 dark:bg-chalk/10">
      <motion.div
        className="h-full rounded-full bg-turf dark:bg-amber"
        initial={reduce ? { width: `${level}%` } : { width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
    </div>
  );
}

export default function Skills() {
  const { t, u } = useLanguage();
  const { skills } = t;

  return (
    <section className="border-y border-ink/10 bg-turf-soft/40 dark:border-chalk/10 dark:bg-night-card/50">
      <div className="mx-auto max-w-rail px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-turf dark:text-amber">
            {u.skills.formGuide}
          </p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-5xl">
            {u.skills.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.05}>
              <h3 className="font-mono text-xs tracking-widest text-ink/50 dark:text-chalk/50">
                {g.group.toUpperCase()}
              </h3>
              <ul className="mt-4 space-y-4">
                {g.items.map((s) => (
                  <li key={s.name}>
                    <div className="mb-1.5 flex items-baseline justify-between">
                      <span className="text-sm font-medium">{s.name}</span>
                      <span className="font-mono text-xs text-ink/40 dark:text-chalk/40">
                        {s.level}
                      </span>
                    </div>
                    <Bar level={s.level} />
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
