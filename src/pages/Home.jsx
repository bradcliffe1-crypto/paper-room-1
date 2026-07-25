import { useEffect, useState } from "react";
import { tutorials } from "@/data/tutorialLevels";
import { levels } from "@/data/levels";
import OpeningScreen from "@/components/game/OpeningScreen";
import LevelMenu from "@/components/game/LevelMenu";
import FilingHeader from "@/components/game/FilingHeader";
import CaseBrief from "@/components/game/CaseBrief";
import FilingDocument from "@/components/game/FilingDocument";
import FilingTable from "@/components/game/FilingTable";
import SpreadsheetView from "@/components/game/SpreadsheetView";
import Debrief from "@/components/game/Debrief";
import AnalysisDebrief from "@/components/game/AnalysisDebrief";
import NewsHint from "@/components/game/NewsHint";

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

  const total = Object.values(progress.scores).reduce((a, b) => a + b, 0);
  const list = activeList === "tutorials" ? tutorials : levels;

  const choose = (listName, i) => {
    setActiveList(listName);
    setActiveIndex(i);
    setActiveLevel(listName === "tutorials" ? tutorials[i] : levels[i]);
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
      scores: { ...p.scores, [activeLevel.id]: Math.max(p.scores[activeLevel.id] || 0, score) }
    }));
    const nextIdx = activeIndex + 1;
    if (nextIdx < list.length && list[nextIdx].lines.length > 0) {
      setActiveIndex(nextIdx);
      setActiveLevel(list[nextIdx]);
      setSelected([]);
      setScreen("level");
    } else {
      setScreen("menu");
    }
  };

  if (screen === "opening") return <OpeningScreen onEnter={() => setScreen("menu")} />;
  if (screen === "menu")
    return <LevelMenu tutorials={tutorials} levels={levels} completed={progress.completed} score={total} onSelect={choose} />;

  const level = activeLevel;
  if (!level) return null;
  const type = level.type || "flag";

  if (screen === "debrief")
    return type === "flag"
      ? <Debrief level={level} selected={selected} onNext={next} onRetry={() => setScreen("level")} />
      : <AnalysisDebrief level={level} selected={selected} onNext={next} onRetry={() => setScreen("level")} />;

  const hasData = level.lines.length > 0;
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-[#d8d5cd]">
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
              <div className="max-h-[58vh] overflow-y-auto">
                <FilingTable lines={level.lines} selected={selected} onToggle={toggle} />
              </div>
              <button
                disabled={!selected.length}
                onClick={submit}
                className="mt-5 w-full bg-[#b0523e] px-6 py-4 font-bold uppercase tracking-wider text-white transition hover:bg-[#9a4536] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Submit flagged items
              </button>
            </>
          ) : (
            <>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-display text-2xl text-[#16161a]">Itemized activity</h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#75736d]">Search · select · total</span>
              </div>
              <SpreadsheetView lines={level.lines} selected={selected} onToggle={toggle} onToggleMany={toggleMany} />
              <button
                disabled={!selected.length}
                onClick={submit}
                className="mt-5 w-full bg-[#b0523e] px-6 py-4 font-bold uppercase tracking-wider text-white transition hover:bg-[#9a4536] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Submit findings
              </button>
            </>
          )}
        </FilingDocument>
      </div>
    </main>
  );
}