/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E1D5CA",
        secondary: "#202224",
        white: "#F4F4F5",
        gold: {
          DEFAULT: "#C49450",
          bright: "#FFBF10"
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

