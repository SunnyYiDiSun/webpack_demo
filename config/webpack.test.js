const path = require("path");
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        test: './src/tsentry.ts'
    },
    output: {
        path: path.resolve(__dirname, '../dist2'),
        filename: "[name].js",
        clean: true
    },
    module: {
        rules: [

            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true,
                }
            },
            {
                test: /\.js$/,
                use:[
                    '../src/loader/clearLogLoader','babel-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                use:[
                    './src/loader/clearLogLoader',
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                default: {
                    minSize: 0,
                    minChunks: 2,
                    reuseExistingChunk: true
                }
            }
        },

    },
    mode: 'production',
    devtool: 'source-map'
}