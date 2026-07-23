const links = ["Home", "About", "Skills", "Projects", "Resume", "Contact"];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">PE</span>
              Paul Ebinezer
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Data Scientist & Machine Learning Engineer building intelligent, data-driven solutions.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Quick Navigation</h4>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="https://github.com/paulebinezer145" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
              <a href="https://linkedin.com/in/paulebinezer" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
              <a href="#" className="hover:text-foreground">Kaggle</a>
              <a href="#" className="hover:text-foreground">LeetCode</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-muted-foreground">
          © 2026 Paul Ebinezer. Designed and Developed with React, Next.js, Tailwind CSS, and Framer Motion.
        </div>
      </div>
    </footer>
  );
}
