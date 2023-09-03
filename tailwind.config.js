/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/products/src/**/*.{html,ts}",
    "./projects/shell/src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
