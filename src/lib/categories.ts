import lounge from "@/assets/cat-lounge.jpg";
import innerwear from "@/assets/cat-innerwear.jpg";
import lingerie from "@/assets/cat-lingerie.jpg";
import activewear from "@/assets/cat-activewear.jpg";
import casual from "@/assets/cat-casual.jpg";
import denim from "@/assets/cat-denim.jpg";
import swimwear from "@/assets/cat-swimwear.jpg";
import knitwear from "@/assets/cat-knitwear.jpg";
import kids from "@/assets/cat-kids.jpg";

import lounge1 from "@/assets/lounge-detail-1.jpg";
import lounge2 from "@/assets/lounge-detail-2.jpg";
import lounge3 from "@/assets/lounge-detail-3.jpg";
import lounge4 from "@/assets/lounge-detail-4.jpg";
import lounge5 from "@/assets/lounge-detail-5.jpg";
import lounge6 from "@/assets/lounge-detail-6.jpg";

import categoryHero from "@/assets/category-hero.jpg";

export type CardSize = "lg" | "md" | "sm" | "tall" | "wide";

export type Feature = {
  title: string;
  highlight: string;
  body: string;
};

export type Category = {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  size: CardSize;
  // Detail page
  heroImage: string;
  heroIntro: string;
  sectionTitle: string;
  sectionLead: string;
  features: Feature[];
  gallery: string[];
};

const defaultFeatures: Feature[] = [
  {
    title: "Sustainable",
    highlight: "Fabrics",
    body: "We source eco-friendly bamboo, modal, organic cotton, and recycled polyesters to ensure incredibly soft and breathable comfort, naturally protecting the planet.",
  },
  {
    title: "Precision",
    highlight: "Craftsmanship",
    body: "Every seam, stitch and cut is engineered across our owned facilities in South Asia, with flatlock and ultrasonic welding capability for technical garment programs.",
  },
  {
    title: "Unmatched",
    highlight: "Scale & Speed",
    body: "From initial sample concept to mass production, our integrated supply chain delivers bulk wholesale orders rapidly without compromising on quality.",
  },
  {
    title: "Certified",
    highlight: "Compliance",
    body: "OEKO-TEX, GOTS and BSCI audited facilities ensure every garment meets the highest global retail compliance and chemical-safety standards.",
  },
];

const loungeGallery = [lounge1, lounge2, lounge3, lounge4, lounge5, lounge6];

