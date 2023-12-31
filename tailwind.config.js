/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xl: '1024px',
        coxl: '1366px',
        '2xl': '1440px',
        max: '2560px',
        // max-width breakpoints
        md: { max: '768px' },
        maxcomd: { max: '425px' },
        maxmd: { max: '375px' },
        maxxl: { max: '320px' },
      },
      colors: {
        blck: '#000000',
        gren: '#A3D5BD',
        wite: '#FFFFFF',
        c1: '#F5F5F5',
        c2: '#F4F4F4',
        c3: '#3D3D3D',
        c4: '#38BDF8'
      },
    },
  },
  plugins: [],
}
