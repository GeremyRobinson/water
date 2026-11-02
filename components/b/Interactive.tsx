"use client";

import { useEffect, useRef, useState } from "react";

/** Fades sections in as they scroll into view. Anything already on screen stays visible, so the page is complete without JS. */
export function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add("rv");
        io.observe(el);
      }
    });
    return () => io.disconnect();
  }, []);
  return null;
}

const sizes = [
  { id: "5", label: "5 gal", price: 24, unit: "five-gallon bottles" },
  { id: "3", label: "3 gal", price: 19, unit: "three-gallon bottles" },
  { id: "c", label: "1 liter cases", price: 25, unit: "cases of liters" },
];

const terms = {
  home: [
    ["1-year plan.", "$100 to cancel early, waived if you move away."],
    ["3 minimum", "bottles or cases a month."],
  ],
  business: [
    ["No contract.", "Stop any time."],
    ["3 minimum", "bottles or cases a month."],
  ],
} as const;

export function DeliveryCalculator({ phone, phoneHref }: { phone: string; phoneHref: string }) {
  const [who, setWho] = useState<"home" | "business">("home");
  const [size, setSize] = useState(sizes[0]);
  const [qty, setQty] = useState(3);

  return (
    <div className="tile calc" data-reveal>
      <h3>Estimate your month</h3>
      <div className="field">
        <span id="for-l">Delivery for</span>
        <div className="seg" role="group" aria-labelledby="for-l">
          {(["home", "business"] as const).map((w) => (
            <button key={w} type="button" aria-pressed={who === w} onClick={() => setWho(w)}>
              {w === "home" ? "Home" : "Business"}
            </button>
          ))}
        </div>
      </div>
      <div className="field">
        <span id="size-l">Bottle size</span>
        <div className="seg" role="group" aria-labelledby="size-l">
          {sizes.map((s) => (
            <button key={s.id} type="button" aria-pressed={size.id === s.id} onClick={() => setSize(s)}>
              {s.label}
            </button>
          ))}
        </div>
      </div>
      <div className="field">
        <span id="qty-l">How many each month</span>
        <div className="stepper" role="group" aria-labelledby="qty-l">
          <button type="button" aria-label="One fewer" disabled={qty <= 3} onClick={() => setQty((q) => Math.max(3, q - 1))}>−</button>
          <output aria-live="polite">{qty} {size.unit}</output>
          <button type="button" aria-label="One more" disabled={qty >= 20} onClick={() => setQty((q) => Math.min(20, q + 1))}>+</button>
        </div>
      </div>
      <div className="sum">
        <span className="fine">Each month, delivered</span>
        <strong>${qty * size.price}</strong>
      </div>
      <ul className="terms">
        {terms[who].map(([b, t]) => (
          <li key={b}><b>{b}</b> {t}</li>
        ))}
        <li>Paying by card adds 3% ($1 minimum).</li>
      </ul>
      <div className="push" style={{ display: "grid", gap: 12 }}>
        <a className="pill" href={phoneHref} style={{ justifySelf: "start" }}>Call {phone} to start</a>
        <p className="fine">Online sign-up is coming soon. We&apos;ll confirm your first delivery by phone.</p>
      </div>
    </div>
  );
}

export function Rail({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = () => setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
    on();
    el.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      el.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  const go = (dir: number) => ref.current?.scrollBy({ left: dir * Math.min(680, ref.current.clientWidth * 0.8), behavior: "smooth" });
  return (
    <>
      <div className="rail" ref={ref} tabIndex={0} aria-label="Customer photos. Scroll sideways for more.">
        {children}
      </div>
      <div className="wrap rail-ctl">
        <button type="button" aria-label="Previous" disabled={edge.start} onClick={() => go(-1)}>
          <svg viewBox="0 0 14 14" aria-hidden="true"><path d="M9 2 4 7l5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button type="button" aria-label="Next" disabled={edge.end} onClick={() => go(1)}>
          <svg viewBox="0 0 14 14" aria-hidden="true"><path d="m5 2 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </>
  );
}

export function CopyNumber({ phone }: { phone: string }) {
  const [label, setLabel] = useState("Copy number");
  return (
    <button
      type="button"
      className="pill secondary"
      onClick={() =>
        navigator.clipboard?.writeText(phone).then(
          () => setLabel("Copied"),
          () => setLabel(phone),
        )
      }
    >
      {label}
    </button>
  );
}
