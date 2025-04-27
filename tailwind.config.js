/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#d9e2f0',
          200: '#b3c5e1',
          300: '#8da8d2',
          400: '#668bc3',
          500: '#406eb4',
          600: '#335890',
          700: '#26436c',
          800: '#1a2d48',
          900: '#0d1624',
        },
        terracotta: {
          50: '#fbf2ef',
          100: '#f6e0d8',
          200: '#edc1b1',
          300: '#e3a28a',
          400: '#da8363',
          500: '#d1643c',
          600: '#a75030',
          700: '#7d3c24',
          800: '#542818',
          900: '#2a140c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};