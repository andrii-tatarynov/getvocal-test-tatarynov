/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      primary: "Montserrat"
    },
    colors: {
      transparent: 'transparent',
      primary: '#17A2B8',
      secondary: '#DEE2E6',
      white: '#ffffff',
      lightGrey: '#CED4DA',
      grey: '#6C757D',
      darckGrey: '#54595E',
      red: '#ef4444'
    },
  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.page-root': {
          minWidth: '454px',
          margin: '0 auto',
          padding: '4rem',
        },
        '.btn': {
          borderRadius: '8px',
          border: '1px solid transparent',
          padding: '8px 16px 8px 24px',
          cursor: 'pointer',
          transition: 'border-color 0.25s',
          '&:hover': {
            borderColor: '#646cff',
          },
          '&:focus': {
            outline: '4px auto -webkit-focus-ring-color',
          }
        },
        '.btn-primary': {
          backgroundColor: theme('colors.primary'),
          fontWeight: 600,
          color: theme('colors.white'),
        },
        '.btn-white': {
          border: '1px solid',
          borderColor: theme('colors.lightGrey'),
          backgroundColor: theme('colors.white'),
          color: theme('colors.grey'),
        }
      })
    })
  ],
}

