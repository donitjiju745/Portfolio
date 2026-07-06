/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: "#0A0E13",       // page background — near-black graphite-navy
        surface: "#11161D",    // card / panel background
        surface2: "#161C24",   // hover / raised surface
        border: "#232B35",     // hairline borders
        signal: "#4CD9C0",     // primary accent — oscilloscope cyan
        amber: "#F2A65A",      // secondary accent — used sparingly
        ink: "#E7ECEF",        // primary text
        muted: "#8A94A0",      // secondary text
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #1a212b 1px, transparent 1px), linear-gradient(to bottom, #1a212b 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};
