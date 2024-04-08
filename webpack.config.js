const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line import/no-extraneous-dependencies
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/script.js",
    article: "./src/article.js",
    chat: "./src/chat.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Base template",
      // Load a custom template
      inject: true,
      template: "index.html",
      chunks: ["main"],
      filename: "index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/imgs", to: "imgs" }],
    }),
    new HtmlWebpackPlugin({
      title: "Article template",
      // Load a custom template
      inject: true,
      template: "article.html",
      chunks: ["article"],
      filename: "article.html",
    }),
    new HtmlWebpackPlugin({
      title: "Chat template",
      // Load a custom template
      inject: true,
      template: "chat.html",
      chunks: ["chat"],
      filename: "chat.html",
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
