import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { ChevronDown } from "lucide-react";

const milestones = [
  {
    year: "2018",
    title: "Establishment",
    short: "Matrix Apparels Ltd established in Dhaka.",
    long: "First factory, first export orders. Built from scratch as an integrated design and product development centre with multi-product flexibility.",
  },
  {
    year: "2019—20",
    title: "International Certification",
    short: "First international certifications obtained.",
    long: "Began supplying European value retailers through agents. Foundations laid for direct retailer relationships and full compliance frameworks.",
  },
  {
    year: "2021",
    title: "Hong Kong Trade Finance",
    short: "Matrix Platform Limited established in Hong Kong.",
    long: "HSBC credit facility, LC operations, and parent entity for all factory relationships across the group.",
  },
  {
    year: "2022",
    title: "Fabric Mill Acquisition",
    short: "30% stake in Zhejiang Monalisa Textile.",
    long: "3 million metres / month fabric capacity in polyester, viscose, blended and knit fabrics — securing fabric supply at the source.",
  },
  {
    year: "2023",
    title: "EU Legal Entity",
    short: "Matrix Design d.o.o. opens in Slovenia.",
    long: "EORI registration, EU VAT, logistics coordination and sample handling — enabling full DDP delivery across the EU.",
  },
  {
    year: "2024—25",
    title: "Group Expansion",
    short: "5+ owned units, 3M+ garments / month.",
    long: "Sri Lanka operations, MB Knit Fashion, IFS Texwear, Westknit and Lithe Group bring 3M+ garments per month under one owned, integrated platform — extended by a vetted partner network for capacity flex.",
  },
];

export function Timeline() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Our Legacy
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Explore our <span className="text-gradient-brand">Journey.</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-[7px] top-0 h-full w-px bg-border md:left-1/2" />
          <div className="space-y-4">
            {milestones.map((m, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={m.year} delay={i * 0.05}>
                  <div className="relative pl-8 md:pl-0">
                    <div className="absolute left-0 top-6 h-3.5 w-3.5 rounded-full border-2 border-brand bg-background md:left-1/2 md:-translate-x-1/2" />
                    <div
                      className={`md:grid md:grid-cols-2 md:gap-12 ${
                        i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      <div className={i % 2 === 1 ? "md:text-left" : "md:text-right"}>
                        <button
                          onClick={() => setOpen(isOpen ? null : i)}
                          className="group inline-flex items-center gap-3 text-left"
                        >
                          <span className="text-3xl font-semibold tracking-tight text-gradient-brand md:text-4xl">
                            {m.year}
                          </span>
                          <ChevronDown
                            className={`h-5 w-5 text-muted-foreground transition-transform ${
                              isOpen ? "rotate-180 text-brand" : ""
                            }`}
                          />
                        </button>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{m.title}</h3>
                        <p className="mt-2 text-muted-foreground">{m.short}</p>
                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
                            {m.long}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
