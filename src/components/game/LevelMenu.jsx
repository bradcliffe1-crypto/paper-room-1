import { Check, LockKeyhole } from "lucide-react";

function FolderIcon({ completed }) {
  const back = completed ? "#5a6a4a" : "#c9b478";
  const front = completed ? "#7a8a6a" : "#e6d4a0";
  const stroke = completed ? "#4a5a3a" : "#9a8654";
  return (
    <svg width="62" height="48" viewBox="0 0 60 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8 Q3 6 5 6 H21 L27 12 H3 Z" fill={back} stroke={stroke} strokeWidth="1" />
      <path d="M3 12 H57 V42 H3 Z" fill={front} stroke={stroke} strokeWidth="1" />
    </svg>
  );
}

function PixelQ() {
  const rows = ["01110", "10001", "00001", "00110", "00100", "00100", "00000", "00100"];
  const px = 3;
  return (
    <svg width={5 * px} height={rows.length * px} viewBox={`0 0 ${5 * px} ${rows.length * px}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {rows.flatMap((r, y) => r.split("").map((c, x) => (c === "1" ? <rect key={x + "-" + y} x={x * px} y={y * px} width={px} height={px} fill="#9a8f6a" /> : null)))}
    </svg>
  );
}

function TutorialCard({ level, unlocked, completed, onSelect }) {
  return (
    <button
      disabled={!unlocked}
      onClick={onSelect}
      className="group flex min-h-36 flex-col justify-between border border-[#1c1c1f] bg-[#0f0f12] p-6 text-left transition hover:border-[#3a3a3e] hover:bg-[#131316] disabled:cursor-not-allowed disabled:opacity-40"
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[.2em] text-[#75736d]">
        <span>{level.number}</span>
        {completed ? <Check size={13} className="text-[#7a8a6a]" /> : unlocked ? <span className="text-[#9a8f6a]">open</span> : <LockKeyhole size={12} />}
      </div>
      <h2 className="mt-5 font-display text-2xl text-[#d8d5cd]">{level.title}</h2>
    </button>
  );
}

function FolderCase({ level, unlocked, completed, onSelect }) {
  return (
    <button
      disabled={!unlocked}
      onClick={onSelect}
      className="group flex flex-col items-center gap-3 rounded p-5 text-center transition hover:bg-[#121216] disabled:cursor-not-allowed disabled:opacity-25"
    >
      <FolderIcon completed={completed} />
      <span className={"font-mono text-[11px] tracking-[.1em] " + (completed ? "text-[#7a8a6a]" : unlocked ? "text-[#a8a59d]" : "text-[#5d5b56]")}>
        {level.number}
      </span>
    </button>
  );
}

export default function LevelMenu({ tutorials, levels, completed, onSelect, onOpenInbox, onOpenManual, unreadCount, ctx }) {
  const tutUnlocked = i => i === 0 || completed.includes(tutorials[i - 1].id);
  const allTrainingComplete = tutorials.every(t => completed.includes(t.id));

  return (
    <main className="min-h-screen bg-[#0a0a0b] px-6 py-16 text-[#d8d5cd] sm:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <header className="flex items-center justify-between pb-8">
          <h1 className="font-mono text-2xl lowercase tracking-[.05em]">{allTrainingComplete ? "_desktop" : "_training"}</h1>
          <div className="flex items-center gap-3">
            <button onClick={onOpenInbox} className="flex items-center gap-2 border border-[#262629] px-4 py-2 font-mono text-xs uppercase tracking-[.2em] text-[#d8d5cd] transition hover:border-[#3a3a3e] hover:text-[#9a8f6a]">
              inbox
              {unreadCount > 0 && <span className="rounded-full bg-[#b0523e] px-1.5 text-[10px] leading-5 text-white">{unreadCount}</span>}
            </button>
            <button
              onClick={onOpenManual}
              aria-label="Field manual"
              className="flex h-9 w-9 items-center justify-center border border-[#262629] transition hover:border-[#3a3a3e]"
            >
              <PixelQ />
            </button>
          </div>
        </header>

        {!allTrainingComplete ? (
          <section className="py-12">
            <div className="grid gap-4 sm:grid-cols-2">
              {tutorials.map((level, i) => (
                <TutorialCard key={level.id} level={level} unlocked={tutUnlocked(i)} completed={completed.includes(level.id)} onSelect={() => onSelect("tutorials", i)} />
              ))}
            </div>
          </section>
        ) : (
          <>
            <section className="py-12">
              <div className="grid grid-cols-4 gap-6 sm:grid-cols-5 lg:grid-cols-6">
                {levels.map((level, i) => {
                  const isSecret = !!level.secret;
                  if (isSecret && !(level.unlocksWith && level.unlocksWith(ctx))) return null;
                  const unlocked = isSecret || (level.lines.length > 0 && (i === 0 || completed.includes(levels[i - 1].id)));
                  return <FolderCase key={level.id} level={level} unlocked={unlocked} completed={completed.includes(level.id)} onSelect={() => onSelect("levels", i)} />;
                })}
              </div>
            </section>
            <section className="border-t border-[#1c1c1f] py-12 opacity-60">
              <div className="grid gap-4 sm:grid-cols-2">
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