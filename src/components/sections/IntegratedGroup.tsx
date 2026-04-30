import { Reveal } from "@/components/Reveal";
import worldMap from "@/assets/world-map-dark.jpg";
import { ArrowRight, Banknote, Factory, Globe2, Landmark, Layers, MapPin, Ship, Wallet } from "lucide-react";

type Side = "left" | "right";

type Entity = {
  code: string;
  name: string;
  city: string;
  country: string;
  role: string;
  detail: string;
  /** % position on the map (relative to image) */
  pin: { x: number; y: number };
  /** % position of the card anchor on the map */
  card: { x: number; y: number };
  side: Side;
  color: string;
};

// Pin/card coordinates tuned for an equirectangular world map (image)
const entities: Entity[] = [
  {
    code: "HK",
    name: "Matrix Platform Limited",
    city: "Hong Kong",
    country: "Parent Entity",
    role: "HSBC Trade Finance",
    detail: "HSBC credit facility, LC operations and group treasury for every factory in the group.",
    pin: { x: 80, y: 46 },
    card: { x: 2, y: 6 },
    side: "left",
    color: "#29B6E8",
  },
  {
    code: "SI",
    name: "Matrix Design d.o.o.",
    city: "Ljubljana, Slovenia",
    country: "EU Hub",
    role: "EU Direct Import · DDP",
    detail: "EU entity with EORI and EU VAT — direct customs clearance and DDP coordination into EU · UK · USA.",
    pin: { x: 51, y: 32 },
    card: { x: 2, y: 40 },
    side: "left",
    color: "#F59E0B",
  },
  {
    code: "CN",
    name: "Zhejiang Monalisa Textile",
    city: "Shaoxing, China",
    country: "Fabric Mill",
    role: "Owned Fabric Supply",
    detail: "3M metres / month — polyester, viscose, blended and knit fabrics. 30% group ownership.",
    pin: { x: 80, y: 42 },
    card: { x: 2, y: 74 },
    side: "left",
    color: "#A855F7",
  },
  {
    code: "BD-1",
    name: "Matrix Apparels Ltd",
    city: "Dhaka, Bangladesh",
    country: "Manufacturing",
    role: "Product Development",
    detail: "Product development and flexible manufacturing hub — the founding factory of the group.",
    pin: { x: 71, y: 47 },
    card: { x: 98, y: 6 },
    side: "right",
    color: "#84CC16",
  },
  {
    code: "BD-2",
    name: "IFS Texwear Ltd",
    city: "Narayanganj, Bangladesh",
    country: "Manufacturing",
    role: "Composite Knit",
    detail: "Large-scale composite knit manufacturing with full vertical integration.",
    pin: { x: 71.5, y: 48.5 },
    card: { x: 98, y: 30 },
    side: "right",
    color: "#22C55E",
  },
  {
    code: "BD-3",
    name: "MB Knit Fashion Ltd",
    city: "Narayanganj, Bangladesh",
    country: "Manufacturing",
    role: "High-Volume Knitwear",
    detail: "Established high-volume knitwear production with strong reliability for repeat programs.",
    pin: { x: 72, y: 49 },
    card: { x: 98, y: 54 },
    side: "right",
    color: "#10B981",
  },
  {
    code: "BD-4",
    name: "Westknit",
    city: "Narayanganj, Bangladesh",
    country: "Manufacturing",
    role: "Vertically Integrated Knit",
    detail: "Vertically integrated knitwear production across core categories — yarn to finished garment.",
    pin: { x: 72.5, y: 49.5 },
    card: { x: 98, y: 78 },
    side: "right",
    color: "#14B8A6",
  },
];

