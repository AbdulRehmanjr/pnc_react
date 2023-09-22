/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        "forest-green":"#15A048"
      }
    },
  },
  plugins: [
    "flowbite/plugin",
    "@tailwindcss/forms"
  ],

}
