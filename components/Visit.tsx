"use client";

import { useState } from "react";
import { business } from "@/content/site";

export function Visit() {
  const [copied, setCopied] = useState(false);
  return (
    <section className="visit" id="visit">
      <div className="wrap">
        <p className="eyebrow">Visit us</p>
        <h2>Come taste the difference</h2>
        <p className="lede">Owners {business.owners} look forward to hearing from you.</p>
        <div className="visit-grid">
          <div>
            <h3>Address</h3>
            <p className="big">
              {business.street}
              <br />
              {business.city}, {business.region} {business.postalCode}
            </p>
            <a className="btn" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
            <p className="form-note" style={{ color: "inherit", opacity: 0.8 }}>
              Park in our lot next to Swami&apos;s Cafe.
            </p>
          </div>
          <div>
            <h3>Phone</h3>
            <p className="big"><a href={business.phoneHref}>{business.phone}</a></p>
            <button
              className="copy"
              type="button"
              onClick={() =>
                navigator.clipboard?.writeText(business.phone).then(() => setCopied(true), () => setCopied(false))
              }
            >
              {copied ? "Copied" : "Copy number"}
            </button>
          </div>
          <div>
            <h3>Hours</h3>
            <table className="hours">
              <tbody>
                <tr><td>Self-serve water</td><td>24/7</td></tr>
                <tr><td>Store, Mon–Fri</td><td>8 AM–6 PM</td></tr>
                <tr><td>Store, Sat–Sun</td><td>9 AM–6 PM</td></tr>
                <tr><td>Mineral Spa</td><td>Temporarily closed</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© {new Date().getFullYear()} Carlsbad Alkaline Water &amp; Carlsbad Mineral Water Spa · A California Historic Site</span>
        <span><a href={business.spaUrl} target="_blank" rel="noopener noreferrer">carlsbadmineralspa.com</a></span>
      </div>
    </footer>
  );
}
