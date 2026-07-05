import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 dark:border-chalk/10">
      <div className="mx-auto flex max-w-rail flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-mono text-xs text-ink/50 dark:text-chalk/50">
          © {new Date().getFullYear()} {site.name} — OFF AIR
        </p>
        <div className="flex gap-6 font-mono text-xs">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-turf dark:hover:text-amber transition-colors"
          >
            GITHUB
          </a>
          <a
            href={`mailto:${site.email}`}
            className="hover:text-turf dark:hover:text-amber transition-colors"
          >
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
}
