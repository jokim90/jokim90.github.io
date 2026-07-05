"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full border border-ink/20 dark:border-chalk/20 px-3 py-1.5 font-mono text-xs
                 hover:border-turf hover:text-turf dark:hover:text-amber dark:hover:border-amber transition-colors"
    >
      {dark ? "LIGHT" : "DARK"}
    </button>
  );
}

export default function Navbar() {
  return (
    <header className="glass fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-14 max-w-rail items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-sm font-800 tracking-tight"
        >
          <span
            className="inline-block h-2 w-2 rounded-full bg-crimson animate-pulseDot"
            aria-hidden
          />
          <span className="font-bold">{site.name.toUpperCase()}</span>
          <span className="hidden font-mono text-xs text-ink/50 dark:text-chalk/50 sm:inline">
            / {site.handle}
          </span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/#work"
            className="font-mono text-xs hover:text-turf dark:hover:text-amber transition-colors"
          >
            WORK
          </Link>
          <Link
            href="/about/"
            className="font-mono text-xs hover:text-turf dark:hover:text-amber transition-colors"
          >
            ABOUT
          </Link>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="hidden font-mono text-xs hover:text-turf dark:hover:text-amber transition-colors sm:inline"
          >
            GITHUB
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
