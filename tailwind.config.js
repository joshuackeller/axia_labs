module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      fontSize: {
      logo: '1.38rem'
      },
      backgroundColor: {
        axiapink: '#FFC4FE',
        axiablack: '#232320',
      },
      textColor: {
        axiawhite: '#F0EEEA',
      },
      width: {
        '47%': '47%',
      },
      height: {
        '100': '25rem',
        '108': '27rem',
        '116': '27.5rem',
        '124': '30rem'
      },
      minHeight: {
        '100': '25rem',
        '108': '27rem',
        '116': '27.5rem',
        '124': '30rem'
      }
  },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
