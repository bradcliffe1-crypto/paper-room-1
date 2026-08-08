// Level 10 — "Namesakes" · Kelly Ayotte
// Source: Kelly for New Hampshire (RSA 664) — itemized filings, 2024 cycle.
// Answer set = 7 lines tying back to the "Nucar Family of Dealerships" network:
// the parent "NuCar" entity, one real-estate affiliate at 489 Main Street,
// Gorham, two executives (Chairman, President) whose employer is "Nucar Family
// of Dealerships," and three "Nucar"-named dealership LLCs — dispersed across
// four dates (01/22, 02/07, 10/15, 10/16) so the network isn't obvious at a
// glance. Decoys include the unrelated "Boch" dealer cluster, other automotive
// groups, and ordinary individual donors. The player must search and
// cross-reference names, addresses, and employers to find all seven.

const WHY = {
  ORG: "A 'Nucar'-named dealership giving the maximum on the same day as affiliated Nucar dealerships — coordinated giving through a network of commonly owned entities. Flag for conduit review.",
  IND: "Maximum contribution from an executive of the 'Nucar Family of Dealerships' — the same ownership behind the dealership LLCs that also maxed out. Flag for coordination.",
  ADDR: "Real-estate LLC registered at 489 Main Street, Gorham — the headquarters address of 'NuCar.' An affiliated entity sharing the dealership's address. Flag for source review."
};

