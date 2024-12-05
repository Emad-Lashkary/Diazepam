/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_100: "#eafaff",
        primary_200: "#cfeef7",
        primary_300: "#b8cee1",
        primary_400: "#93a9c6",
        primary_500: "#7088ab",
        primary_600: "#5a6f8e",
        primary_700: "#3e4e6c",
        primary_800: "#29354b",
        primary_900: "#141a26",
        primary_950: "#05080c",
        // secondaryLighter: "#ffcccc",
        // secondaryLight: "#ff9999",
        // secondaryBase: "#ff6666",
        // secondaryDark: "#cc3333",
        // secondaryDarker: "#990000",
        secondaryLighter: "#ffcccc",
        secondaryLight: "#cc3333",
        secondaryBase: "#990000",
        secondaryDark: "#58130e",
        secondaryDarker: "#2c0907",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: 0, transform: "translateX(40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideDown: {
          "0%": { opacity: 0, transform: "translateY(-30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-30px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn var(--fade-duration, 0.5s) ease-out",
        slideLeft: "slideLeft 0.4s ease-out",
        slideDown: "slideDown 0.4s ease-out",
        slideUp: "slideUp 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
