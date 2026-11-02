// Not-to-scale cross-section of the aquifer, from the Cleveland National Forest to our well.
export function CrossSection() {
  return (
    <figure className="section-fig xs">
      <svg viewBox="0 0 560 400" role="img" aria-labelledby="xs-t xs-d">
        <title id="xs-t">Where our water comes from</title>
        <desc id="xs-d">
          Cross-section: rain falls on the Cleveland National Forest about 40 miles east, travels for roughly 9,500
          years through the ground beneath 200 feet of clay and 1,500 feet of granite, and rises up our 1,700-foot
          artesian well near the ocean in Carlsbad.
        </desc>
        <rect x="0" y="0" width="560" height="96" fill="var(--sky)" />
        <path d="M0 96 L0 62 L40 46 L80 54 L120 40 L170 62 L230 80 L380 92 L470 96 Z" fill="var(--granite-dark)" />
        <rect x="470" y="96" width="90" height="10" fill="var(--sea)" />
        <path d="M0 96 L560 96 L560 150 L0 130 Z" fill="var(--clay)" />
        <path d="M0 130 L560 150 L560 300 L0 250 Z" fill="var(--granite)" />
        <path d="M0 250 L560 300 L560 340 L0 285 Z" fill="var(--aquifer)" />
        <path d="M0 285 L560 340 L560 400 L0 400 Z" fill="var(--granite-dark)" />
        <path className="xs-flow" d="M180 294 C260 300 340 306 420 312" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="2 9" opacity=".9" />
        <path d="M408 304 l14 8 l-14 7" fill="none" stroke="#ffffff" strokeWidth="2" />
        <rect x="436" y="64" width="10" height="258" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.5" />
        <path className="xs-rise" d="M441 318 V70" stroke="var(--aqua)" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 10" />
        <path d="M441 58 v-14" stroke="var(--aqua)" strokeWidth="3" strokeLinecap="round" />
        <circle className="xs-bubble" cx="441" cy="38" r="5" fill="var(--aqua)" />
        <circle className="xs-bubble xs-bubble-2" cx="441" cy="38" r="5" fill="var(--aqua)" />
        <rect x="418" y="64" width="46" height="32" fill="var(--ink)" />
        <g stroke="var(--aqua)" strokeWidth="2" strokeLinecap="round">
          {[196, 218, 240, 262, 284].map((x, i) => (
            <path key={x} className="xs-rain" style={{ animationDelay: `${i * 0.23}s` }} d={`M${x} 28 l-3 8`} />
          ))}
        </g>
        <g fontSize="22" fontWeight="600" fill="var(--ink)">
          <text x="12" y="22">Rain falls here</text>
          <text x="418" y="56" textAnchor="end">Our well</text>
          <text x="16" y="126">200 ft clay</text>
          <text x="16" y="205" fill="#ffffff">1,500 ft granite</text>
          <text x="16" y="282" fill="var(--ink)">9,500 years</text>
          <text x="424" y="378" textAnchor="end" fill="#ffffff">1,700 ft deep</text>
        </g>
      </svg>
      <figcaption className="fig-cap">Rain from the Cleveland National Forest, about 40 miles east, takes about 9,500 years to reach our well, one block from the Pacific. Not to scale.</figcaption>
    </figure>
  );
}
