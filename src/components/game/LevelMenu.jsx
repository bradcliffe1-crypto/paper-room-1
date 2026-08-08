import { Check, LockKeyhole } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import PinnedDock from "@/components/game/PinnedDock";

function FolderIcon({ completed }) {
  const back = completed ? "#5a6a4a" : "#c9b478";
  const front = completed ? "#7a8a6a" : "#e6d4a0";
  const stroke = completed ? "#4a5a3a" : "#9a8654";
  return (
    <svg width="58" height="44" viewBox="0 0 60 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8 Q3 6 5 6 H21 L27 12 H3 Z" fill={back} stroke={stroke} strokeWidth="1" />
      <path d="M3 12 H57 V42 H3 Z" fill={front} stroke={stroke} strokeWidth="1" />
    </svg>
  );
}

export default function LevelMenu({ tutorials, levels, completed, onSelect, onOpenInbox, onOpenManual, unreadCount }) {
  const tutUnlocked = i => i === 0 || completed.includes(tutorials[i - 1].id);
  const allTrainingComplete = tutorials.every(t => completed.includes(t.id));
  const headerText = allTrainingComplete ? "_desktop" : "_training";
  const typed = useTypewriter(headerText, 70, 150);
  const typing = typed.length < headerText.length;

  return (
    <main className="flex min-h-screen flex-col bg-[#0a0a0b] text-[#d8d5cd]">
      <PinnedDock unreadCount={unreadCount} onOpenInbox={onOpenInbox} onOpenManual={onOpenManual} />
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-12 sm:px-12 lg:px-20">
        <header className="pb-8">
          <h1 className="font-mono text-2xl lowercase tracking-[.05em] text-[#d8d5cd]">
            {typed}
            {typing && <span className="ml-0.5 inline-block h-5 w-[9px] translate-y-0.5 bg-[#9a8f6a]" />}
          </h1>
        </header>

        {!allTrainingComplete ? (
          <section className="flex flex-1 flex-col">
            <div className="grid flex-1 grid-rows-2 gap-6 sm:grid-cols-3">
              {tutorials.map((level, i) => {
                const unlocked = tutUnlocked(i);
                const done = completed.includes(level.id);
                return (
                  <button
                    key={level.id}
                    disabled={!unlocked}
                    onClick={() => onSelect("tutorials", i)}
                    className="group flex min-h-32 flex-col justify-between border border-[#151515] bg-[#0b0b0c] p-6 text-left transition hover:border-[#262626] disabled:cursor-not-allowed disabled:opacity-20"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] tracking-[.25em] text-[#45433f]">
                      <span className="text-[#9a8f6a]">{level.number}</span>
                      {done ? <Check size={13} className="text-[#7a8a6a]" /> : unlocked ? <span className="text-[#3a3a38]">›</span> : <LockKeyhole size={12} className="text-[#45433f]" />}
                    </div>
                    <h2 className="mt-6 font-mono text-lg lowercase tracking-[.02em] text-[#6a675f] transition group-hover:text-[#d8d5cd]">{level.title}</h2>
                  </button>
                );
              })}
            </div>
          </section>
        ) : (
          <section>
            <div className="grid grid-cols-3 gap-10 sm:grid-cols-4 lg:grid-cols-5">
              {levels.map((level, i) => {
                const unlocked = level.lines.length > 0 && (i === 0 || completed.includes(levels[i - 1].id));
                const done = completed.includes(level.id);
                return (
                  <button
                    key={level.id}
                    disabled={!unlocked}
                    onClick={() => onSelect("levels", i)}
                    className="group flex flex-col items-center gap-6 py-10 text-center transition hover:bg-[#0e0e10] disabled:cursor-not-allowed disabled:opacity-15"
                  >
                    <FolderIcon completed={done} />
                    <span className={"font-mono text-[11px] tracking-[.15em] " + (done ? "text-[#5a6a4a]" : unlocked ? "text-[#7a7770]" : "text-[#45433f]")}>
                      {level.number}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}