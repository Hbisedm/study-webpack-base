const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/app.js',
    // devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin()
    ],
    optimization: {
        usedExports: 'global'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
}