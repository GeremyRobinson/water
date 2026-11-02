import { business, notices } from "@/content/site";

const links = [
  { href: "#water", label: "The Water" },
  { href: "#vending", label: "Self-Serve" },
  { href: "#delivery", label: "Delivery" },
  { href: "#history", label: "History" },
  { href: "#visit", label: "Visit" },
];

export function Notice() {
  return (
    <div className="notice">
      <div className="wrap">
        <span>
          <b>{notices.spaClosed}</b> {notices.vendingOpen}
        </span>
        <span>{notices.newWell}</span>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="site">
      <div className="wrap">
        <a className="brand" href="#top" aria-label={`${business.name}, home`}>
          <svg viewBox="0 0 40 40" aria-hidden="true">
            <path d="M20 3C14 12 8 19 8 26a12 12 0 0 0 24 0c0-7-6-14-12-23Z" fill="var(--aqua)" />
            <path d="M13 27h14M15 31h10" stroke="var(--surface)" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>
            {business.name}
            <small>Artesian water since 1882</small>
          </span>
        </a>
        <nav className="main" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="btn call" href={business.phoneHref} aria-label={`Call ${business.phone}`}>
          <span className="num">{business.phone}</span>
          <span className="short">Call</span>
        </a>
      </div>
    </header>
  );
}
