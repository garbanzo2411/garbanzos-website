# Jacob Lazzarini — Personal Portfolio

A personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a hand-illustrated Golden Gate Bridge + Utah mountains hero, Pokémon trading card-inspired project cards, and floating emoji stickers in the About section.

🌐 **Live site:** [jacoblazzarini.com](https://jacoblazzarini.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS v3](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion) |
| Icons | [React Icons](https://react-icons.github.io/react-icons) |
| Fonts | Fraunces + Inter via `next/font/google` |
| Deployment | [Vercel](https://vercel.com) |

---

## Sections

- **Hero** — Animated SVG skyline illustration (Golden Gate Bridge + Utah mountains), entrance choreography, smooth-scroll cue
- **Projects** — Pokémon trading card-inspired project cards with 3D tilt and holographic shimmer on hover
- **Skills** — Floating pill cloud with category color-coding and scroll-triggered stagger animation
- **About** — Photo, bio, and six floating emoji stickers that bob continuously and spin on hover
- **Contact** — Dusk skyline bookend, resume download, email CTA

---

## Getting Started

Requires **Node.js 20 or 22 LTS** (Node 23 is not supported by Next.js).

```bash
# Clone the repo
git clone https://github.com/jacoblazzarini/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

portfolio/

├── app/

│   ├── layout.tsx              # Root layout — font loading, metadata

│   ├── page.tsx                # Single page composing all sections

│   └── globals.css             # Tailwind directives, reduced-motion override

├── components/

│   ├── Nav.tsx                 # Floating glass nav bar with GitHub/LinkedIn icons

│   ├── Hero.tsx                # Hero section shell

│   ├── SkylineIllustration.tsx # Animated bridge + mountain SVG

│   ├── ScrollCue.tsx           # Bouncing scroll-down arrow

│   ├── Projects.tsx            # Projects section with card grid

│   ├── ProjectCard.tsx         # Individual trading card component

│   ├── Skills.tsx              # Skills pill cloud section

│   ├── About.tsx               # About section with floating stickers

│   ├── Resume.tsx              # Contact / resume section

│   └── stickers/

│       ├── Sticker.tsx         # Reusable sticker wrapper (float + hover-spin)

│       └── StickerIcons.tsx    # Six emoji sticker components

├── lib/

│   ├── projects.ts             # Project data and type definitions

│   └── skills.tsx              # Skills data with category color mapping

├── public/

│   ├── profile.jpg             # Profile photo (not committed)

│   ├── resume.pdf              # Resume PDF (not committed)

│   └── screenshots/            # Project screenshot images

├── tailwind.config.ts          # Design tokens (colors, fonts)

└── tsconfig.json
---

## Customisation

**Swap your projects** — edit `lib/projects.ts`. Each project takes a title, description, tags, screenshot path, link, HP number, and two gradient accent colors.

**Swap your skills** — edit `lib/skills.tsx`. Add a new entry to the `skills` array with a name, icon, category, and rotation value.

**Change colors** — all design tokens live in `tailwind.config.ts` under `theme.extend.colors`. The four base tokens are `cream`, `ink`, `accent` (International Orange), and `mountain`.

**Change fonts** — swap the imports in `app/layout.tsx`. Keep the CSS variable names (`--font-fraunces`, `--font-inter`) the same and nothing else needs to change.

---

## Design Notes

The color palette is anchored to two real places that matter personally — the Golden Gate Bridge's official paint color ([International Orange, #C1440E](https://en.wikipedia.org/wiki/International_orange)) for the accent, and the blue-grey of the Utah mountain range for the supporting tone.

The Pokémon trading card motif in the Projects section (HP badge, foil shimmer, collector number) is intentionally subtle — it reads as "carefully crafted" to someone who doesn't know the reference, and as a personal easter egg to someone who does.

---

## License

MIT — feel free to use this as inspiration or a starting point for your own portfolio. If you do, I'd appreciate a credit or a star ⭐
