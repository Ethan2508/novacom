import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ─── Palette Novacom ─── */
      colors: {
        bordeaux: {
          DEFAULT: "#351518",
          light: "#4a2025",
          dark: "#200d0f",
        },
        creme: {
          DEFAULT: "#eeede9",
          light: "#f5f4f1",
          dark: "#dddcd8",
        },
        nude: {
          DEFAULT: "#bfa58d",
          light: "#d4c4b2",
          dark: "#a88e75",
        },
        accent: {
          DEFAULT: "#f37021",
        },
      },

      /* ─── Typographies ─── */
      fontFamily: {
        serif: ['"Times New Roman"', "Times", "Georgia", "serif"],
        sans: ['"Be Vietnam Pro"', "system-ui", "sans-serif"],
      },

      /* ─── Espacements & tailles ─── */
      fontSize: {
        "display-xl": ["clamp(2.4rem, 8vw, 7rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "body-lg": ["1.25rem", { lineHeight: "1.75" }],
        "body-md": ["1.125rem", { lineHeight: "1.7" }],
      },

      /* ─── Animations ─── */
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.8s ease-out forwards",
      },

      /* ─── Spacing sections ─── */
      spacing: {
        section: "clamp(5rem, 12vw, 10rem)",
      },

      /* ─── Transitions ─── */
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
    },
  },
  plugins: [],
};

export default config;
