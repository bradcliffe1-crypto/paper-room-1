// Level 05 — "Charges" · Joe Kenny
// Source figures are real notes from the Kenny filing; donor names and
// street addresses are fictionalized where the full record was unavailable.
// Per-date amounts are rendered as individual line items, matching the
// source breakdown. Flagged lines are the personal / non-campaign charges
// the player must identify; legitimate campaign costs (printing, ads,
// office, event) are left unflagged as decoys.

export const level05Lines = [
  // ── Receipts (legitimate) ────────────────────────────────────────────
  {id:"l05-r01",section:"Receipts",code:"R-IND",date:"06/12/2024",name:"John McCabe",location:"47 Pine Hill Rd, Rochester, NH 03867",detail:"Retired · Retired",amount:50},
  {id:"l05-r02",section:"Receipts",code:"R-IND",date:"06/20/2024",name:"Linda Persson",location:"12 Ridgeway Ln, Wolfeboro, NH 03894",detail:"Teacher · Lakes Region Academy",amount:100},
  {id:"l05-r03",section:"Receipts",code:"R-IND",date:"07/04/2024",name:"Robert Foss",location:"88 Province Rd, Milton, NH 03851",detail:"Self-Employed · Foss Construction",amount:250},
  {id:"l05-r04",section:"Receipts",code:"R-ORG",date:"07/15/2024",name:"NH Realtors PAC",location:"63 N Main St, Concord, NH 03301",detail:"Itemized monetary contribution",amount:500},
  {id:"l05-r05",section:"Receipts",code:"R-IND",date:"08/02/2024",name:"Marybeth Sweeney",location:"34 Sixth St, Dover, NH 03820",detail:"Nurse · Wentworth-Douglass Hospital",amount:100},
  {id:"l05-r06",section:"Receipts",code:"R-IND",date:"09/10/2024",name:"David Koenig",location:"5 Bay Hill Rd, Alton, NH 03809",detail:"Attorney · Devine Millimet",amount:250},
  {id:"l05-r07",section:"Receipts",code:"R-ORG",date:"10/01/2024",name:"Granite State Builders & Remodelers",location:"63 N Main St, Concord, NH 03301",detail:"Itemized monetary contribution",amount:250},

  // ── Expenditures · legitimate campaign costs (decoys) ───────────────
  {id:"l05-e00",section:"Expenditures",code:"E-ADV",date:"06/14/2024",name:"Liberty Printing Co",location:"88 Storrs St, Concord, NH 03301",detail:"Campaign Mailers",amount:1840},
  {id:"l05-e01",section:"Expenditures",code:"E-OPS",date:"07/01/2024",name:"Staples",location:"100 Brickstone Sq, Andover, MA 01810",detail:"Office Supplies",amount:86.42},
  {id:"l05-e02",section:"Expenditures",code:"E-ADV",date:"07/12/2024",name:"Facebook",location:"1 Hacker Way, Menlo Park, CA 94025",detail:"Digital Advertising",amount:450},
  {id:"l05-e03",section:"Expenditures",code:"E-OPS",date:"07/26/2024",name:"Grappone Center",location:"70 Constitution Ave, Concord, NH 03301",detail:"Campaign Event Venue",amount:1200},
  {id:"l05-e04",section:"Expenditures",code:"E-ADV",date:"08/09/2024",name:"WMUR-TV",location:"100 South Commercial St, Manchester, NH 03101",detail:"Television Advertising",amount:3500},
  {id:"l05-e05",section:"Expenditures",code:"E-OPS",date:"09/02/2024",name:"Town & Country Realty",location:"234 Main St, Sanbornville, NH 03872",detail:"Campaign Office Rent",amount:400},
  {id:"l05-e06",section:"Expenditures",code:"E-ADV",date:"10/05/2024",name:"Liberty Printing Co",location:"88 Storrs St, Concord, NH 03301",detail:"Campaign Mailers",amount:2100},

  // ── Expenditures · 06/19/2024 ──────────────────────────────────────
  {id:"l05-0619a",section:"Expenditures",code:"E-OTH",date:"06/19/2024",name:"Jiffy Lube",location:"1500 S Willow St, Manchester, NH 03103",detail:"Oil Change",amount:99.99,flag:true,why:"Personal vehicle maintenance billed to the campaign. An oil change is not a campaign expense — flag."},
  {id:"l05-0619b",section:"Expenditures",code:"E-OTH",date:"06/19/2024",name:"Lower Budget Auto",location:"234 Route 202, Sanbornville, NH 03872",detail:"Auto Repair",amount:855,flag:true,why:"Auto repair at a local garage charged to campaign funds — personal vehicle cost. Flag."},
  {id:"l05-0619c",section:"Expenditures",code:"E-OTH",date:"06/19/2024",name:"Sanbornville Auto Supply",location:"12 Pine St, Sanbornville, NH 03872",detail:"Car Battery",amount:189.99,flag:true,why:"A replacement car battery from a parts store — personal vehicle expense. Flag."},
  {id:"l05-0619d",section:"Expenditures",code:"E-OTH",date:"06/19/2024",name:"Circle K",location:"2341 White Mountain Hwy, Ossipee, NH 03864",detail:"Gasoline",amount:1451.95,flag:true,why:"A single $1,451.95 'gasoline' charge — no vehicle tank holds that. The amount and label don't match; flag as personal fuel or a miscoded purchase."},
  {id:"l05-0619e",section:"Expenditures",code:"E-OTH",date:"06/19/2024",name:"McDonald's",location:"1700 White Mountain Hwy, Ossipee, NH 03864",detail:"Meals",amount:188.49,flag:true,why:"Fast-food meals charged to the campaign. A $188 McDonald's tab isn't a campaign event — flag as personal food."},
  {id:"l05-0619f",section:"Expenditures",code:"E-OTH",date:"06/19/2024",name:"Dunkin' Donuts",location:"14 Wolfeboro Rd, Ossipee, NH 03864",detail:"Meals",amount:32.13,flag:true,why:"Personal coffee and food charged to the campaign. Flag."},
  {id:"l05-0619g",section:"Expenditures",code:"E-OTH",date:"06/19/2024",name:"Verizon",location:"P.O. Box 66532, Alpharetta, GA 30305",detail:"Cellular Service",amount:1418.64,flag:true,why:"A $1,418.64 cellphone bill billed to the campaign — personal telecommunications, not campaign expense. Flag."},

  // ── Expenditures · 08/21/2024 ──────────────────────────────────────
  {id:"l05-0821a",section:"Expenditures",code:"E-OTH",date:"08/21/2024",name:"Prompto",location:"275 Farmington Rd, Rochester, NH 03867",detail:"Oil Change",amount:99.99,flag:true,why:"Another oil change at a quick-lube — repeat personal vehicle maintenance. Flag."},
  {id:"l05-0821b",section:"Expenditures",code:"E-OTH",date:"08/21/2024",name:"Circle K",location:"2341 White Mountain Hwy, Ossipee, NH 03864",detail:"Gasoline",amount:497.84,flag:true,why:"Gasoline charged to the campaign. Routine personal fuel — flag."},
  {id:"l05-0821c",section:"Expenditures",code:"E-OTH",date:"08/21/2024",name:"McDonald's",location:"275 Farmington Rd, Rochester, NH 03867",detail:"Meals",amount:120.11,flag:true,why:"Fast-food meals billed to campaign funds — personal food. Flag."},
  {id:"l05-0821d",section:"Expenditures",code:"E-OTH",date:"08/21/2024",name:"Dunkin' Donuts",location:"275 Farmington Rd, Rochester, NH 03867",detail:"Meals",amount:72.43,flag:true,why:"Personal coffee and food charged to the campaign. Flag."},
  {id:"l05-0821e",section:"Expenditures",code:"E-OTH",date:"08/21/2024",name:"Verizon",location:"P.O. Box 66532, Alpharetta, GA 30305",detail:"Cellular Service",amount:720.37,flag:true,why:"Another month of personal cellphone service billed to the campaign. Flag."},

  // ── Expenditures · 09/04/2024 ──────────────────────────────────────
  {id:"l05-0904a",section:"Expenditures",code:"E-OTH",date:"09/04/2024",name:"Circle K",location:"12 Meaderboro Rd, Rochester, NH 03867",detail:"Gasoline",amount:213.89,flag:true,why:"Gasoline — personal fuel charged to the campaign. Flag."},
  {id:"l05-0904b",section:"Expenditures",code:"E-OTH",date:"09/04/2024",name:"McDonald's",location:"139 Rochester Hill Rd, Rochester, NH 03867",detail:"Meals",amount:32.62,flag:true,why:"Fast-food meals billed to campaign funds — personal food. Flag."},
  {id:"l05-0904c",section:"Expenditures",code:"E-OTH",date:"09/04/2024",name:"Dunkin' Donuts",location:"12 Milton Rd, Rochester, NH 03867",detail:"Meals",amount:17.04,flag:true,why:"Personal coffee and food charged to the campaign. Flag."},
  {id:"l05-0904d",section:"Expenditures",code:"E-OTH",date:"09/04/2024",name:"Verizon",location:"P.O. Box 66532, Alpharetta, GA 30305",detail:"Cellular Service",amount:223.12,flag:true,why:"Personal cellphone bill billed to the campaign. Flag."},

  // ── Expenditures · 09/18/2024 ──────────────────────────────────────
  {id:"l05-0918a",section:"Expenditures",code:"E-OTH",date:"09/18/2024",name:"Jiffy Lube",location:"1500 S Willow St, Manchester, NH 03103",detail:"Oil Change",amount:99.99,flag:true,why:"A third oil change — the campaign is paying routine personal car maintenance. Flag."},
  {id:"l05-0918b",section:"Expenditures",code:"E-OTH",date:"09/18/2024",name:"Circle K",location:"2341 White Mountain Hwy, Ossipee, NH 03864",detail:"Gasoline",amount:92.04,flag:true,why:"Personal fuel charged to the campaign. Flag."},
  {id:"l05-0918c",section:"Expenditures",code:"E-OTH",date:"09/18/2024",name:"McDonald's",location:"1700 White Mountain Hwy, Ossipee, NH 03864",detail:"Meals",amount:51.05,flag:true,why:"Fast-food meals billed to campaign funds — personal food. Flag."},
  {id:"l05-0918d",section:"Expenditures",code:"E-OTH",date:"09/18/2024",name:"Dunkin' Donuts",location:"14 Wolfeboro Rd, Ossipee, NH 03864",detail:"Meals",amount:13.30,flag:true,why:"Personal coffee and food charged to the campaign. Flag."},

  // ── Expenditures · 10/16/2024 ──────────────────────────────────────
  {id:"l05-1016a",section:"Expenditures",code:"E-OTH",date:"10/16/2024",name:"Prompto",location:"275 Farmington Rd, Rochester, NH 03867",detail:"Oil Change",amount:99.99,flag:true,why:"A fourth oil change — routine personal vehicle maintenance billed to the campaign. Flag."},
  {id:"l05-1016b",section:"Expenditures",code:"E-OTH",date:"10/16/2024",name:"Circle K",location:"2341 White Mountain Hwy, Ossipee, NH 03864",detail:"Gasoline",amount:398.12,flag:true,why:"Personal fuel charged to the campaign. Flag."},
  {id:"l05-1016c",section:"Expenditures",code:"E-OTH",date:"10/16/2024",name:"McDonald's",location:"275 Farmington Rd, Rochester, NH 03867",detail:"Meals",amount:77.43,flag:true,why:"Fast-food meals billed to campaign funds — personal food. Flag."},
  {id:"l05-1016d",section:"Expenditures",code:"E-OTH",date:"10/16/2024",name:"Dunkin' Donuts",location:"275 Farmington Rd, Rochester, NH 03867",detail:"Meals",amount:53.81,flag:true,why:"Personal coffee and food charged to the campaign. Flag."},
  {id:"l05-1016e",section:"Expenditures",code:"E-OTH",date:"10/16/2024",name:"Verizon",location:"P.O. Box 66532, Alpharetta, GA 30305",detail:"Cellular Service",amount:184.81,flag:true,why:"Another personal cellphone bill billed to the campaign. Flag."},

  // ── Expenditures · 10/30/2024 ──────────────────────────────────────
  {id:"l05-1030a",section:"Expenditures",code:"E-OTH",date:"10/30/2024",name:"Dave Wheeler",location:"47 Governor's Rd, Strafford, NH 03884",detail:"Printing",amount:6299,flag:true,why:"A one-time $6,299 'printing' payment to an Executive Council member — no print shop, no itemized invoice, no prior print runs at this address. The largest single charge in the filing and it goes to an elected official. Flag for pass-through review."},
  {id:"l05-1030b",section:"Expenditures",code:"E-OTH",date:"10/30/2024",name:"Circle K",location:"2341 White Mountain Hwy, Ossipee, NH 03864",detail:"Gasoline",amount:134.63,flag:true,why:"Personal fuel charged to the campaign. Flag."},
  {id:"l05-1030c",section:"Expenditures",code:"E-OTH",date:"10/30/2024",name:"McDonald's",location:"1700 White Mountain Hwy, Ossipee, NH 03864",detail:"Meals",amount:51.84,flag:true,why:"Fast-food meals billed to campaign funds — personal food. Flag."},
  {id:"l05-1030d",section:"Expenditures",code:"E-OTH",date:"10/30/2024",name:"Dunkin' Donuts",location:"14 Wolfeboro Rd, Ossipee, NH 03864",detail:"Meals",amount:40.27,flag:true,why:"Personal coffee and food charged to the campaign. Flag."}
];