import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Leaf, Droplets, Factory, Recycle, Award } from "lucide-react";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability & Compliance — Matrix Platform" },
      {
        name: "description",
        content:
          "Certified, transparent, responsible. 15+ international certifications including OEKO-TEX, GOTS, Sedex, BSCI, GRS — built into how we operate, source and deliver.",
      },
      { property: "og:title", content: "Certified. Transparent. Responsible." },
      {
        property: "og:description",
        content:
          "Compliance is not a checkbox. It is built into how we operate, source, and deliver — fully aligned with the EU CSDDD.",
      },
    ],
  }),
  component: SustainabilityPage,
});

const certs = [
  "Accord", "Sedex", "CTPAT", "OEKO-TEX 100", "GRS", "Higg Index", "ICS",
  "ISO 9001:2015", "OBS", "RCS", "WRAP", "GOTS", "SGS", "amfori BSCI", "BCI", "BetterWork",
];

const pillars = [
  { icon: Leaf, title: "Sustainable Fabrics", desc: "Organic cotton, linen and recycled fibres that use less water than conventional methods." },
  { icon: Droplets, title: "Water Treatment Plant", desc: "100% of process water treated, removing all hazardous chemicals before reuse." },
  { icon: Factory, title: "Caustic Recovery Plant", desc: "Recycle and reuse caustic soda, reducing chemical impact across processing." },
  { icon: Recycle, title: "Laser Replacing PP Spray", desc: "Laser machines replace conventional methods that harm worker health and the environment." },
];

function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-40 pb-20 md:pt-48">
          <div className="container-x">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand">Sustainability</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                Certified. Transparent. <span className="text-gradient-brand">Responsible.</span>
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Every manufacturing unit in the Matrix group is independently audited and
                certified to the standards European and UK retailers require. The EU Supply
                Chain Due Diligence Directive (CSDDD) is raising the bar — our certifications,
                traceability, and audit history mean our customers can demonstrate due
                diligence from raw material to delivered garment.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-border bg-surface py-20">
          <div className="container-x">
            <Reveal>
              <div className="mb-10 flex items-center gap-3">
                <Award className="h-5 w-5 text-brand" />
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  15+ International Certifications
                </h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
              {certs.map((c, i) => (
                <Reveal key={c} delay={i * 0.03}>
                  <div className="flex h-20 items-center justify-center rounded-xl border border-border bg-card text-center text-sm font-semibold text-foreground transition-all hover:border-brand/40 hover:bg-surface-elevated hover:text-brand">
                    {c}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container-x">
            <Reveal>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                Built into how we{" "}
                <span className="text-gradient-brand">operate.</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="group rounded-2xl border border-border bg-gradient-card p-8 hover-lift">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-semibold">{p.title}</h3>
                    <p className="mt-3 text-muted-foreground">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
