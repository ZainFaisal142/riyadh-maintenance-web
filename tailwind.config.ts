import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "safety-amber": "#F59E0B",
        "safety-amber-hover": "#D97706",
        "emerald-green": "#10B981",
        "emerald-green-dark": "#059669",
        "slate-navy": "#0F172A",
        "charcoal": "#1E293B",
        "muted-slate": "#64748B",
        "card-bg": "#F8FAFC",
        "border-soft": "#E2E8F0",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"Red Hat Text"', "Arial", "sans-serif"],
        arabic: ['"IBM Plex Sans Arabic"', "Tahoma", "sans-serif"],
        "arabic-heading": ['Amiri', "Georgia", "serif"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
