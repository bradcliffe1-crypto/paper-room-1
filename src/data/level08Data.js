// Level 08 — "Forgiven" · John Stephen
// Source: Friends of John Stephen filing. The flagged set is every "Loan
// Forgiven" receipt posted on 05/30/2025 by the candidate's own committee
// (Friends of John Stephen, 814 Elm Street, Suite 309, Manchester, NH 03101).
// Under NH law a candidate may lend and forgive his own campaign money — there
// is no explicit violation here. The story is the optics: ten same-day
// forgiveness entries, each carrying a $0.00 aggregate, show a candidate
// quietly erasing tens of thousands of his own debt through the campaign
// vehicle. Legal, but the kind of thing regular voters wouldn't love — oppo
// worth a reporter's time, not a charge. Decoys are simulated benign
// 2024–2025 receipts, expenditures, and ordinary loan activity (loan received,
// loan repayment) interleaved between the flags.
// Several same-day (05/30/2025) decoys — legitimate receipts and expenditures
// dated 05/30 — force the player to read the line type, not just the date.
// The ten L-FOR flags are dispersed across the tail of the filing with 2–3
// benign rows between each, so the cluster can't be caught by scanning one
// contiguous block.

const FORGIVEN_WHY = "Not a violation — a candidate may forgive his own loans. But ten same-day forgiveness entries, each carrying a $0.00 aggregate, show a candidate quietly erasing his own debt through the campaign. Legal, and exactly the kind of thing voters wouldn't love. Flag for oppo.";

