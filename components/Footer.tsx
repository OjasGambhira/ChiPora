import { siteMeta } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 px-6 py-10 dark:border-parchment/10 md:px-10">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-4 text-sm text-ink/50 dark:text-parchment/50 md:flex-row md:items-center">
        <p>
          © {year} {siteMeta.name}. Built with Next.js, Tailwind, and Framer
          Motion.
        </p>
        <a href="#top" className="font-mono text-xs uppercase tracking-wide hover:text-brass">
          Back to top
        </a>
      </div>
    </footer>
  );
}
