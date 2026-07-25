import { Check, LockKeyhole } from "lucide-react";

function FolderIcon({ completed }) {
  const back = completed ? "#5a6a4a" : "#c9b478";
  const front = completed ? "#7a8a6a" : "#e6d4a0";
  const stroke = completed ? "#4a5a3a" : "#9a8654";
  return (
    <svg width="60" height="46" viewBox="0 0 60 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8 Q3 6 5 6 H21 L27 12 H3 Z" fill={back} stroke={stroke} strokeWidth="1" />
      <path d="M3 12 H57 V42 H3 Z" fill={front} stroke={stroke} strokeWidth="1" />
    </svg>
  );
}

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

function FolderCase({ level, unlocked, completed, onSelect }) {
  return (
    <button
      disabled={!unlocked}
      onClick={onSelect}
      className="group flex flex-col items-center gap-2 rounded p-3 text-center transition hover:bg-[#16161a] disabled:cursor-not-allowed disabled:opacity-30"
    >
      <FolderIcon completed={completed} />
      <span className={"font-mono text-xs tracking-[.1em] " + (completed ? "text-[#7a8a6a]" : unlocked ? "text-[#d8d5cd]" : "text-[#75736d]")}>
        {level.number}
      </span>
    </button>
  );
}

export default function LevelMenu({ tutorials, levels, completed, onSelect, onOpenInbox, onOpenManual, unreadCount, ctx }) {
  const tutUnlocked = i => i === 0 || completed.includes(tutorials[i - 1].id);
  const allTrainingComplete = tutorials.every(t => completed.includes(t.id));

  return (
    <main className="min-h-screen bg-[#0a0a0b] px-6 py-12 text-[#d8d5cd] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between border-b border-[#262629] pb-6">
          <h1 className="font-mono text-2xl lowercase tracking-[.05em]">_desktop</h1>
          <div className="flex items-center gap-3">
            <button onClick={onOpenInbox} className="flex items-center gap-2 border border-[#262629] px-4 py-2 font-mono text-xs uppercase tracking-[.2em] text-[#d8d5cd] transition hover:border-[#3a3a3e] hover:text-[#9a8f6a]">
              inbox
              {unreadCount > 0 && <span className="rounded-full bg-[#b0523e] px-1.5 text-[10px] leading-5 text-white">{unreadCount}</span>}
            </button>
            <button
              onClick={onOpenManual}
              aria-label="Field manual"
              className="flex h-9 w-9 items-center justify-center border border-[#262629] font-mono text-lg leading-none text-[#9a8f6a] transition hover:border-[#3a3a3e] hover:text-[#aea370]"
            >
              ?
            </button>
          </div>
        </header>

        {!allTrainingComplete ? (
          <section className="py-10">
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[.3em] text-[#9a8f6a]">Training</p>
            <div className="grid gap-px border border-[#262629] bg-[#262629] sm:grid-cols-2 lg:grid-cols-3">
              {tutorials.map((level, i) => (
                <TutorialCard key={level.id} level={level} unlocked={tutUnlocked(i)} completed={completed.includes(level.id)} onSelect={() => onSelect("tutorials", i)} />
              ))}
            </div>
            <p className="mt-8 font-mono text-xs leading-6 text-[#5d5b56]">complete all training simulations to access _desktop.</p>
          </section>
        ) : (
          <>
            <section className="py-10">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[.3em] text-[#9a8f6a]">Cases</p>
              <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
                {levels.map((level, i) => {
                  const isSecret = !!level.secret;
                  if (isSecret && !(level.unlocksWith && level.unlocksWith(ctx))) return null;
                  const unlocked = isSecret || (level.lines.length > 0 && (i === 0 || completed.includes(levels[i - 1].id)));
                  return <FolderCase key={level.id} level={level} unlocked={unlocked} completed={completed.includes(level.id)} onSelect={() => onSelect("levels", i)} />;
                })}
              </div>
            </section>
            <section className="border-t border-[#262629] py-10">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[.3em] text-[#5d5b56]">Training</p>
              <div className="grid gap-px border border-[#262629] bg-[#262629] sm:grid-cols-2 lg:grid-cols-3">
                {tutorials.map((level, i) => (
                  <TutorialCard key={level.id} level={level} unlocked={tutUnlocked(i)} completed={completed.includes(level.id)} onSelect={() => onSelect("tutorials", i)} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}