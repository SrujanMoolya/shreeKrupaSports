/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003366',
          light: '#336699',
          dark: '#001a33',
        },
        secondary: {
          DEFAULT: '#FFD700',
          light: '#FFE44D',
          dark: '#B39700',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8))",
      },
    },
  },
  plugins: [],
} 