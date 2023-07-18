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
    extend: {},
  },
  plugins: [],
};
