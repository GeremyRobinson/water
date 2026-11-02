"use client";

import { useEffect, useRef } from "react";

/** A short statement whose words light up as it scrolls through the screen. Fully dark text without JS. */
export function Statement({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const words = Array.from(el.querySelectorAll<HTMLSpanElement>("span"));
    el.classList.add("live");
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the top of the text reaches 85% of the screen, 1 when its bottom reaches 45%.
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.4)));
      const lit = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle("lit", i < lit));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <p className="statement" ref={ref}>
      {text.split(" ").map((w, i) => (
        <span key={i}>{w} </span>
      ))}
    </p>
  );
}
