<template>
  <div class="FooterLayout">
    <footer class="content">
      <div class="follow-wrap">
        <img class="logo" src="../../assets/logo-dark.png" />
        <div class="footer-follows">
          <div
            class="footer-follow"
            v-for="(item, index) in followList"
            :key="index"
            :class="[item.class]"
            @click="openFollow(item)"
          ></div>
          <a
            href="mailto:service@tokenpocket.pro"
            class="footer-follow footer-follow-8"
            target="_blank"
          ></a>
        </div>
        <div class="copyright">© TP Global Ltd</div>
      </div>
      <div class="footer-wrap flex-1 d-flex flex-wrap jc-between">
        <div
          v-for="(item, index) in footerList"
          :key="index"
          class="footer-list"
        >
          <div
            class="footer-item"
            v-for="(child, cIndex) in item"
            :key="cIndex"
          >
            <div class="title">{{ child.title }}</div>
            <div class="footer-link-wrap">
              <div
                class="footer-link"
                v-for="(data, dataIndex) in child.data"
                :key="dataIndex"
                :class="{
                  width0: data.title === 'Transit Swap' && $i18n.locale === 'zh'
                }"
              >
                <a
                  rel="nofollow"
                  class="pointer ft-14"
                  v-if="
                    !(data.title === 'Transit Swap' && $i18n.locale === 'zh')
                  "
                  :href="data.url"
                  :target="data.local ? '_self' : '_blank'"
                  @click="footerUrl(data, $event)"
                  >{{ data.title }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <Modal v-if="show" @close="close" :url="url" />
  </div>
</template>

<script>
import NavUrl from '../../mixins/NavUrl'

import Modal from './Modal.vue'

export default {
  name: 'FooterLayout',
  components: { Modal },
  mixins: [NavUrl],
  data() {
    return {
      email: '',
      show: false,
      url: ''
    }
  },
  computed: {
    language() {
      return this.$i18n.locale
    },
    followList() {
      return [
        { url: 'https://twitter.com/TokenPocket_TP', class: 'footer-follow-1' },
        {
          isTelegram: true,
          url:
            this.language === 'zh' || this.language === 'zh-tw'
              ? 'https://t.me/tokenPocket_cn'
              : this.language === 'ko'
              ? 'https://t.me/tokenpocket_kor'
              : 'https://t.me/tokenpocket_en',
          class: 'footer-follow-2'
        },
        { url: 'https://fans.tokenpocket.pro/', class: 'footer-follow-3' },
        { url: 'https://www.youtube.com/channel/UCudaS5hcbqUaMtOGHmQ2e0A', class: 'footer-follow-4' },
        { url: 'https://github.com/TP-Lab', class: 'footer-follow-6' },
        { url: 'https://tokenpocket-gm.medium.com/', class: 'footer-follow-7' }
      ]
    },
    isZH() {
      return this.language === 'zh'
    },
    privacyPolicy() {
      return this.isZH ? '/privacy-zh/index.html' : '/privacy-en/index.html'
    },
    terms() {
      return this.isZH ? '/terms-zh/index.html' : '/terms-en/index.html'
    },
    copyright() {
      return this.isZH
        ? 'Copyright © 2018-2022 TokenPocket'
        : 'Copyright © 2022 Singapore TokenPocket Foundation Ltd. All rights reserved.'
    },
    footerList() {
      return [
        // Products
        [
          {
            title: this.$t('COMMON.LAYOUT.products'),
            data: [
              {
                title: this.$t('COMMON.LAYOUT.mobileWallet'),
                url: this.homeUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.hardwareWallet'),
                url: this.keypalUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.extensionWallet'),
                url: this.extensionUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.TPCard'),
                url: this.TPCardUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.swap'),
                url: this.transitSwapUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.market'),
                url: this.transitSwapMarkUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.buyCryptoFooter'),
                url: this.transitBuyUrl
              }
            ]
          }
        ],
        // Tools
        [
          {
            title: this.$t('COMMON.LAYOUT.tools'),
            data: [
              {
                title: this.$t('COMMON.LAYOUT.versionVerification'),
                url: this.verifyVersionUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.tokenSecurity'),
                url: this.tokenSecurityUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.tokenProfile'),
                url: this.tokenProfileUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.easyInscription'),
                url: this.inscriptionUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.keyGenerator'),
                curPage: true
              },
              {
                title: this.$t('COMMON.LAYOUT.approvalDetector'),
                url: this.approvalUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.BATCH_SENDER'),
                url: this.batchSenderUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.tokenClaim'),
                url: this.tokenClaimUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.nostrAssetsBatchSender'),
                url: this.nostrUrl
              },
              {
                title: 'REX',
                url: this.rexUrl
              }
            ]
          }
        ],
        // Explorer
        [
          {
            title: this.$t('COMMON.LAYOUT.explorer'),
            data: [
              {
                title: this.$t('COMMON.LAYOUT.swap'),
                url: this.transitSwapUrl,
              },
              {
                title: this.$t('COMMON.LAYOUT.bridge'),
                url: this.transitSwapUrl,
              },
              {
                title: this.$t('COMMON.LAYOUT.buyCrypto'),
                url: this.transitBuyUrl,
              },
              {
                title: this.$t('COMMON.LAYOUT.market'),
                url: this.transitSwapMarkUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.dappStore'),
                url: this.dappStoreUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.safetyTips'),
                url: this.safetyTipsUrl
              },
              // {
              //   local: true,
              //   title: this.$t('COMMON.LAYOUT.developerCommunity'),
              //   url: this.$i18n.path('/developer')
              // },
              // {
              //   local: true,
              //   title: this.$t('COMMON.LAYOUT.defiWallet'),
              //   url: this.$i18n.path('/download/app')
              // }
            ]
          }
        ],
        // Build
        [
          {
            title: this.$t('COMMON.LAYOUT.build'),
            data: [
              {
                title: this.$t('COMMON.LAYOUT.devCenter'),
                url: this.developerUrl
              },
              {
                title: 'TP Lab',
                url: 'https://github.com/TP-Lab'
              },
              {
                title: this.$t('COMMON.LAYOUT.subDApp'),
                url: this.dappUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.subToken'),
                url: this.tokenUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.subNFT'),
                url: this.nftUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.subChain'),
                url: 'https://github.com/TP-Lab/networklist-org'
              },
              {
                title: this.$t('COMMON.LAYOUT.bugBounty'),
                url: `https://bugrap.io/bounties/TokenPocket`
              }
            ]
          }
        ],
        // Learn Company
        [
          {
            title: this.$t('COMMON.LAYOUT.learn'),
            data: [
              {
                title: this.$t('COMMON.LAYOUT.blockchainGuide'),
                url: this.isZH
                  ? 'https://github.tokenpocket.pro/BlockchainGuideSeries/#/'
                  : 'https://github.tokenpocket.pro/BlockchainGuideSeries-EN/#/'
              },
              {
                title: this.$t('COMMON.LAYOUT.tronWallet'),
                url: this.isZH
                  ? 'https://github.tokenpocket.pro/BlockchainGuide-TRON/#/'
                  : 'https://github.tokenpocket.pro/BlockchainGuide-TRON-EN/#/'
              },
              {
                title: this.$t('COMMON.LAYOUT.iostWallet'),
                url: this.isZH
                  ? 'https://github.tokenpocket.pro/BlockchainGuide-IOST/#/'
                  : 'https://github.tokenpocket.pro/BlockchainGuide-IOST-EN/#/'
              },
            ]
          },
          {
            title: this.$t('COMMON.LAYOUT.company'),
            data: (() => {
              var list = [
                {
                  title: this.$t('COMMON.LAYOUT.about'),
                  url: this.aboutUrl
                },
                {
                  title: this.$t('COMMON.LAYOUT.careers'),
                  url: this.joinUsUrl
                },
                {
                  title: this.$t('COMMON.LAYOUT.tpMan'),
                  url: this.recruitingUrl
                },
                {
                  title: this.$t('COMMON.LAYOUT.pressKit'),
                  url: this.brandKitUrl
                  // url: 'https://hilarious-eucalyptus-a2f.notion.site/TokenPocket-Brand-Resources-ab6e6019d20342eea025ec62955084fc'
                }
              ]
              if (this.isZH) {
                list.push({
                  title: this.$t('COMMON.LAYOUT.swagShop'),
                  url: 'https://shop95838799.m.youzan.com/v2/showcase/homepage?alias=sptfzUCg0j'
                })
              }
              return list
            })()
          }
        ],
        // Support Legal
        [
          {
            title: this.$t('COMMON.LAYOUT.support'),
            data: [
              {
                title: this.$t('COMMON.LAYOUT.helpCenter'),
                url: this.helpUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.contactUs'),
                url: this.contactUsUrl
              }
            ]
          },
          {
            title: this.$t('COMMON.LAYOUT.legal'),
            data: [
              {
                title: this.$t('COMMON.LAYOUT.privacyPolicy'),
                url: this.privacyUrl
              },
              {
                title: this.$t('COMMON.LAYOUT.terms'),
                url: this.termsUrl
              }
            ]
          }
        ]
      ]
    }
  },
  methods: {
    openFollow(item) {
      if (item.isTelegram) {
        this.show = true
        this.url = item.url
      } else {
        window.open(item.url)
      }
    },
    close() {
      this.show = false
    },
    footerUrl(item, el) {
      el.preventDefault()
      // return false
      if (item.scrollTop) {
        document.body.scrollTop = document.documentElement.scrollTop = 0
        return false
      }
      if (item.curPage) {
        location.reload()
      } else {
        item.local ? this.localLink(item.url, el) : window.open(item.url)
      }
    },

    subscribeEmail() {
      const isEmail = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      )
      if (!isEmail.test(this.email)) {
        const emailMsg =
          this.language === 'zh' ? '请输入正确的邮箱地址' : 'Error Email!'
        this.$message.error(emailMsg)
        return false
      }

      let url =
        window.origin ||
        window.location.protocol +
          '//' +
          window.location.hostname +
          (window.location.port ? ':' + window.location.port : '')
      this.$axios
        .post(`${url}/api/tokenPocket/subscribe`, {
          email: this.email
        })
        .then((res) => {
          if (res.data.result === 0) {
            const message =
              this.language === 'zh' ? '订阅成功' : 'Subscribe sucess'
            this.email = ''
            this.$message.success(message)
          } else {
            this.$message.error(res.data.message)
          }
        })
        .catch((error) => {
          this.$message.error(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@for $i from 1 through 8 {
  .footer-follow-#{$i} {
    background: url(../../assets/footer/#{$i}.png)
      no-repeat
      100% /
      contain;
    cursor: pointer;
    &:hover {
      background: url(../../assets/footer/#{$i}-on.png)
        no-repeat
        100% /
        contain;
    }
  }
}
.FooterLayout {
  background: #1c1c1f;
  .content {
    padding: 80px 0 164px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .follow-wrap {
      .logo {
        width: 225px;
      }
      .footer-follows {
        margin: 32px 0 16px;
        max-width: 200px;
        display: flex;
        flex-wrap: wrap;
        // grid-template-columns: repeat(5, 1fr);
        gap: 10px;
        .footer-follow {
          width: 32px;
          height: 32px;
          // &:nth-child(n + 2) {
          //   margin-left: 10px;
          // }
        }
      }
      .copyright {
        font-size: 12px;
        font-weight: 400;
        color: #6f7174;
        line-height: 20px;
      }
    }
    .footer-wrap {
      margin-left: 131px;
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      h3 {
        margin-top: 0;
        margin-bottom: 30px;
      }
      .footer-list {
        padding: 0 10px;
        &.lang-wrap {
          width: 30%;
          &:nth-child(n + 4) {
            margin-top: 20px;
          }
        }
        .footer-item {
          &:nth-child(n + 2) {
            margin-top: 30px;
          }
          .title {
            font-size: 14px;
            font-weight: 300;
            color: #6f7174;
            line-height: 20px;
          }
          .footer-link-wrap {
            margin-top: 24px;
            .footer-link {
              a {
                display: inline-block;
                margin-bottom: 15px;
                font-size: 14px;
                font-weight: 300;
                color: rgba(255, 255, 255, 0.88);
                line-height: 18px;
                word-break: break-word;
                max-width: 100px;
              }
              a:hover {
                color: #2980fe;
              }
            }
          }
        }
      }
    }
  }
}

.footer-email {
  position: absolute;
  border: 1px solid #2980fe;
  border-radius: 4px;
  display: flex;
  align-items: center;
  height: 32px;
  font-size: 14px;
  input {
    outline: none;
    border: 0;
    color: #101010;
    width: 160px;
    // height: 32px;
    // flex: 1;
    height: 100%;
    margin: 0 0 0 10px;
    &::-webkit-input-placeholder {
      color: #b1b1b1;
    }

    &::-moz-placeholder {
      color: #b1b1b1;
    }

    &::-ms-placeholder {
      color: #b1b1b1;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    width: 80px;
    height: 32px;
    line-height: 32px;
    color: #fff;
    background: #2980fe;
    position: relative;
    border-radius: 0 4px 4px 0;
    // padding: 0 15px 0 10px;
  }
}

.email-icon-right {
  display: inline-block;
  position: relative;
  margin-left: 5px;
  width: 6px;
  height: 6px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 2px;
    width: 6px;
    height: 6px;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    transform: rotate(45deg);
  }
}

@media screen and (max-width: 1300px) {
  .FooterLayout {
    .content {
      padding: 80px 20px 164px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .FooterLayout {
    .content {
      padding: 80px 20px 164px;
      flex-direction: column;
      .follow-wrap {
        .footer-follows {
          max-width: none;
        }
      }
      .footer-wrap {
        margin-left: 0;
        margin-top: 40px;
        .footer-list {
          padding: 0;
          .footer-item {
            .title {
              text-align: left;
            }
          }
        }
      }
    }
  }
}

// 移动端
@media screen and (max-width: 768px) {
  @for $i from 1 through 8 {
    .footer-follow-#{$i} {
      background: url(../../assets/footer/#{$i}.png)
        no-repeat
        100% /
        contain;
      cursor: pointer;
      &:hover {
        background: url(../../assets/footer/#{$i}.png)
          no-repeat
          100% /
          contain;
      }
    }
  }
  .FooterLayout {
    .content {
      padding: 68px 28px 60px;
      .follow-wrap {
        .logo {
          width: 199px;
        }
        .footer-follows {
          margin: 41px 0 21px;
        }
        .copyright {
          font-size: 13px;
        }
      }
      .footer-wrap {
        margin: 0;
        margin-top: 32px;
        .footer-list {
          padding: 0;
          width: 100%;
          margin-bottom: 12px;
          &.lang-wrap {
            width: 100%;
            &:nth-child(n + 4) {
              margin-top: 0;
            }
          }
          .footer-item {
            &:nth-child(n + 2) {
              margin-top: 12px;
            }
            .title {
              padding: 0;
              font-size: 14px;
            }
            .footer-link-wrap {
              margin-top: 12px;
              .footer-link {
                width: 100%;
                a {
                  margin-bottom: 8px;
                  line-height: 21px;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 575px) {
  .footer-link-wrap {
    display: flex;
    flex-wrap: wrap;
    .footer-link {
      width: 33%;
      &.width0 {
        width: 0;
      }
    }
  }

  .footer-list {
    margin-bottom: 10px;
  }

  .footer-link h3 {
    margin-bottom: 0px;
  }

  .footer-link a {
    margin-bottom: 0;
  }

  // .footer-list {
  // text-align: center;
  // }

  .footer-email {
    input {
      width: 200px;
    }
  }
}
</style>
