/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0A0A0A",
        red: "#C82A2D"
      },
      spacing: {
        '9': '2.25rem',
        '18': '4.5rem',
        '26': '6.375rem',
        '50': '12.5rem'
      },
    },
  },
  plugins: [],
}