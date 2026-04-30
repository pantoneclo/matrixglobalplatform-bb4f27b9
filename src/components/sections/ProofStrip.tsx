import { Banknote, Factory, Ship, ShieldCheck, Landmark, Layers, Wallet } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const proofs = [
  {
    icon: Factory,
    title: "Owned Manufacturing",
    desc: "5+ owned units across Bangladesh, China and Sri Lanka — not a sourcing agency.",
  },
  {
    icon: Layers,
    title: "Low MOQ Friendly",
    desc: "Start from 300–500 pcs/style on selected programs. Built for emerging brands and pilot collections — scale up only when ready.",
  },
  {
    icon: Banknote,
    title: "HSBC-Backed Trade Finance",
    desc: "Hong Kong parent with HSBC credit facility. Predictable LC terms across the group.",
  },
  {
    icon: Wallet,
    title: "Finance Flexibility",
    desc: "LC at sight, usance, TT and open-account terms available for qualified buyers — payment structures that match your cash cycle.",
  },
  {
    icon: Ship,
    title: "FOB or DDP Delivery",
    desc: "Door-to-door into EU, UK and USA via our Slovenia hub — you choose the incoterm.",
  },
  {
    icon: Landmark,
    title: "EU Direct Import Facility",
    desc: "Matrix Design d.o.o. (Slovenia) — EU entity with EORI, EU VAT and direct import clearance into the single market.",
  },
  {
    icon: ShieldCheck,
    title: "Audit-Ready Compliance",
    desc: "BSCI, OEKO-TEX, GOTS, GRS and Sedex audited across owned facilities.",
  },
];

export function ProofStrip() {
  return (
    <section className="relative border-y border-border bg-background py-12 md:py-16">
      <div className="container-x">
        <Reveal>
          <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-brand sm:text-xs sm:tracking-[0.3em]">
            Why Buyers Choose Matrix
          </p>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {proofs.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="group h-full rounded-xl border border-brand/30 bg-brand/5 p-5 backdrop-blur-sm transition-colors hover:border-brand/60 hover:bg-brand/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/15 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-sm font-semibold text-foreground">
                    {p.title}
                  </div>
                  <div className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {p.desc}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
