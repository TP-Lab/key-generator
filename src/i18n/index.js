import { createApp } from 'vue'
import App from '../App.vue'
import { createI18n } from 'vue-i18n'
import en from './lang/en'
import zh from './lang/zh'
import ko from './lang/ko'
import ja from './lang/ja'
import zhTw from './lang/zh-tw'
import ru from './lang/ru'
import es from './lang/es'
import hi from './lang/hi'
import fil from './lang/fil'
import pt from './lang/pt'
import vi from './lang/vi'
import th from './lang/th'
import id from './lang/id'
import ms from './lang/ms'
import ur from './lang/ur'
 
const app = createApp(App)

const availableLocale = ['zh', 'zh-tw', 'en', 'ko', 'ja', 'ru', 'es', 'hi', 'fil', 'pt', 'vi', 'th', 'id', 'ms', 'ur']

const titles = {
  en: 'Key Generator | TokenPocket',
  zh: '公私钥生成器 | TokenPocket',
  'zh-tw': '公私鑰產生器 | TokenPocket',
  ko: '키 생성기 | TokenPocket',
  ja: 'キージェネレーター | TokenPocket',
  ru: 'Генератор ключей | TokenPocket',
  es: 'Generador de claves | TokenPocket',
  hi: 'की जेनरेटर | TokenPocket',
  fil: 'Key Generator | TokenPocket',
  pt: 'Gerador de chaves | TokenPocket',
  vi: 'Trình tạo khóa | TokenPocket',
  th: 'ตัวสร้างคีย์ | TokenPocket',
  id: 'Generator Kunci | TokenPocket',
  ms: 'Penjana Kunci | TokenPocket',
  ur: 'کی جنریٹر | TokenPocket',
}

let defaultLangStr = navigator.language
let defaultLang = 'zh'

if (defaultLangStr.indexOf('en') >= 0) {
  defaultLang = 'en'
} else if (defaultLangStr.toLowerCase().includes('zh-tw') || defaultLangStr.toLowerCase().includes('zh-hk') || defaultLangStr.toLowerCase().includes('zh-hant')) {
  defaultLang = 'zh-tw'
} else {
  const matchedLocale = availableLocale.find((item) => defaultLangStr.toLowerCase().includes(item))
  defaultLang = matchedLocale || defaultLang
}

const query = location.search.substr(1)
let queryObj = {}

if (query) {
  _.forEach(query.split('&'), item => {
    const tempArr = item.split('=')
    queryObj[tempArr[0]] = tempArr[1]
  })
}

let locale = _.includes(availableLocale, queryObj.locale) ? queryObj.locale : defaultLang
const storedLocale = localStorage.getItem('locale')

locale = _.includes(availableLocale, storedLocale) ? storedLocale : locale

document.title = titles[locale] || titles.zh

const i18n = createI18n({
  legacy: false, 
  locale: locale,
  messages: { en, zh, 'zh-tw': zhTw, ko, ja, ru, es, hi, fil, pt, vi, th, id, ms, ur } 
})
 
export default function (app) {
  app.use(i18n)
}
