/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "calendar-gradient":
          "linear-gradient(180deg, #101277 0%, #421F91 100%)",
        "highlight-gradient":
          "linear-gradient(90deg, #FF465D 0%, #BC46BA 100%)",
      },
      colors: {
        "bright-cyan": "#00FFCC",
        "dark-blue": "#101277",
        "dark-purple": "#421F91",
        "light-gray": "#D9D9D9",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "2.8125rem": "2.8125rem",
        "5rem": "5rem",
      },
    },
  },
  plugins: [],
};
