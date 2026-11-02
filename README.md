# Carlsbad Alkaline Water website

A redesign of [carlsbadalkalinewater.com](https://carlsbadalkalinewater.com), built with Next.js (App Router) and TypeScript, ready to deploy on Vercel.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things live

- `content/site.ts`: address, phone, hours, prices, delivery area and history. Edit business details here.
- `components/`: the page sections (header, hero, water profile, vending, delivery, customers, history, visit).
- `app/globals.css`: colors, fonts and layout. Light and dark mode follow the visitor's device.
- `public/images/`: photos from the current site. Next.js serves them resized and in modern formats.

## Not done yet

The delivery sign-up form checks the fields but doesn't send anywhere. Hook it up to an email service or CRM before relying on it.
