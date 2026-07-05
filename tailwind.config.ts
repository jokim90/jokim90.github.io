import type { Config } from "tailwindcss";

/**
 * Design tokens — "race card" system
 * chalk  : light background (cool chalk white, like a printed race card)
 * ink    : green-black text (turf-tinted ink)
 * turf   : racing green (primary accent)
 * crimson: jockey-silk crimson (secondary accent, used sparingly)
 * amber  : "ON AIR" cue light
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chalk: "#F4F5F1",
        ink: "#131A16",
        turf: {
          DEFAULT: "#1C5940",
          deep: "#0F3B2A",
          soft: "#DCE8E1",
        },
        crimson: "#A6192E",
        amber: "#D99A2B",
        night: {
          DEFAULT: "#0E1210",
          card: "#171E1A",
          line: "#26312B",
        },
      },
      fontFamily: {
        display: ['"Archivo Variable"', "system-ui", "sans-serif"],
        body: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        rail: "72rem",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        ticker: "ticker 28s linear infinite",
        pulseDot: "pulseDot 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
