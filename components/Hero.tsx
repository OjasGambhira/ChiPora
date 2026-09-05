import { motion } from "framer-motion";
import { siteMeta } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 md:px-10"
    >
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "60%" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-6 top-32 hidden w-px bg-current opacity-20 md:block md:left-10"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-content"
      >
        <motion.p
          variants={item}
          className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-brass"
        >
          {siteMeta.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-4xl font-display text-[13vw] font-medium leading-[0.95] tracking-tight text-ink dark:text-parchment sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {siteMeta.name}
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-4 max-w-2xl font-display text-xl italic text-moss dark:text-moss-light md:text-2xl"
        >
          {siteMeta.role}
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-8 max-w-prose text-balance text-lg leading-relaxed text-ink/80 dark:text-parchment/80"
        >
          {siteMeta.tagline} By day I move Azure workloads and REST APIs
          around a bank’s infrastructure. Off the clock, I chase forest light
          around NRW, retell old Indian epics for a modern reader, and try to
          out-eat a fast metabolism.
        </motion.p>

        <motion.div variants={item} className="mt-12 flex flex-wrap gap-4">
          <a
            href="#experience"
            className="border border-ink bg-ink px-6 py-3 font-mono text-xs uppercase tracking-wide text-parchment transition hover:bg-transparent hover:text-ink dark:border-parchment dark:bg-parchment dark:text-ink dark:hover:bg-transparent dark:hover:text-parchment"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="border border-ink/30 px-6 py-3 font-mono text-xs uppercase tracking-wide text-ink transition hover:border-brass hover:text-brass dark:border-parchment/30 dark:text-parchment"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
