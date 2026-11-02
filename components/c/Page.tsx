import Image from "next/image";
import { business, deliveryArea, equipment, vendingPricePerGallon } from "@/content/site";
import { Caustics } from "./Caustics";

import kioskDay from "@/public/images/kiosk-day-fillup.jpg";
import waterPlaceDay from "@/public/images/water-place-day.jpg";
import waterPlaceNight from "@/public/images/water-place-night.jpg";
import truck from "@/public/images/delivery-truck.jpg";
import segal from "@/public/images/segal-family.jpg";
import founders from "@/public/images/founders-photo.jpg";
import jake from "@/public/images/jake-smith.jpg";
import pickett from "@/public/images/pickett-family.jpg";
import bicycle from "@/public/images/customer-bicycle.jpg";
import school from "@/public/images/school-group.jpg";
import kioskJug from "@/public/images/kiosk-customer-jug.jpg";
import clipEden from "@/public/images/clipping-eden-in-a-glass.jpg";

const Phone = ({ className }: { className?: string }) => (
  <a className={className} href={business.phoneHref}>{business.phone}</a>
);

function TopBar() {
  return (
    <header className="top">
      <div className="wrap">
        <a className="name" href="#top">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2C8.3 7.4 5.4 11.2 5.4 14.9a6.6 6.6 0 0 0 13.2 0c0-3.7-2.9-7.5-6.6-12.7Z" /></svg>
          {business.name}
        </a>
        <nav aria-label="On this page">
          <a href="#fill">Fill up</a>
          <a href="#delivery">Delivery</a>
          <a href="#water">Our water</a>
          <a href="#story">Our story</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="call" href={business.phoneHref} aria-label={`Call us at ${business.phone}`}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" /></svg>
          <span className="num">{business.phone}</span>
          <span className="short">Call</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <Caustics />
      <div className="wrap hero-in">
        <p className="kicker">Carlsbad, California · Since 1882</p>
        <h1>Made by nature.<br />Not by man.</h1>
        <p className="lead">
          Naturally alkaline water from the historic well that gave Carlsbad its name. Nothing added, nothing taken out.
        </p>
        <div className="now">
          <div className="now-row">
            <span className="dot" aria-hidden="true" />
            <strong>Self-serve water is open 24 hours a day</strong>
          </div>
          <p>{vendingPricePerGallon} a gallon at {business.street}, Carlsbad</p>
          <div className="btns">
            <a className="btn" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
            <a className="btn ghost" href="#delivery">Get delivery</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ways() {
  return (
    <section className="ways-band">
      <div className="wrap">
        <h2>Three ways to get our water</h2>
        <ol className="ways">
          <li>
            <h3>Fill your own bottles</h3>
            <p className="price">{vendingPricePerGallon}<span> a gallon</span></p>
            <p>At our Water Place on Carlsbad Blvd. Open day and night.</p>
            <a href="#fill">How to fill up</a>
          </li>
          <li>
            <h3>Have it delivered</h3>
            <p className="price">$24<span> a 5 gallon bottle</span></p>
            <p>To homes and businesses in North County San Diego.</p>
            <a href="#delivery">Delivery details</a>
          </li>
          <li>
            <h3>Buy it in stores</h3>
            <p className="price">$10.99<span> for 12 liters</span></p>
            <p>One-liter bottles at Costco, Walmart, Target, Sprouts and 900+ stores.</p>
            <a href={business.phoneHref}>Call to ask where</a>
          </li>
        </ol>
      </div>
    </section>
  );
}

function FillUp() {
  return (
    <section id="fill">
      <div className="wrap">
        <p className="kicker">Self-serve</p>
        <h2>Fill up any time,<br />day or night.</h2>
        <p className="lead">Our machines draw straight from our own well. Here&apos;s everything you need to know before you come.</p>

        <div className="split">
          <figure className="photo">
            <Image src={kioskDay} alt="A smiling customer filling a five-gallon jug at our self-serve kiosk" sizes="(max-width: 860px) 100vw, 540px" placeholder="blur" />
          </figure>
          <ol className="steps">
            <li>
              <div><h3>Bring your bottles and small bills</h3>
              <p>The machines take $1, $5 and $10 bills and coins. Change comes back in coins.</p></div>
            </li>
            <li>
              <div><h3>Rinse your bottle, 10¢</h3>
              <p>Hold it upside down over the nozzle, press the rinse button and turn the bottle.</p></div>
            </li>
            <li>
              <div><h3>Fill up, {vendingPricePerGallon} a gallon</h3>
              <p>3 and 5 gallon bottles fit right under the nozzle.</p></div>
            </li>
          </ol>
        </div>

        <div className="notes">
          <div>
            <h3>Where to park</h3>
            <p>Use our lot next to Swami&apos;s Cafe. Please don&apos;t park in the Fresco Cocina lot. It&apos;s for restaurant guests.</p>
          </div>
          <div>
            <h3>No bottles yet?</h3>
            <p>Our store sells them, from $16. Open 8 AM to 6 PM on weekdays and 9 AM to 6 PM on weekends.</p>
          </div>
          <div>
            <h3>Keep bottles clean</h3>
            <p>Every so often, swirl about 32 oz of tap water with a tablespoon of bleach for 3 minutes, then rinse well.</p>
          </div>
        </div>

        <div className="table-block">
          <h3>Bottles and dispensers in our store</h3>
          <table className="prices">
            <tbody>
              {equipment.map((e) => (
                <tr key={e.item}><td>{e.item}</td><td>{e.price}</td></tr>
              ))}
            </tbody>
          </table>
          <p className="small">We suggest our dispenser with stand over a ceramic crock. Bacteria from the air can grow inside crocks and change the taste of the water.</p>
        </div>
      </div>
    </section>
  );
}

function Delivery() {
  return (
    <section className="tint" id="delivery">
      <div className="wrap">
        <p className="kicker">Delivery</p>
        <h2>We bring it to your door.</h2>
        <p className="lead">3 and 5 gallon bottles, and cases of one-liter bottles, for homes and businesses.</p>

        <div className="split">
          <div className="stack">
            <table className="prices big">
              <tbody>
                <tr><td>5 gallon bottle</td><td>$24</td></tr>
                <tr><td>3 gallon bottle</td><td>$19</td></tr>
                <tr><td>Case of 12 one-liter bottles</td><td>$25</td></tr>
              </tbody>
            </table>
            <p className="example">For example, three 5 gallon bottles a month is <strong>$72</strong>.</p>
          </div>
          <figure className="photo">
            <Image src={truck} alt="Our delivery truck parked on Carlsbad Blvd" sizes="(max-width: 860px) 100vw, 540px" placeholder="blur" />
          </figure>
        </div>

        <div className="notes">
          <div>
            <h3>Where we deliver</h3>
            <p>{deliveryArea.slice(0, -1).join(", ")} and {deliveryArea[deliveryArea.length - 1]}.</p>
          </div>
          <div>
            <h3>How it works</h3>
            <p>At least 3 bottles or 3 cases a month. Homes sign up for one year ($100 to cancel early, waived if you move away). Businesses need no contract.</p>
          </div>
          <div>
            <h3>Paying</h3>
            <p>We take payment over the phone. Paying by card adds 3% ($1 minimum).</p>
          </div>
        </div>

        <div className="call-box">
          <div>
            <h3>Start your delivery with one call</h3>
            <p>We&apos;ll set it up in a few minutes. Online sign-up is coming soon.</p>
          </div>
          <a className="btn" href={business.phoneHref}>Call {business.phone}</a>
        </div>
      </div>
    </section>
  );
}

function OurWater() {
  return (
    <section id="water">
      <div className="wrap">
        <p className="kicker">Our water</p>
        <h2>9,500 years in the making.</h2>
        <p className="lead">
          Most alkaline water is tap water run through a machine. Ours comes out of the ground that way. Here is its journey.
        </p>

        <figure className="journey">
          <svg className="j-wide" viewBox="0 0 1000 380" role="img" aria-labelledby="j-t">
            <title id="j-t">Rain falls on the mountains, soaks down through clay and granite, travels west for about 9,500 years, and rises in our well by the ocean.</title>
            <rect width="1000" height="110" className="sky" />
            <path d="M0 110 V70 L70 40 L130 62 L200 28 L280 66 L380 96 L600 106 L900 110 Z" className="hill" />
            <rect x="900" y="104" width="100" height="10" className="sea" />
            <path d="M0 110 H1000 V160 L0 140 Z" className="clay" />
            <path d="M0 140 L1000 160 V290 L0 250 Z" className="granite" />
            <path d="M0 250 L1000 290 V330 L0 286 Z" className="aquifer" />
            <path d="M0 286 L1000 330 V380 H0 Z" className="deep" />
            <g className="rain">
              {[110, 140, 170, 200, 230, 260].map((x, i) => <path key={x} d={`M${x} 6 l-4 12`} style={{ animationDelay: `${i * 0.23}s` }} />)}
            </g>
            <g className="seep">
              {[150, 190, 230].map((x, i) => <circle key={x} cx={x} cy="118" r="5" style={{ animationDelay: `${i * 0.9}s` }} />)}
            </g>
            <path d="M160 270 C 400 285, 640 300, 840 312" className="flow" />
            <path d="M826 303 l16 9 l-16 9" className="flow-head" />
            <rect x="842" y="70" width="14" height="250" className="well" />
            <path d="M849 312 V78" className="rise" />
            <rect x="836" y="62" width="26" height="12" rx="3" className="well-cap" />
            <g className="labels">
              <text x="300" y="44">Cleveland National Forest</text>
              <text x="300" y="68" className="sub">40 miles east of Carlsbad</text>
              <text x="828" y="92" textAnchor="end">Our well</text>
              <text x="950" y="96" textAnchor="middle" className="sub">Pacific</text>
              <text x="24" y="134">Clay, 200 ft</text>
              <text x="24" y="196">Granite, 1,500 ft</text>
              <text x="824" y="226" textAnchor="end">1,700 ft down</text>
              <text x="250" y="345" className="light">Heading west underground for about 9,500 years</text>
            </g>
            <g className="marks">
              <circle cx="60" cy="26" r="20" /><text x="60" y="34">1</text>
              <circle cx="300" cy="226" r="20" /><text x="300" y="234">2</text>
              <circle cx="210" cy="338" r="20" /><text x="210" y="346">3</text>
              <circle cx="920" cy="44" r="20" /><text x="920" y="52">4</text>
            </g>
          </svg>
          <svg className="j-narrow" viewBox="0 0 400 440" aria-hidden="true">
            <rect width="400" height="120" className="sky" />
            <path d="M0 120 V80 L40 55 L80 72 L120 45 L170 78 L240 108 L340 118 L400 120 Z" className="hill" />
            <rect x="352" y="114" width="48" height="10" className="sea" />
            <path d="M0 120 H400 V190 L0 170 Z" className="clay" />
            <path d="M0 170 L400 190 V350 L0 300 Z" className="granite" />
            <path d="M0 300 L400 350 V395 L0 340 Z" className="aquifer" />
            <path d="M0 340 L400 395 V440 H0 Z" className="deep" />
            <g className="rain">
              {[50, 75, 100, 125, 150].map((x, i) => <path key={x} d={`M${x} 6 l-4 12`} style={{ animationDelay: `${i * 0.23}s` }} />)}
            </g>
            <g className="seep">
              {[70, 110].map((x, i) => <circle key={x} cx={x} cy="128" r="4" style={{ animationDelay: `${i * 1.1}s` }} />)}
            </g>
            <path d="M50 322 C 150 336, 250 356, 330 372" className="flow" />
            <path d="M318 363 l14 9 l-14 9" className="flow-head" />
            <rect x="334" y="80" width="12" height="300" className="well" />
            <path d="M340 372 V88" className="rise" />
            <rect x="328" y="72" width="24" height="12" rx="3" className="well-cap" />
            <g className="labels">
              <text x="12" y="104" className="light">Mountains</text>
              <text x="320" y="100" textAnchor="end">Our well</text>
              <text x="12" y="152">Clay, 200 ft</text>
              <text x="12" y="212">Granite, 1,500 ft</text>
              <text x="320" y="306" textAnchor="end">1,700 ft down</text>
              <text x="16" y="412" className="light">About 9,500 years</text>
            </g>
            <g className="marks">
              <circle cx="190" cy="40" r="20" /><text x="190" y="48">1</text>
              <circle cx="236" cy="236" r="20" /><text x="236" y="244">2</text>
              <circle cx="196" cy="406" r="20" /><text x="196" y="414">3</text>
              <circle cx="374" cy="44" r="20" /><text x="374" y="52">4</text>
            </g>
          </svg>
          <figcaption className="small">Not to scale.</figcaption>
        </figure>

        <ol className="legend">
          <li><span><b>Rain falls</b> on the Cleveland National Forest, about 40 miles east of Carlsbad.</span></li>
          <li><span><b>It soaks down</b> through 200 feet of clay and 1,500 feet of granite, which protect it and give it natural minerals.</span></li>
          <li><span><b>It travels west</b> through the rock for about 9,500 years.</span></li>
          <li><span><b>It rises in our well</b>, 1,700 feet deep, one block from the Pacific.</span></li>
        </ol>

        <div className="facts">
          <h3>What&apos;s in the glass</h3>
          <dl>
            <div><dt>pH</dt><dd>8.76 <small>naturally alkaline (7 is neutral)</small></dd></div>
            <div><dt>Natural minerals</dt><dd>50 to 70 ppm</dd></div>
            <div><dt>Sodium</dt><dd>0 mg</dd></div>
            <div><dt>Fluoride</dt><dd>0.0 ppm</dd></div>
            <div><dt>Chlorine</dt><dd>None</dd></div>
            <div><dt>Anything added</dt><dd>Nothing</dd></div>
          </dl>
          <p className="small">
            Our well and machines are licensed by the California Department of Public Health and tested every week, as the law requires.
            Sodium and fluoride were measured by Dr. Richard Sauerheber of Palomar College in 2011.
          </p>
        </div>

        <figure className="quote">
          <Image src={clipEden} alt="North County Times clipping headlined Spring produced Eden in a glass" sizes="(max-width: 860px) 40vw, 240px" />
          <blockquote>
            <p>&ldquo;Eden in a glass.&rdquo;</p>
            <cite>The North County Times, writing about our water</cite>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="tint" id="story">
      <div className="wrap">
        <p className="kicker">Our story</p>
        <h2>The well that named a city.</h2>
        <p className="lead">
          In 1882, Captain John Frazier drilled a well for his farm near the beach. Labs in New York and Chicago found his water was much like the famous spa waters of Karlsbad, in Bohemia. So he named his new town Carlsbad.
        </p>

        <figure className="photo wide founders">
          <Image src={founders} alt="Carlsbad's founders on the train platform in the late 1880s, beside the Carlsbad Mineral Water sign, with the Hotel Carlsbad behind them" sizes="(max-width: 1100px) 100vw, 1040px" placeholder="blur" />
          <figcaption>Carlsbad&apos;s founders beside the Mineral Water sign, late 1880s.</figcaption>
        </figure>

        <div className="split family">
          <div className="stack">
            <h3 className="h3big">Then the well was lost.</h3>
            <p>The Great Depression closed it in the 1930s. In 1955, Kay and &ldquo;Chris&rdquo; Christiansen found the old well again, but they couldn&apos;t bring it back.</p>
            <p>In 1991, Kay met <b>Ludvik Grigoras</b>. Ludvik was born in Karlovy Vary, the very Karlsbad our city is named after. He escaped communist Czechoslovakia at 18 and made his way to the United States.</p>
            <p>From 1993 to 1996, Ludvik and his wife <b>Veronica</b> restored and re-drilled the wells. Leaders from Carlsbad and Karlovy Vary, now sister cities, came to the reopening. In June 1996, after 60 years, the water flowed for the public again.</p>
            <p>In December 2020 they finished a third well, so there&apos;s plenty of water for years to come.</p>
          </div>
          <figure className="photo portrait">
            <Image src={segal} alt="Owners Veronica and Ludvik Grigoras with friends Fred and Tina Segal at the statue of John Frazier" sizes="(max-width: 860px) 100vw, 420px" placeholder="blur" />
            <figcaption>Owners Veronica (second from left) and Ludvik Grigoras (right), with friends Fred and Tina Segal.</figcaption>
          </figure>
        </div>
        <p className="small center">The well is a California Historic Site. Read the full history in <i>Seekers of the Springs</i> by Marje Howard-Jones.</p>
      </div>
    </section>
  );
}

const friends = [
  { img: jake, pos: "50% 35%", alt: "Jake Smith beside the statue of John Frazier", text: "Jake Smith, world arm wrestling champion and our general manager for 20 years, drinks one to one and a half gallons a day." },
  { img: pickett, pos: "50% 40%", alt: "Ryan and Jennifer Pickett at the statue", text: "Ryan Pickett, who played for the Green Bay Packers, and his wife Jennifer are longtime customers." },
  { img: bicycle, pos: "36% 50%", alt: "A customer with her child and water bottles on her bicycle at the kiosk", text: "Some of our neighbors fill up by bike." },
  { img: kioskJug, pos: "42% 50%", alt: "A customer carrying a five-gallon jug in front of the kiosk", text: "Others drive from Los Angeles, Las Vegas and Arizona. Some come 470 miles." },
  { img: school, pos: "50% 60%", alt: "A school group visiting the statue of John Frazier", text: "Schools visit to learn how Carlsbad got its name." },
];

function Friends() {
  return (
    <section>
      <div className="wrap">
        <p className="kicker">Our customers</p>
        <h2>People come from<br />hundreds of miles away.</h2>
        <ul className="friends">
          {friends.map((f) => (
            <li key={f.text}>
              <Image src={f.img} alt={f.alt} style={{ objectPosition: f.pos }} sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 340px" placeholder="blur" />
              <p>{f.text}</p>
            </li>
          ))}
          <li className="press">
            <h3>As seen in</h3>
            <p>The Ellen DeGeneres Show, where Shailene Woodley shared our water. Also the San Diego Union-Tribune, North County Times, VIA Magazine, The Coast News and Carlsbad Magazine.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="wrap">
        <p className="kicker">Visit us</p>
        <h2>Come see us on<br />Carlsbad Boulevard.</h2>
        <p className="lead">{business.owners} look forward to meeting you.</p>

        <div className="split">
          <figure className="photo">
            <Image src={waterPlaceDay} alt="Our Water Place: the half-timbered building, the kiosk, and the bronze statue of John Frazier" sizes="(max-width: 860px) 100vw, 540px" placeholder="blur" />
          </figure>
          <div className="stack info">
            <div>
              <h3>Address</h3>
              <p className="big">{business.street}<br />{business.city}, {business.region} {business.postalCode}</p>
              <p>Park in our lot next to Swami&apos;s Cafe.</p>
            </div>
            <div>
              <h3>Phone</h3>
              <p className="big"><Phone /></p>
            </div>
            <div>
              <h3>Hours</h3>
              <table className="prices hours">
                <tbody>
                  <tr><td>Self-serve water</td><td>24 hours, every day</td></tr>
                  <tr><td>Store, Monday to Friday</td><td>8 AM to 6 PM</td></tr>
                  <tr><td>Store, Saturday and Sunday</td><td>9 AM to 6 PM</td></tr>
                  <tr><td>Mineral Spa</td><td>Closed for now</td></tr>
                </tbody>
              </table>
            </div>
            <div className="btns">
              <a className="btn" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
              <a className="btn ghost" href={business.phoneHref}>Call us</a>
            </div>
          </div>
        </div>
        <figure className="photo wide night">
          <Image src={waterPlaceNight} alt="The Water Place and kiosk lit up at night" sizes="(max-width: 1100px) 100vw, 1040px" placeholder="blur" />
          <figcaption>Open all night.</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function PageC() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Ways />
        <FillUp />
        <Delivery />
        <OurWater />
        <Story />
        <Friends />
        <Visit />
      </main>
      <footer>
        <div className="wrap">
          <p><b>{business.name}</b> · {business.street}, {business.city}, {business.region} {business.postalCode} · <Phone /></p>
          <p>A California Historic Site · Family owned by {business.owners}</p>
        </div>
      </footer>
    </>
  );
}
