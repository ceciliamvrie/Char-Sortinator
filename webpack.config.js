const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: ["./client/index.js"],
  output: {
    path: path.resolve(__dirname, "./server/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};