const benefits = [
  { icon: Factory, title: "Owned Production", desc: "Fabric mill, sewing units and finishing under one group — not outsourced, not brokered." },
  { icon: Layers, title: "Low MOQ Friendly", desc: "Start from 300–500 pcs/style on selected programs. Pilot collections welcome — scale only when ready." },
  { icon: Banknote, title: "HSBC-Backed Finance", desc: "Hong Kong parent with HSBC trade facility. Stable LC terms, predictable payment cycles." },
  { icon: Wallet, title: "Finance Flexibility", desc: "LC at sight, usance, TT and open-account terms for qualified buyers — payment that matches your cash cycle." },
  { icon: Landmark, title: "EU Direct Import", desc: "Matrix Design d.o.o. — our Slovenia EU entity with EORI, EU VAT and direct customs clearance into the single market." },
  { icon: Ship, title: "FOB or DDP", desc: "Door-to-door into EU, UK and USA via Slovenia. You choose the incoterm — we handle the chain." },
  { icon: Globe2, title: "One Accountable Group", desc: "Single contract, single point of contact across countries. No agency layer." },
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
          className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>

      <div className="container-x relative">
        {/* Heading */}
        <Reveal>
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand sm:text-xs sm:tracking-[0.3em]">
              HSBC-Backed · EU Direct · DDP to your door
            </p>
            <h2 className="text-section-title font-semibold text-foreground">
              One group.{" "}
              <span className="text-gradient-brand">One contract. Five countries.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Owned fabric in China. Owned manufacturing in Bangladesh and Sri Lanka. HSBC trade
              finance through Hong Kong. EU customs and DDP delivery from our own Slovenia entity
              into EU · UK · USA. Every link below is a company we own or control.
            </p>
          </div>
        </Reveal>

        {/* THE MAP — centerpiece */}
        <Reveal>
          <div className="relative mb-10 overflow-hidden rounded-2xl border border-border bg-surface/60 backdrop-blur-md">
            {/* Aspect-controlled map area */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10]">
              <img
                src={worldMap}
                alt="World map showing Matrix Platform global hubs across Hong Kong, Slovenia, China, Bangladesh and Sri Lanka"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-background/40" />

              {/* Connector lines from each card to its pin (desktop only) */}
              <svg
                className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden
              >
                {entities.map((e) => (
                  <ConnectorPath key={e.code} entity={e} />
                ))}
              </svg>

              {/* Sri Lanka technical hub — small inline pin (no card to keep layout clean) */}
              <PinDot x={68} y={56} color="#FB923C" label="LK · Colombo" />

              {/* Pins for each entity */}
              {entities.map((e) => (
                <PinDot key={e.code} x={e.pin.x} y={e.pin.y} color={e.color} />
              ))}

              {/* Anchored cards (desktop) */}
              <div className="absolute inset-0 hidden lg:block">
                {entities.map((e) => (
                  <EntityCard key={e.code} entity={e} />
                ))}
              </div>
            </div>

            {/* Mobile / tablet card grid below the map */}
            <div className="grid gap-3 border-t border-border/60 p-4 sm:grid-cols-2 lg:hidden">
              {entities.map((e) => (
                <MobileEntityCard key={e.code} entity={e} />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Buyer benefit strip — supporting context after the map */}
        <Reveal delay={0.05}>
          <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:mb-16 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7">
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
                  <div className="mt-4 text-sm font-semibold text-foreground">{b.title}</div>
                  <div className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{b.desc}</div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Visual flow */}
        <Reveal delay={0.05}>
          <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-md md:p-8">
            <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
              <FlowCell label="Source" lines={["China — Fabric Mill", "Owned 30% stake"]} accent="#A855F7" />
              <FlowArrow />
              <FlowCell label="Make" lines={["Bangladesh & Sri Lanka", "5+ owned units"]} accent="#22C55E" emphasis />
              <FlowArrow />
              <FlowCell label="Deliver" lines={["Slovenia → EU · UK · USA", "FOB or DDP"]} accent="#60A5FA" />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 border-t border-border/60 pt-5 text-xs text-muted-foreground">
              <span className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 font-medium text-foreground">
                HSBC-Backed Trade Finance
              </span>
              <span>routes payment & LC operations through Hong Kong across every hub.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Map sub-components ---------- */

function PinDot({ x, y, color, label }: { x: number; y: number; color: string; label?: string }) {
  return (
    <div
      className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <span
        className="block h-3 w-3 rounded-full ring-2 ring-background"
        style={{ background: color, boxShadow: `0 0 14px ${color}` }}
      />
      <span
        className="absolute left-1/2 top-1/2 -z-10 block h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50"
        style={{ background: color, filter: "blur(7px)" }}
      />
      {label && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-border bg-background/90 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-foreground backdrop-blur">
          {label}
        </span>
      )}
    </div>
  );
}

function ConnectorPath({ entity }: { entity: Entity }) {
  // Card anchor edge: right edge of left cards, left edge of right cards
  const startX = entity.side === "left" ? entity.card.x + 22 : entity.card.x - 22;
  const startY = entity.card.y + 6; // approx vertical mid of card
  const endX = entity.pin.x;
  const endY = entity.pin.y;
  const midX = (startX + endX) / 2;

  // Stepped path: horizontal → vertical → horizontal (clean L-shape like reference)
  const d = `M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`;

  return (
    <path
      d={d}
      stroke={entity.color}
      strokeOpacity="0.55"
      strokeWidth="0.25"
      fill="none"
      strokeDasharray="0.8 0.8"
      vectorEffect="non-scaling-stroke"
    />
  );
}

function EntityCard({ entity }: { entity: Entity }) {
  const isLeft = entity.side === "left";
  return (
    <div
      className="absolute w-[22%] max-w-[260px]"
      style={{
        left: isLeft ? `${entity.card.x}%` : undefined,
        right: isLeft ? undefined : `${100 - entity.card.x}%`,
        top: `${entity.card.y}%`,
      }}
    >
      <div
        className="rounded-xl border bg-background/85 p-3.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-background"
        style={{ borderColor: `${entity.color}66`, boxShadow: `0 0 24px -12px ${entity.color}` }}
      >
        <div className="flex items-center justify-between gap-2">
          <span
            className="text-[13px] font-semibold leading-tight"
            style={{ color: entity.color }}
          >
            {entity.name}
          </span>
          <MapPin className="h-3.5 w-3.5 shrink-0" style={{ color: entity.color }} />
        </div>
        <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-foreground">
          {entity.city}
        </div>
        <div
          className="mt-1 inline-block rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider"
          style={{ background: `${entity.color}1f`, color: entity.color }}
        >
          {entity.role}
        </div>
        <p className="mt-2 text-[11px] leading-snug text-muted-foreground">{entity.detail}</p>
      </div>
    </div>
  );
}

function MobileEntityCard({ entity }: { entity: Entity }) {
  return (
    <div
      className="rounded-xl border bg-card/70 p-4 backdrop-blur-md"
      style={{ borderColor: `${entity.color}55` }}
    >
      <div className="flex items-center gap-2">
        <span
          className="inline-flex h-2.5 w-2.5 rounded-full"
          style={{ background: entity.color, boxShadow: `0 0 10px ${entity.color}` }}
        />
        <span className="text-sm font-semibold" style={{ color: entity.color }}>
          {entity.name}
        </span>
      </div>
      <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-foreground">
        {entity.city}
      </div>
      <div
        className="mt-1.5 inline-block rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider"
        style={{ background: `${entity.color}1f`, color: entity.color }}
      >
        {entity.role}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{entity.detail}</p>
    </div>
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
      className={`rounded-xl border p-4 text-center md:p-5 ${emphasis ? "bg-card" : "bg-card/60"}`}
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
