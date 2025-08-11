
const domain = `tp.xyz`

export default {
  computed: {
    isTokenPocketPro() {
      if (window.location.hostname === 'key.tokenpocket.pro') {
        return true;
      } else {
        return false;
      }
    },
    isZH() {
      if (this.$i18n.locale === 'zh') {
        return true
      } else {
        return false
      }
    },
    homeUrl() {
      if (this.isTokenPocketPro) {
        return 'https://tokenpocket.pro/'
      } else {
        return `https://${domain}/`
      }
    },
    extensionUrl() {
      if (this.isTokenPocketPro) {
        if (this.isZH) {
          return 'https://extension.tokenpocket.pro/?locale=zh'
        } else {
          return 'https://extension.tokenpocket.pro/?locale=en'
        }
      } else {
        if (this.isZH) {
          return `https://extension.${domain}/?locale=zh`
        } else {
          return `https://extension.${domain}/?locale=en`
        }
      }
    },
    dappUrl() {
      if (this.isTokenPocketPro) {
        return `https://tokenpocket.pro/${this.$i18n.locale}/submit/dapp`
      } else {
        return `https://${domain}/${this.$i18n.locale}/submit/dapp`
      }
    },
    tokenUrl() {
      if (this.isTokenPocketPro) {
        return `https://tokenpocket.pro/${this.$i18n.locale}/submit/token`
      } else {
        return `https://${domain}/${this.$i18n.locale}/submit/token`
      }
    },
    nftUrl() {
      if (this.isTokenPocketPro) {
        return `https://tokenpocket.pro/${this.$i18n.locale}/submit/nft`
      } else {
        return `https://${domain}/${this.$i18n.locale}/submit/nft`
      }
    },
    recruitingUrl() {
      if (this.isTokenPocketPro) {
        return `https://tokenpocket.pro/${this.$i18n.locale}/recruiting`
      } else {
        return `https://${domain}/${this.$i18n.locale}/recruiting`
      }
    },
    aboutUrl() {
      if (this.isTokenPocketPro) {
        return `https://tokenpocket.pro/${this.$i18n.locale}/about`
      } else {
        return `https://${domain}/${this.$i18n.locale}/about`
      }
    },
    developerUrl() {
      if (this.isZH) {
        return 'https://help.tokenpocket.pro/developer-cn/'
      } else {
        return 'https://help.tokenpocket.pro/developer-en/'
      }
    },
    helpUrl() {
      if (this.isZH) {
        return 'https://help.tokenpocket.pro/cn/'
      } else {
        return 'https://help.tokenpocket.pro/en/'
      }
      // if (this.isTokenPocketPro) {
      //   if (this.isZH) {
      //     return 'https://help.tokenpocket.pro/cn/'
      //   } else {
      //     return 'https://help.tokenpocket.pro/en/'
      //   }
      // } else {
      //   if (this.isZH) {
      //     return `https://help.${domain}/cn/`
      //   } else {
      //     return `https://help.${domain}/en/`
      //   }
      // }
    },
    desktopUrl() {
      if (this.isTokenPocketPro) {
        return `https://tokenpocket.pro/${this.$i18n.locale}/download/pc`
      } else {
        return `https://${domain}/${this.$i18n.locale}/download/pc`
      }
    },
    approvalUrl() {
      if (this.isTokenPocketPro) {
        if (this.isZH) {
          return 'https://approval.tokenpocket.pro/?locale=zh'
        } else {
          return 'https://approval.tokenpocket.pro/?locale=en'
        }
      } else {
        if (this.isZH) {
          return 'https://approval.tptool.pro/?locale=zh'
        } else {
          return 'https://approval.tptool.pro/?locale=en'
        }
      }
    },
    batchSenderUrl() {
      if (this.isTokenPocketPro) {
        if (this.isZH) {
          return 'https://batchsender.tokenpocket.pro/?locale=zh'
        } else {
          return 'https://batchsender.tokenpocket.pro/?locale=en'
        }
      } else {
        if (this.isZH) {
          return 'https://batchsender.tptool.pro/?locale=zh'
        } else {
          return 'https://batchsender.tptool.pro/?locale=en'
        }
      }
    },
    tokenSecurityUrl() {
      if (this.isTokenPocketPro) {
        if (this.isZH) {
          return 'https://tokensecurity.tokenpocket.pro/?locale=zh'
        } else {
          return 'https://tokensecurity.tokenpocket.pro/?locale=en'
        }
      } else {
        if (this.isZH) {
          return 'https://tokensecurity.tptool.pro/?locale=zh'
        } else {
          return 'https://tokensecurity.tptool.pro/?locale=en'
        }
      }
    },
    contactUsUrl() {
      if (this.isZH) {
        return 'https://help.tokenpocket.pro/cn/contact-us/contact-methods'
      } else {
        return 'https://help.tokenpocket.pro/en/contact-us/contact-methods'
      }
      // if (this.isTokenPocketPro) {
      //   if (this.isZH) {
      //     return 'https://help.tokenpocket.pro/cn/contact-us/contact-methods'
      //   } else {
      //     return 'https://help.tokenpocket.pro/en/contact-us/contact-methods'
      //   }
      // } else {
      //   if (this.isZH) {
      //     return `https://help.${domain}/cn/contact-us/contact-methods`
      //   } else {
      //     return `https://help.${domain}/en/contact-us/contact-methods`
      //   }
      // }
    },
    rexUrl() {
      if (this.isTokenPocketPro) {
        if (this.isZH) {
          return 'https://rex.tokenpocket.pro/?locale=zh'
        } else {
          return 'https://rex.tokenpocket.pro/?locale=en'
        }
      } else {
        if (this.isZH) {
          return 'https://rex.tptool.pro/?locale=zh'
        } else {
          return 'https://rex.tptool.pro/?locale=en'
        }
      }
    },
    joinUsUrl() {
      if (this.isZH) {
        return 'https://help.tokenpocket.pro/cn/contact-us/joinus'
      } else {
        return 'https://help.tokenpocket.pro/en/contact-us/Joinus'
      }
      // if (!this.isTokenPocketPro) {
      //   if (this.isZH) {
      //     return 'https://help.tokenpocket.pro/cn/contact-us/joinus'
      //   } else {
      //     return 'https://help.tokenpocket.pro/en/contact-us/Joinus'
      //   }
      // } else {
      //   if (this.isZH) {
      //     return `https://help.${domain}/cn/contact-us/joinus`
      //   } else {
      //     return `https://help.${domain}/en/contact-us/Joinus`
      //   }
      // }
    },
    stakeVaultUrl() {
      if (this.isTokenPocketPro) {
        if (this.isZH) {
          return 'https://dapp.tokenpocket.pro/StakeVault/index.html?locale=zh#/'
        } else {
          return 'https://dapp.tokenpocket.pro/StakeVault/index.html?locale=en#/'
        }
      } else {
        if (this.isZH) {
          return 'https://dapp.tptool.pro/StakeVault/index.html?locale=zh#/'
        } else {
          return 'https://dapp.tptool.pro/StakeVault/index.html?locale=en#/'
        }
      }
    },
    verifyVersionUrl() {
      if (this.isTokenPocketPro) {
        return `https://verify.tokenpocket.pro/?locale=${this.$i18n.locale}#/`
      } else {
        return `https://verify.${domain}/?locale=${this.$i18n.locale}#/`
      }
    },
    fiveDegreesUrl() {
      if (this.isZH) {
        return 'https://www.5degrees.io/?locale=zh#/'
      } else {
        return 'https://www.5degrees.io/?locale=en#/'
      }
    },
    keypalUrl() {
      if (this.isZH) {
        return 'https://www.keypal.pro/?locale=zh#/'
      } else {
        return 'https://www.keypal.pro/?locale=en#/'
      }
    },
    transitFinanceUrl() {
      if (this.isZH) {
        return 'https://transit.finance/'
      } else {
        return 'https://transit.finance/'
      }
    },
    keyUrl() {
      if (this.isTokenPocketPro) {
        return `https://key.tokenpocket.pro/?locale=${this.$i18n.locale}#/`
      } else {
        return `https://key.tptool.pro/?locale=${this.$i18n.locale}#/`
      }
    },
    tokenProfileUrl() {
      if (this.isTokenPocketPro) {
        return `https://profile.tokenpocket.pro/?locale=${this.$i18n.locale}#/`
      } else {
        return `https://profile.tptool.pro/?locale=${this.$i18n.locale}#/`
      }
    },
    inscriptionUrl() {
      if (this.isTokenPocketPro) {
        return `https://tp-lab.tokenpocket.pro/insc/?locale=${this.$i18n.locale}#/`
      } else {
        return `https://tp-lab.tptool.pro/insc/?locale=${this.$i18n.locale}#/`
      }
    },
    nostrUrl() {
      if (this.isTokenPocketPro) {
        return `https://tp-lab.tokenpocket.pro/nostr/?locale=${this.$i18n.locale}#/`
      } else {
        return `https://tp-lab.tptool.pro/nostr/?locale=${this.$i18n.locale}#/`
      }
    },
    transitBuyUrl() {
      return `https://buy.transit.finance/?locale=${this.$i18n.locale}`
      // if (this.isTokenPocketPro) {
      // } else {
      //   return `https://tp-lab.tptool.pro/nostr/?locale=${this.$i18n.locale}#/`
      // }
    },
    tokenClaimUrl() {
      if (this.isTokenPocketPro) {
        return `https://claim.tokenpocket.pro/?locale=${this.$i18n.locale}#/`
      } else {
        return `https://claim.${domain}/?locale=${this.$i18n.locale}#/`
      }
    },
    dappStoreUrl() {
      if (this.isTokenPocketPro) {
        return `https://tokenpocket.pro/${this.$i18n.locale}/dappstore`;
      } else {
        return `https://${domain}/${this.$i18n.locale}/dappstore`;
      }
    },
    privacyUrl() {
      if (this.isTokenPocketPro) {
        if (this.isZH) {
          return `https://tokenpocket.pro/privacy-zh/index.html`;
        } else {
          return `https://tokenpocket.pro/privacy-en/index.html`;
        }
      } else {
        if (this.isZH) {
          return `https://${domain}/privacy-zh/index.html`;
        } else {
          return `https://${domain}/privacy-en/index.html`;
        }
      }
    },
    termsUrl() {
      if (this.isTokenPocketPro) {
        if (this.isZH) {
          return `https://tokenpocket.pro/terms-zh/index.html`;
        } else {
          return `https://tokenpocket.pro/terms-en/index.html`;
        }
      } else {
        if (this.isZH) {
          return `https://${domain}/terms-zh/index.html`;
        } else {
          return `https://${domain}/terms-en/index.html`;
        }
      }
    },
    brandKitUrl() {
      if (this.isTokenPocketPro) {
        return `https://tokenpocket.pro/${this.$i18n.locale}/brandkit`;
      } else {
        return `https://${domain}/${this.$i18n.locale}/brandkit`;
      }
    },
  }
}
