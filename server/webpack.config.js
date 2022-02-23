const path = require("path");
const nodeExternals = require("webpack-node-externals")

module.exports = {
  entry: "./src/app.ts",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "server.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader"
      }
    ]
  }
}