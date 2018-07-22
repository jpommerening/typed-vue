const path = require("path");
const VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  plugins: [new VueLoaderPlugin()],
  output: {
    path: resolve("dist"),
    publicPath: "dist/"
  },
  resolve: {
    extensions: [".js", ".ts", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: resolve("src"),
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        include: resolve("src"),
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        include: resolve("src"),
        loader: ["style-loader", "css-loader"]
      }
    ]
  }
};
