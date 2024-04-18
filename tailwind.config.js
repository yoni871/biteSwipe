/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#202224",
          light: "#36383A"
        },
        secondary: "#E1D5CA",
        white: "#F4F4F5",
        gold: {
          DEFAULT: "#C49450",
          light: "#FFBF10"
        }
      },
      fontFamily: {
        pblack: ["ProximaNova-Black", "sans-serif"],
        pbold: ["ProximaNova-Bold", "sans-serif"],
        plight: ["ProximaNova-Light", "sans-serif"],
        pregular: ["ProximaNova-Regular", "sans-serif"]
      },
    },
  },
  plugins: [],
}

