import { Header, Notice } from "@/components/Header";
import { Delivery, Hero, History, Vending, Voices, Water, WaysToBuy } from "@/components/Sections";
import { Footer, Visit } from "@/components/Visit";
import { business } from "@/content/site";

// Structured data so search engines show the address, phone and hours.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  telephone: "+1-760-434-1887",
  image: "/images/water-place-day.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: business.geo.lat, longitude: business.geo.lng },
  department: {
    "@type": "LocalBusiness",
    name: "Carlsbad Alkaline Water self-serve vending",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "09:00", closes: "18:00" },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Notice />
      <Header />
      <main id="top">
        <Hero />
        <Water />
        <WaysToBuy />
        <Vending />
        <Delivery />
        <Voices />
        <History />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
