/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        interdisplay: ["Interdisplay", "sans-serif"],
        utara: ["Utara", "sans-serif"],
        "chivo-mono": ["Chivo Mono", "monospace"],
      },
      keyframes: {
        "marquee-left": {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "marquee-left":  "marquee-left 20s linear infinite",
        "marquee-right": "marquee-right 24s linear infinite",
      },
    },
  },
  plugins: [],
};
