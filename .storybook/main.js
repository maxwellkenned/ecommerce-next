const webpack = require('webpack')

module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  babel: async options => ({
    ...options,
    plugins: [
      ...options.plugins,
      require.resolve('@babel/plugin-transform-react-jsx')
    ]
  }),
  webpackFinal: config => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.__NEXT_IMAGE_OPTS': JSON.stringify({
          deviceSizes: [320, 420, 768, 1024, 1200],
          imageSizes: [1024, 1200],
          domains: ['www.petlove.com.br'],
          path: '/',
          loader: 'default'
        })
      })
    )

    return config
  }
}
