import { useState, useEffect } from "react";
import { ArrowLeft, Mail, MailOpen, Send } from "lucide-react";
import { messages } from "@/data/messages";
import { CORRESPONDENTS } from "@/data/correspondence";

const ROLE_COLOR = { operative: "#9a8f6a", journalist: "#7a8a6a", unknown: "#b0523e", politician: "#6a7a8a" };

const fmtRemaining = (ms) => {
  const s = Math.max(0, Math.round(ms / 1000));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return m + ":" + String(r).padStart(2, "0");
};

function Row({ m, isRead, onOpen }) {
  return (
    <button onClick={onOpen} className="flex w-full items-center gap-4 border border-[#262629] bg-[#131316] p-5 text-left transition hover:border-[#3a3a3e] hover:bg-[#16161a]">
      {isRead ? <MailOpen size={16} className="shrink-0 text-[#5d5b56]" /> : <Mail size={16} className="shrink-0" style={{ color: ROLE_COLOR[m.role] }} />}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-[.15em]" style={{ color: ROLE_COLOR[m.role] }}>{m.from}</span>
          <span className="font-mono text-[10px] text-[#5d5b56]">{m.time}</span>
        </div>
        <p className="mt-2 truncate font-mono text-sm text-[#8c8a84]">{m.body}</p>
      </div>
      {!isRead && <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: ROLE_COLOR[m.role] }} />}
    </button>
  );
}

export default function Inbox({ progress, onBack, onRead, onReply }) {
  const [openId, setOpenId] = useState(null);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const read = progress.readMessages || [];
  const staticShown = messages.filter(m => m.unlock(progress));
  const replies = (progress.replies || []).slice().sort((a, b) => a.order - b.order);
  const pending = progress.pending || [];

  const open = openId ? [...staticShown, ...replies].find(m => m.id === openId) : null;
  const canReply = open && CORRESPONDENTS.includes(open.from);

  const send = async () => {
    if (!draft.trim() || sending) return;
    setSending(true);
    setStatus("");
    try {
      await onReply(open.from, draft);
      setDraft("");
      setStatus(open.from === "Reyes" ? "Sent. Reyes is drafting a reply — check back shortly." : "Returned to sender.");
    } catch {
      setStatus("Something went wrong. Try again.");
    } finally {
      setSending(false);
    }
  };

  if (open) {
    return (
      <main className="min-h-screen bg-[#0a0a0b] p-6 text-[#d8d5cd] sm:p-10">
        <div className="mx-auto max-w-2xl">
          <button onClick={() => { setOpenId(null); setStatus(""); setDraft(""); }} aria-label="Back" className="mb-10 text-[#75736d] transition hover:text-[#d8d5cd]">
            <ArrowLeft size={16} />
          </button>
          <div className="border border-[#262629] bg-[#131316] p-7">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[.2em]">
              <span style={{ color: ROLE_COLOR[open.role] }}>{open.from}</span>
              <span className="text-[#5d5b56]">{open.time}</span>
            </div>
            <p className="mt-5 whitespace-pre-line font-mono text-[14px] leading-7 text-[#c4c1ba]">{open.body}</p>
          </div>

          {canReply && (
            <div className="mt-6 border border-[#262629] bg-[#131316] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#75736d]">Reply to {open.from}</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                rows={4}
                placeholder={open.from === "Reyes" ? "Ask Reyes about campaign finance…" : "Write a reply…"}
                className="mt-4 w-full resize-none border border-[#262629] bg-[#0a0a0b] p-4 text-sm leading-6 text-[#d8d5cd] placeholder:text-[#5d5b56] focus:border-[#9a8f6a] focus:outline-none"
              />
              <div className="mt-4 flex items-center justify-between gap-4">
                <span className="text-xs text-[#8c8a84]">{status}</span>
                <button
                  onClick={send}
                  disabled={!draft.trim() || sending}
                  className="flex items-center gap-2 bg-[#9a8f6a] px-5 py-2.5 font-mono text-xs uppercase tracking-[.15em] text-[#0a0a0b] transition hover:bg-[#aea370] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send size={13} /> {sending ? "Sending…" : "Send"}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    );
  }

  const count = staticShown.length + replies.length;
  return (
    <main className="min-h-screen bg-[#0a0a0b] p-6 text-[#d8d5cd] sm:p-10">
      <div className="mx-auto max-w-2xl">
        <button onClick={onBack} aria-label="Back" className="mb-10 text-[#75736d] transition hover:text-[#d8d5cd]">
          <ArrowLeft size={16} />
        </button>
        <p className="text-sm text-[#75736d]">{count} message{count !== 1 ? "s" : ""}.</p>

        <div className="mt-8 space-y-2">
          {count === 0 && pending.length === 0 && <p className="text-sm text-[#5d5b56]">No messages yet. Keep working cases.</p>}

          {staticShown.map(m => {
            const isRead = read.includes(m.id);
            return <Row key={m.id} m={m} isRead={isRead} onOpen={() => { setOpenId(m.id); onRead(m.id); }} />;
          })}

          {pending.length > 0 && (
            <div className="pt-4">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[.2em] text-[#5d5b56]">Composing</p>
              {pending.map(p => (
                <div key={p.id} className="flex items-center gap-4 border border-dashed border-[#262629] bg-[#0f0f12] p-5">
                  <Mail size={16} className="shrink-0 text-[#5d5b56]" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-[.15em] text-[#7a8a6a]">Reyes</span>
                      <span className="font-mono text-[10px] text-[#5d5b56]">~{fmtRemaining(p.deliverAt - now)} left</span>
                    </div>
                    <p className="mt-2 text-sm text-[#75736d]">Drafting a reply…</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {replies.length > 0 && (
            <div className="pt-4">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[.2em] text-[#5d5b56]">Replies</p>
              {replies.map(m => {
                const isRead = read.includes(m.id);
                return <Row key={m.id} m={m} isRead={isRead} onOpen={() => { setOpenId(m.id); onRead(m.id); }} />;
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}