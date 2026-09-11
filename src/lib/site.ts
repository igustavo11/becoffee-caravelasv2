import { INSTAGRAM, MAPS, PHONE, WHATSAPP } from "@/lib/constants";
import { CATEGORIES, MENU } from "@/lib/menu";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://becoffeecaravelas.com.br"
)
  .trim()
  .replace(/\/+$/, "");

export const SITE_NAME = "Bê Coffee";
export const SITE_TITLE =
  "Bê Coffee | Cafeteria e Coffee Shop em Caravelas - BA";
export const SITE_DESCRIPTION =
  "Cafeteria e coffee shop no centro de Caravelas (BA). Cafés especiais, cappuccinos, bolos, salgados e tapiocas em um ambiente acolhedor. Reserve pelo WhatsApp.";
export const SITE_LOCALE = "pt_BR";
export const SITE_LANGUAGE = "pt-BR";

export const SITE_KEYWORDS = [
  "Bê Coffee",
  "cafeteria em Caravelas",
  "coffee shop Caravelas",
  "café especial Caravelas BA",
  "cappuccino Caravelas",
  "bolos e tortas Caravelas",
  "salgados Caravelas",
  "tapioca Caravelas",
  "cardápio cafeteria",
  "cafeteria Bahia",
];

export const BUSINESS = {
  name: SITE_NAME,
  alternateName: "Becoffee Caravelas",
  description: SITE_DESCRIPTION,
  telephone: `+${PHONE}`,
  priceRange: "R$ 20–40",
  servesCuisine: [
    "Cafés especiais",
    "Cappuccino",
    "Chocolate quente",
    "Bebidas geladas",
    "Bolos",
    "Tortas",
    "Salgados",
    "Tapioca",
    "Doces",
  ],
  streetAddress: "R. Sete de Setembro, 14",
  addressLocality: "Caravelas",
  addressRegion: "BA",
  postalCode: "45900-000",
  addressCountry: "BR",
  latitude: -17.7339652,
  longitude: -39.2664242,
  image: `${SITE_URL}/img/becoffie2.png`,
  logo: `${SITE_URL}/img/becoffie2.png`,
} as const;

interface OpeningHoursSpecification {
  "@type": "OpeningHoursSpecification";
  dayOfWeek: string[];
  opens: string;
  closes: string;
}

const OPENING_HOURS: OpeningHoursSpecification[] = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Wednesday", "Thursday"],
    opens: "16:00",
    closes: "21:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Friday", "Saturday", "Sunday"],
    opens: "16:00",
    closes: "22:00",
  },
];

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.addressCountry,
  };
}

function menuSections() {
  return CATEGORIES.map((category) => {
    const items = MENU[category.id] ?? [];

    return {
      "@type": "MenuSection",
      name: category.name,
      hasMenuItem: items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.dsc,
        offers: {
          "@type": "Offer",
          price: item.price.toFixed(2),
          priceCurrency: "BRL",
        },
      })),
    };
  }).filter((section) => section.hasMenuItem.length > 0);
}

export function cafeOrCoffeeShopJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${SITE_URL}/#cafe`,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    description: BUSINESS.description,
    url: SITE_URL,
    image: [BUSINESS.image],
    logo: BUSINESS.logo,
    telephone: BUSINESS.telephone,
    priceRange: BUSINESS.priceRange,
    servesCuisine: [...BUSINESS.servesCuisine],
    currenciesAccepted: "BRL",
    acceptsReservations: WHATSAPP,
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    hasMap: MAPS,
    sameAs: [INSTAGRAM],
    areaServed: {
      "@type": "City",
      name: "Caravelas",
    },
    openingHoursSpecification: OPENING_HOURS,
    hasMenu: {
      "@type": "Menu",
      "@id": `${SITE_URL}/#menu`,
      name: `Cardápio ${BUSINESS.name}`,
      url: `${SITE_URL}/#cardapio`,
      inLanguage: SITE_LANGUAGE,
      hasMenuSection: menuSections(),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: SITE_LANGUAGE,
    publisher: {
      "@id": `${SITE_URL}/#cafe`,
    },
  };
}
