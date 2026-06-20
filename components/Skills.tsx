"use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills, categoryColors } from "@/lib/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-[120px] px-6">
      <div className="text-center mb-16">
        <p className="text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-accent mb-2.5">
          What I work with
        </p>
        <h2 className="font-display font-medium text-[clamp(2.4rem,5vw,3.6rem)] mb-2.5">
          Skills
        </h2>
        <svg className="block mx-auto w-[180px] h-3.5" viewBox="0 0 180 14">
          <motion.path
            d="M2,7 Q16,0 30,7 T58,7 T86,7 T114,7 T142,7 T170,7 T178,7"
            fill="none"
            stroke="#C1440E"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className = "flex flex-wrap justify-center items-center gap-x-3.5 gap-y-4.5 max-w-[720px] mx-auto">
        {skills.map((skill, i) => (
            <SkillPill key = {skill.name} skill = {skill} index = {i} />
        ))}
      </div>
    </section>
    );
}

function SkillPill({
    skill,
    index,
}: {
    skill: (typeof skills)[number];
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.4});
    const dotColor = categoryColors[skill.category];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16, rotate: skill.rotation }}
            animate={inView ? { opacity: 1, y: 0, rotate: skill.rotation } : {}}
            whileHover={{ y: -4, rotate: 0 }}
            transition={{
                opacity: { duration: 0.5, delay: index * 0.08 },
                y: { duration: 0.3, ease: [0.2, 0.8, 0.2, 1] },
                rotate: { duration: 0.25 },
             }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full
                 bg-[#F9F5EE] border-[1.5px] border-ink/[0.12]
                 shadow-[0_2px_8px_rgba(43,38,34,0.06)]
                 hover:shadow-[0_10px_24px_rgba(43,38,34,0.14)]
                 text-[0.92rem] font-medium cursor-default"
            style={{ borderColor: undefined }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = dotColor)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
        >
            <span
                className="w-[7px] h-[7px] rounded-full flex-shrink-0"
                style={{ backgroundColor: dotColor }}
        />
        <span className="text-[18px] leading-none text-ink/80 flex-shrink-0">
            {skill.icon}
        </span>
      <span>{skill.name}</span>
    </motion.div>
  );
}
