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
        <path d="M0 96 L0 46 L40 28 L80 40 L120 20 L170 50 L230 78 L380 92 L470 96 Z" fill="var(--granite-dark)" />
        <rect x="470" y="96" width="90" height="10" fill="var(--sea)" />
        <path d="M0 96 L560 96 L560 150 L0 130 Z" fill="var(--clay)" />
        <path d="M0 130 L560 150 L560 300 L0 250 Z" fill="var(--granite)" />
        <path d="M0 250 L560 300 L560 340 L0 285 Z" fill="var(--aquifer)" />
        <path d="M0 285 L560 340 L560 400 L0 400 Z" fill="var(--granite-dark)" />
        <path d="M40 268 C140 280 260 292 420 312" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="2 9" opacity=".9" />
        <path d="M408 304 l14 8 l-14 7" fill="none" stroke="#ffffff" strokeWidth="2" />
        <rect x="436" y="64" width="10" height="258" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.5" />
        <path d="M441 58 v-14" stroke="var(--aqua)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="441" cy="38" r="5" fill="var(--aqua)" />
        <rect x="418" y="64" width="46" height="32" fill="var(--ink)" />
        <path d="M38 6 l-4 10 M58 2 l-4 10 M78 8 l-4 10 M98 4 l-4 10" stroke="var(--aqua)" strokeWidth="2" />
        <g fontSize="11" fill="var(--ink)">
          <text x="12" y="22">Cleveland National Forest</text>
          <text x="12" y="36" fill="var(--muted)">~40 mi east</text>
          <text x="360" y="22">Carlsbad Blvd</text>
          <text x="360" y="36" fill="var(--muted)">1 block from the Pacific</text>
          <text x="16" y="120">200 ft non-porous clay</text>
          <text x="16" y="200" fill="#ffffff">1,500 ft granite</text>
          <text x="16" y="276" fill="#ffffff">aquifer · ~9,500 years in transit</text>
          <text x="300" y="370" fill="#ffffff">artesian well · 1,700 ft</text>
        </g>
      </svg>
      <figcaption className="fig-cap">Not to scale. Depths from our well records.</figcaption>
    </figure>
  );
}
