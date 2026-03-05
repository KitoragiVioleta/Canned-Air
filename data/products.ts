export interface Product {
  slug: string;
  countryName: string;
  vibeLine: string;
  description: string;
  priceUSD: number;
  batchId: string;
  localDateTime: string;
  coordinates: string;
  humidity: string;
  region: string;
  vibe: string;
  image: string;
}

export const products: Product[] = [
  {
    slug: "tokyo-sakura",
    countryName: "Tokyo Sakura",
    vibeLine: "A light breeze of cherry blossoms.",
    description:
      "Captured during the peak of sakura season in Ueno Park, this can holds the delicate, floral-scented air of a Tokyo spring morning. Each breath carries hints of cherry blossom petals and the quiet energy of a city in bloom.",
    priceUSD: 12.5,
    batchId: "TK-2024-0412",
    localDateTime: "2024-04-12T08:30:00+09:00",
    coordinates: "35.7148\u00b0N, 139.7732\u00b0E",
    humidity: "62%",
    region: "Asia",
    vibe: "Floral",
    image: "/images/cans/tokyo-sakura.jpg",
  },
  {
    slug: "iceland-glaciers",
    countryName: "Iceland Glaciers",
    vibeLine: "For the cool and curious.",
    description:
      "Sealed at the edge of Vatnaj\u00f6kull, Europe\u2019s largest glacier, this air is among the purest on Earth. Crisp, mineral-tinged, and impossibly fresh \u2014 it\u2019s the breath of an ancient ice field meeting the open sky.",
    priceUSD: 15.9,
    batchId: "IC-2024-0623",
    localDateTime: "2024-06-23T14:15:00+00:00",
    coordinates: "64.4000\u00b0N, 16.3000\u00b0W",
    humidity: "78%",
    region: "Europe",
    vibe: "Crisp",
    image: "/images/cans/iceland-glaciers.jpg",
  },
  {
    slug: "swiss-alps",
    countryName: "Swiss Alps",
    vibeLine: "For the serene alpine soul.",
    description:
      "Bottled at 3,454m on the Jungfraujoch, the \u2018Top of Europe\u2019. This air carries the crispness of eternal snow, the silence of high-altitude meadows, and the faintest whisper of edelweiss on the wind.",
    priceUSD: 14.5,
    batchId: "CH-2024-0715",
    localDateTime: "2024-07-15T11:00:00+02:00",
    coordinates: "46.5474\u00b0N, 7.9853\u00b0E",
    humidity: "45%",
    region: "Europe",
    vibe: "Serene",
    image: "/images/cans/swiss-alps.jpg",
  },
  {
    slug: "skogafoss",
    countryName: "Sk\u00f3gafoss",
    vibeLine: "For the misty and magnificent.",
    description:
      "Captured in the spray zone of Iceland\u2019s most dramatic waterfall. This air is thick with negative ions, mist, and the raw power of water cascading 60 meters into ancient rock. Breathe the thunder.",
    priceUSD: 15.9,
    batchId: "SK-2024-0801",
    localDateTime: "2024-08-01T09:45:00+00:00",
    coordinates: "63.5321\u00b0N, 19.5114\u00b0W",
    humidity: "92%",
    region: "Europe",
    vibe: "Dramatic",
    image: "/images/cans/skogafoss.jpg",
  },
  {
    slug: "scottish-highlands",
    countryName: "Scottish Highlands",
    vibeLine: "For the bold and earthy.",
    description:
      "Sealed in the Cairngorms on a misty autumn morning. Peat smoke, heather, and the sharp tang of highland wind \u2014 this is the breath of wild Scotland. Rugged, romantic, and utterly untamed.",
    priceUSD: 12.9,
    batchId: "SC-2024-0920",
    localDateTime: "2024-09-20T07:30:00+01:00",
    coordinates: "57.0479\u00b0N, 3.6009\u00b0W",
    humidity: "85%",
    region: "Europe",
    vibe: "Earthy",
    image: "/images/cans/scottish-highlands.jpg",
  },
  {
    slug: "caribbean",
    countryName: "Caribbean",
    vibeLine: "For the warm and wandering.",
    description:
      "Bottled on the white-sand shore of Turks & Caicos at golden hour. Salt air, coconut warmth, and the gentle rhythm of turquoise waves \u2014 this can is a vacation in a breath.",
    priceUSD: 13.5,
    batchId: "CB-2024-1105",
    localDateTime: "2024-11-05T17:30:00-05:00",
    coordinates: "21.7734\u00b0N, 72.1899\u00b0W",
    humidity: "73%",
    region: "Caribbean",
    vibe: "Tropical",
    image: "/images/cans/caribbean.jpg",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRegions(): string[] {
  return [...new Set(products.map((p) => p.region))];
}

export function getVibes(): string[] {
  return [...new Set(products.map((p) => p.vibe))];
}
