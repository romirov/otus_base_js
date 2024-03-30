const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/script.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Base template",
      // Load a custom template
      template: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      title: "Article template",
      // Load a custom template
      template: "article.html",
      chunks: ["article"],
    }),
    new HtmlWebpackPlugin({
      title: "Chat template",
      // Load a custom template
      template: "chat.html",
      chunks: ["chat"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
