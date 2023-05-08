// import Vue from 'vue';
// import VueI18n from 'vue-i18n';
// import _ from 'lodash';
// import zh from './lang/zh';
// import en from './lang/en';
// import ko from './lang/ko';
// import ja from './lang/ja';

// Vue.use(VueI18n);

// const availableLocale = ['zh', 'en', 'ko', 'ja'];

// let defaultLangStr = navigator.language;
// let defaultLang = 'zh';

// if (defaultLangStr.indexOf('en') >= 0) {
//     defaultLang = 'en';
// }

// const query = location.search.substr(1);
// let queryObj = {};

// if (query) {
//     _.forEach(query.split('&'), item => {
//         const tempArr = item.split('=');
//         queryObj[tempArr[0]] = tempArr[1];
//     });
// }

// let locale = _.includes(availableLocale, queryObj['locale']) ? queryObj['locale'] : defaultLang;

// locale = localStorage.getItem('locale') || locale;

// // document.title = locale === 'en' ? 'Key Generator | TokenPocket' : '公私钥生成器 | TokenPocket';

// switch (locale) {
//   case 'en':
//     document.title = 'Key Generator | TokenPocket'
//     break;
//   case 'zh':
//     document.title = '公私钥生成器 | TokenPocket'
//     break;
//   case 'ko':
//     document.title = '키 생성기 | TokenPocket'
//     break;
//   case 'ja':
//     document.title = 'キージェネレーター | TokenPocket'
//     break;
//   default:
//     break;
// }

// const i18n = new VueI18n({
//     locale,
//     messages: {
//         'en': en,
//         'zh': zh,
//         'ko': ko,
//         'ja': ja
//     }
// });

// export default i18n;

import { createApp } from 'vue'
import App from '../App.vue'
import { createI18n } from 'vue-i18n'
import en from './lang/en'
import zh from './lang/zh'
import ko from './lang/ko'
import ja from './lang/ja'
 
const app = createApp(App)

const availableLocale = ['zh', 'en', 'ko', 'ja'];

let defaultLangStr = navigator.language;
let defaultLang = 'zh';

if (defaultLangStr.indexOf('en') >= 0) {
    defaultLang = 'en';
}

const query = location.search.substr(1);
let queryObj = {};

if (query) {
    _.forEach(query.split('&'), item => {
        const tempArr = item.split('=');
        queryObj[tempArr[0]] = tempArr[1];
    });
}

let locale = _.includes(availableLocale, queryObj['locale']) ? queryObj['locale'] : defaultLang;

locale = localStorage.getItem('locale') || locale;

// document.title = locale === 'en' ? 'Key Generator | TokenPocket' : '公私钥生成器 | TokenPocket';

switch (locale) {
  case 'en':
    document.title = 'Key Generator | TokenPocket'
    break;
  case 'zh':
    document.title = '公私钥生成器 | TokenPocket'
    break;
  case 'ko':
    document.title = '키 생성기 | TokenPocket'
    break;
  case 'ja':
    document.title = 'キージェネレーター | TokenPocket'
    break;
  default:
    break;
}

const i18n = createI18n({
  legacy: false, 
  locale: locale,
  messages: {en, zh, ko, ja} // 这里就是你有几种语言，对象里面就有几个
})
 
export default function (app) {
  app.use(i18n)
}
