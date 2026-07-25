// Real investigation levels. `lines` arrays are intentionally empty —
// filing data will be supplied per level. Each level has a `type`:
//   "flag"    → flag suspicious line items (levels 1,2,4,5,6,8,10)
//   "analyze" → spreadsheet analysis: find rows, select, total (levels 3,7,9)
// For "analyze" levels, each line gets `answer: true` on rows that match the criteria.

export const levels = [
  {
    id: "l01", number: "01", title: "The Whiby Address", candidate: "John Stephen",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Identify the shell organization scheme — multiple organizations sharing one address.",
    briefing: "Shell organizations can funnel money through entities that look independent. Trace shared addresses, vague entity names, and recent formation dates.",
    legend: [{code:"R-ORG",label:"Receipt · organization"},{code:"R-IND",label:"Receipt · individual"},{code:"R-CAN",label:"Receipt · candidate"}],
    lines: []
  },
  {
    id: "l02", number: "02", title: "Questionable Spending", candidate: "Karen Liot Hill",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Flag exorbitant expenditures that appear unrelated to the campaign.",
    briefing: "Expenditures must identify the payee, date, amount, and specific campaign purpose. Vague memos or personal-looking vendors deserve scrutiny.",
    legend: [{code:"E-ADV",label:"Expenditure · advertising"},{code:"E-OPS",label:"Expenditure · operations"},{code:"E-OTH",label:"Expenditure · other"}],
    lines: []
  },
  {
    id: "l03", number: "03", title: "Follow the Money Trail", candidate: "John E. Sununu",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "analyze",
    task: "Opposition research: find all out-of-state contributions and calculate the total. Compare to in-state giving.",
    briefing: "Use Find to search for state abbreviations or city names. Select matching rows to see a running total. This is opposition research — not a compliance flag.",
    searchHint: "Tip: search for state abbreviations (e.g. \"NY\", \"CA\") or known out-of-state cities. Select all visible to total them.",
    analyzeTask: { label: "Out-of-state total", unit: "currency" },
    legend: [{code:"R-IND",label:"Receipt · individual"},{code:"R-ORG",label:"Receipt · organization"}],
    lines: []
  },
  {
    id: "l04", number: "04", title: "Appointments and Favors", candidate: "Kelly Ayotte",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "After reading the news hint, find donors in the filing who were appointed to a political committee — a possible quid pro quo.",
    briefing: "Cross-reference the news article with the filing's donor list. Matching names between appointments and contributors is the lead.",
    legend: [{code:"R-IND",label:"Receipt · individual"},{code:"R-ORG",label:"Receipt · organization"}],
    hint: {
      headline: "Governor announces new COGE appointments",
      source: "Placeholder — replace with actual article",
      date: "Pending",
      body: "A news article celebrating new appointments to a key government efficiency committee. Use it as a hint to cross-reference donor names in the filing."
    },
    lines: []
  },
  {
    id: "l05", number: "05", title: "Questionable Spending", candidate: "Joe Kenny",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Flag exorbitant expenditures that appear unrelated to the campaign.",
    briefing: "Expenditures must identify the payee, date, amount, and specific campaign purpose. Vague memos or personal-looking vendors deserve scrutiny.",
    legend: [{code:"E-ADV",label:"Expenditure · advertising"},{code:"E-OPS",label:"Expenditure · operations"},{code:"E-OTH",label:"Expenditure · other"}],
    lines: []
  },
  {
    id: "l06", number: "06", title: "The Hospitality Shell", candidate: "Kelly Ayotte",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Identify the hospitality shell scheme — organizations or vendors masking the true source or purpose of funds.",
    briefing: "A hospitality shell routes money through hospitality-linked entities to obscure its origin. Look for shared addresses, generic vendors, and round-trip flows.",
    legend: [{code:"R-ORG",label:"Receipt · organization"},{code:"E-OTH",label:"Expenditure · other"},{code:"E-OPS",label:"Expenditure · operations"}],
    lines: []
  },
  {
    id: "l07", number: "07", title: "PACs and Affiliations", candidate: "Chris Pappas",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "analyze",
    task: "Opposition research: find all pro-Israel PACs and affiliated groups/committees, and total their contributions.",
    briefing: "Use Find to search for PAC names, committee names, or keywords. Select matching rows to total them.",
    searchHint: "Tip: search for keywords like \"Israel\", \"PAC\", or committee names. Select all visible to total them.",
    analyzeTask: { label: "Pro-Israel PAC total", unit: "currency" },
    legend: [{code:"R-ORG",label:"Receipt · organization"},{code:"R-IND",label:"Receipt · individual"}],
    lines: []
  },
  {
    id: "l08", number: "08", title: "Forgiven Debts", candidate: "John Stephen",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Identify exorbitant and suspicious loan forgiveness — legal but questionable.",
    briefing: "Loan forgiveness can effectively convert a loan into a contribution. Large or pattern-forgiven loans deserve scrutiny even when technically legal.",
    legend: [{code:"L-REC",label:"Loan received"},{code:"L-REP",label:"Loan repayment"},{code:"L-FOR",label:"Loan forgiven"}],
    lines: []
  },
  {
    id: "l09", number: "09", title: "Corporate vs Grassroots", candidate: "John E. Sununu",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "analyze",
    task: "Opposition research: calculate how much came from corporate executives and PACs versus grassroots donations.",
    briefing: "Use Find to search for employer names, executive titles, or PAC names. Select matching rows to total corporate/PAC giving, then compare to the rest.",
    searchHint: "Tip: search for titles like \"CEO\", \"President\", \"Executive\" or PAC names. Select all visible to total them.",
    analyzeTask: { label: "Corporate exec & PAC total", unit: "currency" },
    legend: [{code:"R-IND",label:"Receipt · individual"},{code:"R-ORG",label:"Receipt · organization"}],
    lines: []
  },
  {
    id: "l10", number: "10", title: "The Nucar Connection", candidate: "Kelly Ayotte",
    filer: "Pending filing data", office: "Pending filing data", period: "Pending filing data",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Identify the Nucar dealership scheme and associated straw donor activity.",
    briefing: "Straw donors reimburse individuals to contribute in their own names. Look for clusters of same-day, same-amount gifts sharing an employer or address — here linked to a dealership.",
    legend: [{code:"R-IND",label:"Receipt · individual"},{code:"R-ORG",label:"Receipt · organization"}],
    lines: []
  }
];