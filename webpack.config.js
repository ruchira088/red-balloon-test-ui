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
                loader: "babel-loader"
            }
        ]
    }
}