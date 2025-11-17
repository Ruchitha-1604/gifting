/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(180deg, #103565 0%, #2B4D78 100%)",
        "card-gradient":
          "linear-gradient(103.27deg, #DBECFC 0%, #FFFFFF 57.05%, #DBECFC 98.85%)",
      },
      screens: {
        tablet: "820px",
        lg: "1024px",
        "tablet-lg": "1024px",
        "lg-xl": "1218px",
        "tablet-xl": "1248px",
        xl: "1340px",
        hd: "1920px",
        "desktop-lg": "2560px",
      },
      colors: {
        label: "var(--label)",
        input: "var(--input)",
        ring: "var(--ring)",
        link: "var(--link)",
        gold: "var(--gold)",
        "smoke-white": "var(--smoke-white)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: {
          DEFAULT: "var(--border)",
          foreground: "var(--border-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          text: "var(--primary-text)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          text: "var(--secondary-text)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
          text: "var(--muted-text)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
          text: "var(--popover-text)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        light: {
          1: "#DDD",
          2: "#D0E1F0",
          3: "#F9FAFC",
        },
        dark: {
          1: "#063057",
          2: "#1F2B36",
        },
      },
      boxShadow: {
        header: "0px 8px 32px 0px #1035650A",
        primaryButton: "0px 8px 104px 0px #BADAF866",
        menuItem: "0px 40px 40px 0px #10356514",
        menuItemMobile: "0px 40px 40px 0px #10356529",
        cardItem: "0px 8px 24px 0px #BADAF84D",
        secondaryCardItem: "0px 8px 64px 0px #5D82A44D",
        bookNowOutline: "0px 8px 24px 0px #5A87B117",
        "video-wrapper": "0px 0.96px 12.47px 0px #BADAF866",
        "secondary-button": "0px 8px 16px 0px #5A87B14D",
        "learn-more": "0px 8px 47.6px 0px #FFFFFF1A",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontFamily: {
      roboto: ["var(--font-roboto)"],
      kanit: ["var(--font-kanit)"],
      helvetica: ["Helvetica", "Arial", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
