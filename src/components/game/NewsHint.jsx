import { Newspaper } from "lucide-react";

export default function NewsHint({ hint }) {
  return (
    <div className="mb-6 border-l-2 border-[#9a8f6a] bg-[#e9e5dc] p-5">
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#9a8f6a]">
        <Newspaper size={13} /> News clipping · cross-reference with filing
      </div>
      <h3 className="mt-3 font-display text-2xl leading-tight text-[#16161a]">{hint.headline}</h3>
      <p className="mt-1 font-mono text-xs text-[#75736d]">{hint.source} · {hint.date}</p>
      <p className="mt-3 text-sm leading-6 text-[#3d4541]">{hint.body}</p>
    </div>
  );
}