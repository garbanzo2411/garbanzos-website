import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />

      {/* TODO: Skills section */}
      <section
        id="skills"
        className="min-h-[50vh] flex items-center justify-center bg-cream font-display text-2xl text-ink/40"
      >
        Skills — coming soon
      </section>

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