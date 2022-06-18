// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { join } = require('path')

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: "./src/main.js",  // 入口
    output: {
        path: join(__dirname, "lib"),  // 出口路径
        filename: "index.js",  // 出口文件名
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 自定义打包的html模版,用绝对路径
            template: join(__dirname, 'public/main.html')
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        open: true,
        port: 30000
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader"]

            },
            {
                test: /\.(png|gif)$/i,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 2 * 1024
                    }
                },
                generator: {
                    filename: "images/[hash:4][ext]"
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|)$/i,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[hash:4][ext]"
                }
            },
            {
                test: /\.js$/i,
                use: ["babel-loader"]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ],
    },

}