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
        // load javascript with babel
        test: /\.js$/,
        use: "babel-loader",
        include: resolve("src")
      },
      {
        // load vue components with vue-loader
        test: /\.vue$/,
        use: "vue-loader",
        include: resolve("src")
      },
      {
        // load images and fonts with the file-loader
        // (out-of-bundle in dist/assets/)
        test: /\.(gif|jpe?g|png|ttf|woff2?|svg|eot|otf)(\?.*)?$/,
        use: "file-loader"
      },
      {
        // ... after optimizing graphics with the image-loader
        test: /\.(gif|jpe?g|png|svg)$/,
        use: "img-loader?progressive=true"
      },
      {
        // resolve CSS url()s and dependencies with the css-loader
        // and extract result for file-loader, and inject with style-loader
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        // load scss files by precompiling with the sass-loader
        test: /\.scss$/,
        use: "sass-loader",
        include: resolve("src")
      }
    ]
  }
};
