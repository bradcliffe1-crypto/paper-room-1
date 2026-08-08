import { useState } from "react";
import { Flag, Search } from "lucide-react";
import { useGlowSync } from "@/hooks/useGlowSync";

const money = n => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

export default function FilingTable({ lines, selected, onToggle, findOnPage }) {
  const glowRef = useGlowSync();
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const shown = findOnPage && q ? lines.filter(l => [l.date, l.code, l.name, l.location, l.detail].join(" ").toLowerCase().includes(q)) : lines;
  return (
    <div ref={glowRef} className="border border-[#262629] bg-[#0c0c0d]">
      {findOnPage && (
        <div className="border-b border-[#262629] p-3">
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#45433f]" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="find on page…"
              className="w-full border border-[#262629] bg-[#131316] py-2 pl-9 pr-3 font-mono text-sm text-[#d8d5cd] placeholder:text-[#45433f]"
            />
          </div>
          {q && <p className="mt-2 font-mono text-[10px] uppercase tracking-[.15em] text-[#45433f]">{shown.length} of {lines.length} rows match</p>}
        </div>
      )}
      <div className="sticky top-0 z-10 hidden grid-cols-[100px_82px_1fr_140px] border-b border-[#262629] bg-[#0c0c0d] px-4 py-3 font-mono text-[10px] uppercase tracking-[.15em] text-[#45433f] md:grid">
        <span>date</span><span>code</span><span>name / purpose</span><span className="text-right">amount</span>
      </div>
      {shown.map(line => {
        const active = selected.includes(line.id);
        return (
          <div
            key={line.id}
            onClick={() => onToggle(line.id)}
            role="button"
            tabIndex={0}
            aria-label={`${active ? "Remove" : "Add"} flag`}
            className={`group grid cursor-pointer border-b px-4 py-4 transition last:border-0 md:grid-cols-[100px_82px_1fr_140px] ${
              active
                ? "relative z-10 border-[#b0523e] bg-[#1a1411] row-glow"
                : "border-[#181819] hover:bg-[#131316]"
            }`}
          >
            <div className="font-mono text-xs text-[#75736d]">{line.date}</div>
            <div className="mt-2 font-mono text-xs text-[#9a8f6a] md:mt-0">{line.code}</div>
            <div className="mt-3 md:mt-0">
              <p className="font-mono text-sm text-[#d8d5cd]">{line.name}</p>
              <p className="mt-1 font-mono text-xs text-[#5d5b56]">{line.location} · {line.detail}</p>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 md:mt-0 md:justify-end">
              <b className="font-mono text-sm text-[#d8d5cd]">{money(line.amount)}</b>
              <span
                className={`rounded-full border p-2 transition ${active ? "border-[#b0523e] bg-[#b0523e] text-white" : "border-[#3a3a3e] text-[#75736d] group-hover:border-[#b0523e] group-hover:text-[#b0523e]"}`}
              >
                <Flag size={14} fill={active ? "currentColor" : "none"} />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}