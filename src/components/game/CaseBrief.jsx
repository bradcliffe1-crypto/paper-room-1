import { BookOpen, Target, Search } from "lucide-react";

export default function CaseBrief({ level }) {
  const task = level.task || level.goal;
  const briefing = level.briefing || level.lesson || level.searchHint;
  const legend = level.legend || [];
  const isAnalyze = level.type === "analyze";
  const hasMercer = !!level.task;

  return (
    <aside className="lg:sticky lg:top-20 lg:self-start">
      <div className="bg-[#131316] p-6 text-[#d8d5cd]">
        {hasMercer ? (
          <>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[.2em]">
              <span className="text-[#9a8f6a]">Mercer</span>
              <span className="text-[#5d5b56]">incoming</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#c4c1ba]">{task}</p>
          </>
        ) : (
          <>
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#9a8f6a]">{isAnalyze ? "RESEARCH TASK" : "ASSIGNMENT"}</p>
            <div className="mt-4 flex gap-3">
              {isAnalyze ? <Search className="shrink-0 text-[#9a8f6a]" size={18} /> : <Target className="shrink-0 text-[#9a8f6a]" size={18} />}
              <p className="text-sm leading-6 text-[#c4c1ba]">{task}</p>
            </div>
          </>
        )}
      </div>
      {briefing && (
        <div className="border border-t-0 border-[#262629] bg-[#16161a] p-6">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.2em] text-[#75736d]">
            <BookOpen size={14} /> {isAnalyze ? "METHOD" : "READING NOTE"}
          </div>
          <p className="mt-3 text-sm leading-6 text-[#8c8a84]">{briefing}</p>
          {legend.length > 0 && (
            <div className="mt-5 border-t border-[#262629] pt-4">
              {legend.map(x => (
                <p key={x.code} className="mb-2 flex gap-3 text-xs">
                  <b className="w-14 font-mono text-[#9a8f6a]">{x.code}</b>
                  <span className="text-[#8c8a84]">{x.label}</span>
                </p>
              ))}
            </div>
          )}
          <p className="mt-5 text-[11px] leading-5 text-[#5d5b56]">
            {isAnalyze ? "A research total, not a legal conclusion." : "A flag is a lead, not a legal conclusion."}
          </p>
        </div>
      )}
    </aside>
  );
}