import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'paradise': {
          DEFAULT: '#003B57',
          light: '#004d71',
          dark: '#002e44',
          50: '#e6f1f5',
          100: '#cce3eb',
          200: '#99c7d8',
          300: '#66abc4',
          400: '#338fb1',
          500: '#003b57',
          600: '#002f46',
          700: '#002334',
          800: '#001823',
          900: '#000c11',
        }
      }
    },
  },

  plugins: [forms], 
};
