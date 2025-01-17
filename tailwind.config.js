/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        bodyBg: "#fafafa",
        blackText: "#333333",
        lightGray: "#737373",
        blueBtn: "#633cff",
      },
    },
  },
  plugins: [],
};
