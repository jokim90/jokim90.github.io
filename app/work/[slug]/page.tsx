import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ProjectCard, { YouTubeEmbed, PdfLink } from "@/components/ProjectCard";
import { sections, site } from "@/lib/content";

/** 정적 내보내기(output: "export")를 위해 6개 슬러그를 미리 생성 */
export function generateStaticParams() {
  return sections.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const section = sections.find((s) => s.slug === params.slug);
  return {
    title: section ? `${section.title} — ${site.name}` : site.name,
  };
}

export default function SectionPage({
  params,
}: {
  params: { slug: string };
}) {
  const idx = sections.findIndex((s) => s.slug === params.slug);
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
              GATE {section.gate} / {sections.length}
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
              FOOTAGE
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

      {/* 문서 (PDF) */}
      {section.pdfs && section.pdfs.length > 0 && (
        <section className="mx-auto max-w-rail px-4 pb-16 sm:px-6">
          <Reveal>
            <h2 className="mb-6 font-mono text-xs tracking-widest text-ink/50 dark:text-chalk/50">
              DOCUMENTS
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
            ← GATE {prev.gate} · {prev.title.toUpperCase()}
          </Link>
          <Link
            href={`/work/${next.slug}/`}
            className="text-right transition-colors hover:text-turf dark:hover:text-amber"
          >
            GATE {next.gate} · {next.title.toUpperCase()} →
          </Link>
        </div>
      </nav>
    </>
  );
}
