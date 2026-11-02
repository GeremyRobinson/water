import Image from "next/image";
import {
  business,
  deliveryArea,
  equipment,
  press,
  timeline,
  vendingPricePerGallon,
} from "@/content/site";
import { Caustics } from "./Caustics";
import { CopyNumber, DeliveryCalculator, Rail, Reveal } from "./Interactive";
import { Journey } from "./Journey";
import { Statement } from "./Statement";

import waterPlaceDay from "@/public/images/water-place-day.jpg";
import waterPlaceNight from "@/public/images/water-place-night.jpg";
import kioskNight from "@/public/images/kiosk-night-fillup.jpg";
import truck from "@/public/images/delivery-truck.jpg";
import jake from "@/public/images/jake-smith.jpg";
import segal from "@/public/images/segal-family.jpg";
import pickett from "@/public/images/pickett-family.jpg";
import bicycle from "@/public/images/customer-bicycle.jpg";
import trailer from "@/public/images/bike-trailer-jug.jpg";
import school from "@/public/images/school-group.jpg";
import plaza from "@/public/images/visitors-plaza.jpg";
import kioskDay from "@/public/images/kiosk-day-fillup.jpg";
import kioskJug from "@/public/images/kiosk-customer-jug.jpg";
import founders from "@/public/images/founders-1880s.jpg";
import clipEden from "@/public/images/clipping-eden-in-a-glass.jpg";
import clipFlows from "@/public/images/clipping-history-flows.jpg";
import clipTherapeutic from "@/public/images/clipping-therapeutic-history.jpg";

const nav = [
  { href: "#source", label: "The source" },
  { href: "#water", label: "The water" },
  { href: "#fill", label: "Fill up" },
  { href: "#delivery", label: "Delivery" },
  { href: "#history", label: "History" },
  { href: "#visit", label: "Visit" },
];

