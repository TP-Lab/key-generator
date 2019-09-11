<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, SF Pro SC, SF Pro Text,
    Helvetica Neue, Helvetica, PingFang SC, Segoe UI, Roboto, Hiragino Sans GB,
    arial, microsoft yahei ui, Microsoft YaHei, SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  padding: 20px;
  overflow: hidden;
  word-break: break-word;
  white-space: normal;
}
</style>
