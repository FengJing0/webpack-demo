const merge = require('webpack-merge')
const BaseConfig = require('./webpack.base.config')

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
}

module.exports = merge(BaseConfig, prodConfig)