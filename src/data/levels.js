// Real investigation levels. `lines` arrays are intentionally empty —
// filing data is supplied per level. `task` is now an incoming DM from
// the operative "Mercer": atmospheric, non-spoiling. The player must
// find the pattern themselves.
//   type "flag"    → flag suspicious line items (1,2,4,5,6,8,10)
//   type "analyze" → spreadsheet research: find rows, select, total (3,7,9)
// For "analyze" levels each matching line gets `answer: true` when data is added.

const LEGEND = [
  { code: "R-IND", label: "Receipt · individual" },
  { code: "R-ORG", label: "Receipt · organization" },
  { code: "R-CAN", label: "Receipt · candidate" },
  { code: "E-ADV", label: "Expenditure · advertising" },
  { code: "E-OPS", label: "Expenditure · operations" },
  { code: "E-OTH", label: "Expenditure · other" },
  { code: "L-REC", label: "Loan received" },
  { code: "L-REP", label: "Loan repayment" },
  { code: "L-FOR", label: "Loan forgiven" }
];

const FLAG_BRIEF = "Read each line. Compare names, dates, amounts, and addresses across the filing. A flag is a lead, not a conclusion.";
const ANALYZE_BRIEF = "Use Find to search the filing. Select matching rows to see a running total, then submit.";

export const levels = [
  {
    id: "l01", number: "01", title: "Fronts", candidate: "John Stephen",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Stephen's filings look tidy. Too tidy. Find where the money really comes from.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: []
  },
  {
    id: "l02", number: "02", title: "Outlays", candidate: "Karen Liot Hill",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Hill burns through cash. Read every expense. Tell me what she's actually buying.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: []
  },
  {
    id: "l03", number: "03", title: "Origins", candidate: "John E. Sununu",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "analyze",
    task: "Sununu says he's one of us. Count the out-of-state money. I want a number.",
    briefing: ANALYZE_BRIEF, analyzeTask: { label: "Out-of-state total", unit: "currency" },
    legend: LEGEND, lines: []
  },
  {
    id: "l04", number: "04", title: "Clipping", candidate: "Kelly Ayotte",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Someone sent me a clipping. Read it. Then read her filing. Whose names show up in both?",
    briefing: "Read the clipping, then the filing. Compare names between them. A flag is a lead, not a conclusion.",
    legend: LEGEND,
    hint: {
      headline: "New appointments to key committee announced",
      source: "Placeholder — replace with actual article",
      date: "Pending",
      body: "A news clipping reporting recent appointments to an important political committee. Use it as a clue to cross-reference names that appear in the filing."
    },
    lines: []
  },
  {
    id: "l05", number: "05", title: "Charges", candidate: "Joe Kenny",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Kenny. Small fish, big spending. Look at what he buys. Something won't sit right.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: []
  },
  {
    id: "l06", number: "06", title: "Venues", candidate: "Kelly Ayotte",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Ayotte again. Money keeps moving through names I can't trace. Follow it.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: []
  },
  {
    id: "l07", number: "07", title: "Affiliations", candidate: "Chris Pappas",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "analyze",
    task: "Pappas has friends. Certain committees. Find them. Total what they gave.",
    briefing: ANALYZE_BRIEF, analyzeTask: { label: "Aligned committee total", unit: "currency" },
    legend: LEGEND, lines: []
  },
  {
    id: "l08", number: "08", title: "Forgiven", candidate: "John Stephen",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Stephen borrowed a lot. Then the borrowing stopped making sense. Look at the loans.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: []
  },
  {
    id: "l09", number: "09", title: "Backers", candidate: "John E. Sununu",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "analyze",
    task: "Same candidate. How much is corporate — executives, PACs — versus real grassroots?",
    briefing: ANALYZE_BRIEF, analyzeTask: { label: "Executive & PAC total", unit: "currency" },
    legend: LEGEND, lines: []
  },
  {
    id: "l10", number: "10", title: "Namesakes", candidate: "Kelly Ayotte",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Ayotte's donors. Read the names. Some of them shouldn't be giving that much.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: []
  },
  {
    id: "l11", number: "11", title: "███", candidate: "[redacted]",
    filer: "Pending filing data", office: "[redacted]", period: "[redacted]",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "The filings you've read were practice. This one isn't. Open it when you're ready.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: [],
    secret: true,
    unlocksWith: ctx => ctx.allBaseComplete && ctx.allMailRead
  },
  {
    id: "l12", number: "12", title: "███", candidate: "[redacted]",
    filer: "Pending filing data", office: "[redacted]", period: "[redacted]",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "You read every filing. Every message. There's one more. It found you.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: [],
    secret: true,
    unlocksWith: ctx => ctx.allBaseComplete && ctx.allMailRead
  },
  {
    id: "l13", number: "13", title: "█", candidate: "[redacted]",
    filer: "Pending filing data", office: "[redacted]", period: "[redacted]",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "You tried to reach everyone. Everyone. Now read the last filing. It reads you back.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: [],
    secret: true,
    unlocksWith: ctx => ctx.l11l12Complete && ctx.emailedAllFour
  }
];