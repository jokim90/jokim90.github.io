"use client";

import { useLanguage } from "@/lib/i18n";

/** 배당판(tote board) 느낌의 스탯 티커. reduced-motion 시 정지 상태로 표시됩니다. */
export default function Ticker() {
  const { t } = useLanguage();
  const row = [...t.stats, ...t.stats]; // 무한 루프용 복제

  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ink py-3 text-chalk dark:border-chalk/10 dark:bg-night-card">
      <div className="flex w-max animate-ticker gap-10 whitespace-nowrap px-4 font-mono text-xs tracking-widest">
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-10">
            <span>{s.toUpperCase()}</span>
            <span className="text-amber" aria-hidden>
              ●
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
