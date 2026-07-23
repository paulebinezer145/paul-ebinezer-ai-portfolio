import { Reveal, SectionHeading, GlassCard } from "./ui";
import { GraduationCap, BookOpen } from "lucide-react";

const coursework = [
  "Statistics & Probability",
  "Machine Learning",
  "Data Structures & Algorithms",
  "Database Management",
  "Data Visualization",
  "Big Data Fundamentals",
];

export function Education() {
  return (
    <section id="education" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          subtitle="Foundations that shaped my analytical thinking and technical skills."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="hover-glow h-full rounded-2xl p-8">
              <div className="grid h-12 w-12 place-items-center rounded-xl glass glow-border">
                <GraduationCap className="h-6 w-6 text-[color-mix(in_oklab,var(--glow)_85%,white)]" />
              </div>
              <h3 className="mt-5 text-xl font-bold">Bachelor's Degree in Data Science</h3>
              <p className="mt-2 text-sm text-muted-foreground">Final Year Student</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="glass rounded-xl p-4">
                  <div className="text-xs text-muted-foreground">Graduation</div>
                  <div className="mt-1 font-display text-lg font-semibold">2026</div>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="text-xs text-muted-foreground">CGPA</div>
                  <div className="mt-1 font-display text-lg font-semibold">7.5</div>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="hover-glow h-full rounded-2xl p-8">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl glass glow-border">
                  <BookOpen className="h-5 w-5 text-[color-mix(in_oklab,var(--glow)_85%,white)]" />
                </div>
                <h3 className="text-lg font-semibold">Relevant Coursework</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span key={c} className="glass rounded-full px-3 py-1.5 text-sm text-muted-foreground">
                    {c}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
