<template>
  <div class="normal-nav container">
    <nav class="navbar-wrap">
      <div class="navbar-logo">
        <img
          class="logo pointer"
          :src="navLogo"
          @click="indexGo('/')"
        />
      </div>

      <div ref="navMain" class="navbar-tab-list">
        <a
          v-for="(item, index) in navList"
          :key="index"
          class="nav-title"
          :href="item.local && item.url ? item.url : 'javascript:void(0)'"
          @click.stop="navGo(item, index, $event)"
          @mouseenter.stop="navEnter(item, index, $event)"
          @mouseleave="navLeave(item, index, $event)"
          :class="{ null: !item.title }"
        >
          <div class="pointer title">
            <img
              v-if="index === navList.length - 1"
              src="../../assets/language.png"
            />
            <span class="title-left">{{ item.title }}</span>
            <span class="title-right text-right">
              <i v-if="item.children && !item.lang" class="icon-down-333"></i>
            </span>
          </div>

          <div
            v-show="item.children && navIndex === index"
            class="nav-children-wrap"
            :style="{ width: item.width, transform: item.translateX }"
            :class="{ products: index === 0, language: index === 6 }"
          >
            <!-- <svg class="svg" width="40" height="40" viewBox="-50 -50 300 300">
              <polygon
                class="triangle"
                stroke-linejoin="round"
                points="100,80 0,200 200,200"
              />
            </svg> -->
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
                    :style="{ width: navChildren.width }"
                    v-if="navChildren.desc"
                  >
                    {{ navChildren.desc }}
                  </div>
                </div>
              </div>
              <!-- <div :class="{ line: navChildren.line }"></div> -->
            </a>
          </div>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import Index from './NavIndex';

export default {
  name: 'normalNav',
  mixins: [Index],
};
</script>

<style lang="scss" scoped>
@for $i from 1 through 11 {
  .navbar-tab-list {
    .nav-children-wrap {
      a {
        .nav-children {
          .nav-icon-#{$i} {
            width: 28px;
            height: 28px;
            background: url(../../assets/nav-icon/#{$i}.png)
              no-repeat
              100% /
              contain;
          }
        }
      }
      a:hover {
        .nav-children {
          .nav-icon-#{$i} {
            background: url(../../assets/nav-icon/#{$i}-on.png)
              no-repeat
              100% /
              contain;
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
  justify-content: space-between;
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

.icon-down-333 {
  display: inline-block;
  position: relative;
  width: 14px;
  height: 12px;
  transform: scale(0.8);
  &::after {
    content: '';
    position: absolute;
    top: 5%;
    left: 2px;
    width: 8px;
    height: 8px;
    border-top: 2px solid #333;
    border-right: 2px solid #333;
    transform: rotate(135deg);
  }
}

.navbar-tab-list {
  display: flex;
  flex: 1;
  margin-left: 30px;

  .null {
    flex: 1;
  }
  .nav-title {
    display: inline-block;
    position: relative;
    margin-right: 30px;
    height: 60px;
    line-height: 60px;
    color: #101010;
    &:last-child {
      margin-right: 0;
    }
    .title-left {
      font-size: 15px;
    }
    .title-right {
      margin-left: 5px;
    }
    .title {
      &:hover {
        opacity: 0.7;
        color: #2980fe;
        .icon-down-333 {
          &::after {
            border-top: 2px solid #2980fe;
            border-right: 2px solid #2980fe;
          }
        }
      }
    }
  }

  .nav-title:last-child {
    img {
      width: 24px;
      height: 24px;
      position: absolute;
      left: -15px;
      top: 50%;
      transform: translateY(-50%);
    }
    .title-left {
      font-size: 15px;
      padding: 4px 20px;
    }
  }

  .nav-children-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
    &.products {
      width: 674px;
      padding: 32px 40px 0;
      a {
        margin-bottom: 32px;
      }
    }
    &.language {
      padding: 24px 0 0;
    }
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
      margin-bottom: 24px;
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

  // .nav-children-title {
  //   display: block;
  //   padding: 10px 0;
  //   border-bottom: 1px solid #ebf0f5;
  //   line-height: normal;
  //   color: #101010;
  //   &:last-child {
  //     border: 0;
  //   }
  //   &:hover {
  //     opacity: 0.7;
  //     // color: #2980FE;
  //   }
  // }
}

.border-bottom {
  border-bottom: 1px solid #eee;
}

@media screen and (max-width: 1024px) {
  .navbar-logo {
    display: none;
  }
}
</style>
