import { ArrowLeft, Flag } from "lucide-react";

export default function FilingHeader({ level, flagged, onBack }) {
  const isReal = !!level.candidate;
  return (
    <header className="sticky top-0 z-20 border-b border-[#262629] bg-[#0a0a0b]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-7">
        <button onClick={onBack} className="rounded-full p-2 text-[#d8d5cd] hover:bg-white/5" aria-label="Back to casebook">
          <ArrowLeft size={18} />
        </button>
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#9a8f6a]">
            {isReal ? `FILE ${level.number} · ${level.candidate}` : `TRAINING CASE ${level.number} · FICTIONAL`}
          </p>
          <h1 className="truncate font-display text-xl text-[#d8d5cd]">{level.title}</h1>
        </div>
        <div className="flex items-center gap-2 border-l border-[#262629] pl-4 font-mono text-xs text-[#75736d]">
          <Flag size={14} className="text-[#b0523e]" />
          <span>{flagged} flagged</span>
        </div>
      </div>
    </header>
  );
}