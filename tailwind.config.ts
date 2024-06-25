import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";


const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,svg}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "emerald-teal":
          "linear-gradient(255deg, #3BD9D9 -2.5%, #53DDB7 45.29%)",
      },
      animation: {
        "spin-slow": "spin 180s linear infinite",
        "infinite-track": "infinite-track 10s linear infinite",
        "slide-right":
          "slideRight 1000ms cubic-bezier(0.4, 0, 0.2, 1) infinite",
        // Accordion
        "slide-down-item": "slideDownItem 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-up-item": "slideUpItem 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-down-content":
          "slideDownContent 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-up-content": "slideUpContent 500ms cubic-bezier(0.4, 0, 0.2, 1)",

        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Nav Menu
        "scale-in": "scaleIn 200ms ease",
        "scale-out": "scaleOut 200ms ease",
        "fade-in": "fadeIn 200ms ease",
        "fade-out": "fadeOut 200ms ease",
        "enter-from-left": "enterFromLeft 250ms ease",
        "enter-from-right": "enterFromRight 250ms ease",
        "exit-to-left": "exitToLeft 250ms ease",
        "exit-to-right": "exitToRight 250ms ease",
        // Tooltip
        "slide-down-and-fade":
          "slideDownAndFade 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up-and-fade":
          "slideUpAndFade 300ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        "inner-sm": "inset 0px 1px 1px 0px rgba(0 0 0 / 0.05)",
        "inner-xl": "inset 0 40px 40px 0 rgba(0 0 0 / 0.05)",
        highlight: "inset 0 1.5px 0.5px 0 rgba(255 255 255 / 0.15)",
        "inner-lg": "inset 0px 2px 2px 0px rgba(255 255 255 / 0.40)",
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      fontFamily: {
        quicksand: ["var(--font-quicksand)"],
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "infinite-track": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-160px)" },
        },
        // Accordion
        slideDownItem: {
          from: { flexGrow: "0", overflow: "hidden", height: "44" },
          to: { flexGrow: "1", overflow: "visible" },
        },
        slideUpItem: {
          from: { flexGrow: "1", overflow: "visible" },
          to: { flexGrow: "0", overflow: "hidden", height: "44" },
        },
        slideDownContent: {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUpContent: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Nav Menu
        enterFromRight: {
          from: { opacity: "0", transform: "translateX(200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: "translateX(-200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        // Tooltip
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-4px) scale(0.9)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        slideUpAndFade: {
          from: { opacity: "1", transform: "translateY(0px) scale(1)" },
          to: { opacity: "0", transform: "translateY(-4px)  scale(0.9)" },
        },
      },
      colors: {
        "surface": {
          '100': '#f3f4f6',
          '200': '#e5e7eb',
          '300': '#d1d5db',
          '400': '#9ca3af',
          '500': '#6b7280',
          '600': '#4b5563',
          '700': '#374151'
        },
        "content": {
          '100': '#111827',
          '200': '#374151',
          '300': '#6b7280'
        }
      }
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
    require("tailwind-gradient-mask-image"),
    iconsPlugin({
      collections: getIconCollections(["bi", "logos", "ph"]),
    }),
  ],
};

export default config;
