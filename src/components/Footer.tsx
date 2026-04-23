import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Instagram, Youtube, ArrowUp, Download } from "lucide-react";

const cols = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Our Team", to: "/about" },
      { label: "Careers", to: "/about" },
      { label: "News", to: "/about" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Manufacturing", to: "/services" },
      { label: "Sourcing", to: "/services" },
      { label: "Design", to: "/services" },
      { label: "Logistics", to: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Sustainability", to: "/sustainability" },
      { label: "Certifications", to: "/sustainability" },
      { label: "Case Studies", to: "/brands" },
      { label: "Download Profile", to: "/contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="container-x grid gap-10 py-12 sm:gap-12 sm:py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 48 48" className="h-9 w-9 text-brand" fill="none" aria-hidden="true">
              <path d="M24 2 L46 24 L24 46 L2 24 Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.12" />
              <path d="M14 32 V18 L24 28 L34 18 V32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <div className="text-lg font-bold tracking-wide leading-none">
              <span className="text-foreground">MATRIX</span>{" "}
              <span className="text-brand">PLATFORM</span>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            From fabric to finished product. Three countries, one integrated supply
            chain bridging China&apos;s textile power with South Asia&apos;s
            manufacturing excellence.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-sm text-foreground transition-colors hover:border-brand hover:bg-brand/20"
          >
            <Download className="h-4 w-4" /> Download Company Profile
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:contents">
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {col.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 Matrix Platform. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-muted-foreground">
            {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-brand hover:text-brand"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
