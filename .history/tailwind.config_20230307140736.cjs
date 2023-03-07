/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#1DC071",
      secondary: "#6F49FD",
      "text-1": "#171725",
      "text-2": "#4B5264",
      "text-3": "#808191",
      "text-4": "#B2B3BD",
      "icon-color": "#A2A2A8",
      white: "#FFFFFF",
      "white-soft": "#FCFBFF",
      "gray-soft": "#FCFCFC",
      strock: "#F1F1F3",
      lite: "#FCFCFD",
      error: "#EB5757",
      darkbg: "#13131A",
      darkSecondary: "#1C1C24",
      softDark: "#22222C",
      darkStroke: "#3A3443",
      darkRed: "#422C32",
    },
  },
  plugins: [],
};
