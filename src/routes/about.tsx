import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Stats } from "@/components/sections/Stats";
import { Team } from "@/components/sections/Team";
import { Timeline } from "@/components/sections/Timeline";
import { IntegratedGroup } from "@/components/sections/IntegratedGroup";
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

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48">
          <div className="container-x">
            <Reveal>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand sm:text-xs sm:tracking-[0.3em]">Who We Are</p>
              <h1 className="max-w-4xl text-display font-semibold">
                Built to manufacture.{" "}
                <span className="text-gradient-brand">Structured to deliver.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg">
                Matrix Apparels began with a single factory in Dhaka. Today, we operate an
                integrated manufacturing group spanning Bangladesh, China and Sri Lanka, with
                trade finance in Hong Kong and a European base in Slovenia. We are not an
                agency. We are not a trading house. We are a manufacturer that owns its fabric
                supply, controls its production, and delivers finished goods directly to
                retailers across the world.
              </p>

              <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { k: "HSBC", v: "Backed Trade Finance", sub: "LC operations via Hong Kong" },
                  { k: "EU Entity", v: "Direct Import into EU", sub: "Matrix Design d.o.o. — Slovenia" },
                  { k: "FOB · DDP", v: "EU · UK · USA", sub: "Door-to-door delivery" },
                  { k: "5+", v: "Owned Manufacturing Units", sub: "Across 3 countries" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-xl border border-brand/30 bg-brand/5 p-4 backdrop-blur"
                  >
                    <div className="text-lg font-semibold text-foreground">{s.k}</div>
                    <div className="mt-1 text-sm font-medium text-foreground">{s.v}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{s.sub}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <Stats />
        <IntegratedGroup />
        <Timeline />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
