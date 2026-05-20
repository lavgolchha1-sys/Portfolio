import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0b0f14",
          panel: "#11161d",
          card: "#151b24",
          line: "#1f2630",
        },
        ink: {
          DEFAULT: "#d6deeb",
          dim: "#8b98ab",
          mute: "#5b6878",
        },
        accent: {
          green: "#7ee787",
          cyan: "#79c0ff",
          purple: "#d2a8ff",
          orange: "#ffa657",
          pink: "#ff7b72",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 8px 24px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
