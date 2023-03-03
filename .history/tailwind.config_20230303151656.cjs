/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "border-color": "rgba(0, 0, 0, 0.12)",
      "primary-color": "rgb(83, 109, 254)",
      gray: "rgb(74, 74, 74)",
      white: "#fff",
    },
    extend: {},
  },
  plugins: [],
};
