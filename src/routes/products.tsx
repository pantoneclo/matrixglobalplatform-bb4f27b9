import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import lounge from "@/assets/cat-lounge.jpg";
import innerwear from "@/assets/cat-innerwear.jpg";
import lingerie from "@/assets/cat-lingerie.jpg";
import activewear from "@/assets/cat-activewear.jpg";
import casual from "@/assets/cat-casual.jpg";
import denim from "@/assets/cat-denim.jpg";
import swimwear from "@/assets/cat-swimwear.jpg";
import knitwear from "@/assets/cat-knitwear.jpg";
import kids from "@/assets/cat-kids.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "All Product Categories — Matrix Platform" },
      {
        name: "description",
        content:
          "Lounge & nightwear, innerwear, lingerie, activewear, casualwear, denim, swimwear, knitwear and kids — fashion-led product categories engineered at scale.",
      },
      { property: "og:title", content: "Fashion-led Product Categories — Matrix Platform" },
      {
        property: "og:description",
        content:
          "Explore our nine fashion-led product categories developed across an integrated supply chain spanning China, Bangladesh and Sri Lanka.",
      },
    ],
  }),
  component: ProductsPage,
});

type CardSize = "lg" | "md" | "sm" | "tall" | "wide";

type Category = {
  number: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  size: CardSize;
};

const categories: Category[] = [
  {
    number: "01",
    name: "Lounge & Nightwear",
    tagline: "Comfort engineered for everyday rituals",
    description:
      "Soft jersey, modal and brushed cotton constructions developed for premium retail loungewear and sleep programs.",
    image: lounge,
    size: "lg",
  },
  {
    number: "02",
    name: "Innerwear & Essentials",
    tagline: "The foundation of modern wardrobes",
    description:
      "Seamless, cut-and-sew and stretch innerwear produced at scale with full vertical control over fabric and finish.",
    image: innerwear,
    size: "sm",
  },
  {
    number: "03",
    name: "Lingerie & Intimates",
    tagline: "Technical lingerie, BOI-approved facility",
    description:
      "Polyamide and elastane intimates developed in Sri Lanka under our amanté operation — molded cups, bonded edges, micro-prints.",
    image: lingerie,
    size: "tall",
  },
  {
    number: "04",
    name: "Activewear & Sportswear",
    tagline: "Performance fabrics, retail-ready finish",
    description:
      "Moisture management, four-way stretch and recycled polyester programs developed for global activewear brands.",
    image: activewear,
    size: "wide",
  },
  {
    number: "05",
    name: "Casualwear",
    tagline: "Jersey, fleece and street-led basics",
    description:
      "Heavyweight cotton, French terry and printed jersey programs — the volume engine of our Bangladesh operations.",
    image: casual,
    size: "md",
  },
  {
    number: "06",
    name: "Denim",
    tagline: "Indigo, washes and rigid constructions",
    description:
      "Full-package denim with in-house wash development, laser finishing and sustainable indigo dyeing.",
    image: denim,
    size: "lg",
  },
  {
    number: "07",
    name: "Swimwear",
    tagline: "Chlorine-resistant, shape-retentive fabrics",
    description:
      "Bonded and sewn swimwear developed with our Chinese fabric mill — recycled nylon and polyester programs.",
    image: swimwear,
    size: "sm",
  },
  {
    number: "08",
    name: "True Knitwear",
    tagline: "Whole-garment and fully-fashioned knit",
    description:
      "Fine-gauge and chunky knit programs from Westknit — yarn-dyed jacquards, intarsia, and sustainable wool blends.",
    image: knitwear,
    size: "tall",
  },
  {
    number: "09",
    name: "Kids",
    tagline: "OEKO-TEX certified, family-safe",
    description:
      "Kidswear from newborn to 14 years — printed jersey, knit sets and outerwear programs with full compliance audit.",
    image: kids,
    size: "wide",
  },
];

