const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    
    entry: './app.js',

    devtool: 'cheap-source-map',

    output: {
        clean: true
    },

    plugins: [
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}