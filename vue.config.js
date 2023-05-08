const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  publicPath: '/',
  // publicPath: '/key-generator',
  devServer: {
    open: true,
    port: 12306,
  },
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()]
  }
});
