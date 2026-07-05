import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import { site, sections } from "@/lib/content";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-rail px-4 pb-8 pt-32 sm:px-6 sm:pt-40">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-turf dark:text-amber">
            ABOUT
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl">
            From concept
            <br />
            through distribution.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-ink/70 dark:text-chalk/70 sm:text-lg">
            <p>{site.intro}</p>
            <p>
              For over a decade at the Korea Racing Authority, I&apos;ve produced
              international broadcasts end to end — live production, audio and
              video post-production, and broadcast delivery — while owning
              editorial quality and language QA across everything we published
              in Korean and English.
            </p>
            <p>
              Beyond the studio, I&apos;ve led global partnerships with France
              Galop, World Horse Racing, Racing &amp; Sports Australia, and
              Arirang TV, and managed the full production procurement cycle:
              scope of work, vendor selection, budgets, contracts, and delivery.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="mt-14 font-mono text-xs tracking-widest text-ink/50 dark:text-chalk/50">
            CORE EXPERTISE
          </h2>
          <ul className="mt-4 grid max-w-2xl gap-2 sm:grid-cols-2">
            {sections.map((s) => (
              <li
                key={s.slug}
                className="flex items-center gap-3 rounded-xl border border-ink/10 px-4 py-3 text-sm dark:border-chalk/10"
              >
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-ink/15 font-mono text-xs font-bold dark:border-chalk/15"
                  style={{ backgroundColor: s.silkBg, color: s.silkFg }}
                >
                  {s.gate}
                </span>
                {s.title}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-turf px-6 py-3 font-mono text-sm text-chalk transition-transform hover:scale-[1.03] dark:bg-amber dark:text-night"
            >
              GITHUB ↗
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-ink/25 px-6 py-3 font-mono text-sm transition-colors hover:border-turf hover:text-turf dark:border-chalk/25 dark:hover:border-amber dark:hover:text-amber"
            >
              EMAIL
            </a>
          </div>
        </Reveal>
      </section>

      <Timeline />
    </>
  );
}
