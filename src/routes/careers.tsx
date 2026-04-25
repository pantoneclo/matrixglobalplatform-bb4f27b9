import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  MapPin,
  Upload,
  X,
  Loader2,
  AlertCircle,
} from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Matrix Platform" },
      {
        name: "description",
        content:
          "Join Matrix Platform — explore open roles across our integrated manufacturing group in Bangladesh, China, Sri Lanka and Hong Kong.",
      },
      { property: "og:title", content: "Careers at Matrix Platform" },
      {
        property: "og:description",
        content:
          "Build your career with an integrated manufacturing group spanning Bangladesh, China, Sri Lanka and Hong Kong.",
      },
    ],
  }),
  component: CareersPage,
});

type Job = {
  id: string;
  title: string;
  location: string;
  department: string;
  type: string;
  description: string;
};

const jobs: Job[] = [
  {
    id: "merchandiser-knit",
    title: "Senior Merchandiser — Knit",
    location: "Dhaka, Bangladesh",
    department: "Merchandising",
    type: "Full-time",
    description:
      "Lead knit programs from costing to delivery. Coordinate between buyers, fabric mills and production units to ensure on-time, on-spec output.",
  },
  {
    id: "production-manager",
    title: "Production Manager",
    location: "Gazipur, Bangladesh",
    department: "Manufacturing",
    type: "Full-time",
    description:
      "Own daily floor performance across cutting, sewing and finishing lines. Drive efficiency, quality and worker welfare benchmarks.",
  },
  {
    id: "fabric-sourcing",
    title: "Fabric Sourcing Specialist",
    location: "Shaoxing, China",
    department: "Sourcing",
    type: "Full-time",
    description:
      "Manage knit and woven fabric development with mill partners. Negotiate price, lead time and sustainable material substitutions.",
  },
  {
    id: "qa-lead",
    title: "Quality Assurance Lead",
    location: "Colombo, Sri Lanka",
    department: "Quality",
    type: "Full-time",
    description:
      "Implement AQL and inline inspection systems. Partner with production to reduce defects and improve first-pass yield.",
  },
  {
    id: "trade-finance",
    title: "Trade Finance Analyst",
    location: "Hong Kong",
    department: "Finance",
    type: "Full-time",
    description:
      "Support LC, documentary collection and working-capital flows for cross-border shipments across our manufacturing group.",
  },
  {
    id: "designer",
    title: "Apparel Designer — Loungewear",
    location: "Dhaka, Bangladesh",
    department: "Design",
    type: "Full-time",
    description:
      "Develop seasonal loungewear and nightwear concepts in partnership with brand customers. Build tech packs and proto samples.",
  },
];

function CareersPage() {
  const [activeJob, setActiveJob] = useState<Job | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-20 md:pt-48">
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
                  <Briefcase className="h-5 w-5" />
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand sm:text-xs sm:tracking-[0.3em]">
                  Careers
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 max-w-4xl text-display font-semibold">
                Careers at{" "}
                <span className="text-gradient-brand">Matrix Platform</span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg">
                Join an integrated manufacturing group bridging China, Bangladesh
                and Sri Lanka. We hire people who care about craft, accountability
                and the long term.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Job listings */}
        <section className="py-14 md:py-20">
          <div className="container-x">
            <Reveal>
              <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                    Open Roles
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                    Find your <span className="text-gradient-brand">next role</span>
                  </h2>
                </div>
                <p className="max-w-md text-sm text-muted-foreground">
                  Don&apos;t see your role? Send your CV to{" "}
                  <a
                    href="mailto:hr@matrixapparels.com"
                    className="text-brand hover:underline"
                  >
                    hr@matrixapparels.com
                  </a>
                  .
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job, i) => (
                <Reveal key={job.id} delay={i * 0.05}>
                  <article className="group flex h-full flex-col rounded-2xl border border-border bg-gradient-card p-6 shadow-elegant transition-all hover:-translate-y-1 hover:border-brand/40">
                    <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      <span className="rounded-full border border-border px-2.5 py-0.5">
                        {job.department}
                      </span>
                      <span className="rounded-full border border-border px-2.5 py-0.5">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold leading-snug">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 text-brand" />
                      {job.location}
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {job.description}
                    </p>
                    <button
                      onClick={() => setActiveJob(job)}
                      className="tap-target mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand hover:bg-brand/20"
                    >
                      Apply Now <ArrowRight className="h-4 w-4" />
                    </button>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {activeJob && (
        <ApplyModal job={activeJob} onClose={() => setActiveJob(null)} />
      )}
    </div>
  );
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

function ApplyModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [fileName, setFileName] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // Simulated submission — backend integration sends to hr@matrixapparels.com
      await new Promise((res) => setTimeout(res, 1200));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="apply-title"
      className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-background/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-2xl rounded-t-2xl border border-border bg-gradient-card p-6 shadow-elegant sm:rounded-2xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
        >
          <X className="h-4 w-4" />
        </button>

        {status === "success" ? (
          <div className="py-8 text-center">
            <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/15 text-brand">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold">
              Application submitted successfully
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Thank you for applying to{" "}
              <span className="text-foreground">{job.title}</span>. Our HR team
              will review your application and get back to you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3 text-sm font-medium text-brand-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Apply for
            </p>
            <h3 id="apply-title" className="mt-2 text-2xl font-semibold">
              {job.title}
            </h3>
            <div className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              {job.location}
            </div>

            <form onSubmit={handleSubmit} className="mt-7 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                />
                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+880 1XXX XXXXXX"
                  required
                />
                <Field
                  label="Subject"
                  name="subject"
                  placeholder="e.g. Application for Senior Merchandiser"
                  required
                  defaultValue={`Application — ${job.title}`}
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Message <span className="normal-case text-muted-foreground/70">(optional)</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us briefly about your experience..."
                  className="w-full resize-none rounded-lg border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Upload CV <span className="text-brand">*</span>
                </label>
                <label className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-dashed border-border bg-background/50 px-4 py-3 text-sm transition-colors hover:border-brand">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Upload className="h-4 w-4 text-brand" />
                    {fileName || "PDF, DOC or DOCX up to 5MB"}
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground">
                    Choose file
                  </span>
                  <input
                    required
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) =>
                      setFileName(e.target.files?.[0]?.name ?? "")
                    }
                    className="hidden"
                  />
                </label>
              </div>

              {status === "error" && (
                <div className="flex items-start gap-2 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  Something went wrong. Please try again or email
                  hr@matrixapparels.com directly.
                </div>
              )}

              <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">
                  By applying you agree to our recruitment privacy policy.
                </p>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="tap-target inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3 text-sm font-medium text-brand-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
      />
    </div>
  );
}
