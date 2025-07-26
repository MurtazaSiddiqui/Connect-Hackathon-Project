/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // example custom color
        primary: "#4F46E5",
      },
      fontFamily: {
        // example custom font
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
