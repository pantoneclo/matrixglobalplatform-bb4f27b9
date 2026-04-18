import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { MapPin, ArrowUpRight, ArrowRight } from "lucide-react";
import bangladeshImg from "@/assets/bangladesh.jpg";
import srilankaImg from "@/assets/srilanka.jpg";

type FactoryUnit = { name: string; slug: string; tag?: string };

type Unit = {
  id: string;
  country: string;
  flag: string;
  description: string;
  image: string;
  units: FactoryUnit[];
};

const data: Unit[] = [
  {
    id: "bd",
    country: "Bangladesh",
    flag: "🇧🇩",
    description:
      "High-volume manufacturing across knit and woven programs with vertically integrated capability.",
    image: bangladeshImg,
    units: [
      { name: "Matrix Apparels Ltd", slug: "matrix-apparels", tag: "Built from scratch" },
      { name: "MB Knit Fashion", slug: "mb-knit-fashion", tag: "Est. 1992 · LPP A-Rated" },
      { name: "Westknit", slug: "westknit", tag: "Knit specialist" },
      { name: "IFS Texwear Ltd", slug: "ifs-texwear", tag: "80 lines · 20 tons/day" },
      { name: "Lithe Group", slug: "lithe-group", tag: "Partner factory" },
    ],
  },
  {
    id: "lk",
    country: "Sri Lanka",
    flag: "🇱🇰",
    description:
      "Technical lingerie and polyamide product capability with BOI-approved manufacturing strength.",
    image: srilankaImg,
    units: [{ name: "Amanté Brand", slug: "amante", tag: "Lingerie · Intimates" }],
  },
];

export function Manufacturing() {
  const [active, setActive] = useState<Unit>(data[0]);

  return (
    <section className="relative bg-surface py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Own Manufacturing Units
              </p>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Backed by <span className="text-gradient-brand">Real Strength.</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Strategically located manufacturing units across South Asia, built to
              deliver consistent quality, scalable capacity, and reliable
              performance.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          {/* Selector */}
          <div className="space-y-3">
            {data.map((u) => {
              const isActive = active.id === u.id;
              return (
                <button
                  key={u.id}
                  onClick={() => setActive(u)}
                  className={`group flex w-full items-center justify-between rounded-2xl border p-6 text-left transition-all duration-500 ${
                    isActive
                      ? "border-brand/50 bg-card shadow-card"
                      : "border-border bg-card/40 hover:border-border hover:bg-card"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{u.flag}</span>
                      <h3 className="text-xl font-semibold">{u.country}</h3>
                    </div>
                    <p className="mt-2 max-w-md text-sm text-muted-foreground">
                      {u.description}
                    </p>
                    <div className="mt-3 text-xs text-brand">
                      {u.units.length} {u.units.length === 1 ? "unit" : "units"}
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`h-5 w-5 transition-all ${
                      isActive ? "text-brand" : "text-muted-foreground"
                    } group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={active.image}
                  alt={`${active.country} manufacturing facility`}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs backdrop-blur">
                  <MapPin className="h-3 w-3 text-brand" /> {active.country}
                </div>
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Our Units
                </h4>
                <ul className="space-y-3">
                  {active.units.map((u) => (
                    <li
                      key={u.name}
                      className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                    >
                      <span className="font-medium">{u.name}</span>
                      {u.tag && (
                        <span className="text-xs text-muted-foreground">
                          {u.tag}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
