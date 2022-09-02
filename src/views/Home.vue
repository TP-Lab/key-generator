<template>
  <div class="home">
    <div class="logos">
      <img class="logo" src="../assets/logo.png" />
      <span class="lang-switch">
        <!-- <a
          v-if="this.$i18n.locale === 'zh'"
          @click="changeLang('en')"
          href="javascript:;"
          >En</a
        >
        <a v-else @click="changeLang('zh')" href="javascript:;">中</a> -->
        <div class="current-lang" @click="onShow">
          {{ $t('i18nView.language') }}
        </div>
        <div class="lang-wrap" :class="{ show: isTap }">
          <span class="lang" @click="changeLang('zh')">中文</span>
          <span class="lang" @click="changeLang('en')">English</span>
          <span class="lang" @click="changeLang('ko')">한국인</span>
          <span class="lang" @click="changeLang('ja')">日本語</span>
        </div>
      </span>
    </div>

    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Settings } from 'luxon'

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      isTap: true,
    }
  },
  // created() {
  //   console.log(22222)
  // },
  methods: {
    onShow() {
      this.isTap = false
    },
    changeLang(lang) {
      this.isTap = true
      this.$i18n.locale = lang
      localStorage.setItem('locale', lang)
      switch (lang) {
        case 'en':
          Settings.defaultLocale = 'en-US'
          document.title = 'Key Generator | TokenPocket'
          break
        case 'zh':
          Settings.defaultLocale = 'zh-CN'
          document.title = '公私钥生成器 | TokenPocket'
          break
        case 'ko':
          Settings.defaultLocale = 'ko'
          document.title = '키 생성기 | TokenPocket'
          break
        case 'ja':
          Settings.defaultLocale = 'ja'
          document.title = 'キージェネレーター | TokenPocket'
          break
        default:
          break
      }
    },
  },
}
</script>

<style lang="less">
.logos {
  span,
  img {
    vertical-align: middle;
  }
}
.logo {
  height: 40px;
}

.lang-switch {
  position: relative;
  float: right;
  display: inline-block;
  font-weight: bold;
  line-height: 40px;
  .current-lang {
    cursor: pointer;
  }
  .lang-wrap {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 5px;
    background: #fff;
    border-radius: 6px;
    white-space: nowrap;
    border: 1px solid #777;
    display: none;
    flex-direction: column;
    .lang {
      // font-weight: 400;
      cursor: pointer;
    }
  }
}

.lang-switch:hover {
  .lang-wrap {
    display: flex;
  }
}

.lang-switch a {
  line-height: 30px;
  padding: 0 2px;
  color: #666;
  text-decoration: none;
  font-size: 16px;
}
@media screen and (max-width: 767px) {
  .logo {
    height: 28px;
  }
  .lang-switch {
    line-height: 28px;
    .lang-wrap {
      .lang {
        line-height: 30px;
      }
      &.show {
        display: none;
      }
    }
  }
  .github{
    margin: 50px auto 20px;
  }
}
</style>