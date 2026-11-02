import Image from "next/image";
import { CrossSection } from "./CrossSection";
import { DeliveryForm } from "./DeliveryForm";
import {
  business,
  deliveryArea,
  deliveryPrices,
  equipment,
  hours,
  press,
  timeline,
  vendingPricePerGallon,
  waterProfile,
} from "@/content/site";

import waterPlaceDay from "@/public/images/water-place-day.jpg";
import kioskNight from "@/public/images/kiosk-night-fillup.jpg";
import truck from "@/public/images/delivery-truck.jpg";
import jake from "@/public/images/jake-smith.jpg";
import segal from "@/public/images/segal-family.jpg";
import pickett from "@/public/images/pickett-family.jpg";
import bicycle from "@/public/images/customer-bicycle.jpg";
import trailer from "@/public/images/bike-trailer-jug.jpg";
import school from "@/public/images/school-group.jpg";
import plaza from "@/public/images/visitors-plaza.jpg";
import night from "@/public/images/water-place-night.jpg";
import founders from "@/public/images/founders-1880s.jpg";
import clipEden from "@/public/images/clipping-eden-in-a-glass.jpg";
import clipFlows from "@/public/images/clipping-history-flows.jpg";
import clipTherapeutic from "@/public/images/clipping-therapeutic-history.jpg";

