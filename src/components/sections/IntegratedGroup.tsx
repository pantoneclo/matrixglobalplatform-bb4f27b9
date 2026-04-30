import { Reveal } from "@/components/Reveal";
import worldMap from "@/assets/world-map-dark.jpg";
import { ArrowRight, Banknote, Factory, Globe2, Landmark, Layers, Ship, Wallet } from "lucide-react";

type Hub = {
  code: string;
  city: string;
  country: string;
  role: string;
  detail: string;
  /** % position on the map (relative to image) */
  pin: { x: number; y: number };
  color: string;
};

const hubs: Hub[] = [
  {
    code: "CN",
    city: "Shaoxing",
    country: "China",
    role: "Fabric Mill",
    detail: "Zhejiang Monalisa Textile — 3M metres / month, polyester · viscose · blended · knit.",
    pin: { x: 76, y: 40 },
    color: "#A855F7",
  },
  {
    code: "BD",
    city: "Dhaka",
    country: "Bangladesh",
    role: "Manufacturing Engine",
    detail: "Matrix Apparels, IFS Texwear, MB Knit, Westknit — 3M+ garments / month under direct control.",
    pin: { x: 70, y: 45 },
    color: "#22C55E",
  },
  {
    code: "LK",
    city: "Colombo",
    country: "Sri Lanka",
    role: "Technical Intimates",
    detail: "BOI-approved facility for polyamide and technical lingerie programs.",
    pin: { x: 68, y: 56 },
    color: "#F59E0B",
  },
  {
    code: "HK",
    city: "Hong Kong",
    country: "Parent Entity",
    role: "HSBC Trade Finance",
    detail: "Matrix Platform Limited — HSBC credit facility, LC operations, group treasury.",
    pin: { x: 78, y: 42 },
    color: "#29B6E8",
  },
  {
    code: "SI",
    city: "Slovenia",
    country: "EU Hub",
    role: "EU Delivery & Compliance",
    detail: "Matrix Design d.o.o. — EORI, EU VAT, DDP coordination into EU · UK · USA.",
    pin: { x: 51, y: 32 },
    color: "#60A5FA",
  },
];

const benefits = [
  {
    icon: Factory,
    title: "Owned Production",
    desc: "Fabric mill, sewing units and finishing under one group — not outsourced, not brokered.",
  },
  {
    icon: Layers,
    title: "Low MOQ Friendly",
    desc: "Start from 300–500 pcs/style on selected programs. Pilot collections welcome — scale only when ready.",
  },
  {
    icon: Banknote,
    title: "HSBC-Backed Finance",
    desc: "Hong Kong parent with HSBC trade facility. Stable LC terms, predictable payment cycles.",
  },
  {
    icon: Wallet,
    title: "Finance Flexibility",
    desc: "LC at sight, usance, TT and open-account terms for qualified buyers — payment that matches your cash cycle.",
  },
  {
    icon: Landmark,
    title: "EU Direct Import",
    desc: "Matrix Design d.o.o. — our Slovenia EU entity with EORI, EU VAT and direct customs clearance into the single market.",
  },
  {
    icon: Ship,
    title: "FOB or DDP",
    desc: "Door-to-door into EU, UK and USA via Slovenia. You choose the incoterm — we handle the chain.",
  },
  {
    icon: Globe2,
    title: "One Accountable Group",
    desc: "Single contract, single point of contact across countries. No agency layer.",
  },
];

