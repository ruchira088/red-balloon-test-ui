const path = require("path")

module.exports = {
    entry: path.join(__dirname, "app", "Entry.jsx"),
    output: {
        path: path.join(__dirname, "public", "build"),
        filename: "bundle.js",
        publicPath: "/build/"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: "file-loader?name=images/[name].[ext]"
            }
        ]
    },
    resolve: {
        alias: {
            styles: path.join(__dirname, "app", "styles"),
            assets: path.join(__dirname, "app", "assets")
        }
    }
}