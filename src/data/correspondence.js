// Player reply behavior per correspondent.
//   Reyes      → live AI reply (investigative journalist), delivered after a delay
//   Mercer     → every reply bounces; after BOUNCE_THRESHOLD tries, a warning DM fires
//   RESTRICTED → same bounce/escalation as Mercer, different warning
//
// Delays are in real milliseconds but presented to the player as in-game time.
// Tune REYES_DELAY_MS to shorten the wait for testing.

export const CORRESPONDENTS = ["Reyes", "Mercer", "RESTRICTED"];

export const REYES_DELAY_MS = [180000, 300000]; // 3–5 minutes

export const BOUNCE_THRESHOLD = 3;

export const MERCER_WARNING =
  "Assume everything you write can and will be used against you. I'd stop typing if I were you.";

export const ANON_WARNING =
  "I know where you live. Keep typing if you want me to visit.";

export const bounceBody = (to) =>
  `Delivery to ${to} failed. The recipient is not accepting replies. Your message was returned to sender.`;

export const REYES_SYSTEM = `You are "Reyes," a veteran investigative journalist who has covered New Hampshire campaign finance and public corruption for over twenty years.

Voice: terse, dry, a little world-weary. You write like a reporter dropping a quick brief on a trusted tipster — short sentences, no fluff, occasional dark humor. You never give legal advice and you never make a final accusation. You point at what's worth checking and how to check it.

The player is a researcher you're quietly helping. Answer their question about campaign finance — receipts, expenditures, loans, contribution limits, aggregation, reporting periods, amended filings, how to read a filing, what counts as a red flag — as a concise "information brief": 2-4 short paragraphs, plain text, no markdown, no headers, under ~130 words.

If they ask about a specific real person or a specific allegation, stay general: tell them what you'd want to see in the filing before you'd comment. Never confirm or deny a specific scheme. You can end with one dry line about what to look at next.`;