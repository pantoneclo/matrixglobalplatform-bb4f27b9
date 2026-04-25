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
  Building2,
  Clock,
  GraduationCap,
  FileText,
  Sparkles,
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
  experience: string;
  description: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

const jobs: Job[] = [
  {
    id: "merchandiser-knit",
    title: "Senior Merchandiser — Knit",
    location: "Dhaka, Bangladesh",
    department: "Merchandising",
    type: "Full-time",
    experience: "5–8 years",
    description:
      "Lead knit programs from costing to delivery. Coordinate between buyers, fabric mills and production units to ensure on-time, on-spec output.",
    summary:
      "We are looking for a Senior Merchandiser to lead end-to-end knit programs for our European and US retail accounts. You will be the bridge between buyers, fabric mills and production floors.",
    responsibilities: [
      "Manage costing, sampling and bulk production for assigned knit accounts.",
      "Coordinate fabric and trim development with our Shaoxing mill and external partners.",
      "Track critical paths and drive on-time delivery across multiple production units.",
      "Negotiate prices, lead times and quality benchmarks with buyers.",
    ],
    requirements: [
      "5+ years of merchandising experience in knit apparel manufacturing.",
      "Strong understanding of yarn, fabric and garment costing.",
      "Excellent communication in English; Bangla a plus.",
      "Experience working with major European or US retailers.",
    ],
  },
  {
    id: "production-manager",
    title: "Production Manager",
    location: "Gazipur, Bangladesh",
    department: "Manufacturing",
    type: "Full-time",
    experience: "8–12 years",
    description:
      "Own daily floor performance across cutting, sewing and finishing lines. Drive efficiency, quality and worker welfare benchmarks.",
    summary:
      "Lead a multi-line production unit and own daily output, efficiency and quality KPIs. You will partner with IE, QA and HR to keep the floor running at world-class standards.",
    responsibilities: [
      "Own daily, weekly and monthly production targets across all lines.",
      "Drive efficiency improvements through line balancing and IE collaboration.",
      "Ensure compliance with safety, quality and worker welfare standards.",
      "Mentor floor supervisors and develop next-generation line leaders.",
    ],
    requirements: [
      "8+ years in apparel manufacturing with at least 3 years as a PM.",
      "Proven track record of running 20+ sewing lines.",
      "Strong knowledge of lean manufacturing and IE techniques.",
      "Bachelor's degree in Textile, Industrial Engineering or related field.",
    ],
  },
  {
    id: "fabric-sourcing",
    title: "Fabric Sourcing Specialist",
    location: "Shaoxing, China",
    department: "Sourcing",
    type: "Full-time",
    experience: "3–6 years",
    description:
      "Manage knit and woven fabric development with mill partners. Negotiate price, lead time and sustainable material substitutions.",
    summary:
      "Based at our Shaoxing fabric hub, you will source and develop knit and woven fabrics for buyers across our manufacturing group.",
    responsibilities: [
      "Develop new fabric qualities with mill partners and our in-house lab.",
      "Negotiate pricing, MOQs and lead times with vetted suppliers.",
      "Drive sustainable material substitutions (recycled, BCI, organic).",
      "Maintain a digital fabric library with full traceability data.",
    ],
    requirements: [
      "3+ years sourcing knit/woven fabrics in China or South Asia.",
      "Working knowledge of Mandarin and English.",
      "Experience with sustainability certifications (GRS, OCS, OEKO-TEX).",
      "Comfortable traveling between mills weekly.",
    ],
  },
  {
    id: "qa-lead",
    title: "Quality Assurance Lead",
    location: "Colombo, Sri Lanka",
    department: "Quality",
    type: "Full-time",
    experience: "5–8 years",
    description:
      "Implement AQL and inline inspection systems. Partner with production to reduce defects and improve first-pass yield.",
    summary:
      "Lead the QA function at our Sri Lanka unit and own the end-to-end quality system from inline checks to final inspection.",
    responsibilities: [
      "Set up and maintain AQL inspection protocols across all production lines.",
      "Drive root-cause analysis on rejections and reduce DHU.",
      "Coordinate buyer inspections and third-party audits.",
      "Train QA inspectors and line QCs on updated specifications.",
    ],
    requirements: [
      "5+ years in apparel QA, with at least 2 years in a lead role.",
      "Hands-on experience with AQL 2.5 / 4.0 sampling plans.",
      "Familiarity with buyer-specific quality manuals (M&S, Next, H&M).",
      "Strong English communication; Sinhala or Tamil a plus.",
    ],
  },
  {
    id: "trade-finance",
    title: "Trade Finance Analyst",
    location: "Hong Kong",
    department: "Finance",
    type: "Full-time",
    experience: "3–5 years",
    description:
      "Support LC, documentary collection and working-capital flows for cross-border shipments across our manufacturing group.",
    summary:
      "Join our Hong Kong trade finance desk to manage documentary credits, collections and working-capital flows for shipments across Asia and Europe.",
    responsibilities: [
      "Process and verify LC documents in line with UCP 600.",
      "Coordinate with banks, freight forwarders and overseas offices.",
      "Monitor receivables, payment terms and working capital cycles.",
      "Prepare monthly trade finance MIS for senior management.",
    ],
    requirements: [
      "3+ years in trade finance at a bank, trading house or manufacturer.",
      "Strong understanding of LC, BG and documentary collection.",
      "CDCS certification preferred.",
      "Proficiency in Excel and trade finance platforms.",
    ],
  },
  {
    id: "designer",
    title: "Apparel Designer — Loungewear",
    location: "Dhaka, Bangladesh",
    department: "Design",
    type: "Full-time",
    experience: "4–7 years",
    description:
      "Develop seasonal loungewear and nightwear concepts in partnership with brand customers. Build tech packs and proto samples.",
    summary:
      "Drive seasonal loungewear and nightwear collections in close partnership with our retail customers in Europe and the US.",
    responsibilities: [
      "Develop seasonal mood boards, color stories and silhouette concepts.",
      "Build complete tech packs with construction and trim specifications.",
      "Manage proto and salesman sample development with the sample room.",
      "Present collections to buyers in person and via virtual showrooms.",
    ],
    requirements: [
      "4+ years designing loungewear, nightwear or innerwear.",
      "Strong sketching and Adobe Illustrator skills.",
      "Knowledge of knit fabrics, prints and embellishments.",
      "Portfolio demonstrating commercial design judgment.",
    ],
  },
];

