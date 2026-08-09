import { ArrowRight, Check, X } from "lucide-react";

const money = n => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

export default function AnalysisDebrief({ level, selected, onNext, onRetry }) {
  const correctLines = level.lines.filter(l => l.answer);
  const expectedTotal = correctLines.reduce((a, l) => a + l.amount, 0);
  const userLines = level.lines.filter(l => selected.includes(l.id));
  const userTotal = userLines.reduce((a, l) => a + l.amount, 0);
  const correctSel = userLines.filter(l => l.answer);
  const wrongSel = userLines.filter(l => !l.answer);
  const exact = userTotal === expectedTotal;
  const label = level.analyzeTask?.label || "total";

  return (
    <main className="min-h-screen bg-[#0a0a0b] px-5 py-16 text-[#d8d5cd] sm:px-8">
      <div className="mx-auto max-w-2xl">
        <header className="flex items-baseline gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[.25em] text-[#9a8f6a]">{level.number}</span>
          <h1 className="font-mono text-2xl lowercase tracking-[.02em] text-[#d8d5cd]">{exact ? "dead on." : "keep refining."}</h1>
        </header>

        <div className="mt-8 font-mono text-[13px] lowercase">
          <div className="flex items-baseline justify-between border-b border-[#191919] py-3">
            <span className="text-[#7a7a72]">{label}</span>
            <span className="text-[#d8d5cd]">{money(userTotal)}</span>
          </div>
          {level.analyzeTask?.limit && (
            <div className="flex items-baseline justify-between border-b border-[#191919] py-3">
              <span className="text-[#7a7a72]">limit</span>
              <span className={userTotal > level.analyzeTask.limit ? "text-[#b0523e]" : "text-[#7a8a6a]"}>{money(level.analyzeTask.limit)}</span>
            </div>
          )}
          {level.id !== "l03" && level.id !== "l07" && level.id !== "l09" && (
            <div className="flex items-baseline justify-between border-b border-[#191919] py-3">
              <span className="text-[#7a7a72]">expected</span>
              <span className="text-[#9a8f6a]">{money(expectedTotal)}</span>
            </div>
          )}
          <div className="mt-4 flex items-center gap-6 text-xs">
            <span className="flex items-center gap-2 text-[#7a8a6a]"><Check size={13} /> {correctSel.length}</span>
            <span className="flex items-center gap-2 text-[#b0523e]"><X size={13} /> {wrongSel.length}</span>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-end">
          <button onClick={onNext} aria-label="Return to desktop" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3a3a3e] text-[#d8d5cd] transition hover:border-[#9a8f6a] hover:text-[#9a8f6a]">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </main>
  );
}