import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Products } from "@/components/sections/Products";
import { Reveal } from "@/components/Reveal";
import fashionImg from "@/assets/cat-fashionwear.jpg";
import outerImg from "@/assets/cat-outerwear.jpg";
import bottomImg from "@/assets/cat-bottomwear.jpg";
import casualImg from "@/assets/cat-casualwear.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Matrix Platform" },
      {
        name: "description",
        content:
          "Lounge & nightwear, innerwear, lingerie, activewear, casualwear, denim, swimwear, knitwear and kids — fashion-led product categories engineered at scale.",
      },
      { property: "og:title", content: "Fashion-led Product Categories — Matrix Platform" },
      { property: "og:description", content: "Explore our core product direction across nine fashion-led categories." },
    ],
  }),
  component: ProductsPage,
});

const categories = [
  { name: "Lounge & Nightwear", img: fashionImg },
  { name: "Innerwear & Essentials", img: casualImg },
  { name: "Lingerie & Intimates", img: fashionImg },
  { name: "Activewear & Sportswear", img: outerImg },
  { name: "Casualwear", img: casualImg },
  { name: "Denim", img: bottomImg },
  { name: "Swimwear", img: fashionImg },
  { name: "True Knitwear", img: outerImg },
  { name: "Kids", img: casualImg },
];

function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-40 pb-12 md:pt-48">
          <div className="container-x">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand">Our Products</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                Fashion-led product{" "}
                <span className="text-gradient-brand">categories.</span>
              </h1>
            </Reveal>
          </div>
        </section>

        <Products />

        <section className="py-24 md:py-32">
          <div className="container-x">
            <Reveal>
              <h2 className="mb-12 text-3xl font-semibold tracking-tight md:text-4xl">
                All Categories
              </h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
              {categories.map((c, i) => (
                <Reveal key={c.name} delay={i * 0.05}>
                  <a
                    href="#"
                    className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-border"
                  >
                    <img
                      src={c.img}
                      alt={c.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="text-xl font-semibold text-foreground md:text-2xl">{c.name}</h3>
                    </div>
                  </a>
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
