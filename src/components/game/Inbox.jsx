import { useState } from "react";
import { ArrowLeft, Mail, MailOpen } from "lucide-react";
import { messages } from "@/data/messages";

const ROLE_COLOR = { operative: "#9a8f6a", journalist: "#7a8a6a", unknown: "#b0523e" };

export default function Inbox({ progress, onBack, onRead }) {
  const [openId, setOpenId] = useState(null);
  const read = progress.readMessages || [];
  const unlocked = messages.filter(m => m.unlock(progress));
  const open = openId ? messages.find(m => m.id === openId) : null;

  if (open) {
    return (
      <main className="min-h-screen bg-[#0a0a0b] p-6 text-[#d8d5cd] sm:p-10">
        <div className="mx-auto max-w-2xl">
          <button onClick={() => setOpenId(null)} className="mb-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[.2em] text-[#75736d] hover:text-[#d8d5cd]">
            <ArrowLeft size={15} /> Inbox
          </button>
          <div className="border border-[#262629] bg-[#131316] p-7">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[.2em]">
              <span style={{ color: ROLE_COLOR[open.role] }}>{open.from}</span>
              <span className="text-[#5d5b56]">{open.time}</span>
            </div>
            <p className="mt-5 text-[15px] leading-7 text-[#c4c1ba]">{open.body}</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0b] p-6 text-[#d8d5cd] sm:p-10">
      <div className="mx-auto max-w-2xl">
        <button onClick={onBack} className="mb-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[.2em] text-[#75736d] hover:text-[#d8d5cd]">
          <ArrowLeft size={15} /> Casebook
        </button>
        <p className="font-mono text-xs uppercase tracking-[.24em] text-[#9a8f6a]">MESSAGES</p>
        <h1 className="mt-3 font-display text-5xl tracking-[-.03em]">Inbox</h1>
        <p className="mt-3 text-sm text-[#75736d]">{unlocked.length} message{unlocked.length !== 1 ? "s" : ""}. Some senders prefer to stay anonymous.</p>
        <div className="mt-8 space-y-2">
          {unlocked.length === 0 && <p className="text-sm text-[#5d5b56]">No messages yet. Keep working cases.</p>}
          {unlocked.map(m => {
            const isRead = read.includes(m.id);
            return (
              <button
                key={m.id}
                onClick={() => { setOpenId(m.id); onRead(m.id); }}
                className="flex w-full items-center gap-4 border border-[#262629] bg-[#131316] p-5 text-left transition hover:border-[#3a3a3e] hover:bg-[#16161a]"
              >
                {isRead ? <MailOpen size={16} className="shrink-0 text-[#5d5b56]" /> : <Mail size={16} className="shrink-0" style={{ color: ROLE_COLOR[m.role] }} />}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-[.15em]" style={{ color: ROLE_COLOR[m.role] }}>{m.from}</span>
                    <span className="font-mono text-[10px] text-[#5d5b56]">{m.time}</span>
                  </div>
                  <p className="mt-2 truncate text-sm text-[#8c8a84]">{m.body}</p>
                </div>
                {!isRead && <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: ROLE_COLOR[m.role] }} />}
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}