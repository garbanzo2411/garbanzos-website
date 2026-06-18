"use client";

import { motion } from "framer-motion";
import SkylineIllustration from "@/components/SkylineIllustration";
import ScrollCue from "@/choreography/ScrollCue";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 pt-32 pb-16">
      <div className="w-[min(960px,94vw)] mb-1">
        <SkylineIllustration />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="font-display font-medium text-[clamp(2.6rem,7vw,5.2rem)] -tracking-[0.01em] my-1 mb-3.5"
      >
        Jacob Lazzarini
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.95, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <p className="text-base text-ink/75 mb-1.5">
          Aspiring software engineer
        </p>
        <svg
          className="w-[220px] h-3.5 block mx-auto"
          viewBox="0 0 220 14"
        >
          <motion.path
            d="M2,7 Q20,0 38,7 T74,7 T110,7 T146,7 T182,7 T218,7"
            fill="none"
            stroke="#C1440E"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 1.95, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      <ScrollCue targetId="projects" />
    </section>
  );
}