/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',

  ],
  theme: {
    extend: {},
    fontFamily: {
      "chivo": 'Chivo Mono',
      'lato': 'Lato',
      'caveat': 'Caveat'
    }
  },
  plugins: [
    // ...
    require('flowbite/plugin'),
  ],
}