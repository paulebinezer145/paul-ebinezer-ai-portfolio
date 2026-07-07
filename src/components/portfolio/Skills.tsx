import { Reveal, SectionHeading, GlassCard } from "./ui";
import { Code2, Database, BrainCircuit, Wrench } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Python", "Java", "SQL", "HTML", "CSS"],
  },
  {
    icon: Database,
    title: "Data Science",
    skills: ["Data Cleaning", "Data Visualization", "Exploratory Data Analysis", "Feature Engineering"],
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    skills: ["Regression", "Classification", "Clustering", "Model Evaluation"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Power BI", "Tableau", "Excel", "Git", "GitHub", "AWS", "Linux", "Jupyter", "VS Code", "Figma"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Toolkit"
          subtitle="A growing arsenal across programming, data science, machine learning and modern developer tools."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <GlassCard tilt className="hover-glow h-full rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl glass glow-border">
                    <g.icon className="h-5 w-5 text-[color-mix(in_oklab,var(--glow)_85%,white)]" />
                  </div>
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="glass rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-[color-mix(in_oklab,var(--glow)_50%,transparent)] hover:text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
