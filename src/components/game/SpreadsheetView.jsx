import { useState } from "react";
import { Search, CheckSquare, Square } from "lucide-react";

const money = n => new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n);

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
      <div className="flex flex-wrap items-center gap-3 border border-[#bdb6a8] bg-[#e6dfd0] p-3">
        <div className="relative min-w-48 flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a8377]"/>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Find on page…"
            className="w-full border border-[#bdb6a8] bg-white py-2 pl-9 pr-3 text-sm"
          />
        </div>
        <button
          onClick={toggleVisible}
          className="flex items-center gap-2 border border-[#bdb6a8] bg-white px-3 py-2 text-xs font-bold uppercase tracking-wider"
        >
          {allVisibleSelected ? <Square size={14}/> : <CheckSquare size={14}/>}
          {allVisibleSelected ? "Clear visible" : "Select visible"}
        </button>
        <div className="ml-auto border-l border-[#bdb6a8] pl-4 font-mono text-xs">
          <span className="text-[#68716e]">Sel: </span><b>{selectedLines.length}</b>
          <span className="mx-2 text-[#bdb6a8]">|</span>
          <span className="text-[#68716e]">Total: </span><b className="text-[#9c342d]">{money(sum)}</b>
        </div>
      </div>
      <div className="max-h-[55vh] overflow-y-auto border border-t-0 border-[#bdb6a8] bg-[#faf7ef]">
        <div className="sticky top-0 z-10 hidden grid-cols-[44px_90px_82px_1fr_130px] border-b border-[#172529] bg-[#e6dfd0] px-3 py-2 font-mono text-[10px] uppercase tracking-widest md:grid">
          <span></span><span>Date</span><span>Code</span><span>Name / purpose</span><span className="text-right">Amount</span>
        </div>
        {filtered.length === 0
          ? <p className="p-6 text-sm text-[#8a8377]">No rows match &ldquo;{query}&rdquo;.</p>
          : filtered.map(line => {
              const active = selected.includes(line.id);
              return (
                <div
                  key={line.id}
                  onClick={() => onToggle(line.id)}
                  className={`grid cursor-pointer border-b border-[#d5cfc2] px-3 py-3 md:grid-cols-[44px_90px_82px_1fr_130px] ${active ? "bg-[#f4deda]" : "hover:bg-white"}`}
                >
                  <div className="flex items-center">
                    {active ? <CheckSquare size={16} className="text-[#9c342d]"/> : <Square size={16} className="text-[#aaa396]"/>}
                  </div>
                  <div className="font-mono text-xs text-[#66706c]">{line.date}</div>
                  <div className="font-mono text-xs font-bold text-[#9c342d]">{line.code}</div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold">{line.name}</p>
                    <p className="truncate text-xs text-[#65706c]">{line.location} · {line.detail}</p>
                  </div>
                  <div className="text-right font-mono text-sm">{money(line.amount)}</div>
                </div>
              );
            })}
      </div>
      {query && (
        <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[#8a8377]">
          {filtered.length} of {lines.length} rows match your search
        </p>
      )}
    </div>
  );
}