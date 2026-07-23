import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, X, Sparkles } from "lucide-react";
import { Reveal, SectionHeading, GlassCard } from "./ui";

type Project = {
  title: string;
  tag: string;
  summary: string;
  featured?: boolean;
  overview: string;
  problem: string;
  features: string[];
  stack: string[];
  challenges: string;
  outcomes: string;
};

const projects: Project[] = [
  {
    title: "Placement Decision System",
    tag: "Machine Learning",
    featured: true,
    summary: "An ML system that predicts student placement outcomes and supports data-driven hiring decisions.",
    overview: "An end-to-end machine learning application that analyzes academic and skill data to predict placement probability and guide decisions.",
    problem: "Institutions and recruiters struggle to objectively assess placement readiness from scattered academic and skill data.",
    features: [
      "Predictive placement scoring model",
      "Interactive analytics dashboard",
      "Feature importance explainability",
      "Batch and single-candidate predictions",
    ],
    stack: ["Python", "scikit-learn", "Pandas", "Streamlit", "Power BI"],
    challenges: "Handling imbalanced data, cleaning inconsistent records, and tuning models for reliable, explainable predictions.",
    outcomes: "Strengthened my grasp of the full ML lifecycle — from data cleaning and feature engineering to evaluation and deployment.",
  },
  {
    title: "Personal Finance Analyzer",
    tag: "Data Science",
    summary: "Categorizes spending and surfaces insights from personal transaction data.",
    overview: "A data-driven tool that analyzes personal spending patterns and visualizes budgets and trends.",
    problem: "People lack clear, automated insight into where their money goes each month.",
    features: ["Auto expense categorization", "Trend & budget dashboards", "Savings recommendations"],
    stack: ["Python", "Pandas", "Plotly"],
    challenges: "Designing robust categorization rules across messy transaction descriptions.",
    outcomes: "Practiced EDA, visualization and building intuitive analytics.",
  },
  {
    title: "ML Resume Analyzer",
    tag: "NLP",
    summary: "Scores resumes against job descriptions using NLP.",
    overview: "An NLP application that parses resumes and matches them to roles with actionable feedback.",
    problem: "Job seekers rarely know how well their resume aligns with a target role.",
    features: ["Keyword & skill matching", "ATS readiness score", "Improvement suggestions"],
    stack: ["Python", "spaCy", "TF-IDF"],
    challenges: "Reliable text extraction and semantic matching across formats.",
    outcomes: "Deepened understanding of NLP pipelines and text similarity.",
  },
  {
    title: "Customer Churn Prediction",
    tag: "Machine Learning",
    summary: "Predicts which customers are likely to churn.",
    overview: "A classification model identifying at-risk customers to enable proactive retention.",
    problem: "Businesses lose revenue by failing to identify churn early.",
    features: ["Churn probability scoring", "Key driver analysis", "Segment insights"],
    stack: ["Python", "scikit-learn", "XGBoost"],
    challenges: "Balancing precision and recall on imbalanced churn data.",
    outcomes: "Learned advanced classification and business-focused evaluation.",
  },
  {
    title: "Sales Forecast Dashboard",
    tag: "Analytics",
    summary: "Interactive BI dashboard forecasting future sales.",
    overview: "A forecasting dashboard combining time-series models with interactive BI visuals.",
    problem: "Teams need reliable forward-looking sales visibility.",
    features: ["Time-series forecasting", "Interactive filters", "KPI tracking"],
    stack: ["Python", "Power BI", "Prophet"],
    challenges: "Modeling seasonality and communicating uncertainty clearly.",
    outcomes: "Combined forecasting with strong data storytelling.",
  },
  {
    title: "Recommendation System",
    tag: "Machine Learning",
    summary: "Personalized recommendations from user behavior.",
    overview: "A recommender engine suggesting relevant items using collaborative filtering.",
    problem: "Users are overwhelmed by choice without personalization.",
    features: ["Collaborative filtering", "Similarity scoring", "Cold-start handling"],
    stack: ["Python", "Surprise", "NumPy"],
    challenges: "Addressing sparsity and cold-start problems.",
    outcomes: "Explored recommender architectures and evaluation metrics.",
  },
];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          subtitle="From end-to-end ML systems to analytics dashboards — click any project for a deep dive."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08} className={p.featured ? "md:col-span-2 lg:col-span-2" : ""}>
              <GlassCard
                tilt
                className="hover-glow group h-full cursor-pointer rounded-2xl p-6"
              >
                <button onClick={() => setActive(p)} className="flex h-full w-full flex-col text-left">
                  {p.featured && (
                    <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full glass px-3 py-1 text-xs glow-border">
                      <Sparkles className="h-3.5 w-3.5" /> Featured
                    </span>
                  )}
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs uppercase tracking-widest text-[color-mix(in_oklab,var(--glow)_80%,white)]">
                      {p.tag}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                  </div>
                  <h3 className={`mt-2 font-semibold ${p.featured ? "text-2xl" : "text-lg"}`}>{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {p.stack.slice(0, 3).map((s) => (
                      <span key={s} className="glass rounded-full px-2.5 py-1 text-xs text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </button>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong glow-border relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full glass hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <span className="text-xs uppercase tracking-widest text-[color-mix(in_oklab,var(--glow)_80%,white)]">
                {active.tag}
              </span>
              <h3 className="mt-2 text-3xl font-bold text-gradient">{active.title}</h3>

              <div className="mt-4 grid place-items-center rounded-2xl glass p-10 text-sm text-muted-foreground">
                Architecture diagram & screenshots — coming soon
              </div>

              <Block title="Overview" text={active.overview} />
              <Block title="Problem Statement" text={active.problem} />
              <div className="mt-5">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Key Features</h4>
                <ul className="mt-2 space-y-1.5">
                  {active.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color-mix(in_oklab,var(--glow)_90%,white)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Tech Stack</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {active.stack.map((s) => (
                    <span key={s} className="glass rounded-full px-3 py-1 text-xs">{s}</span>
                  ))}
                </div>
              </div>
              <Block title="Challenges" text={active.challenges} />
              <Block title="Learning Outcomes" text={active.outcomes} />

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground glow-border">
                  <Github className="h-4 w-4" /> GitHub Repository
                </a>
                <a href="#" className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className="mt-5">
      <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
