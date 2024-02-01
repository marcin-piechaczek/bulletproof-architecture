const defaultConfig = require('tailwind-config/tailwind.config');

/** @type {import("tailwindcss").Config} */
const config = {
  presets: [defaultConfig],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    // ui
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
};

module.exports = config;
