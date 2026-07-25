import { Newspaper } from "lucide-react";

export default function NewsHint({ hint }) {
  return (
    <div className="mb-6 border-l-4 border-[#9c342d] bg-[#f0e8d5] p-5">
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#9c342d]">
        <Newspaper size={14}/> News hint · cross-reference with filing
      </div>
      <h3 className="mt-3 font-display text-2xl leading-tight">{hint.headline}</h3>
      <p className="mt-1 font-mono text-xs text-[#68716e]">{hint.source} · {hint.date}</p>
      <p className="mt-3 text-sm leading-6 text-[#3d4541]">{hint.body}</p>
    </div>
  );
}