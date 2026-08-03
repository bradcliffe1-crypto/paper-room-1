import { ArrowLeft } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function FilingHeader({ level, flagged, onBack }) {
  const isReal = !!level.candidate;
  const typed = useTypewriter(level.title, 35);
  const typing = typed.length < level.title.length;
  return (
    <header className="sticky top-0 z-20 border-b border-[#262629] bg-[#0a0a0b]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-7">
        <button onClick={onBack} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3a3a3e] text-[#d8d5cd] transition hover:border-[#9a8f6a] hover:text-[#9a8f6a]" aria-label="Back to casebook">
          <ArrowLeft size={22} />
        </button>
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#9a8f6a]">
            {isReal ? `FILE ${level.number} · ${level.candidate}` : `TRAINING CASE ${level.number}`}
          </p>
          <h1 className="truncate font-display text-xl text-[#d8d5cd]">{typed}{typing && <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 bg-[#9a8f6a]" />}</h1>
        </div>
      </div>
    </header>
  );
}