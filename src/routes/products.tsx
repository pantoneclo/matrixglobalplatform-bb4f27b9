import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { categories, type CardSize } from "@/lib/categories";

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


const sizeClasses: Record<CardSize, string> = {
  // outer wrapper sizes — image + name plate stack inside
  lg: "w-[78vw] h-[74vh] md:w-[40vw] md:h-[78vh] md:self-center",
  md: "w-[68vw] h-[60vh] md:w-[26vw] md:h-[60vh] md:self-start md:mt-[4vh]",
  sm: "w-[58vw] h-[48vh] md:w-[20vw] md:h-[44vh] md:self-end md:mb-[6vh]",
  tall: "w-[68vw] h-[82vh] md:w-[26vw] md:h-[84vh] md:self-center",
  wide: "w-[84vw] h-[56vh] md:w-[44vw] md:h-[54vh] md:self-center",
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

        {/* Horizontal track — varied card sizes for editorial rhythm */}
        <motion.div
          style={{ x }}
          className="flex items-center gap-5 pl-[3vw] will-change-transform md:gap-8"
        >
          {categories.map((c) => (
            <article
              key={c.number}
              className={`group flex shrink-0 flex-col ${sizeClasses[c.size]}`}
            >
              {/* Image card — clean white background, no overlay */}
              <a
                href="#"
                className="relative block flex-1 overflow-hidden rounded-2xl bg-white"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.25em] text-brand backdrop-blur md:left-4 md:top-4">
                  {c.number}
                </span>
              </a>

              {/* Separate dark name plate */}
              <div className="mt-2 flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors group-hover:border-brand/60 md:mt-3 md:px-5 md:py-3.5">
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold tracking-tight text-foreground md:text-[15px]">
                    {c.name}
                  </h3>
                  <p className="mt-0.5 hidden truncate text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:block">
                    {c.tagline}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-brand" />
              </div>
            </article>
          ))}

          {/* End CTA card */}
          <article className="relative flex h-[72vh] w-[82vw] shrink-0 flex-col items-start justify-between overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-br from-surface to-background p-8 md:h-[70vh] md:w-[42vw] md:self-center md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              End of categories
            </p>
            <div>
              <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">
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

      </main>
      <Footer />
    </div>
  );
}
