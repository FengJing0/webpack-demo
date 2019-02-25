const webapck = require('webpack')
const merge = require('webpack-merge')
const BaseConfig = require('./webpack.base.config')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: "./dist",
    open: true,
    port: 8090,
    hot: true,
    // hotOnly: true
  },
  plugins: [
    new webapck.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  }
}

module.exports = merge(BaseConfig,devConfig)