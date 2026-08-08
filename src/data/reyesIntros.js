// Reyes (journalist) delivers a pre-level message on levels that don't
// open with a unique Mercer briefing. Each message praises the player's
// progress (without naming the level) and points to real-world advocacy
// resources. Segments are typed across the screen; link segments render
// as clickable hyperlinks baked into the text.

export const reyesIntros = {
  l02: [
    { type: "text", content: "You're reading these filings like you've been doing it for years. The receipts, the shell addresses, the funny memos — you see them now. When you step away from this screen, the real records are waiting. New Hampshire posts every state-level filing in the open at " },
    { type: "link", content: "the Secretary of State's campaign finance system", url: "https://cfs.sos.nh.gov/" },
    { type: "text", content: ". For your members of Congress and every federal race, the " },
    { type: "link", content: "FEC", url: "https://www.fec.gov/" },
    { type: "text", content: " has every donor, every disbursement, every cycle. Pull up a name you trust. See where the money moves." }
  ],
  l04: [
    { type: "text", content: "You're not just flagging lines anymore — you're seeing the network behind them. That's the work. If this matters to you, there are people in New Hampshire who've been doing it for years. You can volunteer your time and learn the ropes with " },
    { type: "link", content: "Open Democracy Action", url: "https://www.opendemocracyaction.org/" },
    { type: "text", content: ", " },
    { type: "link", content: "Rights & Democracy NH", url: "https://radmovement.org/nh/" },
    { type: "text", content: ", the " },
    { type: "link", content: "League of Conservation Voters", url: "https://www.lcv.org/state/new-hampshire/" },
    { type: "text", content: ", " },
    { type: "link", content: "NH Peace Action", url: "https://nhpeaceaction.org/" },
    { type: "text", content: ", or " },
    { type: "link", content: "350 New Hampshire", url: "https://www.350nh.org/" },
    { type: "text", content: ". They'll put you to work." }
  ],
  l06: [
    { type: "text", content: "You've got the eye now. The patterns jump out before you even read the names. There are tools that do what you're doing here — but on every politician, every race, all the time. " },
    { type: "link", content: "OpenSecrets", url: "https://www.opensecrets.org/" },
    { type: "text", content: " profiles every federal donor and committee. " },
    { type: "link", content: "Citizens Count", url: "https://www.citizenscount.org/" },
    { type: "text", content: " tracks New Hampshire's legislature and candidates. " },
    { type: "link", content: "LegiScan", url: "https://legiscan.com/" },
    { type: "text", content: " indexes every bill. " },
    { type: "link", content: "Follow the Money", url: "https://www.followthemoney.org/" },
    { type: "text", content: " maps state-level contributions nationwide. Bookmark them. Use them." }
  ],
  l09: [
    { type: "text", content: "You caught the loans. That's the hardest thing in these filings — the money that quietly disappears. If you ever find something like this in the real records — something that looks like fraud, not just sloppiness — you don't have to let it sit. New Hampshire's Attorney General, John Formella, runs the Consumer Protection and Antitrust Bureau. You can reach them at " },
    { type: "link", content: "DOJ-CPB@doj.nh.gov", url: "mailto:DOJ-CPB@doj.nh.gov" },
    { type: "text", content: " or (603) 271-3641. A clear, documented request gets looked at. You've built the skills. Use them." }
  ],
  l10: [
    { type: "text", content: "You went through all of them. Every filing, every line, every flag. Most people don't make it past the first one. This is the part where I'd tell you to take a break. But I won't. The money never sleeps and neither do the people who move it. You've learned to read these filings — to see the straw donors, the shell LLCs, the personal expenses buried in campaign accounts, the loans that vanish. That's a skill almost nobody has. Don't let it go to waste. Open a real filing. Find a name. Follow the money. Write it down. Tell someone. The only thing that stops big money in politics is someone watching — and now you know how to watch. Keep going." }
  ]
};