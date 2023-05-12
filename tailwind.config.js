import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/components/**/*.{js,jsx}', './src/pages/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#fff',
        primary: {
          50: 'hsl(240, 50%, 96%)',
          100: 'hsl(240, 50%, 90%)',
          200: 'hsl(240, 50%, 81%)',
          300: 'hsl(240, 50%, 72%)',
          400: 'hsl(240, 50%, 63%)',
          500: 'hsl(240, 50%, 54%)',
          600: 'hsl(240, 50%, 42%)',
          700: 'hsl(240, 50%, 32%)',
          800: 'hsl(240, 50%, 24%)',
          900: 'hsl(240, 50%, 14%)',
          950: 'hsl(240, 50%, 10%)',
        },
        blue: colors.blue,
        sky: colors.sky,
        red: colors.red,
        amber: colors.amber,
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1280px',
        },
      },
      fontFamily: {
        sans: ['RuneScape', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: '22px',
        sm: '28px',
        md: '32px',
        lg: '40px',
        xl: '48px',
        '2xl': '56px',
        '3xl': '64px',
        '4xl': '72px',
      },
    },
  },
  plugins: [],
}

export default config
