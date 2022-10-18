/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   Montserrat: "Montserrat",
      // },

      colors: {
        darkGreen: "#12302E",
        baige: "#EEEBDB",
        lightGreen: "#D8D9BF",
        green: "#8B956A",
        blue: "#2033C7",
        yellow: "#E6CB5A",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
