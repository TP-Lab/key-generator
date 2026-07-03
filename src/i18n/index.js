import { createI18n } from 'vue-i18n';
import en from './lang/en';
import zh from './lang/zh';
import ko from './lang/ko';
import ja from './lang/ja';
import zhTw from './lang/zh-tw';
import ru from './lang/ru';
import es from './lang/es';
import hi from './lang/hi';
import fil from './lang/fil';
import pt from './lang/pt';
import vi from './lang/vi';
import th from './lang/th';
import id from './lang/id';
import ms from './lang/ms';
import ur from './lang/ur';
const availableLocale = [
  'zh',
  'zh-tw',
  'en',
  'ko',
  'ja',
  'ru',
  'es',
  'hi',
  'fil',
  'pt',
  'vi',
  'th',
  'id',
  'ms',
  'ur',
];

const RTL_LOCALES = ['ur'];

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
};

let defaultLangStr = navigator.language;
let defaultLang = 'zh';

function normalizeLocale(locale) {
  if (!locale) return '';

  const normalized = locale.toLowerCase();

  if (
    normalized.includes('zh-tw') ||
    normalized.includes('zh-hk') ||
    normalized.includes('zh-hant')
  ) {
    return 'zh-tw';
  }

  return (
    availableLocale.find(
      (item) => normalized === item || normalized.startsWith(`${item}-`)
    ) || ''
  );
}

export function syncDocumentDirection(locale) {
  const currentLocale = normalizeLocale(locale) || 'zh';
  const isRtl = RTL_LOCALES.includes(currentLocale);

  document.documentElement.lang = currentLocale;
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
}

defaultLang = normalizeLocale(defaultLangStr) || defaultLang;

const queryObj = Object.fromEntries(new URLSearchParams(location.search));

let locale = normalizeLocale(queryObj.locale) || defaultLang;
const storedLocale = localStorage.getItem('locale');

locale = normalizeLocale(storedLocale) || locale;

document.title = titles[locale] || titles.zh;
syncDocumentDirection(locale);

const i18n = createI18n({
  legacy: false,
  locale: locale,
  messages: {
    en,
    zh,
    'zh-tw': zhTw,
    ko,
    ja,
    ru,
    es,
    hi,
    fil,
    pt,
    vi,
    th,
    id,
    ms,
    ur,
  },
});

export default function (app) {
  app.use(i18n);
}
