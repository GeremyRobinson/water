"use client";

import { useState, type FormEvent } from "react";

const required: { name: string; label: string }[] = [
  { name: "name", label: "Name" },
  { name: "address", label: "Delivery address" },
  { name: "phone", label: "Phone" },
];

export function DeliveryForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [invalid, setInvalid] = useState<Set<string>>(new Set());

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const bad = new Set<string>();
    for (const f of required) {
      const v = String(data.get(f.name) ?? "").trim();
      if (!v) bad.add(f.name);
    }
    setInvalid(bad);
    if (bad.size) {
      setStatus(`Please fill in: ${required.filter((f) => bad.has(f.name)).map((f) => f.label).join(", ")}.`);
      return;
    }
    // TODO: send to the business (email service or CRM). Until then, nothing leaves the browser.
    setStatus(
      `Thanks, ${String(data.get("name")).trim()}. Online sign-up isn't connected yet, so please call 760 434-1887 and we'll set up your delivery.`,
    );
  }

  const inv = (n: string) => (invalid.has(n) ? true : undefined);

  return (
    <form className="signup" onSubmit={onSubmit} noValidate>
      <h3 className="full">Start delivery</h3>
      <p className="form-banner">
        <b>Online sign-up is coming soon.</b> For now, call <a href="tel:+17604341887">760 434-1887</a> and we&apos;ll set up
        your delivery in a few minutes.
      </p>
      <label>Name<input id="f-name" name="name" autoComplete="name" required aria-invalid={inv("name")} /></label>
      <label>
        Business name <span className="form-note">(optional)</span>
        <input id="f-biz" name="business" autoComplete="organization" />
      </label>
      <label className="full">
        Delivery address<input id="f-addr" name="address" autoComplete="street-address" required aria-invalid={inv("address")} />
      </label>
      <label>Phone<input id="f-phone" name="phone" type="tel" autoComplete="tel" required aria-invalid={inv("phone")} /></label>
      <label>
        Email <span className="form-note">(optional)</span>
        <input id="f-email" name="email" type="email" autoComplete="email" />
      </label>
      <fieldset className="full">
        <legend>Delivery for</legend>
        <label><input type="radio" id="f-home" name="type" value="home" defaultChecked /> Home</label>
        <label><input type="radio" id="f-business" name="type" value="business" /> Business</label>
      </fieldset>
      <label>
        Bottle size
        <select id="f-size" name="size">
          <option>5 gallon</option>
          <option>3 gallon</option>
          <option>Case of 1-liter bottles</option>
        </select>
      </label>
      <label>
        Bottles or cases per month
        <input id="f-qty" name="qty" type="number" min={3} defaultValue={3} inputMode="numeric" />
      </label>
      <label className="full">
        Dispenser
        <select id="f-disp" name="dispenser">
          <option>Non-bacterial dispenser, $29 (recommended)</option>
          <option>Electric cooler, cold &amp; room temp (business rental)</option>
          <option>Electric cooler, cold &amp; hot (business rental)</option>
          <option>No dispenser</option>
        </select>
      </label>
      <label className="full">
        Anything we should know?
        <textarea id="f-note" name="note" rows={3} placeholder="Gate code, best delivery day, etc." />
      </label>
      <p className="form-note full">
        We&apos;ll call you to confirm your first delivery and take payment over the phone. Please don&apos;t enter card
        numbers here.
      </p>
      <button className="btn" type="submit">Send request</button>
      {status && (
        <div className="ok full" role="status">
          {status}
        </div>
      )}
    </form>
  );
}
