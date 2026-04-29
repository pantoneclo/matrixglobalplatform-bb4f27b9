import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";

const stats = [
  { value: 5, suffix: "+", label: "Owned Manufacturing Units", sub: "Across 3 Countries" },
  { value: 3, suffix: "M+", label: "Garments / Month", sub: "Under Direct Control" },
  { value: 100, suffix: "+", label: "Professionals", sub: "Across 4 Regions" },
  { value: 15, suffix: "+", label: "Certifications", sub: "International Standards" },
  { value: 0, prefix: "HSBC", label: "Backed Trade Finance", sub: "FOB & DDP — EU · UK · USA" },
];

export function Stats() {
  return (
    <section className="relative border-y border-border bg-surface py-16 sm:py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="container-x relative">
        <Reveal>
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand sm:text-xs sm:tracking-[0.3em]">
              Vertically Integrated Partner
            </p>
            <h2 className="text-section-title font-semibold text-foreground">
              Built on real scale,
              <br />
              not promises.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="group relative h-full bg-card p-6 transition-colors hover:bg-surface-elevated sm:p-8">
                <div className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm font-medium text-foreground">
                  {s.label}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-brand transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
