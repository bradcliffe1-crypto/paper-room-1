import { ArrowRight, Check, LockKeyhole, Flag, Calculator } from "lucide-react";

function SectionCard({ level, unlocked, completed, score, onSelect, showCandidate }) {
  return (
    <button
      disabled={!unlocked}
      onClick={onSelect}
      className="group flex min-h-52 flex-col bg-[#f7f3e9] p-7 text-left transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-45"
    >
      <div className="flex justify-between font-mono text-xs uppercase tracking-widest">
        <span>Case {level.number}</span>
        {completed
          ? <span className="flex items-center gap-1 text-[#39715d]"><Check size={16}/> {score > 0 ? score : ""}</span>
          : unlocked
            ? <span className="flex items-center gap-1">{level.type === "analyze" ? <><Calculator size={14}/> Research</> : <><Flag size={14}/> Investigate</>}</span>
            : <LockKeyhole size={16}/>}
      </div>
      {showCandidate && <p className="mt-6 font-mono text-xs uppercase tracking-wider text-[#9c342d]">{level.candidate}</p>}
      <h2 className="mt-1 font-display text-2xl">{level.title}</h2>
      <p className="mt-2 text-sm text-[#67706d]">{level.task}</p>
      <div className="mt-auto flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-widest text-[#9c342d]">
        Review file <ArrowRight size={15} className="transition group-hover:translate-x-1"/>
      </div>
    </button>
  );
}

export default function LevelMenu({ tutorials, levels, completed, score, onSelect }) {
  const tutUnlocked = i => i === 0 || completed.includes(tutorials[i - 1].id);
  const lvlUnlocked = i => levels[i].lines.length > 0 && (i === 0 || completed.includes(levels[i - 1].id));

  return (
    <main className="min-h-screen bg-[#eee9dd] p-6 text-[#172529] sm:p-10 lg:p-14">
      <header className="mx-auto flex max-w-6xl items-end justify-between border-b border-[#172529] pb-7">
        <div>
          <p className="font-mono text-xs uppercase tracking-[.24em] text-[#9c342d]">Investigator desk</p>
          <h1 className="mt-3 font-display text-5xl tracking-[-.05em] sm:text-7xl">The Casebook</h1>
        </div>
        <div className="text-right font-mono text-xs uppercase tracking-wider">
          <p>Total score</p>
          <strong className="text-2xl text-[#9c342d]">{score}</strong>
        </div>
      </header>

      <section className="mx-auto max-w-6xl py-10">
        <h2 className="mb-1 font-display text-3xl">Training Cases</h2>
        <p className="mb-6 max-w-2xl text-sm text-[#56615e]">Fictional filings that teach the mechanics — flagging leads and reading reports — before the real cases.</p>
        <div className="grid gap-px bg-[#b9b3a6] border border-[#b9b3a6] md:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((level, i) => (
            <SectionCard
              key={level.id}
              level={level}
              unlocked={tutUnlocked(i)}
              completed={completed.includes(level.id)}
              score={0}
              onSelect={() => onSelect("tutorials", i)}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-[#b9b3a6] py-10">
        <h2 className="mb-1 font-display text-3xl">Active Investigations</h2>
        <p className="mb-6 max-w-2xl text-sm text-[#56615e]">Real filings from the New Hampshire Online Campaign Finance System. Filing data is added case by case.</p>
        <div className="grid gap-px bg-[#b9b3a6] border border-[#b9b3a6] md:grid-cols-2 lg:grid-cols-3">
          {levels.map((level, i) => {
            const hasData = level.lines.length > 0;
            return (
              <SectionCard
                key={level.id}
                level={level}
                unlocked={lvlUnlocked(i)}
                completed={completed.includes(level.id)}
                score={0}
                showCandidate
                onSelect={() => onSelect("levels", i)}
              >
                {!hasData && (
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[#8a8377]">Filing data pending</p>
                )}
              </SectionCard>
            );
          })}
        </div>
      </section>
    </main>
  );
}