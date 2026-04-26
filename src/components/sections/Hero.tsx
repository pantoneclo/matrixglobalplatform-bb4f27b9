import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { DownloadGateModal } from "@/components/DownloadGateModal";

export function Hero() {
  const [downloadOpen, setDownloadOpen] = useState(false);
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
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Subtle vignette glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand/15 blur-[140px]" />

      <div className="container-x flex min-h-screen flex-col justify-end pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-brand sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.25em]">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-glow" />
            Vertically Integrated Apparel Group
          </div>
          <h1 className="text-balance text-display-lg font-semibold">
            From Fabric To{" "}
            <span className="text-gradient-brand">Finished Product.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:text-xl">
            Three countries. One integrated supply chain. Fabric sourcing,
            development, and manufacturing managed within one system — built to
            deliver consistent quality at global scale.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <button
              type="button"
              onClick={() => setDownloadOpen(true)}
              className="tap-target group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-glow transition-transform hover:scale-[1.02] sm:px-7 sm:py-3.5"
            >
              <Download className="h-4 w-4" /> Download Profile
            </button>
            <a
              href="#contact"
              className="tap-target group inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-foreground/40 hover:bg-foreground/10 sm:px-7 sm:py-3.5"
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
          className="mt-14 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-foreground/10 pt-6 sm:mt-20 sm:grid-cols-4 sm:gap-6 sm:pt-8"
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
              <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <DownloadGateModal
        open={downloadOpen}
        onClose={() => setDownloadOpen(false)}
        resourceTitle="Matrix Group Company Profile"
      />
    </section>
  );
}
