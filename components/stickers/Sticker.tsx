"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type StickerProps = {
  children: ReactNode;
  className: string;       
  rotation: number;        
  size?: string;            
  label: string;            
  delay?: number;           
  floatDuration?: number;   
  floatRange?: number;      
};

export default function Sticker({
  children,
  className,
  rotation,
  size = "clamp(48px, 9vw, 86px)",
  label,
  delay = 0,
  floatDuration = 4,
  floatRange = 8,
}: StickerProps) {
  return (
    <motion.div
      title={label}
      aria-hidden="true"
      className={`absolute cursor-default drop-shadow-[0_6px_14px_rgba(43,38,34,0.18)] ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.6, rotate: rotation, y: 0 }}
      // Once scrolled into view: fade/scale in, then loop a gentle bob + slight tilt-sway forever
      whileInView={{
        opacity: 1,
        scale: 1,
        y: [0, -floatRange, 0],
        rotate: [rotation - 4, rotation + 4, rotation - 4],
      }}
      viewport={{ once: true }}
      // Hover overrides the idle loop with a full spin, then hands control back to the loop on mouse-leave
      whileHover={{
        rotate: rotation + 360,
        scale: 1.1,
        y: 0,
        transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
      }}
      transition={{
        opacity: { duration: 0.4, delay },
        scale: { type: "spring", stiffness: 260, damping: 16, delay },
        y: { duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: floatDuration * 1.4, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      {children}
    </motion.div>
  );
}