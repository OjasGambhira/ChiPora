/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#12181B",
          soft: "#1A2226",
          line: "#26302F",
        },
        parchment: {
          DEFAULT: "#EDE6D6",
          dim: "#DCD3BC",
          faint: "#F5F1E7",
        },
        moss: {
          DEFAULT: "#3C5943",
          light: "#5C7A63",
          deep: "#25382C",
        },
        brass: {
          DEFAULT: "#C9A227",
          light: "#E0BE4F",
          dim: "#8A6F22",
        },
        slate: {
          DEFAULT: "#4A5568",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        content: "72rem",
        prose: "40rem",
      },
      backgroundImage: {
        grain: "url('/grain.svg')",
      },
      keyframes: {
        "draw-line": {
          from: { height: "0%" },
          to: { height: "100%" },
        },
      },
    },
  },
  plugins: [],
};
