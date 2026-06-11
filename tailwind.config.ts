import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        paper: "var(--color-paper)",
        mist: "var(--color-mist)",
        graphite: "var(--color-graphite)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"]
      },
      letterSpacing: {
        poster: "0.16em",
        nav: "0.12em"
      },
      transitionTimingFunction: {
        exhibition: "cubic-bezier(0.22, 1, 0.36, 1)",
        editorial: "cubic-bezier(0.645, 0.045, 0.355, 1)"
      },
      boxShadow: {
        hairline: "0 0 0 1px rgba(10, 10, 10, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
