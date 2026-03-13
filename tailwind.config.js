/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#F55900',
        },
        dark: {
          900: '#000000',
          800: '#0D0D0D',
          700: '#141414',
        },
        gray: {
          400: '#939393',
          300: '#C3C3CA',
          200: '#F2F2F2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
