const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "assets/bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: "babel-loader"
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
            watch: true
        },
        port: 8080,
        hot: true,
        open: true
    }
}