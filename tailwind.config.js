/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        "dark-blue-elements": "hsl(209, 23%, 22%)",
        "very-dark-blue-bg": "hsl(207, 26%, 17%)",
        "very-dark-blue-text": "hsl(200, 15%, 8%)",
        "dark-gray-input": "hsl(0, 0%, 52%)",
        "very-light-gray-bg": "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        "nunito-sans": ["Nunito Sans", "sans-serif"],
      },
      fontSize: {
        "home-item": "14px",
        "detail-page": "16px",
      },
      fontWeight: {
        light: 300,
        "semi-bold": 600,
        bold: 800,
      },
    },
  },
  plugins: [],
};
