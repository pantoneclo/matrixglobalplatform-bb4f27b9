import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Matrix Platform" },
      {
        name: "description",
        content:
          "Hong Kong, Dhaka and Shaoxing offices. Looking for a manufacturing partner? We respond within 24 hours.",
      },
      { property: "og:title", content: "Get in Touch — Matrix Platform" },
      { property: "og:description", content: "Looking for a manufacturing partner? We'd love to hear from you." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
