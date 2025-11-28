/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', '"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#F97316", // Brand/50 from Figma
        "gray-0": "#FFFFFF",
        "gray-30": "#D4D4D8",
        "gray-50": "#71717A",
        "gray-100": "#000000",
      },
      backgroundImage: {
        'gradient-black-down': 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
      }
    }
  },
  plugins: []
};
