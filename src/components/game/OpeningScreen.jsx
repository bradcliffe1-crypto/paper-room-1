import { ArrowRight } from "lucide-react";

export default function OpeningScreen({ onEnter }) {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-[#0a0a0b] p-7 text-[#d8d5cd] sm:p-12 lg:p-16">
      <div className="font-mono text-[10px] uppercase tracking-[.3em] text-[#75736d]">
        NH · campaign finance · investigation desk
      </div>
      <div className="max-w-2xl py-16">
        <p className="mb-6 font-mono text-xs tracking-[.2em] text-[#9a8f6a]">CASEBOOK v.01</p>
        <h1 className="font-display text-6xl leading-[.9] tracking-[-.03em] sm:text-8xl">Follow the money.</h1>
        <p className="mt-8 max-w-md text-base leading-7 text-[#9c9a93]">
          Read the filings. Trace the patterns. Flag what the public record hides in plain sight.
        </p>
      </div>
      <button
        onClick={onEnter}
        className="group flex w-fit items-center gap-4 border-b border-[#323236] pb-3 font-mono text-xs uppercase tracking-[.25em] transition hover:border-[#9a8f6a] hover:text-[#9a8f6a]"
      >
        Open the casebook <ArrowRight size={16} className="transition group-hover:translate-x-1" />
      </button>
    </main>
  );
}