import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, MapPin } from "lucide-react";
import fabricMill from "@/assets/fabric-mill.jpg";
import { DownloadGateModal } from "@/components/DownloadGateModal";

export function FabricMill() {
  const [downloadOpen, setDownloadOpen] = useState(false);
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="group relative overflow-hidden rounded-2xl border border-border shadow-elegant">
            <img
              src={fabricMill}
              alt="Zhejiang Monalisa Textile fabric mill in Shaoxing China"
              loading="lazy"
              width={1280}
              height={896}
              className="h-[520px] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand">
                <MapPin className="h-3.5 w-3.5" /> Shaoxing, China
              </div>
              <div className="mt-1 text-lg font-medium">Zhejiang Monalisa Textile</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Our Fabric Mill
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Engineered Flexibility.
              <br />
              <span className="text-gradient-brand">Integrated Fabric Supply.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Our in-house fabric capabilities — anchored by Zhejiang Monalisa
              Textile — support consistent quality, faster development, and
              dependable supply across every stage of production.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { k: "3M", v: "metres / month" },
                { k: "30%", v: "owned stake" },
                { k: "Knit", v: "polyester · viscose" },
                { k: "Woven", v: "blended fabrics" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-xl border border-border bg-card p-4"
                >
                  <div className="text-2xl font-semibold">{s.k}</div>
                  <div className="text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setDownloadOpen(true)}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand transition-all hover:gap-3"
            >
              Download Mill Profile <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>

      <DownloadGateModal
        open={downloadOpen}
        onClose={() => setDownloadOpen(false)}
        resourceTitle="Zhejiang Monalisa Textile — Mill Profile"
      />
    </section>
  );
}
