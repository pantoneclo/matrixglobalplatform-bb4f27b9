import { Reveal } from "@/components/Reveal";

const brands = [
  "ZARA", "H&M", "C&A", "PRIMARK", "TESCO", "M&S", "NEXT", "BOOHOO",
  "ASOS", "MANGO", "UNIQLO", "PULL&BEAR", "BERSHKA", "RIVER ISLAND",
];

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-background py-16">
      <div className="container-x">
        <Reveal>
          <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            Trusted By Leading Brands
          </p>
        </Reveal>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee gap-14">
            {[...brands, ...brands].map((b, i) => (
              <div
                key={i}
                className="flex h-12 items-center text-2xl font-bold tracking-wider text-muted-foreground/50 transition-colors hover:text-foreground"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
