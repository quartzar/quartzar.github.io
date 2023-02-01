const colors = require('tailwindcss/colors');
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    // require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    require('tailwindcss-animatecss')({
      classes: ['animate__animated', 'animate__fadeIn', 'animate__bounceIn', 'animate__lightSpeedOut'],
        settings: {
          animatedSpeed: 1000,
          heartBeatSpeed: 1000,
          hingeSpeed: 2000,
          bounceInSpeed: 750,
          bounceOutSpeed: 750,
          animationDelaySpeed: 1000
        },
        variants: ['responsive', 'hover', 'reduced-motion'],
    }),

  ],
  content: [
    './content/**/*.{md,yml,json,json5,csv}',
  ],
  theme: {
    // fontFamily: {
    //   'serif': ['Inter'],
    // },
    extend: {
      colors: {
        // Customize the feeling of your site
        zinc: {
          940: '#0d1117',
          950: '#010409'
        }
      },
      fontFamily: {
        sans: ["Recursive", ...defaultTheme.fontFamily.sans],
        serif: ["Poppins", ...defaultTheme.fontFamily.serif],
        mono: ["Recursive", ...defaultTheme.fontFamily.mono]
      }
    }
  }
}
