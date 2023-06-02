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
  messages: {en, zh, ko, ja} 
})
 
export default function (app) {
  app.use(i18n)
}
