"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
];

const socials = [
  { href: "https://github.com/garbanzo2411", label: "GitHub", Icon: FaGithub },
  { href: "https://www.linkedin.com/in/jacob-lazzarini-884389371/?skipRedirect=true", label: "LinkedIn", Icon: FaLinkedin },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 0.7, delay: 2.0, ease: "easeOut" }}
      className="fixed top-6 left-1/2 z-10 flex w-fit items-center gap-9
                 px-7 py-3 rounded-full border border-ink/10 bg-cream/70
                 backdrop-blur-md shadow-lg"
    >
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="font-display font-medium text-lg text-left text-ink transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
        aria-label="Scroll to top"
      >
        JL
      </button>
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

      <div className="flex items-center gap-3.5 pl-3.5 border-l border-ink/10">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-ink/65 hover:text-accent transition-colors duration-200
                       focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