export const level10Lines = [
  // ── 01/22/2024 — Exploratory/Primary batch ──────────────────────────
  ["l10-01","R-ORG","01/22/2024","Boch Honda","128 Carnegie Row, Suite 200, Norwood, MA 02062-2062","Exploratory/Primary 2024 · Itemized Monetary Contribution",2900,false,""],
  ["l10-05","R-IND","01/22/2024","James Jacobs","P O Box 865, Durham, NH 03824-3824","Exploratory/Primary 2024 · Itemized Monetary Contribution",156.15,false,""],
  ["l10-06","R-ORG","01/22/2024","Nucar Automall of St Albans","118 Franklin Park West, Saint Albans City, VT 05478-5478","Exploratory/Primary 2024 · Itemized Monetary Contribution",5000,true,"ORG"],
  ["l10-02","R-ORG","01/22/2024","Boch Hyundai","391 Boston-Providence Turnpike, Norwood, MA 02062-2062","Exploratory/Primary 2024 · Itemized Monetary Contribution",2900,false,""],
  ["l10-30","R-IND","01/22/2024","Petter Skantze","2640 Greenway Drive, Jupiter, FL 33458-3458","Exploratory/Primary 2024 · Itemized Monetary Contribution",1000,false,""],
  ["l10-03","R-ORG","01/22/2024","Boch South","1076 Pleasant Street, Attleboro, MA 02703-2703","Exploratory/Primary 2024 · Itemized Monetary Contribution",5000,false,""],
  ["l10-31","R-IND","01/22/2024","South Automotive Warranty","128 Carnegie Row, Suite 200, Norwood, MA 02062-2062","Exploratory/Primary 2024 · Itemized Monetary Contribution",5000,false,""],
  ["l10-81","R-IND","01/22/2024","Robert Chen","55 Pine St, Manchester, NH 03102","Exploratory/Primary 2024 · Itemized Monetary Contribution",250,false,""],
  ["l10-04","R-ORG","01/22/2024","Boch Toyota North","128 Carnegie Row, Suite 200, Norwood, MA 02062-2062","Exploratory/Primary 2024 · Itemized Monetary Contribution",5000,false,""],
  ["l10-32","R-IND","01/22/2024","Tj Tuscai","570 Lanecrest Ln, Houston, TX 77024-7024","Exploratory/Primary 2024 · Itemized Monetary Contribution",1033.06,false,""],
  ["l10-82","R-ORG","01/22/2024","Granite State PAC","PO Box 456, Concord, NH 03301","Exploratory/Primary 2024 · Itemized Monetary Contribution",1000,false,""],
  ["l10-94","R-ORG","01/22/2024","Capital Auto Sales","455 Second St, Manchester, NH 03102","Exploratory/Primary 2024 · Itemized Monetary Contribution",2900,false,""],

  // ── 02/07/2024 — small Primary batch ───────────────────────────────
  ["l10-33","R-IND","02/07/2024","Jill Mack","91 Brick Mill Rd, Bedford, NH 03110-3110","Exploratory/Primary 2024 · Itemized Monetary Contribution",516.53,false,""],
  ["l10-34","R-ORG","02/07/2024","Nucar Ford of Plymouth","14 Town West Road, Plymouth, NH 03264-3264","Exploratory/Primary 2024 · Itemized Monetary Contribution",5000,true,"ORG"],
  ["l10-37","R-IND","02/07/2024","Scott Harrington","6 Tirrell Rd, Bedford, NH 03110-3110","Exploratory/Primary 2024 · Itemized Monetary Contribution",104.1,false,""],
  ["l10-36","R-IND","02/07/2024","RAH Rockingham-TY LLC","412 South Broadway, Salem, NH 03079","Exploratory/Primary 2024 · Itemized Monetary Contribution",5000,false,""],

  // ── 03/15–09/05/2024 — scattered individual & org decoys ────────────
  ["l10-76","R-IND","03/15/2024","Helen Park","8 Oakwood Dr, Hanover, NH 03755","Retired, Retired · General 2024",250,false,""],
  ["l10-83","R-IND","03/15/2024","Linda Whitmore","12 River Rd, Plymouth, NH 03264","Retired · General 2024",500,false,""],
  ["l10-77","R-IND","04/02/2024","Gregg Mortensen","22 Shore Rd, Alton, NH 03809","General 2024 · Itemized Monetary Contribution",500,false,""],
  ["l10-84","R-ORG","04/02/2024","Liberty Auto Group","88 Industrial Way, Salem, NH 03079","General 2024 · Itemized Monetary Contribution",2900,false,""],
  ["l10-78","R-IND","06/20/2024","Diane Reilly","14 Maple St, Concord, NH 03301","General 2024 · Itemized Monetary Contribution",1000,false,""],
  ["l10-85","R-IND","06/20/2024","Thomas Blackburn","7 Hillside Ln, Amherst, NH 03031","Physician · Concord Hospital · General 2024",1000,false,""],
  ["l10-79","R-IND","07/11/2024","Marcus Pell","12 Bridge St, Dover, NH 03820","Engineer · Self-employed · General 2024",300,false,""],
  ["l10-86","R-IND","07/11/2024","Patricia Doyle","303 Elm St, Manchester, NH 03101","Attorney · Devine Millimet · General 2024",500,false,""],
  ["l10-80","R-IND","08/14/2024","Sara Ng","44 Chestnut St, Dover, NH 03820","Pharmacist · CVS · General 2024",250,false,""],
  ["l10-87","R-IND","08/14/2024","Steven Park","19 College Rd, Durham, NH 03824","Professor · UNH · General 2024",250,false,""],
  ["l10-88","R-IND","09/05/2024","Margaret Sullivan","44 Pleasant St, Concord, NH 03301","Retired · General 2024",750,false,""],
  ["l10-89","R-ORG","09/05/2024","White Mountain Realty LLC","226 Main St, Laconia, NH 03246","General 2024 · Itemized Monetary Contribution",2900,false,""],

  // ── 10/15/2024 — General batch (ADDR + IND + NuCar parent) ──────────
  ["l10-40","R-IND","10/15/2024","Andrea Perry","PO BOX 201, Melvin Village, NH 03850","Retired, Retired · General 2024",2000,false,""],
  ["l10-38","R-ORG","10/15/2024","489 Main Street LLC","489 Main Street, Gorham, NH 03581","General 2024 · Itemized Monetary Contribution",5000,true,"ADDR"],
  ["l10-41","R-IND","10/15/2024","Augusta H. Petrone","PO Box 1037, Dublin, NH 03444","n/a · retired · General 2024",2066.12,false,""],
  ["l10-42","R-IND","10/15/2024","Christopher Marvin","400 Linden Oaks, Rochester, NY 14625","General 2024 · Itemized Monetary Contribution",100,false,""],
  ["l10-43","R-IND","10/15/2024","Daniel Dagesse","16101 Quiet Vista Circle, Delray Beach, FL 33446","Chairman · Nucar Family of Dealershi · General 2024",5000,true,"IND"],
  ["l10-44","R-IND","10/15/2024","Fund for America's Future","PO Box 1373, Columbia, SC 29202","General 2024 · Itemized Monetary Contribution",5000,false,""],
  ["l10-46","R-ORG","10/15/2024","NuCar","489 Main Street, Gorham, NH 03581","General 2024 · Itemized Monetary Contribution",5000,true,"ORG"],
  ["l10-45","R-IND","10/15/2024","Joan Herrington","4 Wilson Meadow Road, Bow, NH 03304","General 2024 · Itemized Monetary Contribution",104.1,false,""],
  ["l10-47","R-IND","10/15/2024","Shawn J. Hanlon","11 Mt. Carter Dr., Gorham, NH 03581","President · Nucar Family of Dealerships · General 2024",5000,true,"IND"],
  ["l10-90","R-IND","10/15/2024","Frank Lazarus","8 Sunset Dr, Wolfeboro, NH 03894","Retired · General 2024",500,false,""],
  ["l10-48","R-IND","10/15/2024","Sue Conaty","104 Lake Avenue, Sunapee, NH 03782","Retired, Retired · General 2024",5000,false,""],
  ["l10-49","R-IND","10/15/2024","Vic Denardi","69 Etna Rd #318, Lebanon, NH 03766","Athletics Administrator · Dartmouth College · General 2024",260.25,false,""],

  // ── 10/16/2024 — General batch (one Nucar dealership, many decoys) ───
  ["l10-50","R-IND","10/16/2024","Albert Vettese","35 Beauview Ave, Nashua, NH 03064","General 2024 · Itemized Monetary Contribution",104.1,false,""],
  ["l10-51","R-IND","10/16/2024","Bradford Bailey","40 Main Street, Littleton, NH 03561","Insurance Agent · State Farm · General 2024",250,false,""],
  ["l10-91","R-IND","10/16/2024","Donna Kowalski","15 School St, Hampton, NH 03842","Teacher · Hampton School District · General 2024",250,false,""],
  ["l10-52","R-IND","10/16/2024","Christopher Christie","46 Corey Lane, Mendham Township, NJ 07945","Owner · Christie Solutions LLC · General 2024",5000,false,""],
  ["l10-53","R-IND","10/16/2024","Kevin Hallenbeck","12 Magazine St, Bedford, NH 03110","Sales Consultant · BestSalesPeople · General 2024",516.53,false,""],
  ["l10-92","R-ORG","10/16/2024","Northeast Dealers Association","100 Congress St, Portland, ME 04101","General 2024 · Itemized Monetary Contribution",2900,false,""],
  ["l10-54","R-IND","10/16/2024","Michael Lucy","10 Wallis Drive, Wenham, NH 01984-1984","Retired, Retired · General 2024",104.1,false,""],
  ["l10-55","R-ORG","10/16/2024","New England Gaming and Consulting LLC","2 Amberwood Lane, Boxford, MA 01921","General 2024 · Itemized Monetary Contribution",5000,false,""],
  ["l10-93","R-IND","10/16/2024","William Tanaka","67 High St, Exeter, NH 03833","Retired · General 2024",1000,false,""],
  ["l10-74","R-IND","10/16/2024","Richard & Christie Morse Trust","2 Mulherrin Farm Road, Hanover, NH 03755","General 2024 · Itemized Monetary Contribution",2500,false,""],
  ["l10-73","R-ORG","10/16/2024","Nucar Volkswagen of Norwood","1280 Providence Highway, Norwood, MA 02062","General 2024 · Itemized Monetary Contribution",5000,true,"ORG"],
  ["l10-95","R-ORG","10/16/2024","Pioneer Valley Motors","88 State St, Springfield, MA 01103","General 2024 · Itemized Monetary Contribution",5000,false,""],
  ["l10-75","R-ORG","10/16/2024","The Christie Law Firm LLC","15 Maple Avenue, Morristown, NJ 07960","General 2024 · Itemized Monetary Contribution",5000,false,""]
].map(([id, code, date, name, location, detail, amount, flag, whyKey]) => ({ id, section: "Receipts", code, date, name, location, detail, amount, flag, why: WHY[whyKey] }));