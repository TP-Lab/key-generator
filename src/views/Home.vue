<template>
  <div class="home">
    <div class="logos">
      <img class="logo" src="https://dapp.tokenpocket.pro/nervos-icon.png" />
      <span>X</span>
      <img class="logo" src="../assets/logo.png" />
      <span class="lang-switch">
        <a v-if="this.$i18n.locale === 'zh'" @click="changeLang('en')" href="javascript:;">En</a>
        <a v-else @click="changeLang('zh')" href="javascript:;">中</a>
      </span>
    </div>

    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Settings } from "luxon";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("locale", lang);
      if (lang === "en") {
        Settings.defaultLocale = "en-US";
      } else {
        Settings.defaultLocale = "zh-CN";
      }
    }
  }
};
</script>

<style lang="less" >
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
  float: right;
  display: inline-block;
  font-weight: bold;
  line-height: 40px;
}

.lang-switch a {
  line-height: 30px;
  padding: 0 2px;
  color: #666;
  text-decoration: none;
  font-size: 16px;
}
</style>
