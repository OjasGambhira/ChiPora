import { motion } from "framer-motion";
import { gallery } from "@/lib/data";

export default function Photography() {
  return (
    <section
      id="photography"
      className="bg-moss-deep px-6 py-28 text-parchment md:px-10"
    >
      <div className="mx-auto max-w-content">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
          Photography
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
          NRW, mostly at the edges of the day.
        </h2>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-parchment/75">
          Studies from the hills and rivers around Solingen — I go out for
          the quiet more than the shot, and the good frames tend to show up
          anyway.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {gallery.map((item) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-4">
                <p className="font-display text-xl">{item.title}</p>
                <p className="font-mono text-xs uppercase tracking-wide text-brass">
                  {item.location}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-parchment/70">
                  {item.note}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
