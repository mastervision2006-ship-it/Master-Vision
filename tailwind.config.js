/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0B0B0F',
          red: '#C1121F',
          darkRed: '#5a090f',
          gray: '#1A1A1E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(180deg, rgba(11,11,15,0) 0%, rgba(193,18,31,0.05) 100%)',
        'glass': 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(193, 18, 31, 0.4)',
        'glow-sm': '0 0 10px rgba(193, 18, 31, 0.3)',
      }
    },
  },
  plugins: [],
}