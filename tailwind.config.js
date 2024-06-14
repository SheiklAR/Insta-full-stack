/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'segoe': ['"Segoe UI"', 'sans-serif']
      },
      fontSize: {
        '2xl-plus': '1.55rem',
      },
      width: {
        'md': '448px'
      }
    },
  },
  plugins: [],
}