export const categories: Category[] = [
  {
    slug: "lounge-nightwear",
    number: "01",
    name: "Lounge & Nightwear",
    tagline: "Comfort engineered for everyday rituals",
    description:
      "Soft jersey, modal and brushed cotton constructions developed for premium retail loungewear and sleep programs.",
    image: lounge,
    size: "lg",
    heroImage: categoryHero,
    heroIntro: "Request for a Lounge & Nightwear latest presentation",
    sectionTitle: "Elevate Your Offerings",
    sectionLead:
      "Explore our premium range of lounge and nightwear designed to meet the demands of wholesale buyers with top-notch comfort, style and quality.",
    features: defaultFeatures,
    gallery: loungeGallery,
  },
  {
    slug: "innerwear",
    number: "02",
    name: "Innerwear & Essentials",
    tagline: "The foundation of modern wardrobes",
    description:
      "Seamless, cut-and-sew and stretch innerwear produced at scale with full vertical control over fabric and finish.",
    image: innerwear,
    size: "sm",
    heroImage: categoryHero,
    heroIntro: "Request for an Innerwear & Essentials latest presentation",
    sectionTitle: "Built on Comfort",
    sectionLead:
      "A complete innerwear program from seamless basics to stretch essentials — produced with full vertical control over yarn, fabric and finish.",
    features: defaultFeatures,
    gallery: loungeGallery,
  },
  {
    slug: "lingerie",
    number: "03",
    name: "Lingerie & Intimates",
    tagline: "Technical lingerie, BOI-approved facility",
    description:
      "Polyamide and elastane intimates developed in Sri Lanka under our amanté operation — molded cups, bonded edges, micro-prints.",
    image: lingerie,
    size: "tall",
    heroImage: categoryHero,
    heroIntro: "Request for a Lingerie & Intimates latest presentation",
    sectionTitle: "Engineered Intimates",
    sectionLead:
      "Technical lingerie developed at our BOI-approved Sri Lanka facility — molded cups, bonded edges and refined micro-print programs.",
    features: defaultFeatures,
    gallery: loungeGallery,
  },
  {
    slug: "activewear",
    number: "04",
    name: "Activewear & Sportswear",
    tagline: "Performance fabrics, retail-ready finish",
    description:
      "Moisture management, four-way stretch and recycled polyester programs developed for global activewear brands.",
    image: activewear,
    size: "wide",
    heroImage: categoryHero,
    heroIntro: "Request for an Activewear latest presentation",
    sectionTitle: "Performance, Refined",
    sectionLead:
      "Moisture management, four-way stretch and recycled polyester programs developed for global activewear and athleisure brands.",
    features: defaultFeatures,
    gallery: loungeGallery,
  },
  {
    slug: "casualwear",
    number: "05",
    name: "Casualwear",
    tagline: "Jersey, fleece and street-led basics",
    description:
      "Heavyweight cotton, French terry and printed jersey programs — the volume engine of our Bangladesh operations.",
    image: casual,
    size: "md",
    heroImage: categoryHero,
    heroIntro: "Request for a Casualwear latest presentation",
    sectionTitle: "Volume Without Compromise",
    sectionLead:
      "Heavyweight cotton, French terry and printed jersey programs — the volume engine of our Bangladesh operations.",
    features: defaultFeatures,
    gallery: loungeGallery,
  },
  {
    slug: "denim",
    number: "06",
    name: "Denim",
    tagline: "Indigo, washes and rigid constructions",
    description:
      "Full-package denim with in-house wash development, laser finishing and sustainable indigo dyeing.",
    image: denim,
    size: "lg",
    heroImage: categoryHero,
    heroIntro: "Request for a Denim latest presentation",
    sectionTitle: "Indigo, Refined",
    sectionLead:
      "Full-package denim with in-house wash development, laser finishing and sustainable indigo dyeing programs.",
    features: defaultFeatures,
    gallery: loungeGallery,
  },
  {
    slug: "swimwear",
    number: "07",
    name: "Swimwear",
    tagline: "Chlorine-resistant, shape-retentive fabrics",
    description:
      "Bonded and sewn swimwear developed with our Chinese fabric mill — recycled nylon and polyester programs.",
    image: swimwear,
    size: "sm",
    heroImage: categoryHero,
    heroIntro: "Request for a Swimwear latest presentation",
    sectionTitle: "Built for the Water",
    sectionLead:
      "Bonded and sewn swimwear developed with our Chinese fabric mill — recycled nylon and polyester programs at scale.",
    features: defaultFeatures,
    gallery: loungeGallery,
  },
  {
    slug: "knitwear",
    number: "08",
    name: "True Knitwear",
    tagline: "Whole-garment and fully-fashioned knit",
    description:
      "Fine-gauge and chunky knit programs from Westknit — yarn-dyed jacquards, intarsia, and sustainable wool blends.",
    image: knitwear,
    size: "tall",
    heroImage: categoryHero,
    heroIntro: "Request for a True Knitwear latest presentation",
    sectionTitle: "Knit With Intent",
    sectionLead:
      "Fine-gauge and chunky knit programs from Westknit — yarn-dyed jacquards, intarsia and sustainable wool blends.",
    features: defaultFeatures,
    gallery: loungeGallery,
  },
  {
    slug: "kids",
    number: "09",
    name: "Kids",
    tagline: "OEKO-TEX certified, family-safe",
    description:
      "Kidswear from newborn to 14 years — printed jersey, knit sets and outerwear programs with full compliance audit.",
    image: kids,
    size: "wide",
    heroImage: categoryHero,
    heroIntro: "Request for a Kidswear latest presentation",
    sectionTitle: "Safe, Soft, Certified",
    sectionLead:
      "Kidswear from newborn to 14 years — printed jersey, knit sets and outerwear programs with full compliance audit.",
    features: defaultFeatures,
    gallery: loungeGallery,
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
