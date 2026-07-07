"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import { useLanguage } from "@/lib/i18n";

export default function AboutContent() {
  const { t, u } = useLanguage();
  const { site, about, sections } = t;

  return (
    <>
      <section className="mx-auto max-w-rail px-4 pb-8 pt-32 sm:px-6 sm:pt-40">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-turf dark:text-amber">
            {u.about.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl">
            {about.headline[0]}
            <br />
            {about.headline[1]}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-ink/70 dark:text-chalk/70 sm:text-lg">
            <p>{site.intro}</p>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mt-12 max-w-3xl overflow-hidden rounded-2xl border border-ink/15 dark:border-chalk/15">
            <Image
              src="/images/on-set.jpg"
              alt={`${site.name} on set during a live international broadcast interview`}
              width={1600}
              height={1000}
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-night/80 to-transparent px-5 py-4">
              <p className="font-mono text-[11px] tracking-widest text-chalk/90">
                {u.about.onSet}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="mt-14 font-mono text-xs tracking-widest text-ink/50 dark:text-chalk/50">
            {u.about.coreExpertise}
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
              {u.about.github}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-ink/25 px-6 py-3 font-mono text-sm transition-colors hover:border-turf hover:text-turf dark:border-chalk/25 dark:hover:border-amber dark:hover:text-amber"
            >
              {u.about.email}
            </a>
          </div>
        </Reveal>
      </section>

      <Timeline />
      <Education />
    </>
  );
}
