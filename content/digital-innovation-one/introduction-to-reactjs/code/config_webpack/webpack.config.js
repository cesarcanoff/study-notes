const path = require("path");

module.exports = {
  entry: "./src/test.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundler.js",
  },
};
