"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ProjectCard, { YouTubeEmbed, GalleryImage, PdfLink } from "@/components/ProjectCard";
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
          </div>
          <h1 className="mt-5 font-display text-4xl font-black tracking-tight sm:text-6xl">
            {section.title}
          </h1>
          <p className="mt-3 font-mono text-sm text-turf dark:text-amber">
            {section.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink/70 dark:text-chalk/70 sm:text-lg">
            {section.description}
          </p>
        </Reveal>
      </section>

      {/* 하이라이트 */}
      <section className="mx-auto max-w-rail px-4 pb-16 sm:px-6">
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
