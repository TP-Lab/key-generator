<template>
  <div class="mini-nav">
    <div class="mini-nav-logo-wrap">
      <img
        class="mini-navbar-logo pointer"
        src="../../assets/logo.png"
        @click="indexGo('/')"
      />
    </div>
    <div class="menu-status">
      <img src="../../assets/menu.png" @click="changeMenuState" alt />
    </div>

    <div class="menu-container" v-show="menuState">
      <tp-mini-navbar
        class="mini-navbar"
        ref="miniNavbarRef"
        :navList.prop="navList"
        :isDarkMode.prop="isDarkMode"
        @nav-click="handleNavClick"
        @nav-children-click.stop="handleNavChildrenClick"
        @dark-mode-switch="handleDarkModeSwitch"
      />
    </div>
  </div>
</template>

<script>
import Index from "./NavIndex";

export default {
  name: "miniNav",
  data() {
    return {
      isDarkMode: false,
    };
  },
  mixins: [Index],
  methods: {
    handleNavClick(event) {
      const { item, index, nativeEvent } = event.detail || {};

      if (!item) return;

      this.navGo(item, index, nativeEvent);

      if (!item.children) {
        this.menuState = false;
      }
    },
    handleNavChildrenClick(event) {
      const { item, nativeEvent } = event.detail || {};

      if (!item) return;

      this.navChildrenGo(item, nativeEvent);
      this.menuState = false;
    },
    handleDarkModeSwitch(event) {
      const { value } = event.detail || {};

      this.isDarkMode = Boolean(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.mini-nav {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 28px;
  background: #fff;
}

.mini-nav-logo-wrap {
  flex: 1;
}

.mini-navbar-logo {
  width: 175px;
  display: block;
}

.menu-container {
  display: none;
}

.menu-status {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    width: 29px;
    height: 29px;
    cursor: pointer;
  }
}

@media screen and (max-width: 1300px) {
  .menu-container {
    display: block;
    position: fixed;
    top: 60px;
    inset-inline-start: 0;
    width: 100vw;
    height: calc(100dvh - 60px); /* 解决移动端底部露白的关键 */
    background: white;
    z-index: 99999; /* 跨框架最高的保证 */
    overflow-y: auto;
  }
  .mini-navbar-logo {
    width: 156px;
  }
}
</style>
