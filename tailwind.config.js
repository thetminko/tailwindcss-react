module.exports = {
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/App.js'], // this setting will automatically purge if process.env.NODE_ENV is production else it will not do anything
  // purge: { // use this if you want to run even in development env. You will need to re-build if you include classes that were already purged
  //   enabled: true,
  //   content: ['./src/**/*.html', './src/**/*.jsx']
  // },
  theme: {
    // colors: { // this will totally override the Tailwind theme's color. There will be only one color (black) in theme.
    //   black: '#000'
    // },
    extend: {  // To add more theme
      colors: { // to add more colors to the theme. This will have Tailwind's default colors + limegreen.
        limegreen: '#a8ff60' 
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'] // allow hover, focus for background color, https://tailwindcss.com/docs/pseudo-class-variants
  },
  plugins: []
}