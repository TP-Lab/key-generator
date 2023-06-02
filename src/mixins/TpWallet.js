export default {
  computed: {
    isTokenPocketPro() {
      if (window.location.hostname === 'key.tokenpocket.pro') {
        return true;
      } else {
        return false;
      }
    },
    homeUrl() {
      if (this.isTokenPocketPro) {
        return 'https://tokenpocket.pro/';
      } else {
        return 'https://tpwallet.io/';
      }
    },
    extensionUrl() {
      if (this.isTokenPocketPro) {
        return 'https://extension.tokenpocket.pro/';
      } else {
        return 'https://extension.tpwallet.io/';
      }
    },
    dappUrl() {
      if (this.isTokenPocketPro) {
        return `https://tokenpocket.pro/${this.$i18n.locale}/submit/dapp`;
      } else {
        return `https://tpwallet.io/${this.$i18n.locale}/submit/dapp`;
      }
    },
    tokenUrl() {
      if (this.isTokenPocketPro) {
        return `https://tokenpocket.pro/${this.$i18n.locale}/submit/token`;
      } else {
        return `https://tpwallet.io/${this.$i18n.locale}/submit/token`;
      }
    },
    nftUrl() {
      if (this.isTokenPocketPro) {
        return `https://tokenpocket.pro/${this.$i18n.locale}/submit/nft`;
      } else {
        return `https://tpwallet.io/${this.$i18n.locale}/submit/nft`;
      }
    },
    recruitingUrl() {
      if (this.isTokenPocketPro) {
        return `https://tokenpocket.pro/${this.$i18n.locale}/recruiting`;
      } else {
        return `https://tpwallet.io/${this.$i18n.locale}/recruiting`;
      }
    },
    aboutUrl() {
      if (this.isTokenPocketPro) {
        return `https://tokenpocket.pro/${this.$i18n.locale}/about`;
      } else {
        return `https://tpwallet.io/${this.$i18n.locale}/about`;
      }
    },
    developerUrl() {
      if (this.isTokenPocketPro) {
        if (this.$i18n.locale === 'zh') {
          return 'https://help.tokenpocket.pro/developer-cn/';
        } else {
          return 'https://help.tokenpocket.pro/developer-en/';
        }
      } else {
        if (this.$i18n.locale === 'zh') {
          return 'https://help.tpwallet.io/developer-cn/';
        } else {
          return 'https://help.tpwallet.io/developer-en/';
        }
      }
    },
    helpUrl() {
      if (this.isTokenPocketPro) {
        if (this.$i18n.locale === 'zh') {
          return 'https://help.tokenpocket.pro/cn/';
        } else {
          return 'https://help.tokenpocket.pro/en/';
        }
      } else {
        if (this.$i18n.locale === 'zh') {
          return 'https://help.tpwallet.io/cn/';
        } else {
          return 'https://help.tpwallet.io/en/';
        }
      }
    },
    desktopUrl() {
      if (this.isTokenPocketPro) {
        return `https://tokenpocket.pro/${this.$i18n.locale}/download/pc`;
      } else {
        return `https://tpwallet.io/${this.$i18n.locale}/download/pc`;
      }
    },
    approvalUrl() {
      if (this.isTokenPocketPro) {
        if (this.isZH) {
          return 'https://approval.tokenpocket.pro/?locale=zh';
        } else {
          return 'https://approval.tokenpocket.pro/?locale=en';
        }
      } else {
        if (this.isZH) {
          return 'https://approval.tptool.pro/?locale=zh';
        } else {
          return 'https://approval.tptool.pro/?locale=en';
        }
      }
    },
    batchSenderUrl() {
      if (this.isTokenPocketPro) {
        return 'https://batchsender.tokenpocket.pro/';
      } else {
        if (this.isZH) {
          return 'https://batchsender.tptool.pro/';
        } else {
          return 'https://batchsender.tptool.pro/';
        }
      }
    },
    tokenSecurityUrl() {
      if (this.isTokenPocketPro) {
        return 'https://tokensecurity.tokenpocket.pro/';
      } else {
        if (this.isZH) {
          return 'https://tokensecurity.tptool.pro/';
        } else {
          return 'https://tokensecurity.tptool.pro/';
        }
      }
    },
    contactUsUrl() {
      if (this.isTokenPocketPro) {
        if (this.isZH) {
          return 'https://help.tokenpocket.pro/cn/lian-xi-wo-men/contract-us';
        } else {
          return 'https://help.tokenpocket.pro/en/contract-us/untitled';
        }
      } else {
        if (this.isZH) {
          return 'https://help.tpwallet.io/cn/lian-xi-wo-men/contract-us';
        } else {
          return 'https://help.tpwallet.io/en/contract-us/untitled';
        }
      }
    },

    rexUrl() {
      if (this.isTokenPocketPro) {
        return 'https://rex.tokenpocket.pro/';
      } else {
        return 'https://rex.tptool.pro/';
      }
    },
    joinUsUrl() {
      if (this.isTokenPocketPro) {
        return 'https://help.tokenpocket.pro/en/contact-us/Joinus';
      } else {
        return 'https://help.tpwallet.io/en/contact-us/Joinus';
      }
    },
    stakeVaultUrl() {
      if (this.isTokenPocketPro) {
        if (this.$i18n.locale === 'zh') {
          return 'https://dapp.tokenpocket.pro/StakeVault/index.html?locale=zh#/'
        } else {
          return 'https://dapp.tokenpocket.pro/StakeVault/index.html?locale=en#/'
        }
      } else {
        if (this.$i18n.locale === 'zh') {
          return 'https://dapp.tptool.pro/StakeVault/index.html?locale=zh#/'
        } else {
          return 'https://dapp.tptool.pro/StakeVault/index.html?locale=en#/'
        }
      }
    },
  },
};
