/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  plugins: [
    require("daisyui"),
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto'],
      'montserrat': ["Montserrat", "sans-serif"]
    },
  },
}