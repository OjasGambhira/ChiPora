import { motion } from "framer-motion";
import { fitnessStats, fitnessPrinciples } from "@/lib/data";

export default function Fitness() {
  return (
    <section id="fitness" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-content">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
          Fitness
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink dark:text-parchment md:text-5xl">
          Rebuilding the frame, on purpose this time.
        </h2>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/80 dark:text-parchment/80">
          A lean, fast-metabolism build and a history of inconsistent
          training mean the plan matters more than the motivation. Here's
          the system currently running.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-6 border-y border-ink/10 py-10 dark:border-parchment/10 sm:grid-cols-4">
          {fitnessStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl text-moss dark:text-moss-light md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/50 dark:text-parchment/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {fitnessPrinciples.map((principle) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="border-l-2 border-brass/60 pl-6"
            >
              <h3 className="font-display text-xl text-ink dark:text-parchment">
                {principle.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink/75 dark:text-parchment/75">
                {principle.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
