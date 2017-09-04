var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    // entry: './src/main.js',
    entry: {
        index: './src/index.js'
    },
    // 省略后缀和别名
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        },
    },
    module: {
        rules: [
            // 没生效
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary 
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings 
                }, {
                    loader: "css-loader" // translates CSS into CommonJS 
                }, {
                    loader: "sass-loader" // compiles Sass to CSS 
                }]
            },
            // https://www.npmjs.com/package/babel-loader
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        // 生成html
        new HtmlWebpackPlugin({
            title: 'index',
            filename: 'index.html',
            template: 'index.html'
        }),
        // 抽离样式
        new ExtractTextPlugin("styles.css"),
        // 提取公共样式
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            // (the commons chunk name)
            filename: "commons.js",
            minChunks: 3,
            // (Modules must be shared between 3 entries)
            // chunks: ["pageA", "pageB"],
            // (Only use these entries)
        }),
        // 定义全局变量,编译的时候全局变量存在,一般用来区分不同的环境
        
        new webpack.DefinePlugin({
           __DEV__: process.env.NODE_ENV !== 'prod'
        }),
        // 开启source-map方法2
        // new webpack.SourceMapDevToolPlugin({
        //     filename: '[name].js.map',
        //     exclude: ['commons.js']
        // }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/assets',to: 'assets'
            }
        ])
    ]
}