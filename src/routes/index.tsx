import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NeuralBackground } from "@/components/portfolio/NeuralBackground";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Education } from "@/components/portfolio/Education";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paul Ebinezer | Data Scientist & Machine Learning Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Paul Ebinezer showcasing Data Science and Machine Learning projects, technical skills, certifications, education, and professional portfolio.",
      },
      { property: "og:title", content: "Paul Ebinezer | Data Scientist & Machine Learning Engineer" },
      {
        property: "og:description",
        content:
          "Premium Data Science & Machine Learning portfolio — projects, skills, certifications and more.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-background"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="mx-auto h-12 w-12 rounded-full border-2 border-white/10 border-t-[color-mix(in_oklab,var(--glow)_90%,white)]"
        />
        <p className="mt-4 font-display text-sm tracking-widest text-muted-foreground">
          PAUL EBINEZER
        </p>
      </div>
    </motion.div>
  );
}

function Spotlight() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{
        background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, var(--glow-soft), transparent 70%)`,
        opacity: 0.5,
      }}
    />
  );
}

function Index() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <NeuralBackground />
      <Spotlight />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
