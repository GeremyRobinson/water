// All business details in one place. Edit here and every section updates.

export const business = {
  name: "Carlsbad Alkaline Water",
  spaName: "Carlsbad Mineral Water Spa",
  owners: "Ludvik and Veronica Grigoras",
  street: "2802 Carlsbad Blvd",
  city: "Carlsbad",
  region: "CA",
  postalCode: "92008",
  phone: "760 434-1887",
  phoneHref: "tel:+17604341887",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=2802+Carlsbad+Blvd+Carlsbad+CA+92008",
  spaUrl: "http://www.carlsbadmineralspa.com",
  geo: { lat: 33.1599575, lng: -117.3523093 },
};

export const notices = {
  spaClosed: "The Mineral Spa is temporarily closed.",
  vendingOpen: "Water vending stays open 24 hours, 7 days a week.",
  newWell:
    "Our 3rd historic well was completed in December 2020, so there's plenty of water for everyone.",
};

export const waterProfile: { label: string; value: string; big?: boolean }[] = [
  { label: "pH", value: "8.76", big: true },
  { label: "Total dissolved solids", value: "50–70 ppm" },
  { label: "Sodium", value: "0" },
  { label: "Fluoride", value: "0.0 ppm" },
  { label: "Source depth", value: "1,700 ft" },
  { label: "Time underground", value: "~9,500 yrs" },
  { label: "Treatment", value: "None added" },
];

export const vendingPricePerGallon = "$1.40";

export const equipment: { item: string; price: string }[] = [
  { item: "Non-bacterial dispenser with stand (fits 3 & 5 gal)", price: "$29" },
  { item: "3 gal US-made plastic bottle, handle & screw cap", price: "$16" },
  { item: "5 gal US-made plastic bottle, handle & screw cap", price: "$19" },
  { item: "1 gal Italian glass bottle with cap", price: "$15" },
  { item: "3 gal Italian glass bottle with cap", price: "$59" },
  { item: "5 gal Italian glass bottle with cap", price: "$69" },
  { item: "Handle for 3 or 5 gal glass bottle", price: "$12" },
  { item: "Electronic pH meter", price: "$29" },
];

export const hours: { label: string; value: string }[] = [
  { label: "Vending machines", value: "24 hrs · 7 days" },
  { label: "Bottles & equipment, Mon–Fri", value: "8 AM–6 PM" },
  { label: "Bottles & equipment, Sat–Sun", value: "9 AM–6 PM" },
];

export const deliveryArea = [
  "Carlsbad",
  "Encinitas",
  "Leucadia",
  "Oceanside",
  "Vista",
  "San Marcos",
  "Del Mar",
  "Rancho Santa Fe",
  "Solana Beach",
];

export const deliveryPrices: { item: string; price: string }[] = [
  { item: "5 gallon bottle", price: "$24.00" },
  { item: "3 gallon bottle", price: "$19.00" },
  { item: "Case of 12 × 1 liter", price: "$25.00" },
];

export const press = [
  "The Ellen DeGeneres Show",
  "San Diego Union-Tribune",
  "North County Times",
  "VIA Magazine",
  "The Coast News",
  "Carlsbad Magazine",
  "FindaSpring.com",
];

export const timeline: { year: string; title: string; text: string }[] = [
  {
    year: "1882",
    title: "Capt. John Frazier strikes water",
    text: "Drilling a well for his farm near the beach, Frazier finds mineral water. Labs in New York and Chicago find it chemically similar to the spa waters of Karlsbad, Bohemia.",
  },
  {
    year: "1880s",
    title: "A town and a Victorian hotel",
    text: 'Frazier plats his farm as a city named Carlsbad, bottles "The American Carlsbad Mineral Water" for the nation, and builds a hotel by the well. Visitors include at least two U.S. presidents.',
  },
  {
    year: "1930s",
    title: "Lost in the Depression",
    text: "Without funds for upkeep, the owners abandon the well.",
  },
  {
    year: "1955",
    title: "Rediscovered",
    text: 'Kay and "Chris" Christiansen find the old well and dream of reviving it.',
  },
  {
    year: "1991",
    title: "A son of Karlovy Vary arrives",
    text: "Kay meets Ludvik Grigoras, born in Karlovy Vary and an émigré to the U.S. at 18. The State of California dedicates the site as a historic landmark.",
  },
  {
    year: "1996",
    title: "Flowing again after 60 years",
    text: "Ludvik and Veronica Grigoras restore and re-drill the wells from 1993 to 1996. Officials from Carlsbad and its new sister city Karlovy Vary attend the re-opening.",
  },
  {
    year: "2020",
    title: "A third historic well",
    text: "Drilling completes in December, securing supply for years to come.",
  },
];
