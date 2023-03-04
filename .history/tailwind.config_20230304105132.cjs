/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "border-color": "rgba(0, 0, 0, 0.12)",
      "primary-color": "rgb(83, 109, 254)",
      gray: "rgb(74, 74, 74,0.9)",
      "light-gray": "#bbbbbb",
      "light-gray-border": "rgb(74, 74, 74,0.1)",
      black: "#222222",
      white: "#fff",
      "btn-primary": "#536DFE",
      "btn-primary-hover": "rgb(7, 44, 254)",
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {},
  },
  plugins: [],
};
