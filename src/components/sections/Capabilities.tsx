import { Reveal } from "@/components/Reveal";
import { Truck, ShieldCheck, Store, Palette, HandshakeIcon } from "lucide-react";
import logisticsImg from "@/assets/logistics.jpg";
import complianceImg from "@/assets/compliance.jpg";
import retailImg from "@/assets/retail.jpg";
import designImg from "@/assets/design-studio.jpg";

const features = [
  {
    icon: Truck,
    title: "Seamless Logistics",
    sub: "DDP Capable",
    desc: "Full door-to-door delivery across EU, UK, and USA. We handle the complexity so you can focus on growth.",
    image: logisticsImg,
    span: "lg:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Audit Ready",
    sub: "Fully Certified",
    desc: "Compliance isn't a goal, it's our foundation. Ethical sourcing and safety standards ready from day one.",
    image: complianceImg,
    span: "",
  },
  {
    icon: Store,
    title: "Own Retail Brands",
    sub: "We Know Retail",
    desc: "We think like brand owners because we are brand owners. Proven expertise through our flagship labels.",
    image: retailImg,
    span: "",
  },
  {
    icon: Palette,
    title: "Design House",
    sub: "End-to-End",
    desc: "From initial mood boards to the final product. Our in-house design team bridges vision and reality.",
    image: designImg,
    span: "",
  },
  {
    icon: HandshakeIcon,
    title: "Low MOQ",
    sub: "Start from 500 pcs",
    desc: "Same factory strength. No compromise. Flexible orders without losing scale advantages.",
    image: null,
    span: "",
  },
];

export function Capabilities() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Logistics · Compliance · Brands
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              One group, full vertical{" "}
              <span className="text-gradient-brand">capability.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid auto-rows-[280px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06} className={f.span}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-gradient-card transition-all duration-500 hover:border-brand/40 hover:shadow-elegant">
                {f.image && (
                  <>
                    <img
                      src={f.image}
                      alt={f.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover opacity-30 transition-all duration-700 group-hover:opacity-50 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                  </>
                )}
                <div className="relative flex h-full flex-col justify-end p-7">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-brand">
                    {f.sub}
                  </div>
                  <h3 className="mt-1 text-2xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
