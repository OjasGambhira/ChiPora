import { motion } from "framer-motion";
import { contentPillars } from "@/lib/data";

export default function Writing() {
  return (
    <section
      id="writing"
      className="bg-ink px-6 py-28 text-parchment dark:bg-ink/60 md:px-10"
    >
      <div className="mx-auto max-w-content">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
          Storytelling
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
          Old epics, told like they still matter.
        </h2>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-parchment/75">
          A slow-building body of work retelling the Mahabharata and
          Ramayana for readers who’ve never opened a version of either — with
          the psychology left in, not smoothed over.
        </p>

        <div className="mt-16 space-y-12">
          {contentPillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid gap-4 border-t border-parchment/15 pt-8 md:grid-cols-[24px_1fr]"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-2 w-2 rounded-full bg-brass"
              />
              <div>
                <h3 className="font-display text-2xl">{pillar.title}</h3>
                <p className="mt-3 max-w-prose leading-relaxed text-parchment/75">
                  {pillar.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
