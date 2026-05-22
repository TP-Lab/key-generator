<template>
  <div class="normal-nav container" style="margintop: 20px">
    <nav class="navbar-wrap">
      <div class="navbar-logo">
        <img
          class="logo pointer"
          :src="navLogo"
          @click="indexGo('/')"
          :alt="$t('COMMON.LAYOUT.defiWallet')"
        />
      </div>

      <div ref="navMain" class="navbar-tab-list">
        <a
          v-for="(item, index) in navList.slice(0, navList.length - 1)"
          :key="index"
          class="nav-title"
          :href="item.local && item.url ? item.url : 'javascript:void(0)'"
          @click.stop="navGo(item, index, $event)"
          @mouseenter="navEnter(item, index, $event)"
          @mouseleave="navLeave(item, index, $event)"
          :class="{
            null: !item.title,
            'nav-language': item.lang,
            active: index === navIndex && item.title && !item.lang && isOpen === 'true'
          }"
        >
          <div class="pointer title language-content">
            <img
              class="language-img"
              v-if="index === navList.length - 1"
              src="../../assets/header/language.png"
            />
            <span
              class="title-left"
              :class="{ 'language-title': index === navList.length - 1 }"
              >{{ item.title }}</span
            >
            <span class="title-right text-right">
              <i
                v-if="item.children && !item.lang"
                :class="[
                  !item.lang ? arrowClass : '',
                  item.lang ? langClass : ''
                ]"
              ></i>
            </span>
            <div class="nav-title-border-bottom"></div>
          </div>

          <div
            v-show="item.children && navIndex === index && navIndex === 7"
            class="nav-children-wrap"
            :style="{ transform: item.translateX }"
            :class="{
              products: index === 0,
              tools: index === 1,
              language: index === 7
            }"
          >
            <a
              class="d-flex"
              v-for="(navChildren, childrenIndex) in item.children"
              :key="childrenIndex"
              :href="
                !navChildren.lang && navChildren.url
                  ? navChildren.url
                  : 'javascript:void(0)'
              "
              :target="
                navChildren.local || navChildren.lang ? '_self' : '_blank'
              "
              @click.stop="navChildrenGo(navChildren, $event)"
            >
              <div class="nav-children">
                <div :class="[navChildren.class]"></div>
                <div
                  class="detail"
                  :class="{ lang: navChildren.lang, leftDis: item.leftDis }"
                >
                  <div class="child-title">{{ navChildren.title }}</div>
                  <div
                    class="child-title desc"
                    v-if="navChildren.desc"
                  >
                    {{ navChildren.desc }}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </a>
        <div class="tp-language-dropdown-wrapper">
          <tp-language-dropdown :languages="languages" :value="language" @language-change="onLanguageChange" />
        </div>
      </div>
    </nav>
    <div
      class="navbar-wrap-child-container"
      :class="{ show: isShow }"
    >
      <div
        class="navbar-wrap-child-content-wrap"
        :class="{ 'ani-down': isShow }"
        @mouseenter="onMouseenter"
        @mouseleave="onMouseleave"
        :data-isOpen="isOpen"
      >
        <div class="navbar-wrap-child-content">
          <div 
            class="navbar-wrap-child-item"
            :class="{ show: navIndex === index && isOpen === 'true' && navItem.title && !navItem.lang  }"
            v-for="(navItem,index) in navList" :key="index"
          >
            <div class="nav-child-left" v-if="navItem.img">
              <img :src="navItem.img" alt="" />
            </div>
            <div 
              class="nav-child-right" 
              :class="{ 'display-type-3': navItem.column === 3 }" 
            >
              <div
                class="nav-children-item"
                v-for="(cItem, index) in navItem.children"
                @click="navChildrenGo(cItem, $event)"
                :key="index"
              >
                <div class="nav-children-header">
                  <span :class="[cItem.class]"></span>
                  <span class="nav-text">{{ cItem.title }}</span>
                </div>
                <div class="nav-children-desc">{{ cItem.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Index from './NavIndex'

export default {
  name: 'normalNav',
  mixins: [Index]
}
</script>

<style lang="scss" scoped>
@for $i from 1 through 28 {
  .nav-children-item {
    .nav-children-header {
      display: flex;
      align-items: center;
      .nav-icon-#{$i} {
        width: 20px;
        height: 20px;
        background: url(../../assets/nav-icon/#{$i}.png)
          no-repeat
          100% /
          contain;
      }
      .nav-text {
        margin-left: 16px;
        font-size: 16px;
        font-weight: 600;
        color: #3a3b3d;
        word-break: break-word;
        border-bottom: 1px solid transparent;
      }
    }
  }
  .nav-children-item:hover {
    .nav-children-header {
      .nav-icon-#{$i} {
        background: url(../../assets/nav-icon/#{$i}-on.png)
          no-repeat
          100% /
          contain;
      }
      .nav-text {
        color: #2980FE;
      }
    }
  }
}

.normal-nav {
  .navbar-wrap {
    position: relative;
    z-index: 10;
  }
  .navbar-wrap-child-container {
    width: 100vw;
    height: 100vh;
    background: rgba(212, 220, 229, 0.6);
    position: absolute;
    z-index: 5;
    left: 0;
    top: 0;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s cubic-bezier(.4,0,.2,1);
    &.chinese {
      height: calc(100vh - 52px);
      top: 52px;
    }
    &.show {
      visibility: visible;
      opacity: 1;
    }
    .navbar-wrap-child-content-wrap {
      transition: all 0.5s cubic-bezier(.4,0,.2,1);
      background: #fff;
      height: 380px;
      transform: translateY(-460px);
      .navbar-wrap-child-content {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        height: 100%;
        .navbar-wrap-child-item {
          display: flex;
          visibility: hidden;
          height: 0;
          width: 100%;
          position: absolute;
          left: 0;
          top: 90px;
          height: auto;
          .nav-child-left {
            font-size: 0;
            img {
              width: 256px;
              height: 256px;
            }
          }
          .nav-child-right {
            margin-left: 100px;
            display: grid;
            grid-template-columns: 300px 300px;
            gap: 24px 80px;
            height: 100%;
            .nav-children-item {
              cursor: pointer;
              .nav-children-desc {
                margin: 2px 0 0 36px;
                font-size: 14px;
                color: #9ea0a5;
                word-break: break-word;
              }
            }
            &.display-type-3 {
              grid-template-columns: 300px 300px 300px;
              gap: 24px 10px;
              margin-left: 48px;
            }
          }
        }
      }
      &.ani-down {
        transform: translateY(0px);
        .navbar-wrap-child-content {
          .navbar-wrap-child-item {
            &.show {
              visibility: visible;
            }
          }
        }
      }
    }
  }
}

.navbar-wrap {
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.navbar-logo {
  display: flex;
  align-items: center;
  height: 60px;
  // margin-right: 30px;
  img {
    width: 175px;
  }
}

.navbar-tab-list {
  margin-left: 48px;
  display: flex;
  flex: 1;

  .null {
    flex: 1;
    cursor: default;
  }
  .nav-title {
    display: inline-block;
    position: relative;
    height: 60px;
    line-height: 60px;
    color: #101010;
    padding: 0 15px;
    &.active {
      .title {
        opacity: 0.7;
        color: #2980fe;
        // border-bottom: 2px solid #2980fe;
        position: relative;
        .icon-down-333 {
          &::after {
            border-top: 2px solid #2980fe;
            border-right: 2px solid #2980fe;
          }
        }
        .nav-title-border-bottom {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: #2980fe;
        }
      }
    }
    .title-left {
      margin-right: 4px;
      font-size: 15px;
    }
    .language-content {
      display: flex;
      align-items: center;
      .language-img {
        width: 24px;
      }
      .language-title {
        margin-left: 10px;
      }
    }
  }
  .nav-language {
    margin-right: 0;
  }

  .nav-children-wrap {
    max-height: 600px;
    overflow: auto;
    display: grid;
    grid-template-columns: 1fr;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    padding: 24px 24px 0;
    background: #fff;
    transition: all 0.3s linear;
    z-index: 10;
    border: 1px solid #f1f3f5;
    border-radius: 12px;
    box-shadow: 0px 6px 16px 0px rgba(45, 54, 86, 0.05);
    scrollbar-width: thin;
    scrollbar-color: #cccccc transparent;
    &.products {
      grid-template-columns: 1fr 1fr;
      width: 674px;
      padding: 32px 40px 0;
      a {
        margin-bottom: 32px;
      }
    }
    &.tools {
      grid-template-columns: 1fr 1fr;
      padding: 32px 40px;
      width: auto;
      gap: 32px 64px;
      a {
        margin-bottom: 0;
      }
    }
    // &.language {
    //   padding: 24px 0 0;
    // }
    .svg {
      position: absolute;
      z-index: 0;
      top: -25px;
      left: 15px;
    }
    .triangle {
      fill: #fff;
      stroke: #fff;
      stroke-width: 70;
    }
    a {
      padding-bottom: 24px;
      .nav-children {
        display: flex;
        align-items: center;
        img {
          margin-left: 38px;
          width: 44px;
          height: 44px;
        }
        .detail {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-left: 24px;
          &.lang {
            margin-left: 0;
          }
          &.leftDis {
            margin-left: 16px;
          }
          .child-title {
            // padding-right: 20px;
            font-size: 16px;
            font-weight: 400;
            text-align: left;
            color: #3a3b3d;
            line-height: 20px;
            white-space: nowrap;
          }
          .desc {
            white-space: normal;
            font-size: 14px;
            display: block;
            margin-top: 5px;
            color: #9ea0a5;
            color: #7a7a7a;
            font-weight: 300;
          }
        }
      }
      .line {
        margin-top: 10px;
        margin-left: 68px;
        height: 1px;
        background: #eeeeee;
      }
    }
    a:hover {
      .nav-children {
        .detail {
          .child-title {
            color: #2980fe;
          }
        }
      }
    }
  }

  .tp-language-dropdown-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
}

@media screen and (max-width: 1024px) {
  .navbar-logo {
    display: none;
  }
}
</style>
