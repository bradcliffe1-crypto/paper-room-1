import { useState, useEffect } from "react";

// 16×20 pixel-art skull & crossbones. '#' = bone, '.' = background.
const SKULL = [
  "....########....",
  "..############..",
  ".##############.",
  "###...####...###",
  "###...####...###",
  "###..##..##..###",
  "###.##.##.##.###",
  "###.##.##.##.###",
  ".##.##.##.##.##.",
  "..##.######.##..",
  "...##.####.##...",
  ".....##..##.....",
  "......####......",
  ".......##.......",
  "##............##",
  ".##..........##.",
  "..##........##..",
  "...##......##...",
  "....##....##....",
  ".....##..##....."
];

const TEXT = [
  "UNAUTHORIZED ACCESS DETECTED",
  "",
  "YOUR DEVICE HAS BEEN COMPROMISED.",
  "SESSION LOGGED. FILES EXFILTRATED.",
  "TRACING CONNECTION...",
  "",
  "YOU SHOULD NOT HAVE OPENED THAT.",
  "",
  "RESETTING SYSTEM..."
].join("\n");

export default function KillScreen({ onContinue }) {
  const [skullOn, setSkullOn] = useState(false);
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setSkullOn(true), 400);
    let i = 0;
    const type = setInterval(() => {
      i++;
      setText(TEXT.slice(0, i));
      setPct(Math.min(100, Math.round((i / TEXT.length) * 100)));
      if (i >= TEXT.length) { clearInterval(type); setDone(true); }
    }, 35);
    const auto = setTimeout(onContinue, 20000);
    return () => { clearTimeout(t1); clearInterval(type); clearTimeout(auto); };
  }, [onContinue]);

  const click = () => { if (done) onContinue(); };
  const filled = Math.floor(pct / 5);
  const bar = "█".repeat(filled) + "░".repeat(20 - filled);

  return (
    <main
      onClick={click}
      className="kill-flicker crt-scan fixed inset-0 z-50 flex cursor-pointer select-none flex-col items-center justify-center bg-black px-4 font-mono"
    >
      <div
        className={`mb-12 ${skullOn ? "skull-glitch" : ""}`}
        style={{ opacity: skullOn ? 1 : 0, filter: "drop-shadow(0 0 12px rgba(220,38,38,0.45))" }}
      >
        <div className="grid" style={{ gridTemplateColumns: "repeat(16, 10px)" }}>
          {SKULL.flatMap((row, y) =>
            [...row].map((cell, x) => (
              <div
                key={`${x}-${y}`}
                style={{ width: 10, height: 10, background: cell === "#" ? "#b8b3a8" : "transparent" }}
              />
            ))
          )}
        </div>
      </div>

      <pre className="text-center text-[13px] leading-7 tracking-[.15em] text-red-600 whitespace-pre-line">
        {text}
        {!done && <span className="animate-pulse">█</span>}
      </pre>

      {skullOn && !done && (
        <p className="mt-8 text-xs tracking-widest text-red-900">
          EXFILTRATING [{bar}] {pct}%
        </p>
      )}

      {done && <p className="mt-10 text-xs tracking-widest text-gray-700">click to continue</p>}
    </main>
  );
}