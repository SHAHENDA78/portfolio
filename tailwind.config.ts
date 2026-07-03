import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        screen: "#0A0C10",      // near-black cinema screen
        curtain: "#12151C",     // panel / card background
        curtain2: "#191D26",    // elevated card
        marquee: "#F2B441",     // warm marquee-bulb gold (primary accent)
        reel: "#1F5C59",        // deep teal (secondary accent)
        velvet: "#C4506A",      // muted rose (tertiary accent)
        chalk: "#EDEEF0",       // primary text
        chalkdim: "#9AA0AC",    // secondary text
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.85" },
          "94%": { opacity: "1" },
        },
        reel: {
          "0%": { backgroundPositionX: "0" },
          "100%": { backgroundPositionX: "560px" },
        },
      },
      animation: {
        flicker: "flicker 6s ease-in-out infinite",
        reel: "reel 18s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
