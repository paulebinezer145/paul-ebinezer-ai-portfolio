import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Certifications", "certifications"],
  ["Education", "education"],
  ["Resume", "resume"],
  ["Contact", "contact"],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300",
          scrolled ? "glass-strong glow-border" : "glass",
        )}
      >
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">PE</span>
          <span className="hidden sm:block">Paul Ebinezer</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={cn(
                "rounded-full px-3 py-2 text-sm transition-colors",
                active === id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground glow-border transition-opacity hover:opacity-90 lg:inline-block"
        >
          Let's Talk
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-9 w-9 place-items-center rounded-full glass lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-strong absolute inset-x-4 top-20 rounded-2xl p-4 lg:hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {links.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
