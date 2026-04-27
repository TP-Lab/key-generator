import LinkMethods from '../../mixins/LinkMethods'
import NavUrl from '../../mixins/NavUrl'
import Mobile from '../../mixins/Mobile'

export default {
  name: 'HeaderLayout',
  mixins: [LinkMethods, NavUrl, Mobile],
  props: {
    navLogo: {
      type: String,
      default: require('../../assets/logo.png')
    },
    navTitleColor: {
      type: String,
      default: '#fff'
    },
    navIconColor: {
      type: String,
      default: '#fff'
    },
    arrowClass: {
      type: String,
      default: 'icon-down-fff'
    },
    langClass: {
      type: String,
      default: 'icon-earth'
    }
  },
  data() {
    return {
      black: '#000',
      navIndex: '',
      menuState: false,
      clientWidth: 0,
      canRun: true,
      eventListen: null,
      isOpen: 'false'
    }
  },
  computed: {
    language() {
      return this.$i18n.locale
    },
    titleLang() {
      switch (this.language) {
        case 'zh':
          return '中文简体'
        case 'zh-tw':
          return '中文繁体'
        case 'en':
          return 'English'
        case 'ko':
          return '한국어'
        case 'ru':
          return 'Русский'
        case 'es':
          return 'Español'
        case 'hi':
          return 'हिन्दी'
        case 'fil':
          return 'Filipino'
        case 'pt':
          return 'Português'
        case 'ja':
          return '日本語'
        case 'vi':
          return 'Tiếng Việt'
        case 'th':
          return 'ภาษาไทย'
        case 'id':
          return 'Bahasa Indonesia'
        case 'ms':
          return 'Bahasa Melayu'
        case 'ur':
          return 'اردو'
        default:
          return '中文'
      }
    },
    navList() {
      return [
        // products
        {
          local: true,
          title: this.$t('COMMON.LAYOUT.products'),
          img: require('../../assets/nav-icon/products.png'),
          children: [
            {
              class: 'nav-icon-1',
              desc: this.$t('COMMON.LAYOUT.mobileWalletDesc'),
              title: this.$t('COMMON.LAYOUT.mobileWallet'),
              url: this.homeUrl
            },
            {
              class: 'nav-icon-2',
              desc: this.$t('COMMON.LAYOUT.hardwareWalletDesc'),
              title: this.$t('COMMON.LAYOUT.hardwareWallet'),
              url: this.keypalUrl
            },
            {
              class: 'nav-icon-3',
              desc: this.$t('COMMON.LAYOUT.extensionWalletDesc'),
              title: this.$t('COMMON.LAYOUT.extensionWallet'),
              url: this.extensionUrl
            }
          ]
        },
        // Tools
        {
          title: this.$t('COMMON.LAYOUT.tools'),
          img: require('../../assets/nav-icon/tools.png'),
          column: 3,
          children: [
            {
              class: 'nav-icon-4',
              desc: this.$t('COMMON.LAYOUT.versionVerificationDesc'),
              title: this.$t('COMMON.LAYOUT.versionVerification'),
              url: this.verifyVersionUrl
            },
            {
              class: 'nav-icon-5',
              desc: this.$t('COMMON.LAYOUT.easyInscriptionDesc'),
              title: this.$t('COMMON.LAYOUT.easyInscription'),
              url: this.inscriptionUrl
            },
            {
              class: 'nav-icon-6',
              desc: this.$t('COMMON.LAYOUT.BATCH_SENDER_DESC'),
              title: this.$t('COMMON.LAYOUT.BATCH_SENDER'),
              url: this.batchSenderUrl
            },
            {
              class: 'nav-icon-7',
              desc: this.$t('COMMON.LAYOUT.tokenSecurityDesc'),
              title: this.$t('COMMON.LAYOUT.tokenSecurity'),
              url: this.tokenSecurityUrl
            },
            // {
            //   class: 'nav-icon-8',
            //   desc: this.$t('COMMON.LAYOUT.keyGeneratorDesc'),
            //   title: this.$t('COMMON.LAYOUT.keyGenerator'),
            //   url: this.keyUrl
            // },
            {
              class: 'nav-icon-9',
              desc: this.$t('COMMON.LAYOUT.tokenClaimDesc'),
              title: this.$t('COMMON.LAYOUT.tokenClaim'),
              url: this.tokenClaimUrl
            },
            {
              class: 'nav-icon-10',
              desc: this.$t('COMMON.LAYOUT.tokenProfileDesc'),
              title: this.$t('COMMON.LAYOUT.tokenProfile'),
              url: this.tokenProfileUrl
            },
            {
              class: 'nav-icon-11',
              desc: this.$t('COMMON.LAYOUT.approvalDetectorDesc'),
              title: this.$t('COMMON.LAYOUT.approvalDetector'),
              url: this.approvalUrl
            },
            {
              class: 'nav-icon-12',
              desc: this.$t('COMMON.LAYOUT.nostrAssetsBatchSenderDesc'),
              title: this.$t('COMMON.LAYOUT.nostrAssetsBatchSender'),
              url: this.nostrUrl
            }
          ]
        },
        // Trade
        {
          title: this.$t('COMMON.LAYOUT.trade'),
          img: require('../../assets/nav-icon/trade.png'),
          children: [
            {
              class: 'nav-icon-13',
              desc: this.$t('COMMON.LAYOUT.swapDesc'),
              title: this.$t('COMMON.LAYOUT.swap'),
              url: `https://swap.transit.finance/?from=tp&locale=${this.$i18n.locale}&mode=false#/`
            },
            {
              class: 'nav-icon-14',
              desc: this.$t('COMMON.LAYOUT.bridgeDesc'),
              title: this.$t('COMMON.LAYOUT.bridge'),
              url: `https://swap.transit.finance/?from=tp&locale=${this.$i18n.locale}&ode=false#/`
            },
            {
              class: 'nav-icon-15',
              desc: this.$t('COMMON.LAYOUT.buyCryptoDesc'),
              title: this.$t('COMMON.LAYOUT.buyCrypto'),
              url: this.transitBuyUrl
            },
            {
              class: 'nav-icon-16',
              desc: this.$t('COMMON.LAYOUT.marketDesc'),
              title: this.$t('COMMON.LAYOUT.market'),
              url: `https://swap.transit.finance/?from=tp&locale=${this.$i18n.locale}#/market`
            }
          ]
        },
        // dappstore
        {
          title: this.$t('COMMON.LAYOUT.dappStore'),
          url: this.dappStoreUrl
        },
        // 项目提交
        {
          title: this.$t('COMMON.LAYOUT.build'),
          img: require('../../assets/nav-icon/build.png'),
          leftDis: true,
          children: [
            {
              class: 'nav-icon-19',
              desc: this.$t('COMMON.LAYOUT.subDAppDesc'),
              title: this.$t('COMMON.LAYOUT.subDApp'),
              url: this.dappUrl
            },
            {
              class: 'nav-icon-18',
              desc: this.$t('COMMON.LAYOUT.subNFTDesc'),
              title: this.$t('COMMON.LAYOUT.subNFT'),
              url: this.nftUrl
            },
            {
              class: 'nav-icon-21',
              desc: this.$t('COMMON.LAYOUT.subTokenDesc'),
              title: this.$t('COMMON.LAYOUT.subToken'),
              url: this.tokenUrl
            },
            {
              class: 'nav-icon-20',
              desc: this.$t('COMMON.LAYOUT.subChainDesc'),
              title: this.$t('COMMON.LAYOUT.subChain'),
              url: 'https://github.com/TP-Lab/networklist-org'
            },
            {
              class: 'nav-icon-17',
              desc: this.$t('COMMON.LAYOUT.developersDesc'),
              title: this.$t('COMMON.LAYOUT.developers'),
              url: this.developerUrl
            }
          ]
        },
        {
          title: this.$t('COMMON.LAYOUT.support'),
          img: require('../../assets/nav-icon/support.png'),
          children: [
            {
              class: 'nav-icon-22',
              desc: this.$t('COMMON.LAYOUT.helpCenterDesc'),
              title: this.$t('COMMON.LAYOUT.helpCenter'),
              url: this.helpUrl
            },
            {
              class: 'nav-icon-23',
              desc: this.$t('COMMON.LAYOUT.contactUsDesc'),
              title: this.$t('COMMON.LAYOUT.contactUs'),
              url: this.contactUsUrl
            },
            {
              class: 'nav-icon-24',
              desc: this.$t('COMMON.LAYOUT.forumDesc'),
              title: this.$t('COMMON.LAYOUT.forum'),
              url: `https://fans.tokenpocket.pro/`
            }
          ]
        },
        // 空数据
        {
          title: ''
        },
        // 语言
        {
          title: this.titleLang,
          lang: true,
          class: 'language-changes',
          children: [
            { title: '简体中文', lang: 'zh', link: '/zh', class: 'locale-zh' },
            { title: '繁體中文', lang: 'zh-tw', link: '/zh-tw', class: 'locale-zh-tw' },
            { title: 'English', lang: 'en', link: '/en', class: 'locale-en' },
            { title: '한국어', lang: 'ko', link: '/ko', class: 'locale-ko' },
            { title: 'Русский', lang: 'ru', link: '/ru', class: 'locale-ru' },
            { title: 'Español', lang: 'es', link: '/es', class: 'locale-es' },
            { title: 'हिन्दी', lang: 'hi', link: '/hi', class: 'locale-hi' },
            { title: 'Filipino', lang: 'fil', link: '/fil', class: 'locale-fil' },
            { title: 'Português', lang: 'pt', link: '/pt', class: 'locale-pt' },
            { title: '日本語', lang: 'ja', link: '/ja', class: 'locale-ja' },
            { title: 'Tiếng Việt', lang: 'vi', link: '/vi', class: 'locale-vi' },
            { title: 'ภาษาไทย', lang: 'th', link: '/th', class: 'locale-th' },
            { title: 'Bahasa Indonesia', lang: 'id', link: '/id', class: 'locale-id' },
            { title: 'Bahasa Melayu', lang: 'ms', link: '/ms', class: 'locale-ms' },
            { title: 'اردو', lang: 'ur', link: '/ur', class: 'locale-ur' },
          ]
        }
      ]
    },
    currentNav() {
      // return this.navList[0]
      if (
        this.navIndex !== '' &&
        this.navList[this.navIndex].children &&
        !this.navList[this.navIndex].lang
      ) {
        return this.navList[this.navIndex]
      } else {
        return null
      }
    },
    isShow() {
      return this.isOpen === 'true' && this.currentNav && this.currentNav.title && !this.currentNav.lang
    }
  },
  watch: {
    clientWidth() {
      this.navIndex = ''
    }
  },
  mounted() {
    this.clientWidth = document.body.clientWidth
    this.navState()
    this.windowChange()
  },
  beforeDestroy() {
    document.removeEventListener('click', this.eventListen)
  },
  methods: {
    // changeLanguage() {
    //   // this.language === 'zh' ? this.navChildrenGo({ lang: 'en' }) : this.navChildrenGo({ lang: 'zh' })
    // },

    changeMenuState() {
      this.menuState = !this.menuState
      this.navIndex = ''
    },

    navClass(item, index) {
      let whiteList = ['/', '/en', '/zh', '/zh-tw', '/ko', '/ja', '/ru', '/es', '/hi', '/fil', '/pt', '/vi', '/th', '/id', '/ms', '/ur']
      let isWhite = whiteList.indexOf(this.$route.fullPath) !== -1

      if (isWhite && !item.lang) return 'icon-down-fff'
      if (!isWhite && !item.lang) return 'icon-down-'
      if (isWhite && item.lang) return 'icon-earth'
      if (!isWhite && item.lang) return 'icon-earth-mini'
    },

    navState(el) {
      document.addEventListener(
        'click',
        (e) => {
          if (this.clientWidth > 768) {
            // 点击除弹出层外的空白区域
            if (
              this.$refs.navMain &&
              !this.$refs.navMain.contains(e.target)
            ) {
              this.navIndex = ''
            }
          }
        },
        false
      )
    },

    navGo(item, index, el) {
      el.preventDefault()
      if (item.children) {
        index === this.navIndex ? (this.navIndex = '') : (this.navIndex = index)
      }
      if (item.url && !item.local) {
        return window.open(item.url)
      }
      if (item.url && item.local) {
        this.$router.push(item.url)
      }
      // return false
    },
    onMouseenter() {
      // console.log('onMouseenter')
      this.isOpen = 'true'
    },
    onMouseleave() {
      // console.log('onMouseleave')
      this.navIndex = ''
      this.isOpen = 'false'
    },
    // 鼠标进入
    navEnter(item, index, el) {
      el.preventDefault()
      this.isOpen = 'true'
      this.navIndex = index
      if (item.url && !item.local && item.children) {
        return window.open(item.url)
      }
      if (item.url && item.local && item.children) {
        this.$router.push(item.url)
      }
    },
    // 鼠标离开
    navLeave(item, index, el) {
      el.preventDefault()
      this.isOpen = 'false'
      if (item.lang) {
        this.navIndex = ''
      }
    },

    navChildrenGo(item, el) {
      // console.log(item)
      if (el) el.preventDefault()
      if (item.url && !item.local) {
        return window.open(item.url)
      }

      if (item.url && item.local && !item.lang) {
        if (item.url === '/dappstore' && this.$route.path === '/dappstore') {
          window.location.reload()
        } else {
          if (item.url === '/dappstore') {
            return this.$router.push({ path: item.url, query: { category_id: 99998, category: this.$t('DAPPSTORE.hot') } })
          } else {
            return this.$router.push(item.url)
          }
        }
      }

      if (item.lang) {
        if (item.lang === this.langChange) return false
        this.$route.fullPath.replace(`${this.language}`, item.lang)
        // eslint-disable-next-line no-unused-expressions
        this.$route.fullPath.replace(`${this.language}`, item.lang) === '/'
          ? ''
          : this.$router.replace(this.$route.fullPath.replace(`${this.language}`, item.lang))
        // this.$router.replace(this.$route.fullPath.replace(`${this.language}`, item.lang))
        this.langChange(item.lang)
      }
      this.navIndex = ''
    },

    langChange(lang) {
      this.$i18n.locale = lang
      localStorage.setItem('locale', lang)
      document.title = {
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
      }[lang] || '公私钥生成器 | TokenPocket'
      this.navIndex = ''
      this.menuState = false
    },

    windowChange() {
      window.addEventListener('resize', (e) => {
        this.clientWidth = e.target.screen.width
      })
    }
  }
}
