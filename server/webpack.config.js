const path = require("path");

module.exports = {
  entry: "./app.ts",
  module: {
    rules: [
      {
        test: /\tsx?$¥/,
        use: "ts-loader",
        exclude: "node_modules",
      },
    ],
  },
  devtool: "source-map",
  target: "node",
  resolve: {
    extension: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
