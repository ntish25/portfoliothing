/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'instrument': ['"Instrument Sans"', 'sans-serif'],
        'overpass': ['"Overpass Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'progress': 'progressAnimation 5s linear',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'sunset-gradient': 'linear-gradient(to right, #f5a9b8, #5b9bd5)',
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        'blue-dark': '#1a2a50',
        'blue-medium': '#2b5797',
        'blue-light': '#5b9bd5',
        'pink-light': '#f5a9b8',
      },
      transitionProperty: {
        'background': 'background-color, background-image, background-position, background-size, background-repeat, background-origin, background-clip',
      },
    },
  },
  plugins: [],
}