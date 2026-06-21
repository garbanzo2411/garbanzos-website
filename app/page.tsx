import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <About />
    </main>
  );
}