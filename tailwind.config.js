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
          DEFAULT: '#860F1B',
          light: '#a61321',
          dark: '#660b15',
        },
        secondary: {
          DEFAULT: '#0F5B94',
          light: '#1372b8',
          dark: '#0b4470',
        },
        accent: {
          DEFAULT: '#FAA61B',
          light: '#fbb849',
          dark: '#d98a0e',
        },
        neutral: {
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        text: '#515856',
        gray: {
          50: '#F9FAFB',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}