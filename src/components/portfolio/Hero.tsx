import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { MagneticButton, Counter } from "./ui";
import paulPhoto from "@/assets/paul-red-full.png";

const roles = ["Data Scientist", "Machine Learning Engineer"];

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    const speed = del ? 45 : 90;
    const t = setTimeout(() => {
      const next = del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
      setText(next);
      if (!del && next === word) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") {
        setDel(false);
        setI((v) => v + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

// Portrait visual with red accent shape and orbiting tech tags for the hero.
function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,var(--glow-soft),transparent)] blur-2xl pulse-glow" />
      {[0, 1].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-white/10"
          style={{ inset: `${ring * 8}%` }}
          animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 26 + ring * 8, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[color-mix(in_oklab,var(--glow)_90%,white)] shadow-[0_0_16px_var(--glow)]" />
        </motion.div>
      ))}

      {/* Portrait with clean red backdrop */}
      <div className="absolute inset-[8%] grid place-items-center">
        <div className="group relative h-full w-full">
          {/* Solid red squircle shape — matches reference style */}
          <div className="absolute inset-0 rounded-[38%_62%_58%_42%/48%_42%_58%_52%] bg-[#c41e3a] shadow-[0_0_60px_rgba(196,30,58,0.35)] transition-transform duration-700 group-hover:scale-105" />
          {/* Clean frame with white border */}
          <div className="absolute inset-[3%] overflow-hidden rounded-[38%_62%_58%_42%/48%_42%_58%_52%] border-[3px] border-white/90">
            <img
              src={paulPhoto}
              alt="Paul Ebinezer, Data Scientist and Machine Learning Engineer"
              className="absolute inset-0 h-full w-full object-cover object-[50%_12%] saturate-[1.05] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {["Python", "PyTorch", "SQL", "AWS", "ML", "NLP"].map((tag, idx) => {
        const angle = (idx / 6) * Math.PI * 2;
        return (
          <motion.span
            key={tag}
            className="glass absolute z-10 rounded-full px-3 py-1 text-xs font-medium"
            style={{
              left: `${(50 + 50 * Math.cos(angle)).toFixed(2)}%`,
              top: `${(50 + 50 * Math.sin(angle)).toFixed(2)}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut" }}
          >
            {tag}
          </motion.span>
        );
      })}
    </div>
  );
}

export function Hero() {
  const typed = useTyping(roles);
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-[color-mix(in_oklab,var(--glow)_90%,white)] shadow-[0_0_10px_var(--glow)]" />
            Open to Data Science & ML roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl"
          >
            <span className="text-primary">Hello, </span>
            <span className="text-foreground">I'm</span>
            <br />
            <span className="text-gradient">Paul Ebinezer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 font-display text-xl text-muted-foreground sm:text-2xl"
          >
            <span className="text-foreground">{typed}</span>
            <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-[color-mix(in_oklab,var(--glow)_90%,white)] align-middle" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground"
          >
            Building intelligent data-driven solutions through Machine Learning, Data Science, and
            modern software engineering to solve real-world challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <MagneticButton href="#projects" variant="primary">
              View Projects <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#resume" variant="outline">
              <Download className="h-4 w-4" /> Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              <Mail className="h-4 w-4" /> Contact Me
            </MagneticButton>
          </motion.div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-4">
            {[
              { n: 6, s: "+", l: "Projects" },
              { n: 10, s: "+", l: "Tools & Tech" },
              { n: 100, s: "%", l: "Commitment" },
            ].map((stat) => (
              <div key={stat.l} className="glass rounded-2xl p-4 text-center">
                <div className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                  <Counter to={stat.n} suffix={stat.s} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
