"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";

export default function Hero() {
  const reduce = useReducedMotion();
  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.21, 0.65, 0.36, 1] as const },
        };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* 시그니처: 사진판독선 — 헤드라인이 결승선을 통과하는 구도 */}
      <div
        className="finish-line absolute bottom-0 right-[14%] top-0 hidden w-[3px] text-ink/15 dark:text-chalk/15 md:block"
        aria-hidden
      />

      <div className="mx-auto max-w-rail px-4 sm:px-6">
        <motion.p
          {...anim(0)}
          className="mb-6 flex items-center gap-2 font-mono text-xs tracking-widest text-crimson"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-crimson animate-pulseDot" />
          ON AIR — {site.location.toUpperCase()}
        </motion.p>

        <motion.h1
          {...anim(0.12)}
          className="max-w-4xl font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Live from Seoul.
          <br />
          <span className="text-turf dark:text-amber">Produced for the world.</span>
        </motion.h1>

        <motion.p
          {...anim(0.2)}
          className="mt-6 font-mono text-xs tracking-widest text-ink/60 dark:text-chalk/60 sm:text-sm"
        >
          {site.role.toUpperCase()}
        </motion.p>

        <motion.p
          {...anim(0.28)}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 dark:text-chalk/70 sm:text-lg"
        >
          {site.intro}
        </motion.p>

        <motion.div {...anim(0.38)} className="mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-full bg-turf px-6 py-3 font-mono text-sm text-chalk transition-transform hover:scale-[1.03] dark:bg-amber dark:text-night"
          >
            VIEW WORK ↓
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink/25 px-6 py-3 font-mono text-sm transition-colors hover:border-turf hover:text-turf dark:border-chalk/25 dark:hover:border-amber dark:hover:text-amber"
          >
            GITHUB ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
