/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        blue: "#006FDA",
        lighterBlue: "#2d93f1",
        yellowish: "#FFCC00",
        textblack: "#475467",
        textheading: "#101828",
      },
      fontFamily: {
        jakata: ['"Plus Jakarta Sans"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
        ubuntu: ['"Ubuntu"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
