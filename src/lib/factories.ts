import factoryHeroBd from "@/assets/factory-hero-bd.jpg";
import factoryHeroLk from "@/assets/factory-hero-lk.jpg";

export type FactoryStat = {
  value: string;
  label: string;
};

export type FactoryCert = {
  name: string;
  abbr: string;
};

export type Factory = {
  slug: string;
  name: string;
  shortName: string;
  location: string;
  country: "Bangladesh" | "Sri Lanka";
  countryCode: "BD" | "LK";
  tagline: string;
  hero: string;
  established: string;
  stats: FactoryStat[];
  about: string[];
  productCategories: string[];
  certifications: FactoryCert[];
  contact: {
    headquarters: string;
    phone: string;
    email: string;
  };
};

const sharedContact = {
  phone: "+386 30 796 092",
  email: "shohel@matrixapparels.com",
};

const sharedCerts: FactoryCert[] = [
  { name: "Global Organic Textile Standard", abbr: "GOTS" },
  { name: "Organic 100 Content Standard", abbr: "OCS 100" },
  { name: "Organic Blended Content Standard", abbr: "OCS Blended" },
  { name: "Sedex Members Ethical Trade Audit", abbr: "SEDEX" },
  { name: "Bangladesh Knitwear Manufacturers & Exporters Association", abbr: "BKMEA" },
  { name: "Bangladesh Garment Manufacturers & Exporters Association", abbr: "BGMEA" },
  { name: "RMG Sustainability Council", abbr: "RSC" },
  { name: "amfori BSCI — Trade with Purpose", abbr: "amfori" },
  { name: "OEKO-TEX Standard 100", abbr: "OEKO-TEX" },
];