const GENERAL_SUBJECT = "General Application";

function CareersPage() {
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [detailsJob, setDetailsJob] = useState<Job | null>(null);
  const [generalOpen, setGeneralOpen] = useState(false);

  const openApplyForJob = (job: Job) => {
    setDetailsJob(null);
    setGeneralOpen(false);
    setActiveJob(job);
  };

  const openGeneralApply = () => {
    setDetailsJob(null);
    setActiveJob(null);
    setGeneralOpen(true);
  };

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
                  Don&apos;t see your role?{" "}
                  <button
                    type="button"
                    onClick={openGeneralApply}
                    className="font-medium text-brand underline-offset-4 transition-colors hover:underline"
                  >
                    Send your CV
                  </button>{" "}
                  and we&apos;ll keep it for future opportunities.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job, i) => (
                <Reveal key={job.id} delay={i * 0.05}>
                  <article className="group flex h-full flex-col rounded-2xl border border-border bg-gradient-card p-6 shadow-elegant transition-all hover:-translate-y-1 hover:border-brand/40">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
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
                    <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                      <button
                        onClick={() => setDetailsJob(job)}
                        className="tap-target inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => openApplyForJob(job)}
                        className="tap-target inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand hover:bg-brand/20"
                      >
                        Apply Now <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* General Application banner */}
            <Reveal delay={0.15}>
              <div className="mt-12 rounded-2xl border border-brand/30 bg-brand/5 p-6 sm:p-10">
                <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold sm:text-2xl">
                        General Application
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        Don&apos;t see a suitable role? Submit your CV and
                        we&apos;ll keep it for future opportunities across our
                        manufacturing group.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={openGeneralApply}
                    className="tap-target inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3 text-sm font-medium text-brand-foreground shadow-glow transition-transform hover:scale-[1.02] sm:w-auto"
                  >
                    Submit General CV <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />

      {detailsJob && (
        <DetailsModal
          job={detailsJob}
          onClose={() => setDetailsJob(null)}
          onApply={() => openApplyForJob(detailsJob)}
        />
      )}

      {activeJob && (
        <ApplyModal
          mode="job"
          job={activeJob}
          onClose={() => setActiveJob(null)}
        />
      )}

      {generalOpen && (
        <ApplyModal mode="general" onClose={() => setGeneralOpen(false)} />
      )}
    </div>
  );
}

