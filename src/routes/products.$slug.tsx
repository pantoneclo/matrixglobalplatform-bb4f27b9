import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Download, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { getCategoryBySlug, categories as allCategories } from "@/lib/categories";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const category = getCategoryBySlug(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.category;
    if (!c) return { meta: [{ title: "Category — Matrix Platform" }] };
    return {
      meta: [
        { title: `${c.name} — Matrix Platform` },
        { name: "description", content: c.sectionLead },
        { property: "og:title", content: `${c.name} — Matrix Platform` },
        { property: "og:description", content: c.sectionLead },
        { property: "og:image", content: c.heroImage },
        { name: "twitter:image", content: c.heroImage },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-x flex min-h-[60vh] flex-col items-center justify-center text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
          404
        </p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Category not found
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          The product category you are looking for does not exist.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground hover:bg-brand/90"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all categories
        </Link>
      </main>
      <Footer />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-x flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Something went wrong
        </h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
      </main>
      <Footer />
    </div>
  ),
  component: CategoryDetail,
});

function CategoryDetail() {
  const { category } = Route.useLoaderData();
  const others = allCategories.filter((c) => c.slug !== category.slug).slice(0, 4);
  const [g1, g2, g3, g4, g5, g6] = category.gallery;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO — cinematic, editorial */}
        <section className="relative h-[88vh] min-h-[620px] w-full overflow-hidden">
          <img
            src={category.heroImage}
            alt={category.name}
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full scale-105 object-cover"
          />
          {/* Layered gradients for depth + readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(0,0,0,0.6),transparent_60%)]" />

          {/* Decorative number watermark */}
          <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 select-none text-[22vw] font-bold leading-none text-foreground/[0.04] md:block">
            {category.number}
          </div>

          <div className="container-x relative z-10 flex h-full flex-col justify-end pb-20 pt-32 md:pb-28">
            <Reveal>
              <Link
                to="/products"
                className="group mb-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-brand"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                All categories
                <span className="mx-1 h-px w-8 bg-border" />
                <span className="text-brand">{category.number}</span>
              </Link>
              <h1 className="max-w-5xl text-[44px] font-semibold leading-[0.98] tracking-tight md:text-[88px] lg:text-[104px]">
                {(() => {
                  const parts = category.name.split(" & ");
                  return parts.map((part: string, i: number) => (
                    <span key={i} className="block">
                      {i === parts.length - 1 && parts.length > 1 ? (
                        <span className="text-gradient-brand">{part}</span>
                      ) : (
                        <>
                          {part}
                          {i < parts.length - 1 ? " &" : ""}
                        </>
                      )}
                    </span>
                  ));
                })()}
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {category.heroIntro}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/20 transition-all hover:-translate-y-0.5 hover:bg-brand/90 hover:shadow-xl hover:shadow-brand/30"
                >
                  Request Presentation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand">
                  <Download className="h-4 w-4" /> Download Profile
                </button>
              </div>
            </Reveal>
          </div>

          {/* Scroll indicator */}
          <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground md:flex">
            <span>Scroll</span>
            <span className="h-10 w-px animate-pulse bg-gradient-to-b from-brand to-transparent" />
          </div>
        </section>

        {/* ELEVATE YOUR OFFERINGS — premium editorial mosaic */}
        <section className="relative bg-surface py-20 md:py-28">
          {/* Subtle background pattern */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.06),transparent_50%)]" />

          <div className="container-x relative">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand">
                    Why Matrix
                  </p>
                </div>
                <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                  {category.sectionTitle.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-gradient-brand">
                    {category.sectionTitle.split(" ").slice(-1)}
                  </span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {category.sectionLead}
                </p>
              </div>
            </Reveal>

            {/* EDITORIAL MOSAIC — refined 3-col grid with consistent rhythm */}
            <div className="mt-14 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-3 md:gap-5">
              {/* Row 1 */}
              <ImageTile
                src={g1}
                alt={`${category.name} look 1`}
                className="row-span-2 aspect-[3/5]"
              />
              <FeatureCard feature={category.features[0]} />
              <ImageTile
                src={g3}
                alt={`${category.name} look 2`}
                className="aspect-[4/5]"
              />

              {/* Row 2 */}
              <ImageTile
                src={g2}
                alt={`${category.name} look 3`}
                className="aspect-[4/5]"
              />
              <FeatureCard feature={category.features[1]} />

              {/* Row 3 */}
              <ImageTile
                src={g4}
                alt={`${category.name} look 4`}
                className="row-span-2 aspect-[3/5]"
              />
              <FeatureCard feature={category.features[2]} />
              <ImageTile
                src={g5}
                alt={`${category.name} look 5`}
                className="aspect-[4/5]"
              />

              {/* Row 4 */}
              <ImageTile
                src={g6}
                alt={`${category.name} look 6`}
                className="aspect-[4/5]"
              />
              <FeatureCard feature={category.features[3]} />
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <section className="border-y border-border bg-background py-16 md:py-20">
          <div className="container-x">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Ready to develop a{" "}
                  <span className="text-gradient-brand">
                    {category.name.toLowerCase()}
                  </span>{" "}
                  program?
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Our merchandising team will respond within one business day with
                  fabric options, MOQs and indicative pricing.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90"
                >
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </Link>
                <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:border-brand hover:text-brand">
                  <Download className="h-4 w-4" /> Company Profile
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED CATEGORIES */}
        <section className="bg-surface py-20 md:py-24">
          <div className="container-x">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                  Explore more
                </p>
                <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Other categories
                </h3>
              </div>
              <Link
                to="/products"
                className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-brand md:inline-flex"
              >
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
              {others.map((c) => (
                <Link
                  key={c.slug}
                  to="/products/$slug"
                  params={{ slug: c.slug }}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-white">
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.25em] text-brand backdrop-blur">
                      {c.number}
                    </span>
                  </div>
                  <div className="mt-2.5 flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-3.5 py-2.5 transition-colors group-hover:border-brand/60">
                    <h4 className="truncate text-sm font-semibold tracking-tight">
                      {c.name}
                    </h4>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-brand" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ImageTile({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-white ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.05]"
      />
    </div>
  );
}

function FeatureCard({ feature }: { feature: { title: string; highlight: string; body: string } }) {
  return (
    <article className="group flex flex-col justify-between rounded-xl bg-card p-6 ring-1 ring-border transition-all hover:ring-brand/50 md:p-8">
      <div>
        <h3 className="text-2xl font-semibold leading-tight tracking-tight md:text-[28px]">
          {feature.title}
          <br />
          <span className="text-gradient-brand">{feature.highlight}</span>
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
          {feature.body}
        </p>
      </div>
      <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        Learn more <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </article>
  );
}
