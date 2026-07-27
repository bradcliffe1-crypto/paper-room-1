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
    filer: "Friends of John Stephen", office: "Exploratory — 2024", period: "04/15/2024 – 11/04/2024",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Stephen's filings look tidy. Too tidy. Find where the money really comes from.",
    briefing: FLAG_BRIEF, legend: LEGEND,
    lines: [
      {id:"l01-01",section:"Receipts",code:"R-ORG",date:"04/15/2024",name:"Child Welfare Safety Solutions LLC",location:"814 Elm Street, Suite 309, Manchester, NH 03101",detail:"Itemized monetary contribution",amount:5000},
      {id:"l01-02",section:"Receipts",code:"R-IND",date:"05/17/2024",name:"Stephen P. Kniaz",location:"35 Jenkins Rd, Lee, NH 03861",detail:"Construction Engineering · Black Birch Development",amount:250},
      {id:"l01-03",section:"Receipts",code:"R-IND",date:"05/28/2024",name:"George Copadis",location:"60 Greenview Dr, Apt 7, Manchester, NH 03102",detail:"Government Civil · NH Employment Security",amount:200},
      {id:"l01-04",section:"Receipts",code:"R-ORG",date:"06/07/2024",name:"Anagnost Investment, Inc.",location:"1662 Elm St, Manchester, NH 03101",detail:"Itemized monetary contribution",amount:5000},
      {id:"l01-05",section:"Receipts",code:"R-ORG",date:"06/21/2024",name:"EQ Staffing LLC",location:"200 Technology Dr, Hooksett, NH 03106",detail:"Itemized monetary contribution",amount:2500},
      {id:"l01-06",section:"Receipts",code:"R-IND",date:"07/01/2024",name:"Kenneth Weyler",location:"23 Scotland Rd, Kingston, NH 03848",detail:"Retired · Retired",amount:250},
      {id:"l01-07",section:"Receipts",code:"R-IND",date:"07/09/2024",name:"Michael Kettenback",location:"925 Central Rd, Rye, NH 03870",detail:"Real Estate Professional · Demoulas",amount:1000},
      {id:"l01-08",section:"Receipts",code:"R-IND",date:"07/10/2024",name:"Friends of John Stephen",location:"814 Elm Street, Suite 309, Manchester, NH 03101",detail:"Retired · Retired",amount:1000},
      {id:"l01-09",section:"Receipts",code:"R-IND",date:"07/17/2024",name:"Deborah Boudreau",location:"21 Roger Rd, Goffstown, NH 03045",detail:"Attorney / Legal · Douglas, Leonard & Garvey PC",amount:100},
      {id:"l01-10",section:"Receipts",code:"R-ORG",date:"07/29/2024",name:"American Property Casualty Insurance Association Political Account",location:"8700 W Bryn Mawr Ave, Suite 12005, Chicago, IL 60631",detail:"Itemized monetary contribution",amount:250},
      {id:"l01-11",section:"Receipts",code:"R-IND",date:"08/19/2024",name:"Scott Workman",location:"54 Yasmin Dr, Gilford, NH 03249",detail:"Other · Retired",amount:200},
      {id:"l01-12",section:"Receipts",code:"R-IND",date:"08/30/2024",name:"Eric Chinburg",location:"184 High Street, Exeter, NH 03833",detail:"Construction Engineering · Chinburg",amount:1000},
      {id:"l01-13",section:"Receipts",code:"R-IND",date:"09/09/2024",name:"Mark Ferdinando",location:"65 Victoria St, Unit 31, Manchester, NH 03104",detail:"Insurance Industry · Cross Insurance",amount:500},
      {id:"l01-14",section:"Receipts",code:"R-ORG",date:"09/14/2024",name:"Paradigm Plumbing Heating and AC Inc",location:"8 Industrial Park Drive, Unit 12, Hooksett, NH 03106",detail:"Itemized monetary contribution",amount:1000},
      {id:"l01-15",section:"Receipts",code:"R-ORG",date:"09/18/2024",name:"Bedford Ambulatory Surgical Center",location:"11 Washington Place, Bedford, NH 03110",detail:"Itemized monetary contribution",amount:1000},
      {id:"l01-16",section:"Receipts",code:"R-IND",date:"09/21/2024",name:"John J. O'Neil",location:"71 Mooar Hill Rd, Hollis, NH 03049",detail:"Environmental Services · Land Surveyor",amount:1000},
      {id:"l01-17",section:"Receipts",code:"R-ORG",date:"09/24/2024",name:"EG Staffing LLC",location:"200 Technology Dr, Hooksett, NH 03106",detail:"Itemized monetary contribution",amount:2000},
      {id:"l01-18",section:"Receipts",code:"R-IND",date:"09/26/2024",name:"Robert CaMann",location:"8 Fieldstone Dr, Hooksett, NH 03106",detail:"General Business · Business Owner",amount:300},
      {id:"l01-19",section:"Receipts",code:"R-IND",date:"09/30/2024",name:"Thomas Moulton",location:"P.O. Box 1975, Hampton, NH 03843",detail:"General Business · Sleepnet Corporation",amount:1000},
      {id:"l01-20",section:"Receipts",code:"R-IND",date:"10/01/2024",name:"Arnold Scott",location:"14 Cortland Dr, Stratham, NH 03885",detail:"Real Estate Professional · Real Estate",amount:100},
      {id:"l01-21",section:"Receipts",code:"R-ORG",date:"10/01/2024",name:"WHIBY 2 HADLEY RD SOUTH PLAINFIELD LLC",location:"150 Venture Dr, Suite 105, Dover, NH 03820",detail:"Itemized monetary contribution",amount:5000,flag:true,why:"One of seven 'WHIBY' shell entities sharing a single registered address — 150 Venture Dr, Dover — and giving the maximum $5,000 on the same day. A fleet of LLCs at one address is a classic front for coordinated giving; trace the true source."},
      {id:"l01-22",section:"Receipts",code:"R-ORG",date:"10/01/2024",name:"WHIBY 1 TONNELLE AVE NORTH BERGEN LLC",location:"150 Venture Dr, Suite 105, Dover, NH 03820",detail:"Itemized monetary contribution",amount:5000,flag:true,why:"Part of the 'WHIBY' cluster: same address (150 Venture Dr, Dover), same date (10/01/2024), maximum $5,000 gift. Flag for source-of-funds review."},
      {id:"l01-23",section:"Receipts",code:"R-ORG",date:"10/01/2024",name:"WHIBY 21151 W ST GEORGE AV LINDEN LLC",location:"150 Venture Dr, Suite 105, Dover, NH 03820",detail:"Itemized monetary contribution",amount:5000,flag:true,why:"Part of the 'WHIBY' cluster: same address (150 Venture Dr, Dover), same date (10/01/2024), maximum $5,000 gift. Flag for source-of-funds review."},
      {id:"l01-24",section:"Receipts",code:"R-IND",date:"10/06/2024",name:"Michael Ogonowski",location:"34 Currier Road, Pelham, NH 03076",detail:"Construction Engineering · LaMontagne Builders",amount:52.4},
      {id:"l01-25",section:"Receipts",code:"R-ORG",date:"10/09/2024",name:"St Christopher Recovery LLC",location:"15 King St, C4, Auburn, NH 03032",detail:"Itemized monetary contribution",amount:500},
      {id:"l01-26",section:"Receipts",code:"R-ORG",date:"10/14/2024",name:"Manchester Police Patrolman's Association",location:"814 Elm St, Suite 513, Manchester, NH 03101",detail:"Itemized monetary contribution",amount:1500},
      {id:"l01-27",section:"Receipts",code:"R-IND",date:"10/17/2024",name:"Mark Geppert",location:"57 Waterloo Cir, Dover, NH 03820",detail:"Unknown · Unknown",amount:250},
      {id:"l01-28",section:"Receipts",code:"R-IND",date:"10/21/2024",name:"Christopher LaBerge",location:"391 Arah St, Manchester, NH 03104",detail:"Business · Safepassage Group",amount:260.73},
      {id:"l01-29",section:"Receipts",code:"R-ORG",date:"10/24/2024",name:"WHIBY 4 EASTON AVE SOMERSET LLC",location:"150 Venture Dr, Suite 105, Dover, NH 03820",detail:"Itemized monetary contribution",amount:2000,flag:true,why:"Part of the 'WHIBY' cluster: same address (150 Venture Dr, Dover) and same date (10/24/2024) as the other Whiby entities. Coordinated giving through shell LLCs — flag for source-of-funds review."},
      {id:"l01-30",section:"Receipts",code:"R-ORG",date:"10/24/2024",name:"WHIBY 5 400 RENASISSANCE BOULEVARD N BRUNSWICK LLC",location:"150 Venture Dr, Suite 105, Dover, NH 03820",detail:"Itemized monetary contribution",amount:2000,flag:true,why:"Part of the 'WHIBY' cluster: same address (150 Venture Dr, Dover) and same date (10/24/2024) as the other Whiby entities. Coordinated giving through shell LLCs — flag for source-of-funds review."},
      {id:"l01-31",section:"Receipts",code:"R-ORG",date:"10/24/2024",name:"WHIBY 7 LLC",location:"150 Venture Dr, Suite 105, Dover, NH 03820",detail:"Itemized monetary contribution",amount:2000,flag:true,why:"Part of the 'WHIBY' cluster: same address (150 Venture Dr, Dover) and same date (10/24/2024) as the other Whiby entities. Coordinated giving through shell LLCs — flag for source-of-funds review."},
      {id:"l01-32",section:"Receipts",code:"R-IND",date:"10/24/2024",name:"WHIBY 6 374 MAIN ST",location:"150 Venture Dr, Suite 105, Dover, NH 03820",detail:"Retired · Retired",amount:2000,flag:true,why:"The individual entry in the 'WHIBY' cluster — a 'retired' donor listing the same registered-agent address (150 Venture Dr, Dover) and date as the Whiby LLCs. Matches a straw-donor pattern; flag for review."},
      {id:"l01-33",section:"Receipts",code:"R-IND",date:"10/28/2024",name:"Travis Blais",location:"12 Coventry Ln, Andover, MA 01810",detail:"Financial / Investment · Millyard Bank",amount:104.48}
    ]
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