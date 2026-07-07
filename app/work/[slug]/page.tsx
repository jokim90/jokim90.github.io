import type { Metadata } from "next";
import { sections, site } from "@/lib/content";
import WorkDetail from "./WorkDetail";

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
  return <WorkDetail slug={params.slug} />;
}
