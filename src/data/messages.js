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
//              Reyes is not replyable. Notes stay general — they teach the law, not the answer.
//   Anon     — increasingly chilling at cases 4, 5, and 8.
//   Withheld — (1) after the 2nd Ayotte filing, formal, via a staffer;
//              (2) after the 3rd/final Ayotte filing, curt, from Kelly herself.

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
    body: "Reyes. NHPR. I cover New Hampshire campaign finance. You're working Mercer's casebook — your business. I don't take replies. After each case you close, I'll send you the law behind what you just read: what's actually illegal in this state, what's just ugly, and what a reporter would need before they'd run it. Read the field manual first. — Reyes",
    unlock: trainingDone
  },
  {
    id: "m-reyes-first",
    from: "Reyes",
    role: "journalist",
    time: "08:44",
    body: "Saw you closed Tally. You read past the memos. That's more than most. I'm Reyes. I cover money in this state. We haven't spoken — yet. Keep working. When you find something that smells like a story, I'll be around. — Reyes",
    unlock: done("personal-use")
  },
  {
    id: "reyes-l01",
    from: "Reyes",
    role: "journalist",
    time: "10:21",
    body: "Fronts. RSA 664:4 says no one may give anonymously, under a name that isn't their own, or in the guise of a loan. Each entity that gives is counted as a separate donor for the limit. What turns a cluster of donations into a crime is one person's money moving through them — a contribution in the name of another. The disclosure rules exist so you can see who gave. The rest is reading. — Reyes",
    unlock: done("l01")
  },
  {
    id: "reyes-l02",
    from: "Reyes",
    role: "journalist",
    time: "11:40",
    body: "Outlays. RSA 664:5 bars campaign funds from being spent on personal purposes. The test isn't the memo line — it's the payee and the purpose together. When what was bought doesn't serve the campaign, the label on the line doesn't matter. The Attorney General has pursued committees for exactly this. — Reyes",
    unlock: done("l02")
  },
  {
    id: "reyes-l03",
    from: "Reyes",
    role: "journalist",
    time: "13:05",
    body: "Origins. Sununu is a federal race — U.S. Senate — so this runs under FEC rules, not RSA 664. The FEC doesn't care where a donor lives. Any U.S. citizen or permanent resident may give up to the per-election cap. Out-of-state money isn't illegal; it's disclosed. The number you totaled isn't a violation — it's a measure of how much backing comes from outside the state. That's a story, not a charge. — Reyes",
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
    body: "Clipping. Appointees donating to the official who appointed them isn't illegal in New Hampshire — there's no state pay-to-play statute that catches it. What there is, is disclosure: every contribution over $50 is public with a name and address, larger ones with an employer. So a reporter can set one public list against another. That's correlation, not a crime — a lead you'd hand to someone like me. — Reyes",
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
    body: "Charges. Same statute as Outlays — RSA 664:5, no personal use. Small expenses can be legitimate in isolation and damning in aggregate. The question is always whether the spend served the campaign. When the payee's business doesn't match a campaign purpose, the memo stops being a label and starts being a question. — Reyes",
    unlock: done("l05")
  },
  {
    id: "reyes-l06",
    from: "Reyes",
    role: "journalist",
    time: "16:33",
    body: "Venues. Same law as Fronts — RSA 664:4. The statute doesn't care what the entities are called; it cares whether the money behind them is one donor's. Each entity is a separate donor for the limit. The crime is one person's cash routed through several names. Disclosure is what lets you see it. — Reyes",
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
    body: "Affiliations. Pappas is federal, so FEC rules. A multi-candidate political committee — a PAC — may give up to $5,000 per election to a candidate, and may give to as many candidates as it likes. Repeated giving by the same committee isn't a violation; it's the committee doing what it exists to do. The filings tell you who chose to back him. That's the whole point of the itemization. — Reyes",
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
    body: "Forgiven. RSA 664:4 says it outright: no contribution may be made in the guise of a loan. A candidate may lend their own campaign money — that's allowed, and the loan has to be reported with its terms. The moment that loan is forgiven, the forgiven amount becomes a contribution: it counts toward the limit and gets reported as one. — Reyes",
    unlock: done("l08")
  },
  {
    id: "reyes-l09",
    from: "Reyes",
    role: "journalist",
    time: "20:30",
    body: "Backers. Federal again, so FECA. A corporation can't give from its treasury to a federal candidate. But its executives can give as individuals up to the per-election cap, and its corporate PAC — a separate fund — can give $5,000 an election. Both get reported with employer and occupation. So 'corporate backing' is really executive personal checks plus PAC checks, all disclosed. The honest question a filing can answer: who's actually paying? — Reyes",
    unlock: done("l09")
  },
  {
    id: "reyes-l10",
    from: "Reyes",
    role: "journalist",
    time: "22:11",
    body: "Namesakes. RSA 664:4 bans giving under a name that isn't the donor's, and reimbursing someone to make a contribution is the same violation — using their name to hide your own. The disclosure rules make the donor's name and address public. The rest is reading. — Reyes",
    unlock: done("l10")
  },
  {
    id: "m-withheld-2",
    from: "WITHHELD",
    role: "politician",
    time: "23:48",
    body: "Enough. Walk away. — K",
    unlock: done("l10")
  }
];