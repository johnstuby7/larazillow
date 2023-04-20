/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './storage/framework/*.php',
    './resources/view/**/*.blade.php',
    './resources/js/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

