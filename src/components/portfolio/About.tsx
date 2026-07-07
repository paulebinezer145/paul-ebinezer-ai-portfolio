import { GlassCard, Reveal, SectionHeading } from "./ui";
import { Brain, Target, Rocket, TrendingUp } from "lucide-react";

const timeline = [
  { year: "Step 01", title: "Started Programming", desc: "Wrote my first lines of code and fell in love with problem solving." },
  { year: "Step 02", title: "Learned Python", desc: "Mastered Python for scripting, automation and data workflows." },
  { year: "Step 03", title: "Entered Data Science", desc: "Explored statistics, data cleaning, EDA and visualization." },
  { year: "Step 04", title: "Learning Machine Learning", desc: "Regression, classification, clustering and model evaluation." },
  { year: "Step 05", title: "Building AI Projects", desc: "Turning datasets into deployable, real-world AI solutions." },
  { year: "Step 06", title: "Preparing for Product Companies", desc: "Sharpening DSA, system design and interview readiness." },
];

const pillars = [
  { icon: Brain, title: "Passion for AI", desc: "Fascinated by how intelligent systems learn, reason and scale." },
  { icon: Target, title: "Why Data Science", desc: "I love turning messy data into decisions that create real value." },
  { icon: Rocket, title: "Career Objective", desc: "To engineer ML systems at a world-class technology company." },
  { icon: TrendingUp, title: "Always Learning", desc: "Continuously leveling up skills, tools and fundamentals." },
];

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="About Me"
          title="Aspiring Data Scientist & ML Engineer"
          subtitle="I transform complex data into meaningful insights and build scalable applications that solve real-world business problems."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <GlassCard tilt className="hover-glow h-full rounded-2xl p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl glass glow-border">
                  <p.icon className="h-5 w-5 text-[color-mix(in_oklab,var(--glow)_85%,white)]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="mb-8 text-center font-display text-2xl font-bold">My Journey</h3>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:left-1/2" />
            <div className="space-y-6">
              {timeline.map((t, i) => (
                <Reveal key={t.title} delay={i * 0.05}>
                  <div
                    className={`relative flex md:w-1/2 ${
                      i % 2 === 0 ? "md:ml-auto md:pl-10" : "md:pr-10 md:text-right"
                    } pl-10`}
                  >
                    <span
                      className={`absolute top-6 h-3 w-3 rounded-full bg-[color-mix(in_oklab,var(--glow)_90%,white)] shadow-[0_0_14px_var(--glow)] left-[9px] ${
                        i % 2 === 0 ? "md:-left-[27px]" : "md:left-auto md:-right-[21px]"
                      }`}
                    />
                    <GlassCard className="hover-glow w-full rounded-2xl p-5">
                      <span className="text-xs font-medium uppercase tracking-widest text-[color-mix(in_oklab,var(--glow)_80%,white)]">
                        {t.year}
                      </span>
                      <h4 className="mt-1 text-base font-semibold">{t.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                    </GlassCard>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
