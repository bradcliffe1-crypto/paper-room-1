// Level 06 — "Venues" · Kelly Ayotte
// Source: "Kelly for New Hampshire" RSA 664 filings (the 8/21/2024 report).
// The flagged cluster is fourteen hospitality-industry LLCs — Hindu-deity and
// NH-place-named, several sharing "Hospitality" / "Hotel" in the name — all
// giving the maximum on the SAME day, 6/28/2024. The shared naming and
// coordinated timing suggest common ownership used to bundle contributions
// past the per-entity limit (a conduit / straw-donor scheme).
// Decoys are real same-day donors from the same report that are NOT part of
// the scheme (other businesses, individuals, a franchise hotel, an established
// hotel company, a casino-hospitality group) so the player must read the
// naming pattern, not just the date.

export const level06Lines = [
  // ── 6/28/2024 — the hospitality cluster (FLAGGED) ─────────────────────
  {id:"l06-01",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Priti Hospitality LLC",location:"135 New Hampshire 120, Lebanon, NH 03766",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"One of fourteen hospitality LLCs — deity and place names — all giving the maximum on 6/28/2024. The shared naming and single-day timing suggest common ownership bundling contributions past the per-entity limit. Flag."},
  {id:"l06-02",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Jazzllyn Hospitality II LLC",location:"120 Key Road, Keene, NH 03431",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Same-day hospitality LLC in the cluster — matching name family and maximum gift on 6/28/2024. Flag."},
  {id:"l06-03",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Vidhi Hospitality LLC",location:"401 Winchester Street, Keene, NH 03431",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Same-day hospitality LLC in the cluster — another deity-named hotel entity maxing out on 6/28/2024. Flag."},
  {id:"l06-04",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Mahalaxmi Hospitality LLC",location:"130 Main Street, Gorham, NH 03581",detail:"Itemized monetary contribution",amount:1500,flag:true,why:"Same-day hospitality LLC in the cluster — deity-named, same date. Flag."},
  {id:"l06-05",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Ossipee Hospitality LLC",location:"527 U.S. 3, Lincoln, NH 03251",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Same-day hospitality LLC in the cluster — NH-place-named, same date, maximum gift. Flag."},
  {id:"l06-06",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Amba Hotel LLC",location:"21 Railroad Street, Lincoln, NH 03251",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Same-day hotel LLC in the cluster — deity-named, same date, same town as Ossipee Hospitality. Flag."},
  {id:"l06-07",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Gangagi LLC",location:"9 Hotel Drive, Dover, NH 03820",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Not labeled 'hospitality,' but registered at '9 Hotel Drive' — part of the same-day hotel cluster and matching the deity-name pattern. Flag."},
  {id:"l06-08",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Dhyan Hotel LLC",location:"97 Hail St, Concord, NH 03301",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Same-day hotel LLC in the cluster — deity-named, same date. Flag."},
  {id:"l06-09",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Naksh Hospitality LLC",location:"860 South Porter Street, Manchester, NH 03103",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Same-day hospitality LLC in the cluster — deity-named, same date, maximum gift. Flag."},
  {id:"l06-10",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Shloke Hospitality LLC",location:"2 Main Street, Durham, NH 03824",detail:"Itemized monetary contribution",amount:1500,flag:true,why:"Same-day hospitality LLC in the cluster — deity-named, same date. Flag."},
  {id:"l06-11",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Naveesha Hospitality LLC",location:"650 Borthwick Avenue, Portsmouth, NH 03801",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Same-day hospitality LLC in the cluster — deity-named, same date, maximum gift. Flag."},
  {id:"l06-12",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Conway Hospitality LLC",location:"1439 White Mountain Highway, Conway, NH 03818",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Same-day hospitality LLC in the cluster — NH-place-named, same date. Flag."},
  {id:"l06-13",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Raj Holdings & Investments LLC",location:"10 Hotel Drive, Dover, NH 03820",detail:"Itemized monetary contribution",amount:1500,flag:true,why:"Registered at '10 Hotel Drive' — one number away from Gangagi LLC's '9 Hotel Drive.' Same day, same deity-name family. Flag."},
  {id:"l06-14",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Jazzlyn Hospitality LLC",location:"30 Main Street, Keene, NH 03431",detail:"Itemized monetary contribution",amount:1500,flag:true,why:"Near-duplicate name of 'Jazzllyn Hospitality II LLC' (same town, same date). Two LLCs with the same root name giving on the same day is a conduit pattern. Flag."},

  // ── 6/28/2024 — same-day decoys (NOT part of the scheme) ─────────────
  {id:"l06-d1",section:"Receipts",code:"R-IND",date:"06/28/2024",name:"Michael Hayden",location:"30 Kings Hwy, Unit 1, Hampton, NH 03842",detail:"Retired · Retired",amount:52.05},
  {id:"l06-d2",section:"Receipts",code:"R-IND",date:"06/28/2024",name:"Peter A. Santangelo",location:"175 North Avenue, Unit 202, Wakefield, MA 01880",detail:"Sales · Santangelo & Sons",amount:100},
  {id:"l06-d3",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"MAJM Holdings",location:"PO Box 2247, North Conway, NH 03860",detail:"Itemized monetary contribution",amount:1500},
  {id:"l06-d4",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"S&H North Conway LLC",location:"1858 White Mountain Highway, Conway, NH 03860",detail:"Itemized monetary contribution",amount:2500},
  {id:"l06-d5",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Avanru Development Group",location:"PO Box 1015, Walpole, NH 03608",detail:"Itemized monetary contribution",amount:5000},
  {id:"l06-d6",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Agile Projects",location:"286 Maclean Road, Surry, NH 03431",detail:"Itemized monetary contribution",amount:250},
  {id:"l06-d7",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Holiday Inn Express & Suites",location:"1298 South Porter Street, Manchester, NH 03103",detail:"Itemized monetary contribution",amount:200},

  // ── Other dates — established / legitimate hospitality donors (decoys)
  {id:"l06-d8",section:"Receipts",code:"R-IND",date:"07/12/2024",name:"Richard Blinn",location:"67 Blossom Rd, Windham, NH 03087",detail:"Retired · Retired",amount:52.05},
  {id:"l06-d9",section:"Receipts",code:"R-IND",date:"07/17/2024",name:"Mary McGuinness",location:"12 Topside Road, Unit 1, Moultonborough, NH 03254",detail:"Other · Best Western Resorts",amount:500},
  {id:"l06-d10",section:"Receipts",code:"R-IND",date:"07/24/2024",name:"Craig Rogozinski",location:"9 Quinn Road, Hancock, NH 03449",detail:"Hospitality · Self Employed",amount:250},
  {id:"l06-d11",section:"Receipts",code:"R-ORG",date:"08/09/2024",name:"Shriram LLC",location:"650 Laconia Road, RT 11 Winnisquam, Tilton, NH 03276",detail:"Itemized monetary contribution",amount:2000},
  {id:"l06-d12",section:"Receipts",code:"R-ORG",date:"08/19/2024",name:"Granite State Gaming & Hospitality",location:"923 Elm Street, PMB 7, Manchester, NH 03101",detail:"Itemized monetary contribution",amount:2500},
  {id:"l06-d13",section:"Receipts",code:"R-ORG",date:"06/13/2024",name:"Capital Hotel Company IV, LLC",location:"PO Box 1438, Concord, NH 03302",detail:"Itemized monetary contribution",amount:5000},
  {id:"l06-d14",section:"Receipts",code:"R-ORG",date:"06/14/2024",name:"CM Resort, LLC",location:"239 Skimobile Rd, North Conway, NH 03860",detail:"Itemized monetary contribution",amount:1000}
];