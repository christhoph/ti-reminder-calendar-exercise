/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "calendar-gradient":
          "linear-gradient(180deg, #101277 0%, #421F91 100%)",
        "edit-gradient": "linear-gradient(90deg, #3BC6FB 0%, #00FFCC 100%)",
        "highlight-gradient":
          "linear-gradient(90deg, #FF465D 0%, #BC46BA 100%)",
        "highlight-gradient-hover":
          "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)",
      },
      boxShadow: {
        xxl: "0px 4px 28px 2px #D1DCF0",
      },
      colors: {
        "bright-cyan": "#00FFCC",
        "bright-red": "#D42222",
        charcoal: "#626262",
        "dark-blue": "#101277",
        "dark-purple": "#421F91",
        "dark-slate": "#384042",
        "deep-blue": "#394ABC",
        "light-blue": "#EBF3FE",
        "light-lavender": "#D1DCF0",
        "light-gray": "#D9D9D9",
        "medium-gray": "#797979",
        "shadow-brown": "#31272566",
        "shadow-dark-slate": "#38404280",
        "slate-gray": "#767A7B",
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
