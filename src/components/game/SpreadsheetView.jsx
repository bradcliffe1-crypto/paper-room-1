import { useState } from "react";
import { CheckSquare, Square, Search } from "lucide-react";
import { useGlowSync } from "@/hooks/useGlowSync";

const money = n => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
const stateOf = l => {
  const s = (l.location || "").split(",").pop().trim();
  return s.length <= 3 ? s.toUpperCase() : "";
};

export default function SpreadsheetView({ lines, selected, onToggle, onToggleMany, analyzeTask }) {
  const glowRef = useGlowSync();
  const stateMode = analyzeTask?.groupBy === "state";
  const home = (analyzeTask?.homeState || "").toUpperCase();
  const [query, setQuery] = useState("");

  const q = query.toLowerCase();
  const filtered = !stateMode && q
    ? lines.filter(l => [l.date, l.code, l.name, l.location, l.detail, String(l.amount)].join(" ").toLowerCase().includes(q))
    : lines;
  const selectedLines = lines.filter(l => selected.includes(l.id));
  const sum = selectedLines.reduce((a, l) => a + (l.amount || 0), 0);

  if (stateMode) {
    const allIds = lines.map(l => l.id);
    const states = {};
    lines.forEach(l => { const c = stateOf(l); if (c) states[c] = (states[c] || 0) + 1; });
    const stateList = Object.keys(states).sort();
    const nhCount = lines.filter(l => stateOf(l) === home).length;
    const outCount = lines.length - nhCount;

    return (
      <div ref={glowRef}>
        <div className="flex flex-wrap items-center gap-3 border border-[#262629] bg-[#0c0c0d] p-3">
          <button
            onClick={() => onToggleMany(allIds, true)}
            className="flex items-center gap-2 border border-[#262629] bg-[#131316] px-3 py-2 font-mono text-xs uppercase tracking-[.15em] text-[#75736d] transition hover:text-[#d8d5cd]"
          >
            <CheckSquare size={13} /> select all
          </button>
          <button
            onClick={() => onToggleMany(allIds, false)}
            className="flex items-center gap-2 border border-[#262629] bg-[#131316] px-3 py-2 font-mono text-xs uppercase tracking-[.15em] text-[#75736d] transition hover:text-[#d8d5cd]"
          >
            <Square size={13} /> deselect all
          </button>
          <div className="ml-auto border-l border-[#262629] pl-4 font-mono text-xs">
            <span className="text-[#75736d]">sel </span><b className="text-[#d8d5cd]">{selectedLines.length}</b>
            <span className="mx-2 text-[#262629]">|</span>
            <span className="text-[#75736d]">total </span><b className="text-[#b0523e]">{money(sum)}</b>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {stateList.map(code => {
            const stateIds = lines.filter(l => stateOf(l) === code).map(l => l.id);
            const stateOn = stateIds.length > 0 && stateIds.every(id => selected.includes(id));
            return (
              <button
                key={code}
                onClick={() => onToggleMany(stateIds, !stateOn)}
                className={`border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[.1em] transition ${
                  stateOn
                    ? "border-[#5a3a2a] bg-[#1a1411] text-[#b0523e]"
                    : code === home
                      ? "border-[#3a4a2a] text-[#7a8a5a] hover:bg-[#1a1f12]"
                      : "border-[#262629] text-[#75736d] hover:text-[#d8d5cd]"
                }`}
              >
                {code}
              </button>
            );
          })}
        </div>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[.15em] text-[#45433f]">select all · click a state to toggle it · deselect all · read the total</p>
        <div className="border border-t-0 border-[#262629] bg-[#0c0c0d]">
          <div className="sticky top-0 z-10 hidden grid-cols-[44px_90px_82px_1fr_130px] border-b border-[#262629] bg-[#0c0c0d] px-3 py-2 font-mono text-[10px] uppercase tracking-[.15em] text-[#45433f] md:grid">
            <span></span><span>date</span><span>code</span><span>name / purpose</span><span className="text-right">amount</span>
          </div>
          {lines.map(line => {
            const active = selected.includes(line.id);
            const isNH = stateOf(line) === home;
            return (
              <div key={line.id} onClick={() => onToggle(line.id)} className={`grid cursor-pointer border-b px-3 py-3 md:grid-cols-[44px_90px_82px_1fr_130px] ${active ? "relative z-10 border-[#b0523e] bg-[#1a1411] row-glow" : "border-[#181819] hover:bg-[#131316]"}`}>
                <div className="flex items-center">{active ? <CheckSquare size={15} className="text-[#b0523e]" /> : <Square size={15} className="text-[#45433f]" />}</div>
                <div className="font-mono text-xs text-[#75736d]">{line.date}</div>
                <div className="font-mono text-xs text-[#9a8f6a]">{line.code}</div>
                <div className="min-w-0">
                  <p className="truncate font-mono text-sm text-[#d8d5cd]">{line.name}</p>
                  <p className="truncate font-mono text-xs text-[#5d5b56]">
                    <span className={isNH ? "text-[#6a7a5a]" : ""}>{line.location}</span> · {line.detail}
                  </p>
                </div>
                <div className="text-right font-mono text-sm text-[#d8d5cd]">{money(line.amount)}</div>
              </div>
            );
          })}
        </div>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[.15em] text-[#45433f]">{nhCount} in-state · {outCount} out-of-state</p>
      </div>
    );
  }

  const allVisibleSelected = filtered.length > 0 && filtered.every(l => selected.includes(l.id));
  const toggleVisible = () => onToggleMany(filtered.map(l => l.id), !allVisibleSelected);

  return (
    <div ref={glowRef}>
      <div className="flex flex-wrap items-center gap-3 border border-[#262629] bg-[#0c0c0d] p-3">
        <div className="relative min-w-48 flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#45433f]" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="find on page…"
            className="w-full border border-[#262629] bg-[#131316] py-2 pl-9 pr-3 font-mono text-sm text-[#d8d5cd] placeholder:text-[#45433f]"
          />
        </div>
        <button onClick={toggleVisible} className="flex items-center gap-2 border border-[#262629] bg-[#131316] px-3 py-2 font-mono text-xs uppercase tracking-[.15em] text-[#75736d] transition hover:text-[#d8d5cd]">
          {allVisibleSelected ? <Square size={13} /> : <CheckSquare size={13} />}
          {allVisibleSelected ? "clear visible" : query ? "select visible" : "select all"}
        </button>
        <div className="ml-auto border-l border-[#262629] pl-4 font-mono text-xs">
          <span className="text-[#75736d]">sel </span><b className="text-[#d8d5cd]">{selectedLines.length}</b>
          <span className="mx-2 text-[#262629]">|</span>
          <span className="text-[#75736d]">total </span><b className="text-[#b0523e]">{money(sum)}</b>
        </div>
      </div>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[.15em] text-[#45433f]">select all · find a term · click rows to refine · read the total</p>
      <div className="border border-t-0 border-[#262629] bg-[#0c0c0d]">
        <div className="sticky top-0 z-10 hidden grid-cols-[44px_90px_82px_1fr_130px] border-b border-[#262629] bg-[#0c0c0d] px-3 py-2 font-mono text-[10px] uppercase tracking-[.15em] text-[#45433f] md:grid">
          <span></span><span>date</span><span>code</span><span>name / purpose</span><span className="text-right">amount</span>
        </div>
        {filtered.length === 0
          ? <p className="p-6 font-mono text-sm text-[#45433f]">No rows match &ldquo;{query}&rdquo;.</p>
          : filtered.map(line => {
              const active = selected.includes(line.id);
              return (
                <div key={line.id} onClick={() => onToggle(line.id)} className={`grid cursor-pointer border-b px-3 py-3 md:grid-cols-[44px_90px_82px_1fr_130px] ${active ? "relative z-10 border-[#b0523e] bg-[#1a1411] row-glow" : "border-[#181819] hover:bg-[#131316]"}`}>
                  <div className="flex items-center">{active ? <CheckSquare size={15} className="text-[#b0523e]" /> : <Square size={15} className="text-[#45433f]" />}</div>
                  <div className="font-mono text-xs text-[#75736d]">{line.date}</div>
                  <div className="font-mono text-xs text-[#9a8f6a]">{line.code}</div>
                  <div className="min-w-0"><p className="truncate font-mono text-sm text-[#d8d5cd]">{line.name}</p><p className="truncate font-mono text-xs text-[#5d5b56]">{line.location} · {line.detail}</p></div>
                  <div className="text-right font-mono text-sm text-[#d8d5cd]">{money(line.amount)}</div>
                </div>
              );
            })}
      </div>
      {query && <p className="mt-2 font-mono text-[10px] uppercase tracking-[.15em] text-[#45433f]">{filtered.length} of {lines.length} rows match</p>}
    </div>
  );
}