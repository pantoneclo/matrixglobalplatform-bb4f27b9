import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Brands } from "@/components/sections/Brands";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Our Brands — Matrix Platform" },
      {
        name: "description",
        content:
          "Pantoneclo, leafletic and amanté — proof we don't just make garments, we understand what sells. Concept and design through production to retail distribution.",
      },
      { property: "og:title", content: "Our Own Brands — Matrix Platform" },
      { property: "og:description", content: "Three flagship retail brands across menswear, activewear and lingerie." },
    ],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-40 pb-12 md:pt-48">
          <div className="container-x">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand">Our Own Brands</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                We think like brand owners —{" "}
                <span className="text-gradient-brand">because we are.</span>
              </h1>
            </Reveal>
          </div>
        </section>
        <Brands />
        <TrustedBy />
      </main>
      <Footer />
    </div>
  );
}
