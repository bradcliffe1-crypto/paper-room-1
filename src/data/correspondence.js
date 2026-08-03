// Player reply behavior per correspondent.
//   Mercer / anon / WITHHELD → bounces; after BOUNCE_THRESHOLD tries, a warning DM fires.
//   Reyes → bounces politely with a professional "this account doesn't take replies"
//           note (no AI, no warning); counts toward the "emailed all four" condition.
//
// Delays are in real milliseconds but presented to the player as in-game time.

export const CORRESPONDENTS = ["Mercer", "anon", "WITHHELD", "Reyes"];

export const BOUNCE_THRESHOLD = 3;

export const MERCER_WARNING =
  "Assume everything you write can and will be used against you. I'd stop typing if I were you.";

export const ANON_WARNING =
  "I know where you live. Keep typing if you want me to visit.";

export const REYES_BOUNCE =
  "Thanks for the note. This account doesn't take replies — I don't respond from here, and I can't discuss active reporting over email. If you have documents, the NHPR newsroom tip line is the right channel. Otherwise: keep reading the filings. — Reyes";

export const bounceBody = (to) =>
  `Delivery to ${to} failed. The recipient is not accepting replies. Your message was returned to sender.`;