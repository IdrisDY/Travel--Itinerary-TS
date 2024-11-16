/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F0F2F5",
        mainBlue: "#0D6EFD",
        greyText: "#647995",
        iconGrey: "#667185",
        darkBrown: "#7A4504",
        lightYellow: "#FEF4E6",
        grey3: "#E7F0FF",
        subgrey: "#676E7E",
        dividerBg: "#D0D5DD",
        darkBlue: "#000031",
        altBlackHeaderText: "#1D2433",
        lighterBlue: "#0A369D",
      },
    },
  },
  plugins: [],
};
