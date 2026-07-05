import type { Highlight } from "@/lib/content";

export default function ProjectCard({ item }: { item: Highlight }) {
  const Wrapper = item.link ? "a" : "div";
  return (
    <Wrapper
      {...(item.link ? { href: item.link, target: "_blank", rel: "noreferrer" } : {})}
      className="block rounded-2xl border border-ink/10 bg-white/60 p-6 transition-all
                 hover:-translate-y-0.5 hover:border-turf hover:shadow-md
                 dark:border-chalk/10 dark:bg-night-card dark:hover:border-amber"
    >
      <h3 className="font-display text-lg font-bold tracking-tight">
        {item.title}
        {item.link && <span className="ml-2 font-mono text-xs text-ink/40 dark:text-chalk/40">↗</span>}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-chalk/60">
        {item.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-ink/15 px-2.5 py-0.5 font-mono text-[11px] text-ink/60 dark:border-chalk/15 dark:text-chalk/60"
          >
            {t}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}

export function YouTubeEmbed({
  title,
  youtubeId,
}: {
  title: string;
  youtubeId: string;
}) {
  return (
    <figure>
      <div className="aspect-video overflow-hidden rounded-2xl border border-ink/10 dark:border-chalk/10">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <figcaption className="mt-2 font-mono text-xs text-ink/50 dark:text-chalk/50">
        ▶ {title}
      </figcaption>
    </figure>
  );
}

export function PdfLink({ title, href }: { title: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between rounded-xl border border-ink/15 px-5 py-4
                 font-mono text-sm transition-colors hover:border-turf hover:text-turf
                 dark:border-chalk/15 dark:hover:border-amber dark:hover:text-amber"
    >
      <span>📄 {title}</span>
      <span>PDF ↗</span>
    </a>
  );
}
