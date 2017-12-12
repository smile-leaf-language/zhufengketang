let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve("build"),
        filename:bundle.js
    },
    devtool:"cheap-module-source-map",
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                query:{
                    presets:["es2015","stage-0","react"]
                },
                exclude:/node_modules/
            },
            {
                test:/\.less$/,
                loaders:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.(jpg|png|gif)/,
                loader:"url-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"index.html"
        })
    ]
}