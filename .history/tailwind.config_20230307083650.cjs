/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      primary: "#1DC071",
      secondary: "#6F49FD",
      "text-1": "#171725",
      "text-2": "#4B5264",
      "text-3": "#808191",
      "text-4": "#B2B3BD",
      "icon-color": "#A2A2A8",
    },
  },
  plugins: [],
};
