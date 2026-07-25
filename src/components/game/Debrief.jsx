import { ArrowRight, RotateCcw, CheckCircle2, XCircle } from "lucide-react";

export default function Debrief({ level, selected, onNext, onRetry }) {
  const correct = level.lines.filter(x => x.flag && selected.includes(x.id));
  return (
    <main className="min-h-screen bg-[#0a0a0b] px-5 py-12 text-[#d8d5cd]">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[.25em] text-[#9a8f6a]">FILE {level.number} · DEBRIEF</p>
        <h1 className="mt-4 font-display text-5xl tracking-[-.03em] sm:text-6xl">{correct.length ? "Lead established." : "Keep digging."}</h1>
        <p className="mt-5 text-base text-[#9c9a93]">
          {correct.length ? `You found ${correct.length} of ${level.lines.filter(x => x.flag).length} flagged items. +${correct.length * 100} pts.` : "None of your flags matched this case."}
        </p>
        <div className="mt-10 space-y-3">
          {selected.map(id => {
            const line = level.lines.find(x => x.id === id);
            return (
              <div key={id} className="border border-[#262629] bg-[#131316] p-5">
                <div className="flex gap-3">
                  {line.flag ? <CheckCircle2 className="shrink-0 text-[#7a8a6a]" /> : <XCircle className="shrink-0 text-[#b0523e]" />}
                  <div>
                    <p className="font-bold text-[#d8d5cd]">{line.name} · ${line.amount.toLocaleString()}</p>
                    <p className="mt-2 text-sm leading-6 text-[#8c8a84]">{line.flag ? line.why : "Plausible on its face. Not the target of this case."}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          {correct.length > 0 && (
            <button onClick={onNext} className="flex items-center gap-3 bg-[#9a8f6a] px-6 py-4 font-bold text-[#0a0a0b]">
              Close file & continue <ArrowRight size={17} />
            </button>
          )}
          <button onClick={onRetry} className="flex items-center gap-3 border border-[#3a3a3e] px-6 py-4 text-[#d8d5cd]">
            <RotateCcw size={16} /> Review filing
          </button>
        </div>
      </div>
    </main>
  );
}