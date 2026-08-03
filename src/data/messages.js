import { tutorials } from "@/data/tutorialLevels";

// Inbox messages. `unlock(progress)` decides when each appears.
// progress shape: { completed: [], scores: {}, readMessages: [], replies: [], pending: [] }
// Roles drive the accent color in the inbox UI:
//   operative (Mercer) · journalist (Reyes) · unknown (interference) · politician (Withheld)
//
// Cadence (per the director's script):
//   Mercer   — (1) on entering _desktop; (2) after case 6: congrats + vague warning.
//   Reyes    — (1) after case 3: NHPR reporter, offers to help; (2) at case 7: "be careful with Mercer".
//   Anon     — increasingly chilling at cases 4, 5, and 8.
//   Withheld — (1) after the 2nd Ayotte filing, formal, via a staffer;
//              (2) after the 3rd/final Ayotte filing, informal, from Kelly herself.

const trainingDone = p => tutorials.every(t => p.completed.includes(t.id));
const l03done = p => p.completed.includes("l03");
const l04done = p => p.completed.includes("l04");
const l06done = p => p.completed.includes("l06");
const l07done = p => p.completed.includes("l07");
const l10done = p => p.completed.includes("l10");

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
    body: "Name's Reyes. NHPR. I've been covering campaign finance in this state longer than you've been alive. Heard you're auditing filings — for Mercer, which means you're either brave or naive. If you get stuck on a report, I'm reachable. Ask me anything. Don't tell him we talk.",
    unlock: l03done
  },
  {
    id: "m-anon-1",
    from: "anon",
    role: "unknown",
    time: "03:33",
    body: "Nice little hobby. Digging through filings. Hope it stays a hobby. People who look too close tend to find things they wish they hadn't. Just a friendly word.",
    unlock: l03done
  },
  {
    id: "m-anon-2",
    from: "anon",
    role: "unknown",
    time: "02:17",
    body: "You're still looking. I told you it was a hobby. There are names in those filings that don't want to be read out loud. Keep going and one of them will learn yours.",
    unlock: l04done
  },
  {
    id: "m-mercer-congrats",
    from: "Mercer",
    role: "operative",
    time: "11:58",
    body: "Six filings. You're still here. I'm almost impressed. Don't get comfortable. There are people — I won't say who — who've noticed what you're doing and would like to see your name in a different kind of report. Keep your head down. Keep reading.",
    unlock: l06done
  },
  {
    id: "m-reyes-becareful",
    from: "Reyes",
    role: "journalist",
    time: "12:41",
    body: "Be careful with Mercer. He points you at the filings and lets you take the risk. When this goes sideways — and it will — you'll be the one holding the shovel, not him. I'll keep helping. But watch your back.",
    unlock: l06done
  },
  {
    id: "m-withheld-1",
    from: "WITHHELD",
    role: "politician",
    time: "16:00",
    body: "On behalf of the Governor: she does not appreciate the aspersions you've been casting on her campaign. Consider this your only notice. — Office of the Governor",
    unlock: l06done
  },
  {
    id: "m-anon-3",
    from: "anon",
    role: "unknown",
    time: "01:01",
    body: "I told you to stop. You didn't. I know your name now. I know where you sleep. Keep digging and I'll come say hello. This is the last time I ask nicely.",
    unlock: l07done
  },
  {
    id: "m-withheld-2",
    from: "WITHHELD",
    role: "politician",
    time: "23:48",
    body: "You've read three of mine now. Three. I don't know who you think you are, but I promise you this — I've buried bigger problems than you. Walk away. — K",
    unlock: l10done
  }
];