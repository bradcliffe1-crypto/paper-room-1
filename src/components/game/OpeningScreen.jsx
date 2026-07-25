import { ArrowRight, Search, FileWarning } from "lucide-react";

export default function OpeningScreen({ onEnter }) {
  return <main className="min-h-screen bg-[#101c20] text-[#f4f0e6] grid lg:grid-cols-[1.1fr_.9fr]">
    <section className="flex flex-col justify-between p-7 sm:p-12 lg:p-16 min-h-[70vh]">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[.28em] text-[#a9beb5]"><Search size={17}/> Public record investigation</div>
      <div className="max-w-2xl py-16"><p className="mb-5 font-mono text-sm text-[#d39b62]">NEW HAMPSHIRE · TRAINING DESK</p><h1 className="font-display text-6xl sm:text-7xl lg:text-[6.6rem] leading-[.86] tracking-[-.06em]">Follow<br/>the Money.</h1><p className="mt-8 max-w-lg text-lg leading-8 text-[#b9c6c1]">Read campaign finance filings. Trace the patterns. Flag the line items that deserve a closer look.</p></div>
      <button onClick={onEnter} className="group flex w-fit items-center gap-5 border-b border-[#d39b62] pb-3 text-sm uppercase tracking-[.2em] transition-all hover:gap-8">Open the casebook <ArrowRight size={18}/></button>
    </section>
    <aside className="relative hidden overflow-hidden border-l border-white/10 bg-[#d9d1be] p-14 text-[#172529] lg:flex lg:items-center"><div className="absolute -right-10 top-14 rotate-6 border-2 border-[#9c342d]/60 px-6 py-3 font-mono text-sm uppercase tracking-[.3em] text-[#9c342d]">Training file</div><div className="w-full rotate-[-2deg] bg-[#f4f0e6] p-10 shadow-2xl"><FileWarning size={32} className="mb-12 text-[#9c342d]"/><p className="font-mono text-xs uppercase tracking-widest text-[#65716d]">Case file 00-A</p><h2 className="mt-4 font-display text-5xl leading-none">The public record leaves clues.</h2><div className="mt-12 space-y-4 border-t border-[#172529]/20 pt-6 font-mono text-xs"><p>RECEIPTS / EXPENDITURES / LOANS</p><p>STATUS: READY FOR REVIEW</p><p>ORIGIN: FICTIONAL TRAINING DATA</p></div></div></aside>
  </main>;
}