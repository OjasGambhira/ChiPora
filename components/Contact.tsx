import { motion } from "framer-motion";
import { siteMeta } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-content">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-brass"
        >
          Contact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-4 max-w-2xl text-balance font-display text-4xl leading-tight text-ink dark:text-parchment md:text-6xl"
        >
          Open to backend and cloud roles across Germany.
        </motion.h2>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          href={`mailto:${siteMeta.email}`}
          className="mt-10 inline-block border-b-2 border-brass font-display text-2xl text-ink transition hover:text-brass dark:text-parchment md:text-3xl"
        >
          {siteMeta.email}
        </motion.a>

        <div className="mt-16 flex flex-wrap gap-8">
          {siteMeta.social.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm uppercase tracking-wide text-ink/60 transition hover:text-brass dark:text-parchment/60"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
