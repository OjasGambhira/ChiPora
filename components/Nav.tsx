import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-brass"
      />
      <header
        className={`fixed top-0 z-40 w-full transition-colors duration-500 ${
          scrolled
            ? "bg-parchment/90 dark:bg-ink/90 backdrop-blur-sm border-b border-ink/10 dark:border-parchment/10"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
          <a
            href="#top"
            className="font-display text-lg tracking-tight text-ink dark:text-parchment"
          >
            Ganesh<span className="text-brass">.</span>
          </a>

          <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-wide text-ink/70 dark:text-parchment/70 lg:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="transition hover:text-brass">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden"
            >
              <span
                className={`h-px w-6 bg-current transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-6 bg-current transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-6 bg-current transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>

        {open && (
          <ul className="flex flex-col gap-1 border-t border-ink/10 bg-parchment px-6 py-4 font-mono text-sm uppercase tracking-wide dark:border-parchment/10 dark:bg-ink lg:hidden">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 transition hover:text-brass"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
}
