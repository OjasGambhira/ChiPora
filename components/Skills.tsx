import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const groups = Array.from(new Set(skills.map((s) => s.group)));

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-content">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
          Skills
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink dark:text-parchment md:text-5xl">
          The stack behind the work.
        </h2>

        <div className="mt-16 grid gap-16 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group}>
              <h3 className="mb-6 font-mono text-xs uppercase tracking-wide text-ink/50 dark:text-parchment/50">
                {group}
              </h3>
              <ul className="space-y-6">
                {skills
                  .filter((s) => s.group === group)
                  .map((skill) => (
                    <li key={skill.name}>
                      <div className="mb-2 flex items-baseline justify-between">
                        <span className="text-sm text-ink dark:text-parchment">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-moss dark:text-moss-light">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-[3px] w-full bg-ink/10 dark:bg-parchment/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full bg-brass"
                        />
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
