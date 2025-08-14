/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "Inter", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        dff: {
          // brand
          navy: "#0B1F3A",
          teal: "#00A6A6",
          tealSoft: "#0CE6D0",
          // ui neutrals
          bg: "#F5F7FA",
          surface: "#FFFFFF",
          line: "#E5E7EB",
          text: "#1A1A1A",
          textMuted: "#6B7280",
          // status
          success: "#10B981",
          warning: "#64748B", // Replaced yellow warning color with neutral slate
          info: "#0EA5E9",
          error: "#EF4444",
        },
        navy: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#0b1f3a", // Primary deep navy
        },
        turquoise: {
          50: "#f0fdfc",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#0ce6d0", // Primary turquoise
          600: "#00a6a6", // Darker turquoise
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        // Custom colors for badges/statuses
        sky: {
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "16px", // Consistent with DFF design system
        "2xl": "20px",
        "3xl": "3rem",
      },
      boxShadow: {
        card: "0 8px 24px rgba(11, 31, 58, 0.08)", // DFF navy-based shadows
        hover: "0 12px 28px rgba(11, 31, 58, 0.12)",
        glow: "0 0 20px rgba(12, 230, 208, 0.3)",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(.2,.8,.2,1)", // DFF soft transitions
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
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(12, 230, 208, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(12, 230, 208, 0.8)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        glow: "glow 2s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  corePlugins: {
    // All core plugins enabled except we'll handle yellow restriction in safelist
  },
  safelist: [
    "bg-dff-navy",
    "bg-dff-teal",
    "bg-dff-tealSoft",
    "bg-dff-bg",
    "bg-dff-surface",
    "text-dff-navy",
    "text-dff-teal",
    "text-dff-text",
    "text-dff-textMuted",
    "border-dff-line",
    "shadow-card",
    "shadow-hover",
  ],
}
