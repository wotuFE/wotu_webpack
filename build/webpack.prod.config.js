var path = require('path')
// 用来合并配置
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config.js')
var webpack = require('webpack')
module.exports = merge(baseWebpackConfig, {
    output: {
        // 带5位hash,用来做缓存
        filename: '[name]-[hash:5].js',
        // 必须是绝对路径
        path: path.join(__dirname, '../dist'),
        // 发布生产时需要配置
        publicPath: 'http://127.0.0.1:8080/dist/'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
  })