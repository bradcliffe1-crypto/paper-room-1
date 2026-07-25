// Real investigation levels. `lines` arrays are intentionally empty —
// filing data is supplied per level. Titles and tasks are deliberately
// cryptic to preserve the mystery; the player must find the pattern.
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
    task: "Some entries share more than they should. Flag what warrants a closer look.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: []
  },
  {
    id: "l02", number: "02", title: "Outlays", candidate: "Karen Liot Hill",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Not every expense serves the campaign. Flag what warrants a closer look.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: []
  },
  {
    id: "l03", number: "03", title: "Origins", candidate: "John E. Sununu",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "analyze",
    task: "How much of this money came from out of state? Find it and total it.",
    briefing: ANALYZE_BRIEF, analyzeTask: { label: "Out-of-state total", unit: "currency" },
    legend: LEGEND, lines: []
  },
  {
    id: "l04", number: "04", title: "Clipping", candidate: "Kelly Ayotte",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "A news clipping precedes this filing. Cross-reference it. Flag what warrants a closer look.",
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
    task: "Not every expense serves the campaign. Flag what warrants a closer look.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: []
  },
  {
    id: "l06", number: "06", title: "Venues", candidate: "Kelly Ayotte",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Some entries share more than they should. Flag what warrants a closer look.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: []
  },
  {
    id: "l07", number: "07", title: "Affiliations", candidate: "Chris Pappas",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "analyze",
    task: "Which committees and affiliated groups align? Find them and total their giving.",
    briefing: ANALYZE_BRIEF, analyzeTask: { label: "Aligned committee total", unit: "currency" },
    legend: LEGEND, lines: []
  },
  {
    id: "l08", number: "08", title: "Forgiven", candidate: "John Stephen",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Some debts quietly disappear. Flag what warrants a closer look.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: []
  },
  {
    id: "l09", number: "09", title: "Backers", candidate: "John E. Sununu",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "analyze",
    task: "How much came from executives and PACs versus grassroots? Find it and total it.",
    briefing: ANALYZE_BRIEF, analyzeTask: { label: "Executive & PAC total", unit: "currency" },
    legend: LEGEND, lines: []
  },
  {
    id: "l10", number: "10", title: "Namesakes", candidate: "Kelly Ayotte",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Some donors share more than a name. Flag what warrants a closer look.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: []
  }
];