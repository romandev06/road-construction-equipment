/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundColor: {
        bgColorInput: '#F8F8F8',
      },
      height: {
        heightDigger: '555px',
      },
      backgroundColor: {
        bgColorButton: '#ED1C24',
      },
      width: {
        widthButton: '333px',
      },
      fontFamily: {
        headerFont: ['Montserrat',' sans-serif'],
      },
      transitionDuration: {
        durationButton: '1s'
      },
      margin: {
        marginImg: '0 0 0 28px',
      },
      colors: {
        colorTextP: 'rgba(125, 125, 125, 0.8)',
      },
      borderColor: {
        borderColorWay: '#4E4E4E',
      },
      borderRadius: {
        customBlock: '1.5rem',
      },
    },
  },
  plugins: [],
}

