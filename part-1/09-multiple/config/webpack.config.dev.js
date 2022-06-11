const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin')


module.exports = {
  // entry: {
  //     index: './src/index.js',
  //     another: './src/another-module.js',
  // },

  output: {
    filename: "scripts/[name].js", //删掉[contentHash]缓存文件名
    // path: path.resolve(__dirname, '../dist'),
    // clean: true,
    // assetModuleFilename: 'images/[name][hash:8][ext]',
    // publicPath: 'http://localhost:8080/' //dev环境 没必要
  },
  mode: "development", //dev 肯定使用这个

  devtool: "inline-source-map", //需要调试代码，这个是需要的

  // plugins: [
  //     new HtmlWebpackPlugin({
  //         template: './index.html',
  //         filename: 'app.html',
  //         inject: 'body'
  //     }),
  //     new MiniCssExtractPlugin({
  //         filename: 'styles/[contenthash].css'
  //     })
  // ],
  devServer: {
    // dev环境肯定需要这个
    static: "./dist",
  },
  // module: {
  //     rules: [
  //         {
  //             test: /\.png$/,
  //             type: 'asset/resource',
  //             generator: {
  //                 filename: 'images/test.png'
  //             }
  //         },
  //         {
  //             test: /\.svg$/,
  //             type: 'asset/inline'
  //         },
  //         {
  //             test: /\.txt$/,
  //             type: 'asset/source'
  //         },
  //         {
  //             test: /\.jpg$/,
  //             type: 'asset',
  //             parser: {
  //                 dataUrlCondition: {
  //                     maxSize: 2 * 1024 * 1024
  //                 }
  //             }
  //         },

  //         {
  //             test: /\.(css|less)$/,
  //             use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
  //         },

  //         {
  //             test: /\.(woff|woff2|eot|ttf|otf)$/,
  //             type: 'asset/resource',
  //         },

  //         {
  //             test: /\.(csv|tsv)$/,
  //             use: 'csv-loader',
  //         },
  //         {
  //             test: /\.xml$/,
  //             use: 'xml-loader',
  //         },

  //         {
  //             test: /\.toml$/,
  //             type: 'json',
  //             parser: {
  //                 parse: toml.parse
  //             }
  //         },
  //         {
  //             test: /\.yaml$/,
  //             type: 'json',
  //             parser: {
  //                 parse: yaml.parse
  //             }
  //         },
  //         {
  //             test: /\.json5$/,
  //             type: 'json',
  //             parser: {
  //                 parse: json5.parse
  //             }
  //         },
  //         {
  //             test: /\.js$/,
  //             exclude: /node_modules/,
  //             use:{
  //                 loader: 'babel-loader',
  //                 options: {
  //                     presets: ['@babel/preset-env'],
  //                     plugins: [
  //                         [
  //                             '@babel/plugin-transform-runtime',
  //                         ]
  //                     ]
  //                 }
  //             }
  //         }

  //     ]
  // },

//   optimization: {
//     // dev环境不需要压缩
//     // minimizer: [
//     //     new CssMinimizerPlugin(),
//     //     new TerserPlugin()
//     // ],
//     splitChunks: {
//       cacheGroups: {
//         vendor: {
//           test: /[\\/]node_modules[\\/]/,
//           name: "vendors",
//           chunks: "all",
//         },
//       },
//     },
//   },
};
