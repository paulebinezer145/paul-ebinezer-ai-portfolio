import { Reveal, SectionHeading, GlassCard } from "./ui";
import { Award } from "lucide-react";

const certs = [
  { name: "Python", issuer: "In Progress", status: "Planned" },
  { name: "SQL", issuer: "In Progress", status: "Planned" },
  { name: "Machine Learning", issuer: "In Progress", status: "Planned" },
  { name: "AWS", issuer: "In Progress", status: "Planned" },
  { name: "Power BI", issuer: "In Progress", status: "Planned" },
  { name: "Tableau", issuer: "In Progress", status: "Planned" },
];

export function Certifications() {
  return (
    <section id="certifications" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & Learning"
          subtitle="A roadmap of certifications reinforcing my Data Science and Machine Learning expertise."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 0.08}>
              <GlassCard tilt className="hover-glow h-full rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl glass glow-border">
                    <Award className="h-5 w-5 text-[color-mix(in_oklab,var(--glow)_85%,white)]" />
                  </div>
                  <span className="glass rounded-full px-3 py-1 text-xs text-muted-foreground">{c.status}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
