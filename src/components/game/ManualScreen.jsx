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
    <section className="border-t border-[#262629] py-8 first:border-t-0">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[.2em] text-[#9a8f6a]">{n}</span>
        <h2 className="font-display text-2xl text-[#d8d5cd]">{title}</h2>
      </div>
      <div className="mt-4 space-y-3 text-sm leading-6 text-[#9c9a93]">{children}</div>
    </section>
  );
}

export default function ManualScreen({ onBack, onComplete }) {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-[#d8d5cd]">
      <header className="sticky top-0 z-20 border-b border-[#262629] bg-[#0a0a0b]/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3 sm:px-8">
          <button onClick={onBack} className="flex items-center gap-2 font-mono text-xs uppercase tracking-[.2em] text-[#75736d] hover:text-[#d8d5cd]">
            <ArrowLeft size={15} /> Casebook
          </button>
          <span className="font-mono text-[10px] uppercase tracking-[.2em] text-[#9a8f6a]">Field Manual</span>
          <button onClick={onComplete} className="flex items-center gap-2 font-mono text-xs uppercase tracking-[.2em] text-[#d8d5cd] hover:text-[#9a8f6a]">
            Continue <ArrowRight size={15} />
          </button>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[.24em] text-[#9a8f6a]">TRAINING · 00</p>
        <h1 className="mt-4 font-display text-5xl tracking-[-.03em] sm:text-6xl">How to read a filing.</h1>
        <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#9c9a93]">
          Every case in this book is a real public filing from New Hampshire's Online Campaign Finance System. Before you flag anything, learn what you're looking at.
        </p>

        <div className="mt-8">
          <Section n="01" title="The system">
            <p>New Hampshire's Secretary of State runs the Online Campaign Finance System (cfs.sos.nh.gov). Every candidate and political committee registers there and files periodic reports. It's all public record — anyone can read it. That's where your filings come from.</p>
          </Section>

          <Section n="02" title="The report">
            <p>Each filing is a Receipt &amp; Expenditure Report — an R&amp;E Report — covering a set period. The header tells you who, what, and when:</p>
            <ul className="space-y-1.5 pl-4">
              <li><b className="text-[#c4c1ba]">Filer name</b> — the candidate or committee</li>
              <li><b className="text-[#c4c1ba]">Office sought</b> — the race</li>
              <li><b className="text-[#c4c1ba]">Registration type</b> — candidate, candidate committee, or political committee</li>
              <li><b className="text-[#c4c1ba]">Reporting period</b> — start and end dates</li>
              <li><b className="text-[#c4c1ba]">Due date &amp; filed date</b> — when it was due and when it landed</li>
              <li><b className="text-[#c4c1ba]">Election cycle</b> — which cycle it belongs to</li>
              <li><b className="text-[#c4c1ba]">Report version</b> — Original or Amended (a refiled correction)</li>
            </ul>
            <p>Read the header first. Amended reports can hide what the original said.</p>
          </Section>

          <Section n="03" title="Receipts · money in">
            <p>Receipts are money coming into the campaign. Each line records the donor name, city or town, date received, and amount. For larger gifts, the donor's employer and occupation appear too.</p>
            <p>Contributions can come from individuals, organizations and PACs, or the candidate themselves. In-kind contributions are goods or services instead of cash — still a contribution, just not money.</p>
          </Section>

          <Section n="04" title="Expenditures · money out">
            <p>Expenditures are money going out. Each line records the payee name, city or town, date paid, amount, and the purpose or nature of the expenditure — what it was for.</p>
            <p>The purpose field is where vague or personal spending tends to hide.</p>
          </Section>

          <Section n="05" title="Loans · borrowed money">
            <p>Loans create both cash and an obligation. Each line records the lender, the terms (interest rate, due date), repayments, and the outstanding balance. Candidates often lend to their own campaigns.</p>
            <p>A loan that's never repaid — or quietly forgiven — can end up acting like a contribution.</p>
          </Section>

          <Section n="06" title="Thresholds &amp; limits">
            <p>Committees with little activity in a period may not need to file at all. Contributions above small thresholds must be itemized with donor details; larger aggregates require employer and occupation.</p>
            <p>Contribution limits apply per cycle and depend on the donor, the office, and the law in force. Always aggregate — add up repeated gifts from the same source before judging against a limit.</p>
          </Section>

          <Section n="07" title="The codes">
            <p>The filings in this casebook use shorthand codes for line types, so you can scan quickly. (The live state system uses its own field labels; these codes are for reading speed here.)</p>
            <div className="mt-4 grid gap-2 border border-[#262629] bg-[#131316] p-5 sm:grid-cols-2">
              {CODES.map(c => (
                <p key={c.code} className="flex gap-3 text-xs">
                  <b className="w-14 shrink-0 font-mono text-[#9a8f6a]">{c.code}</b>
                  <span className="text-[#9c9a93]">{c.label}</span>
                </p>
              ))}
            </div>
          </Section>

          <Section n="08" title="How to read">
            <p>Patterns emerge when you compare. Look across the filing at:</p>
            <ul className="space-y-1.5 pl-4">
              <li><b className="text-[#c4c1ba]">Dates</b> — clusters on the same day</li>
              <li><b className="text-[#c4c1ba]">Amounts</b> — matching or maximum-sized gifts</li>
              <li><b className="text-[#c4c1ba]">Names</b> — repeats, households, shared employers</li>
              <li><b className="text-[#c4c1ba]">Addresses</b> — entities or donors sharing one address</li>
              <li><b className="text-[#c4c1ba]">Employers &amp; occupations</b> — who really funds the giving</li>
              <li><b className="text-[#c4c1ba]">Purposes</b> — vague memos on expenditures</li>
            </ul>
            <p>A single odd line might mean nothing. A cluster means a lead.</p>
          </Section>
        </div>

        <div className="mt-10 border-t border-[#262629] pt-8">
          <button onClick={onComplete} className="flex w-full items-center justify-center gap-3 bg-[#9a8f6a] px-6 py-4 font-bold uppercase tracking-wider text-[#0a0a0b] transition hover:bg-[#aea370]">
            Begin training <ArrowRight size={17} />
          </button>
          <p className="mt-4 text-center text-[11px] text-[#5d5b56]">You can return to the manual from the casebook any time.</p>
        </div>
      </article>
    </main>
  );
}