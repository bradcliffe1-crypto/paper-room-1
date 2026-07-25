import { Check, LockKeyhole } from "lucide-react";

function TutorialCard({ level, unlocked, completed, onSelect }) {
  return (
    <button
      disabled={!unlocked}
      onClick={onSelect}
      className="group flex min-h-36 flex-col justify-between border border-[#262629] bg-[#0f0f12] p-5 text-left transition hover:border-[#3a3a3e] hover:bg-[#131316] disabled:cursor-not-allowed disabled:opacity-40"
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[.2em] text-[#75736d]">
        <span>TRAINING {level.number}</span>
        {completed ? <Check size={13} className="text-[#7a8a6a]" /> : unlocked ? <span className="text-[#9a8f6a]">open</span> : <LockKeyhole size={12} />}
      </div>
      <h2 className="mt-4 font-display text-xl text-[#d8d5cd]">{level.title}</h2>
    </button>
  );
}

function CaseCard({ level, unlocked, completed, onSelect }) {
  return (
    <button
      disabled={!unlocked}
      onClick={onSelect}
      className="group flex min-h-44 items-center justify-center border border-[#262629] bg-[#0f0f12] p-6 text-center transition hover:border-[#3a3a3e] hover:bg-[#131316] disabled:cursor-not-allowed disabled:opacity-40"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="font-mono text-base lowercase tracking-[.1em] text-[#d8d5cd] transition group-hover:text-[#9a8f6a]">case file {level.number}</span>
        {completed ? (
          <Check size={14} className="text-[#7a8a6a]" />
        ) : unlocked ? (
          <span className="h-1.5 w-1.5 rounded-full bg-[#9a8f6a]" />
        ) : (
          <LockKeyhole size={13} className="text-[#5d5b56]" />
        )}
      </div>
    </button>
  );
}

export default function LevelMenu({ tutorials, levels, completed, onSelect, onOpenInbox, onOpenManual, unreadCount, ctx }) {
  const tutUnlocked = i => i === 0 || completed.includes(tutorials[i - 1].id);

  return (
    <main className="min-h-screen bg-[#0a0a0b] px-6 py-12 text-[#d8d5cd] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between border-b border-[#262629] pb-6">
          <h1 className="font-mono text-2xl lowercase tracking-[.05em]">_desktop_</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenManual}
              aria-label="Field manual"
              className="flex h-9 w-9 items-center justify-center border border-[#262629] font-mono text-lg leading-none text-[#9a8f6a] transition hover:border-[#3a3a3e] hover:text-[#aea370]"
            >
              ?
            </button>
            <button onClick={onOpenInbox} className="flex items-center gap-2 border border-[#262629] px-4 py-2 font-mono text-xs uppercase tracking-[.2em] text-[#d8d5cd] transition hover:border-[#3a3a3e] hover:text-[#9a8f6a]">
              inbox
              {unreadCount > 0 && <span className="rounded-full bg-[#b0523e] px-1.5 text-[10px] leading-5 text-white">{unreadCount}</span>}
            </button>
          </div>
        </header>

        <section className="py-10">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[.3em] text-[#9a8f6a]">Training</p>
          <div className="grid gap-px border border-[#262629] bg-[#262629] sm:grid-cols-2 lg:grid-cols-3">
            {tutorials.map((level, i) => (
              <TutorialCard key={level.id} level={level} unlocked={tutUnlocked(i)} completed={completed.includes(level.id)} onSelect={() => onSelect("tutorials", i)} />
            ))}
          </div>
        </section>

        <section className="border-t border-[#262629] py-10">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[.3em] text-[#9a8f6a]">Cases</p>
          <div className="grid gap-px border border-[#262629] bg-[#262629] sm:grid-cols-2 lg:grid-cols-3">
            {levels.map((level, i) => {
              const isSecret = !!level.secret;
              if (isSecret && !(level.unlocksWith && level.unlocksWith(ctx))) return null;
              const unlocked = isSecret || (level.lines.length > 0 && (i === 0 || completed.includes(levels[i - 1].id)));
              return <CaseCard key={level.id} level={level} unlocked={unlocked} completed={completed.includes(level.id)} onSelect={() => onSelect("levels", i)} />;
            })}
          </div>
        </section>
      </div>
    </main>
  );
}