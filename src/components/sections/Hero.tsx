import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Matrix Platform manufacturing facility with rolls of premium fabric"
          className="h-full w-full object-cover animate-slow-zoom"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Subtle vignette glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand/15 blur-[140px]" />

      <div className="container-x flex min-h-screen flex-col justify-end pb-24 pt-40 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-glow" />
            Vertically Integrated Apparel Group
          </div>
          <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-[88px]">
            From Fabric To{" "}
            <span className="text-gradient-brand">Finished Product.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Three countries. One integrated supply chain. Fabric sourcing,
            development, and manufacturing managed within one system — built to
            deliver consistent quality at global scale.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-medium text-brand-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" /> Download Profile
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-foreground/40 hover:bg-foreground/10"
            >
              Contact Our Team{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-8 lg:grid-cols-4"
        >
          {[
            { k: "3", v: "Countries" },
            { k: "5+", v: "Owned Units" },
            { k: "37", v: "Partner Factories" },
            { k: "DDP", v: "EU · UK · USA" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-2xl font-semibold text-foreground md:text-3xl">
                {s.k}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
