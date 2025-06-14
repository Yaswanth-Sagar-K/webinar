// craco.config.js
const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (config) => {
      config.resolve.fallback = {
        os: require.resolve("os-browserify/browser"),
        path: require.resolve("path-browserify"),
        stream: require.resolve("stream-browserify"),
        process: require.resolve("process/browser.js"), // ✅ FIXED
        buffer: require.resolve("buffer/"),
        util: require.resolve("util/"),
        querystring: require.resolve("querystring-es3"),
        url: require.resolve("url/"),
        crypto: require.resolve("crypto-browserify"),
        fs: false,
        net: false,
        tls: false,
      };

      config.plugins.push(
        new webpack.ProvidePlugin({
          process: "process/browser.js", // ✅ FIXED HERE TOO
          Buffer: ["buffer", "Buffer"],
        })
      );

      return config;
    },
  },
};
