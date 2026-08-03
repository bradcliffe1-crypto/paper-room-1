import { useEffect, useState } from "react";
import { tutorials, fieldManual } from "@/data/tutorialLevels";
import { levels } from "@/data/levels";
import { messages } from "@/data/messages";
import OpeningScreen from "@/components/game/OpeningScreen";
import IntroScreen from "@/components/game/IntroScreen";
import TrainingComplete from "@/components/game/TrainingComplete";
import LevelMenu from "@/components/game/LevelMenu";
import FilingHeader from "@/components/game/FilingHeader";
import CaseBrief from "@/components/game/CaseBrief";
import FilingDocument from "@/components/game/FilingDocument";
import FilingTable from "@/components/game/FilingTable";
import SpreadsheetView from "@/components/game/SpreadsheetView";
import Debrief from "@/components/game/Debrief";
import AnalysisDebrief from "@/components/game/AnalysisDebrief";
import NewsHint from "@/components/game/NewsHint";
import Inbox from "@/components/game/Inbox";
import ManualScreen from "@/components/game/ManualScreen";
import PinnedDock from "@/components/game/PinnedDock";
import { base44 } from "@/api/base44Client";
import { REYES_SYSTEM, REYES_DELAY_MS, BOUNCE_THRESHOLD, MERCER_WARNING, ANON_WARNING, bounceBody } from "@/data/correspondence";

const fmtTime = (ms) => {
  const d = new Date(ms);
  return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
};

