const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './app.js',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        compress: true,
        port: 3000, //这个时候的本地开发服务器就是 localhost:3000
        host: '0.0.0.0',
        headers: {
            'X-Access-Token': 'abc123'
        },
        proxy: {
            '/api': 'http://localhost:9000'
        }
    },

    plugins: [
        new HtmlWebpackPlugin()
    ],
}