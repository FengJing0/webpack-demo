const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')

const commonConfig = {
  entry: {
    index: './src/index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 省略文件后缀
    // mainFiles:['index']
    alias: {// 别名
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,//除了node_modules
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader:path.resolve(__dirname,'../','./upload-loader/index.js')
          },
          {
            loader: 'url-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
              // fallback: path.resolve(__dirname,'../','./upload-loader/index.js'),
              limit: 20480 //小于20kb,就可以转化成base64格式。大于就会打包成文件格式
            }
          },
        ]
      },
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader'
        }
      },
    
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './favicon.ico'
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    })
  ],
  optimization: {
    runtimeChunk: {// 文件间相互引用的关系，避免文件没改变但contenthash改变了
      name: 'runtime'
    },
    splitChunks: {// Code Splitting
      chunks: 'all',//参数all/initial/async，只对所有/同步/异步进行代码分割
      minSize: 30000,//大于30kb才会对代码分割
      minChunks: 1,//打包生成的文件，当一个模块至少用多少次时才会进行代码分割
      maxAsyncRequests: 5,//同时加载的模块数最多是5个
      maxInitialRequests: 3,//入口文件最多3个模块会做代码分割，否则不会
      automaticNameDelimiter: '~',//文件自动生成的连接符
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,//谁优先级大就把打包后的文件放到哪个组
        },
        default: {
          priority: -20,
          reuseExistingChunk: true,//模块已经被打包过了，就不用再打包了，复用之前的就可以
        }
      }
    },
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  }
}

module.exports = (env) => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig)
  } else {
    return merge(commonConfig, devConfig)
  }
}