export const factories: Factory[] = [
  {
    slug: "ifs-texwear",
    name: "IFS Texwear Ltd.",
    shortName: "IFS Texwear",
    location: "Dhaka, Bangladesh",
    country: "Bangladesh",
    countryCode: "BD",
    tagline: "80 lines · 20 tons/day",
    hero: factoryHeroBd,
    established: "1999",
    stats: [
      { value: "5,400+", label: "Skilled Workers" },
      { value: "2.5M", label: "Pieces / Month" },
      { value: "45", label: "Production Lines" },
      { value: "320K", label: "Sq. Ft. Facility" },
    ],
    about: [
      "IFS TEXWEAR (PVT.) LTD. is a premier, 100% export-oriented composite knit garments manufacturer and exporter based in Bangladesh. Established in 1999, we have grown into a global industry leader, driven by a passion for quality, innovation, and ethical manufacturing.",
      "Our vision is to create the greatest knit clothing on the planet by consistently investing in quality and innovation. We are dedicated to providing unrivaled variety and superior products that stimulate and grow the global fashion market.",
      "Quality is the cornerstone of our operations. Our facility utilizes advanced machinery from Japan, Germany, and the U.S. to ensure precision in every stitch. We maintain the highest international standards, evidenced by our extensive certifications.",
    ],
    productCategories: [
      "Men's & Ladies Wear",
      "Active & Outerwear",
      "Innerwear & Sleepwear",
      "Infant & Kids",
    ],
    certifications: sharedCerts,
    contact: {
      headquarters: "631, Kutubpur, Fatullah, Narayanganj, Bangladesh.",
      ...sharedContact,
    },
  },
  {
    slug: "matrix-apparels",
    name: "Matrix Apparels Ltd",
    shortName: "Matrix Apparels",
    location: "Narayanganj, Bangladesh",
    country: "Bangladesh",
    countryCode: "BD",
    tagline: "Built from scratch",
    hero: factoryHeroBd,
    established: "2014",
    stats: [
      { value: "3,200+", label: "Skilled Workers" },
      { value: "1.6M", label: "Pieces / Month" },
      { value: "32", label: "Production Lines" },
      { value: "240K", label: "Sq. Ft. Facility" },
    ],
    about: [
      "Matrix Apparels Ltd. is the flagship of the Matrix group — a purpose-built, vertically integrated knit garments facility designed from the ground up for premium European and U.S. retail programs.",
      "Built from scratch on a green-field site, the factory pairs advanced Japanese sewing technology with German cutting and finishing equipment to deliver consistent quality at scale across heavyweight cotton, French terry and printed jersey programs.",
      "Every line is supported by an in-house quality lab, AQL inspection floor and a dedicated compliance team — ensuring full traceability from yarn to dispatch.",
    ],
    productCategories: [
      "Heavyweight Cotton",
      "French Terry & Fleece",
      "Printed Jersey",
      "Loungewear & Sleepwear",
    ],
    certifications: sharedCerts,
    contact: {
      headquarters: "Plot 14, BSCIC Industrial Area, Narayanganj, Bangladesh.",
      ...sharedContact,
    },
  },
  {
    slug: "mb-knit-fashion",
    name: "MB Knit Fashion",
    shortName: "MB Knit Fashion",
    location: "Gazipur, Bangladesh",
    country: "Bangladesh",
    countryCode: "BD",
    tagline: "Est. 1992 · LPP A-Rated",
    hero: factoryHeroBd,
    established: "1992",
    stats: [
      { value: "4,100+", label: "Skilled Workers" },
      { value: "2.0M", label: "Pieces / Month" },
      { value: "38", label: "Production Lines" },
      { value: "280K", label: "Sq. Ft. Facility" },
    ],
    about: [
      "Established in 1992, MB Knit Fashion is one of the longest-running knitwear manufacturers in the Matrix group — an LPP A-Rated facility trusted by major European retailers for over three decades.",
      "The factory specialises in fully-fashioned and cut-and-sew knit programs, with deep capability in fine-gauge jersey, interlock and rib constructions for premium basics and fashion-forward seasonal lines.",
      "Long-standing partnerships with European brands have shaped a culture of consistency, on-time delivery and ethical manufacturing that is independently audited every year.",
    ],
    productCategories: [
      "Fine-gauge Jersey",
      "Interlock & Rib",
      "Cut & Sew Knits",
      "Premium Basics",
    ],
    certifications: sharedCerts,
    contact: {
      headquarters: "Konabari, Gazipur, Dhaka Division, Bangladesh.",
      ...sharedContact,
    },
  },
  {
    slug: "westknit",
    name: "Westknit",
    shortName: "Westknit",
    location: "Dhaka, Bangladesh",
    country: "Bangladesh",
    countryCode: "BD",
    tagline: "Knit specialist",
    hero: factoryHeroBd,
    established: "2008",
    stats: [
      { value: "2,800+", label: "Skilled Workers" },
      { value: "1.4M", label: "Pieces / Month" },
      { value: "28", label: "Production Lines" },
      { value: "210K", label: "Sq. Ft. Facility" },
    ],
    about: [
      "Westknit is the Matrix group's true-knitwear specialist — focused exclusively on whole-garment, fully-fashioned and yarn-dyed jacquard programs for premium retail.",
      "The facility runs Shima Seiki and Stoll flat-knitting machines alongside circular knitting capacity, supporting fine merino, cotton-cashmere and sustainable wool blends from concept to bulk.",
      "An on-site yarn store, in-house design studio and rapid sampling team allow buyers to develop a full seasonal range in weeks rather than months.",
    ],
    productCategories: [
      "Whole-garment Knit",
      "Fully-fashioned",
      "Jacquards & Intarsia",
      "Sustainable Wool Blends",
    ],
    certifications: sharedCerts,
    contact: {
      headquarters: "Tejgaon I/A, Dhaka 1208, Bangladesh.",
      ...sharedContact,
    },
  },
  {
    slug: "lithe-group",
    name: "Lithe Group",
    shortName: "Lithe Group",
    location: "Chattogram, Bangladesh",
    country: "Bangladesh",
    countryCode: "BD",
    tagline: "Partner factory",
    hero: factoryHeroBd,
    established: "2005",
    stats: [
      { value: "3,600+", label: "Skilled Workers" },
      { value: "1.8M", label: "Pieces / Month" },
      { value: "36", label: "Production Lines" },
      { value: "260K", label: "Sq. Ft. Facility" },
    ],
    about: [
      "Lithe Group is a long-standing Matrix partner factory based in Chattogram, providing additional capacity for woven and knit programs across the group's largest retail accounts.",
      "The facility brings strong woven bottoms, shirting and outerwear capability — complementing Matrix's owned knit-led units and enabling true full-package programs across mixed product categories.",
      "All Lithe lines operate under the same compliance, quality and delivery standards as Matrix-owned units, audited annually by independent third parties.",
    ],
    productCategories: [
      "Woven Bottoms",
      "Shirting",
      "Outerwear",
      "Mixed Programs",
    ],
    certifications: sharedCerts,
    contact: {
      headquarters: "CEPZ, Chattogram, Bangladesh.",
      ...sharedContact,
    },
  },
  {
    slug: "amante",
    name: "Amanté",
    shortName: "Amanté",
    location: "Colombo, Sri Lanka",
    country: "Sri Lanka",
    countryCode: "LK",
    tagline: "Lingerie · Intimates",
    hero: factoryHeroLk,
    established: "2007",
    stats: [
      { value: "1,900+", label: "Skilled Workers" },
      { value: "850K", label: "Pieces / Month" },
      { value: "22", label: "Production Lines" },
      { value: "180K", label: "Sq. Ft. Facility" },
    ],
    about: [
      "Amanté is the Matrix group's BOI-approved technical lingerie and intimates facility in Sri Lanka — purpose-built for polyamide, elastane and bonded constructions at premium retail quality.",
      "The facility specialises in molded cups, bonded edges and refined micro-print programs, supported by an in-house pattern engineering team that develops fit blocks for international brand specifications.",
      "A dedicated bonding and ultrasonic welding floor enables seamless innerwear at scale, while the on-site lab handles all dye-house compliance and chemical testing in line with EU and U.S. regulations.",
    ],
    productCategories: [
      "Molded Bras",
      "Seamless Innerwear",
      "Bonded & Welded Intimates",
      "Sleepwear & Lounge Sets",
    ],
    certifications: sharedCerts,
    contact: {
      headquarters: "Biyagama Export Processing Zone, Colombo, Sri Lanka.",
      ...sharedContact,
    },
  },
];

export const getFactoryBySlug = (slug: string) =>
  factories.find((f) => f.slug === slug);
