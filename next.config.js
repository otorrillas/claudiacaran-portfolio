const withCss = require('@zeit/next-css')

module.exports = withCss({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(svg)$/,
      use: '@svgr/webpack',
    })
    return config
  },
})
