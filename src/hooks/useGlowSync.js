import { useEffect, useRef } from "react";

// Drives a single shared `--glow-phase` CSS variable (0 → 1 → 0) on the
// container via requestAnimationFrame. All selected rows inherit the same
// value, so their glows pulse in perfect sync regardless of when each
// row was clicked.
export function useGlowSync() {
  const ref = useRef(null);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = now => {
      const phase = ((now - start) % 1400) / 1400;
      const intensity = Math.sin(phase * Math.PI);
      if (ref.current) ref.current.style.setProperty("--glow-phase", intensity.toFixed(3));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return ref;
}