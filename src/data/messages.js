import { levels } from "@/data/levels";

// Inbox messages. `unlock(progress)` decides when each appears.
// progress shape: { completed: [], scores: {}, readMessages: [], replies: [], pending: [] }
// Roles drive the accent color in the inbox UI:
//   operative (Mercer) · journalist (Reyes) · unknown (interference) · politician (nameless)
//
// Two kinds of message:
//   1) recurring-narrative beats, unlocked by overall progress
//   2) one per real case file, unlocked exactly when that case becomes playable
//      (its filing data exists AND the previous case is completed)

const caseUnlocked = i => p =>
  levels[i].lines.length > 0 && (i === 0 || p.completed.includes(levels[i - 1].id));

export const messages = [
  {
    id: "m-welcome",
    from: "Mercer",
    role: "operative",
    time: "01:14",
    body: "You're in. Don't make me regret it. Read the field manual first — learn what a filing looks like before you start flagging. Then we talk real cases.",
    unlock: () => true
  },
  {
    id: "m-anon-backoff",
    from: "anon",
    role: "unknown",
    time: "03:33",
    body: "Nice little hobby. Digging through filings. Hope it stays a hobby. People who look too close tend to find things they wish they hadn't. Just a friendly word.",
    unlock: p => p.completed.length >= 1
  },
  {
    id: "m-reyes-intro",
    from: "Reyes",
    role: "journalist",
    time: "09:02",
    body: "Heard you're working with Mercer. Careful with that one. I cover these filings for a living — if you get stuck, I might know where to look. Don't tell him we talk.",
    unlock: p => p.completed.length >= 3
  },
  {
    id: "m-reyes-tip",
    from: "Reyes",
    role: "journalist",
    time: "11:48",
    body: "Got a tip. The filings hold more than what's on the surface. Flag every suspicious line you can find — across every case, not just one. Something opens when you do. That's all I can say for now.",
    unlock: p => p.completed.length >= 5
  },
  {
    id: "m-withheld-ayotte",
    from: "WITHHELD",
    role: "politician",
    time: "00:00",
    body: "On behalf of the Governor: she does not appreciate the aspersions you've been casting on her campaign. Consider this your only notice. — Office of the Governor",
    unlock: p => ["l04", "l06", "l10"].every(id => p.completed.includes(id))
  },

  // — case file unlock notifications —
  {
    id: "case-l01",
    from: "Mercer",
    role: "operative",
    time: "02:40",
    body: "New file's live. Stephen. Start with the receipts. Come back when something doesn't add up.",
    unlock: caseUnlocked(0)
  },
  {
    id: "case-l02",
    from: "WITHHELD",
    role: "politician",
    time: "04:12",
    body: "A filing went public. Hill. I'd have preferred it stayed buried. — [name withheld]",
    unlock: caseUnlocked(1)
  },
  {
    id: "case-l03",
    from: "Reyes",
    role: "journalist",
    time: "05:55",
    body: "Sununu's open. Count the out-of-state money before you flag anything. I want a number, not a feeling.",
    unlock: caseUnlocked(2)
  },
  {
    id: "case-l04",
    from: "Mercer",
    role: "operative",
    time: "07:21",
    body: "Ayotte. Someone left a clipping under my door. Read it first, then read her filing. Tell me whose names show up in both.",
    unlock: caseUnlocked(3)
  },
  {
    id: "case-l05",
    from: "WITHHELD",
    role: "politician",
    time: "08:09",
    body: "Kenny's filings are up. Small race. Watch what he buys. — [name withheld]",
    unlock: caseUnlocked(4)
  },
  {
    id: "case-l06",
    from: "Reyes",
    role: "journalist",
    time: "09:47",
    body: "Ayotte again. Follow the money through the names you can't place. It stops making sense before it stops moving.",
    unlock: caseUnlocked(5)
  },
  {
    id: "case-l07",
    from: "Mercer",
    role: "operative",
    time: "10:30",
    body: "Pappas. Certain committees. Find them. Total what they gave. I want a number.",
    unlock: caseUnlocked(6)
  },
  {
    id: "case-l08",
    from: "WITHHELD",
    role: "politician",
    time: "12:05",
    body: "Stephen borrowed. Then the borrowing stopped making sense. Loans are a door. Look behind it. — [name withheld]",
    unlock: caseUnlocked(7)
  },
  {
    id: "case-l09",
    from: "Reyes",
    role: "journalist",
    time: "13:51",
    body: "Sununu again. How much is corporate — executives, PACs — versus real people? Run the numbers. Tell me what it says.",
    unlock: caseUnlocked(8)
  },
  {
    id: "case-l10",
    from: "Mercer",
    role: "operative",
    time: "15:19",
    body: "Ayotte's donors are live. Some of those names shouldn't be giving that much. That's all I'll say.",
    unlock: caseUnlocked(9)
  }
];