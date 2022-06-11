const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    plugins: [
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 modules: true,
            //             }
            //         },
            //         'postcss-loader'
            //     ]
            // },
            {
                test: new RegExp(`^(?!.*\\.global).*\\.css$`),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[hash:base64:6]'
                            }
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: new RegExp(`^(.*\\.global).*\\.css$`),
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },

        ]
    }
}