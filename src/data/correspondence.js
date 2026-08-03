// Player reply behavior per correspondent.
//   Mercer / anon / WITHHELD → bounces; after BOUNCE_THRESHOLD tries, a warning DM fires.
//   Reyes is NOT replyable — he sends scripted debriefs only (see messages.js).
//
// Delays are in real milliseconds but presented to the player as in-game time.

export const CORRESPONDENTS = ["Mercer", "anon", "WITHHELD"];

export const BOUNCE_THRESHOLD = 3;

export const MERCER_WARNING =
  "Assume everything you write can and will be used against you. I'd stop typing if I were you.";

export const ANON_WARNING =
  "I know where you live. Keep typing if you want me to visit.";

export const bounceBody = (to) =>
  `Delivery to ${to} failed. The recipient is not accepting replies. Your message was returned to sender.`;