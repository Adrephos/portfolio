/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        mincho: ['"Shippori Mincho"', "Sora", "ui-serif", "serif"],
      },
      colors: {
        br: {
          crust: "#0a0a0a",
          base: "#121212",
          surface0: "#1c1c1c",
          surface1: "#303030",
          surface2: "#4a4a4a",
          overlay0: "#606060",
          overlay1: "#808080",
          subtext0: "#c0c0c0",
          subtext1: "#dcdcdc",
          text: "#f5f3ef",
          stamp: "#6d3fa6",
        },
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
