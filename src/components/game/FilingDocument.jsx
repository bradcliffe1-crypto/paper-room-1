export default function FilingDocument({ level, children }) {
  const isReal = !!level.candidate;
  return (
    <article>
      <div className="mb-7 border-t-4 border-[#16161a] bg-[#d8d4ca] p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#75736d]">
              New Hampshire campaign finance{isReal ? "" : " · simulated"}
            </p>
            <h2 className="mt-3 font-display text-3xl text-[#16161a]">{level.report}</h2>
          </div>
          <span className="h-fit border border-[#9a8f6a] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#9a8f6a]">
            {isReal ? "Public filing" : "Training only"}
          </span>
        </div>
        <dl className="mt-8 grid gap-4 border-t border-[#b0ada3] pt-5 text-sm sm:grid-cols-2">
          <div><dt className="font-mono text-[10px] uppercase text-[#75736d]">Filer name</dt><dd className="mt-1 font-bold text-[#16161a]">{level.filer}</dd></div>
          <div><dt className="font-mono text-[10px] uppercase text-[#75736d]">Office sought</dt><dd className="mt-1 text-[#16161a]">{level.office}</dd></div>
          <div><dt className="font-mono text-[10px] uppercase text-[#75736d]">Reporting period</dt><dd className="mt-1 text-[#16161a]">{level.period}</dd></div>
          <div><dt className="font-mono text-[10px] uppercase text-[#75736d]">Report version</dt><dd className="mt-1 text-[#16161a]">Original</dd></div>
        </dl>
      </div>
      {children}
    </article>
  );
}