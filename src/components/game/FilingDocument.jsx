export default function FilingDocument({ level, children }) {
  const isReal = !!level.candidate;
  return (
    <article>
      <div className="mb-10 border-t border-[#262629] pt-7 sm:pt-9">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#5d5b56]">
            nh campaign finance{isReal ? "" : " · simulated"}
          </p>
          <span className="font-mono text-[10px] uppercase tracking-[.2em] text-[#9a8f6a]">
            {isReal ? "public filing" : "training only"}
          </span>
        </div>
        <h2 className="mt-4 font-mono text-xl lowercase tracking-[.04em] text-[#d8d5cd]">{level.report}</h2>
        <dl className="mt-8 grid gap-5 border-t border-[#1d1d1f] pt-6 text-sm sm:grid-cols-2">
          <div><dt className="font-mono text-[10px] uppercase tracking-[.15em] text-[#5d5b56]">filer</dt><dd className="mt-1.5 font-mono text-[#d8d5cd]">{level.filer}</dd></div>
          <div><dt className="font-mono text-[10px] uppercase tracking-[.15em] text-[#5d5b56]">office</dt><dd className="mt-1.5 font-mono text-[#d8d5cd]">{level.office}</dd></div>
          <div><dt className="font-mono text-[10px] uppercase tracking-[.15em] text-[#5d5b56]">period</dt><dd className="mt-1.5 font-mono text-[#d8d5cd]">{level.period}</dd></div>
          <div><dt className="font-mono text-[10px] uppercase tracking-[.15em] text-[#5d5b56]">version</dt><dd className="mt-1.5 font-mono text-[#d8d5cd]">original</dd></div>
        </dl>
      </div>
      {children}
    </article>
  );
}