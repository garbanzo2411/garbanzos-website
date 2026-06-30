"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Sticker from "@/components/stickers/Sticker";
import {
  FootballSticker,
  SoccerBallSticker,
  LaptopSticker,
  TradingCardSticker,
  AirplaneSticker,
  ControllerSticker,
} from "@/components/stickers/StickerIcons";

export default function About() {
  return (
    <section id="about" className="relative z-0 overflow-hidden py-[120px] px-6 bg-cream-deep">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="pointer-events-auto">
          <Sticker className="top-[6%] left-[3%]" rotation={-12} floatDuration={4.2} floatRange={9} label="Football">
            <FootballSticker />
          </Sticker>
          <Sticker className="top-[24%] left-[0.5%]" rotation={8} size="clamp(40px,7vw,72px)" floatDuration={3.6} floatRange={7} delay={0.15} label="Soccer ball">
            <SoccerBallSticker />
          </Sticker>
          <Sticker className="top-[5%] right-[3%]" rotation={9} floatDuration={4.8} floatRange={8} delay={0.3} label="Laptop">
            <LaptopSticker />
          </Sticker>
          <Sticker className="top-[26%] right-[0.5%]" rotation={-10} size="clamp(42px,7.5vw,76px)" floatDuration={4.0} floatRange={10} delay={0.45} label="Trading card">
            <TradingCardSticker />
          </Sticker>
          <Sticker className="bottom-[6%] left-[6%]" rotation={-18} floatDuration={5.2} floatRange={7} delay={0.6} label="Airplane">
            <AirplaneSticker />
          </Sticker>
          <Sticker className="bottom-[7%] right-[5%]" rotation={12} floatDuration={3.8} floatRange={9} delay={0.75} label="Game controller">
            <ControllerSticker />
          </Sticker>
        </div>
      </div>

      <div className="relative z-10 text-center mb-[72px]">
        
        <h2 className="font-display font-medium text-[clamp(2.4rem,5vw,3.6rem)] mb-2.5">
          About Me
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

      {/* content row sits above the floating stickers (z-10) */}
      <div className="relative z-10 max-w-[920px] mx-auto flex gap-14 items-center justify-center flex-wrap px-6 py-10">

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-[260px] h-[260px] flex-shrink-0 rounded-[20px] bg-mountain
                     border-4 border-[#F9F5EE] shadow-[0_12px_32px_rgba(43,38,34,0.14)]
                     overflow-hidden relative"
        >
          <Image
            src="/screenshots/aboutmesectionselfie.jpg"
            alt="Jacob Lazzarini"
            fill
            className="object-cover"
            sizes="260px"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-[420px]"
        >
          <p className="text-[1.02rem] leading-[1.7] text-ink/85 mb-[22px]">
            I&rsquo;m Jacob an aspiring software engineer who loves building clean, creative, and useful software.
            I enjoy designing fun user interfaces, creating modern websites, and turning ideas into projects that feel polished and easy to use.
            Outside of coding, I&rsquo;m into football and soccer, aviation and travel, playing video games, and collecting Pokemon cards.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
