const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
  mode: "development",
  entry: ["babel-polyfill", SRC_DIR + "/app/index.js"],
  plugins: [
    new HtmlWebpackPlugin({
      title: "PoolingApp",
      filename: "index.html",
      template: "src/index.html"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: SRC_DIR,
    historyApiFallback: true
  },
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["react", "es2015", "stage-2", "stage-0"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};

module.exports = config;
