/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins","sans-serif"],
        titleFont: ["Montserrat","sans-serif"],
      },
      colors: {
        bodycolor: "#212428",
        lightText: "#c4cfde",
        boxbg: "linear-gradient(145deg, green, red)",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e2, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
}