export const level08Lines = [
  { id: "l08-01", section: "Receipts", code: "R-IND", date: "04/15/2024", name: "Stephen P. Kniaz", location: "35 Jenkins Rd, Lee, NH 03861", detail: "Construction Engineering · Black Birch Development", amount: 250 },
  { id: "l08-02", section: "Receipts", code: "R-ORG", date: "04/15/2024", name: "Child Welfare Safety Solutions LLC", location: "814 Elm Street, Suite 309, Manchester, NH 03101", detail: "Itemized monetary contribution", amount: 5000 },
  { id: "l08-03", section: "Loans", code: "L-REC", date: "04/22/2024", name: "John Stephen", location: "814 Elm Street, Suite 309, Manchester, NH 03101", detail: "Candidate loan · 0% · due 12/31/2026", amount: 20000 },
  { id: "l08-04", section: "Expenditures", code: "E-ADV", date: "04/30/2024", name: "NH Journal Media", location: "Concord, NH", detail: "Digital advertising", amount: 3200 },
  { id: "l08-05", section: "Receipts", code: "R-IND", date: "05/17/2024", name: "George Copadis", location: "60 Greenview Dr, Apt 7, Manchester, NH 03102", detail: "Government Civil · NH Employment Security", amount: 200 },
  { id: "l08-06", section: "Receipts", code: "R-ORG", date: "06/07/2024", name: "Anagnost Investment, Inc.", location: "1662 Elm St, Manchester, NH 03101", detail: "Itemized monetary contribution", amount: 5000 },
  { id: "l08-07", section: "Expenditures", code: "E-OPS", date: "06/15/2024", name: "Comcast", location: "Manchester, NH", detail: "Office internet", amount: 129.99 },
  { id: "l08-08", section: "Receipts", code: "R-IND", date: "07/01/2024", name: "Kenneth Weyler", location: "23 Scotland Rd, Kingston, NH 03848", detail: "Retired · Retired", amount: 250 },
  { id: "l08-09", section: "Receipts", code: "R-IND", date: "07/09/2024", name: "Michael Kettenback", location: "925 Central Rd, Rye, NH 03870", detail: "Real Estate Professional · Demoulas", amount: 1000 },
  { id: "l08-10", section: "Expenditures", code: "E-ADV", date: "07/20/2024", name: "WMUR", location: "Manchester, NH", detail: "Television advertising", amount: 12500 },
  { id: "l08-d01", section: "Receipts", code: "R-IND", date: "08/05/2024", name: "Scott Workman", location: "54 Yasmin Dr, Gilford, NH 03249", detail: "Other · Retired", amount: 200 },
  { id: "l08-d02", section: "Receipts", code: "R-IND", date: "08/30/2024", name: "Robert CaMann", location: "8 Fieldstone Dr, Hooksett, NH 03106", detail: "General Business · Business Owner", amount: 300 },
  { id: "l08-11", section: "Receipts", code: "R-ORG", date: "09/14/2024", name: "Paradigm Plumbing Heating and AC Inc", location: "8 Industrial Park Drive, Unit 12, Hooksett, NH 03106", detail: "Itemized monetary contribution", amount: 1000 },
  { id: "l08-12", section: "Expenditures", code: "E-OPS", date: "09/20/2024", name: "Staples", location: "Manchester, NH", detail: "Office supplies", amount: 214.36 },
  { id: "l08-d03", section: "Receipts", code: "R-IND", date: "09/26/2024", name: "Thomas Moulton", location: "P.O. Box 1975, Hampton, NH 03843", detail: "General Business · Sleepnet Corporation", amount: 1000 },
  { id: "l08-13", section: "Receipts", code: "R-IND", date: "10/01/2024", name: "Arnold Scott", location: "14 Cortland Dr, Stratham, NH 03885", detail: "Real Estate Professional · Real Estate", amount: 100 },
  { id: "l08-d04", section: "Receipts", code: "R-IND", date: "10/06/2024", name: "Michael Ogonowski", location: "34 Currier Road, Pelham, NH 03076", detail: "Construction Engineering · LaMontagne Builders", amount: 52.40 },
  { id: "l08-14", section: "Receipts", code: "R-IND", date: "10/17/2024", name: "Mark Geppert", location: "57 Waterloo Cir, Dover, NH 03820", detail: "Other · Other", amount: 250 },
  { id: "l08-15", section: "Expenditures", code: "E-OTH", date: "10/28/2024", name: "Post Office", location: "Manchester, NH", detail: "Campaign mailing postage", amount: 640.18 },
  { id: "l08-16", section: "Loans", code: "L-REP", date: "11/04/2024", name: "John Stephen", location: "814 Elm Street, Suite 309, Manchester, NH 03101", detail: "Partial candidate-loan repayment", amount: 5000 },
  { id: "l08-17", section: "Expenditures", code: "E-OPS", date: "11/04/2024", name: "Verizon", location: "Manchester, NH", detail: "Phone service", amount: 89.50 },
  { id: "l08-18", section: "Receipts", code: "R-IND", date: "11/04/2024", name: "Deborah Boudreau", location: "21 Roger Rd, Goffstown, NH 03045", detail: "Attorney / Legal · Douglas, Leonard & Garvey PC", amount: 100 },
  { id: "l08-d05", section: "Expenditures", code: "E-OPS", date: "11/15/2024", name: "Dunkin Donuts", location: "96 Hanover St, Lebanon, NH 03766", detail: "Meals", amount: 24.50 },
  { id: "l08-d06", section: "Receipts", code: "R-IND", date: "12/10/2024", name: "John J. O'Neil", location: "71 Mooar Hill Rd, Hollis, NH 03049", detail: "Environmental Services · Land Surveyor", amount: 1000 },
  { id: "l08-d07", section: "Expenditures", code: "E-ADV", date: "01/15/2025", name: "e stone Press", location: "520 E Industrial Park Dr, Manchester, NH", detail: "Mailing", amount: 3713.93 },
  { id: "l08-d08", section: "Receipts", code: "R-IND", date: "02/03/2025", name: "Mark Ferdinando", location: "65 Victoria St, Unit 31, Manchester, NH 03104", detail: "Insurance Industry · Cross Insurance", amount: 500 },
  { id: "l08-d09", section: "Expenditures", code: "E-OPS", date: "02/20/2025", name: "Irving", location: "85 NH-9, West Chesterfield, NH 03466", detail: "Gas", amount: 48.25 },
  { id: "l08-d10", section: "Receipts", code: "R-ORG", date: "03/05/2025", name: "Bedford Ambulatory Surgical Center", location: "11 Washington Place, Bedford, NH 03110", detail: "Itemized monetary contribution", amount: 1000 },
  { id: "l08-40", section: "Expenditures", code: "E-ADV", date: "03/20/2025", name: "Signwave Co", location: "Manchester, NH", detail: "Yard signs · 1,000 units", amount: 1300 },
  { id: "l08-d11", section: "Expenditures", code: "E-OPS", date: "03/28/2025", name: "Panera Bread", location: "267 N Plainfield Rd, West Lebanon, NH", detail: "Meals", amount: 34.11 },
  { id: "l08-39", section: "Receipts", code: "R-IND", date: "04/15/2025", name: "Carol Ashton", location: "12 Pinecrest Dr, Bedford, NH 03110", detail: "Retired · Retired", amount: 200 },
  { id: "l08-d12", section: "Receipts", code: "R-IND", date: "04/10/2025", name: "Christopher LaBerge", location: "391 Arah St, Manchester, NH 03104", detail: "Business · Safepassage Group", amount: 260.73 },
  { id: "l08-d13", section: "Expenditures", code: "E-OTH", date: "04/22/2025", name: "Walmart", location: "285 N Plainfield Rd, West Lebanon, NH", detail: "Flags for Parades", amount: 166 },
  { id: "l08-34", section: "Receipts", code: "R-IND", date: "05/05/2025", name: "Thomas Peabody", location: "14 River Rd, Exeter, NH 03833", detail: "Retired · Retired", amount: 250 },
  { id: "l08-d14", section: "Receipts", code: "R-IND", date: "05/02/2025", name: "Travis Blais", location: "12 Coventry Ln, Andover, MA 01810", detail: "Financial / Investment · Millyard Bank", amount: 104.48 },
  { id: "l08-35", section: "Expenditures", code: "E-OPS", date: "05/12/2025", name: "Staples", location: "Manchester, NH", detail: "Office supplies", amount: 178.40 },
  { id: "l08-19", section: "Loans", code: "L-FOR", date: "05/30/2025", name: "Friends of John Stephen", location: "814 Elm Street, Suite 309, Manchester, NH 03101", detail: "Loan forgiven · aggregate $0.00", amount: 250, flag: true, why: FORGIVEN_WHY },
  { id: "l08-d15", section: "Expenditures", code: "E-OPS", date: "05/15/2025", name: "Cumberland Farms", location: "196 N Main St, Concord, NH 03301", detail: "Gas", amount: 54.88 },
  { id: "l08-d24", section: "Receipts", code: "R-IND", date: "05/30/2025", name: "Robert King", location: "8 Oakwood Dr, Salem, NH 03079", detail: "Retired · Retired", amount: 100 },
  { id: "l08-36", section: "Receipts", code: "R-IND", date: "05/20/2025", name: "Eric Chinburg", location: "184 High Street, Exeter, NH 03833", detail: "Construction Engineering · Chinburg", amount: 1000 },
  { id: "l08-20", section: "Loans", code: "L-FOR", date: "05/30/2025", name: "Friends of John Stephen", location: "814 Elm Street, Suite 309, Manchester, NH 03101", detail: "Loan forgiven · aggregate $0.00", amount: 1500, flag: true, why: FORGIVEN_WHY },
  { id: "l08-d16", section: "Receipts", code: "R-IND", date: "05/22/2025", name: "Susan Hadley", location: "33 Pleasant St, Concord, NH 03301", detail: "Teacher · Concord School District", amount: 100 },
  { id: "l08-d25", section: "Expenditures", code: "E-OPS", date: "05/30/2025", name: "Verizon", location: "Manchester, NH", detail: "Phone service", amount: 89.50 },
  { id: "l08-37", section: "Loans", code: "L-REP", date: "05/28/2025", name: "John Stephen", location: "814 Elm Street, Suite 309, Manchester, NH 03101", detail: "Interest payment on candidate loan", amount: 320 },
  { id: "l08-21", section: "Loans", code: "L-FOR", date: "05/30/2025", name: "Friends of John Stephen", location: "814 Elm Street, Suite 309, Manchester, NH 03101", detail: "Loan forgiven · aggregate $0.00", amount: 1000, flag: true, why: FORGIVEN_WHY },
  { id: "l08-d17", section: "Receipts", code: "R-IND", date: "05/29/2025", name: "Frank DeLuca", location: "47 Main St, Nashua, NH 03060", detail: "Restaurant Owner · Self-employed", amount: 500 },
  { id: "l08-d26", section: "Receipts", code: "R-IND", date: "05/30/2025", name: "Linda Marsh", location: "224 Pine St, Manchester, NH 03103", detail: "Teacher · Manchester School District", amount: 150 },
  { id: "l08-23", section: "Loans", code: "L-FOR", date: "05/30/2025", name: "Friends of John Stephen", location: "814 Elm Street, Suite 309, Manchester, NH 03101", detail: "Loan forgiven · aggregate $0.00", amount: 2000, flag: true, why: FORGIVEN_WHY },
  { id: "l08-d22", section: "Receipts", code: "R-IND", date: "05/30/2025", name: "James Donnelly", location: "14 Meetinghouse Rd, Bedford, NH 03110", detail: "Retired · Retired", amount: 100 },
  { id: "l08-d27", section: "Expenditures", code: "E-ADV", date: "05/30/2025", name: "Union Leader", location: "Manchester, NH", detail: "Print advertising", amount: 750 },
  { id: "l08-24", section: "Loans", code: "L-FOR", date: "05/30/2025", name: "Friends of John Stephen", location: "814 Elm Street, Suite 309, Manchester, NH 03101", detail: "Loan forgiven · aggregate $0.00", amount: 2500, flag: true, why: FORGIVEN_WHY },
  { id: "l08-d23", section: "Expenditures", code: "E-OPS", date: "05/30/2025", name: "Staples", location: "Manchester, NH", detail: "Office supplies", amount: 89.99 },
  { id: "l08-d18", section: "Expenditures", code: "E-OPS", date: "06/01/2025", name: "UPS", location: "Manchester, NH", detail: "Shipping", amount: 67.40 },
  { id: "l08-26", section: "Loans", code: "L-FOR", date: "05/30/2025", name: "Friends of John Stephen", location: "814 Elm Street, Suite 309, Manchester, NH 03101", detail: "Loan forgiven · aggregate $0.00", amount: 3000, flag: true, why: FORGIVEN_WHY },
  { id: "l08-38", section: "Expenditures", code: "E-ADV", date: "06/05/2025", name: "WMUR", location: "Manchester, NH", detail: "Television advertising", amount: 8200 },
  { id: "l08-d28", section: "Receipts", code: "R-IND", date: "05/30/2025", name: "David Pratt", location: "67 Mill Rd, Derry, NH 03038", detail: "Engineer · Self-employed", amount: 250 },
  { id: "l08-28", section: "Loans", code: "L-FOR", date: "05/30/2025", name: "Friends of John Stephen", location: "814 Elm Street, Suite 309, Manchester, NH 03101", detail: "Loan forgiven · aggregate $0.00", amount: 4000, flag: true, why: FORGIVEN_WHY },
  { id: "l08-d20", section: "Receipts", code: "R-ORG", date: "06/07/2025", name: "NH Realtors PAC", location: "120 N Main St, Concord, NH 03301", detail: "Registered political committee", amount: 2500 },
  { id: "l08-d29", section: "Expenditures", code: "E-OPS", date: "05/30/2025", name: "Comcast", location: "Manchester, NH", detail: "Office internet", amount: 129.99 },
  { id: "l08-30", section: "Loans", code: "L-FOR", date: "05/30/2025", name: "Friends of John Stephen", location: "814 Elm Street, Suite 309, Manchester, NH 03101", detail: "Loan forgiven · aggregate $0.00", amount: 5000, flag: true, why: FORGIVEN_WHY },
  { id: "l08-d19", section: "Receipts", code: "R-IND", date: "06/03/2025", name: "Patricia Reyes", location: "61 Central Ave, Dover, NH 03820", detail: "Nurse · Wentworth-Douglass", amount: 150 },
  { id: "l08-d30", section: "Receipts", code: "R-ORG", date: "05/30/2025", name: "NH Homebuilders PAC", location: "Concord, NH", detail: "Registered political committee", amount: 1000 },
  { id: "l08-32", section: "Loans", code: "L-FOR", date: "05/30/2025", name: "Friends of John Stephen", location: "814 Elm Street, Suite 309, Manchester, NH 03101", detail: "Loan forgiven · aggregate $0.00", amount: 10000, flag: true, why: FORGIVEN_WHY },
  { id: "l08-d32", section: "Receipts", code: "R-IND", date: "06/10/2025", name: "Helen Voss", location: "19 Birch Ln, Amherst, NH 03031", detail: "Retired · Retired", amount: 200 },
  { id: "l08-d31", section: "Expenditures", code: "E-OTH", date: "05/30/2025", name: "City Diner", location: "Concord, NH", detail: "Staff meals · 8 people", amount: 144 },
  { id: "l08-33", section: "Loans", code: "L-FOR", date: "05/30/2025", name: "Friends of John Stephen", location: "814 Elm Street, Suite 309, Manchester, NH 03101", detail: "Loan forgiven · aggregate $0.00", amount: 20000, flag: true, why: FORGIVEN_WHY }
];