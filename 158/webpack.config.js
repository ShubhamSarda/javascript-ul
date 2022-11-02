const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist/assets"),
        filename: "bundle.js",
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
    mode: "production"
}