export default function Home() {
  const [screen, setScreen] = useState("opening");
  const [activeLevel, setActiveLevel] = useState(null);
  const [activeList, setActiveList] = useState("tutorials");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState([]);
  const [progress, setProgress] = useState(() =>
    JSON.parse(localStorage.getItem("casebook-progress") || '{"completed":[],"scores":{}}')
  );

  useEffect(() => localStorage.setItem("casebook-progress", JSON.stringify(progress)), [progress]);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("unlock") === "all") {
      setProgress({
        completed: [...tutorials.map(t => t.id), ...levels.filter(l => !l.secret).map(l => l.id)],
        scores: {},
        readMessages: []
      });
      setScreen("menu");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const read = progress.readMessages || [];
  const replies = progress.replies || [];
  const unreadCount = messages.filter(m => m.unlock(progress) && !read.includes(m.id)).length
    + replies.filter(m => !read.includes(m.id)).length;

  const baseCaseIds = levels.filter(l => !l.secret).map(l => l.id);
  const allBaseComplete = baseCaseIds.every(id => progress.completed.includes(id));
  const allMailRead =
    messages.filter(m => m.unlock(progress)).every(m => read.includes(m.id)) &&
    replies.every(m => read.includes(m.id));
  const l11l12Complete = ["l11", "l12"].every(id => progress.completed.includes(id));
  const sentCounts = progress.sent || {};
  const emailedAllFour = ["mercer", "anon", "withheld", "reyes"].every(k => (sentCounts[k] || 0) > 0);
  const ctx = { allBaseComplete, allMailRead, l11l12Complete, emailedAllFour };

  const list = activeList === "tutorials" ? tutorials : levels;

  const choose = (listName, i) => {
    setActiveList(listName);
    setActiveIndex(i);
    setActiveLevel(listName === "tutorials" ? tutorials[i] : levels[i]);
    setSelected([]);
    setScreen("level");
  };

  const openManual = () => {
    setActiveLevel(fieldManual);
    setSelected([]);
    setScreen("level");
  };

  const toggle = id => setSelected(s => (s.includes(id) ? s.filter(x => x !== id) : [...s, id]));
  const toggleMany = (ids, select) =>
    setSelected(s => {
      const set = new Set(s);
      if (select) ids.forEach(id => set.add(id));
      else ids.forEach(id => set.delete(id));
      return [...set];
    });

  const computeScore = () => {
    const type = activeLevel.type || "flag";
    if (type === "flag") {
      return activeLevel.lines.filter(x => x.flag && selected.includes(x.id)).length * 100;
    }
    const correctLines = activeLevel.lines.filter(l => l.answer);
    const expected = correctLines.reduce((a, l) => a + l.amount, 0);
    const userLines = activeLevel.lines.filter(l => selected.includes(l.id));
    const userTotal = userLines.reduce((a, l) => a + l.amount, 0);
    const correctSel = userLines.filter(l => l.answer).length;
    const wrongSel = userLines.filter(l => !l.answer).length;
    return Math.max(0, correctSel * 100 - wrongSel * 50 + (userTotal === expected ? 200 : 0));
  };

  const submit = () => { if (selected.length) setScreen("debrief"); };

  const next = () => {
    const score = computeScore();
    setProgress(p => ({
      completed: [...new Set([...p.completed, activeLevel.id])],
      scores: { ...p.scores, [activeLevel.id]: Math.max(p.scores[activeLevel.id] || 0, score) },
      readMessages: p.readMessages || []
    }));
    const nextIdx = activeIndex + 1;
    if (nextIdx < list.length && list[nextIdx].lines.length > 0) {
      setActiveIndex(nextIdx);
      setActiveLevel(list[nextIdx]);
      setSelected([]);
      setScreen("level");
    } else if (activeList === "tutorials" && activeIndex === tutorials.length - 1) {
      setScreen("training-complete");
    } else {
      setScreen("menu");
    }
  };

  const markRead = id =>
    setProgress(p => ({ ...p, readMessages: [...new Set([...(p.readMessages || []), id])] }));

  useEffect(() => {
    const t = setInterval(() => {
      setProgress(p => {
        const now = Date.now();
        const due = (p.pending || []).filter(x => x.deliverAt <= now);
        if (!due.length) return p;
        return {
          ...p,
          pending: (p.pending || []).filter(x => x.deliverAt > now),
          replies: [...(p.replies || []), ...due.map(x => ({
            id: x.id, from: "Reyes", role: "journalist",
            time: fmtTime(x.deliverAt), body: x.body, order: x.order, isReply: true
          }))]
        };
      });
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const sendReply = async (to, text) => {
    const body = (text || "").trim();
    if (!body) return;
    if (to === "Reyes") {
      const res = await base44.integrations.Core.InvokeLLM({
        prompt: REYES_SYSTEM + "\n\n--- Tipster's message ---\n" + body,
        response_json_schema: { type: "object", properties: { brief: { type: "string" } }, required: ["brief"] }
      });
      const brief = res && typeof res === "object" && res.brief ? res.brief : (typeof res === "string" ? res : "");
      const delay = REYES_DELAY_MS[0] + Math.floor(Math.random() * (REYES_DELAY_MS[1] - REYES_DELAY_MS[0] + 1));
      setProgress(p => {
        const seq = (p.replySeq || 1000) + 1;
        return { ...p, replySeq: seq, sent: { ...(p.sent || {}), reyes: ((p.sent || {}).reyes || 0) + 1 }, pending: [...(p.pending || []), { id: "r-" + seq, deliverAt: Date.now() + delay, body: brief, order: seq }] };
      });
      return;
    }
    const key = to === "Mercer" ? "mercer" : to === "anon" ? "anon" : "withheld";
    setProgress(p => {
      const count = ((p.sent || {})[key] || 0) + 1;
      let seq = p.replySeq || 1000;
      const adds = [];
      seq += 1;
      adds.push({ id: "b-" + seq, from: "MAILER-DAEMON", role: "unknown", time: fmtTime(Date.now()), body: bounceBody(to), order: seq, isReply: true });
      let warnings = p.warnings || {};
      const fire = (to === "Mercer" || to === "anon") && count >= BOUNCE_THRESHOLD && !warnings[key];
      if (fire) {
        warnings = { ...warnings, [key]: true };
        seq += 1;
        adds.push({ id: "w-" + seq, from: to, role: to === "Mercer" ? "operative" : "unknown", time: fmtTime(Date.now()), body: to === "Mercer" ? MERCER_WARNING : ANON_WARNING, order: seq, isReply: true });
      }
      return { ...p, replySeq: seq, sent: { ...(p.sent || {}), [key]: count }, replies: [...(p.replies || []), ...adds], warnings };
    });
  };

  if (screen === "opening") return <OpeningScreen onEnter={() => setScreen("intro")} />;
  if (screen === "intro") return <IntroScreen onContinue={() => setScreen("menu")} />;
  if (screen === "training-complete") return <TrainingComplete onContinue={() => setScreen("menu")} />;
  if (screen === "inbox") return <Inbox progress={progress} onBack={() => setScreen("menu")} onRead={markRead} onReply={sendReply} />;
  if (screen === "menu")
    return (
      <LevelMenu
        tutorials={tutorials}
        levels={levels}
        completed={progress.completed}
        onSelect={choose}
        onOpenInbox={() => setScreen("inbox")}
        onOpenManual={openManual}
        unreadCount={unreadCount}
        ctx={ctx}
      />
    );

  const level = activeLevel;
  if (!level) return null;
  const type = level.type || "flag";

  if (screen === "debrief")
    return type === "flag"
      ? <Debrief level={level} selected={selected} onNext={next} onRetry={() => setScreen("level")} />
      : <AnalysisDebrief level={level} selected={selected} onNext={next} onRetry={() => setScreen("level")} />;

  if (type === "manual")
    return <ManualScreen level={level} onBack={() => setScreen("menu")} onComplete={() => setScreen("menu")} />;

  const hasData = level.lines.length > 0;
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-[#d8d5cd]">
      <PinnedDock unreadCount={unreadCount} onOpenInbox={() => setScreen("inbox")} onOpenManual={openManual} />
      <FilingHeader level={level} flagged={selected.length} onBack={() => setScreen("menu")} />
      <div className="mx-auto grid max-w-7xl gap-7 px-4 py-7 sm:px-7 lg:grid-cols-[290px_1fr]">
        <CaseBrief level={level} />
        <FilingDocument level={level}>
          {level.hint && <NewsHint hint={level.hint} />}
          {!hasData ? (
            <div className="border border-dashed border-[#b0ada3] bg-[#e3dfd6] p-12 text-center">
              <p className="font-display text-2xl text-[#16161a]">Filing data pending</p>
              <p className="mt-2 text-sm text-[#5d5b56]">Awaiting campaign finance data for {level.candidate}.</p>
            </div>
          ) : type === "flag" ? (
            <>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-display text-2xl text-[#16161a]">Itemized activity</h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#75736d]">Flag any lead</span>
              </div>
              <FilingTable lines={level.lines} selected={selected} onToggle={toggle} findOnPage={level.findOnPage} />
              <div className="sticky bottom-0 z-20 mt-5 border-t border-[#2a2a2c] bg-[#0a0a0b]/95 px-1 py-4 backdrop-blur">
                <button
                  disabled={!selected.length}
                  onClick={submit}
                  className="w-full bg-[#b0523e] px-6 py-4 font-bold uppercase tracking-wider text-white transition hover:bg-[#9a4536] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Submit flagged items
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-display text-2xl text-[#16161a]">Itemized activity</h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#75736d]">Search · select · total</span>
              </div>
              <SpreadsheetView lines={level.lines} selected={selected} onToggle={toggle} onToggleMany={toggleMany} analyzeTask={level.analyzeTask} />
              <div className="sticky bottom-0 z-20 mt-5 border-t border-[#2a2a2c] bg-[#0a0a0b]/95 px-1 py-4 backdrop-blur">
                <button
                  disabled={!selected.length}
                  onClick={submit}
                  className="w-full bg-[#b0523e] px-6 py-4 font-bold uppercase tracking-wider text-white transition hover:bg-[#9a4536] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Submit findings
                </button>
              </div>
            </>
          )}
        </FilingDocument>
      </div>
    </main>
  );
}