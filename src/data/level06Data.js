// Level 06 — "Venues" · Kelly Ayotte
// Source: "Kelly for New Hampshire" RSA 664 filings (the 8/21/2024 report).
// The flagged cluster is fourteen hospitality-industry LLCs — Hindu-deity and
// NH-place-named, several sharing "Hospitality" / "Hotel" in the name — all
// giving the maximum on the SAME day, 6/28/2024. The shared naming and
// coordinated timing suggest common ownership used to bundle contributions
// past the per-entity limit (a conduit / straw-donor scheme).
// Decoys are real same-day donors from the same report that are NOT part of
// the scheme (other businesses, individuals, a franchise hotel, an established
// hotel company, a casino-hospitality group) plus additional benign donors
// from the filing period so the player must read the naming pattern, not just
// the date. Flagged and decoy rows are heavily interleaved so the cluster
// isn't obvious at a glance.

export const level06Lines = [
  {id:"l06-d8",section:"Receipts",code:"R-IND",date:"07/12/2024",name:"Richard Blinn",location:"67 Blossom Rd, Windham, NH 03087",detail:"Retired · Retired",amount:52.05},
  {id:"l06-x01",section:"Receipts",code:"R-IND",date:"06/05/2024",name:"Robert Chase",location:"14 Meetinghouse Rd, Bedford, NH 03110",detail:"Attorney · Devine Millimet",amount:250},
  {id:"l06-x02",section:"Receipts",code:"R-IND",date:"06/08/2024",name:"Susan Whitfield",location:"9 College Hill, Hanover, NH 03755",detail:"Professor · Dartmouth College",amount:100},
  {id:"l06-01",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Priti Hospitality LLC",location:"135 New Hampshire 120, Lebanon, NH 03766",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"One of fourteen hospitality LLCs — deity and place names — all giving the maximum on 6/28/2024. The shared naming and single-day timing suggest common ownership bundling contributions past the per-entity limit. Flag."},
  {id:"l06-x03",section:"Receipts",code:"R-IND",date:"06/10/2024",name:"Thomas O'Brien",location:"222 Elm St, Manchester, NH 03101",detail:"Real Estate · O'Brien Group",amount:500},
  {id:"l06-x04",section:"Receipts",code:"R-IND",date:"06/12/2024",name:"Janet Kowalski",location:"8 Shadow Ln, Salem, NH 03079",detail:"Retired · Retired",amount:50},
  {id:"l06-d9",section:"Receipts",code:"R-IND",date:"07/17/2024",name:"Mary McGuinness",location:"12 Topside Road, Unit 1, Moultonborough, NH 03254",detail:"Other · Best Western Resorts",amount:500},
  {id:"l06-02",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Jazzllyn Hospitality II LLC",location:"120 Key Road, Keene, NH 03431",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Same-day hospitality LLC in the cluster — matching name family and maximum gift on 6/28/2024. Flag."},
  {id:"l06-x05",section:"Receipts",code:"R-IND",date:"06/15/2024",name:"Thomas More",location:"55 Islington St, Portsmouth, NH 03801",detail:"Physician · Portsmouth Regional",amount:1000},
  {id:"l06-x06",section:"Receipts",code:"R-IND",date:"06/18/2024",name:"Patricia Sullivan",location:"47 Main St, Nashua, NH 03060",detail:"Accountant · Self-employed",amount:200},
  {id:"l06-d15",section:"Receipts",code:"R-IND",date:"07/05/2024",name:"Thomas Peabody",location:"14 River Rd, Exeter, NH 03833",detail:"Retired · Retired",amount:100},
  {id:"l06-03",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Vidhi Hospitality LLC",location:"401 Winchester Street, Keene, NH 03431",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Same-day hospitality LLC in the cluster — another deity-named hotel entity maxing out on 6/28/2024. Flag."},
  {id:"l06-x07",section:"Receipts",code:"R-IND",date:"06/20/2024",name:"William Donnelly",location:"33 Pleasant St, Concord, NH 03301",detail:"Engineer · Self-employed",amount:150},
  {id:"l06-x08",section:"Receipts",code:"R-IND",date:"06/22/2024",name:"Margaret O'Hara",location:"18 Church St, Laconia, NH 03246",detail:"Retired · Retired",amount:100},
  {id:"l06-d10",section:"Receipts",code:"R-IND",date:"07/24/2024",name:"Craig Rogozinski",location:"9 Quinn Road, Hancock, NH 03449",detail:"Hospitality · Self Employed",amount:250},
  {id:"l06-04",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Mahalaxmi Hospitality LLC",location:"130 Main Street, Gorham, NH 03581",detail:"Itemized monetary contribution",amount:1500,flag:true,why:"Same-day hospitality LLC in the cluster — deity-named, same date. Flag."},
  {id:"l06-x09",section:"Receipts",code:"R-IND",date:"06/25/2024",name:"James Fitzpatrick",location:"61 Central Ave, Dover, NH 03820",detail:"Insurance · Cross Insurance",amount:300},
  {id:"l06-x10",section:"Receipts",code:"R-IND",date:"06/26/2024",name:"Carol Stevens",location:"22 Court St, Keene, NH 03431",detail:"Teacher · Keene School District",amount:75},
  {id:"l06-d13",section:"Receipts",code:"R-ORG",date:"06/13/2024",name:"Capital Hotel Company IV, LLC",location:"PO Box 1438, Concord, NH 03302",detail:"Itemized monetary contribution",amount:5000},
  {id:"l06-05",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Ossipee Hospitality LLC",location:"527 U.S. 3, Lincoln, NH 03251",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Same-day hospitality LLC in the cluster — NH-place-named, same date, maximum gift. Flag."},
  {id:"l06-x11",section:"Receipts",code:"R-IND",date:"06/27/2024",name:"Robert Langdon",location:"66 Front St, Exeter, NH 03833",detail:"Architect · LS&S Associates",amount:500},
  {id:"l06-x12",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"NH Automobile Dealers Association PAC",location:"120 N Main St, Concord, NH 03301",detail:"Registered political committee",amount:1000},
  {id:"l06-d14",section:"Receipts",code:"R-ORG",date:"06/14/2024",name:"CM Resort, LLC",location:"239 Skimobile Rd, North Conway, NH 03860",detail:"Itemized monetary contribution",amount:1000},
  {id:"l06-06",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Amba Hotel LLC",location:"21 Railroad Street, Lincoln, NH 03251",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Same-day hotel LLC in the cluster — deity-named, same date, same town as Ossipee Hospitality. Flag."},
  {id:"l06-x13",section:"Receipts",code:"R-IND",date:"07/01/2024",name:"Linda Pearson",location:"9 Bank St, Lebanon, NH 03766",detail:"Nurse · Dartmouth-Hitchcock",amount:100},
  {id:"l06-x14",section:"Receipts",code:"R-IND",date:"07/03/2024",name:"David McCarthy",location:"5 Mammoth Rd, Londonderry, NH 03053",detail:"Construction · McCarthy Builders",amount:250},
  {id:"l06-d1",section:"Receipts",code:"R-IND",date:"06/28/2024",name:"Michael Hayden",location:"30 Kings Hwy, Unit 1, Hampton, NH 03842",detail:"Retired · Retired",amount:52.05},
  {id:"l06-07",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Gangagi LLC",location:"9 Hotel Drive, Dover, NH 03820",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Not labeled 'hospitality,' but registered at '9 Hotel Drive' — part of the same-day hotel cluster and matching the deity-name pattern. Flag."},
  {id:"l06-x15",section:"Receipts",code:"R-IND",date:"07/06/2024",name:"Jennifer Walsh",location:"14 Daniel Webster Hwy, Merrimack, NH 03054",detail:"Marketing · Self-employed",amount:150},
  {id:"l06-x16",section:"Receipts",code:"R-IND",date:"07/08/2024",name:"Steven Brown",location:"77 Farmington Rd, Rochester, NH 03867",detail:"Retired · Retired",amount:50},
  {id:"l06-d2",section:"Receipts",code:"R-IND",date:"06/28/2024",name:"Peter A. Santangelo",location:"175 North Avenue, Unit 202, Wakefield, MA 01880",detail:"Sales · Santangelo & Sons",amount:100},
  {id:"l06-08",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Dhyan Hotel LLC",location:"97 Hail St, Concord, NH 03301",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Same-day hotel LLC in the cluster — deity-named, same date. Flag."},
  {id:"l06-x17",section:"Receipts",code:"R-IND",date:"07/10/2024",name:"Edward Kennedy",location:"200 Ocean Blvd, Hampton, NH 03842",detail:"Attorney · McLane Middleton",amount:500},
  {id:"l06-x18",section:"Receipts",code:"R-IND",date:"07/14/2024",name:"Karen Mitchell",location:"45 Opera Block, Claremont, NH 03743",detail:"Self Employed · Mitchell Consulting",amount:200},
  {id:"l06-d3",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"MAJM Holdings",location:"PO Box 2247, North Conway, NH 03860",detail:"Itemized monetary contribution",amount:1500},
  {id:"l06-09",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Naksh Hospitality LLC",location:"860 South Porter Street, Manchester, NH 03103",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Same-day hospitality LLC in the cluster — deity-named, same date, maximum gift. Flag."},
  {id:"l06-x19",section:"Receipts",code:"R-ORG",date:"07/15/2024",name:"NH Builders Association PAC",location:"120 N Main St, Concord, NH 03301",detail:"Registered political committee",amount:2500},
  {id:"l06-x20",section:"Receipts",code:"R-IND",date:"07/19/2024",name:"Barbara Lewis",location:"3 Wolfeboro Rd, Wolfeboro, NH 03894",detail:"Retired · Retired",amount:100},
  {id:"l06-d4",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"S&H North Conway LLC",location:"1858 White Mountain Highway, Conway, NH 03860",detail:"Itemized monetary contribution",amount:2500},
  {id:"l06-10",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Shloke Hospitality LLC",location:"2 Main Street, Durham, NH 03824",detail:"Itemized monetary contribution",amount:1500,flag:true,why:"Same-day hospitality LLC in the cluster — deity-named, same date. Flag."},
  {id:"l06-x21",section:"Receipts",code:"R-IND",date:"07/22/2024",name:"Frank Galloway",location:"18 Pine St, Plymouth, NH 03264",detail:"Retired · Retired",amount:75},
  {id:"l06-x22",section:"Receipts",code:"R-IND",date:"07/26/2024",name:"Dorothy Nash",location:"110 Main St, New London, NH 03257",detail:"Physician · New London Hospital",amount:300},
  {id:"l06-d5",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Avanru Development Group",location:"PO Box 1015, Walpole, NH 03608",detail:"Itemized monetary contribution",amount:5000},
  {id:"l06-11",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Naveesha Hospitality LLC",location:"650 Borthwick Avenue, Portsmouth, NH 03801",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Same-day hospitality LLC in the cluster — deity-named, same date, maximum gift. Flag."},
  {id:"l06-x23",section:"Receipts",code:"R-IND",date:"07/28/2024",name:"Henry Abbott",location:"42 Ridge Rd, Gilford, NH 03249",detail:"Engineering · Hoyle Tanner",amount:250},
  {id:"l06-x24",section:"Receipts",code:"R-IND",date:"07/30/2024",name:"Catherine Moore",location:"7 High St, Hanover, NH 03755",detail:"Retired · Retired",amount:50},
  {id:"l06-d6",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Agile Projects",location:"286 Maclean Road, Surry, NH 03431",detail:"Itemized monetary contribution",amount:250},
  {id:"l06-12",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Conway Hospitality LLC",location:"1439 White Mountain Highway, Conway, NH 03818",detail:"Itemized monetary contribution",amount:2500,flag:true,why:"Same-day hospitality LLC in the cluster — NH-place-named, same date. Flag."},
  {id:"l06-x25",section:"Receipts",code:"R-IND",date:"08/01/2024",name:"George Sumner",location:"88 Spring St, Portsmouth, NH 03801",detail:"Finance · Bank of NH",amount:500},
  {id:"l06-x26",section:"Receipts",code:"R-IND",date:"08/03/2024",name:"Helen Vargas",location:"24 Chestnut St, Nashua, NH 03060",detail:"Teacher · Nashua School District",amount:100},
  {id:"l06-d7",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Holiday Inn Express & Suites",location:"1298 South Porter Street, Manchester, NH 03103",detail:"Itemized monetary contribution",amount:200},
  {id:"l06-13",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Raj Holdings & Investments LLC",location:"10 Hotel Drive, Dover, NH 03820",detail:"Itemized monetary contribution",amount:1500,flag:true,why:"Registered at '10 Hotel Drive' — one number away from Gangagi LLC's '9 Hotel Drive.' Same day, same deity-name family. Flag."},
  {id:"l06-x27",section:"Receipts",code:"R-IND",date:"08/05/2024",name:"Raymond Holt",location:"16 Amherst St, Manchester, NH 03101",detail:"Attorney · Shaheen & Gordon",amount:250},
  {id:"l06-x28",section:"Receipts",code:"R-IND",date:"08/07/2024",name:"Martha Lloyd",location:"5 Pleasant St, Concord, NH 03301",detail:"Retired · Retired",amount:75},
  {id:"l06-d16",section:"Receipts",code:"R-IND",date:"08/02/2024",name:"Laura Finn",location:"33 Pleasant St, Concord, NH 03301",detail:"Accountant · Self-employed",amount:250},
  {id:"l06-14",section:"Receipts",code:"R-ORG",date:"06/28/2024",name:"Jazzlyn Hospitality LLC",location:"30 Main Street, Keene, NH 03431",detail:"Itemized monetary contribution",amount:1500,flag:true,why:"Near-duplicate name of 'Jazzllyn Hospitality II LLC' (same town, same date). Two LLCs with the same root name giving on the same day is a conduit pattern. Flag."},
  {id:"l06-x29",section:"Receipts",code:"R-IND",date:"08/10/2024",name:"Patrick Donahue",location:"33 School St, Salem, NH 03079",detail:"Construction · Donahue Bros",amount:200},
  {id:"l06-x30",section:"Receipts",code:"R-IND",date:"08/12/2024",name:"Ruth Caldwell",location:"9 Oak St, Laconia, NH 03246",detail:"Retired · Retired",amount:100},
  {id:"l06-d11",section:"Receipts",code:"R-ORG",date:"08/09/2024",name:"Shriram LLC",location:"650 Laconia Road, RT 11 Winnisquam, Tilton, NH 03276",detail:"Itemized monetary contribution",amount:2000},
  {id:"l06-x31",section:"Receipts",code:"R-IND",date:"08/14/2024",name:"Joseph Cheng",location:"120 Spaulding Dr, Rochester, NH 03867",detail:"Engineering · Self-employed",amount:500},
  {id:"l06-x32",section:"Receipts",code:"R-IND",date:"08/16/2024",name:"Alice Whitman",location:"44 Court St, Plymouth, NH 03264",detail:"Nurse · Speare Memorial",amount:150},
  {id:"l06-d12",section:"Receipts",code:"R-ORG",date:"08/19/2024",name:"Granite State Gaming & Hospitality",location:"923 Elm Street, PMB 7, Manchester, NH 03101",detail:"Itemized monetary contribution",amount:2500},
  {id:"l06-d17",section:"Receipts",code:"R-ORG",date:"09/10/2024",name:"White Mountains Tourism Bureau PAC",location:"Lincoln, NH",detail:"Registered political committee",amount:1000}
];