import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Capabilities } from "@/components/sections/Capabilities";
import { FabricMill } from "@/components/sections/FabricMill";
import { Manufacturing } from "@/components/sections/Manufacturing";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "What We Do — Matrix Platform" },
      {
        name: "description",
        content:
          "Full-service private label custom clothing manufacturer offering CPT, CMPT, OEM, ODM and one-stop-shop solutions. From raw yarn in China to DDP delivery in Europe.",
      },
      { property: "og:title", content: "What We Do — Services & Capabilities" },
      {
        property: "og:description",
        content:
          "From raw yarn in China to finished garments delivered DDP in Europe — Matrix controls every stage of the supply chain.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-40 pb-12 md:pt-48">
          <div className="container-x">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand">What We Do</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                One group. <span className="text-gradient-brand">Full vertical capability.</span>
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                From raw yarn in China to finished garments delivered DDP in Europe, Matrix
                controls every stage of the supply chain. We provide a range of manufacturing
                options including CPT, CMPT, OEM, ODM, and one-stop-shop solutions to meet
                customers&apos; diverse requirements.
              </p>
            </Reveal>
          </div>
        </section>

        <FabricMill />
        <Manufacturing />
        <Capabilities />
      </main>
      <Footer />
    </div>
  );
}
