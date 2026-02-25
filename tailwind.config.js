/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          DEFAULT: '#DDD0FF',
          dark: '#C4B3F5',
        },
        golden: {
          DEFAULT: '#F5C418',
          dark: '#E0B310',
        },
        navy: {
          DEFAULT: '#1A103C',
          light: '#2D1F5E',
        },
        muted: '#6B6682',
        mint: {
          light: '#C2FAF2',
          DEFAULT: '#7ECABB',
          dark: '#5DBAA8',
        },
        periwinkle: {
          DEFAULT: '#9EA8DC',
          light: '#B8C0E8',
        },
        cream: '#FAFAD0',
        soft: {
          lavender: '#C4BCEC',
          mint: '#A8DFCC',
        },
        sky: '#87C5EE',
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Source Sans 3', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
