import { useState } from "react";
import DisclaimerSlide from "@/components/game/DisclaimerSlide";

export default function OpeningScreen({ onEnter }) {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  if (showDisclaimer) return <DisclaimerSlide onDone={onEnter} />;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0b] px-7 text-center text-[#d8d5cd]">
      <button onClick={() => setShowDisclaimer(true)} className="group flex flex-col items-center">
        <p className="mb-6 font-mono text-xs tracking-[.3em] text-[#9a8f6a] transition group-hover:text-[#aea370]">CASEBOOK v.01</p>
        <h1 className="font-mono text-5xl lowercase tracking-[.05em] transition group-hover:text-[#9a8f6a] sm:text-7xl">paper room</h1>
      </button>
    </main>
  );
}