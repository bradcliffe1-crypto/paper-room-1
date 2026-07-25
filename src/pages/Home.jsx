import { useEffect, useState } from "react";
import { tutorials } from "@/data/tutorialLevels";
import OpeningScreen from "@/components/game/OpeningScreen";
import LevelMenu from "@/components/game/LevelMenu";
import FilingHeader from "@/components/game/FilingHeader";
import CaseBrief from "@/components/game/CaseBrief";
import FilingDocument from "@/components/game/FilingDocument";
import FilingTable from "@/components/game/FilingTable";
import Debrief from "@/components/game/Debrief";

export default function Home() {
  const [screen,setScreen]=useState("opening"), [index,setIndex]=useState(0), [selected,setSelected]=useState([]);
  const [progress,setProgress]=useState(()=>JSON.parse(localStorage.getItem("casebook-progress")||'{"completed":[],"scores":{}}'));
  useEffect(()=>localStorage.setItem("casebook-progress",JSON.stringify(progress)),[progress]);
  const level=tutorials[index], total=Object.values(progress.scores).reduce((a,b)=>a+b,0);
  const choose=i=>{setIndex(i);setSelected([]);setScreen("level");};
  const submit=()=>{if(selected.length)setScreen("debrief");};
  const next=()=>{const score=level.lines.filter(x=>x.flag&&selected.includes(x.id)).length*100;setProgress(p=>({completed:[...new Set([...p.completed,level.id])],scores:{...p.scores,[level.id]:Math.max(p.scores[level.id]||0,score)}}));if(index<tutorials.length-1)choose(index+1);else setScreen("menu");};
  if(screen==="opening") return <OpeningScreen onEnter={()=>setScreen("menu")}/>;
  if(screen==="menu") return <LevelMenu levels={tutorials} completed={progress.completed} score={total} onSelect={choose}/>;
  if(screen==="debrief") return <Debrief level={level} selected={selected} onNext={next} onRetry={()=>setScreen("level")}/>;
  return <main className="min-h-screen bg-[#d8d1c3] text-[#172529]"><FilingHeader level={level} flagged={selected.length} onBack={()=>setScreen("menu")}/><div className="mx-auto grid max-w-7xl gap-7 px-4 py-7 sm:px-7 lg:grid-cols-[290px_1fr]"><CaseBrief level={level}/><FilingDocument level={level}><div className="mb-3 flex items-center justify-between"><h3 className="font-display text-2xl">Itemized activity</h3><span className="font-mono text-[10px] uppercase tracking-widest">Click the flag on any lead</span></div><FilingTable lines={level.lines} selected={selected} onToggle={id=>setSelected(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id])}/><button disabled={!selected.length} onClick={submit} className="mt-6 w-full bg-[#9c342d] px-6 py-4 font-bold text-white transition hover:bg-[#7e2924] disabled:cursor-not-allowed disabled:opacity-40">Submit flagged items for review</button></FilingDocument></div></main>;
}