import { Flag } from "lucide-react";

const money = n => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

export default function FilingTable({ lines, selected, onToggle }) {
  return (
    <div className="border border-[#262629] bg-[#0c0c0d]">
      <div className="sticky top-0 z-10 hidden grid-cols-[100px_82px_1fr_140px] border-b border-[#262629] bg-[#0c0c0d] px-4 py-3 font-mono text-[10px] uppercase tracking-[.15em] text-[#45433f] md:grid">
        <span>date</span><span>code</span><span>name / purpose</span><span className="text-right">amount</span>
      </div>
      {lines.map(line => {
        const active = selected.includes(line.id);
        return (
          <div key={line.id} className={`grid border-b border-[#181819] px-4 py-4 transition last:border-0 md:grid-cols-[100px_82px_1fr_140px] ${active ? "bg-[#1a1411]" : "hover:bg-[#131316]"}`}>
            <div className="font-mono text-xs text-[#75736d]">{line.date}</div>
            <div className="mt-2 font-mono text-xs text-[#9a8f6a] md:mt-0">{line.code}</div>
            <div className="mt-3 md:mt-0">
              <p className="font-mono text-sm text-[#d8d5cd]">{line.name}</p>
              <p className="mt-1 font-mono text-xs text-[#5d5b56]">{line.location} · {line.detail}</p>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 md:mt-0 md:justify-end">
              <b className="font-mono text-sm text-[#d8d5cd]">{money(line.amount)}</b>
              <button
                onClick={() => onToggle(line.id)}
                aria-label={`${active ? "Remove" : "Add"} flag`}
                className={`rounded-full border p-2 transition ${active ? "border-[#b0523e] bg-[#b0523e] text-white" : "border-[#3a3a3e] text-[#75736d] hover:border-[#b0523e] hover:text-[#b0523e]"}`}
              >
                <Flag size={14} fill={active ? "currentColor" : "none"} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}