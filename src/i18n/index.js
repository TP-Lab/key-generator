import Vue from 'vue';
import VueI18n from 'vue-i18n';
import _ from 'lodash';
import zh from './lang/zh';
import en from './lang/en';

Vue.use(VueI18n);

const availableLocale = ['zh', 'en'];

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

document.title = locale === 'en' ? 'Key Generator | TokenPocket' : '公私钥生成器 | TokenPocket';

const i18n = new VueI18n({
    locale,
    messages: {
        'en': en,
        'zh': zh
    }
});

export default i18n;