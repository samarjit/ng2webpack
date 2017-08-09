'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

const rootDir = path.resolve(__dirname, '..');

module.exports = {
    // debug: true,
    devServer: {
        contentBase: path.resolve(rootDir, 'dist'),
        port: 9000
    },
    devtool: 'cheap-module-eval-source-map',//'source-map',
    entry: {
        app: [ path.resolve(rootDir, 'src', 'bootstrap') ],
        // vendor: [ path.resolve(rootDir, 'src', 'vendor') ]
    },
    module: {
        rules: [
            { loader: 'raw-loader', test: /\.(html)$/ },
            {   
                test: /\.ts$/,
                use:[
                    {
                        loader: 'ts-loader'
                    },
                    {
                        loader: 'angular2-template-loader'
                    },
                    {
                        loader: 'angular-router-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader'],
                exclude: ['src/styles1.css']
            },
        ]
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: 'dist/[id].chunk.js',
        path: path.resolve(rootDir, 'dist')
    },
    plugins: [
        // new ChunkWebpack({
        //     filename: 'vendor.bundle.js',
        //     minChunks: Infinity,
        //     name: 'vendor'
        // }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'src', 'app', 'index.html')
        }),
        new CopyWebpackPlugin([
        { from: 'src/*.html', to: 'dist' },
        { from: 'src/styles1.css', to: 'styles1.css' },
        // { from: 'src/meta'}
        ], undefined)
    ],
    resolve: {
        extensions: [ '.js', '.ts','.css' ]
    },
        node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
};