import { useState } from "react";
import { Search, CheckSquare, Square } from "lucide-react";

const money = n => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

export default function SpreadsheetView({ lines, selected, onToggle, onToggleMany }) {
  const [query, setQuery] = useState("");
  const q = query.toLowerCase();
  const filtered = q
    ? lines.filter(l => [l.date, l.code, l.name, l.location, l.detail, String(l.amount)].join(" ").toLowerCase().includes(q))
    : lines;
  const selectedLines = lines.filter(l => selected.includes(l.id));
  const sum = selectedLines.reduce((a, l) => a + (l.amount || 0), 0);
  const allVisibleSelected = filtered.length > 0 && filtered.every(l => selected.includes(l.id));

  const toggleVisible = () => onToggleMany(filtered.map(l => l.id), !allVisibleSelected);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 border border-[#b0ada3] bg-[#d2cec3] p-3">
        <div className="relative min-w-48 flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#75736d]" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Find on page…"
            className="w-full border border-[#b0ada3] bg-[#f0ede5] py-2 pl-9 pr-3 text-sm text-[#16161a] placeholder:text-[#9a9085]"
          />
        </div>
        <button onClick={toggleVisible} className="flex items-center gap-2 border border-[#b0ada3] bg-[#f0ede5] px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#5d5b56]">
          {allVisibleSelected ? <Square size={13} /> : <CheckSquare size={13} />}
          {allVisibleSelected ? "Clear visible" : query ? "Select visible" : "Select all"}
        </button>
        <div className="ml-auto border-l border-[#b0ada3] pl-4 font-mono text-xs">
          <span className="text-[#75736d]">SEL </span><b className="text-[#16161a]">{selectedLines.length}</b>
          <span className="mx-2 text-[#b0ada3]">|</span>
          <span className="text-[#75736d]">TOTAL </span><b className="text-[#b0523e]">{money(sum)}</b>
        </div>
      </div>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[#75736d]">
        select all · find a state · clear it · read the total
      </p>
      <div className="max-h-[55vh] overflow-y-auto border border-t-0 border-[#b0ada3] bg-[#e3dfd6]">
        <div className="sticky top-0 z-10 hidden grid-cols-[44px_90px_82px_1fr_130px] border-b border-[#16161a] bg-[#d2cec3] px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-[#5d5b56] md:grid">
          <span></span><span>Date</span><span>Code</span><span>Name / purpose</span><span className="text-right">Amount</span>
        </div>
        {filtered.length === 0
          ? <p className="p-6 text-sm text-[#75736d]">No rows match &ldquo;{query}&rdquo;.</p>
          : filtered.map(line => {
              const active = selected.includes(line.id);
              return (
                <div key={line.id} onClick={() => onToggle(line.id)} className={`grid cursor-pointer border-b border-[#c0bcb2] px-3 py-3 md:grid-cols-[44px_90px_82px_1fr_130px] ${active ? "bg-[#d9c8c0]" : "hover:bg-[#e9e5dc]"}`}>
                  <div className="flex items-center">{active ? <CheckSquare size={15} className="text-[#b0523e]" /> : <Square size={15} className="text-[#9a9085]" />}</div>
                  <div className="font-mono text-xs text-[#75736d]">{line.date}</div>
                  <div className="font-mono text-xs font-bold text-[#9a8f6a]">{line.code}</div>
                  <div className="min-w-0"><p className="truncate text-sm font-bold text-[#16161a]">{line.name}</p><p className="truncate text-xs text-[#5d5b56]">{line.location} · {line.detail}</p></div>
                  <div className="text-right font-mono text-sm text-[#16161a]">{money(line.amount)}</div>
                </div>
              );
            })}
      </div>
      {query && <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[#75736d]">{filtered.length} of {lines.length} rows match</p>}
    </div>
  );
}