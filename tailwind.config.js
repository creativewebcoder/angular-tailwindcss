module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      padding: ['responsive', 'hover', 'focus', 'first', 'last'],
      margin: ['responsive', 'hover', 'focus', 'first', 'last'],
      backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      borderStyle: ['hover'],
      boxShadow: ['hover'],
      gridTemplateRows: ['responsive'],
      borderColor: ['responsive', 'focus', 'hover', 'first', 'last'],
      borderWidth: ['responsive', 'focus', 'hover', 'first', 'last'],
      backgroundSize: ['responsive', 'hover', 'focus'],
      maxWidth: ['responsive'],
      display: ['responsive', 'hover', 'group-hover', 'focus'],
      minWidth: ['responsive'],
      flex: ['responsive'],
      flexShrink: ['responsive'],
      position: ['responsive'],
      space: ['responsive'],
    },
  },
  plugins: [
   
  ],
}
