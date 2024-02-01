const shadcnPreset = require('./shadcd-preset');

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  mode: 'jit',
  darkMode: ['class'],
  presets: [shadcnPreset],
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};

module.exports = tailwindConfig;
