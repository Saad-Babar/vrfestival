/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        // coxs: '375px',
        // xs: '425px',
        // cosm: '500px',
        // sm: '576px',
        // comd: '680px',
        // colg: '850px',
        // lg: '992px',
        // md: '768px',
        xl: '1024px',
        coxl: '1366px',
        '2xl': '1440px',
        max: '2560px',
        // max-width breakpoints
        // maxcosm: { max: '424.5px' },
        md: { max: '768px' },
        maxcomd: { max: '425px' },
        // maxmd: { max: '767.5px' },
        // maxcolg: { max: '849.5px' },
        // maxlg: { max: '991.5px' },
        // maxxl: { max: '1199.5px' },
        // min and max width breakpoints
        // 'md-to-lg': { min: '768px', max: '992px' },
        // 'lg-to-xl': { min: '992px', max: '1199px' },
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
