import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";

export default function Debrief({ level, selected, onNext, onRetry }) {
  const correct = level.lines.filter(x => x.flag && selected.includes(x.id));
  const total = level.lines.filter(x => x.flag).length;
  const ok = correct.length > 0;

  return (
    <main className="min-h-screen bg-[#0a0a0b] px-5 py-16 text-[#d8d5cd] sm:px-8">
      <div className="mx-auto max-w-2xl">
        <header className="flex items-baseline gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[.25em] text-[#9a8f6a]">{level.number}</span>
          <h1 className="font-mono text-2xl lowercase tracking-[.02em] text-[#d8d5cd]">{ok ? "lead established." : "keep digging."}</h1>
        </header>
        <p className="mt-5 font-mono text-[13px] lowercase text-[#7a7a72]">
          {ok ? `${correct.length} of ${total}. +${correct.length * 100}.` : "no flags matched."}
        </p>

        <div className="mt-10 space-y-2">
          {selected.map(id => {
            const line = level.lines.find(x => x.id === id);
            const hit = line.flag;
            return (
              <div key={id} className="border border-[#191919] bg-[#0b0b0c] p-5">
                <div className="flex items-center gap-3">
                  {hit ? <Check size={13} className="shrink-0 text-[#7a8a6a]" /> : <X size={13} className="shrink-0 text-[#b0523e]" />}
                  <span className="font-mono text-[13px] text-[#c4c1ba]">{line.name}</span>
                  <span className="ml-auto font-mono text-xs text-[#6a6a64]">{line.amount.toLocaleString()}</span>
                </div>
                <p className="mt-3 pl-6 font-mono text-xs lowercase leading-6 text-[#6a6a64]">
                  {hit ? line.why : "plausible on its face. not the target of this case."}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <button onClick={onRetry} aria-label="Review filing" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3a3a3e] text-[#d8d5cd] transition hover:border-[#9a8f6a] hover:text-[#9a8f6a]">
            <ArrowLeft size={20} />
          </button>
          {ok && (
            <button onClick={onNext} aria-label="Continue" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#9a8f6a] text-[#9a8f6a] transition hover:bg-[#9a8f6a] hover:text-[#0a0a0b]">
              <ArrowRight size={20} />
            </button>
          )}
        </div>
      </div>
    </main>
  );
}