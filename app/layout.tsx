import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./b.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const description =
  "Naturally alkaline artesian mineral water from a historic Carlsbad well, since 1882. Self-serve vending 24/7 at $1.40 a gallon, plus home and business delivery in North County San Diego.";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Carlsbad Alkaline Water | Artesian Mineral Water Since 1882",
  description,
  openGraph: {
    title: "Carlsbad Alkaline Water",
    description,
    type: "website",
    images: [{ url: "/images/water-place-day.jpg", width: 1066, height: 800 }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
