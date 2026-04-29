import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import {
  Factory,
  MapPin,
  Users,
  Award,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import manufacturingHero from "@/assets/manufacturing-hero.jpg";

type FactoryUnit = { name: string; slug: string };

type Country = {
  id: string;
  code: string;
  country: string;
  flag: string;
  accent: string; // tailwind classes for the badge
  description: string;
  units: FactoryUnit[];
};

const countries: Country[] = [
  {
    id: "bd",
    code: "BD",
    country: "Bangladesh",
    flag: "🇧🇩",
    accent: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/40",
    description:
      "High-volume knit and woven manufacturing across owned units — 80 sewing lines, 20 tons/day output and 3M+ garments per month under direct control.",
    units: [
      { name: "Matrix Apparels Ltd", slug: "matrix-apparels" },
      { name: "IFS Texwear Ltd", slug: "ifs-texwear" },
      { name: "MB Knit Fashion", slug: "mb-knit-fashion" },
      { name: "Lithe Group", slug: "lithe-group" },
      { name: "Westknit", slug: "westknit" },
    ],
  },
  {
    id: "lk",
    code: "LK",
    country: "Sri Lanka",
    flag: "🇱🇰",
    accent: "bg-amber-500/15 text-amber-300 ring-amber-400/40",
    description:
      "Technical lingerie and polyamide product capability with BOI-approved manufacturing strength.",
    units: [{ name: "Amanté Brand", slug: "amante" }],
  },
];

const stats = [
  { icon: MapPin, value: "2", label: "Countries" },
  { icon: Factory, value: "6", label: "Facilities" },
  { icon: Users, value: "5000+", label: "Workers" },
  { icon: Award, value: "15+", label: "Certifications" },
];

export function Manufacturing() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background image with rich overlays (no pure black) */}
      <div className="absolute inset-0 -z-10">
        <img
          src={manufacturingHero}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        {/* Brand-tinted wash so it never feels flat black */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--background)/0.92),hsl(var(--background)/0.75)_45%,hsl(var(--brand)/0.25))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--brand)/0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--brand)/0.12),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />
      </div>

      <div className="container-x">
        {/* Header */}
        <Reveal>
          <div className="mb-12 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 backdrop-blur">
              <Factory className="h-3.5 w-3.5 text-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                Own Manufacturing Unit
              </span>
            </div>
            <h2 className="text-section-title font-semibold text-foreground">
              Backed by real{" "}
              <span className="text-gradient-brand">Production strength</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              Strategic manufacturing facilities across South Asia delivering
              quality, capacity, and reliability.
            </p>
          </div>
        </Reveal>

        {/* Stat strip */}
        <Reveal delay={0.1}>
          <div className="mb-10 flex flex-wrap items-center gap-x-10 gap-y-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 ring-1 ring-brand/30 backdrop-blur">
                  <s.icon className="h-5 w-5 text-brand" />
                </div>
                <div className="leading-tight">
                  <div className="text-2xl font-semibold">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Country panels */}
        <div className="grid gap-6 lg:grid-cols-2">
          {countries.map((c, idx) => (
            <Reveal key={c.id} delay={0.15 + idx * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-7 shadow-elegant backdrop-blur-xl transition-colors hover:border-brand/40 md:p-8"
              >
                {/* Subtle hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Header row */}
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`relative flex h-14 w-14 items-center justify-center rounded-full text-2xl ring-1 shadow-inner ${c.accent}`}
                      aria-label={`${c.country} flag`}
                    >
                      <span className="leading-none drop-shadow-sm">
                        {c.flag}
                      </span>
                      <span className="absolute -bottom-1 -right-1 rounded-md bg-background/80 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-foreground ring-1 ring-border/60 backdrop-blur">
                        {c.code}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        {c.country}
                      </h3>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {c.units.length}{" "}
                        {c.units.length === 1 ? "facility" : "facilities"}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-brand" />
                </div>

                {/* Description */}
                <p className="mb-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>

                {/* Factory chips — clickable */}
                <div className="flex flex-wrap gap-2">
                  {c.units.map((u) => (
                    <Link
                      key={u.slug}
                      to="/factories/$slug"
                      params={{ slug: u.slug }}
                      className="group/chip relative inline-flex items-center gap-1.5 overflow-hidden rounded-lg border border-border/70 bg-background/40 px-3.5 py-2 text-sm font-medium text-foreground/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:bg-brand/10 hover:text-brand hover:shadow-[0_8px_20px_-8px] hover:shadow-brand/40"
                    >
                      <span className="relative z-10">{u.name}</span>
                      <ArrowUpRight className="relative z-10 h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover/chip:translate-x-0 group-hover/chip:opacity-100" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
