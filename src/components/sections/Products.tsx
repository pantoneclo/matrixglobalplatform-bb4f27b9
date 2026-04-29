import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import fashionImg from "@/assets/cat-fashionwear.jpg";
import outerImg from "@/assets/cat-outerwear.jpg";
import bottomImg from "@/assets/cat-bottomwear.jpg";
import casualImg from "@/assets/cat-casualwear.jpg";

const products = [
  { id: "fw", title: "Fashionwear", subtitle: "Editorial · Womenswear", image: fashionImg },
  { id: "ow", title: "Outerwear", subtitle: "Jackets · Coats", image: outerImg },
  { id: "bw", title: "Bottomwear", subtitle: "Denim · Trousers", image: bottomImg },
  { id: "cw", title: "Sweatshirts & Fleece", subtitle: "Jersey · Streetwear", image: casualImg },
  { id: "lw", title: "Lounge & Nightwear", subtitle: "Comfort essentials", image: fashionImg },
  { id: "ac", title: "Activewear", subtitle: "Performance fabrics", image: outerImg },
];

export function Products() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const max = products.length - visible;

  const next = () => setIndex((i) => Math.min(i + 1, max));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section className="relative bg-surface py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Our Products
              </p>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Fashion-led product{" "}
                <span className="text-gradient-brand">categories.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Explore our core product direction across fashion wear, outerwear,
                bottomwear and category-driven apparel development.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                disabled={index === 0}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-brand hover:text-brand disabled:opacity-40"
                aria-label="Previous"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                disabled={index === max}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-brand hover:text-brand disabled:opacity-40"
                aria-label="Next"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `calc(-${index} * (100% / 3) - ${index * 1.5}rem)` }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence>
              {products.map((p) => (
                <motion.article
                  key={p.id}
                  className="group relative h-[520px] w-full shrink-0 overflow-hidden rounded-2xl border border-border md:w-[calc((100%-3rem)/3)]"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <div className="text-xs uppercase tracking-[0.25em] text-brand">
                      {p.subtitle}
                    </div>
                    <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <a
                      href="/products"
                      className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/80 opacity-0 transition-all duration-500 group-hover:opacity-100"
                    >
                      Explore <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-8 flex items-center gap-2">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all ${
                i === index ? "w-10 bg-brand" : "w-4 bg-border"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
