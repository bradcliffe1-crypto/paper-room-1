import { ArrowRight, RotateCcw, CheckCircle2, XCircle } from "lucide-react";

const money = n => new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n);

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
    <main className="min-h-screen bg-[#172529] px-5 py-12 text-[#f4f0e6]">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[.25em] text-[#d39b62]">Case {level.number} · opposition research</p>
        <h1 className="mt-4 font-display text-5xl sm:text-6xl">{exact ? "Dead on." : "Close — keep refining."}</h1>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="border border-white/15 bg-white/5 p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#b7c4bf]">{label} · your answer</p>
            <p className="mt-2 font-display text-3xl text-[#d39b62]">{money(userTotal)}</p>
            <p className="mt-1 text-sm text-[#b7c4bf]">{userLines.length} rows selected</p>
          </div>
          <div className="border border-white/15 bg-white/5 p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#b7c4bf]">{label} · expected</p>
            <p className="mt-2 font-display text-3xl">{money(expectedTotal)}</p>
            <p className="mt-1 text-sm text-[#b7c4bf]">{correctLines.length} matching rows in filing</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-6 font-mono text-sm">
          <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#72b69d]"/> {correctSel.length} correct</span>
          <span className="flex items-center gap-2"><XCircle size={16} className="text-[#d98278]"/> {wrongSel.length} wrong</span>
          <span className="flex items-center gap-2 text-[#b7c4bf]">{missed.length} missed</span>
        </div>

        {missed.length > 0 && (
          <div className="mt-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#b7c4bf]">Rows you missed</p>
            <div className="mt-3 space-y-2">
              {missed.map(l => (
                <div key={l.id} className="border border-white/10 bg-white/5 p-3 text-sm">
                  <b>{l.name}</b> · {l.location} · {money(l.amount)}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-4">
          <button onClick={onNext} className="flex items-center gap-3 bg-[#d39b62] px-6 py-4 font-bold text-[#172529]">
            Continue <ArrowRight size={18}/>
          </button>
          <button onClick={onRetry} className="flex items-center gap-3 border border-white/30 px-6 py-4">
            <RotateCcw size={17}/> Review filing
          </button>
        </div>
      </div>
    </main>
  );
}