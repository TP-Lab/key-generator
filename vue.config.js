module.exports = {
  publicPath: '/',
  // publicPath: '/key-generator',
  devServer: {
    open: true,
    port: 12306,
  },
  // 配置编译 node_modules下的 nostr-tools 包
  transpileDependencies: ['nostr-tools'],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
      ],
    },
  }
};
