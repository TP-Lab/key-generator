<template>
  <div class="mini-nav">
    <nav class="mini-navbar-wrap" :class="{ isFixed: menuState }">
      <div class="mini-navbar-header">
        <div>
          <img
            class="mini-navbar-logo pointer"
            src="../../assets/logo.png"
            @click="indexGo('/')"
          />
        </div>
        <div class="menu-status text-right">
          <!-- <span
            class="mini-navbar-language"
            @click="changeLanguage"
          >{{language === 'zh' ? 'En' : '中文'}}</span>-->
          <!-- <i :class="!menuState ? 'icon-menu' : 'icon-close'" @click="changeMenuState"></i> -->
          <img
            src="../../assets/menu.png"
            v-if="!menuState"
            @click="changeMenuState"
            alt
          />
          <img
            src="../../assets/close.png"
            v-else
            @click="changeMenuState"
            alt
          />
        </div>
      </div>

      <div class="mini-menu" v-if="menuState">
        <a
          v-for="(item, index) in navList"
          :key="index"
          style="display: block;"
          class="ft-18"
          :href="item.local && item.url ? item.url : 'javascript:void(0)'"
          @click.stop="navGo(item, index, $event)"
        >
          <div class="mini-menu-title">
            <!-- 一级菜单 -->
            <div class="menu-item">
              <div>{{ item.title }}</div>
              <div class="text-right" v-if="item.children">
                <i
                  :class="[
                    navIndex !== index
                      ? item.lang
                        ? 'icon-earth-mini'
                        : 'icon-right'
                      : 'icon-right icon-dropdown',
                  ]"
                  style="transition: all .3s;"
                ></i>
              </div>
            </div>

            <!-- 子菜单 -->
            <div
              class="mini-menu-children"
              v-if="item.children && navIndex === index"
            >
              <a
                class="mini-menu-children-title ft-14"
                v-for="(navChildren, childrenIndex) in item.children"
                :key="childrenIndex"
                @click.stop="navChildrenGo(navChildren, $event)"
                :href="
                  !navChildren.lang && navChildren.url
                    ? navChildren.url
                    : 'javascript:void(0)'
                "
                :target="
                  navChildren.local || navChildren.lang ? '_self' : '_blank'
                "
                >{{ navChildren.title }}</a
              >
            </div>
          </div>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import Index from './NavIndex';

export default {
  name: 'miniNav',
  mixins: [Index],
};
</script>

<style lang="scss" scoped>
.icon-earth-mini {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url('../../assets/earth-mini.png') no-repeat center 100%/cover !important;
  vertical-align: middle;
  margin-top: -2px;
}
.icon-right {
  display: inline-block;
  position: relative;
  width: 14px;
  height: 14px;
  // transform: scale(0.8);
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 2px;
    width: 10px;
    height: 10px;
    border-top: 2px solid #000;
    border-right: 2px solid #000;
    transform: rotate(45deg);
    box-sizing: border-box;
  }
}
.text-right {
  text-align: right;
}
.isFixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  background: #fff;
}

.mini-navbar-header {
  display: flex;
  padding: 15px 28px;

  div {
    flex: 1;
  }

  .mini-navbar-logo {
    width: 156px;
    margin-top: 5px;
  }
}

.mini-menu {
  height: calc(100vh - 68px);
  overflow-x: auto;
  a {
    font-size: 14px;
  }
}

.menu-item {
  display: flex;
  align-items: center;
  div {
    flex: 1;
    color: #101010;
  }
}

.mini-menu-children {
  padding-left: 2em;
}

.mini-menu-title {
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.mini-menu-children-title {
  display: block;
  padding-top: 15px;
  color: #101010;
}

.menu-status {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    width: 20px;
    height: 20px;
  }
}

.mini-navbar-language {
  font-size: 18px;
  margin-right: 20px;
}

.icon-dropdown {
  transform: rotate(90deg);
}

@media screen and (max-width: 420px) {
  .navbar-logo {
    img {
      width: initial;
      height: 24px;
      max-height: 32px;
    }
  }

  .menu-status {
    span {
      display: inline-block;
      /*padding: 5px;*/
      width: 30px;
      text-align: center;
      margin-right: 10px;
    }

    img {
      width: 16px;
      height: 16px;
    }
  }
  .mini-menu {
    height: calc(100vh - 60px);
    overflow-x: auto;
  }

  .mini-navbar-language {
    font-size: 16px;
  }
}
</style>
