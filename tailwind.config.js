/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 2s infinite',
        'drop-in': 'dropIn 1.5s ease-out forwards',
      },
      keyframes: {
        dropIn: {
          '0%': {
            transform: 'translateY(-100px)',
            opacity: '0'
          },
          '50%': {
            transform: 'translateY(10px)',
            opacity: '0.8'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      },
      colors: {
        orange: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
      },
    },
  },
  plugins: [],
};