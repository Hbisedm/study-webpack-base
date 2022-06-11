const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            title: '多页面应用功能',
            inject: 'body', // 定义注入的位置
            filename: 'chanel1/index.html', //配置html生成后的打包路径
            chunks: ['main', 'lodash']
        }),
        new HtmlWebpackPlugin({
            template: './index2.html',
            inject: 'body',
            filename: 'chanel2/index2.html', //配置html生成后的打包路径
            chunks: ['main2', 'lodash']
        })
    ],
    output: {
        clean: true
    },
    entry: {
        main: {
            import: ['./src/app2.js', './src/app.js'],
            dependOn: 'lodash',
            filename: 'chanel1/[name].js' //配置js生成后的打包路径
        },
        main2: {
            import: ['./src/app3.js'],
            dependOn: 'lodash',
            filename: 'chanel2/[name].js' ////配置js生成后的打包路径 
        },
        lodash: {
            import: ['lodash'],
            filename: 'common/[name].js'
        }
    }
}