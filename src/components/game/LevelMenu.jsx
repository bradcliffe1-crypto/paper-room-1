import { ArrowRight, Check, LockKeyhole } from "lucide-react";

function SectionCard({ level, unlocked, completed, onSelect, showCandidate }) {
  return (
    <button
      disabled={!unlocked}
      onClick={onSelect}
      className="group flex min-h-44 flex-col border border-[#262629] bg-[#131316] p-6 text-left transition hover:border-[#3a3a3e] hover:bg-[#16161a] disabled:cursor-not-allowed disabled:opacity-40"
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[.2em] text-[#75736d]">
        <span>FILE {level.number}</span>
        {completed ? (
          <Check size={14} className="text-[#7a8a6a]" />
        ) : unlocked ? (
          <span className="text-[#9a8f6a]">{level.type === "analyze" ? "RESEARCH" : "REVIEW"}</span>
        ) : (
          <LockKeyhole size={13} />
        )}
      </div>
      {showCandidate ? (
        <>
          <p className="mt-5 font-display text-2xl text-[#d8d5cd]">{level.candidate}</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#9a8f6a]">{level.title}</p>
        </>
      ) : (
        <h2 className="mt-5 font-display text-2xl text-[#d8d5cd]">{level.title}</h2>
      )}
      <p className="mt-3 text-sm leading-6 text-[#8c8a84]">{level.task || level.goal}</p>
      <div className="mt-auto flex items-center gap-2 pt-6 font-mono text-[10px] uppercase tracking-[.2em] text-[#75736d] transition group-hover:text-[#9a8f6a]">
        Open <ArrowRight size={12} className="transition group-hover:translate-x-1" />
      </div>
    </button>
  );
}

export default function LevelMenu({ tutorials, levels, completed, score, onSelect }) {
  const tutUnlocked = i => i === 0 || completed.includes(tutorials[i - 1].id);
  const lvlUnlocked = i => levels[i].lines.length > 0 && (i === 0 || completed.includes(levels[i - 1].id));

  return (
    <main className="min-h-screen bg-[#0a0a0b] p-6 text-[#d8d5cd] sm:p-10 lg:p-14">
      <header className="mx-auto flex max-w-6xl items-end justify-between border-b border-[#262629] pb-7">
        <div>
          <p className="font-mono text-xs uppercase tracking-[.24em] text-[#9a8f6a]">CASEBOOK v.01</p>
          <h1 className="mt-3 font-display text-5xl tracking-[-.04em] sm:text-7xl">The Casebook</h1>
        </div>
        <div className="text-right font-mono text-xs uppercase tracking-wider text-[#75736d]">
          <p>Total score</p>
          <strong className="text-2xl text-[#d8d5cd]">{score}</strong>
        </div>
      </header>

      <section className="mx-auto max-w-6xl py-10">
        <h2 className="mb-1 font-mono text-xs uppercase tracking-[.2em] text-[#9a8f6a]">Training</h2>
        <p className="mb-6 max-w-2xl font-display text-2xl text-[#d8d5cd]">Fictional filings. Learn the mechanics before the real cases.</p>
        <div className="grid gap-px border border-[#262629] bg-[#262629] md:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((level, i) => (
            <SectionCard key={level.id} level={level} unlocked={tutUnlocked(i)} completed={completed.includes(level.id)} onSelect={() => onSelect("tutorials", i)} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-[#262629] py-10">
        <h2 className="mb-1 font-mono text-xs uppercase tracking-[.2em] text-[#9a8f6a]">Active Investigations</h2>
        <p className="mb-6 max-w-2xl font-display text-2xl text-[#d8d5cd]">New Hampshire filings. Filing data added case by case.</p>
        <div className="grid gap-px border border-[#262629] bg-[#262629] md:grid-cols-2 lg:grid-cols-3">
          {levels.map((level, i) => (
            <SectionCard key={level.id} level={level} unlocked={lvlUnlocked(i)} completed={completed.includes(level.id)} showCandidate onSelect={() => onSelect("levels", i)} />
          ))}
        </div>
      </section>
    </main>
  );
}