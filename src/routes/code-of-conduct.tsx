import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ShieldCheck, Mail, AlertTriangle, Users, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/code-of-conduct")({
  head: () => ({
    meta: [
      { title: "Matrix Platform — Code of Conduct & Ethical Policy" },
      {
        name: "description",
        content:
          "Matrix Platform Ltd Code of Conduct & Ethical Policy — standards for employees, vendor selection and zero-tolerance compliance.",
      },
      {
        property: "og:title",
        content: "Matrix Platform CODE OF CONDUCT",
      },
      {
        property: "og:description",
        content:
          "Honesty, transparency, integrity. Our Code of Conduct & Ethical Policy for employees and vendors.",
      },
    ],
  }),
  component: CodeOfConductPage,
});

const employeeViolations = [
  "Bribery or corruption.",
  "Disclosure of confidential documents or information.",
  "Misappropriation of company assets in any form — intellectual or otherwise.",
  "Falsification or manipulation of records.",
  "Engaging in commercial or financial activities in competition with the Company's business interests.",
  "Sexual harassment by any individual.",
  "Violation of sourcing standards and Zero Tolerance policies.",
  "Any act that contradicts the policies, values, and principles of MATRIX Platform Ltd.",
];

const vendorViolations = [
  "Child labor in any form.",
  "Forced or bonded labor, whether overt or covert.",
  "Discrimination of any kind.",
  "Harassment, abuse, or inhumane treatment.",
  "Unauthorized subcontracting, including tier-2 operations.",
  "Failure to provide proper access to records, workers, or workplaces for compliance audits.",
  "Use of non-approved shared buildings or unsafe factory premises.",
  "Health, safety, environmental, or fire safety violations.",
  "Structural safety risks in buildings or facilities.",
  "Any unethical or unlawful business practices.",
];

function CodeOfConductPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(var(--brand) / 0.18), transparent 60%)",
            }}
          />
          <div className="container-x">
            <Reveal>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-brand"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back to home
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-6 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                  Matrix Platform Ltd
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 max-w-4xl text-section-title font-semibold tracking-tight">
                Code of Conduct &{" "}
                <span className="text-gradient-brand">Ethical Policy</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                The principles, standards and zero-tolerance policies that govern
                how every employee, vendor, factory and business partner of
                MATRIX Platform Ltd operates — every day, across every market.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Reporting channel */}
        <section className="pb-12">
          <div className="container-x">
            <Reveal>
              <div className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold sm:text-xl">
                        Report a concern
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Any individual may report a concern against any employee
                        or business partner through our official compliance and
                        ethics communication channel.
                      </p>
                    </div>
                  </div>
                  <a
                    href="mailto:ethics@matrixapparels.com"
                    className="tap-target inline-flex items-center justify-center gap-2 self-start rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-transform hover:scale-[1.02] sm:self-auto"
                  >
                    <Mail className="h-4 w-4" /> ethics@matrixapparels.com
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Employee Code */}
        <section className="py-12 md:py-16">
          <div className="container-x grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                  <Users className="h-3.5 w-3.5" /> Section 01
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Code of Conduct{" "}
                  <span className="text-gradient-brand">for Employees</span>
                </h2>
                <p className="mt-5 text-muted-foreground">
                  Any employee found engaging in any act, behavior, or conduct
                  that does not align with the values of MATRIX Platform Ltd or
                  violates the Employees' Compliance Code shall be subject to
                  disciplinary action. Such actions may be reported by any
                  individual against any employee or business partner through
                  the official compliance and ethics communication channels.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Email to Chief Ethics Officer (or Head of Ethics):
                  </span>{" "}
                  <a
                    href="mailto:ethics@matrixapparels.com"
                    className="text-brand hover:underline"
                  >
                    ethics@matrixapparels.com
                  </a>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="space-y-3">
                {employeeViolations.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-brand/40 hover:bg-surface-elevated"
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 text-xs font-bold text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Vendor Code */}
        <section className="border-t border-border bg-surface py-16 md:py-24">
          <div className="container-x grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                  <AlertTriangle className="h-3.5 w-3.5" /> Section 02
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Code of Conduct for{" "}
                  <span className="text-gradient-brand">Vendor Selection</span>
                </h2>
                <p className="mt-5 text-muted-foreground">
                  MATRIX Platform Ltd upholds the highest standards of honesty,
                  transparency, integrity, and fair business practices. The
                  Company will only engage with vendors, factories, and
                  business partners who comply with its Buyers' Code of Conduct
                  and Zero Tolerance Vendor (ZTV) Policy.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-destructive">
                  Zero Tolerance
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {vendorViolations.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand/40"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-destructive/30 bg-destructive/10 text-destructive">
                      <AlertTriangle className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Closing */}
        <section className="py-16 md:py-24">
          <div className="container-x">
            <Reveal>
              <div className="rounded-3xl border border-border bg-gradient-card p-8 text-center shadow-elegant md:p-14">
                <ShieldCheck className="mx-auto h-10 w-10 text-brand" />
                <h3 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
                  Compliance is built into how we operate.
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  These standards apply across every Matrix unit and partner
                  factory. To report a concern or request our full policy
                  document, contact our Chief Ethics Officer.
                </p>
                <a
                  href="mailto:ethics@matrixapparels.com"
                  className="tap-target mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-transform hover:scale-[1.02]"
                >
                  <Mail className="h-4 w-4" /> ethics@matrixapparels.com
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
