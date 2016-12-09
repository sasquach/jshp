const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ValidateConfig = require('webpack-validator');
const { resolve } = require('path');


module.exports = ValidateConfig({
    context: resolve('src'),
    entry: './main.jsx',
    output: {
        path: resolve('./dist/'),
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        preLoaders: [
            {
                test: /\.jsx$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.jpg$/,
                loaders: ['file-loader?name=[name].[ext]']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.ejs',
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    watchOptions: {
        poll: true
    }
})
