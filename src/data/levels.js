import { level01Lines } from "@/data/level01Data";
import { level03Lines } from "@/data/level03Data";
import { level04Lines } from "@/data/level04Data";
import { level05Lines } from "@/data/level05Data";
import { level06Lines } from "@/data/level06Data";
import { level07Lines } from "@/data/level07Data";
import { level08Lines } from "@/data/level08Data";
import { level09Lines } from "@/data/level09Data";
import { level10Lines } from "@/data/level10Data";

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
    task: "Stephen's filings look tidy. Too tidy. Read the receipts — watch for a cluster of maxed-out gifts from different companies at one address, all on the same day. That's where the money really comes from.",
    briefing: FLAG_BRIEF, legend: LEGEND,
    lines: level01Lines
  },
  {
    id: "l02", number: "02", title: "Outlays", candidate: "Karen Liot Hill",
    filer: "Karen Liot Hill for Executive Council District 2", office: "Executive Council, District 2", period: "12/06/2023 – 11/13/2024",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Hill burns through cash. Read every expense. Some payees don't match the memo — a salon, a grocery run, a gift. Tell me what she's actually buying, not what it says she bought.",
    briefing: FLAG_BRIEF, legend: LEGEND,
    lines: [
      {id:"l02-01",section:"Expenditures",code:"E-OPS",date:"12/04/2023",name:"ActBlue",location:"366 Summer St, Somerville, MA 02144",detail:"Credit Card Processing",amount:139.74},
      {id:"l02-02",section:"Expenditures",code:"E-OTH",date:"01/22/2024",name:"New Hampshire Liquor & Wine",location:"12 Centerra Parkway, Lebanon, NH 03766",detail:"Beverages for Fundraiser",amount:198.28},
      {id:"l02-03",section:"Expenditures",code:"E-OTH",date:"02/14/2024",name:"Salt Hill Pub",location:"2 W Park St, Lebanon, NH 03766",detail:"Food for Fundraiser",amount:509.48},
      {id:"l02-04",section:"Expenditures",code:"E-OPS",date:"02/20/2024",name:"Irving",location:"85 NH-9, West Chesterfield, NH 03466",detail:"Gas",amount:48.25},
      {id:"l02-f1",section:"Expenditures",code:"E-OTH",date:"02/22/2024",name:"Vermont Fuel Co",location:"White River Junction, VT",detail:"Furnace tuneup",amount:250,flag:true,why:"A $250 payment to a Vermont heating-oil company for an annual furnace tuneup — home heating maintenance, not a campaign cost. Flag."},
      {id:"l02-05",section:"Expenditures",code:"E-OTH",date:"02/23/2024",name:"Rum Brook Market",location:"249 Rt 10 N, Grantham, NH 03753",detail:"Gas",amount:48.47,flag:true,why:"The payee is a grocery market, not a gas station. A 'Gas' charge at a market is a thin label over what may be a personal grocery purchase. Flag for review."},
      {id:"l02-06",section:"Expenditures",code:"E-OPS",date:"03/01/2024",name:"Cheers Restaurant",location:"17 Depot St, Concord, NH 03301",detail:"Meals",amount:13.95},
      {id:"l02-07",section:"Expenditures",code:"E-OPS",date:"03/20/2024",name:"McDonalds",location:"4 Nichols Mill Lane, Warner, NH 03278",detail:"Meals",amount:11.69},
      {id:"l02-08",section:"Expenditures",code:"E-OPS",date:"03/21/2024",name:"Poorhouse Tavern",location:"19 Bean Rd, Plainfield, NH 03781",detail:"Meals",amount:29.54},
      {id:"l02-09",section:"Expenditures",code:"E-OTH",date:"03/27/2024",name:"Ariston Floral",location:"Lexington Ave, New York, NY",detail:"Flowers",amount:190.53},
      {id:"l02-10",section:"Expenditures",code:"E-OPS",date:"03/28/2024",name:"Common Man Roadside",location:"25 Springer Rd, Hooksett, NH 03106",detail:"Meals",amount:70.55},
      {id:"l02-11",section:"Expenditures",code:"E-OTH",date:"04/04/2024",name:"River Valley Club",location:"Lebanon, NH 03766",detail:"Salon Services",amount:148,flag:true,why:"A social club charging the campaign for 'Salon Services' — personal grooming billed to campaign funds. Flag as a non-campaign expenditure."},
      {id:"l02-f2",section:"Expenditures",code:"E-OTH",date:"04/05/2024",name:"NH Dept of Motor Vehicles",location:"Concord, NH",detail:"Car registration",amount:181,flag:true,why:"Personal car registration paid with campaign funds — a personal vehicle cost. Flag."},
      {id:"l02-12",section:"Expenditures",code:"E-OPS",date:"04/08/2024",name:"American Airlines",location:"PO Box 619616, DFW Airport, TX",detail:"Travel",amount:346.76},
      {id:"l02-13",section:"Expenditures",code:"E-OTH",date:"04/12/2024",name:"Aldi",location:"Alexandria, VA",detail:"Meal",amount:57.76},
      {id:"l02-f3",section:"Expenditures",code:"E-OTH",date:"04/13/2024",name:"Cross Sound Ferry",location:"Orient Point, NY",detail:"Ferry to Orient Point",amount:190,flag:true,why:"A ferry ride to the Hamptons — personal travel to a vacation area, not a campaign cost. Flag."},
      {id:"l02-14",section:"Expenditures",code:"E-OPS",date:"04/13/2024",name:"Jiffy Mart",location:"96 Hanover St, Lebanon, NH 03766",detail:"Gas",amount:36.97},
      {id:"l02-14a",section:"Expenditures",code:"E-OTH",date:"04/25/2024",name:"HomeGoods",location:"1248 N Plainfield Rd, West Lebanon, NH",detail:"Hostess Gifts",amount:34.95},
      {id:"l02-f4",section:"Expenditures",code:"E-OTH",date:"04/26/2024",name:"TJ Maxx",location:"West Lebanon, NH",detail:"Clothing",amount:412.50,flag:true,why:"Clothing purchased at a discount retailer — personal subsistence, not a campaign expense. Flag."},
      {id:"l02-15",section:"Expenditures",code:"E-OPS",date:"05/03/2024",name:"Circle K",location:"89 Main Street, West Lebanon, NH 03784",detail:"Gas",amount:54.59},
      {id:"l02-16",section:"Expenditures",code:"E-ADV",date:"06/20/2024",name:"Staples",location:"254 N Plainfield Rd, West Lebanon, NH",detail:"Photocopies",amount:11.51},
      {id:"l02-17",section:"Expenditures",code:"E-OPS",date:"06/20/2024",name:"Citgo",location:"89 Main Street, West Lebanon, NH",detail:"Gas",amount:54.02},
      {id:"l02-18",section:"Expenditures",code:"E-OTH",date:"07/05/2024",name:"Walmart",location:"285 N Plainfield Rd, West Lebanon, NH",detail:"Flags for Parades",amount:166},
      {id:"l02-19",section:"Expenditures",code:"E-OTH",date:"07/08/2024",name:"Dollar General",location:"1024 US-4, Canaan, NH",detail:"Candy for Parade",amount:15.45},
      {id:"l02-20",section:"Expenditures",code:"E-OPS",date:"07/15/2024",name:"Sunoco",location:"260 Mechanic Street, Lebanon, NH",detail:"Gas",amount:73.25},
      {id:"l02-21",section:"Expenditures",code:"E-OPS",date:"07/26/2024",name:"Dunkin Donuts",location:"96 Hanover St, Lebanon, NH 03766",detail:"Meals",amount:7.14},
      {id:"l02-22",section:"Expenditures",code:"E-ADV",date:"07/29/2024",name:"Staples",location:"254 N Plainfield Rd, West Lebanon, NH",detail:"Postcards",amount:179.18},
      {id:"l02-f5",section:"Expenditures",code:"E-OTH",date:"07/30/2024",name:"Granite Home Cleaning",location:"Lebanon, NH",detail:"House cleaning",amount:135,flag:true,why:"House cleaning service billed to the campaign — personal home maintenance. Flag."},
      {id:"l02-23",section:"Expenditures",code:"E-OPS",date:"08/08/2024",name:"Cumberland Farms",location:"196 N Main St, Concord, NH 03301",detail:"Gas",amount:54.88},
      {id:"l02-24",section:"Expenditures",code:"E-OPS",date:"08/19/2024",name:"Panera Bread",location:"267 N Plainfield Rd, West Lebanon, NH",detail:"Meals",amount:34.11},
      {id:"l02-26",section:"Expenditures",code:"E-ADV",date:"09/11/2024",name:"e stone Press",location:"520 E Industrial Park Dr, Manchester, NH",detail:"Mailing",amount:3713.93},
      {id:"l02-27",section:"Expenditures",code:"E-OTH",date:"09/16/2024",name:"Luxury Nails",location:"410 Miracle Mile, Lebanon, NH 03766",detail:"Salon Services",amount:117,flag:true,why:"A nail salon charging the campaign for 'Salon Services' — personal grooming, not a campaign expense. Flag."},
      {id:"l02-f6",section:"Expenditures",code:"E-OTH",date:"09/17/2024",name:"Concord Urgent Care",location:"Concord, NH",detail:"Urgent care visit",amount:89},
      {id:"l02-28",section:"Expenditures",code:"E-OPS",date:"10/18/2024",name:"Double Tree Radisson",location:"700 Elm St, Manchester, NH",detail:"Travel",amount:276.25}
    ]
  },
  {
    id: "l03", number: "03", title: "Origins", candidate: "John E. Sununu",
    filer: "Sununu Senator", office: "U.S. Senate — New Hampshire", period: "01/01/2026 – 03/31/2026",
    report: "April Quarterly Report (FEC Form 3N)", type: "analyze",
    task: "Sununu says he's one of us. Count the out-of-state money. Select everything, then peel away New Hampshire — I want the number that's left.",
    briefing: ANALYZE_BRIEF, analyzeTask: { label: "Out-of-state total", unit: "currency", groupBy: "state", homeState: "NH" },
    legend: LEGEND, lines: level03Lines
  },
  {
    id: "l04", number: "04", title: "Clipping", candidate: "Kelly Ayotte",
    filer: "Kelly for New Hampshire", office: "Governor — New Hampshire", period: "01/01/2024 – 11/05/2024",
    report: "Statement of Receipts and Expenditures (RSA 664)", type: "flag",
    task: "Ayotte's first move was a commission — COGE, government efficiency. Who was appointed? Something doesn't sit right.",
    briefing: "A flag is a lead, not a conclusion.",
    legend: LEGEND,
    findOnPage: true,
    lines: level04Lines
  },
  {
    id: "l05", number: "05", title: "Charges", candidate: "Joe Kenny",
    filer: "Friends of Joe Kenny", office: "State Senate — District 6", period: "06/01/2024 – 11/05/2024",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Kenny. Read the expenses. You learned in training what a real campaign buys — and what it doesn't. Some of these charges aren't campaign expenditures at all. Flag what shouldn't be there.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: level05Lines
  },
  {
    id: "l06", number: "06", title: "Venues", candidate: "Kelly Ayotte",
    filer: "Kelly for New Hampshire", office: "Governor — New Hampshire", period: "06/01/2024 – 08/21/2024",
    report: "Statement of Receipts and Expenditures (RSA 664)", type: "flag",
    task: "Ayotte again. A stack of maxed-out receipts, all on one day. Read the organizations — and ask who's really behind them.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: level06Lines
  },
  {
    id: "l07", number: "07", title: "Affiliations", candidate: "Chris Pappas",
    filer: "Chris Pappas for Senate", office: "U.S. Senate — New Hampshire", period: "01/01/2025 – 03/31/2026",
    report: "Quarterly & Year-End Reports (FEC Form 3)", type: "analyze",
    task: "Pappas has friends. Certain committees give again and again — the pro-Israel ones. Find them by name, total what they gave.",
    briefing: ANALYZE_BRIEF, analyzeTask: { label: "Pro-Israel committee total", unit: "currency" },
    legend: LEGEND, lines: level07Lines
  },
  {
    id: "l08", number: "08", title: "Forgiven", candidate: "John Stephen",
    filer: "Friends of John Stephen", office: "Exploratory — 2024", period: "04/15/2024 – 05/30/2025",
    report: "Receipt & Expenditure Report", type: "flag",
    task: "Stephen borrowed a lot. Then the borrowing stopped making sense. Read the loans — who forgave what, and when. Same day is the tell.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: level08Lines
  },
  {
    id: "l09", number: "09", title: "Backers", candidate: "John E. Sununu",
    filer: "Sununu Senator", office: "U.S. Senate — New Hampshire", period: "10/22/2025 – 03/31/2026",
    report: "Year-End 2025 & April Quarterly 2026 (FEC Form 3)", type: "analyze",
    task: "Same candidate. How much is corporate — executives and PACs — versus real grassroots? Select the suits, total them.",
    briefing: ANALYZE_BRIEF, analyzeTask: { label: "Executive & PAC total", unit: "currency" },
    legend: LEGEND, lines: level09Lines
  },
  {
    id: "l10", number: "10", title: "Namesakes", candidate: "Kelly Ayotte",
    filer: "Kelly for New Hampshire", office: "Governor — New Hampshire", period: "01/22/2024 – 10/16/2024",
    report: "Statement of Receipts and Expenditures (RSA 664)", type: "flag",
    task: "Ayotte's donors. Read the names. Some shouldn't be giving that much. Watch for one employer, one address, one day — and a lot of maxed-out checks.",
    briefing: FLAG_BRIEF, legend: LEGEND, lines: level10Lines
  }
];