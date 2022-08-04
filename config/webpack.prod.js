
let EsLintPlugin = require('eslint-webpack-plugin');
let HtmlPlugin = require('html-webpack-plugin');
let path = require('path');
let CssExtract = require('mini-css-extract-plugin');
let Cssminimizer = require('css-minimizer-webpack-plugin');
let TerserPlugin = require('terser-webpack-plugin');
const CleanPlugins = require('../src/plugins/cleanPlugins');
const os = require('os');
const threads = os.cpus().length;
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'static/js/[name].[contenthash:10].js',
        chunkFilename: 'static/js/[name].[contenthash:10].chunk.js',
        assetModuleFilename: 'static/media/[contenthash:10][ext][query]',
        clean: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'thread-loader',
                        options: {
                            works: threads
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            // cacheDirectory: true, //开启babel缓存
                            // cacheCompression: false // 关闭压缩缓存文件
                            presets: [
                                '@babel/preset-env'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [CssExtract.loader, 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                'postcss-preset-env'
                            ]
                        }
                    }
                }]
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
                    filename: 'static/img/[contenthash:10][ext][query]'
                }
            },
            {
                test: /\.(woff2|woff|ttf)$/,
                type: "asset/resource"
            }
        ]
    },
    optimization: {
        minimizer: [
            //压缩css
            new Cssminimizer(),
            //压缩js
            new TerserPlugin({
                //开启多线程
                parallel: threads
            })
        ],
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: {
            name: entry => `runtime~${entry.name}`
        }
    },
    plugins: [
        new EsLintPlugin({
            //插件的路径
            context: path.resolve(__dirname, '../src'),
            cache: true,
            cacheLocation: path.resolve(__dirname, '../node_modules/.cache/eslintCache'),
            threads
        }),
        new HtmlPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
        new CssExtract({
            filename: 'static/css/[contenthash:10].css'
        }),
        new CleanPlugins()
    ],
    mode: 'production',
    devtool: 'source-map'
}
// {
//     template:path.resolve(__dirname,'src/public/index.html')
// }