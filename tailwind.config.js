module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FDD854",
        secondary: "#F44884",
        textColorDark: "#121212",
      }
    },
  },
  darkMode: 'class',
  variants: {},
  plugins: [],
}
