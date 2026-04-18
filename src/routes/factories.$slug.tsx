import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Factory as FactoryIcon,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import {
  factories,
  getFactoryBySlug,
  type FactoryStat,
  type FactoryCert,
} from "@/lib/factories";

export const Route = createFileRoute("/factories/$slug")({
  loader: ({ params }) => {
    const factory = getFactoryBySlug(params.slug);
    if (!factory) throw notFound();
    return { factory };
  },
  head: ({ loaderData }) => {
    const f = loaderData?.factory;
    if (!f) return { meta: [{ title: "Factory — Matrix Platform" }] };
    const desc = `${f.name} — ${f.location}. ${f.stats[0].value} ${f.stats[0].label.toLowerCase()}, ${f.stats[1].value} ${f.stats[1].label.toLowerCase()}. Established ${f.established}.`;
    return {
      meta: [
        { title: `${f.name} — Matrix Platform` },
        { name: "description", content: desc },
        { property: "og:title", content: `${f.name} — Matrix Platform` },
        { property: "og:description", content: desc },
        { property: "og:image", content: f.hero },
        { name: "twitter:image", content: f.hero },
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
          Factory not found
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          The manufacturing unit you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground hover:bg-brand/90"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
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
  component: FactoryDetail,
});

function FactoryDetail() {
  const { factory } = Route.useLoaderData();
  const others = factories.filter((f) => f.slug !== factory.slug).slice(0, 3);
  const nameParts = factory.name.split(" ");
  const lastWord = nameParts[nameParts.length - 1];
  const leadWords = nameParts.slice(0, -1).join(" ");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative h-[72vh] min-h-[520px] w-full overflow-hidden">
          <img
            src={factory.hero}
            alt={`${factory.name} manufacturing facility`}
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

          <div className="container-x relative z-10 flex h-full flex-col justify-end pb-14 pt-32 md:pb-20">
            <Reveal>
              <Link
                to="/"
                className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-brand"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> All units ·{" "}
                <span className="text-brand">{factory.countryCode}</span>
              </Link>

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs backdrop-blur">
                <FactoryIcon className="h-3.5 w-3.5 text-brand" />
                <span className="font-semibold uppercase tracking-[0.2em] text-brand">
                  {factory.countryCode}
                </span>
                <span className="text-muted-foreground">·</span>
                <span className="text-foreground">{factory.tagline}</span>
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-[88px]">
                {leadWords && (
                  <>
                    <span className="text-gradient-brand">{leadWords}</span>{" "}
                  </>
                )}
                <span>{lastWord}</span>
              </h1>

              <p className="mt-5 inline-flex items-center gap-2 text-base text-muted-foreground md:text-lg">
                <MapPin className="h-4 w-4 text-brand" /> {factory.location}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-brand-foreground transition-all hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/20">
                  <Download className="h-4 w-4" /> Download Profile
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-brand hover:text-brand"
                >
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-border bg-surface py-12 md:py-16">
          <div className="container-x">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
              {factory.stats.map((s: FactoryStat) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-brand/50 md:p-8"
                >
                  <div className="text-4xl font-semibold tracking-tight text-brand md:text-5xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground md:text-xs">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAIN CONTENT — STRENGTH + CERTIFICATIONS / CONTACT */}
        <section className="bg-background py-16 md:py-24">
          <div className="container-x">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              {/* STRENGTH */}
              <Reveal>
                <article className="h-full rounded-2xl border border-border bg-card p-6 md:p-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10">
                      <FactoryIcon className="h-5 w-5 text-brand" />
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight md:text-[28px]">
                      Product Strength{" "}
                      <span className="text-gradient-brand">& Capacity</span>
                    </h2>
                  </div>

                  <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                    {factory.about.map((p: string, i: number) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {factory.productCategories.map((c: string) => (
                      <div
                        key={c}
                        className="rounded-xl border border-border bg-background/60 px-4 py-3.5 text-center text-sm font-medium transition-colors hover:border-brand/60 hover:text-brand"
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>

              {/* RIGHT COLUMN: CERTS + CONTACT */}
              <div className="flex flex-col gap-6 lg:gap-8">
                <Reveal>
                  <article className="rounded-2xl border border-border bg-card p-6 md:p-10">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10">
                        <ShieldCheck className="h-5 w-5 text-brand" />
                      </div>
                      <h2 className="text-2xl font-semibold tracking-tight md:text-[28px]">
                        Our{" "}
                        <span className="text-gradient-brand">
                          Certifications
                        </span>
                      </h2>
                    </div>

                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-3">
                      {factory.certifications.map((c: FactoryCert) => (
                        <div
                          key={c.abbr}
                          title={c.name}
                          className="group flex aspect-square flex-col items-center justify-center rounded-xl border border-border bg-background/60 p-3 text-center transition-all hover:border-brand/60 hover:bg-brand/5"
                        >
                          <span className="text-sm font-bold tracking-tight text-brand md:text-base">
                            {c.abbr}
                          </span>
                          <span className="mt-1 line-clamp-2 text-[10px] leading-tight text-muted-foreground">
                            {c.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </article>
                </Reveal>

                <Reveal>
                  <article className="rounded-2xl border border-border bg-card p-6 md:p-10">
                    <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-[28px]">
                      Contact <span className="text-gradient-brand">Us</span>
                    </h2>

                    <ul className="space-y-5">
                      <li className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                          <MapPin className="h-4 w-4 text-brand" />
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                            Headquarters
                          </div>
                          <div className="mt-1 text-sm text-foreground">
                            {factory.contact.headquarters}
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                          <Phone className="h-4 w-4 text-brand" />
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                            Phone
                          </div>
                          <a
                            href={`tel:${factory.contact.phone.replace(/\s/g, "")}`}
                            className="mt-1 block text-sm text-foreground hover:text-brand"
                          >
                            {factory.contact.phone}
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                          <Mail className="h-4 w-4 text-brand" />
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                            Email Inquiries
                          </div>
                          <a
                            href={`mailto:${factory.contact.email}`}
                            className="mt-1 block break-all text-sm text-foreground hover:text-brand"
                          >
                            {factory.contact.email}
                          </a>
                        </div>
                      </li>
                    </ul>
                  </article>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* OTHER FACTORIES */}
        <section className="bg-surface py-16 md:py-20">
          <div className="container-x">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                  Across the group
                </p>
                <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Other manufacturing units
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              {others.map((f) => (
                <Link
                  key={f.slug}
                  to="/factories/$slug"
                  params={{ slug: f.slug }}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-brand/50 hover:shadow-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={f.hero}
                      alt={f.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand backdrop-blur">
                      {f.countryCode}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 p-5">
                    <div>
                      <h4 className="text-base font-semibold tracking-tight">
                        {f.name}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {f.location}
                      </p>
                    </div>
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
