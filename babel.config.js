module.exports = {
  presets: ['@vue/app'],
  // @babel/plugin-proposal-optional-chaining 用来编译 可选链运算符 ?.
  // @babel/plugin-proposal-nullish-coalescing-operator 用来编译 空值合并运算符 ??
  // 需要开启 transpileDependencies: ['nostr-tools'],
  plugins: ['@babel/plugin-proposal-optional-chaining', '@babel/plugin-proposal-nullish-coalescing-operator']
};
