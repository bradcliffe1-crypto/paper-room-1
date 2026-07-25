// Inbox messages. `unlock(progress)` decides when each appears.
// progress shape: { completed: [], scores: {}, readMessages: [] }
// Roles drive the accent color in the inbox UI:
//   operative (Mercer) · journalist (Reyes) · unknown (interference)

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
    from: "RESTRICTED",
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
  }
];