const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
    optimization: {
        runtimeChunk: "single",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "WeatherNaut",
            template: "./src/index.html",
            chunks: ["index"],
            filename: "index.html",
        }),
    ],
    module: {
        rules: [

            {

                test: /\.css$/i,

                use: ["style-loader", "css-loader"],

            },
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,

                type: "asset/resource",
                generator: {
                    filename: "images/[name][ext][query]" // This sets the output path for images
                }

            },
        ],

    },
};