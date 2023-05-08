import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

import VueClipBoard from "vue-clipboard2";

createApp(App).use(store).use(router).use(i18n).use(VueClipBoard).mount("#app");
