"use client";

import { useEffect, useRef, useState } from "react";

const stops = [
  { depth: "0 ft", time: "Day 1", title: "Rain falls on the mountains.", text: "It starts as rain over the Cleveland National Forest, about 40 miles inland from Carlsbad." },
  { depth: "200 ft", time: "Decades", title: "It sinks through clay.", text: "200 feet of clay seals the water off from the surface and everything on it." },
  { depth: "1,700 ft", time: "Centuries", title: "Then through granite.", text: "1,500 feet of granite slowly filters it and gives it natural minerals." },
  { depth: "1,700 ft", time: "~9,500 years", title: "It rests, and travels west.", text: "Deep in the aquifer, the water makes its way toward the coast. The trip takes about 9,500 years." },
  { depth: "Surface", time: "Today", title: "And rises at our well.", text: "One block from the Pacific, our historic artesian well brings it up. We don't add anything or take anything out." },
];

// Where the drop sits in the cross-section for each stop (percent of the frame).
const drop = [
  { x: 17, y: 9 },
  { x: 26, y: 27 },
  { x: 44, y: 54 },
  { x: 70, y: 81 },
  { x: 86, y: 11 },
];

export function Journey() {
  const [active, setActive] = useState(0);
  const [js, setJs] = useState(false);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    setJs(true);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        });
      },
      // On phones the cross-section is pinned at the top, so read the step in the lower part of the screen.
      { rootMargin: window.innerWidth <= 820 ? "-64% 0px -26% 0px" : "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const s = stops[active];
  const d = drop[active];

  return (
    <div className={js ? "journey live" : "journey"}>
      <ol className="journey-steps">
        {stops.map((st, i) => (
          <li key={st.title} data-i={i} ref={(el) => { refs.current[i] = el; }} className={i === active ? "on" : undefined}>
            <span className="fine">{st.depth} · {st.time}</span>
            <h3>{st.title}</h3>
            <p>{st.text}</p>
          </li>
        ))}
      </ol>
      <div className="journey-visual" aria-hidden="true">
        <div className="frame" data-step={active}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect width="100" height="20" fill="var(--sky)" />
            <path d="M0 20 L0 15 L7 12 L13 14 L20 10.5 L28 14 L38 17 L60 19.4 L84 20 Z" fill="var(--granite-dark)" />
            <rect x="88" y="19" width="12" height="2" fill="var(--sea)" />
            <path d="M0 20 L100 20 L100 33 L0 29 Z" fill="var(--clay)" className="layer l1" />
            <path d="M0 29 L100 33 L100 76 L0 68 Z" fill="var(--granite)" className="layer l2" />
            <path d="M0 68 L100 76 L100 88 L0 79 Z" fill="var(--aquifer)" className="layer l3" />
            <path d="M0 79 L100 88 L100 100 L0 100 Z" fill="var(--granite-dark)" />
            <path d="M17 9 C 24 40, 46 72, 86 84" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth=".5" strokeDasharray="1 1.4" vectorEffect="non-scaling-stroke" />
            <rect x="85" y="15" width="2" height="70" fill="var(--granite-dark)" />
            <rect x="85.5" y="15" width="1" height="70" fill="var(--accent)" opacity=".85" />
            <rect x="83.8" y="13.6" width="4.4" height="1.6" rx=".4" fill="var(--ink)" />
          </svg>
          <div className="rain"><i /><i /><i /><i /></div>
          <span className="lbl" style={{ top: "4%", left: "4%" }}>Cleveland National Forest</span>
          <span className="lbl" style={{ top: "4%", right: "4%", textAlign: "right" }}>Carlsbad</span>
          <span className="lbl dark" style={{ top: "24%", left: "4%" }}>200 ft clay</span>
          <span className="lbl" style={{ top: "47%", left: "4%" }}>1,500 ft granite</span>
          <span className="lbl" style={{ top: "73.5%", left: "4%" }}>Aquifer</span>
          <span className="drop" style={{ left: `${d.x}%`, top: `${d.y}%` }} />
        </div>
        <div className="readout">
            <span><small>Depth</small>{s.depth}</span>
            <span><small>Time</small>{s.time}</span>
          </div>
        <p className="fine journey-cap">Not to scale.</p>
      </div>
    </div>
  );
}
