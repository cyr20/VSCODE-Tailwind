/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "0px",
      lsm: "650px",
      lmd: "770px",
      md: "990px",
      lg: "1200px",
    },
    extend: {
      boxShadow: {
        '3xl': '0 3px 3px 0px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