function Drop() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.2C8.3 7.4 5.4 11.2 5.4 14.9a6.6 6.6 0 0 0 13.2 0c0-3.7-2.9-7.5-6.6-12.7Z" fill="var(--accent)" />
      <path d="M9 15.5a3 3 0 0 0 3 3" stroke="#fff" strokeOpacity=".8" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  return (
    <>
      <p className="notice">
        <b>Self-serve water is open 24/7.</b> The Mineral Spa is closed for now.
      </p>
      <header className="nav">
        <div className="wrap">
          <a className="brand" href="#top" aria-label={`${business.name}, back to top`}>
            <Drop />
            {business.name}
          </a>
          <nav aria-label="Sections">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </nav>
          <a className="call" href={business.phoneHref}>{business.phone}</a>
        </div>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <Caustics />
      <div className="wrap hero-in">
        <p className="eyebrow">Carlsbad Alkaline Water · Since 1882</p>
        <h1>
          <span>Made by nature.</span>
          <span>Not by man.</span>
        </h1>
        <p className="sub">
          Naturally alkaline artesian water, drawn from 1,700 feet below Carlsbad. The same well that gave the city its name.
        </p>
        <div className="ctas">
          <a className="pill light" href="#fill">Fill up for {vendingPricePerGallon} a gallon</a>
          <a className="link" href="#delivery">Get it delivered</a>
        </div>
        <ul className="hero-facts">
          <li><strong>8.76</strong><span>pH, naturally</span></li>
          <li><strong>1,700 ft</strong><span>deep</span></li>
          <li><strong>9,500</strong><span>years underground</span></li>
          <li><strong>0</strong><span>things added</span></li>
        </ul>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="band intro">
      <div className="wrap">
        <Statement text="Most alkaline water is tap water run through a machine. Ours comes out of the ground that way. No ionizers, no filters, no chemicals. Just water the earth spent 9,500 years making, from a well Carlsbad has been proud of since 1882." />
        <div className="place" data-reveal>
          <figure className="ph">
            <Image src={waterPlaceDay} alt="The Carlsbad Water Place on Carlsbad Blvd: the half-timbered building, the self-serve kiosk and the bronze statue of founder Capt. John Frazier" sizes="(max-width: 820px) 100vw, 640px" placeholder="blur" priority />
          </figure>
          <div className="place-text">
            <span className="open"><i />Self-serve open 24/7</span>
            <h3>The Water Place.</h3>
            <p>At 2802 Carlsbad Blvd, the statue of founder Capt. John Frazier stands beside the well he struck in 1882. Our kiosk next to him is open every hour of every day.</p>
            <a className="link" href="#visit">Plan a visit</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Source() {
  return (
    <section className="band tinted" id="source">
      <div className="wrap">
        <div className="head" data-reveal>
          <p className="eyebrow">The source</p>
          <h2>Filtered by stone<br />for 9,500 years.</h2>
          <p className="sub">Follow a drop of rain from the mountains to your glass.</p>
        </div>
        <Journey />
      </div>
    </section>
  );
}

function TheWater() {
  return (
    <section className="band" id="water">
      <div className="wrap">
        <div className="head" data-reveal>
          <p className="eyebrow">The water</p>
          <h2>Pure, and proven.</h2>
          <p className="sub">Licensed by the California Department of Public Health and tested every week, as state and federal law require.</p>
        </div>
        <div className="bento" data-reveal>
          <div className="tile tall ph-tile">
            <span className="label">pH</span>
            <span className="k huge">8.76</span>
            <p>Naturally alkaline, straight from the ground. Seven is neutral.</p>
            <div className="scale push" aria-hidden="true">
              <div className="bar"><i style={{ left: `${(8.76 / 14) * 100}%` }} /></div>
              <div className="ticks"><span>0</span><span>7</span><span>14</span></div>
            </div>
          </div>
          <div className="tile">
            <span className="label">Sodium</span>
            <span className="k">0<small>mg</small></span>
          </div>
          <div className="tile">
            <span className="label">Fluoride</span>
            <span className="k">0.0<small>ppm</small></span>
          </div>
          <div className="tile">
            <span className="label">Natural minerals</span>
            <span className="k">50–70<small>ppm</small></span>
          </div>
          <div className="tile">
            <span className="label">Treatment</span>
            <span className="k">None</span>
          </div>
          <blockquote className="tile span2 quote">
            <p>&ldquo;Eden in a glass.&rdquo;</p>
            <cite className="fine">North County Times</cite>
          </blockquote>
          <div className="tile nothing">
            <span className="label">Nothing added</span>
            <div className="tags">
              <span className="tag">Sodium free</span>
              <span className="tag">Not fluoridated</span>
              <span className="tag">Not chlorinated</span>
            </div>
          </div>
        </div>
        <p className="fine source-note">
          Sodium and fluoride per independent analysis by Dr. Richard Sauerheber, Palomar College, September 30, 2011. Physicians Formula uses our water in its Mineral Care facial products.
        </p>
      </div>
    </section>
  );
}

function Ways() {
  return (
    <section className="band tinted" id="ways">
      <div className="wrap">
        <div className="head" data-reveal>
          <h2>Three ways to drink it.</h2>
        </div>
        <div className="ways" data-reveal>
          <article className="tile way">
            <h3>Fill up yourself</h3>
            <p className="price">{vendingPricePerGallon}</p>
            <p className="unit">per gallon</p>
            <ul>
              <li>Open 24 hours, every day</li>
              <li>Stainless steel machines</li>
              <li>Takes $1, $5, $10 bills and coins</li>
            </ul>
            <a className="pill" href="#fill">How it works</a>
          </article>
          <article className="tile way">
            <h3>Delivered</h3>
            <p className="price">$19</p>
            <p className="unit">per 3 gallon bottle</p>
            <ul>
              <li>3 and 5 gallon bottles</li>
              <li>Coastal North County</li>
              <li>Homes and businesses</li>
            </ul>
            <a className="pill" href="#delivery">Estimate your month</a>
          </article>
          <article className="tile way">
            <h3>In stores</h3>
            <p className="price">$10.99</p>
            <p className="unit">12 one-liter bottles at Costco</p>
            <ul>
              <li>About $0.91 a bottle</li>
              <li>Costco, Walmart, Target, Sprouts</li>
              <li>In 900+ stores</li>
            </ul>
            <a className="pill secondary" href={business.phoneHref}>Ask where</a>
          </article>
        </div>
      </div>
    </section>
  );
}

function FillUp() {
  return (
    <section className="band" id="fill">
      <div className="wrap">
        <div className="head" data-reveal>
          <p className="eyebrow">Self-serve</p>
          <h2>Bring your bottles.<br />We never close.</h2>
        </div>
        <div className="fill" data-reveal>
          <figure className="ph">
            <Image src={kioskNight} alt="A customer holding two filled jugs in front of the lit self-serve kiosk at night" sizes="(max-width: 820px) 100vw, 512px" placeholder="blur" />
            <figcaption className="over">
              <h3>Open all night.</h3>
              <span>The machines draw straight from our own well.</span>
            </figcaption>
          </figure>
          <div className="tile">
            <ol className="steps">
              <li><div><h4>Bring small bills</h4><p>$1, $5 and $10 bills and coins. Change comes back in coins.</p></div></li>
              <li><div><h4>Rinse first, for 10¢</h4><p>Hold the bottle upside down over the nozzle, press rinse and give it a spin.</p></div></li>
              <li><div><h4>Fill up at {vendingPricePerGallon} a gallon</h4><p>3 and 5 gallon bottles fit right under the nozzle.</p></div></li>
            </ol>
            <div className="inline-note">
              <p><b>No bottles yet?</b> Our store has them from $16, open 8–6 weekdays and 9–6 weekends.</p>
              <a className="pill secondary" href="#bottles">See bottles</a>
            </div>
          </div>
        </div>
        <div className="faq" data-reveal>
          <h3>Good to know</h3>
          <details>
            <summary>Where do I park?</summary>
            <div className="a">Use our lot next to Swami&apos;s Cafe. The Fresco Cocina lot is for restaurant guests only.</div>
          </details>
          <details>
            <summary>How do I keep my bottles clean?</summary>
            <div className="a">Every so often, swirl about 32 oz of tap water with a tablespoon of bleach for 3 minutes, then rinse well several times.</div>
          </details>
          <details>
            <summary>Can I use a ceramic crock?</summary>
            <div className="a">We don&apos;t recommend it. Airborne bacteria can grow inside crocks and change the taste and pH of the water. Our dispenser with stand is a better fit.</div>
          </details>
          <details id="bottles">
            <summary>Bottles and dispensers</summary>
            <div className="a">
              <table className="prices">
                <tbody>
                  {equipment.map((e) => (
                    <tr key={e.item}><td>{e.item}</td><td>{e.price}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

function Delivery() {
  return (
    <section className="band tinted" id="delivery">
      <div className="wrap">
        <div className="head" data-reveal>
          <p className="eyebrow">Delivery</p>
          <h2>Delivered to your door.</h2>
          <p className="sub">3 and 5 gallon bottles and cases of liters, across coastal North County.</p>
        </div>
        <div className="deliver">
          <figure className="ph" data-reveal>
            <Image src={truck} alt="The Carlsbad Alkaline Water delivery truck parked on Carlsbad Blvd" sizes="(max-width: 820px) 100vw, 502px" placeholder="blur" />
          </figure>
          <DeliveryCalculator phone={business.phone} phoneHref={business.phoneHref} />
          <div className="tile areas" data-reveal>
            <h4>Where we deliver</h4>
            <div className="tags">
              {deliveryArea.map((a) => <span className="tag" key={a}>{a}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const people = [
  { img: jake, pos: "50% 20%", title: "One to one and a half gallons a day.", text: "Jake Smith, world arm wrestling champion and our general manager for 20 years", alt: "Jake Smith beside the Frazier statue" },
  { img: segal, pos: "50% 30%", title: "Shared on The Ellen DeGeneres Show.", text: "Shailene Woodley brought our water on air. Pictured: Fred and Tina Segal with owners Veronica and Ludvik Grigoras.", alt: "Fred and Tina Segal with Veronica and Ludvik Grigoras at the statue" },
  { img: pickett, pos: "50% 25%", title: "A family favorite.", text: "Ryan Pickett, who played for the Green Bay Packers, with Jennifer and family", alt: "Ryan and Jennifer Pickett at the Frazier statue" },
  { img: kioskDay, pos: "55% 40%", title: "Filled straight from the well.", text: "A regular with a five-gallon jug at the kiosk", alt: "A smiling customer filling a five-gallon jug at the self-serve kiosk" },
  { img: bicycle, pos: "40% 50%", title: "Some come by bike.", text: "Filling up at the kiosk, with room for a passenger", alt: "A customer with a child seat and water bottles on her bicycle at the kiosk" },
  { img: trailer, pos: "50% 60%", title: "Five gallons, pedal powered.", text: "A bike trailer built for the trip", alt: "A bicycle trailer carrying a 5-gallon jug, parked by the kiosk" },
  { img: kioskJug, pos: "30% 50%", title: "Five gallons to go.", text: "Heading home from the Water Place", alt: "A customer holding a five-gallon jug on his shoulder in front of the kiosk" },
  { img: school, pos: "50% 40%", title: "Schools visit to learn the story.", text: "At the statue of Capt. John Frazier", alt: "A school group visiting the Frazier statue" },
  { img: plaza, pos: "50% 50%", title: "Visitors from all over.", text: "On the plaza at the Water Place", alt: "A group of visitors on the plaza" },
];

function People() {
  return (
    <section className="band people">
      <div className="wrap">
        <div className="head" data-reveal>
          <p className="eyebrow">Our customers</p>
          <h2>People drive hundreds<br />of miles for it.</h2>
          <p className="sub">From Los Angeles, Orange County, the Inland Empire, Las Vegas and Arizona. Some drive 470 miles, one way, to fill up.</p>
        </div>
      </div>
      <Rail>
        {people.map((p) => (
          <figure className="person" key={p.title}>
            <div className="img">
              <Image src={p.img} alt={p.alt} sizes="320px" placeholder="blur" style={{ objectPosition: p.pos }} />
            </div>
            <figcaption className="t">
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </figcaption>
          </figure>
        ))}
      </Rail>
      <div className="wrap">
        <div className="press" data-reveal>
          <p className="fine">As featured in</p>
          <ul>{press.filter((p) => p !== "FindaSpring.com").map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

const history = timeline.filter((t) => t.year !== "1991");

function History() {
  return (
    <section className="band night" id="history">
      <div className="wrap">
        <div className="head" data-reveal>
          <p className="eyebrow">History</p>
          <h2>The well that<br />named a city.</h2>
          <p className="sub">In 1882 its minerals were found to match the famous spa waters of Karlsbad, Bohemia. So the new town took the name.</p>
        </div>
        <figure className="ph founders" data-reveal>
          <Image src={founders} alt="Carlsbad's founders on the train platform in the late 1880s, by the Carlsbad Mineral Water sign, with the Hotel Carlsbad behind" sizes="(max-width: 1064px) 100vw, 1024px" placeholder="blur" />
        </figure>
        <p className="fine founders-cap">Carlsbad&apos;s founders by the Mineral Water sign, late 1880s.</p>
        <ol className="timeline" data-reveal>
          {history.map((t) => (
            <li className="tile" key={t.year}>
              <span className="yr">{t.year}</span>
              <h4>{t.title}</h4>
              <p>{t.text}</p>
            </li>
          ))}
        </ol>
        <div className="clips" data-reveal>
          {[
            { img: clipEden, cap: "“Spring produced Eden in a glass,” North County Times", alt: "North County Times clipping: Spring produced Eden in a glass" },
            { img: clipFlows, cap: "“Carlsbad history to flow forth again”", alt: "Newspaper clipping: Carlsbad history to flow forth again" },
            { img: clipTherapeutic, cap: "A California Historic Site", alt: "Newspaper clipping about the history of the Carlsbad well" },
          ].map((c) => (
            <figure className="tile" key={c.cap}>
              <Image src={c.img} alt={c.alt} sizes="(max-width: 820px) 100vw, 330px" />
              <p>{c.cap}</p>
            </figure>
          ))}
        </div>
        <p className="fine founders-cap">Read the full story in <i>Seekers of the Springs</i> by Marje Howard-Jones.</p>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="band" id="visit">
      <div className="wrap">
        <div className="head" data-reveal>
          <h2>Come taste it.</h2>
          <p className="sub">{business.owners} look forward to meeting you.</p>
        </div>
        <figure className="ph visit-photo" data-reveal>
          <Image src={waterPlaceNight} alt="The Water Place building and kiosk lit up at night" sizes="(max-width: 1064px) 100vw, 1024px" placeholder="blur" />
        </figure>
        <div className="visit" data-reveal>
          <div className="tile">
            <span className="fine">Address</span>
            <p className="big">{business.street}<br />{business.city}, {business.region} {business.postalCode}</p>
            <p className="fine">Park in our lot next to Swami&apos;s Cafe.</p>
            <a className="pill" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
          </div>
          <div className="tile">
            <span className="fine">Phone</span>
            <p className="big"><a href={business.phoneHref} style={{ color: "inherit" }}>{business.phone}</a></p>
            <p className="fine">Call to start delivery or check what&apos;s in stock.</p>
            <CopyNumber phone={business.phone} />
          </div>
          <div className="tile">
            <span className="fine">Hours</span>
            <table className="hours">
              <tbody>
                <tr><td>Self-serve water</td><td>24/7</td></tr>
                <tr><td>Store, Mon–Fri</td><td>8 AM–6 PM</td></tr>
                <tr><td>Store, Sat–Sun</td><td>9 AM–6 PM</td></tr>
                <tr><td>Mineral Spa</td><td>Closed for now</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageB() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Source />
        <TheWater />
        <Ways />
        <FillUp />
        <Delivery />
        <People />
        <History />
        <Visit />
      </main>
      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} {business.name} and {business.spaName}. A California Historic Site.</span>
          <a href={business.spaUrl} target="_blank" rel="noopener noreferrer">carlsbadmineralspa.com</a>
        </div>
      </footer>
      <Reveal />
    </>
  );
}
