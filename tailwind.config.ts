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
        primary: {
          purple: "#3b0b80",
          "purple-dark": "#270853",
          "purple-light": "#770b80",
        },
        accent: {
          teal: "#5bccb8",
          "teal-dark": "#0b6380",
          "animation-primary": "#0abaaf",
          "animation-light": "#9fffee",
        },
        background: {
          "gradient-start": "#3b0b80",
          "gradient-end": "#770b80",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #3b0b80 0%, #770b80 100%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 5px #0abaaf, 0 0 10px #0abaaf, 0 0 15px #0abaaf",
          },
          "100%": {
            boxShadow: "0 0 10px #9fffee, 0 0 20px #9fffee, 0 0 30px #9fffee",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: ["tailwindcss-animate"],
};
