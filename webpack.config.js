const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ValidateConfig = require('webpack-validator');
const { resolve } = require('path');


module.exports = ValidateConfig({
    context: resolve('src'),
    entry: './main.jsx',
    output: {
        path: resolve('./dist/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'eval-source-map',
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
            template: './index.ejs'
        })
    ],
    watchOptions: {
        poll: true
    }
})
