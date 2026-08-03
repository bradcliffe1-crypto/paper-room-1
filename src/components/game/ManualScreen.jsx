import { ArrowLeft, ArrowRight } from "lucide-react";

const CODES = [
  { code: "R-IND", label: "Receipt · individual" },
  { code: "R-ORG", label: "Receipt · organization / PAC" },
  { code: "R-CAN", label: "Receipt · candidate" },
  { code: "E-ADV", label: "Expenditure · advertising" },
  { code: "E-OPS", label: "Expenditure · operations" },
  { code: "E-OTH", label: "Expenditure · other" },
  { code: "L-REC", label: "Loan received" },
  { code: "L-REP", label: "Loan repayment" },
  { code: "L-FOR", label: "Loan forgiven" }
];

function Section({ n, title, children }) {
  return (
    <section className="border-t border-[#1c1c1f] py-10 first:border-t-0">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[.25em] text-[#9a8f6a]">{n}</span>
        <h2 className="font-mono text-sm lowercase tracking-[.05em] text-[#c4c1ba]">{title}</h2>
      </div>
      <div className="mt-5 space-y-3 font-mono text-[13px] leading-7 lowercase text-[#7a7a72]">{children}</div>
    </section>
  );
}

export default function ManualScreen({ onBack, onComplete }) {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-[#d8d5cd]">
      <header className="sticky top-0 z-20 border-b border-[#1c1c1f] bg-[#0a0a0b]/95 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-5 py-4 sm:px-8">
          <button onClick={onBack} aria-label="Back" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3a3a3e] text-[#d8d5cd] transition hover:border-[#9a8f6a] hover:text-[#9a8f6a]">
            <ArrowLeft size={20} />
          </button>
          <button onClick={onComplete} aria-label="Continue" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#9a8f6a] text-[#9a8f6a] transition hover:bg-[#9a8f6a] hover:text-[#0a0a0b]">
            <ArrowRight size={20} />
          </button>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
        <h1 className="font-mono text-3xl lowercase tracking-[.02em] text-[#d8d5cd]">how to read a filing.</h1>
        <p className="mt-6 max-w-md font-mono text-[13px] leading-7 lowercase text-[#7a7a72]">
          every case here is a real filing. read it before you flag anything.
        </p>

        <div className="mt-12">
          <Section n="01" title="the system">
            <p>the state keeps the filings at cfs.sos.nh.gov. anyone can read them. that's where these come from.</p>
          </Section>

          <Section n="02" title="the report">
            <p>each filing is a receipt &amp; expenditure report. the header tells you who, what, when:</p>
            <ul className="space-y-1.5 pl-4">
              <li><b className="text-[#c4c1ba]">filer</b> — the candidate or committee</li>
              <li><b className="text-[#c4c1ba]">office</b> — the race</li>
              <li><b className="text-[#c4c1ba]">type</b> — candidate, candidate committee, or political committee</li>
              <li><b className="text-[#c4c1ba]">period</b> — start and end</li>
              <li><b className="text-[#c4c1ba]">due &amp; filed</b> — when it was due, when it landed</li>
              <li><b className="text-[#c4c1ba]">cycle</b> — which election</li>
              <li><b className="text-[#c4c1ba]">version</b> — original or amended</li>
            </ul>
            <p>read the header first. amended reports can hide what the original said.</p>
          </Section>

          <Section n="03" title="receipts · money in">
            <p>receipts are money in. each line: donor, town, date, amount. larger gifts list employer and occupation too.</p>
            <p>gifts come from individuals, organizations, or the candidate. in-kind is goods, not cash. still a gift.</p>
          </Section>

          <Section n="04" title="expenditures · money out">
            <p>expenditures are money out. each line: payee, town, date, amount, purpose.</p>
            <p>purpose is where the lying starts.</p>
          </Section>

          <Section n="05" title="loans · borrowed money">
            <p>loans are borrowed money. each line: lender, terms, repayments, balance. candidates often lend to themselves.</p>
            <p>a loan never repaid, or quietly forgiven, becomes a gift.</p>
          </Section>

          <Section n="06" title="thresholds &amp; limits">
            <p>small committees may not file at all. gifts past a threshold must list the donor; larger ones, the employer.</p>
            <p>limits apply per cycle and depend on the donor and the office. always add up repeated gifts before you judge.</p>
          </Section>

          <Section n="07" title="the codes">
            <p>this casebook uses shorthand codes so you can scan. the state system uses its own labels.</p>
            <div className="mt-4 grid gap-2 border border-[#1c1c1f] bg-[#0f0f12] p-5 sm:grid-cols-2">
              {CODES.map(c => (
                <p key={c.code} className="flex gap-3 font-mono text-xs normal-case">
                  <b className="w-14 shrink-0 text-[#9a8f6a]">{c.code}</b>
                  <span className="lowercase text-[#7a7a72]">{c.label}</span>
                </p>
              ))}
            </div>
          </Section>

          <Section n="08" title="how to read">
            <p>patterns show when you compare. look for:</p>
            <ul className="space-y-1.5 pl-4">
              <li><b className="text-[#c4c1ba]">dates</b> — same-day clusters</li>
              <li><b className="text-[#c4c1ba]">amounts</b> — matched or maxed</li>
              <li><b className="text-[#c4c1ba]">names</b> — repeats, households, shared employers</li>
              <li><b className="text-[#c4c1ba]">addresses</b> — one address, many names</li>
              <li><b className="text-[#c4c1ba]">employers</b> — who really pays</li>
              <li><b className="text-[#c4c1ba]">purposes</b> — vague memos</li>
            </ul>
            <p>one odd line means nothing. a cluster means a lead.</p>
          </Section>
        </div>
      </article>
    </main>
  );
}