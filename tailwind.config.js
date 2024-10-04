/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {colors: {
      'custom-white' : 'hsl(0, 0%, 100%)',
      'custom-black' : 'hsl(0, 0%, 7%)',
      'custom-light-purple' : 'hsl(254, 88%, 90%)',
      'custom-purple' : 'hsl(256, 67%, 59%)',
      'custom-light-yellow' : 'hsl(31, 66%, 93%)',
      'custom-yellow' : 'hsl(39, 100%, 71%)',
    }},
  },
  plugins: [],
}


