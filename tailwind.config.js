/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      
 colors : {
  "white": "#ffffff",
  "beige": "#fffaef",
  "yellow": "#ffd975",
  "green-light": "#afcaab",
  "green-mid": "#80987c",
  "green-dull": "#4c6c5e"
 },
 fontSize: {
  "xs": "0.75rem",
  "sm": "0.875rem",
  "base": "1rem",
  "lg": "1.125rem",
  "xl": "1.25rem",
  "2xl": "1.5rem",
  "3xl": "2rem",
  "4xl": "2.5rem"
 },
 fontFamily: {
  "europa-grotesk-sh": "Europa Grotesk SH",
  "poppins": "Poppins"
 },
 boxShadow: {
  "card-shadow": "-6px 4px 5px 0px rgba(0,0,0,0.1)"
 },
 borderRadius: {
  "none": "0",
  "xs": "0.0625rem",
  "sm": "0.3125rem",
  "default": "0.625rem",
  "lg": "1.0625rem",
  "xl": "1.25rem",
  "2xl": "1.7637690305709839rem",
  "3xl": "1.875rem",
  "4xl": "2.033872127532959rem",
  "5xl": "2.96875rem",
  "6xl": "3.03125rem",
  "7xl": "3.125rem",
  "8xl": "3.4375rem",
  "9xl": "3.75rem",
  "10xl": "3.96875rem",
  "11xl": "4.4375rem",
  "12xl": "4.6875rem",
  "13xl": "4.78125rem",
  "14xl": "4.8125rem",
  "15xl": "5.3345842361450195rem",
  "full": "9999px"
 },
extend: {
      gridTemplateColumns: {
        principal: 'repeat(12, minmax(0, 64px))'
      }
		}
  },
  plugins: []
}
}