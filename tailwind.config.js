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
        secondaryLighter: "#debcba",
        secondaryLight: "#be7974",
        secondaryBase: "#921f18",
        secondaryDark: "#58130e",
        secondaryDarker: "#2c0907",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn var(--fade-duration, 0.5s) ease-out",
      },
    },
  },
  plugins: [],
};
