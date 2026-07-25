import { ArrowRight, RotateCcw, CheckCircle2, XCircle } from "lucide-react";

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
  const label = level.analyzeTask?.label || "Total";

  return (
    <main className="min-h-screen bg-[#0a0a0b] px-5 py-12 text-[#d8d5cd]">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[.25em] text-[#9a8f6a]">FILE {level.number} · RESEARCH DEBRIEF</p>
        <h1 className="mt-4 font-display text-5xl tracking-[-.03em] sm:text-6xl">{exact ? "Dead on." : "Close — keep refining."}</h1>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="border border-[#262629] bg-[#131316] p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#75736d]">{label} · your answer</p>
            <p className="mt-2 font-display text-3xl text-[#9a8f6a]">{money(userTotal)}</p>
            <p className="mt-1 text-sm text-[#8c8a84]">{userLines.length} rows selected</p>
          </div>
          <div className="border border-[#262629] bg-[#131316] p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#75736d]">{label} · expected</p>
            <p className="mt-2 font-display text-3xl text-[#d8d5cd]">{money(expectedTotal)}</p>
            <p className="mt-1 text-sm text-[#8c8a84]">{correctLines.length} matching rows</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-6 font-mono text-sm">
          <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-[#7a8a6a]" /> {correctSel.length} correct</span>
          <span className="flex items-center gap-2"><XCircle size={15} className="text-[#b0523e]" /> {wrongSel.length} wrong</span>
          <span className="text-[#75736d]">{missed.length} missed</span>
        </div>
        {missed.length > 0 && (
          <div className="mt-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#75736d]">Rows you missed</p>
            <div className="mt-3 space-y-2">
              {missed.map(l => (
                <div key={l.id} className="border border-[#262629] bg-[#131316] p-3 text-sm text-[#c4c1ba]">
                  <b className="text-[#d8d5cd]">{l.name}</b> · {l.location} · {money(l.amount)}
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-10 flex flex-wrap gap-4">
          <button onClick={onNext} className="flex items-center gap-3 bg-[#9a8f6a] px-6 py-4 font-bold text-[#0a0a0b]">
            Continue <ArrowRight size={17} />
          </button>
          <button onClick={onRetry} className="flex items-center gap-3 border border-[#3a3a3e] px-6 py-4 text-[#d8d5cd]">
            <RotateCcw size={16} /> Review filing
          </button>
        </div>
      </div>
    </main>
  );
}