"use client";

import { motion } from "framer-motion";

export default function SkylineIllustration() {
  return (
    <svg viewBox="0 0 1200 420" className="w-full h-auto block">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F7E7D2" />
          <stop offset="1" stopColor="#F2E0C8" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#F2A65A" stopOpacity="0.55" />
          <stop offset="1" stopColor="#F2A65A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="towerGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EB8B57" />
          <stop offset="1" stopColor="#8C350F" />
        </linearGradient>
        <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D9C9A8" />
          <stop offset="1" stopColor="#5C6B73" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#2B2622" floodOpacity="0.18" />
        </filter>
        <filter id="fogBlur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id="fogBlurSoft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      {/* sky */}
      <rect width="1200" height="420" fill="url(#skyGrad)" />
      <circle cx="620" cy="110" r="90" fill="url(#sunGlow)" />

      {/* birds */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 0.7, delay: 2.6 }}
        stroke="#2B2622"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      >
        <path d="M505,72 q8,-10 16,0 q8,-10 16,0" />
        <path d="M555,56 q7,-9 14,0 q7,-9 14,0" />
      </motion.g>

      {/* distant hill behind SF side */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.1 }}>
        <path
          d="M0,260 Q120,215 260,238 T520,255 L520,420 L0,420 Z"
          fill="#B9C4C7"
          opacity="0.22"
        />
      </motion.g>

      {/* mountain layers, back to front */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <path
          d="M300,300 L390,175 L470,225 L550,150 L630,205 L710,125 L790,195 L870,140 L950,220 L1030,165 L1110,260 L1200,300 L1200,420 L300,420 Z"
          fill="#C9D3D6"
          opacity="0.55"
        />
      </motion.g>

      <motion.g
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        <path
          d="M330,310 L410,215 L490,255 L580,180 L660,235 L740,160 L820,225 L900,175 L980,245 L1060,205 L1140,290 L1200,310 L1200,420 L330,420 Z"
          fill="#8FA3AA"
          opacity="0.82"
        />
      </motion.g>

      <motion.g
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        <path
          d="M360,320 L430,255 L500,290 L590,235 L670,270 L750,215 L830,265 L910,235 L990,275 L1070,250 L1150,300 L1200,320 L1200,420 L360,420 Z"
          fill="#445258"
        />
        {/* sunlit ridge edge highlight */}
        <path
          d="M360,320 L430,255 L500,290 L590,235 L670,270 L750,215 L830,265 L910,235 L990,275 L1070,250 L1150,300"
          fill="none"
          stroke="#A9BABE"
          strokeWidth="2"
          opacity="0.5"
        />
        {/* snow cap on tallest peak */}
        <path d="M738,223 L750,215 L762,223 Z" fill="#FBF7EF" opacity="0.9" />
        {/* treeline */}
        <g fill="#2B3539" opacity="0.85">
          <path d="M410,300 L404,312 L416,312 Z" />
          <path d="M455,296 L449,308 L461,308 Z" />
          <path d="M520,292 L514,304 L526,304 Z" />
          <path d="M610,296 L604,308 L616,308 Z" />
          <path d="M700,298 L694,310 L706,310 Z" />
          <path d="M860,300 L854,312 L866,312 Z" />
          <path d="M945,294 L939,306 L951,306 Z" />
          <path d="M1025,298 L1019,310 L1031,310 Z" />
          <path d="M1105,302 L1099,314 L1111,314 Z" />
        </g>
      </motion.g>

      {/* rock headland anchoring the right tower into the mountains */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55 }}
      >
        <path d="M335,300 L350,272 L375,283 L398,258 L422,278 L452,262 L468,300 Z" fill="#3E4C50" />
        <g fill="#2B3539" opacity="0.85">
          <path d="M378,278 L373,288 L383,288 Z" />
          <path d="M418,272 L413,282 L423,282 Z" />
        </g>
      </motion.g>

      {/* small rocky rise under the left (SF-side) tower */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.35 }}>
        <path d="M108,300 L122,283 L142,289 L162,281 L176,300 Z" fill="#9FB0B5" opacity="0.5" />
      </motion.g>

      {/* water */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.85 }} transition={{ duration: 0.9, delay: 0.5 }}>
        <rect x="0" y="300" width="1200" height="120" fill="url(#waterGrad)" />
      </motion.g>

      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 0.9, delay: 0.85 }}
        stroke="#2B2622"
        strokeWidth="1.5"
        fill="none"
      >
        <path d="M0,330 Q60,322 120,330 T240,330 T360,330 T480,330 T600,330 T720,330 T840,330 T960,330 T1080,330 T1200,330" />
        <path d="M0,360 Q60,353 120,360 T240,360 T360,360 T480,360 T600,360 T720,360 T840,360 T960,360 T1080,360 T1200,360" />
        <path d="M0,388 Q60,381 120,388 T240,388 T360,388 T480,388 T600,388 T720,388 T840,388 T960,388 T1080,388 T1200,388" />
      </motion.g>

      {/* faint tower reflections */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 0.9, delay: 1.0 }}
        filter="url(#fogBlurSoft)"
      >
        <rect x="128" y="300" width="22" height="55" fill="#C1440E" />
        <rect x="368" y="300" width="22" height="55" fill="#C1440E" />
      </motion.g>

      {/* bridge cables */}
      <motion.path
        d="M40,300 L140,85"
        stroke="#7A2E10"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: 0.9, ease: "easeInOut" }}
      />
      <motion.path
        d="M380,85 L480,300"
        stroke="#7A2E10"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: 0.9, ease: "easeInOut" }}
      />
      <motion.path
        d="M140,85 Q260,232 380,85"
        stroke="#7A2E10"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.1, ease: "easeInOut" }}
      />
      <motion.path
        d="M140,85 Q260,232 380,85"
        stroke="#E2733C"
        strokeWidth="1.5"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 0.6, delay: 2.0 }}
      />

      {/* hangers */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.7 }}
        stroke="#9C3D17"
        strokeWidth="2"
      >
        <line x1="60" y1="259" x2="60" y2="300" />
        <line x1="85" y1="206" x2="85" y2="300" />
        <line x1="113" y1="142" x2="113" y2="300" />
        <line x1="172" y1="121" x2="172" y2="300" />
        <line x1="208" y1="152" x2="208" y2="300" />
        <line x1="260" y1="158" x2="260" y2="300" />
        <line x1="312" y1="152" x2="312" y2="300" />
        <line x1="348" y1="121" x2="348" y2="300" />
        <line x1="407" y1="142" x2="407" y2="300" />
        <line x1="435" y1="206" x2="435" y2="300" />
        <line x1="460" y1="259" x2="460" y2="300" />
      </motion.g>

      {/* deck */}
      <motion.g
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.75 }}
      >
        <rect x="16" y="296" width="470" height="9" rx="2" fill="#7A2E10" filter="url(#softShadow)" />
      </motion.g>

      {/* left tower */}
      <motion.g
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.45 }}
        filter="url(#softShadow)"
      >
        <path d="M122,300 L128,85 L152,85 L158,300 Z" fill="url(#towerGrad)" />
        <g stroke="#7A2E10" strokeWidth="2" opacity="0.75">
          <line x1="123" y1="120" x2="157" y2="120" />
          <line x1="124" y1="160" x2="156" y2="160" />
          <line x1="125" y1="200" x2="155" y2="200" />
          <line x1="126" y1="240" x2="154" y2="240" />
          <line x1="123" y1="120" x2="155" y2="160" />
          <line x1="157" y1="120" x2="125" y2="160" />
          <line x1="124" y1="160" x2="154" y2="200" />
          <line x1="156" y1="160" x2="126" y2="200" />
          <line x1="125" y1="200" x2="153" y2="240" />
          <line x1="155" y1="200" x2="127" y2="240" />
        </g>
        <rect x="126" y="78" width="28" height="10" fill="#8C350F" />
        <circle cx="140" cy="76" r="2.5" fill="#F2A65A" />
      </motion.g>

      {/* right tower */}
      <motion.g
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.6 }}
        filter="url(#softShadow)"
      >
        <path d="M362,300 L368,85 L392,85 L398,300 Z" fill="url(#towerGrad)" />
        <g stroke="#7A2E10" strokeWidth="2" opacity="0.75">
          <line x1="363" y1="120" x2="397" y2="120" />
          <line x1="364" y1="160" x2="396" y2="160" />
          <line x1="365" y1="200" x2="395" y2="200" />
          <line x1="366" y1="240" x2="394" y2="240" />
          <line x1="363" y1="120" x2="395" y2="160" />
          <line x1="397" y1="120" x2="365" y2="160" />
          <line x1="364" y1="160" x2="394" y2="200" />
          <line x1="396" y1="160" x2="366" y2="200" />
          <line x1="365" y1="200" x2="393" y2="240" />
          <line x1="395" y1="200" x2="367" y2="240" />
        </g>
        <rect x="366" y="78" width="28" height="10" fill="#8C350F" />
        <circle cx="380" cy="76" r="2.5" fill="#F2A65A" />
      </motion.g>

      {/* fog rolling through the base, fusing bridge + mountains */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.3, delay: 2.1 }}>
        <rect x="-50" y="235" width="1300" height="85" fill="#F7F2E8" opacity="0.5" filter="url(#fogBlur)" />
      </motion.g>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.3, delay: 2.2 }}>
        <ellipse cx="140" cy="288" rx="72" ry="30" fill="#FFFFFF" opacity="0.45" filter="url(#fogBlurSoft)" />
        <ellipse cx="390" cy="286" rx="82" ry="32" fill="#FFFFFF" opacity="0.45" filter="url(#fogBlurSoft)" />
      </motion.g>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.3, delay: 2.3 }}>
        <ellipse cx="760" cy="300" rx="260" ry="34" fill="#FFFFFF" opacity="0.3" filter="url(#fogBlur)" />
      </motion.g>
    </svg>
  );
}