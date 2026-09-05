import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timeline } from "@/lib/data";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="bg-ink px-6 py-28 text-parchment dark:bg-ink/60 md:px-10"
    >
      <div className="mx-auto max-w-content">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
          Experience
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
          Requirements in, working systems out.
        </h2>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-parchment/75">
          Four years moving from foundational engineering work to leading a
          full migration and modernization effort — the constant across all
          of it has been translating what a business actually needs into
          something a system can reliably do.
        </p>

        <div ref={ref} className="relative mt-20 pl-8 md:pl-12">
          <div className="absolute left-0 top-0 h-full w-px bg-parchment/15 md:left-0" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-0 top-0 w-px bg-brass"
          />

          <ul className="space-y-16">
            {timeline.map((entry) => (
              <li key={entry.title} className="relative">
                <span className="absolute -left-8 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-brass md:-left-12" />
                <p className="font-mono text-xs uppercase tracking-wide text-brass">
                  {entry.year}
                </p>
                <h3 className="mt-2 font-display text-2xl md:text-3xl">
                  {entry.title}
                </h3>
                <p className="mt-1 text-sm text-parchment/60">{entry.org}</p>
                <p className="mt-4 max-w-prose leading-relaxed text-parchment/75">
                  {entry.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