export function IntegratedGroup() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      {/* Map background */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={worldMap}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={1024}
          className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>

      <div className="container-x relative">
        {/* Heading */}
        <Reveal>
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand sm:text-xs sm:tracking-[0.3em]">
              Integrated Global Hubs
            </p>
            <h2 className="text-section-title font-semibold text-foreground">
              Five hubs.{" "}
              <span className="text-gradient-brand">One accountable system.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Fabric in China. Manufacturing in Bangladesh and Sri Lanka. Trade
              finance in Hong Kong. EU delivery from Slovenia. Built so global
              buyers get one contract, one timeline, one point of accountability.
            </p>
          </div>
        </Reveal>

        {/* Buyer benefit strip */}
        <Reveal>
          <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:mb-16 lg:grid-cols-3 xl:grid-cols-5">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-xl border border-brand/30 bg-brand/5 p-5 backdrop-blur-sm transition-colors hover:border-brand/60 hover:bg-brand/10"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/15 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-sm font-semibold text-foreground">
                    {b.title}
                  </div>
                  <div className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {b.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Visual flow: From → Through → To */}
        <Reveal delay={0.05}>
          <div className="mb-12 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-md md:p-8 lg:mb-16">
            <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
              <FlowCell label="Source" lines={["China — Fabric Mill", "Owned 30% stake"]} accent="#A855F7" />
              <FlowArrow />
              <FlowCell
                label="Make"
                lines={["Bangladesh & Sri Lanka", "5+ owned units"]}
                accent="#22C55E"
                emphasis
              />
              <FlowArrow />
              <FlowCell
                label="Deliver"
                lines={["Slovenia → EU · UK · USA", "FOB or DDP"]}
                accent="#60A5FA"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 border-t border-border/60 pt-5 text-xs text-muted-foreground">
              <span className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 font-medium text-foreground">
                HSBC-Backed Trade Finance
              </span>
              <span>routes payment & LC operations through Hong Kong across every hub.</span>
            </div>
          </div>
        </Reveal>

        {/* Map + hub list */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          {/* Simplified map with pins */}
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface">
              <img
                src={worldMap}
                alt="World map showing Matrix Platform global hubs"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-background/30" />

              {/* Connector lines (CN→BD→LK→SI) */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden
              >
                <defs>
                  <linearGradient id="route" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#22C55E" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <path
                  d="M 76 40 Q 73 42 70 45 Q 69 50 68 56"
                  stroke="url(#route)"
                  strokeWidth="0.4"
                  fill="none"
                  strokeDasharray="1 1.2"
                />
                <path
                  d="M 70 45 Q 60 38 51 32"
                  stroke="url(#route)"
                  strokeWidth="0.4"
                  fill="none"
                  strokeDasharray="1 1.2"
                />
              </svg>

              {/* Pins */}
              {hubs.map((h) => (
                <div
                  key={h.code}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${h.pin.x}%`, top: `${h.pin.y}%` }}
                >
                  <span
                    className="block h-3 w-3 rounded-full ring-2 ring-background"
                    style={{ background: h.color, boxShadow: `0 0 14px ${h.color}` }}
                  />
                  <span
                    className="absolute left-1/2 top-1/2 -z-10 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50"
                    style={{ background: h.color, filter: "blur(6px)" }}
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-border bg-background/90 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-foreground backdrop-blur">
                    {h.code} · {h.city}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Hub list */}
          <div className="grid gap-3">
            {hubs.map((h, i) => (
              <Reveal key={h.code} delay={i * 0.05}>
                <div
                  className="group relative flex gap-4 rounded-xl border bg-card/70 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-card md:p-5"
                  style={{ borderColor: `${h.color}55` }}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-sm font-bold tracking-wide"
                    style={{ background: `${h.color}1f`, color: h.color }}
                  >
                    {h.code}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span className="text-sm font-semibold text-foreground">
                        {h.city}, {h.country}
                      </span>
                      <span className="text-[11px] uppercase tracking-wider" style={{ color: h.color }}>
                        {h.role}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {h.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowCell({
  label,
  lines,
  accent,
  emphasis = false,
}: {
  label: string;
  lines: string[];
  accent: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 text-center md:p-5 ${
        emphasis ? "bg-card" : "bg-card/60"
      }`}
      style={{ borderColor: `${accent}55` }}
    >
      <div
        className="mx-auto mb-2 inline-flex items-center gap-2 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em]"
        style={{ background: `${accent}1f`, color: accent }}
      >
        {label}
      </div>
      <div className="space-y-0.5">
        <div className="text-sm font-semibold text-foreground">{lines[0]}</div>
        <div className="text-xs text-muted-foreground">{lines[1]}</div>
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center text-brand/60">
      <ArrowRight className="hidden h-5 w-5 md:block" />
      <ArrowRight className="h-5 w-5 rotate-90 md:hidden" />
    </div>
  );
}
