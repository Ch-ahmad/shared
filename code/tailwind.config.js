/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFCC00',
        secondary: '#FA1B53',
        third: '#000027',
        hoverBg: '#ffffff1a',
        textWhite: {
          primary: '#f5f5f5',
          secondary: '#a8a8a8',
        },
      },
      boxShadow: {
        form: ' rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
      },
    },
  },
  plugins: [],
};
