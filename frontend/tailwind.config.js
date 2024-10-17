/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Honk', 'sans-serif'],
      serif: ['Love Ya Like A Sister', 'serif'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
