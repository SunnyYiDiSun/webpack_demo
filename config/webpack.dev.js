
let esLintPlugin = require('eslint-webpack-plugin');
let HtmlPlugin = require('html-webpack-plugin');
let path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[hash:10].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 小于10kb图片转base64
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                },
                generator: {
                    filename: 'static/img/[hash:8][ext][query]'
                }
            },
            {
                test: /\.(woff2|woff|ttf)$/,
                type: "asset/resource",
                generator: {
                    filename: 'static/media/[hash:8][ext][query]'
                }
            }
        ]
    },
    plugins: [
        new esLintPlugin({
            //插件的路径
            context: path.resolve(__dirname, '../src')
        }),
        new HtmlPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        })
    ],
    mode: 'production',
    devServer: {
        host: 'localhost',
        port: 3000,
        open: true,
        hot: true
    },
    devtool: 'cheap-module-source-map'
}