import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-content">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
          Projects
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink dark:text-parchment md:text-5xl">
          Work that shipped, not slideware.
        </h2>

        <div className="mt-16 divide-y divide-ink/10 border-y border-ink/10 dark:divide-parchment/10 dark:border-parchment/10">
          {projects.map((project, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={project.title}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className="group relative grid gap-4 py-8 md:grid-cols-[2fr_3fr] md:gap-10"
              >
                <motion.span
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-0 h-px bg-brass"
                />
                <h3 className="font-display text-2xl text-ink transition-colors duration-300 group-hover:text-brass dark:text-parchment md:text-3xl">
                  {project.title}
                </h3>
                <div>
                  <p className="max-w-prose leading-relaxed text-ink/75 dark:text-parchment/75">
                    {project.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="border border-ink/20 px-3 py-1 font-mono text-xs uppercase tracking-wide text-ink/60 dark:border-parchment/20 dark:text-parchment/60"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
