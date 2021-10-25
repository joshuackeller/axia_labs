module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      fontSize: {
        logo: '1.38rem',
        header: ['120px', '1'],
        headersmall: ['65px', '1']
      },
      backgroundColor: {
        axiapink: '#FFC4FE',
        fadedpink: '#F7E5F7',
        axiapurple: '#A88CFF',
        fadedpurple: '#DAD5EB',
        axiablack: '#232320',
        axiagray: '#F1F1F1'
      },
      textColor: {
        axiawhite: '#F0EEEA',
        axiapurple: '#A88CFF',
        axiablack: '#232320',
        axiapink: '#FFC4FE',
      },
      width: {
        '47%': '47%',
      },
      height: {
        '9/12': '75%',
        '100': '25rem',
        '108': '27rem',
        '116': '27.5rem',
        '124': '30rem'
      },
      minHeight: {
        '28': '8rem',
        '32': '9rem',
        '36': '10rem',
        '40': '11rem',
        '44': '12rem',
        '48': '13rem',
        '52': '14rem',
        '56': '15rem',
        '60': '16rem',
        '64': '18rem',
        '72': '20rem',
        '80': '24rem',
        '96': '24rem',
        '100': '25rem',
        '108': '27rem',
        '116': '29rem',
        '124': '31rem',
        '132': '33rem',
        '140': '35rem',
        '148': '37rem',
        '156': '39rem',
        '164': '41rem',
        '172': '43rem',
        '180': '45rem',
        '188': '47rem',
        '196': '49rem'
      },
      maxWidth: {
        '34': '9rem',
        '38': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '100': '25rem',
        '108': '27rem',
        '116': '29rem',
        '124': '31rem',
        '132': '33rem',
        '140': '35rem',
        '148': '37rem',
        '156': '39rem',
        '164': '41rem',
        '172': '43rem',
        '180': '45rem',
        '188': '47rem',
        '196': '49rem'
      },
      minWidth: {
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '100': '25rem',
        '108': '27rem',
        '116': '29rem',
        '124': '31rem',
        '132': '33rem',
        '140': '35rem',
        '148': '37rem',
        '156': '39rem',
        '164': '41rem',
        '172': '43rem',
        '180': '45rem',
        '188': '47rem',
        '196': '49rem'
      },
      marginLeft: {
        '30': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%'
      }
  },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
