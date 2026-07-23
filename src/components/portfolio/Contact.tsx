import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle2, Code2, Trophy } from "lucide-react";
import { Reveal, SectionHeading, GlassCard } from "./ui";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/paulebinezer145" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/paulebinezer" },
  { icon: Trophy, label: "Kaggle", href: "#" },
  { icon: Code2, label: "LeetCode", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:j.paulebinezer@gmail.com" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Intelligent"
          subtitle="Open to internships, full-time roles and collaborations. Reach out anytime."
        />
        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <GlassCard className="hover-glow flex h-full flex-col justify-between rounded-2xl p-8">
              <div>
                <h3 className="text-xl font-semibold">Get in touch</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Whether it's an opportunity, a project or a question — I'd love to hear from you.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-xl glass transition-colors hover:border-[color-mix(in_oklab,var(--glow)_50%,transparent)] hover:text-foreground"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <GlassCard className="relative overflow-hidden rounded-2xl p-8">
              <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" />
                <Field label="Email" name="email" type="email" />
                <div className="sm:col-span-2">
                  <Field label="Subject" name="subject" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm text-muted-foreground">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full rounded-xl glass px-4 py-3 text-sm outline-none transition-colors focus:border-[color-mix(in_oklab,var(--glow)_60%,transparent)]"
                  />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground glow-border transition-opacity hover:opacity-90"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 grid place-items-center glass-strong"
                  >
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      className="text-center"
                    >
                      <CheckCircle2 className="mx-auto h-16 w-16 text-[color-mix(in_oklab,var(--glow)_85%,white)]" />
                      <p className="mt-3 text-lg font-semibold">Message sent!</p>
                      <p className="text-sm text-muted-foreground">I'll get back to you soon.</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm text-muted-foreground">{label}</label>
      <input
        required
        name={name}
        type={type}
        className="w-full rounded-xl glass px-4 py-3 text-sm outline-none transition-colors focus:border-[color-mix(in_oklab,var(--glow)_60%,transparent)]"
      />
    </div>
  );
}
