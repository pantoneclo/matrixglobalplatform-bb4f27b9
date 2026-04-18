import { Reveal } from "@/components/Reveal";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import { Linkedin } from "lucide-react";

const team = [
  { name: "Shohel", role: "Managing Director", img: team1 },
  { name: "Michael Hayles", role: "Sourcing Director", img: team2 },
  { name: "Timo Karanko", role: "Buying Director", img: team3 },
];

export function Team() {
  return (
    <section className="relative bg-surface py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Our People
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Connect with our <span className="text-gradient-brand">key experts.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <article className="group relative overflow-hidden rounded-2xl border border-border bg-card hover-lift">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={m.img}
                    alt={`${m.name}, ${m.role}`}
                    loading="lazy"
                    width={768}
                    height={896}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="text-xl font-semibold">{m.name}</h3>
                    <p className="text-sm text-muted-foreground">{m.role}</p>
                  </div>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
                    aria-label={`${m.name} LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
