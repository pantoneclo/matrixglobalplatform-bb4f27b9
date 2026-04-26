import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Download, Loader2, Mail, User, X, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

type Props = {
  open: boolean;
  onClose: () => void;
  /** What the visitor is downloading, e.g. "Matrix Group Profile" or "IFS Texwear Profile" */
  resourceTitle: string;
  /** Optional file URL — when provided, the browser is sent to it after submit */
  fileUrl?: string;
  /** Optional filename for the download attribute */
  fileName?: string;
};

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name" })
    .max(80, { message: "Name is too long" }),
  company: z
    .string()
    .trim()
    .min(2, { message: "Please enter your company name" })
    .max(120, { message: "Company name is too long" }),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email address" })
    .max(160, { message: "Email is too long" }),
});

export function DownloadGateModal({
  open,
  onClose,
  resourceTitle,
  fileUrl,
  fileName,
}: Props) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Lock scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Reset state when reopened
  useEffect(() => {
    if (open) {
      setSuccess(false);
      setErrors({});
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, company, email });
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]?.toString();
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    // Simulate submission — ready for backend wiring later
    await new Promise((r) => setTimeout(r, 700));

    setSubmitting(false);
    setSuccess(true);
    toast.success("Thank you — your download is starting.");

    // Trigger file download if provided
    if (fileUrl) {
      const a = document.createElement("a");
      a.href = fileUrl;
      if (fileName) a.download = fileName;
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }

    // Auto-close after a moment
    setTimeout(() => {
      onClose();
      setName("");
      setCompany("");
      setEmail("");
    }, 1600);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-modal="true"
          role="dialog"
          aria-labelledby="download-gate-title"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Card */}
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-t-2xl border border-border bg-card shadow-elegant sm:rounded-2xl"
          >
            {/* Subtle glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-brand/15 blur-3xl" />

            {/* Header */}
            <div className="relative flex items-start justify-between gap-4 border-b border-border/70 px-6 py-5 sm:px-7">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 ring-1 ring-brand/30">
                  <Download className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                    Download
                  </p>
                  <h2
                    id="download-gate-title"
                    className="mt-0.5 text-lg font-semibold tracking-tight text-foreground"
                  >
                    {resourceTitle}
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="tap-target -mr-2 -mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                aria-label="Close dialog"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            {success ? (
              <div className="relative flex flex-col items-center justify-center px-6 py-10 text-center sm:px-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 ring-1 ring-brand/30">
                  <CheckCircle2 className="h-7 w-7 text-brand" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">All set</h3>
                <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                  Your download is starting. We've also noted your interest and
                  will be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative space-y-4 px-6 py-6 sm:px-7"
                noValidate
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Share a few details and we'll send the file straight to your
                  browser.
                </p>

                {/* Name */}
                <div>
                  <label
                    htmlFor="dg-name"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Full name
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="dg-name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-border bg-background/60 px-10 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand/60 focus:ring-2 focus:ring-brand/20"
                      maxLength={80}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="dg-company"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Company
                  </label>
                  <div className="relative">
                    <Building2 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="dg-company"
                      type="text"
                      autoComplete="organization"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your company"
                      className="w-full rounded-xl border border-border bg-background/60 px-10 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand/60 focus:ring-2 focus:ring-brand/20"
                      maxLength={120}
                    />
                  </div>
                  {errors.company && (
                    <p className="mt-1 text-xs text-destructive">{errors.company}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="dg-email"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Work email
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="dg-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-border bg-background/60 px-10 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand/60 focus:ring-2 focus:ring-brand/20"
                      maxLength={160}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                  )}
                </div>

                {/* Footer */}
                <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[11px] leading-relaxed text-muted-foreground">
                    By downloading, you agree to be contacted about Matrix
                    Platform programs.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="tap-target inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4" />
                        Get the file
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
