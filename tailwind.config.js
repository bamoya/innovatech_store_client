/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

// textColor :{
//   base: "#ffffff",
//   primay: "#767676",
//   secondary: "#262626",
// },
// backgroundColor : {
//   base: "#ffffff",
//   secondary: "#f5f5f3",
//   button : {
//     fill : "#262626",
//     hover : "#000000"
//   }
// }
