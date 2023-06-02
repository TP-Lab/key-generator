// import normalNav from './normal'
import LinkMethods from '../../mixins/LinkMethods';
import TpWallet from '../../mixins/TpWallet';

export default {
  name: 'HeaderLayout',
  mixins: [LinkMethods, TpWallet],
  components: {
    // normalNav
  },
  props: {
    navLogo: {
      type: String,
      default: require('../../assets/logo.png'),
    },
    navTitleColor: {
      type: String,
      default: '#fff',
    },
    navIconColor: {
      type: String,
      default: '#fff',
    },
    arrowClass: {
      type: String,
      default: 'icon-down-333',
    },
    langClass: {
      type: String,
      default: 'icon-earth',
    },
  },
  data() {
    return {
      navIndex: '',
      menuState: false,
      clientWidth: 0,
      // eventListen: null,
    };
  },

  computed: {
    titleLang() {
      switch (this.$i18n.locale) {
        case 'zh':
          return '中文简体';
        case 'zh-tw':
          return '中文繁体';
        case 'en':
          return 'English';
        case 'ko':
          return '한국어';
        case 'ru':
          return 'Русский';
        case 'es':
          return 'Español';
        case 'hi':
          return 'हिन्दी';
        case 'fil':
          return 'Filipino';
        case 'pt':
          return 'Português';
        case 'ja':
          return '日本語';
        case 'vi':
          return 'Tiếng Việt';
        case 'th':
          return 'ภาษาไทย';
        default:
          return '中文';
      }
    },
    navList() {
      return [
        {
          local: true,
          title: this.$t('product.title'),
          translateX: 'translateX(-30%)',
          children: [
            {
              width: '224px',
              class: 'nav-icon-1',
              desc: this.$t('product.selfCustodyWalletDesc'),
              line: true,
              title: this.$t('product.selfCustodyWallet'),
              url: this.homeUrl,
            },
            {
              width: '224px',
              class: 'nav-icon-2',
              desc: this.$t('product.hardwareWalletDesc'),
              line: true,
              title: this.$t('product.hardwareWallet'),
              url: 'https://www.keypal.pro/',
            },
            {
              width: '224px',
              class: 'nav-icon-3',
              desc: this.$t('product.extensionWalletDesc'),
              line: true,
              title: this.$t('product.extensionWallet'),
              url: this.extensionUrl,
            },
            {
              width: '224px',
              class: 'nav-icon-4',
              desc: this.$t('product.transitDesc'),
              line: true,
              title: this.$t('product.transit'),
              url: 'https://www.transit.finance/#/',
            },
            {
              width: '224px',
              class: 'nav-icon-5',
              desc: this.$t('product.fiveDegreesDesc'),
              line: false,
              title: this.$t('product.fiveDegrees'),
              url: 'https://www.5degrees.io/#/',
            },
            {
              width: '224px',
              class: 'nav-icon-12',
              desc: this.$t('product.stakeVaultDesc'),
              line: false,
              title: this.$t('product.stakeVault'),
              url: this.stakeVaultUrl
            }
          ],
        },
        {
          title: this.$t('collaborations.title'),
          leftDis: true,
          children: [
            {
              class: 'nav-icon-6',
              desc: false,
              line: true,
              title: this.$t('project.subDApp'),
              url: this.dappUrl,
            },
            {
              class: 'nav-icon-7',
              desc: false,
              line: true,
              title: this.$t('project.subToken'),
              url: this.tokenUrl,
            },
            {
              class: 'nav-icon-8',
              desc: false,
              line: true,
              title: this.$t('project.subNFT'),
              url: this.nftUrl,
            },
            {
              class: 'nav-icon-9',
              desc: false,
              line: false,
              title: this.$t('project.subChain'),
              url: 'https://github.com/TP-Lab/networklist-org',
            },
          ],
        },
        {
          local: true,
          title: this.$t('community.title'),
          leftDis: true,
          children: [
            {
              class: 'nav-icon-10',
              line: true,
              title: this.$t('community.developers'),
              url: this.developerUrl,
            },
            {
              class: 'nav-icon-11',
              line: true,
              title: this.$t('community.recruiting'),
              url: this.recruitingUrl,
            },
          ],
        },
        {
          title: this.$t('helpCenter.title'),
          url: this.helpUrl,
        },
        {
          title: '',
        },
        {
          title: this.titleLang,
          lang: true,
          class: 'language-changes',
          children: [
            { title: '简体中文', lang: 'zh', link: '/zh', class: 'locale-zh' },
            // {
            //   title: '繁体中文',
            //   lang: 'zh-tw',
            //   link: '/zh-tw',
            //   class: 'locale-zh-tw',
            // },
            { title: 'English', lang: 'en', link: '/en', class: 'locale-en' },
            { title: '한국어', lang: 'ko', link: '/ko', class: 'locale-ko' },
            // { title: 'Русский', lang: 'ru', link: '/ru', class: 'locale-ru' },
            // { title: 'Español', lang: 'es', link: '/es', class: 'locale-es' },
            // { title: 'हिन्दी', lang: 'hi', link: '/hi', class: 'locale-hi' },
            // {
            //   title: 'Filipino',
            //   lang: 'fil',
            //   link: '/fil',
            //   class: 'locale-fil',
            // },
            // { title: 'Português', lang: 'pt', link: '/pt', class: 'locale-pt' },
            { title: '日本語', lang: 'ja', link: '/ja', class: 'locale-ja' },
            // {
            //   title: 'Tiếng Việt',
            //   lang: 'vi',
            //   link: '/vi',
            //   class: 'locale-vi',
            // },
            // { title: 'ภาษาไทย', lang: 'th', link: '/th', class: 'locale-th' },
          ],
        },
      ];
    },
  },
  watch: {
    clientWidth() {
      this.navIndex = '';
    },
  },
  mounted() {
    this.clientWidth = document.body.clientWidth;
    this.navState();
    this.windowChange();
  },
  // beforeDestroy() {
  //   document.removeEventListener('click', this.eventListen);
  // },
  methods: {
    changeMenuState() {
      this.menuState = !this.menuState;
      this.navIndex = '';
    },

    navState(el) {
      document.addEventListener(
        'click',
        (e) => {
          if (this.clientWidth > 768) {
            if (this.$refs.navMain && !this.$refs.navMain.contains(e.target)) {
              this.navIndex = '';
            }
          }
        },
        false
      );
    },

    navGo(item, index, el) {
      el.preventDefault();
      if (item.children) {
        index === this.navIndex
          ? (this.navIndex = '')
          : (this.navIndex = index);
      }
      if (item.url && !item.local) {
        return window.open(item.url);
      }
      if (item.url && item.local) {
        this.$router.push(item.url);
      }
      // return false
    },
    navEnter(item, index, el) {
      el.preventDefault();
      if (item.children) {
        index === this.navIndex
          ? (this.navIndex = '')
          : (this.navIndex = index);
      }
      if (item.url && !item.local && item.children) {
        return window.open(item.url);
      }
      if (item.url && item.local && item.children) {
        this.$router.push(item.url);
      }
    },
    navLeave(item, index, el) {
      el.preventDefault();
      if (item.children) {
        index === this.navIndex
          ? (this.navIndex = '')
          : (this.navIndex = index);
      }
      this.navIndex = '';
    },

    navChildrenGo(item, el) {
      if (el) el.preventDefault();
      if (item.url && !item.local) {
        return window.open(item.url);
      }

      if (item.url && item.local && !item.lang) {
        return this.$router.push(item.url);
      }

      if (item.lang) {
        this.$i18n.locale = item.lang;
        localStorage.setItem('locale', item.lang);
        this.updateDocumentTitle(item.lang)
      }
      this.navIndex = '';
    },

    updateDocumentTitle(lang) {
      switch (lang) {
        case 'en':
          document.title = 'Key Generator | TokenPocket';
          break;
        case 'zh':
          document.title = '公私钥生成器 | TokenPocket';
          break;
        case 'ko':
          document.title = '키 생성기 | TokenPocket';
          break;
        case 'ja':
          document.title = 'キージェネレーター | TokenPocket';
          break;
        default:
          break;
      }
    },

    windowChange() {
      window.addEventListener('resize', (e) => {
        this.clientWidth = e.target.screen.width;
      });
    },
  },
};
