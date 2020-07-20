const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist/",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-transform-react-jsx",
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
            ],
          },
        },
      },
      {
        test: /\.module\.(c|sa|sc)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development",
            },
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[local]__[sha1:hash:hex:8]",
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /^((?!\.module).)*(c|sc|sa)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      "~c": path.resolve(__dirname, "src/components"),
      "~p": path.resolve(__dirname, "src/containers"),
      "~a": path.resolve(__dirname, "assets"),
    },
  },

  plugins: [new MiniCssExtractPlugin()],

  devServer: {
    historyApiFallback: true,
    overlay: true,
  },
};
