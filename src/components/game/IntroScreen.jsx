import { useState, useEffect } from "react";

const MESSAGE =
  "welcome aboard. don't make me regret this. opening this software means you've consented to enroll in our training program. complete the simulations. then we talk real cases.";

export default function IntroScreen({ onContinue }) {
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