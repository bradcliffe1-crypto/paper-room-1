// Tutorial casebook — five fictional training filings plus one spreadsheet
// primer. Each scenario teaches one skill the desktop cases will demand:
// same-day/one-employer straw clusters, opaque shell entities, repeated
// donor aggregation, personal-use expenditures, candidate pass-through
// loans, and (case 06) selecting and totalling out-of-state money.
// Decoy rows are benign on purpose — the player learns to read past them.

export const fieldManual = {
  id: "field-manual", number: "00", title: "Field Manual", type: "manual",
  goal: "Learn to read a New Hampshire campaign finance filing before you start flagging.",
  lesson: "", legend: [], lines: []
};

export const tutorials = [
  {
    id: "straw-donors", number: "01", title: "Chorus", skill: "Straw donor patterns", difficulty: "Beginner",
    filer: "Holloway for State Senate", office: "State Senate, District 12", period: "04/01/2026 – 06/30/2026",
    report: "Quarterly R&E Report", type: "flag",
    task: "Three names. One day. One number. One employer. That isn't a chorus — it's a mouthpiece. Find them in the receipts.",
    lesson: "Receipts show money in. Compare dates, amounts, addresses, employers, and occupations. A cluster of same-day maximum gifts from one company's employees — or their households — is a straw-donor lead, not proof. Check it together.",
    legend: [{ code: "R-IND", label: "Receipt · individual" }, { code: "R-CAN", label: "Receipt · candidate" }, { code: "R-ORG", label: "Receipt · organization" }],
    lines: [
      { id: "a1", section: "Receipts", code: "R-IND", date: "05/03/2026", name: "Jen Okafor", location: "Concord, NH", detail: "Teacher · Bow Memorial School", amount: 200 },
      { id: "a2", section: "Receipts", code: "R-IND", date: "05/14/2026", name: "Walt Doherty", location: "Nashua, NH", detail: "Retired", amount: 120 },
      { id: "a3", section: "Receipts", code: "R-IND", date: "05/22/2026", name: "Cara Linwood", location: "Hanover, NH", detail: "Architect · Linwood Studio", amount: 300 },
      { id: "a4", section: "Receipts", code: "R-ORG", date: "05/28/2026", name: "NH Homebuilders PAC", location: "Concord, NH", detail: "Registered political committee", amount: 1000 },
      { id: "a5", section: "Receipts", code: "R-IND", date: "06/01/2026", name: "Saul Marsh", location: "1200 Worthen St, Suite 4, Manchester, NH", detail: "Analyst · Crestline Capital", amount: 1000, flag: true, why: "Same day (06/01), identical $1,000 gifts, one employer (Crestline Capital), one suite address — the lead of a coordinated employee cluster. Flag for source/reimbursement review." },
      { id: "a6", section: "Receipts", code: "R-IND", date: "06/01/2026", name: "Nina Marsh", location: "1200 Worthen St, Suite 4, Manchester, NH", detail: "Admin · Crestline Capital", amount: 1000, flag: true, why: "Same household, same day, same employer, same address, same max amount — part of the Crestline cluster. Flag." },
      { id: "a7", section: "Receipts", code: "R-IND", date: "06/01/2026", name: "Owen Pryce", location: "1200 Worthen St, Suite 4, Manchester, NH", detail: "Associate · Crestline Capital", amount: 1000, flag: true, why: "A third Crestline employee at the same suite on the same day for the same maximum — too tidy to be coincidence. Flag." },
      { id: "a8", section: "Receipts", code: "R-IND", date: "06/01/2026", name: "Lila Pryce", location: "1200 Worthen St, Suite 4, Manchester, NH", detail: "Assistant · Crestline Capital", amount: 1000, flag: true, why: "Same surname, same address, same day, same amount — a fourth hand on the same string. Flag the household cluster." },
      { id: "a9", section: "Receipts", code: "R-IND", date: "06/12/2026", name: "Eli Rowan", location: "Keene, NH", detail: "Plumber · Self-employed", amount: 95 },
      { id: "a10", section: "Receipts", code: "R-CAN", date: "06/20/2026", name: "Dale Holloway", location: "Concord, NH", detail: "Candidate contribution", amount: 5000 }
    ]
  },
  {
    id: "shell-org", number: "02", title: "Veneer", skill: "Shell organizations", difficulty: "Beginner",
    filer: "Pemberton for Executive Council", office: "Executive Council, District 4", period: "07/01/2026 – 09/30/2026",
    report: "Quarterly R&E Report", type: "flag",
    task: "One receipt isn't a donor. It's a door. Find the entity that exists only on paper — then ask where the money really walked in from.",
    lesson: "For organization receipts, look past the name. A new or opaque entity, a maildrop address, a missing business purpose, or money that lands the day after formation can justify a source-of-funds trace. A named, registered committee is not the same animal.",
    legend: [{ code: "R-ORG", label: "Receipt · organization" }, { code: "R-IND", label: "Receipt · individual" }, { code: "E-ADV", label: "Expenditure · advertising" }],
    lines: [
      { id: "b1", section: "Receipts", code: "R-IND", date: "07/09/2026", name: "Mira Stoltz", location: "Laconia, NH", detail: "Nurse · Lakes Region Hospital", amount: 150 },
      { id: "b2", section: "Receipts", code: "R-IND", date: "07/15/2026", name: "Ben Arrowood", location: "Portsmouth, NH", detail: "Retired", amount: 250 },
      { id: "b3", section: "Receipts", code: "R-ORG", date: "07/22/2026", name: "Seacoast Restaurant Alliance PAC", location: "Portsmouth, NH", detail: "Registered political committee", amount: 1000 },
      { id: "b4", section: "Receipts", code: "R-IND", date: "07/29/2026", name: "Tess Whitlock", location: "Bedford, NH", detail: "Attorney · Whitlock & Reed", amount: 500 },
      { id: "b5", section: "Receipts", code: "R-ORG", date: "08/02/2026", name: "Granite Horizon Ventures LLC", location: "PO Box 8821, Concord, NH", detail: "Business purpose not disclosed", amount: 9000, flag: true, why: "A maximum organizational gift from an opaque, maildrop-addressed LLC with no stated business purpose — a front for coordinated money. Flag and trace the true source." },
      { id: "b6", section: "Receipts", code: "R-IND", date: "08/09/2026", name: "Marcus Pell", location: "Dover, NH", detail: "Engineer · Self-employed", amount: 300 },
      { id: "b7", section: "Receipts", code: "R-ORG", date: "08/16/2026", name: "Dover Machine Works", location: "Dover, NH", detail: "Itemized monetary contribution", amount: 1500 },
      { id: "b8", section: "Expenditures", code: "E-ADV", date: "09/04/2026", name: "WMUR", location: "Manchester, NH", detail: "Television advertising", amount: 4200 },
      { id: "b9", section: "Expenditures", code: "E-ADV", date: "09/19/2026", name: "Pinnacle Print", location: "Concord, NH", detail: "Door hangers", amount: 640 },
      { id: "b10", section: "Receipts", code: "R-IND", date: "09/24/2026", name: "Dana Price", location: "Salem, NH", detail: "Teacher", amount: 180 }
    ]
  },
  {
    id: "contribution-limit", number: "03", title: "Tally", skill: "Contribution aggregation", difficulty: "Intermediate",
    filer: "Adler for Governor", office: "Governor", period: "01/01/2026 – 03/31/2026",
    report: "Quarterly R&E Report", type: "flag",
    task: "One gift is small. Three from the same hand isn't. Add them before you judge — limits count the total, not the line.",
    lesson: "Limits apply across an election period, not per row. Search for repeated names and aggregate related receipts before you decide whether a line clears the cap. The game marks a review lead; real limits depend on filer, donor, timing, and current law.",
    legend: [{ code: "R-IND", label: "Receipt · individual" }, { code: "R-CAN", label: "Receipt · candidate" }, { code: "R-IN-K", label: "Receipt · in-kind" }],
    lines: [
      { id: "c1", section: "Receipts", code: "R-IND", date: "01/10/2026", name: "Maren Voss", location: "Hanover, NH", detail: "Engineer · Self-employed", amount: 800, flag: true, why: "Voss gives repeatedly across the quarter; each entry must be aggregated ($2,300 total) before testing against the applicable limit. Flag every Voss line." },
      { id: "c2", section: "Receipts", code: "R-IND", date: "01/24/2026", name: "Peter Ames", location: "Laconia, NH", detail: "Retired", amount: 200 },
      { id: "c3", section: "Receipts", code: "R-IND", date: "02/12/2026", name: "Maren Voss", location: "Hanover, NH", detail: "Engineer · Self-employed", amount: 700, flag: true, why: "Second Voss gift — aggregate with the others before judging. Flag." },
      { id: "c4", section: "Receipts", code: "R-IND", date: "02/18/2026", name: "Eli Rowan", location: "Keene, NH", detail: "Electrician · Rowan Electric", amount: 500, flag: true, why: "Rowan appears more than once this period; aggregate before judging. Flag." },
      { id: "c5", section: "Receipts", code: "R-IN-K", date: "02/28/2026", name: "Seacoast Signs", location: "Portsmouth, NH", detail: "In-kind: 40 lawn signs", amount: 350 },
      { id: "c6", section: "Receipts", code: "R-IND", date: "03/05/2026", name: "Eli Rowan", location: "Keene, NH", detail: "Electrician · Rowan Electric", amount: 600, flag: true, why: "Second Rowan gift — same employer, same town. Aggregate before judging. Flag." },
      { id: "c7", section: "Receipts", code: "R-IND", date: "03/14/2026", name: "Noah Beck", location: "Salem, NH", detail: "Retired", amount: 250 },
      { id: "c8", section: "Receipts", code: "R-CAN", date: "03/20/2026", name: "Casey Adler", location: "Concord, NH", detail: "Candidate contribution", amount: 5000 },
      { id: "c9", section: "Receipts", code: "R-IND", date: "03/27/2026", name: "Maren Voss", location: "Hanover, NH", detail: "Engineer · Self-employed", amount: 800, flag: true, why: "Third Voss gift — the aggregate now exceeds what any single line suggests. Flag." },
      { id: "c10", section: "Receipts", code: "R-IND", date: "03/30/2026", name: "Iris Calder", location: "Lebanon, NH", detail: "Designer · Self-employed", amount: 175 }
    ]
  },
  {
    id: "personal-use", number: "04", title: "Detours", skill: "Non-campaign spending", difficulty: "Intermediate",
    filer: "Quinn for State Rep", office: "State Representative, Hillsborough 7", period: "07/01/2026 – 09/30/2026",
    report: "Quarterly R&E Report", type: "flag",
    task: "Every expense has a memo. One is a mask. Find the charge that pays for a life — not a campaign.",
    lesson: "Expenditures should name the payee, date, amount, and a specific campaign purpose. Vague memos and personal-looking vendors deserve scrutiny; context and supporting records decide whether the spend is permissible. A florist for a fundraiser is not the same as a salon.",
    legend: [{ code: "E-ADV", label: "Expenditure · advertising" }, { code: "E-OPS", label: "Expenditure · operations" }, { code: "E-OTH", label: "Expenditure · other" }],
    lines: [
      { id: "d1", section: "Expenditures", code: "E-ADV", date: "07/08/2026", name: "Seacoast Printworks", location: "Portsmouth, NH", detail: "Palm cards · 2,500 units", amount: 785 },
      { id: "d2", section: "Expenditures", code: "E-OPS", date: "07/22/2026", name: "USPS", location: "Portsmouth, NH", detail: "Campaign mailing postage", amount: 410 },
      { id: "d3", section: "Expenditures", code: "E-OPS", date: "07/30/2026", name: "Staples", location: "Manchester, NH", detail: "Office supplies", amount: 86 },
      { id: "d4", section: "Expenditures", code: "E-OTH", date: "08/05/2026", name: "Mirror Salon", location: "Portsmouth, NH", detail: "Grooming", amount: 140, flag: true, why: "Personal grooming at a salon billed to the campaign — a non-campaign expense wearing a thin memo. Flag." },
      { id: "d5", section: "Expenditures", code: "E-OTH", date: "08/16/2026", name: "Summit Ridge Lodge & Spa", location: "Bretton Woods, NH", detail: "Strategy retreat", amount: 3200, flag: true, why: "A costly resort charge with only 'strategy retreat' as its purpose — leisure billed to the campaign. Flag." },
      { id: "d6", section: "Expenditures", code: "E-ADV", date: "08/22/2026", name: "WMUR", location: "Manchester, NH", detail: "Broadcast advertising", amount: 5000 },
      { id: "d7", section: "Expenditures", code: "E-OTH", date: "09/02/2026", name: "Market Corner", location: "Portsmouth, NH", detail: "Volunteer refreshments", amount: 94 },
      { id: "d8", section: "Expenditures", code: "E-OTH", date: "09/10/2026", name: "Bloom & Co Florals", location: "Concord, NH", detail: "Event florals · fundraiser", amount: 210 },
      { id: "d9", section: "Expenditures", code: "E-OTH", date: "09/12/2026", name: "HomeNest Decor", location: "Bedford, NH", detail: "Office décor", amount: 185, flag: true, why: "A home-décor store charged as 'office décor' — a personal purchase dressed as a campaign expense. Flag." },
      { id: "d10", section: "Expenditures", code: "E-OPS", date: "09/19/2026", name: "Meta Platforms", location: "Online", detail: "District-targeted digital ads", amount: 600 },
      { id: "d11", section: "Expenditures", code: "E-OPS", date: "09/25/2026", name: "City Diner", location: "Concord, NH", detail: "Staff meals · 12 people", amount: 144 }
    ]
  },
  {
    id: "loan-loop", number: "05", title: "Revolving", skill: "Loans & self-financing", difficulty: "Advanced",
    filer: "Torres for Mayor", office: "Mayor · Training City", period: "10/01/2026 – 12/31/2026",
    report: "Quarterly R&E Report", type: "flag",
    task: "Money moves in circles, or it vanishes. Read the loans — who lent, from where, and what's still owed.",
    lesson: "Loans create both cash and an obligation. Record the lender, terms, repayments, and balance. Candidate money is not automatically improper, but a candidate-controlled company lending from the candidate's own address, with no terms or identified original source, obscures true financing.",
    legend: [{ code: "L-REC", label: "Loan received" }, { code: "L-REP", label: "Loan repayment" }, { code: "R-CAN", label: "Receipt · candidate" }, { code: "E-ADV", label: "Expenditure · advertising" }],
    lines: [
      { id: "e1", section: "Loans", code: "L-REC", date: "10/03/2026", name: "Rosa Torres", location: "Concord, NH", detail: "Candidate loan · 5% · due 12/31", amount: 12000 },
      { id: "e2", section: "Receipts", code: "R-CAN", date: "10/04/2026", name: "Rosa Torres", location: "Concord, NH", detail: "Candidate contribution", amount: 500 },
      { id: "e3", section: "Loans", code: "L-REC", date: "10/05/2026", name: "Torres Ventures LLC", location: "Same address as candidate", detail: "Loan · terms not disclosed", amount: 20000, flag: true, why: "A candidate-controlled company lending from the candidate's own address, with no terms or identified original source — a pass-through that obscures true financing. Flag." },
      { id: "e4", section: "Loans", code: "L-REP", date: "10/20/2026", name: "Rosa Torres", location: "Concord, NH", detail: "Interest payment on candidate loan", amount: 300 },
      { id: "e5", section: "Loans", code: "L-REC", date: "11/02/2026", name: "Granite Savings Bank", location: "Concord, NH", detail: "Bank loan · 7% · secured", amount: 25000 },
      { id: "e6", section: "Expenditures", code: "E-ADV", date: "11/08/2026", name: "Capital Media", location: "Manchester, NH", detail: "Broadcast advertising", amount: 10500 },
      { id: "e7", section: "Loans", code: "L-REP", date: "11/15/2026", name: "Granite Savings Bank", location: "Concord, NH", detail: "Principal payment on bank loan", amount: 1500 },
      { id: "e8", section: "Loans", code: "L-REP", date: "12/18/2026", name: "Rosa Torres", location: "Concord, NH", detail: "Partial candidate-loan repayment", amount: 3000 },
      { id: "e9", section: "Receipts", code: "R-CAN", date: "12/20/2026", name: "Rosa Torres", location: "Concord, NH", detail: "Candidate contribution", amount: 1000 }
    ]
  },
  {
    id: "out-of-state", number: "06", title: "Sums", skill: "Out-of-state money", difficulty: "Advanced",
    filer: "Whitfield for Governor", office: "Governor", period: "01/01/2026 – 03/31/2026",
    report: "Quarterly R&E Report", type: "analyze",
    task: "Not everyone who gives lives here. Select all, then peel away New Hampshire by hand — what's left is the number that bought the airwaves.",
    lesson: "Some filings are too big to flag line by line. Select rows, watch the running total, and subtract what doesn't belong to your question. Here the question is geography: how much of the money came from outside New Hampshire?",
    legend: [{ code: "R-IND", label: "Receipt · individual" }, { code: "R-ORG", label: "Receipt · organization" }],
    analyzeTask: { label: "Out-of-state total", unit: "currency", groupBy: "state", homeState: "NH" },
    lines: [
      { id: "f01", section: "Receipts", code: "R-IND", date: "01/08/2026", name: "Tom Barker", location: "Manchester, NH", detail: "Retired", amount: 200 },
      { id: "f02", section: "Receipts", code: "R-IND", date: "01/12/2026", name: "Harlan Voss", location: "Boston, MA", detail: "Executive · Voss Holdings", amount: 2000, answer: true },
      { id: "f03", section: "Receipts", code: "R-IND", date: "01/15/2026", name: "Mia Chen", location: "New York, NY", detail: "Finance · Apex Capital", amount: 2800, answer: true },
      { id: "f04", section: "Receipts", code: "R-IND", date: "01/22/2026", name: "Cara Linwood", location: "Hanover, NH", detail: "Architect · Linwood Studio", amount: 300 },
      { id: "f05", section: "Receipts", code: "R-ORG", date: "01/20/2026", name: "Eastern Regional Builders PAC", location: "Hartford, CT", detail: "Registered PAC", amount: 5000, answer: true },
      { id: "f06", section: "Receipts", code: "R-IND", date: "02/02/2026", name: "Owen Pryce", location: "Stamford, CT", detail: "Lawyer · Pryce LLP", amount: 1000, answer: true },
      { id: "f07", section: "Receipts", code: "R-IND", date: "02/10/2026", name: "Eli Rowan", location: "Keene, NH", detail: "Electrician · Rowan Electric", amount: 250 },
      { id: "f08", section: "Receipts", code: "R-IND", date: "02/14/2026", name: "Dana Marsh", location: "Jupiter, FL", detail: "Retired", amount: 1000, answer: true },
      { id: "f09", section: "Receipts", code: "R-ORG", date: "02/18/2026", name: "NH Homebuilders PAC", location: "Concord, NH", detail: "Registered PAC", amount: 1000 },
      { id: "f10", section: "Receipts", code: "R-ORG", date: "02/22/2026", name: "Coastal Energy PAC", location: "Houston, TX", detail: "Registered PAC", amount: 2500, answer: true },
      { id: "f11", section: "Receipts", code: "R-IND", date: "03/01/2026", name: "Mira Stoltz", location: "Laconia, NH", detail: "Nurse · Lakes Region Hospital", amount: 150 },
      { id: "f12", section: "Receipts", code: "R-IND", date: "03/05/2026", name: "Sam Iyer", location: "San Francisco, CA", detail: "Engineer · Self-employed", amount: 500, answer: true },
      { id: "f13", section: "Receipts", code: "R-IND", date: "03/18/2026", name: "Lena Park", location: "Brooklyn, NY", detail: "Designer · Self-employed", amount: 500, answer: true },
      { id: "f14", section: "Receipts", code: "R-IND", date: "03/22/2026", name: "Ben Arrowood", location: "Portsmouth, NH", detail: "Retired", amount: 180 }
    ]
  }
];