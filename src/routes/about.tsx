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
        <IntegratedGroup />
        <Timeline />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
