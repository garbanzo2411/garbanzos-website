"use client";

import { motion } from "framer-motion";

export default function ScrollCue({ targetId }: { targetId: string }) {
  return (
    <motion.button
      aria-label="Scroll to next section"
      onClick={() =>
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 8, 0] }}
      transition={{
        opacity: { duration: 0.6, delay: 2.5 },
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          delay: 3.1,
          ease: "easeInOut",
        },
      }}
      className="absolute bottom-9 left-1/2 -translate-x-1/2 text-ink bg-transparent border-none cursor-pointer
                 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-full"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </motion.button>
  );
}