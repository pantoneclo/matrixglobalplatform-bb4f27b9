import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Stats } from "@/components/sections/Stats";
import { Team } from "@/components/sections/Team";
import { Timeline } from "@/components/sections/Timeline";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Who We Are — Matrix Platform" },
      {
        name: "description",
        content:
          "Matrix Apparels began with a single factory in Dhaka. Today we operate an integrated manufacturing group across Bangladesh, China and Sri Lanka.",
      },
      { property: "og:title", content: "Who We Are — Matrix Platform" },
      {
        property: "og:description",
        content:
          "An integrated manufacturing group spanning Bangladesh, China and Sri Lanka, with trade finance in Hong Kong and a European base in Slovenia.",
      },
    ],
  }),
  component: AboutPage,
});

const entities = [
  { name: "Matrix Design d.o.o.", loc: "Slovenia", desc: "EU legal entity. EORI registration, EU VAT, logistics coordination, sample handling." },
  { name: "Matrix Apparels Ltd", loc: "Dhaka, Bangladesh", desc: "Built from scratch. Design centre, product development, multi-product flexibility." },
  { name: "Matrix Platform Limited", loc: "Hong Kong", desc: "Trade finance, HSBC credit facility, LC operations, parent entity for all factory relationships." },
  { name: "IFS Texwear Ltd", loc: "Dhaka, Bangladesh", desc: "80 sewing lines, 20 tons/day output. The volume engine." },
  { name: "Zhejiang Monalisa Textile", loc: "Shaoxing, China", desc: "30% owned. 3M metres/month fabric capacity. Polyester, viscose, blended, knit fabrics." },
  { name: "MB Knit Fashion Ltd", loc: "Dhaka, Bangladesh", desc: "Est. 1992, 1.4M pcs/month (peak 2.1M). LPP Rated A." },
  { name: "Sri Lanka Operations", loc: "Colombo", desc: "Technical lingerie and polyamide products. BOI approved, amanté brand." },
  { name: "Westknit", loc: "Bangladesh", desc: "Knit specialist. Partner factory, same family ownership as Lithe and IFS." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative pt-40 pb-20 md:pt-48">
          <div className="container-x">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand">Who We Are</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                Built to manufacture.{" "}
                <span className="text-gradient-brand">Structured to deliver.</span>
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Matrix Apparels began with a single factory in Dhaka. Today, we operate an
                integrated manufacturing group spanning Bangladesh, China and Sri Lanka, with
                trade finance in Hong Kong and a European base in Slovenia. We are not an
                agency. We are not a trading house. We are a manufacturer that owns its fabric
                supply, controls its production, and delivers finished goods directly to
                retailers across the world.
              </p>
            </Reveal>
          </div>
        </section>

        <Stats />

        <section className="py-24 md:py-32">
          <div className="container-x">
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                One Integrated Group
              </p>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                Our infrastructure was built to solve the{" "}
                <span className="text-gradient-brand">complexity of modern apparel sourcing.</span>
              </h2>
            </Reveal>

            <div className="mt-14 overflow-hidden rounded-2xl border border-border">
              {entities.map((e, i) => (
                <Reveal key={e.name} delay={i * 0.04}>
                  <div className="grid items-center gap-4 border-b border-border bg-card p-6 transition-colors hover:bg-surface-elevated md:grid-cols-[1.4fr_1fr_2fr] md:p-8 last:border-0">
                    <div className="font-semibold text-foreground">{e.name}</div>
                    <div className="text-sm text-brand">{e.loc}</div>
                    <div className="text-sm text-muted-foreground">{e.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Timeline />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
