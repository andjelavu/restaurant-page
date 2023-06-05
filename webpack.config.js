const path = require("path");

module.exports = {
mode: "development",
entry: "./src/index.js",
output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
},
devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    hot: true,
  },
module: {
    rules: [
        {
            test: /\.css$/,
            use: ["style-loader","css-loader"]
        },
        {
            test: /\.html$/,
            use: ["html-loader"]
        },
        {
            test: /\.(svg|png|jpg|gif)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "imgs"
                }
            }
        }
    ]
}

};