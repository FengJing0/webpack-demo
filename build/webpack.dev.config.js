const webpack = require('webpack')
const path = require('path')

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        port: 8090,
        hot: true,
        host: 'localhost',
        hotOnly: true,
        historyApiFallback:true,
        proxy: {
            "/v2/movie": {
                target: "http://api.douban.com",
                changeOrigin: true,
                pathRewrite: {
                    'demo':'top250'
                }
            }
            // '/react/api': {
            //     target: "http://www.dell-lee.com",
            //     changeOrigin: true,
            //     pathRewrite: {
            //         'header.json': 'demo.json'
            //     }
            // }
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        usedExports: true,
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/'
    }

}

module.exports = devConfig