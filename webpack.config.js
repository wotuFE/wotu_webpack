var devConfig = require('./build/webpack.dev.config.js');
var prodConfig = require('./build/webpack.prod.config.js');
// 判断环境
if (process.env.NODE_ENV === 'prod') {
    console.log('现在生产环境');
    module.exports = prodConfig;
} else {
    console.log('现在是开发环境');
    module.exports = devConfig;
}