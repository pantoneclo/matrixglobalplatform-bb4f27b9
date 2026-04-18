import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Mail, MapPin, Phone, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const offices = [
  {
    city: "Hong Kong",
    label: "Headquarters",
    address: "Suite 1206, Tower 2, Lippo Centre, 89 Queensway, Admiralty",
    phone: "+852 2123 4567",
    email: "hk@matrixplatform.com",
  },
  {
    city: "Dhaka",
    label: "Operations Center",
    address: "House 45, Road 12, Block C, Banani, Dhaka 1213",
    phone: "+880 2 8817 5678",
    email: "dhaka@matrixplatform.com",
  },
  {
    city: "Shaoxing",
    label: "Fabric Mill",
    address: "No. 168, Textile Industry Zone, Keqiao District, Shaoxing",
    phone: "+86 575 8123 4567",
    email: "shaoxing@matrixplatform.com",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Get in Touch
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Ready to <span className="text-gradient-brand">Partner?</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Looking for a manufacturing partner? We&apos;d love to hear from you.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 4000);
              }}
              className="rounded-2xl border border-border bg-gradient-card p-8 shadow-elegant md:p-10"
            >
              <h3 className="text-xl font-semibold">Send us a message</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We&apos;ll get back to you within 24 hours.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <Field label="Name" placeholder="Your name" />
                <Field label="Email" type="email" placeholder="you@company.com" />
                <Field label="Company" placeholder="Your company" />
                <Field label="Phone" type="tel" placeholder="Optional" />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-lg border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-medium text-brand-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Message sent
                  </>
                ) : (
                  <>
                    Send Message <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </Reveal>

          {/* Offices */}
          <Reveal delay={0.15}>
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Our Offices
              </h3>
              {offices.map((o) => (
                <div
                  key={o.city}
                  className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40"
                >
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-lg font-semibold">{o.city}</h4>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {o.label}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {o.address}
                    </li>
                    <li className="flex gap-2">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {o.phone}
                    </li>
                    <li className="flex gap-2">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {o.email}
                    </li>
                  </ul>
                </div>
              ))}

              <div className="rounded-2xl border border-brand/30 bg-brand/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider text-muted-foreground">
                      Hours · Mon — Fri
                    </div>
                    <div className="mt-1 text-lg font-semibold">9AM — 6PM</div>
                    <a
                      href="#"
                      className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-brand"
                    >
                      Schedule a 30-min call <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
      />
    </div>
  );
}
