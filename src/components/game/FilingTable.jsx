import { Flag } from "lucide-react";

const money = n => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

export default function FilingTable({ lines, selected, onToggle }) {
  return (
    <div className="border border-[#b0ada3] bg-[#e3dfd6]">
      <div className="sticky top-0 z-10 hidden grid-cols-[100px_82px_1fr_140px] border-b border-[#16161a] bg-[#d2cec3] px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-[#5d5b56] md:grid">
        <span>Date</span><span>Code</span><span>Name / purpose</span><span className="text-right">Amount</span>
      </div>
      {lines.map(line => {
        const active = selected.includes(line.id);
        return (
          <div key={line.id} className={`grid border-b border-[#c0bcb2] p-4 transition last:border-0 md:grid-cols-[100px_82px_1fr_140px] ${active ? "bg-[#d9c8c0]" : "hover:bg-[#e9e5dc]"}`}>
            <div className="font-mono text-xs text-[#75736d]">{line.date}</div>
            <div className="mt-2 font-mono text-xs font-bold text-[#9a8f6a] md:mt-0">{line.code}</div>
            <div className="mt-3 md:mt-0">
              <p className="font-bold text-[#16161a]">{line.name}</p>
              <p className="mt-1 text-xs text-[#5d5b56]">{line.location} · {line.detail}</p>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 md:mt-0 md:justify-end">
              <b className="font-mono text-sm text-[#16161a]">{money(line.amount)}</b>
              <button
                onClick={() => onToggle(line.id)}
                aria-label={`${active ? "Remove" : "Add"} flag`}
                className={`rounded-full border p-2 transition ${active ? "border-[#b0523e] bg-[#b0523e] text-white" : "border-[#9a9085] text-[#9a8f6a] hover:border-[#b0523e]"}`}
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