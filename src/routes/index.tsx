import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { FabricMill } from "@/components/sections/FabricMill";
import { Manufacturing } from "@/components/sections/Manufacturing";
import { Capabilities } from "@/components/sections/Capabilities";
import { Products } from "@/components/sections/Products";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Brands } from "@/components/sections/Brands";
import { Team } from "@/components/sections/Team";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matrix Platform — From Fabric to Finished Product" },
      {
        name: "description",
        content:
          "Vertically integrated apparel manufacturing across China, Bangladesh and Sri Lanka. 5+ owned units, 37 partner factories, 3M+ garments per month with full DDP delivery.",
      },
      { property: "og:title", content: "Matrix Platform — Global Apparel Manufacturing" },
      {
        property: "og:description",
        content:
          "Three countries. One integrated supply chain. Fabric, manufacturing and DDP delivery to EU, UK and USA.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <FabricMill />
        <Manufacturing />
        <Capabilities />
        <Products />
        <TrustedBy />
        <Brands />
        <Timeline />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
