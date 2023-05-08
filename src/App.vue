<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  background-color: transparent;
}
#app {
  min-height: calc(100vh - 20px);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
}
@media screen and (max-width: 767px) {
  // #app {
  //   padding: 20px 40px 0;
  // }
}
</style>
