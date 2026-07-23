import { Reveal, SectionHeading, GlassCard, MagneticButton } from "./ui";
import { Briefcase, CheckCircle2 } from "lucide-react";

const ready = [
  "Available for internships & full-time roles",
  "Strong foundation in Python, ML & Data Science",
  "Hands-on with real, end-to-end ML projects",
  "Fast learner, collaborative and product-minded",
];

export function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Experience"
          title="Open to Opportunities"
          subtitle="A professional timeline ready to grow with internships and full-time roles."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="hover-glow h-full rounded-2xl p-8">
              <div className="grid h-12 w-12 place-items-center rounded-xl glass glow-border">
                <Briefcase className="h-6 w-6 text-[color-mix(in_oklab,var(--glow)_85%,white)]" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Ready to Contribute</h3>
              <p className="mt-3 text-muted-foreground">
                I'm actively seeking opportunities to apply my Data Science and Machine Learning
                skills on impactful problems. This space will soon showcase internships and
                professional roles.
              </p>
              <div className="mt-6">
                <MagneticButton href="#contact" variant="primary">
                  Hire Me
                </MagneticButton>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="hover-glow h-full rounded-2xl p-8">
              <h3 className="text-lg font-semibold">Why me right now</h3>
              <ul className="mt-5 space-y-4">
                {ready.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color-mix(in_oklab,var(--glow)_85%,white)]" />
                    <span className="text-sm text-muted-foreground">{r}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {["Data Scientist", "ML Engineer"].map((t) => (
                  <div key={t} className="glass rounded-xl p-3 text-center text-xs text-muted-foreground">
                    {t}
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
