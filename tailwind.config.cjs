/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "ui-sans-serif", "sans-serif"]
      },
      colors: {
        primary: "#10B981", // Modern Mint
        charcoal: "#1F2937", // Deep Charcoal
        "light-smoke": "#F9FAFB", // Light Smoke
      }
    }
  },
  plugins: []
};
