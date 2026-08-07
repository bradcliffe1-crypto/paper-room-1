import { useState, useEffect } from "react";

const MESSAGE =
  "training complete. if you're seeing this message, you've successfully finished the training module and are ready to audit actual political finances. your employer has queued ten filing reports on your desktop — each requiring extra scrutiny. good luck.";

export default function TrainingComplete({ onContinue }) {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setText(MESSAGE.slice(0, i));
      if (i >= MESSAGE.length) {
        clearInterval(t);
        setDone(true);
      }
    }, 32);
    return () => clearInterval(t);
  }, []);

  const handleClick = () => {
    if (done) onContinue();
    else {
      setText(MESSAGE);
      setDone(true);
    }
  };

  return (
    <main onClick={handleClick} className="flex min-h-screen cursor-pointer items-center justify-center bg-[#0a0a0b] px-6 text-[#d8d5cd]">
      <div className="max-w-xl">
        <p className="mb-5 font-mono text-xs uppercase tracking-[.2em] text-[#6a7a8a]">system</p>
        <p className="font-mono text-lg leading-8 text-[#c4c1ba]">
          {text}
          {!done && <span className="ml-0.5 inline-block h-5 w-2 animate-pulse bg-[#6a7a8a] align-middle" />}
        </p>
        {done && (
          <p className="mt-8 font-mono text-[11px] leading-6 text-[#5d5b56]">
            This is not a work of fiction. The names, committees, transactions, and events depicted are drawn from real campaign-finance records. Any resemblance to real persons or political activity is entirely intentional.
          </p>
        )}
        {done && <p className="mt-10 font-mono text-xs uppercase tracking-[.2em] text-[#5d5b56]">click to continue</p>}
      </div>
    </main>
  );
}