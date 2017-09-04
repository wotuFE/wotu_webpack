var webpack = require('webpack')
var path = require('path')
// 用来合并配置
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config.js')
module.exports = merge(baseWebpackConfig, {
    output: {
        filename: '[name].js',
        // 必须是绝对路径
        path: path.join(__dirname, '../dist')
    },
    // 开发环境开启
    // devtool: '#cheap-module-eval-source-map',
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
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        inline: true, //实时刷新
    }
  })