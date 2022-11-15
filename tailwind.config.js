/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        pupshade: "#0084AB",
        lightblue: "#46C2E1",
        pebble: "#333333",
      },
      colors: {
        cusgreen: "#f0fff0",
      },
    },
  },
  plugins: [],
};
