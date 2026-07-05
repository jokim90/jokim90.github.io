import Link from "next/link";
import Reveal from "@/components/Reveal";
import { sections } from "@/lib/content";

/**
 * 홈의 포트폴리오 그리드.
 * 각 섹션을 출마표(race card)의 게이트처럼 배치하고,
 * 게이트 번호 칩은 실제 새들클로스 표준색을 따릅니다.
 */
export default function RaceCard() {
  return (
    <section id="work" className="mx-auto max-w-rail scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <p className="font-mono text-xs tracking-widest text-turf dark:text-amber">
          TODAY&apos;S CARD — {sections.length} RUNNERS
        </p>
        <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-5xl">
          Portfolio
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.06}>
            <Link
              href={`/work/${s.slug}/`}
              className="group block h-full rounded-2xl border border-ink/10 bg-white/60 p-6 transition-all
                         hover:-translate-y-1 hover:border-turf hover:shadow-lg
                         dark:border-chalk/10 dark:bg-night-card dark:hover:border-amber"
            >
              <div className="flex items-center justify-between">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-ink/15 font-mono text-sm font-bold dark:border-chalk/15"
                  style={{ backgroundColor: s.silkBg, color: s.silkFg }}
                >
                  {s.gate}
                </span>
                <span className="font-mono text-xs text-ink/40 transition-transform group-hover:translate-x-1 dark:text-chalk/40">
                  →
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-chalk/60">
                {s.tagline}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