/* ---------- Details Modal ---------- */

function DetailsModal({
  job,
  onClose,
  onApply,
}: {
  job: Job;
  onClose: () => void;
  onApply: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="details-title"
      className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-background/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative my-auto max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-border bg-gradient-card p-6 shadow-elegant sm:rounded-2xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
          Job Details
        </p>
        <h3
          id="details-title"
          className="mt-2 pr-10 text-2xl font-semibold leading-tight sm:text-3xl"
        >
          {job.title}
        </h3>

        {/* Meta row */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <MetaItem icon={MapPin} label="Location" value={job.location} />
          <MetaItem icon={Building2} label="Department" value={job.department} />
          <MetaItem icon={Clock} label="Type" value={job.type} />
          <MetaItem
            icon={GraduationCap}
            label="Experience"
            value={job.experience}
          />
        </div>

        {/* Summary */}
        <div className="mt-7">
          <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
            <FileText className="h-3.5 w-3.5" /> Job Summary
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {job.summary}
          </p>
        </div>

        {/* Responsibilities */}
        <div className="mt-7">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-brand">
            Key Responsibilities
          </h4>
          <ul className="mt-3 space-y-2.5">
            {job.responsibilities.map((r) => (
              <li
                key={r}
                className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="mt-7">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-brand">
            Requirements
          </h4>
          <ul className="mt-3 space-y-2.5">
            {job.requirements.map((r) => (
              <li
                key={r}
                className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer actions */}
        <div className="sticky bottom-0 -mx-6 mt-8 flex flex-col-reverse gap-3 border-t border-border bg-gradient-card/95 px-6 py-4 backdrop-blur sm:-mx-10 sm:flex-row sm:items-center sm:justify-end sm:px-10">
          <button
            onClick={onClose}
            className="tap-target inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
          >
            Close
          </button>
          <button
            onClick={onApply}
            className="tap-target inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3 text-sm font-medium text-brand-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function MetaItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background/40 p-3">
      <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3 w-3 text-brand" />
        {label}
      </div>
      <div className="mt-1 text-sm font-medium text-foreground">{value}</div>
    </div>
  );
}

/* ---------- Apply Modal ---------- */

type SubmitStatus = "idle" | "loading" | "success" | "error";
type ApplyMode = "job" | "general";

function ApplyModal({
  mode,
  job,
  onClose,
}: {
  mode: ApplyMode;
  job?: Job;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [fileName, setFileName] = useState<string>("");

  const isGeneral = mode === "general";
  const headerLabel = isGeneral ? "General Application" : "Apply for";
  const headerTitle = isGeneral ? "Submit your CV" : job?.title ?? "";
  const defaultSubject = isGeneral
    ? GENERAL_SUBJECT
    : `Application — ${job?.title ?? ""}`;

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
        className="relative my-auto max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-border bg-gradient-card p-6 shadow-elegant sm:rounded-2xl sm:p-10"
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
              {isGeneral ? (
                <>
                  Thank you for your interest in Matrix Platform. We&apos;ll
                  keep your CV on file and reach out when a suitable role opens.
                </>
              ) : (
                <>
                  Thank you for applying to{" "}
                  <span className="text-foreground">{job?.title}</span>. Our HR
                  team will review your application and get back to you shortly.
                </>
              )}
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
              {headerLabel}
            </p>
            <h3
              id="apply-title"
              className="mt-2 pr-10 text-2xl font-semibold leading-tight"
            >
              {headerTitle}
            </h3>
            {!isGeneral && job && (
              <div className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-brand" />
                {job.location}
              </div>
            )}
            {isGeneral && (
              <p className="mt-2 text-sm text-muted-foreground">
                Share your CV and we&apos;ll keep it on file for future
                opportunities.
              </p>
            )}

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
                  placeholder={
                    isGeneral
                      ? "General Application"
                      : "e.g. Application for Senior Merchandiser"
                  }
                  required
                  defaultValue={defaultSubject}
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Message{" "}
                  <span className="normal-case text-muted-foreground/70">
                    (optional)
                  </span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={
                    isGeneral
                      ? "Tell us about your background and the kind of role you're interested in..."
                      : "Tell us briefly about your experience..."
                  }
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
