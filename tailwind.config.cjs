/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Work Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#10B981", // Modern Mint
        "primary-dark": "#059669", // Darker shade for hover
        "gray-0": "#FFFFFF",
        "gray-10": "#F9FAFB", // Light Smoke
        "gray-30": "#D4D4D8",
        "gray-50": "#71717A",
        "gray-80": "#1F2937", // Deep Charcoal
        "gray-90": "#111827", // Darker background
        "gray-100": "#000000",
      },
      backgroundImage: {
        'gradient-black-down': 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
      }
    }
  },
  plugins: []
};
