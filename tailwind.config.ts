import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ec003c",
        secondary: "#9d0033",
        "warm-gray": "#919191",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #ec003c, #9d0033)",
      },
    },
  },
  plugins: [],
} satisfies Config;
