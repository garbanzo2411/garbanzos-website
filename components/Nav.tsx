"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 2.0, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-9
                 px-7 py-3 rounded-full border border-ink/10 bg-cream/70
                 backdrop-blur-md shadow-lg"
    >
      <span className="font-display font-medium text-lg">JL</span>
      <ul className="flex gap-7 list-none">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="relative text-sm font-medium text-ink no-underline
                         after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                         after:bg-accent after:transition-all after:duration-200
                         hover:after:w-full focus-visible:after:w-full
                         focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}