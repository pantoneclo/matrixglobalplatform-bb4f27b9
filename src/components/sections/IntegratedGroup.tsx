import { Reveal } from "@/components/Reveal";
import worldMap from "@/assets/world-map-dark.jpg";

type Entity = {
  name: string;
  loc: string;
  desc: string;
  /** position of the map pin (% of map area) */
  pin: { x: number; y: number };
  /** color of pin + connector */
  color: string;
  /** which side the card sits on for desktop layout */
  side: "left" | "right";
};

const entities: Entity[] = [
  {
    name: "Matrix Design d.o.o.",
    loc: "Slovenia",
    desc: "EU legal entity. EORI registration, EU VAT, logistics coordination, sample handling.",
    pin: { x: 50, y: 30 },
    color: "#A8A29E",
    side: "left",
  },
  {
    name: "Matrix Apparels Ltd",
    loc: "Dhaka, Bangladesh",
    desc: "Built from scratch. Design centre, product development, multi-product flexibility.",
    pin: { x: 68, y: 42 },
    color: "#22C55E",
    side: "right",
  },
  {
    name: "Matrix Platform Limited",
    loc: "Hong Kong",
    desc: "Trade finance, HSBC credit facility, LC operations, parent entity for all factory relationships.",
    pin: { x: 75, y: 40 },
    color: "#29B6E8",
    side: "left",
  },
  {
    name: "IFS Texwear Ltd",
    loc: "Dhaka, Bangladesh",
    desc: "80 sewing lines, 20 tons/day output. The volume engine.",
    pin: { x: 69, y: 44 },
    color: "#29B6E8",
    side: "right",
  },
  {
    name: "Zhejiang Monalisa Textile",
    loc: "Shaoxing, China",
    desc: "30% owned. 3 million metres/month fabric capacity. Polyester, viscose, blended, knit fabrics.",
    pin: { x: 73, y: 38 },
    color: "#A855F7",
    side: "left",
  },
  {
    name: "MB Knit Fashion Ltd",
    loc: "Dhaka, Bangladesh",
    desc: "Est. 1992, 1.4 million pcs/month (peak 2.1M). LPP Rated A.",
    pin: { x: 70, y: 45 },
    color: "#22C55E",
    side: "right",
  },
  {
    name: "Sri Lanka Operations",
    loc: "Colombo",
    desc: "Technical lingerie and polyamide products. BOI approved, amanté brand.",
    pin: { x: 67, y: 56 },
    color: "#F59E0B",
    side: "left",
  },
  {
    name: "Westknit",
    loc: "Bangladesh",
    desc: "Knit specialist. Partner factory, same family ownership as Lithe and IFS.",
    pin: { x: 69, y: 46 },
    color: "#22C55E",
    side: "right",
  },
];

function EntityCard({ e }: { e: Entity }) {
  return (
    <div
      className="group relative rounded-xl border bg-card/70 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-card md:p-6"
      style={{ borderColor: `${e.color}55` }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${e.color}, transparent)` }}
      />
      <h3 className="text-base font-semibold md:text-lg" style={{ color: e.color }}>
        {e.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-foreground">{e.loc}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
    </div>
  );
}

export function IntegratedGroup() {
  const left = entities.filter((e) => e.side === "left");
  const right = entities.filter((e) => e.side === "right");

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Map background */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={worldMap}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={1024}
          className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Global Footprint
            </p>
            <h2 className="text-4xl font-bold uppercase tracking-tight text-brand md:text-6xl">
              One Integrated Group
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Our infrastructure was built to solve the complexity of modern apparel sourcing.
            </p>
          </div>
        </Reveal>

        {/* Desktop: 3-column layout with map in centre */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          <div className="space-y-6">
            {left.map((e, i) => (
              <Reveal key={e.name} delay={i * 0.06}>
                <div className="relative">
                  <EntityCard e={e} />
                  {/* connector line out of card */}
                  <span
                    className="absolute right-0 top-1/2 h-px w-8 -translate-y-1/2 translate-x-full"
                    style={{ background: `linear-gradient(90deg, ${e.color}, transparent)` }}
                  />
                  <span
                    className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-[calc(100%+1.75rem)] rounded-full ring-2 ring-background"
                    style={{ background: e.color, boxShadow: `0 0 12px ${e.color}` }}
                  />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Map column spacer */}
          <div className="relative w-[180px]">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />
          </div>

          <div className="space-y-6">
            {right.map((e, i) => (
              <Reveal key={e.name} delay={i * 0.06}>
                <div className="relative">
                  <EntityCard e={e} />
                  <span
                    className="absolute left-0 top-1/2 h-px w-8 -translate-y-1/2 -translate-x-full"
                    style={{ background: `linear-gradient(90deg, transparent, ${e.color})` }}
                  />
                  <span
                    className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 -translate-x-[calc(100%+1.75rem)] rounded-full ring-2 ring-background"
                    style={{ background: e.color, boxShadow: `0 0 12px ${e.color}` }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: stacked grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
          {entities.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.04}>
              <EntityCard e={e} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
