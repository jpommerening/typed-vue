const VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;
const path = require("path");
const resolve = (...args) => path.resolve(__dirname, ...args);

module.exports = {
  output: {
    path: resolve("./dist/"),
    publicPath: "dist/",
    filename: "[name].js"
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: [ ".js", ".vue" ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        include: resolve("src")
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
        include: resolve("src")
      },
      {
        test: /\.(gif|jpe?g|png|ttf|woff2?|svg|eot|otf)(\?.*)?$/,
        use: "file-loader?name=[name]-[sha1:hash:hex:6].[ext]"
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: "img-loader?progressive=true"
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader?sourceMap"
        ]
      },
      {
        test: /\.scss$/,
        use: "sass-loader?sourceMap",
        include: resolve("src")
      }
    ]
  }
};
