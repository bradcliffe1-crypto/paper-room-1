export const fieldManual = {
  id: "field-manual", number: "00", title: "Field Manual", type: "manual",
  goal: "Learn to read a New Hampshire campaign finance filing before you start flagging.",
  lesson: "", legend: [], lines: []
};

export const tutorials = [
  {
    id: "straw-donors", number: "01", title: "Chorus", skill: "Straw donor patterns", difficulty: "Beginner",
    filer: "Morgan Vale for State Senate", office: "State Senate, District 18", period: "04/01/2026 – 06/30/2026", report: "Quarterly R&E Report", task: "Same day. Same amount. Same employer. Three names that aren't a coincidence. Find them in the receipts.",
    lesson: "Receipts show money coming into a campaign. Compare dates, amounts, addresses, employers, and occupations. Repeated details are leads—not proof—and should be checked together.",
    legend: [{code:"R-IND", label:"Receipt · individual"},{code:"R-CAN", label:"Receipt · candidate"},{code:"R-ORG", label:"Receipt · organization"}],
    lines: [
      {id:"a1",section:"Receipts",code:"R-IND",date:"05/03/2026",name:"Elena Price",location:"Concord, NH",detail:"Teacher · Granite School",amount:250},
      {id:"a2",section:"Receipts",code:"R-IND",date:"05/14/2026",name:"Jon Bell",location:"Nashua, NH",detail:"Architect · Bell Studio",amount:175},
      {id:"a3",section:"Receipts",code:"R-IND",date:"06/01/2026",name:"Ari Cole",location:"Dover, NH",detail:"Associate · Northline LLC",amount:1000,flag:true,why:"Same-day, identical maximum-sized gifts from junior employees sharing one employer warrant review for possible reimbursement."},
      {id:"a4",section:"Receipts",code:"R-IND",date:"06/01/2026",name:"Mina Cole",location:"Dover, NH",detail:"Assistant · Northline LLC",amount:1000,flag:true,why:"The matching date, amount, employer, and household make this part of a suspicious cluster."},
      {id:"a5",section:"Receipts",code:"R-IND",date:"06/01/2026",name:"Theo Lin",location:"Dover, NH",detail:"Intern · Northline LLC",amount:1000,flag:true,why:"An intern giving the same large amount on the same date as coworkers is a strong verification lead."},
      {id:"a6",section:"Receipts",code:"R-CAN",date:"06/18/2026",name:"Morgan Vale",location:"Concord, NH",detail:"Candidate contribution",amount:500}
    ]
  },
  {
    id: "shell-org", number: "02", title: "Veneer", skill: "Shell organizations", difficulty: "Beginner",
    filer: "Friends of Riley North", office: "Executive Council, District 2", period: "07/01/2026 – 09/30/2026", report: "Quarterly R&E Report", task: "One donor isn't a person. Find it. Ask me where the money really came from.",
    lesson: "For organization receipts, look beyond the name. A new or opaque entity, generic purpose, shared address, or money moving immediately after formation can justify deeper source-of-funds research.",
    legend: [{code:"R-ORG",label:"Receipt · organization"},{code:"R-IND",label:"Receipt · individual"},{code:"E-ADV",label:"Expenditure · advertising"}],
    lines: [
      {id:"b1",section:"Receipts",code:"R-IND",date:"07/11/2026",name:"Daniel Fox",location:"Keene, NH",detail:"Nurse · Cheshire Medical",amount:125},
      {id:"b2",section:"Receipts",code:"R-ORG",date:"08/02/2026",name:"Granite Tomorrow Strategies LLC",location:"42 Maildrop Way, Concord, NH",detail:"Business purpose not supplied",amount:7500,flag:true,why:"A large organizational receipt from an opaque entity at a maildrop, with no clear business purpose, should be traced to its true source."},
      {id:"b3",section:"Receipts",code:"R-ORG",date:"08/19/2026",name:"NH Nurses Association PAC",location:"Concord, NH",detail:"Registered political committee",amount:1000},
      {id:"b4",section:"Expenditures",code:"E-ADV",date:"09/04/2026",name:"WMUR",location:"Manchester, NH",detail:"Television advertising",amount:4200},
      {id:"b5",section:"Expenditures",code:"E-ADV",date:"09/18/2026",name:"Monadnock Print",location:"Keene, NH",detail:"Door hangers",amount:640}
    ]
  },
  {
    id: "contribution-limit", number: "03", title: "Tally", skill: "Contribution aggregation", difficulty: "Intermediate",
    filer: "Casey Hart for Governor", office: "Governor", period: "01/01/2026 – 03/31/2026", report: "Quarterly R&E Report", task: "Donors repeat. Add them before you judge. Limits watch the total, not the line.",
    lesson: "Limits may apply across an election period, not just to one row. Search for repeated names and aggregate related receipts. The game marks a review lead; real limits depend on filer, donor, timing, and current law.",
    legend: [{code:"R-IND",label:"Receipt · individual"},{code:"R-CAN",label:"Receipt · candidate"},{code:"R-IN-K",label:"Receipt · in-kind"}],
    lines: [
      {id:"c1",section:"Receipts",code:"R-IND",date:"01/10/2026",name:"Samira Holt",location:"Hanover, NH",detail:"Engineer · Self-employed",amount:900,flag:true,why:"This donor appears again; entries must be aggregated before testing against the applicable limit."},
      {id:"c2",section:"Receipts",code:"R-IND",date:"01/24/2026",name:"Peter Ames",location:"Laconia, NH",detail:"Retired",amount:200},
      {id:"c3",section:"Receipts",code:"R-IND",date:"02/12/2026",name:"Samira Holt",location:"Hanover, NH",detail:"Engineer · Self-employed",amount:900,flag:true,why:"Together with the January receipt, this creates an aggregate amount requiring a contribution-limit check."},
      {id:"c4",section:"Receipts",code:"R-IN-K",date:"02/28/2026",name:"Seacoast Signs",location:"Portsmouth, NH",detail:"In-kind: 50 lawn signs",amount:350},
      {id:"c5",section:"Receipts",code:"R-CAN",date:"03/20/2026",name:"Casey Hart",location:"Concord, NH",detail:"Candidate contribution",amount:5000}
    ]
  },
  {
    id: "personal-use", number: "04", title: "Detours", skill: "Non-campaign spending", difficulty: "Intermediate",
    filer: "Avery Reed for State Representative", office: "State Representative, Rockingham 9", period: "07/01/2026 – 09/30/2026", report: "Quarterly R&E Report", task: "Every line says what it's for. One is lying. Find the expense that isn't a campaign.",
    lesson: "Expenditures should identify the payee, date, amount, and specific purpose. Vague memos and personal-looking vendors deserve scrutiny; context and supporting records determine whether spending is permissible.",
    legend: [{code:"E-ADV",label:"Expenditure · advertising"},{code:"E-OPS",label:"Expenditure · operations"},{code:"E-OTH",label:"Expenditure · other"}],
    lines: [
      {id:"d1",section:"Expenditures",code:"E-ADV",date:"07/08/2026",name:"Seacoast Printworks",location:"Portsmouth, NH",detail:"Palm cards · 2,500 units",amount:785},
      {id:"d2",section:"Expenditures",code:"E-OPS",date:"07/22/2026",name:"USPS",location:"Portsmouth, NH",detail:"Campaign mailing postage",amount:410},
      {id:"d3",section:"Expenditures",code:"E-OTH",date:"08/16/2026",name:"White Mountain Lodge & Spa",location:"Bretton Woods, NH",detail:"Meeting expense",amount:2840,flag:true,why:"A costly resort charge with only “meeting expense” as its purpose lacks enough campaign detail and may indicate personal use."},
      {id:"d4",section:"Expenditures",code:"E-OPS",date:"09/02/2026",name:"Market Basket",location:"Portsmouth, NH",detail:"Volunteer canvass refreshments",amount:94},
      {id:"d5",section:"Expenditures",code:"E-ADV",date:"09/19/2026",name:"Meta Platforms",location:"Online",detail:"District-targeted digital ads",amount:600}
    ]
  },
  {
    id: "loan-loop", number: "05", title: "Revolving", skill: "Loans & self-financing", difficulty: "Advanced",
    filer: "Jordan Pike for Mayor", office: "Training jurisdiction", period: "10/01/2026 – 12/31/2026", report: "Quarterly R&E Report", task: "Money moves in circles. Or it disappears. Read the loans — who gave, where from, what's owed.",
    lesson: "Loans create both cash and an obligation. Record the lender, terms, repayments, and outstanding balance. Candidate money is not automatically improper, but unexplained pass-throughs or inconsistent balances are warning signs.",
    legend: [{code:"L-REC",label:"Loan received"},{code:"L-REP",label:"Loan repayment"},{code:"R-CAN",label:"Receipt · candidate"}],
    lines: [
      {id:"e1",section:"Loans",code:"L-REC",date:"10/03/2026",name:"Jordan Pike",location:"Concord, NH",detail:"Candidate loan · 0% · due 12/31",amount:12000},
      {id:"e2",section:"Receipts",code:"R-CAN",date:"10/04/2026",name:"Jordan Pike",location:"Concord, NH",detail:"Candidate contribution",amount:500},
      {id:"e3",section:"Loans",code:"L-REC",date:"10/05/2026",name:"Pike Consulting LLC",location:"Same address as candidate",detail:"Loan · terms not disclosed",amount:18000,flag:true,why:"A candidate-controlled company lending from the same address, without terms or an identified original source, can obscure true financing."},
      {id:"e4",section:"Expenditures",code:"E-ADV",date:"10/20/2026",name:"Capital Media",location:"Manchester, NH",detail:"Broadcast advertising",amount:10500},
      {id:"e5",section:"Loans",code:"L-REP",date:"12/18/2026",name:"Jordan Pike",location:"Concord, NH",detail:"Partial candidate-loan repayment",amount:3000}
    ]
  }
];