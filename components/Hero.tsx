"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t, u } = useLanguage();
  const { site } = t;
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

      <div className="mx-auto grid max-w-rail gap-12 px-4 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-8">
        <div>
          <motion.p
            {...anim(0)}
            className="mb-6 flex items-center gap-2 font-mono text-xs tracking-widest text-crimson"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-crimson animate-pulseDot" />
            {u.hero.onAir} — {site.location.toUpperCase()}
          </motion.p>

          <motion.h1
            {...anim(0.12)}
            className="max-w-4xl font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {site.heroHeadline[0]}
            <br />
            <span className="text-turf dark:text-amber">{site.heroHeadline[1]}</span>
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
              {u.hero.viewWork}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink/25 px-6 py-3 font-mono text-sm transition-colors hover:border-turf hover:text-turf dark:border-chalk/25 dark:hover:border-amber dark:hover:text-amber"
            >
              {u.hero.github}
            </a>
          </motion.div>
        </div>

        <motion.div {...anim(0.2)} className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative overflow-hidden rounded-2xl border border-ink/15 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] dark:border-chalk/15">
            <Image
              src="/images/on-set.jpg"
              alt={`${site.name} on set, producing a live international broadcast`}
              width={900}
              height={1125}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
            {/* 방송 모니터 느낌의 오버레이 */}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-night/70 px-3 py-1.5 backdrop-blur-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-crimson animate-pulseDot" />
              <span className="font-mono text-[10px] tracking-widest text-chalk">{u.hero.rec}</span>
            </div>
          </div>
          <p className="mt-3 text-center font-mono text-[11px] tracking-widest text-ink/45 dark:text-chalk/45">
            {u.hero.onSet}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
