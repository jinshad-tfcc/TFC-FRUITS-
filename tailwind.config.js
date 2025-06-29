/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff3f0',
          100: '#ffe4de',
          200: '#ffcdc2',
          300: '#ffaa98',
          400: '#ff7a5c',
          500: '#ff6f61',
          600: '#ed4a2f',
          700: '#c83b26',
          800: '#a53424',
          900: '#872f25',
        },
        secondary: {
          50: '#fff8f0',
          100: '#ffefd9',
          200: '#ffdbb3',
          300: '#ffc082',
          400: '#ff9a4f',
          500: '#ff7a29',
          600: '#f05d0f',
          700: '#c7450a',
          800: '#9e3710',
          900: '#7f2f10',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      }
    },
  },
  plugins: [],
}