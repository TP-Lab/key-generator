const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  publicPath: process.env.VUE_APP_ENV !== 'production' ? '/key-generator' : '/',
  devServer: {
    open: true,
    port: 12306,
  },
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options = {}) => ({
        ...options,
        compilerOptions: {
          ...(options.compilerOptions || {}),
          isCustomElement: (tag) => tag.startsWith('tp-')
        }
      }))
  },
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()]
  }
});
