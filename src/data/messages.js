import { tutorials } from "@/data/tutorialLevels";

// Inbox messages. `unlock(progress)` decides when each appears.
// progress shape: { completed: [], scores: {}, readMessages: [], replies: [], pending: [] }
// Roles drive the accent color in the inbox UI:
//   operative (Mercer) · journalist (Reyes) · unknown (interference) · politician (Withheld)
//
// Cadence (per the director's script):
//   Mercer   — (1) on entering _desktop; (2) after case 6: congrats + vague warning.
//   Reyes    — intro on _desktop, then a one-way "note" after EACH case with the real
//              New Hampshire / federal campaign-finance law behind that case's theme.
//              Reyes is not replyable.
//   Anon     — increasingly chilling at cases 4, 5, and 8.
//   Withheld — (1) after the 2nd Ayotte filing, formal, via a staffer;
//              (2) after the 3rd/final Ayotte filing, informal, from Kelly herself.

const trainingDone = p => tutorials.every(t => p.completed.includes(t.id));
const done = id => p => p.completed.includes(id);

export const messages = [
  {
    id: "m-welcome",
    from: "Mercer",
    role: "operative",
    time: "01:14",
    body: "You're on the desktop now. Ten filings — each one a real New Hampshire report. Read the field manual before you touch any of them. Then we talk cases.",
    unlock: trainingDone
  },
  {
    id: "m-reyes-intro",
    from: "Reyes",
    role: "journalist",
    time: "09:02",
    body: "Name's Reyes. NHPR. I've been covering New Hampshire campaign finance longer than you've been alive. You're working through Mercer's casebook — fine. I don't take replies, but after every case you close I'll send you the real law behind what you just saw: what's actually illegal in this state, what's just ugly, and what a reporter would need before they'd run it. Read the field manual first. Then we go case by case. Don't tell him we talk.",
    unlock: trainingDone
  },
  {
    id: "reyes-l01",
    from: "Reyes",
    role: "journalist",
    time: "10:21",
    body: "Fronts. Here's the real law: RSA 664:4 says no one may give anonymously, under a name that isn't the donor's, or in any other concealed manner — and no contribution may be made 'in the guise of a loan.' The cap an individual or corporation may give a candidate is $15,000 per cycle (it was $1,000 an election until January 2025). A row of maxed LLCs at one registered-agent address on one day isn't illegal on its face — each entity is a separate donor for limit purposes. What makes it a crime is one person's money traveling through them. That's a contribution in the name of another. The shared address is visible because 664:6 forces itemization of every receipt over $50 with a name and address. You can't hide a shell — you can only hope no one reads the filing.",
    unlock: done("l01")
  },
  {
    id: "reyes-l02",
    from: "Reyes",
    role: "journalist",
    time: "11:40",
    body: "Outlays. RSA 664:5 bars campaign funds from being spent on personal purposes, and 664:4-b says surplus can't be used for personal use either. The test isn't the memo line — it's the payee and the purpose together. A salon charge billed as 'salon services' is personal grooming; a grocery charge billed as 'meals' is personal shopping; 'hostess gifts' is a social courtesy. None of those promote the candidate. The Attorney General has pursued committees for exactly this. The memo is a label, not a permission slip — when the payee's business doesn't match a campaign purpose, that's where 'sloppy bookkeeping' becomes a question of what the money was actually for.",
    unlock: done("l02")
  },
  {
    id: "reyes-l03",
    from: "Reyes",
    role: "journalist",
    time: "13:05",
    body: "Origins. Sununu's a federal race — U.S. Senate — so this one runs under FEC rules, not RSA 664. The FEC doesn't care where a donor lives. Any U.S. citizen or permanent resident may give up to the per-election cap (a few thousand dollars; primary and general are counted separately) to a candidate committee, and contributions over $200 in the aggregate per election get itemized with employer and occupation. Out-of-state money isn't illegal — it's disclosed. The number you just totaled isn't a violation; it's a measure of how much of his backing comes from outside New Hampshire. That's a story, not a charge.",
    unlock: done("l03")
  },
  {
    id: "m-anon-1",
    from: "anon",
    role: "unknown",
    time: "03:33",
    body: "Nice little hobby. Digging through filings. Hope it stays a hobby. People who look too close tend to find things they wish they hadn't. Just a friendly word.",
    unlock: done("l03")
  },
  {
    id: "reyes-l04",
    from: "Reyes",
    role: "journalist",
    time: "14:17",
    body: "Clipping. Here's the honest part: appointees donating to the governor who appointed them isn't illegal in New Hampshire. There's no state pay-to-play statute that catches a gubernatorial commission seat paired with a maxed check. What there is, is RSA 664:6 — every contribution over $50 is public with a name and address, and over $200 in the aggregate with an employer. So a reporter can cross-reference a commission roster against a donor list and find the overlap. That's correlation, not a crime. COGE-style patronage is a lead you'd hand to someone like me — I'd want the appointments, the dates of the checks, and the business ties before I'd write a line.",
    unlock: done("l04")
  },
  {
    id: "m-anon-2",
    from: "anon",
    role: "unknown",
    time: "02:17",
    body: "You're still looking. I told you it was a hobby. There are names in those filings that don't want to be read out loud. Keep going and one of them will learn yours.",
    unlock: done("l04")
  },
  {
    id: "reyes-l05",
    from: "Reyes",
    role: "journalist",
    time: "15:48",
    body: "Charges. Same statute as Outlays — RSA 664:5, no personal use — but with a sharper edge. Gas on the trail can be legitimate campaign travel; a year of it with no mileage log is a different question. Fast food, oil changes, a phone bill: each is defensible in isolation, damning in aggregate. The big one — a large payment to a vendor whose business doesn't match the memo — is where I'd start. The AG reads the payee, the purpose, and the pattern together, not the label on the line. When the vendor isn't in the business the memo claims, the question stops being 'was this a campaign expense' and starts being 'what did he actually buy.'",
    unlock: done("l05")
  },
  {
    id: "reyes-l06",
    from: "Reyes",
    role: "journalist",
    time: "16:33",
    body: "Venues. Same move as Fronts, different costume. A family of LLCs sharing one word in their names, all maxed on one day — that's a conduit cluster under RSA 664:4, same as the Whiby row. The statute doesn't care what the entities are called; it cares whether the money behind them is one donor's. The cap each one is hitting is $15,000 a cycle now (it was $1,000 an election until 2025 — these 2024 filings ran under the old limit). The tell is the shared date and the shared naming convention, both of which 664:6 makes you report. Two Ayotte filings, same signature. That's why I'd pull every LLC in her cycle before I called her office.",
    unlock: done("l06")
  },
  {
    id: "m-mercer-congrats",
    from: "Mercer",
    role: "operative",
    time: "11:58",
    body: "Six filings. You're still here. I'm almost impressed. Don't get comfortable. There are people — I won't say who — who've noticed what you're doing and would like to see your name in a different kind of report. Keep your head down. Keep reading.",
    unlock: done("l06")
  },
  {
    id: "m-withheld-1",
    from: "WITHHELD",
    role: "politician",
    time: "16:00",
    body: "On behalf of the Governor: she does not appreciate the aspersions you've been casting on her campaign. Consider this your only notice. — Office of the Governor",
    unlock: done("l06")
  },
  {
    id: "reyes-l07",
    from: "Reyes",
    role: "journalist",
    time: "17:52",
    body: "Affiliations. Pappas is federal again, so FEC rules. A multi-candidate political committee — a PAC — may give up to $5,000 per election to a candidate, and it may give to as many candidates as it likes. The pro-Israel committees do exactly that, every cycle, and it's all disclosed in the FEC filings. Repeated giving by the same committee isn't a violation; it's the committee doing what it exists to do. The 'affiliations' question is answered by the filings themselves — which committees chose to back him, and how often. That's the whole point of the itemization over $200.\n\nAnd free advice: be careful with Mercer. He points you at the filings and lets you take the risk.",
    unlock: done("l07")
  },
  {
    id: "m-anon-3",
    from: "anon",
    role: "unknown",
    time: "01:01",
    body: "I told you to stop. You didn't. I know your name now. I know where you sleep. Keep digging and I'll come say hello. This is the last time I ask nicely.",
    unlock: done("l07")
  },
  {
    id: "reyes-l08",
    from: "Reyes",
    role: "journalist",
    time: "19:04",
    body: "Forgiven. RSA 664:4 says it outright: no contribution may be made 'in the guise of a loan.' A candidate may lend their own campaign money — that's allowed, and the loan has to be reported with its terms. But the moment that loan is forgiven, the forgiven amount becomes a contribution: it counts toward the limit and gets reported as one. A run of forgiveness entries days apart, in different sizes, with no single accounting — that's a loan being melted into a gift on the installment plan. Each forgiven slice is a contribution in the guise of a loan, which is exactly what 664:4 forbids. The dates and the codes are the whole case.",
    unlock: done("l08")
  },
  {
    id: "reyes-l09",
    from: "Reyes",
    role: "journalist",
    time: "20:30",
    body: "Backers. Federal again, so FECA. A corporation can't give from its treasury to a federal candidate — that's been banned since the Tillman Act's descendants. But its executives can give as individuals up to the per-election cap, and its corporate PAC — a separate segregated fund — can give $5,000 an election. Both get reported with employer and occupation. So 'corporate backing' in a federal race is really executive personal checks plus PAC checks, all disclosed, all countable. The number you just totaled is the share of the filing that wears a tie — executives and PACs versus small individual donors. That's not a violation either. It's the most honest question you can ask of a filing: who's actually paying?",
    unlock: done("l09")
  },
  {
    id: "reyes-l10",
    from: "Reyes",
    role: "journalist",
    time: "22:11",
    body: "Namesakes. The textbook straw-donor bundle: a row of maxed checks from different names at one employer and one address on one day. RSA 664:4 bans giving 'under a name not that of the donor,' and reimbursing someone to make a contribution is the same violation — you're using their name to hide your own. The split across names is the dodge; the shared address and employer, disclosed under 664:6, is the tell. Same statute as Fronts, same mechanism as Venues — a single donor wearing many names to stay under the cap. Three Ayotte filings, three faces of the same trick. That's your case.",
    unlock: done("l10")
  },
  {
    id: "m-withheld-2",
    from: "WITHHELD",
    role: "politician",
    time: "23:48",
    body: "You've read three of mine now. Three. I don't know who you think you are, but I promise you this — I've buried bigger problems than you. Walk away. — K",
    unlock: done("l10")
  }
];