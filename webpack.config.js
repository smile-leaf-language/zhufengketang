let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve("build"),
        filename:"bundle.js"
    },
    devtool:"cheap-module-source-map",
    devServer: {//这个东西有的时候不稳定  不靠谱  有时管用有时不管用，所以不推荐使用
        proxy:{
            "/api":"http://localhost:3000"
        }
    },
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