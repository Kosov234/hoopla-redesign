/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hoopla-black" : "#071231",
        "hoopla-deep-blue": "#003282",
        "hoopla-electric-blue": "#2187FF",
        "hoopla-bg-blueish": "#F6F9FE",
        "hoopla-secondary-violet": "#8C7EF7",
        "hoopla-secondary-orange": "#FA884C",
        "hoopla-secondary-blue": "#78B6FF",
        "hoopla-secondary-yellow": "#FAC344",
        "hoopla-secondary-red": "#FD5A64"
      },
      fontFamily:{
        "aeonikPro-regular": ["AeonikPro-Regular"],
        "aeonikPro-bold": ["AeonikPro-Bold"],
      },
      opacity: {
        '12': '.12',
      }
    },
  },
  plugins: [],
}

