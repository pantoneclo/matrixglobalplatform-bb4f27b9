import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, MapPin } from "lucide-react";
import pImg from "@/assets/brand-pantoneclo.jpg";
import lImg from "@/assets/brand-leafletic.jpg";
import aImg from "@/assets/brand-amante.jpg";

const brands = [
  {
    name: "PANTONECLO",
    cat: "Men's Fashion",
    region: "16 EU Countries",
    desc: "A European menswear brand registered and distributed across 16 EU countries. Casual knitwear, outerwear, and accessories at accessible price points.",
    image: pImg,
  },
  {
    name: "leafletic",
    cat: "Ladies' Activewear",
    region: "EU Market",
    desc: "Ladies activewear and athleisure brand targeting the EU market with performance-driven designs at competitive price points.",
    image: lImg,
  },
  {
    name: "amanté",
    cat: "Lingerie",
    region: "Asia · Middle East",
    desc: "Established lingerie brand with technical bra construction. High size inclusivity and mid-market positioning.",
    image: aImg,
  },
];

export function Brands() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Our Own Brands
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Proof that we don&apos;t just make garments —
              <br />
              <span className="text-gradient-brand">we understand what sells.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Concept and design through production to retail distribution.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {brands.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.1}>
              <article className="group relative h-[520px] overflow-hidden rounded-2xl border border-border">
                <img
                  src={b.image}
                  alt={`${b.name} ${b.cat}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-1 text-xs backdrop-blur">
                    <MapPin className="h-3 w-3 text-brand" /> {b.region}
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="text-xs uppercase tracking-[0.25em] text-brand">
                    {b.cat}
                  </div>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                    {b.name}
                  </h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all duration-500 group-hover:max-h-32">
                    {b.desc}
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    Explore Brand{" "}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
