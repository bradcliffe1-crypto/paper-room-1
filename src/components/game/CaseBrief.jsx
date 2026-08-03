import { Target, Search } from "lucide-react";

export default function CaseBrief({ level }) {
  const task = level.task || level.goal;
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
    </aside>
  );
}