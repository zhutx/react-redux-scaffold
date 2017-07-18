const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const devConfig = merge(baseConfig, {
    devtool: 'eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            'process.env.local': 'true',
        }),
        new HtmlwebpackPlugin({
            title: 'react-redux-scaffold',
            filename: 'index.html',
            template: path.resolve(SRC_PATH, 'templates', 'index.html')
        })
    ]
});

module.exports = devConfig;