const half = "(max-width: 860px) 100vw, 560px";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="stack">
          <p className="eyebrow">Naturally alkaline artesian mineral water</p>
          <h1>
            Made by nature, <em>not by man.</em>
          </h1>
          <p className="lede">
            Our water rises from a 1,700-foot-deep aquifer one block from the Pacific. It&apos;s naturally alkaline at
            pH 8.76, with nothing added: no ionizers, no machines, no chemicals.
          </p>
          <div className="ctas">
            <a className="btn" href="#vending">Fill up for {vendingPricePerGallon}/gal</a>
            <a className="btn ghost" href="#delivery">Get it delivered</a>
          </div>
          <div className="hero-facts">
            <span><b>Open 24/7</b> self-serve</span>
            <span><b>California Historic Site</b></span>
            <span>In <b>900+ stores</b> including Costco</span>
          </div>
        </div>
        <figure className="photo hero-photo">
          <Image
            src={waterPlaceDay}
            sizes={half}
            priority
            placeholder="blur"
            alt="The Carlsbad Water Place on Carlsbad Blvd: the half-timbered building, the self-serve vending kiosk, the statue of founder John Frazier and the water tanks"
          />
          <figcaption>Our Water Place at 2802 Carlsbad Blvd, with the statue of founder Capt. John Frazier.</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Water() {
  return (
    <section id="water">
      <div className="wrap label-grid">
        <div className="stack">
          <p className="eyebrow">The water</p>
          <h2>Filtered by stone for 9,500 years</h2>
          <p className="lede">
            Carlsbad Alkaline Water is not filtered municipal water. Rain that falls on the Cleveland National Forest
            works its way through the rock for thousands of years, protected by 200 feet of clay and 1,500 feet of
            granite, picking up natural minerals before it reaches our wells.
          </p>
          <p className="lede">
            Our source and vending machines are licensed by the California Department of Public Health and tested
            weekly, as state and federal law require. The California Legislature designated the well a California
            Historic Site, and the North County Times called our water &ldquo;Eden in a Glass.&rdquo;
          </p>
          <div className="nots" aria-label="What our water does not contain">
            {["Sodium free", "Not fluoridated", "Not chlorinated", "Nothing added"].map((c) => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
          <p className="form-note">Physicians Formula uses Carlsbad Alkaline Water in its Mineral Care facial products.</p>
          <CrossSection />
        </div>
        <div className="label" aria-label="Water profile">
          <h3>Water Profile</h3>
          <p className="sub">Carlsbad Alkaline Water™ · Historic artesian well, Carlsbad CA</p>
          <dl>
            {waterProfile.map((r) => (
              <div className={r.big ? "row big" : "row"} key={r.label}>
                <dt>{r.label}</dt>
                <dd>{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="foot">
            Fluoride and sodium per independent analysis by Dr. Richard Sauerheber, Palomar College, Sept 30, 2011.
            Source licensed by the California Department of Public Health.
          </p>
        </div>
      </div>
    </section>
  );
}

export function WaysToBuy() {
  return (
    <section className="alt" id="get">
      <div className="wrap">
        <p className="eyebrow">Three ways to drink it</p>
        <h2>Fill up, have it delivered, or grab a liter</h2>
        <div className="ways">
          <article className="way">
            <h3>Self-serve vending</h3>
            <p className="price">{vendingPricePerGallon} <small>per gallon</small></p>
            <ul>
              <li>Open 24 hours, 7 days a week</li>
              <li>Stainless steel machines</li>
              <li>Takes $1, $5, $10 bills and coins</li>
            </ul>
            <a className="btn ghost" href="#vending">How it works</a>
          </article>
          <article className="way">
            <h3>Home &amp; business delivery</h3>
            <p className="price">$19 <small>3 gal · $24 for 5 gal</small></p>
            <ul>
              <li>Delivered to your door in North County</li>
              <li>No contract for businesses</li>
              <li>Coolers and dispensers available</li>
            </ul>
            <a className="btn ghost" href="#delivery">Start delivery</a>
          </article>
          <article className="way">
            <h3>1-liter bottles in stores</h3>
            <p className="price">$10.99 <small>12-pack at Costco</small></p>
            <ul>
              <li>About $0.91 per 33.8 oz bottle</li>
              <li>Costco, Walmart, Target, Sprouts, Bristol Farms</li>
              <li>900+ stores in all</li>
            </ul>
            <a className="btn ghost" href="#visit">Questions? Call us</a>
          </article>
        </div>
      </div>
    </section>
  );
}

function PriceTable({ caption, rows }: { caption: string; rows: { item: string; price: string }[] }) {
  return (
    <table className="price-table">
      <caption>{caption}</caption>
      <tbody>
        {rows.map((r) => (
          <tr key={r.item}>
            <td>{r.item}</td>
            <td>{r.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Vending() {
  return (
    <section id="vending">
      <div className="wrap two">
        <div className="stack">
          <p className="eyebrow">Self-serve vending · {business.street}</p>
          <h2>Bring your bottles. We&apos;re open all night.</h2>
          <p className="lede">Our machines draw straight from our own historic artesian well. Fill small, medium or large bottles any time.</p>
          <ol className="steps">
            <li><div><b>Bring small bills</b><span>Machines take $1, $5 and $10 bills and coins. Change comes back in coins.</span></div></li>
            <li><div><b>Rinse first, for $0.10</b><span>Place the bottle upside down over the nozzle, press the rinse button and spin the bottle.</span></div></li>
            <li><div><b>Fill up at {vendingPricePerGallon} a gallon</b><span>3 and 5 gallon bottles fit right under the nozzle.</span></div></li>
            <li><div><b>Keep your bottles clean</b><span>Every so often, swirl about 32 oz of tap water with a tablespoon of bleach for 3 minutes, then rinse well several times.</span></div></li>
          </ol>
          <p className="callout"><b>Please don&apos;t park in the Fresco Cocina lot.</b> It&apos;s private parking for the restaurant.</p>
          <p className="callout"><b>Skip ceramic crocks.</b> Airborne bacteria grows inside them and affects the taste and pH of the water. Our non-bacterial dispenser with stand is a better fit.</p>
        </div>
        <div className="tables">
          <figure className="photo">
            <Image src={kioskNight} sizes={half} placeholder="blur" alt="A customer holding filled water jugs in front of the lit self-serve kiosk at night" />
            <figcaption>The kiosk is open all night. Bring your own bottles.</figcaption>
          </figure>
          <PriceTable caption="Bottles & equipment · in store" rows={equipment} />
          <PriceTable caption="Hours" rows={hours.map((h) => ({ item: h.label, price: h.value }))} />
          <p className="form-note">Buying equipment? Call ahead at {business.phone} to make sure what you need is in stock.</p>
        </div>
      </div>
    </section>
  );
}

export function Delivery() {
  return (
    <section className="alt" id="delivery">
      <div className="wrap two">
        <div className="stack">
          <p className="eyebrow">Home &amp; business delivery</p>
          <h2>Delivered to your door</h2>
          <p className="lede">We deliver 3 and 5 gallon bottles and cases of 1-liter bottles across coastal North County.</p>
          <figure className="photo">
            <Image src={truck} sizes={half} placeholder="blur" alt="The Carlsbad Alkaline Water delivery truck parked on Carlsbad Blvd" />
          </figure>
          <div className="area" aria-label="Delivery area">
            {deliveryArea.map((c) => <span key={c}>{c}</span>)}
          </div>
          <PriceTable caption="Delivery pricing" rows={deliveryPrices} />
          <p className="callout">
            <b>Minimum order:</b> three 3 or 5 gallon bottles, or 3 cases, per month. Home delivery uses a one-year
            agreement with a $100 early-cancellation fee, waived if you move outside our area. Businesses need no
            contract. A 3% fee ($1 minimum) applies to card payments.
          </p>
        </div>
        <DeliveryForm />
      </div>
    </section>
  );
}

const quotes = [
  { img: jake, alt: "Jake Smith beside the Frazier statue", text: "Jake drinks one to one and a half gallons a day to keep in top condition.", cite: "Jake Smith, world arm wrestling champion and our general manager for 20 years" },
  { img: segal, alt: "Fred Segal, Veronica Grigoras, Tina Segal and Ludvik Grigoras at the statue", text: "Thank you to Shailene Woodley and Ellen DeGeneres for sharing our water with millions of viewers.", cite: "As featured on The Ellen DeGeneres Show. Pictured: Fred & Tina Segal with owners Veronica & Ludvik Grigoras" },
  { img: pickett, alt: "Ryan and Jennifer Pickett at the Frazier statue", text: "Koko Beach cooks with Carlsbad Alkaline Water and serves it free with every meal.", cite: "Koko Beach restaurant, Carlsbad. Pictured: Ryan Pickett of the Green Bay Packers and Jennifer Pickett, longtime fans" },
];

const gallery = [
  { img: bicycle, alt: "A customer with a child seat and water bottles on her bicycle at the kiosk" },
  { img: trailer, alt: "A bicycle trailer carrying a 5-gallon jug, parked by the kiosk" },
  { img: school, alt: "A school group visiting the Frazier statue" },
  { img: plaza, alt: "A group of visitors on the plaza" },
  { img: night, alt: "The Water Place building and kiosk lit up at night" },
];

export function Voices() {
  return (
    <section id="voices">
      <div className="wrap">
        <p className="eyebrow">Our customers</p>
        <h2>People drive hundreds of miles for it</h2>
        <p className="lede">Customers come from Los Angeles, Orange County, the Inland Empire, Las Vegas and Arizona, some driving as far as 470 miles one way to fill up.</p>
        <div className="quotes">
          {quotes.map((q) => (
            <blockquote key={q.cite}>
              <Image src={q.img} alt={q.alt} sizes="(max-width: 900px) 100vw, 340px" placeholder="blur" />
              <p>{q.text}</p>
              <cite>{q.cite}</cite>
            </blockquote>
          ))}
        </div>
        <div className="gallery" aria-label="Customers at the Water Place">
          {gallery.map((g) => (
            <Image key={g.alt} src={g.img} alt={g.alt} sizes="(max-width: 760px) 50vw, 220px" placeholder="blur" />
          ))}
        </div>
        <div className="press" aria-label="Featured in">
          <b>Featured in</b>
          {press.map((p) => <span key={p}>{p}</span>)}
        </div>
      </div>
    </section>
  );
}

const clippings = [
  { img: clipEden, alt: "North County Times clipping: Spring produced Eden in a glass", cap: "“Spring produced Eden in a glass,” North County Times" },
  { img: clipFlows, alt: "Newspaper clipping: Carlsbad history to flow forth again", cap: "“Carlsbad history to flow forth again”" },
  { img: clipTherapeutic, alt: "Newspaper clipping: Carlsbad well has therapeutic history", cap: "“Carlsbad well has therapeutic history”" },
];

export function History() {
  return (
    <section className="alt" id="history">
      <div className="wrap">
        <p className="eyebrow">History</p>
        <h2>The well that named a city</h2>
        <p className="lede">Carlsbad takes its name from this water. Its minerals matched the famous spa waters of Karlsbad, Bohemia, now Karlovy Vary in the Czech Republic.</p>
        <figure className="photo history-photo">
          <Image src={founders} sizes="(max-width: 860px) 100vw, 820px" placeholder="blur" alt="Carlsbad's founders on the train platform in the late 1880s, by the Mineral Water sign, with the Hotel Carlsbad behind" />
          <figcaption>Carlsbad&apos;s founders in the late 1880s. John Frazier, his wife and daughter, Gerhard Schutte, Samuel Church Smith and D.D. Wadsworth stand by the Mineral Water sign.</figcaption>
        </figure>
        <ol className="timeline">
          {timeline.map((t) => (
            <li key={t.year}>
              <span className="yr">{t.year}</span>
              <div><b>{t.title}</b><p>{t.text}</p></div>
            </li>
          ))}
        </ol>
        <div className="clippings" aria-label="Newspaper clippings">
          {clippings.map((c) => (
            <figure key={c.cap}>
              <Image src={c.img} alt={c.alt} sizes="(max-width: 760px) 100vw, 360px" placeholder="blur" />
              <figcaption>{c.cap}</figcaption>
            </figure>
          ))}
        </div>
        <p className="form-note" style={{ marginTop: 20 }}>Read more in <i>Seekers of the Springs</i> by Marje Howard-Jones.</p>
      </div>
    </section>
  );
}
