import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";

const money = n => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

export default function AnalysisDebrief({ level, selected, onNext, onRetry }) {
  const correctLines = level.lines.filter(l => l.answer);
  const expectedTotal = correctLines.reduce((a, l) => a + l.amount, 0);
  const userLines = level.lines.filter(l => selected.includes(l.id));
  const userTotal = userLines.reduce((a, l) => a + l.amount, 0);
  const correctSel = userLines.filter(l => l.answer);
  const wrongSel = userLines.filter(l => !l.answer);
  const missed = correctLines.filter(l => !selected.includes(l.id));
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
          <div className="flex items-baseline justify-between border-b border-[#191919] py-3">
            <span className="text-[#7a7a72]">expected</span>
            <span className="text-[#9a8f6a]">{money(expectedTotal)}</span>
          </div>
          <div className="mt-4 flex items-center gap-6 text-xs">
            <span className="flex items-center gap-2 text-[#7a8a6a]"><Check size={13} /> {correctSel.length}</span>
            <span className="flex items-center gap-2 text-[#b0523e]"><X size={13} /> {wrongSel.length}</span>
            <span className="text-[#6a6a64]">{missed.length} missed</span>
          </div>
        </div>

        {missed.length > 0 && (
          <div className="mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#5d5b56]">missed</p>
            <div className="mt-3 space-y-2">
              {missed.map(l => (
                <div key={l.id} className="border border-[#191919] bg-[#0b0b0c] p-4 font-mono text-xs lowercase text-[#8c8a84]">
                  <span className="text-[#c4c1ba]">{l.name}</span> · {l.location} · {money(l.amount)}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 flex items-center justify-between">
          <button onClick={onRetry} aria-label="Review filing" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3a3a3e] text-[#d8d5cd] transition hover:border-[#9a8f6a] hover:text-[#9a8f6a]">
            <ArrowLeft size={20} />
          </button>
          <button onClick={onNext} aria-label="Continue" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#9a8f6a] text-[#9a8f6a] transition hover:bg-[#9a8f6a] hover:text-[#0a0a0b]">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </main>
  );
}