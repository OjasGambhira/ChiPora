import Head from "next/head";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Photography from "@/components/Photography";
import Fitness from "@/components/Fitness";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { siteMeta } from "@/lib/data";

export default function Home() {
  const title = `${siteMeta.name} — ${siteMeta.role}`;
  const description = siteMeta.tagline;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="theme-color" content="#12181B" />
      </Head>

      <main className="min-h-screen bg-parchment text-ink transition-colors duration-500 dark:bg-ink dark:text-parchment">
        <Nav />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Photography />
        <Fitness />
        <Writing />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
