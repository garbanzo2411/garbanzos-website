"use client";

import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-cream py-[130px] px-6"
    >
      <div className="relative max-w-[640px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-accent mb-2.5">
            Let&rsquo;s build something
          </p>
          <h2 className="font-display font-medium text-[clamp(2.4rem,5vw,3.6rem)] mb-2.5">
            Get In Touch
          </h2>
          <svg className="block mx-auto w-[180px] h-3.5 mb-8" viewBox="0 0 180 14">
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

          <p className="text-[1.02rem] leading-[1.7] text-ink/75 mb-12 max-w-[480px] mx-auto">
            I&rsquo;m always open to new opportunities, collaborations, or just
            talking shop about something you&rsquo;re building. Grab a copy of
            my resume, or reach out directly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-5 mb-6"
        >
          <a
            href="/Jacob Lazzarini Resume(Main)-5.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-cream font-semibold text-[0.95rem]
                       px-8 py-3.5 rounded-full shadow-[0_8px_24px_rgba(193,68,14,0.28)]
                       hover:shadow-[0_12px_32px_rgba(193,68,14,0.38)] hover:-translate-y-0.5
                       transition-all duration-200
                       focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12" />
              <path d="M7 10l5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            Download Resume
          </a>

          <a
            href="mailto:lazzarinijacob@gmail.com"
            className="inline-flex items-center gap-2 border-[1.5px] border-ink/15 text-ink font-medium text-[0.95rem]
                       px-8 py-3.5 rounded-full hover:bg-ink/5 hover:border-ink/25
                       transition-all duration-200
                       focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            Email Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="pt-16"
        >
          <p className="text-[0.78rem] text-ink/35">
            © {new Date().getFullYear()} Jacob Lazzarini. Built with Next.js & Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
