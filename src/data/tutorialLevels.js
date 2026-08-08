import { tutorialCase05Lines } from "@/data/tutorialCase05Data";

// Tutorial casebook — six fictional training filings. Each one mirrors a
// desktop objective without reusing the real data: employer-bundled maxed
// checks (Chorus), a shell-LLC giving cluster (Veneer), home-repair
// expenditures billed to a campaign (Tally), an individual cycle-limit
// violation built from many small gifts (Detours), a burst of loan
// forgiveness (Revolving), and an out-of-state spreadsheet total (Sums).
// Decoy rows are benign on purpose — the player learns to read past them.

export const fieldManual = {
  id: "field-manual", number: "00", title: "Field Manual", type: "manual",
  goal: "Learn to read a New Hampshire campaign finance filing before you start flagging.",
  lesson: "", legend: [], lines: []
};

export const tutorials = [
  {
    id: "straw-donors", number: "01", title: "Chorus", skill: "Employer-bundled maxed checks", difficulty: "Beginner",
    filer: "Friends of Mara Vance", office: "Executive Council, District 3", period: "07/01/2026 – 09/30/2026",
    report: "Quarterly R&E Report", type: "flag",
    task: "She calls it a grassroots surge. Surges come from many places. Read the receipts — and notice how many of the hands come from the same roof.",
    lesson: "Receipts show money in. A cluster of maximum gifts on one day, from donors who share an employer and an address, is a bundling lead — not proof. Compare dates, amounts, employers, and towns together.",
    legend: [{ code: "R-IND", label: "Receipt · individual" }, { code: "R-ORG", label: "Receipt · organization" }, { code: "R-CAN", label: "Receipt · candidate" }, { code: "R-IN-K", label: "Receipt · in-kind" }],
    lines: [
      { id: "a01", section: "Receipts", code: "R-IND", date: "07/09/2026", name: "Jen Okafor", location: "Concord, NH", detail: "Teacher · Bow Memorial School", amount: 200 },
      { id: "a10", section: "Receipts", code: "R-IND", date: "09/12/2026", name: "Marcus Lindqvist", location: "300 Loudon Rd, Suite 11, Concord, NH", detail: "Manager · Northwind Property Group", amount: 1000, flag: true, why: "One of seven $1,000 gifts on 09/12 from donors sharing one employer (Northwind Property Group) and one address (300 Loudon Rd, Suite 11). A coordinated bundle of maxed checks from one company's people — flag for reimbursement / source review." },
      { id: "a02", section: "Receipts", code: "R-IND", date: "07/16/2026", name: "Walt Doherty", location: "Nashua, NH", detail: "Retired", amount: 120 },
      { id: "a11", section: "Receipts", code: "R-IND", date: "09/12/2026", name: "Daria Lindqvist", location: "300 Loudon Rd, Suite 11, Concord, NH", detail: "Homemaker", amount: 1000, flag: true, why: "Same surname, same address, same day, same maximum as the Northwind cluster — a household member added to the bundle. Flag." },
      { id: "a03", section: "Receipts", code: "R-IND", date: "07/24/2026", name: "Cara Linwood", location: "Hanover, NH", detail: "Architect · Linwood Studio", amount: 300 },
      { id: "a12", section: "Receipts", code: "R-IND", date: "09/12/2026", name: "Philip Aoki", location: "300 Loudon Rd, Suite 11, Concord, NH", detail: "Realtor · Northwind Property Group", amount: 1000, flag: true, why: "A third maxed check from the same Northwind address on the same day — flag." },
      { id: "a04", section: "Receipts", code: "R-ORG", date: "07/29/2026", name: "NH Homebuilders PAC", location: "Concord, NH", detail: "Registered political committee", amount: 1000 },
      { id: "a13", section: "Receipts", code: "R-IND", date: "09/12/2026", name: "Mei Aoki", location: "300 Loudon Rd, Suite 11, Concord, NH", detail: "Retired", amount: 1000, flag: true, why: "Same surname, same address, same day, same maximum — a second household hand on the same string. Flag." },
      { id: "a05", section: "Receipts", code: "R-IND", date: "08/06/2026", name: "Eli Rowan", location: "Keene, NH", detail: "Electrician · Rowan Electric", amount: 250 },
      { id: "a14", section: "Receipts", code: "R-IND", date: "09/12/2026", name: "Connor Brady", location: "300 Loudon Rd, Suite 11, Concord, NH", detail: "Leasing agent · Northwind Property Group", amount: 1000, flag: true, why: "Another Northwind employee at the same address on the same day for the maximum — flag." },
      { id: "a06", section: "Receipts", code: "R-IND", date: "08/14/2026", name: "Mira Stoltz", location: "Laconia, NH", detail: "Nurse · Lakes Region Hospital", amount: 150 },
      { id: "a15", section: "Receipts", code: "R-IND", date: "09/12/2026", name: "Hana Brady", location: "300 Loudon Rd, Suite 11, Concord, NH", detail: "Teacher", amount: 1000, flag: true, why: "Same surname, same address, same day, same maximum — a third household member in the bundle. Flag." },
      { id: "a07", section: "Receipts", code: "R-IND", date: "08/22/2026", name: "Ben Arrowood", location: "Portsmouth, NH", detail: "Retired", amount: 175 },
      { id: "a16", section: "Receipts", code: "R-IND", date: "09/12/2026", name: "Victor Salm", location: "300 Loudon Rd, Suite 11, Concord, NH", detail: "Operations · Northwind Property Group", amount: 1000, flag: true, why: "A seventh maxed check from the Northwind address on 09/12 — the cluster that turns 'grassroots' into a mouthpiece. Flag." },
      { id: "a08", section: "Receipts", code: "R-IN-K", date: "08/28/2026", name: "Seacoast Signs", location: "Portsmouth, NH", detail: "In-kind: 30 lawn signs", amount: 300 },
      { id: "a09", section: "Receipts", code: "R-IND", date: "09/03/2026", name: "Dana Price", location: "Salem, NH", detail: "Teacher", amount: 200 },
      { id: "a17", section: "Receipts", code: "R-IND", date: "09/19/2026", name: "Iris Calder", location: "Lebanon, NH", detail: "Designer · Self-employed", amount: 175 },
      { id: "a18", section: "Receipts", code: "R-CAN", date: "09/24/2026", name: "Mara Vance", location: "Concord, NH", detail: "Candidate contribution", amount: 2000 }
    ]
  },
  {
    id: "shell-org", number: "02", title: "Veneer", skill: "Shell-LLC giving cluster", difficulty: "Beginner",
    filer: "Pemberton for Executive Council", office: "Executive Council, District 4", period: "07/01/2026 – 09/30/2026",
    report: "Quarterly R&E Report", type: "flag",
    task: "One receipt is a donor. A row of receipts from the same doorstep on the same day is a production. Read the organizations — and ask whose name keeps repeating.",
    lesson: "For organization receipts, look past the name. Several freshly formed entities at one registered-agent address, all giving the maximum on the same day, is a shell cluster — a front for coordinated money. A named, registered committee is a different animal.",
    legend: [{ code: "R-ORG", label: "Receipt · organization" }, { code: "R-IND", label: "Receipt · individual" }, { code: "R-CAN", label: "Receipt · candidate" }, { code: "E-ADV", label: "Expenditure · advertising" }],
    lines: [
      { id: "b01", section: "Receipts", code: "R-IND", date: "07/09/2026", name: "Mira Stoltz", location: "Laconia, NH", detail: "Nurse · Lakes Region Hospital", amount: 150 },
      { id: "b25", section: "Receipts", code: "R-IND", date: "07/15/2026", name: "Sara Ng", location: "Dover, NH", detail: "Pharmacist · CVS", amount: 150 },
      { id: "b02", section: "Receipts", code: "R-ORG", date: "07/22/2026", name: "Seacoast Restaurant Alliance PAC", location: "Portsmouth, NH", detail: "Registered political committee", amount: 1000 },
      { id: "b03", section: "Receipts", code: "R-IND", date: "07/29/2026", name: "Tess Whitlock", location: "Bedford, NH", detail: "Attorney · Whitlock & Reed", amount: 500 },
      { id: "b04", section: "Receipts", code: "R-IND", date: "08/05/2026", name: "Marcus Pell", location: "Dover, NH", detail: "Engineer · Self-employed", amount: 300 },
      { id: "b26", section: "Receipts", code: "R-IND", date: "08/02/2026", name: "Dale Hutchins", location: "Manchester, NH", detail: "Retired", amount: 200 },
      { id: "b27", section: "Expenditures", code: "E-ADV", date: "08/08/2026", name: "Granite Mailhouse", location: "Concord, NH", detail: "Campaign mailers · 8,000 pieces", amount: 890 },
      { id: "b06", section: "Receipts", code: "R-IND", date: "08/12/2026", name: "Dana Price", location: "Salem, NH", detail: "Teacher", amount: 180 },
      { id: "b07", section: "Receipts", code: "R-ORG", date: "08/12/2026", name: "Dover Machine Works", location: "Dover, NH", detail: "Itemized monetary contribution", amount: 1500 },
      { id: "b08", section: "Receipts", code: "R-IND", date: "08/19/2026", name: "Ben Arrowood", location: "Portsmouth, NH", detail: "Retired", amount: 250 },
      { id: "b28", section: "Receipts", code: "R-IND", date: "08/16/2026", name: "Priya Shah", location: "Nashua, NH", detail: "Software · Oracle", amount: 250 },
      { id: "b29", section: "Receipts", code: "R-ORG", date: "08/20/2026", name: "NH Nurses Association PAC", location: "Concord, NH", detail: "Registered political committee", amount: 500 },
      { id: "b11", section: "Receipts", code: "R-IND", date: "08/27/2026", name: "Iris Calder", location: "Lebanon, NH", detail: "Designer · Self-employed", amount: 220 },
      { id: "b12", section: "Receipts", code: "R-IND", date: "09/03/2026", name: "Cara Linwood", location: "Hanover, NH", detail: "Architect · Linwood Studio", amount: 300 },
      { id: "b14", section: "Receipts", code: "R-IND", date: "09/05/2026", name: "Eli Rowan", location: "Keene, NH", detail: "Electrician · Rowan Electric", amount: 200 },
      { id: "b15", section: "Receipts", code: "R-ORG", date: "09/06/2026", name: "Concord Dentistry PAC", location: "Concord, NH", detail: "Registered political committee", amount: 750 },
      { id: "b17", section: "Receipts", code: "R-IND", date: "09/08/2026", name: "Noah Beck", location: "Salem, NH", detail: "Retired", amount: 250 },
      { id: "b18", section: "Receipts", code: "R-IND", date: "09/09/2026", name: "Jen Okafor", location: "Concord, NH", detail: "Teacher · Bow Memorial School", amount: 200 },
      { id: "b05", section: "Receipts", code: "R-ORG", date: "09/10/2026", name: "Granite Horizon Capital LLC", location: "1200 Worthen St, Suite 9, Manchester, NH", detail: "Itemized monetary contribution", amount: 5000, flag: true, why: "One of six 'Granite Horizon' LLCs at one address (1200 Worthen St, Suite 9) giving the maximum $5,000 on the same day — a fleet of shell entities for coordinated giving. Flag for source-of-funds review." },
      { id: "b30", section: "Receipts", code: "R-IND", date: "09/01/2026", name: "Greg Hollis", location: "Salem, NH", detail: "Retired", amount: 175 },
      { id: "b10", section: "Expenditures", code: "E-ADV", date: "09/02/2026", name: "WMUR", location: "Manchester, NH", detail: "Television advertising", amount: 4200 },
      { id: "b09", section: "Receipts", code: "R-ORG", date: "09/10/2026", name: "Granite Horizon Holdings LLC", location: "1200 Worthen St, Suite 9, Manchester, NH", detail: "Itemized monetary contribution", amount: 5000, flag: true, why: "Same 'Granite Horizon' cluster — same address, same day, same maximum. Flag." },
      { id: "b31", section: "Expenditures", code: "E-ADV", date: "09/12/2026", name: "WNTK Radio", location: "New London, NH", detail: "Radio spots", amount: 450 },
      { id: "b20", section: "Expenditures", code: "E-ADV", date: "09/16/2026", name: "Pinnacle Print", location: "Concord, NH", detail: "Door hangers", amount: 640 },
      { id: "b13", section: "Receipts", code: "R-ORG", date: "09/10/2026", name: "Granite Horizon Ventures LLC", location: "1200 Worthen St, Suite 9, Manchester, NH", detail: "Itemized monetary contribution", amount: 5000, flag: true, why: "Same 'Granite Horizon' cluster — same address, same day, same maximum. Flag." },
      { id: "b21", section: "Receipts", code: "R-IND", date: "09/20/2026", name: "Walt Doherty", location: "Nashua, NH", detail: "Retired", amount: 200 },
      { id: "b32", section: "Receipts", code: "R-IND", date: "09/22/2026", name: "Tess Whitlock", location: "Bedford, NH", detail: "Attorney · Whitlock & Reed", amount: 300 },
      { id: "b16", section: "Receipts", code: "R-ORG", date: "09/10/2026", name: "Granite Horizon Realty LLC", location: "1200 Worthen St, Suite 9, Manchester, NH", detail: "Itemized monetary contribution", amount: 5000, flag: true, why: "Same 'Granite Horizon' cluster — same address, same day, same maximum. Flag." },
      { id: "b23", section: "Receipts", code: "R-CAN", date: "09/24/2026", name: "Wes Pemberton", location: "Bedford, NH", detail: "Candidate contribution", amount: 1000 },
      { id: "b19", section: "Receipts", code: "R-ORG", date: "09/10/2026", name: "Granite Horizon Development LLC", location: "1200 Worthen St, Suite 9, Manchester, NH", detail: "Itemized monetary contribution", amount: 5000, flag: true, why: "Same 'Granite Horizon' cluster — same address, same day, same maximum. Flag." },
      { id: "b24", section: "Expenditures", code: "E-ADV", date: "09/29/2026", name: "Meta Platforms", location: "Online", detail: "District-targeted digital ads", amount: 1200 },
      { id: "b22", section: "Receipts", code: "R-ORG", date: "09/10/2026", name: "Granite Horizon Partners LLC", location: "1200 Worthen St, Suite 9, Manchester, NH", detail: "Itemized monetary contribution", amount: 5000, flag: true, why: "Sixth 'Granite Horizon' entity at the same address on the same day for the maximum — the cluster that turns one donor into six. Flag." }
    ]
  },
  {
    id: "personal-use", number: "03", title: "Tally", skill: "Non-campaign expenditures", difficulty: "Intermediate",
    filer: "Powell for State Rep", office: "State Representative, Rockingham 1", period: "07/01/2026 – 09/30/2026",
    report: "Quarterly R&E Report", type: "flag",
    task: "Every expense wears a memo. Some memos are costumes. Read what he actually bought — not what the line says he bought.",
    lesson: "Expenditures should name the payee, date, amount, and a specific campaign purpose. Vague memos and residential-service vendors deserve scrutiny; context and supporting records decide whether the spend is permissible. A print shop for palm cards is not the same as a furnace service.",
    legend: [{ code: "E-ADV", label: "Expenditure · advertising" }, { code: "E-OPS", label: "Expenditure · operations" }, { code: "E-OTH", label: "Expenditure · other" }],
    lines: [
      { id: "c01", section: "Expenditures", code: "E-ADV", date: "07/08/2026", name: "Seacoast Printworks", location: "Portsmouth, NH", detail: "Palm cards · 2,500 units", amount: 785 },
      { id: "c15", section: "Expenditures", code: "E-ADV", date: "07/15/2026", name: "Signwave Co", location: "Manchester, NH", detail: "Yard signs · 500 units", amount: 650 },
      { id: "c02", section: "Expenditures", code: "E-OPS", date: "07/22/2026", name: "USPS", location: "Portsmouth, NH", detail: "Campaign mailing postage", amount: 410 },
      { id: "c03", section: "Expenditures", code: "E-OPS", date: "07/30/2026", name: "Staples", location: "Manchester, NH", detail: "Office supplies", amount: 86 },
      { id: "c16", section: "Expenditures", code: "E-OPS", date: "08/01/2026", name: "Granite Data Services", location: "Online", detail: "Voter file subscription", amount: 250 },
      { id: "c04", section: "Expenditures", code: "E-OPS", date: "08/04/2026", name: "VoterVault Software", location: "Online", detail: "Voter file subscription", amount: 300 },
      { id: "c05", section: "Expenditures", code: "E-OTH", date: "08/05/2026", name: "Hearthside Heating & Cooling", location: "Concord, NH", detail: "Furnace replacement", amount: 1850, flag: true, why: "A furnace replacement at a residential HVAC company — home heating, not a campaign cost. Flag." },
      { id: "c17", section: "Expenditures", code: "E-OTH", date: "08/10/2026", name: "Holiday Inn", location: "Concord, NH", detail: "Fundraiser venue rental", amount: 1200 },
      { id: "c06", section: "Expenditures", code: "E-ADV", date: "08/12/2026", name: "WMUR", location: "Manchester, NH", detail: "Broadcast advertising", amount: 5000 },
      { id: "c18", section: "Expenditures", code: "E-OPS", date: "08/18/2026", name: "CompuDial", location: "Manchester, NH", detail: "Phone banking service", amount: 900 },
      { id: "c07", section: "Expenditures", code: "E-OTH", date: "08/15/2026", name: "Summit Residential Roofing", location: "Concord, NH", detail: "Roof replacement", amount: 2400, flag: true, why: "A residential roof replacement — home maintenance, not a campaign cost. Flag." },
      { id: "c08", section: "Expenditures", code: "E-OPS", date: "08/21/2026", name: "Reliant Plumbing & Heating", location: "Concord, NH", detail: "Water heater installation", amount: 640, flag: true, why: "A water heater installation — residential plumbing, not a campaign cost. Flag." },
      { id: "c19", section: "Expenditures", code: "E-ADV", date: "09/05/2026", name: "Valley Voice", location: "Littleton, NH", detail: "Newspaper ads", amount: 300 },
      { id: "c09", section: "Expenditures", code: "E-OTH", date: "08/28/2026", name: "Arrow Tree Service", location: "Concord, NH", detail: "Residential tree removal", amount: 525, flag: true, why: "Residential tree removal at the candidate's home — personal property maintenance. Flag." },
      { id: "c10", section: "Expenditures", code: "E-OPS", date: "09/03/2026", name: "Voltside Electric", location: "Concord, NH", detail: "Electrical panel upgrade", amount: 1100, flag: true, why: "A home electrical panel upgrade — residential wiring, not a campaign cost. Flag." },
      { id: "c20", section: "Expenditures", code: "E-OPS", date: "09/12/2026", name: "Capitol Staffing", location: "Concord, NH", detail: "Campaign staff payroll", amount: 2200 },
      { id: "c11", section: "Expenditures", code: "E-OTH", date: "09/10/2026", name: "Driftless Plowing", location: "Concord, NH", detail: "Driveway snow plowing", amount: 340, flag: true, why: "Residential driveway plowing — personal property maintenance. Flag." },
      { id: "c12", section: "Expenditures", code: "E-OTH", date: "09/14/2026", name: "Bloom & Co Florals", location: "Concord, NH", detail: "Event florals · fundraiser", amount: 210 },
      { id: "c21", section: "Expenditures", code: "E-OTH", date: "09/20/2026", name: "Union Leader", location: "Manchester, NH", detail: "Print advertising", amount: 1500 },
      { id: "c13", section: "Expenditures", code: "E-ADV", date: "09/19/2026", name: "Meta Platforms", location: "Online", detail: "District-targeted digital ads", amount: 600 },
      { id: "c14", section: "Expenditures", code: "E-OPS", date: "09/25/2026", name: "City Diner", location: "Concord, NH", detail: "Staff meals · 12 people", amount: 144 }
    ]
  },
  {
    id: "contribution-limit", number: "04", title: "Detours", skill: "Individual cycle-limit violation", difficulty: "Intermediate",
    filer: "Adler for State Senate", office: "State Senate, District 12", period: "01/01/2026 – 11/05/2026",
    report: "R&E Report", type: "flag",
    task: "One donor came back three times. Each visit looked small. The season tells a different story — add them up.",
    lesson: "An individual may give up to $5,000 per election cycle to a candidate committee. The limit runs across the whole cycle, not per line. A large gift broken into pieces that crosses the limit together is still a violation — add up every gift from one donor before you judge.",
    legend: [{ code: "R-IND", label: "Receipt · individual" }, { code: "R-CAN", label: "Receipt · candidate" }, { code: "R-ORG", label: "Receipt · organization" }, { code: "R-IN-K", label: "Receipt · in-kind" }],
    lines: [
      { id: "d15", section: "Receipts", code: "R-IND", date: "01/20/2026", name: "Sara Ng", location: "Dover, NH", detail: "Pharmacist · CVS", amount: 150 },
      { id: "d02", section: "Receipts", code: "R-IND", date: "01/28/2026", name: "Peter Ames", location: "Laconia, NH", detail: "Retired", amount: 200 },
      { id: "d16", section: "Receipts", code: "R-ORG", date: "02/05/2026", name: "NH Nurses Association PAC", location: "Concord, NH", detail: "Registered political committee", amount: 500 },
      { id: "d01", section: "Receipts", code: "R-IND", date: "02/11/2026", name: "Maren Voss", location: "Hanover, NH", detail: "Engineer · Self-employed", amount: 1850, flag: true, why: "First of three gifts from Maren Voss. Alone it's under the limit — but the cycle total has to be added up. Flag." },
      { id: "d04", section: "Receipts", code: "R-IND", date: "02/25/2026", name: "Noah Beck", location: "Salem, NH", detail: "Retired", amount: 250 },
      { id: "d17", section: "Receipts", code: "R-IND", date: "02/18/2026", name: "Greg Hollis", location: "Salem, NH", detail: "Retired", amount: 175 },
      { id: "d18", section: "Receipts", code: "R-IN-K", date: "03/05/2026", name: "Print House", location: "Manchester, NH", detail: "In-kind: campaign flyers", amount: 400 },
      { id: "d06", section: "Receipts", code: "R-IN-K", date: "03/22/2026", name: "Seacoast Signs", location: "Portsmouth, NH", detail: "In-kind: 40 lawn signs", amount: 350 },
      { id: "d19", section: "Receipts", code: "R-IND", date: "03/30/2026", name: "Dale Hutchins", location: "Manchester, NH", detail: "Retired", amount: 200 },
      { id: "d20", section: "Receipts", code: "R-IND", date: "04/15/2026", name: "Priya Shah", location: "Nashua, NH", detail: "Software · Oracle", amount: 250 },
      { id: "d08", section: "Receipts", code: "R-IND", date: "04/21/2026", name: "Iris Calder", location: "Lebanon, NH", detail: "Designer · Self-employed", amount: 175 },
      { id: "d21", section: "Receipts", code: "R-ORG", date: "05/02/2026", name: "Seacoast Restaurant Alliance PAC", location: "Portsmouth, NH", detail: "Registered political committee", amount: 750 },
      { id: "d03", section: "Receipts", code: "R-IND", date: "05/20/2026", name: "Maren Voss", location: "Hanover, NH", detail: "Engineer · Self-employed", amount: 2475, flag: true, why: "Second gift from Voss — $4,325 cumulative, still under the line but climbing. Flag." },
      { id: "d10", section: "Receipts", code: "R-ORG", date: "05/12/2026", name: "NH Homebuilders PAC", location: "Concord, NH", detail: "Registered political committee", amount: 1000 },
      { id: "d22", section: "Receipts", code: "R-IND", date: "06/10/2026", name: "Tom Barker", location: "Manchester, NH", detail: "Retired", amount: 200 },
      { id: "d12", section: "Receipts", code: "R-CAN", date: "06/03/2026", name: "Casey Adler", location: "Concord, NH", detail: "Candidate contribution", amount: 5000 },
      { id: "d13", section: "Receipts", code: "R-IND", date: "06/18/2026", name: "Cara Linwood", location: "Hanover, NH", detail: "Architect · Linwood Studio", amount: 300 },
      { id: "d14", section: "Receipts", code: "R-IND", date: "07/02/2026", name: "Eli Rowan", location: "Keene, NH", detail: "Electrician · Rowan Electric", amount: 200 },
      { id: "d23", section: "Receipts", code: "R-IND", date: "07/15/2026", name: "Mira Stoltz", location: "Laconia, NH", detail: "Nurse · Lakes Region Hospital", amount: 150 },
      { id: "d05", section: "Receipts", code: "R-IND", date: "08/14/2026", name: "Maren Voss", location: "Hanover, NH", detail: "Engineer · Self-employed", amount: 1900, flag: true, why: "Third gift from Voss — $6,225 cumulative, over the $5,000 per-cycle individual limit. The split into three pieces doesn't cure the excess. Flag." }
    ]
  },
  {
    id: "loan-loop", number: "05", title: "Revolving", skill: "Loan forgiveness bursts", difficulty: "Advanced",
    filer: "Torres for Mayor", office: "Mayor · Training City", period: "04/01/2026 – 06/30/2026",
    report: "Quarterly R&E Report", type: "flag",
    task: "She backed herself with loans. Read the whole filing — every line. The loan lines are where to look. Find what she did with her own debt.",
    lesson: "A candidate may lend her own campaign money — that's allowed, and the loan is reported with its terms. The moment she forgives it, the forgiven amount becomes a contribution: it counts toward the per-cycle contribution limit and must be reported as one. One large forgiveness can blow straight past the cap. The loans themselves are not the story — the forgiveness is.",
    legend: [{ code: "L-REC", label: "Loan received" }, { code: "L-FOR", label: "Loan forgiven" }, { code: "R-IND", label: "Receipt · individual" }, { code: "R-ORG", label: "Receipt · organization" }, { code: "E-ADV", label: "Expenditure · advertising" }, { code: "E-OPS", label: "Expenditure · operations" }, { code: "E-OTH", label: "Expenditure · other" }],
    lines: tutorialCase05Lines
  },
  {
    id: "out-of-state", number: "06", title: "Sums", skill: "Out-of-state money", difficulty: "Advanced",
    filer: "Whitfield for Governor", office: "Governor", period: "01/01/2026 – 03/31/2026",
    report: "Quarterly R&E Report", type: "analyze",
    task: "Not everyone who gives lives here. Select all, then peel away New Hampshire by its state code — what's left is the number that bought the airwaves.",
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