import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import wwdHero from "@/assets/wwd-hero.jpg";
import wwdDesign from "@/assets/wwd-design.jpg";
import wwdFabric from "@/assets/wwd-fabric.jpg";
import wwdSewing from "@/assets/wwd-sewing.jpg";
import wwdWarehouse from "@/assets/wwd-warehouse.jpg";

type Row = {
  chip: string;
  titleTop: string;
  titleAccent: string;
  desc: string;
  image: string;
  imageAlt: string;
  imageLeft: boolean; // true = image on left, text on right
  accentSide: "left" | "right";
  ctaLabel?: string;
  ctaTo?: string;
};

const rows: Row[] = [
  {
    chip: "Our Delivery",
    titleTop: "Seamless",
    titleAccent: "Logistics",
    desc: "Full door-to-door delivery across EU, UK, and USA. We handle the complexity so you can focus on growth.",
    image: wwdDesign,
    imageAlt: "Design sketches and color swatches on a studio table",
    imageLeft: false,
    accentSide: "left",
  },
  {
    chip: "Certified Excellence",
    titleTop: "Audit",
    titleAccent: "Ready",
    desc: "Compliance is our foundation, not a checkbox. BSCI, OEKO-TEX, GOTS, GRS and Sedex audited across owned facilities — proof available on request.",
    image: wwdFabric,
    imageAlt: "Stacked rolls of colorful fabric",
    imageLeft: true,
    accentSide: "right",
    ctaLabel: "View certifications",
    ctaTo: "/sustainability",
  },
  {
    chip: "Our Brand",
    titleTop: "Brand Owners",
    titleAccent: "Mindset",
    desc: "We think like brand owners because we are brand owners. Proven expertise through our flagship labels.",
    image: wwdSewing,
    imageAlt: "Industrial sewing machines in a garment factory",
    imageLeft: false,
    accentSide: "left",
  },
  {
    chip: "Our Final Product",
    titleTop: "Design to",
    titleAccent: "Reality",
    desc: "From initial mood boards to the final product. Our in-house design team bridges the gap between vision and reality.",
    image: wwdWarehouse,
    imageAlt: "Warehouse worker organizing boxed inventory",
    imageLeft: true,
    accentSide: "right",
  },
];

export function Capabilities() {
  return (
    <section id="what-we-do" aria-labelledby="wwd-heading" className="relative">
      {/* HERO STRIP */}
      <div className="relative isolate overflow-hidden">
        <img
          src={wwdHero}
          alt="Silhouettes of business professionals against a window of city lights"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        <div className="container-x relative py-28 md:py-40">
          <Reveal>
            <h1
              id="wwd-heading"
              className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
            >
              <span className="text-gradient-brand">One Group</span>
              <br />
              Full Vertical Capability
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              From raw yarn in China to finished garments delivered DDP in Europe,
              Matrix controls every stage of the supply chain.
            </p>
          </Reveal>
        </div>
      </div>

      {/* SERVICES WE PROVIDE — light band */}
      <div className="surface text-[oklch(0.18_0.005_240)]">
        <div className="container-x py-16 md:py-20">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              <span className="text-gradient-brand">Services</span>{" "}
              <span className="text-[oklch(0.18_0.005_240)]">We Provide</span>
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[oklch(0.32_0.01_240)] md:text-lg">
              <span className="font-semibold">Matrix Apparels</span> is a full-service
              private label custom clothing and textile goods manufacturer from concept
              to the final product. We provide a range of manufacturing options including
              CPT, CMPT, OEM, ODM, and one-stop-shop solutions to meet customers&apos;
              diverse requirements.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ALTERNATING ROWS */}
      <div className="bg-background">
        {rows.map((row, i) => (
          <FeatureRow key={row.chip} row={row} index={i} />
        ))}
      </div>
    </section>
  );
}

function FeatureRow({ row, index }: { row: Row; index: number }) {
  const TextBlock = (
    <Reveal delay={0.05}>
      <div className={row.accentSide === "right" ? "md:text-right md:ml-auto md:max-w-xl" : "md:max-w-xl"}>
        <span className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-1.5 text-xs font-semibold text-brand-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-foreground" />
          {row.chip}
        </span>
        <h3 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          <span className="block text-foreground">{row.titleTop}</span>
          <span className="block text-gradient-brand">{row.titleAccent}</span>
        </h3>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          {row.desc}
        </p>
        {row.ctaTo && row.ctaLabel && (
          <div className={`mt-6 ${row.accentSide === "right" ? "md:text-right" : ""}`}>
            <Link
              to={row.ctaTo}
              className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand hover:bg-brand/20"
            >
              {row.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </Reveal>
  );

  const ImageBlock = (
    <Reveal delay={0.1}>
      <div className="group relative overflow-hidden rounded-2xl shadow-elegant ring-1 ring-border">
        <img
          src={row.image}
          alt={row.imageAlt}
          loading="lazy"
          className="h-[260px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 md:h-[420px]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-transparent" />
      </div>
    </Reveal>
  );

  return (
    <div className={`container-x py-16 md:py-24 ${index !== 0 ? "border-t border-border/40" : ""}`}>
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        {row.imageLeft ? (
          <>
            {ImageBlock}
            {TextBlock}
          </>
        ) : (
          <>
            {TextBlock}
            {ImageBlock}
          </>
        )}
      </div>
    </div>
  );
}
