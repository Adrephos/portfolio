/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131313",
        secondary: "#FBFFFE",
        gray: "#000000",
        green: "#31A254",
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
};
