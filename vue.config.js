module.exports = {
  publicPath: '/',
  // publicPath: '/key-generator',
  devServer: {
    open: true,
    port: 12306,
  },
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
  },
}
