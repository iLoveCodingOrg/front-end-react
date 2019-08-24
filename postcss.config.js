const cssNano = require('cssnano')

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-for'),
    cssNano({
      preset: 'default',
    }),
  ],
}
