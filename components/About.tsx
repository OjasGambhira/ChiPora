import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 py-28 md:px-10">
      <div className="mx-auto grid max-w-content gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
            About
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink dark:text-parchment md:text-5xl">
            Two disciplines, one habit of finishing what I start.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 text-lg leading-relaxed text-ink/80 dark:text-parchment/80"
        >
          <p>
            I grew up on Indian epics before I ever wrote a line of code, and
            the two turned out to share more than I expected: both reward
            structure, patience, and a willingness to redo something until it
            actually holds together. That's roughly the throughline of my
            work — whether the system in question is a bank's cloud
            infrastructure or a retelling of a three-thousand-year-old story.
          </p>
          <p>
            Professionally, I'm a backend and cloud developer based in
            Düsseldorf, currently working as an Analyst IT at Targobank. I
            spend my days in Azure PaaS, .NET services, and the unglamorous
            but essential work of requirements analysis and technical
            documentation — the layer that keeps a migration from turning
            into chaos.
          </p>
          <p>
            Outside of that, I'm rebuilding my body the same way I'd approach
            a system migration: deliberately, with a plan, and without
            skipping the unglamorous steps. I shoot the quiet nature spots
            around Solingen and NRW when the light is right, and I write —
            mostly toward a modern, psychologically grounded retelling of
            Indian mythology I'm slowly building in public.
          </p>
          <p className="text-ink dark:text-parchment">
            The goal, short term: a backend or cloud developer role at a top
            German company where the engineering standards match the ones I
            hold myself to.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
