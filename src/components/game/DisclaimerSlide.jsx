import { useEffect, useState } from "react";

// A brief disclaimer slide shown for a few seconds after the player enters
// the game — like the legal/title cards that flash at the start of a real
// game. Click anywhere to skip early.
export default function DisclaimerSlide({ onDone, duration = 7000 }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLeaving(true), duration - 600);
    const end = setTimeout(onDone, duration);
    return () => { clearTimeout(t); clearTimeout(end); };
  }, [onDone, duration]);

  const finish = () => { setLeaving(true); setTimeout(onDone, 200); };

  return (
    <main
      onClick={finish}
      className="flex min-h-screen cursor-pointer flex-col items-center justify-center bg-[#0a0a0b] px-7 text-center"
    >
      <div className={`max-w-md transition-opacity duration-600 ${leaving ? "opacity-0" : "opacity-100"}`}>
        <p className="mb-8 font-mono text-[10px] uppercase tracking-[.3em] text-[#5d5b56]">disclaimer</p>
        <p className="font-mono text-[13px] leading-relaxed text-[#8c8a84]">
          This is not a work of fiction. The names, committees, transactions, and events depicted are drawn from real campaign-finance records. Any resemblance to real persons or political activity is entirely intentional.
        </p>
        <p className="mt-10 font-mono text-[10px] uppercase tracking-[.25em] text-[#3a3a3e]">click to continue</p>
      </div>
    </main>
  );
}