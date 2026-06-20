import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />
      <Skills />

      {/* TODO: About section */}
      <section
        id="about"
        className="min-h-[50vh] flex items-center justify-center bg-cream-deep font-display text-2xl text-ink/40"
      >
        About — coming soon
      </section>
    </main>
  );
}