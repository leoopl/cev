/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Enhanced CEV gradient colors
        "gradient-from": "hsl(var(--gradient-from))",
        "gradient-to": "hsl(var(--gradient-to))",
        "gradient-via": "hsl(var(--gradient-via))",
        "gradient-middle": "hsl(var(--gradient-middle))",
        "gradient-accent": "hsl(var(--gradient-accent))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
        "3xl": "calc(var(--radius) + 12px)",
      },
      backgroundImage: {
        "gradient-cev":
          "linear-gradient(135deg, hsl(var(--gradient-from)) 0%, hsl(var(--gradient-via)) 25%, hsl(var(--gradient-middle)) 50%, hsl(var(--gradient-to)) 75%, hsl(var(--gradient-accent)) 100%)",
        "gradient-cev-radial":
          "radial-gradient(ellipse at center, hsl(var(--gradient-from)) 0%, hsl(var(--gradient-via)) 30%, hsl(var(--gradient-middle)) 60%, hsl(var(--gradient-to)) 100%)",
        "gradient-cev-conic":
          "conic-gradient(from 45deg, hsl(var(--gradient-from)), hsl(var(--gradient-via)), hsl(var(--gradient-middle)), hsl(var(--gradient-to)), hsl(var(--gradient-from)))",
        "gradient-mesh": "var(--gradient-mesh-advanced)",
        "noise-enhanced": "var(--bg-noise-enhanced)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-enhanced": "float-enhanced 8s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease-out",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-in-enhanced":
          "slide-in-enhanced 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "network-pulse": "networkPulse 2s ease-in-out infinite",
        "particle-float": "particleFloat 8s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "gradient-shift": "gradient-shift 4s ease-in-out infinite",
        "gradient-flow": "gradient-flow 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        typewriter: "typewriter 2s steps(40) forwards",
        "cursor-blink": "cursor-blink 1s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-enhanced": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
            filter: "brightness(1)",
          },
          "33%": {
            transform: "translateY(-15px) rotate(2deg)",
            filter: "brightness(1.1)",
          },
          "66%": {
            transform: "translateY(-8px) rotate(-1deg)",
            filter: "brightness(0.95)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px) scale(0.95)",
            filter: "blur(5px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
            filter: "blur(0)",
          },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-enhanced": {
          "0%": {
            opacity: "0",
            transform: "translateY(60px) scale(0.9)",
            filter: "blur(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
            filter: "blur(0)",
          },
        },
        networkPulse: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.8" },
        },
        particleFloat: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(20px, -20px) rotate(90deg)" },
          "50%": { transform: "translate(0, -40px) rotate(180deg)" },
          "75%": { transform: "translate(-20px, -20px) rotate(270deg)" },
          "100%": { transform: "translate(0, 0) rotate(360deg)" },
        },
        glow: {
          "0%": {
            boxShadow:
              "0 0 5px hsl(var(--primary)), 0 0 10px hsl(var(--primary)), 0 0 15px hsl(var(--primary))",
          },
          "100%": {
            boxShadow:
              "0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary)), 0 0 30px hsl(var(--primary))",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
            filter: "brightness(1)",
          },
          "50%": {
            boxShadow:
              "0 0 40px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--accent) / 0.3)",
            filter: "brightness(1.2)",
          },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "gradient-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "33%": { backgroundPosition: "100% 50%" },
          "66%": { backgroundPosition: "50% 100%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "cursor-blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.1" }],
        "6xl": ["3.75rem", { lineHeight: "1.1" }],
        "7xl": ["4.5rem", { lineHeight: "1.1" }],
        "8xl": ["6rem", { lineHeight: "1.1" }],
        "9xl": ["8rem", { lineHeight: "1.1" }],
        "responsive-xs": "clamp(0.75rem, 2vw, 0.875rem)",
        "responsive-sm": "clamp(0.875rem, 2.5vw, 1rem)",
        "responsive-base": "clamp(1rem, 3vw, 1.125rem)",
        "responsive-lg": "clamp(1.125rem, 3.5vw, 1.5rem)",
        "responsive-xl": "clamp(1.25rem, 4vw, 2rem)",
        "responsive-2xl": "clamp(1.5rem, 5vw, 3rem)",
        "responsive-3xl": "clamp(1.875rem, 6vw, 4rem)",
        "responsive-4xl": "clamp(2.25rem, 7vw, 5rem)",
        "responsive-5xl": "clamp(3rem, 8vw, 6rem)",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
        "144": "36rem",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1200": "1200ms",
      },
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        elastic: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-sm": "0 0 10px hsl(var(--primary) / 0.3)",
        glow: "0 0 20px hsl(var(--primary) / 0.4)",
        "glow-lg": "0 0 40px hsl(var(--primary) / 0.5)",
        "glow-accent": "0 0 30px hsl(var(--accent) / 0.4)",
        "gradient-cev-sm": "0 4px 20px hsl(var(--primary) / 0.2)",
        "gradient-cev": "0 8px 40px hsl(var(--primary) / 0.3)",
        "gradient-cev-lg":
          "0 20px 60px hsl(var(--primary) / 0.4), 0 8px 24px hsl(var(--accent) / 0.2)",
        "inner-glow": "inset 0 0 20px hsl(var(--primary) / 0.2)",
        elevated: "0 20px 60px -12px hsl(var(--foreground) / 0.25)",
      },
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
      scale: {
        "102": "1.02",
        "103": "1.03",
        "115": "1.15",
      },
      blur: {
        "4xl": "72px",
        "5xl": "96px",
      },
    },
  },
  plugins: ["tailwindcss-animate"],
};
