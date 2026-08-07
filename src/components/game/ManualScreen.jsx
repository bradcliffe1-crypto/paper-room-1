import { ArrowLeft } from "lucide-react";

const CODES = [
  { code: "R-IND", label: "Receipt · individual" },
  { code: "R-ORG", label: "Receipt · organization / PAC" },
  { code: "R-CAN", label: "Receipt · candidate" },
  { code: "R-IN-K", label: "Receipt · in-kind (goods, not cash)" },
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

export default function ManualScreen({ onBack }) {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-[#d8d5cd]">
      <header className="sticky top-0 z-20 border-b border-[#1c1c1f] bg-[#0a0a0b]/95 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center px-5 py-4 sm:px-8">
          <button onClick={onBack} aria-label="Back" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3a3a3e] text-[#d8d5cd] transition hover:border-[#9a8f6a] hover:text-[#9a8f6a]">
            <ArrowLeft size={20} />
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
            <p>the state keeps the filings at cfs.sos.nh.gov. anyone can read them. that's where these come from. federal races — u.s. senate, congress — file with the fec at fec.gov instead. the rules differ. read the header to know which system you're in.</p>
          </Section>

          <Section n="02" title="the report">
            <p>each filing is a receipt &amp; expenditure report. the header tells you who, what, when:</p>
            <ul className="space-y-1.5 pl-4">
              <li><b className="text-[#c4c1ba]">filer</b> — the candidate or committee</li>
              <li><b className="text-[#c4c1ba]">office</b> — the race</li>
              <li><b className="text-[#c4c1ba]">type</b> — candidate, candidate committee, or political committee</li>
              <li><b className="text-[#c4c1ba]">period</b> — start and end of the reporting window</li>
              <li><b className="text-[#c4c1ba]">due &amp; filed</b> — when it was due, when it landed</li>
              <li><b className="text-[#c4c1ba]">cycle</b> — which election</li>
              <li><b className="text-[#c4c1ba]">version</b> — original or amended</li>
            </ul>
            <p>read the header first. amended reports can hide what the original said.</p>
          </Section>

          <Section n="03" title="receipts · money in">
            <p>receipts are money in. each line: donor, town, date, amount. larger gifts list employer and occupation too.</p>
            <p>gifts come from <b className="text-[#c4c1ba]">individuals</b>, <b className="text-[#c4c1ba]">organizations</b> (companies, llcs, pacs), or the <b className="text-[#c4c1ba]">candidate</b>. an <b className="text-[#c4c1ba]">in-kind</b> gift is goods or services, not cash — a sign order, a venue loaned. it still counts as a contribution and carries a dollar value.</p>
            <p>a <b className="text-[#c4c1ba]">pac</b> is a registered political committee that gives to many candidates. a pac is its own donor, separate from the people who fund it.</p>
          </Section>

          <Section n="04" title="expenditures · money out">
            <p>expenditures are money out. each line: payee, town, date, amount, purpose.</p>
            <p>purpose is where the lying starts. the memo is a label the committee writes itself — it is not proof the spend was for the campaign. read the <b className="text-[#c4c1ba]">payee</b> against the <b className="text-[#c4c1ba]">purpose</b>: when the vendor's business doesn't match a campaign activity, the memo is a question, not an answer.</p>
            <p>campaign funds may not be spent on personal purposes — not groceries, not grooming, not home repair, not gifts. that rule holds no matter what the memo line says.</p>
          </Section>

          <Section n="05" title="loans · borrowed money">
            <p>loans are borrowed money. each line: lender, terms, repayments, balance. candidates often lend to themselves.</p>
            <p>a loan the candidate makes to the campaign is allowed and must be reported with its terms. but the moment a loan is <b className="text-[#c4c1ba]">forgiven</b>, the forgiven amount stops being a loan and becomes a <b className="text-[#c4c1ba]">contribution</b> — it counts toward the limit and must be reported as one. a contribution made "in the guise of a loan" is barred outright.</p>
          </Section>

          <Section n="06" title="thresholds &amp; limits">
            <p>small committees may not file at all. gifts past a threshold must list the donor; larger ones, the employer. in new hampshire every receipt over $50 is itemized with a name and address; over $200 in the aggregate, with an employer and occupation.</p>
            <p>under rsa 664:4, an individual may give up to <b className="text-[#c4c1ba]">$1,000 per election</b> to a candidate committee; a political committee up to <b className="text-[#c4c1ba]">$5,000 per election</b>. the governor's race carries higher limits. (the caps were raised in 2025; older filings ran under the lower limits in force at the time.)</p>
            <p>limits run <b className="text-[#c4c1ba]">per election across the whole cycle</b> — not per line. small gifts from the same donor must be added together before you test them. a loan that is forgiven becomes a contribution, and counts. exceeding the limit is a violation even when the money arrives in pieces.</p>
            <p>federal races run under fec caps instead: a few thousand dollars per election from an individual, $5,000 per election from a pac. a corporation may not give from its treasury to a federal candidate — but its executives may give as individuals, and its pac may give as a committee. both get reported with employer and occupation.</p>
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

          <Section n="08" title="patterns to watch">
            <p>patterns show when you compare. look for:</p>
            <ul className="space-y-1.5 pl-4">
              <li><b className="text-[#c4c1ba]">dates</b> — same-day clusters</li>
              <li><b className="text-[#c4c1ba]">amounts</b> — matched or maxed</li>
              <li><b className="text-[#c4c1ba]">names</b> — repeats, households, shared surnames</li>
              <li><b className="text-[#c4c1ba]">addresses</b> — one address, many names</li>
              <li><b className="text-[#c4c1ba]">employers</b> — who really pays</li>
              <li><b className="text-[#c4c1ba]">entity names</b> — a family of llcs that share a word</li>
              <li><b className="text-[#c4c1ba]">payee vs. purpose</b> — a vendor whose business doesn't match the memo</li>
              <li><b className="text-[#c4c1ba]">loan codes</b> — forgiveness where there should be repayment</li>
            </ul>
            <p>one odd line means nothing. a cluster means a lead.</p>
            <p>a <b className="text-[#c4c1ba]">straw donor</b> is a name used to hide the real giver — one person's money routed through many names to stay under the cap. a <b className="text-[#c4c1ba]">conduit</b> or <b className="text-[#c4c1ba]">shell cluster</b> is the same move through entities instead of people. in both, the disclosed address and employer are what let you see it.</p>
          </Section>

          <Section n="09" title="two ways to work">
            <p>some cases you read line by line and <b className="text-[#c4c1ba]">flag</b> the leads — a flag is a lead, not a conclusion. others are too big to flag by hand.</p>
            <p>for the big ones you work like a spreadsheet: <b className="text-[#c4c1ba]">select</b> the rows that match your question and watch the <b className="text-[#c4c1ba]">running total</b>. use select all, then peel away what doesn't belong — by state, by name, by code. the number you're left with is the answer to the question you asked.</p>
            <p>geography is one question (how much came from outside new hampshire). who pays is another (how much is corporate, executive, or pac money versus small donors). the filing doesn't answer these for you — you select, and it totals.</p>
          </Section>

          <Section n="10" title="finding things">
            <p>use <b className="text-[#c4c1ba]">find on page</b> to pull a name, a state, or a code out of a long filing. search is how you turn a thousand rows into the dozen that matter.</p>
            <p>some leads aren't in the filing at all. a commission roster, an appointee list, a company's officers — those live outside the report, in public records and the press. when a case points beyond the filing, go look it up, then come back and find each name inside the donors.</p>
            <p>cross-reference is the whole craft: one public list against another. the filing gives you the donors; the rest of the record gives you the rest of the story.</p>
          </Section>
        </div>
      </article>
    </main>
  );
}