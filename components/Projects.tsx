"use client";

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            id = "projects"
            ref = {sectionRef}
            className = "py-[120px] px-6 bg-cream-deep overflow-hidden"
        >
            {/* Section header */}
            <div className = "text-center mb-[72px]">
                <p className = "text-[0.78rem] font-semibold tracking-[0.12rem] uppercase text-accent mb-2.5">
                    Selected Works
                </p>
                <h2 className = "font-display font-medium text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.1] mb-2.5">
                    Projects
                </h2>
                <svg className = "block mx-auto w-[180px] h-3.5" viewBox = "0 0 180 14">
                    <motion.path
                        d = "M2, 7 Q16, 0 30, R58, 7 T86, 7 T114, 7 T142, 7 T170, 7 T178, 7"
                        fill = "none"
                        stroke = "#C1440E"
                        strokeWidth = "2.5"
                        strokeLinecap = "round"
                        initial = {{ pathLength: 0 }}
                        whileInView = {{ pathLength: 1 }}
                        viewport = {{ once: true, amount: 0.8 }}
                        transition = {{ duration: 0.6, ease: "easeInOut" }}
                    />  
                </svg>
            </div>

            {/* Project Card Grid */}
            <div className = "flex flex-wrap gap-9 justify-center items-start max-w-[1100px] mx-auto">
                {projects.map((project, i) => (
                    <CardReveal key = {project.id} index = {i}>
                        <ProjectCard project = {project} />
                    </CardReveal>
                ))}
            </div>
        </section>
    );
}

/**
 * Wraps each card in a scroll-triggered fade+rise reveal,
 * Staggered by index so they appear one after the other
 */

function CardReveal({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
}