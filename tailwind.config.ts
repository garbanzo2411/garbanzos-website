import type { Config } from "tailwindcss";
 
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F3ECE0",
        "cream-deep": "#ECE2D0",
        ink: "#2B2622",
        accent: "#C1440E",   // Golden Gate "International Orange"
        mountain: "#5C6B73", // slate blue-gray used in the illustration
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
 
export default config;