import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FilmStripDivider from "@/components/FilmStripDivider";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <FilmStripDivider label="About" />
      <About />
      <Skills />
      <FilmStripDivider label="Projects" />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
