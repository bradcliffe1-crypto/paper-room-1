import { BookOpen, Target, Search } from "lucide-react";

export default function CaseBrief({ level }) {
  const task = level.task || level.goal;
  const briefing = level.briefing || level.lesson || level.searchHint;
  const legend = level.legend || [];
  const isAnalyze = level.type === "analyze";

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="bg-[#172529] p-6 text-[#f4f0e6]">
        <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#d39b62]">{isAnalyze ? "Research task" : "Your assignment"}</p>
        <div className="mt-4 flex gap-3">
          {isAnalyze ? <Search className="shrink-0 text-[#d39b62]" size={20}/> : <Target className="shrink-0 text-[#d39b62]" size={20}/>}
          <p className="text-sm leading-6">{task}</p>
        </div>
      </div>
      {briefing && (
        <div className="border border-t-0 border-[#bdb6a8] bg-[#ebe5d8] p-6">
          <div className="flex items-center gap-2 font-bold"><BookOpen size={18}/> {isAnalyze ? "Research note" : "Reading note"}</div>
          <p className="mt-3 text-sm leading-6 text-[#59635f]">{briefing}</p>
          {legend.length > 0 && (
            <div className="mt-5 border-t border-[#bdb6a8] pt-4">
              {legend.map(x => (
                <p key={x.code} className="mb-2 flex gap-3 text-xs">
                  <b className="w-14 font-mono text-[#9c342d]">{x.code}</b>
                  <span>{x.label}</span>
                </p>
              ))}
            </div>
          )}
          <p className="mt-5 text-[11px] leading-5 text-[#6c736f]">
            {isAnalyze
              ? "A flag here is a research total, not a legal conclusion."
              : "Codes are shorthand for report concepts. A flag is a research lead, not a legal conclusion."}
          </p>
        </div>
      )}
    </aside>
  );
}