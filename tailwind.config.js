/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-black": "#131313",
        tia: "#23BE0A",
        sky: "#59C6D2",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        "work-san": ["Work Sans", "serif"],
      },
    },
  },
  plugins: [],
};
