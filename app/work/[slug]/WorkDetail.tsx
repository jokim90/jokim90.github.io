"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ProjectCard, { YouTubeEmbed, GalleryImage, PdfLink } from "@/components/ProjectCard";
import { PressRow } from "@/components/PressList";
import { useLanguage } from "@/lib/i18n";

export default function WorkDetail({ slug }: { slug: string }) {
  const { t, u } = useLanguage();
  const { sections } = t;

  const idx = sections.findIndex((s) => s.slug === slug);
  if (idx === -1) notFound();

  const section = sections[idx];
  const prev = sections[(idx - 1 + sections.length) % sections.length];
  const next = sections[(idx + 1) % sections.length];

  return (
    <>
      {/* 섹션 히어로 */}
      <section className="mx-auto max-w-rail px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
        <Reveal>
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 font-mono text-base font-bold dark:border-chalk/15"
              style={{ backgroundColor: section.silkBg, color: section.silkFg }}
            >
              {section.gate}
            </span>
            <p className="font-mono text-xs tracking-widest text-ink/50 dark:text-chalk/50">
              {u.work.gate(section.gate, sections.length)}
            </p>
            {section.kind === "lab" && (
              <span className="rounded-full bg-turf px-2.5 py-1 font-mono text-[10px] tracking-widest text-chalk dark:bg-amber dark:text-night">
                {u.work.lab}
              </span>
            )}
          </div>
          <h1 className="mt-5 font-display text-4xl font-black tracking-tight sm:text-6xl">
            {section.title}
          </h1>
          <p className="mt-3 font-mono text-sm text-turf dark:text-amber">
            {section.tagline}
          </p>
          {section.kind === "lab" && section.status && (
            <p className="mt-2 font-mono text-xs tracking-wider text-ink/50 dark:text-chalk/50">
              {section.status}
            </p>
          )}
          {section.url && (
            <a
              href={section.url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 font-mono text-sm font-bold text-night animate-liveGlow transition-transform hover:scale-[1.06] hover:animate-none"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-crimson animate-pulseDot" aria-hidden />
              <span className="animate-blinkText">{u.work.open}</span>
            </a>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-4xl text-pretty text-base leading-relaxed text-ink/70 dark:text-chalk/70 sm:text-lg">
            {section.description}
          </p>
        </Reveal>

        {section.capabilities && section.capabilities.length > 0 && (
          <Reveal delay={0.14}>
            <p className="mt-8 font-mono text-[10px] tracking-widest text-ink/40 dark:text-chalk/40">
              {u.work.proves}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {section.capabilities.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-turf/40 px-3 py-1 font-mono text-[11px] tracking-wide text-turf dark:border-amber/40 dark:text-amber"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </section>

      {/* 케이스 스터디: Problem → Strategy → Build → Partners → Outcome → Lessons */}
      {section.caseStudy && (
        <section className="mx-auto max-w-rail px-4 pb-16 sm:px-6">
          <Reveal>
            <h2 className="mb-6 font-mono text-xs tracking-widest text-ink/50 dark:text-chalk/50">
              {u.work.caseStudy}
            </h2>
          </Reveal>
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 dark:border-chalk/10 dark:bg-chalk/10 md:grid-cols-2">
            {(
              [
                ["problem", u.work.problem],
                ["strategy", u.work.strategy],
                ["build", u.work.build],
                ["partners", u.work.partners],
                ["outcome", u.work.outcome],
                ["lessons", u.work.lessons],
              ] as const
            ).map(([key, label], i) => {
              const emphasized = key === "outcome";
              return (
                <Reveal key={key} delay={i * 0.05}>
                  <li
                    className={`h-full p-6 ${
                      emphasized
                        ? "bg-turf-soft/60 dark:bg-night-card"
                        : "bg-chalk dark:bg-night"
                    }`}
                  >
                    <p className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-ink/40 dark:text-chalk/40">
                      <span className="text-turf dark:text-amber">0{i + 1}</span>
                      <span>{label}</span>
                    </p>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        emphasized
                          ? "font-medium text-ink dark:text-chalk"
                          : "text-ink/70 dark:text-chalk/70"
                      }`}
                    >
                      {section.caseStudy![key]}
                    </p>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </section>
      )}

      {/* 하이라이트 */}
      <section className="mx-auto max-w-rail px-4 pb-16 sm:px-6">
        <Reveal>
          <h2 className="mb-6 font-mono text-xs tracking-widest text-ink/50 dark:text-chalk/50">
            {u.work.highlights}
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {section.highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.06}>
              <ProjectCard item={h} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 영상 (YouTube) */}
      {section.videos && section.videos.length > 0 && (
        <section className="mx-auto max-w-rail px-4 pb-16 sm:px-6">
          <Reveal>
            <h2 className="mb-6 font-mono text-xs tracking-widest text-ink/50 dark:text-chalk/50">
              {u.work.footage}
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {section.videos.map((v, i) => (
              <Reveal key={v.youtubeId} delay={i * 0.06}>
                <YouTubeEmbed title={v.title} youtubeId={v.youtubeId} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* 사진 갤러리 */}
      {section.images && section.images.length > 0 && (
        <section className="mx-auto max-w-rail px-4 pb-16 sm:px-6">
          <Reveal>
            <h2 className="mb-6 font-mono text-xs tracking-widest text-ink/50 dark:text-chalk/50">
              {u.work.gallery}
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {section.images.map((img, i) => (
              <Reveal key={img.src} delay={i * 0.06}>
                <GalleryImage title={img.title} src={img.src} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* 문서 (PDF) */}
      {section.pdfs && section.pdfs.length > 0 && (
        <section className="mx-auto max-w-rail px-4 pb-16 sm:px-6">
          <Reveal>
            <h2 className="mb-6 font-mono text-xs tracking-widest text-ink/50 dark:text-chalk/50">
              {u.work.documents}
            </h2>
          </Reveal>
          <div className="grid gap-3 sm:max-w-lg">
            {section.pdfs.map((p, i) => (
              <Reveal key={p.href} delay={i * 0.06}>
                <PdfLink title={p.title} href={p.href} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* 언론 보도 */}
      {section.press && section.press.length > 0 && (
        <section className="mx-auto max-w-rail px-4 pb-16 sm:px-6">
          <Reveal>
            <h2 className="mb-2 font-mono text-xs tracking-widest text-ink/50 dark:text-chalk/50">
              {u.work.press}
            </h2>
          </Reveal>
          <div className="max-w-3xl">
            {section.press.map((p, i) => (
              <Reveal key={p.href} delay={i * 0.06}>
                <PressRow item={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* 이전 / 다음 게이트 */}
      <nav className="mx-auto max-w-rail px-4 pb-24 sm:px-6">
        <div className="flex items-center justify-between border-t border-ink/10 pt-8 font-mono text-sm dark:border-chalk/10">
          <Link
            href={`/work/${prev.slug}/`}
            className="transition-colors hover:text-turf dark:hover:text-amber"
          >
            {u.work.prev(prev.gate, prev.title)}
          </Link>
          <Link
            href={`/work/${next.slug}/`}
            className="text-right transition-colors hover:text-turf dark:hover:text-amber"
          >
            {u.work.next(next.gate, next.title)}
          </Link>
        </div>
      </nav>
    </>
  );
}