const sizeClasses: Record<CardSize, string> = {
  lg: "w-[82vw] h-[78vh] md:w-[50vw] md:h-[78vh] md:self-center",
  md: "w-[72vw] h-[60vh] md:w-[34vw] md:h-[58vh] md:self-start md:mt-[6vh]",
  sm: "w-[62vw] h-[48vh] md:w-[24vw] md:h-[44vh] md:self-end md:mb-[6vh]",
  tall: "w-[72vw] h-[82vh] md:w-[32vw] md:h-[82vh] md:self-center",
  wide: "w-[88vw] h-[56vh] md:w-[58vw] md:h-[54vh] md:self-center",
};

const titleClasses: Record<CardSize, string> = {
  lg: "text-3xl md:text-5xl",
  md: "text-2xl md:text-4xl",
  sm: "text-xl md:text-2xl",
  tall: "text-3xl md:text-5xl",
  wide: "text-3xl md:text-5xl",
};

function HorizontalCategories() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Total horizontal travel: cards width minus one viewport
  // 9 cards * ~80vw + gaps ≈ scroll distance
  const x = useTransform(scrollYProgress, [0, 1], ["2vw", "-83%"]);

  return (
    <section
      ref={targetRef}
      className="relative bg-background"
      style={{ height: `${categories.length * 70}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Header overlay */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 pt-28 md:pt-32">
          <div className="container-x flex items-end justify-between gap-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                All Categories
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                Scroll to explore.
              </h2>
            </div>
            <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
              Nine fashion-led product categories, each developed across our integrated
              manufacturing footprint.
            </p>
          </div>
        </div>

        {/* Horizontal track */}
        <motion.div style={{ x }} className="flex gap-6 pl-[2vw] will-change-transform">
          {categories.map((c) => (
            <article
              key={c.number}
              className="group relative h-[78vh] w-[80vw] shrink-0 overflow-hidden rounded-3xl border border-border bg-card md:w-[58vw] lg:w-[44vw]"
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 top-0 flex items-start justify-between p-7 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                  {c.number} / 09
                </span>
                <span className="rounded-full border border-border/60 bg-background/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-foreground/80 backdrop-blur">
                  Category
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-brand">
                  {c.tagline}
                </p>
                <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">
                  {c.name}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                  {c.description}
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand"
                >
                  Explore category <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}

          {/* End card */}
          <article className="relative flex h-[78vh] w-[80vw] shrink-0 flex-col items-start justify-between overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-br from-surface to-background p-10 md:w-[44vw] md:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              End of categories
            </p>
            <div>
              <h3 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Ready to develop your{" "}
                <span className="text-gradient-brand">next program?</span>
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Our design and merchandising teams turn concepts into shippable styles
                across all nine categories.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90"
              >
                Start a conversation <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        </motion.div>

        {/* Progress bar */}
        <div className="absolute inset-x-0 bottom-8 z-20">
          <div className="container-x">
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Scroll
              </span>
              <div className="h-px flex-1 bg-border">
                <motion.div
                  className="h-full bg-brand"
                  style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {categories.length} Categories
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-20 md:pt-48 md:pb-28">
          <div className="container-x">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Our Products
              </p>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                Fashion-led product{" "}
                <span className="text-gradient-brand">categories.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Explore our core product direction across fashion wear, outerwear,
                bottomwear and category-driven apparel development. Scroll down to
                browse all nine categories.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Horizontal scroll-driven slider */}
        <HorizontalCategories />

        {/* Grid fallback / overview */}
        <section className="bg-surface py-24 md:py-32">
          <div className="container-x">
            <Reveal>
              <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                  At a glance
                </h2>
                <p className="max-w-md text-sm text-muted-foreground">
                  All nine product categories developed under one integrated
                  manufacturing group.
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
              {categories.map((c, i) => (
                <Reveal key={c.name} delay={i * 0.04}>
                  <a
                    href="#"
                    className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-border"
                  >
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute inset-x-0 top-0 p-5">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand">
                        {c.number}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-2xl">
                        {c.name}
                      </h3>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
