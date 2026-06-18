import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <main>
            <Nav />
            <Hero />

            <section
                id = "projects"
                className = "min-h-[70vh] flex items-center justify-center bg-cream-deep font-display text-2xl text-ink/60"
            >
                <p>Projects will be displayed here</p>
            </section>
        </main>
    
    );
}