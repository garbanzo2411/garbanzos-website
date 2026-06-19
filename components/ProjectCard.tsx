"use client";

import { useRef } from "react";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);

    card.style.transform = `rotateX(${-dy * 10}deg) rotateY(${dx * 10}deg) scale(1.03)`;
    card.style.transition = "transform 0.08s ease";
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.transition = "transform 0.5s cubic-bezier(.2,.8,.2,1)";
  }

  return (
    /**
     * Outer scene div provides the perspective container.
     * The card itself handles tilt and hover state.
     */
    <div className="[perspective:900px]">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`
          relative w-[300px] rounded-[18px] overflow-hidden cursor-pointer
          bg-[#F9F5EE] border-2 border-ink/[0.18]
          [transform-style:preserve-3d]
          shadow-[0_4px_20px_rgba(43,38,34,0.10),0_1px_4px_rgba(43,38,34,0.08)]
          hover:shadow-[0_20px_60px_rgba(43,38,34,0.18),0_4px_12px_rgba(43,38,34,0.12),0_0_0_1.5px_rgba(232,200,122,0.5)]
          transition-shadow duration-200
          group
        `}
      >
        {/* Holographic shimmer overlay — fades in on hover via group-hover */}
        <div
          aria-hidden
          className="
            absolute inset-0 rounded-[18px] z-[2] pointer-events-none
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            mix-blend-overlay
          "
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, rgba(232,200,122,0) 0deg, rgba(232,200,122,0.22) 60deg, rgba(193,68,14,0.14) 120deg, rgba(92,107,115,0.18) 180deg, rgba(232,200,122,0.2) 240deg, rgba(193,68,14,0.12) 300deg, rgba(232,200,122,0) 360deg)",
          }}
        />

        {/* Inner gloss bevel */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-[18px] pointer-events-none z-[3]"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(0,0,0,0.04) 100%)",
          }}
        />

        {/* Pokémon-style coloured type bar at top */}
        <div
          className="h-2 w-full"
          style={{
            background: `linear-gradient(90deg, ${project.accentFrom} 0%, ${project.accentTo} 100%)`,
          }}
        />

        {/* Screenshot */}
        <div className="mx-3.5 mt-3.5 rounded-[10px] overflow-hidden border border-ink/10 aspect-[16/10] bg-mountain relative">
          <Image
            src={project.screenshot}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover"
            sizes="300px"
          />
        </div>

        {/* Card body */}
        <div className="px-4 pt-3.5 pb-10 relative z-[4]">
          {/* Thin gradient rule */}
          <div
            className="h-px mb-3"
            style={{ background: "linear-gradient(90deg, rgba(43,38,34,0.15) 0%, rgba(43,38,34,0.04) 100%)" }}
          />

          <h3 className="font-display text-[1.15rem] font-medium leading-tight mb-1.5">
            {project.title}
          </h3>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[0.66rem] font-semibold tracking-[0.07em] uppercase
                           text-accent bg-accent/[0.08] border border-accent/20
                           px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[0.84rem] leading-relaxed text-ink/75 mb-3.5">
            {project.description}
          </p>

          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold
                       text-accent no-underline transition-[gap] duration-200 hover:gap-2.5
                       focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
          >
            View project
            <svg
              width="13" height="13" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              aria-hidden
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>

        {/* Collector number — bottom-left */}
        <span className="absolute bottom-3.5 left-3.5 text-[0.62rem] text-ink/30 z-[4] tabular-nums">
          {project.id} / JL
        </span>
      </div>
    </div>
  );
}