import { useState, useEffect } from "react";
import { messages } from "@/data/messages";

// Mercer's greeting changes as the player advances — a self-updating easter
// egg. The final message only appears after case 10 AND the player has
// replied to every correspondent, read every inbox message, and opened the
// field manual.
const MESSAGES = [
  "welcome aboard. don't make me regret this. opening this software means you've consented to enroll in our training program. complete the simulations. then we talk real cases.",
  "three down. you're still reading. most people quit when the numbers stop being fun. you didn't. keep going.",
  "five filings. you've read the receipts and the expenses now. you know what a campaign looks like — and what it doesn't. don't lose the thread.",
  "seven. you've been at this a while. the names start to repeat after a while, don't they? same money, different envelopes. that's not coincidence. that's the job.",
  "nine. almost through. you've read more of these than most people who run campaigns. one left. make it count.",
  "ten filings. every case closed. every message opened. every mailbox tried. you didn't just do the work — you lived in it. i don't say this often: you're ready. the real files are waiting. — M"
];

function pickMessage(progress) {
  const completed = progress?.completed || [];
  const sent = progress?.sent || {};
  const read = progress?.readMessages || [];
  const replies = progress?.replies || [];

  const allReplied = ["mercer", "anon", "withheld", "reyes"].every(k => (sent[k] || 0) > 0);
  const allEmailsRead =
    messages.every(m => read.includes(m.id)) && replies.every(r => read.includes(r.id));
  const manualRead = !!progress?.manualRead;

  if (completed.includes("l10") && allReplied && allEmailsRead && manualRead) return MESSAGES[5];
  if (completed.includes("l09")) return MESSAGES[4];
  if (completed.includes("l07")) return MESSAGES[3];
  if (completed.includes("l05")) return MESSAGES[2];
  if (completed.includes("l03")) return MESSAGES[1];
  return MESSAGES[0];
}

export default function IntroScreen({ progress, onContinue }) {
  const [message] = useState(() => pickMessage(progress));
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setText(message.slice(0, i));
      if (i >= message.length) {
        clearInterval(t);
        setDone(true);
      }
    }, 32);
    return () => clearInterval(t);
  }, [message]);

  const handleClick = () => {
    if (done) onContinue();
    else {
      setText(message);
      setDone(true);
    }
  };

  return (
    <main onClick={handleClick} className="flex min-h-screen cursor-pointer items-center justify-center bg-[#0a0a0b] px-6 text-[#d8d5cd]">
      <div className="max-w-xl">
        <p className="mb-5 font-mono text-xs uppercase tracking-[.2em] text-[#9a8f6a]">Mercer</p>
        <p className="font-mono text-lg leading-8 text-[#c4c1ba]">
          {text}
          {!done && <span className="ml-0.5 inline-block h-5 w-2 animate-pulse bg-[#9a8f6a] align-middle" />}
        </p>
        {done && <p className="mt-10 font-mono text-xs uppercase tracking-[.2em] text-[#5d5b56]">click to continue</p>}
      </div>
    </main>
  );
}