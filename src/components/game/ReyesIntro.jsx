import { useState, useEffect } from "react";

// Full-screen typewriter intro from Reyes (journalist). Renders a list
// of segments — plain text and clickable hyperlinks — that type across
// the screen one character at a time. Click to skip the typing; click
// again to continue to the level.
export default function ReyesIntro({ segments, onContinue, speed = 32 }) {
  const totalChars = segments.reduce((a, s) => a + s.content.length, 0);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= totalChars) {
        clearInterval(t);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(t);
  }, [totalChars, speed]);

  const handleClick = () => {
    if (done) onContinue();
    else {
      setCount(totalChars);
      setDone(true);
    }
  };

  let remaining = count;
  const parts = [];
  for (let idx = 0; idx < segments.length; idx++) {
    const seg = segments[idx];
    if (remaining <= 0) break;
    const segLen = seg.content.length;
    const visible = Math.min(remaining, segLen);
    const text = seg.content.slice(0, visible);
    remaining -= segLen;
    if (seg.type === "link") {
      parts.push(
        <a
          key={idx}
          href={seg.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="text-[#7a8a6a] underline decoration-dotted underline-offset-4 transition hover:text-[#9fbf8a]"
        >
          {text}
        </a>
      );
    } else {
      parts.push(<span key={idx}>{text}</span>);
    }
  }

  return (
    <main onClick={handleClick} className="flex min-h-screen cursor-pointer items-center justify-center bg-[#0a0a0b] px-6 text-[#d8d5cd]">
      <div className="max-w-xl">
        <p className="mb-5 font-mono text-xs uppercase tracking-[.2em] text-[#7a8a6a]">Reyes</p>
        <p className="font-mono text-lg leading-8 text-[#c4c1ba]">
          {parts}
          {!done && <span className="ml-0.5 inline-block h-5 w-2 animate-pulse bg-[#7a8a6a] align-middle" />}
        </p>
        {done && <p className="mt-10 font-mono text-xs uppercase tracking-[.2em] text-[#5d5b56]">click to continue</p>}
      </div>
    </main>
  );
}