<template>
  <div class="footer">
    <div class="content">
      <div class="follow-wrap">
        <img class="logo" src="../../assets/logo-w.png" />
        <div class="footer-follows">
          <div
            class="footer-follow"
            v-for="(item, index) in followList"
            :key="index"
            :class="['footer-follow-' + (index + 1)]"
            @click="openFollow(item)"
          ></div>
          <a
            href="mailto:service@tokenpocket.pro"
            class="footer-follow footer-follow-8"
            target="_blank"
          ></a>
        </div>
        <div class="copyright">© TokenPocket Foundation Ltd.</div>
      </div>
      <div class="footer-wrap">
        <div
          v-for="(item, index) in footerList"
          :key="index"
          class="footer-list"
          :class="{
            'lang-wrap':
              $i18n.locale === 'ru' ||
              $i18n.locale === 'es' ||
              $i18n.locale === 'fil' ||
              $i18n.locale === 'ja' ||
              $i18n.locale === 'vi' ||
              $i18n.locale === 'th' ||
              $i18n.locale === 'pt',
          }"
        >
          <div class="title">{{ item.title }}</div>

          <div class="footer-link-wrap">
            <div
              class="footer-link"
              v-for="(data, dataIndex) in item.data"
              :key="dataIndex"
              :class="{
                width0: data.title === 'Transit Swap' && $i18n.locale === 'zh',
              }"
            >
              <a
                rel="nofollow"
                class="pointer ft-14"
                v-if="!(data.title === 'Transit Swap' && $i18n.locale === 'zh')"
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
    <Modal v-if="show" @close="close" :url="url" />
  </div>
</template>

<script>

import Modal from './Modal.vue';
import TpWallet from '../../mixins/TpWallet';

export default {
  name: 'Footer',
  components: { Modal },
  mixins: [TpWallet],
  data() {
    return {
      email: '',
      show: false,
      url: '',
    };
  },
  computed: {
    followList() {
      return [
        { url: 'https://twitter.com/TokenPocket_TP' },
        {
          isTelegram: true,
          url:
            this.$i18n.locale === 'zh' || this.$i18n.locale  === 'zh-tw'
              ? 'https://t.me/tokenPocket_cn'
              : this.$i18n.locale  === 'ko'
              ? 'https://t.me/tokenpocket_kor'
              : 'https://t.me/tokenpocket_en',
        },
        { url: 'https://fans.tokenpocket.pro/' },
        { url: 'https://www.youtube.com/channel/UCudaS5hcbqUaMtOGHmQ2e0A' },
        { url: 'https://discord.com/invite/NKPM8TXFQk' },
        { url: 'https://github.com/TP-Lab' },
        { url: 'https://tokenpocket-gm.medium.com/' },
      ];
    },
    isZH() {
      return this.$i18n.locale === 'zh';
    },
    privacyPolicy() {
      return this.isZH ? '/privacy-zh/index.html' : '/privacy-en/index.html';
    },
    terms() {
      return this.isZH ? '/terms-zh/index.html' : '/terms-en/index.html';
    },
    copyright() {
      return this.isZH
        ? 'Copyright © 2018-2022 TokenPocket'
        : 'Copyright © 2022 Singapore TokenPocket Foundation Ltd. All rights reserved.';
    },

    footerList() {
      return [
        {
          title: this.$t('features.title'),
          data: [
            {
              title: 'Transit Swap',
              url: 'https://swap.transit.finance/?from=tp#/',
            },
            {
              title: this.$t('features.buyCrypto'),
              url: 'https://buy.transit.finance/',
            },
            {
              title: this.$t('features.mobileWallet'),
              url: this.homeUrl,
            },
            {
              title: this.$t('features.hardwareWallet'),
              url: 'https://www.keypal.pro/'
            },
            {
              title: this.$t('features.extensionWallet'),
              url: this.extensionUrl,
            },
            {
              local: true,
              title: this.$t('features.desktop'),
              url: this.desktopUrl,
            },
            {
              title: this.$t('features.fiveDegrees'),
              url: 'https://www.5degrees.io/',
            },
            {
              title: this.$t('features.approvalDetector'),
              url: this.approvalUrl,
            },
            {
              title: this.$t('features.tokenSecurity'),
              url: this.tokenSecurityUrl,
            },
            // {
            //   title: this.$t('features.keyGenerator'),
            //   url: this.keyUrl,
            // },
            {
              title: this.$t('features.BATCH_SENDER'),
              url: this.batchSenderUrl,
            },
            {
              title: 'REX',
              url: this.rexUrl,
            },
          ],
        },
        {
          title: this.$t('information.title'),
          data: [
            {
              title: this.$t('information.blockchainGuide'),
              url: this.isZH
                ? 'https://github.tokenpocket.pro/BlockchainGuideSeries/#/'
                : 'https://github.tokenpocket.pro/BlockchainGuideSeries-EN/#/',
            },
            {
              title: this.$t('information.tronWallet'),
              url: this.isZH
                ? 'https://github.tokenpocket.pro/BlockchainGuide-TRON/#/'
                : 'https://github.tokenpocket.pro/BlockchainGuide-TRON-EN/#/',
            },
            {
              title: this.$t('information.iostWallet'),
              url: this.isZH
                ? 'https://github.tokenpocket.pro/BlockchainGuide-IOST/#/'
                : 'https://github.tokenpocket.pro/BlockchainGuide-IOST-EN/#/',
            },
            {
              local: true,
              title: this.$t('information.tpMan'),
              url: this.recruitingUrl,
            },
          ],
        },
        {
          title: this.$t('developers.title'),
          data: [
            {
              title: this.$t('developers.github'),
              url: 'https://github.com/TP-Lab',
            },
            {
              title: this.$t('developers.devCenter'),
              url: this.developerUrl,
            },
            {
              local: true,
              title: this.$t('developers.subDApp'),
              url: this.dappUrl
            },
            {
              local: true,
              title: this.$t('developers.subToken'),
              url: this.tokenUrl
            },
            {
              local: true,
              title: this.$t('developers.subNFT'),
              url: this.nftUrl
            },
          ],
        },
        {
          title: this.$t('company.title'),
          data: [
            {
              local: true,
              title: this.$t('company.about'),
              url: this.aboutUrl
            },
            {
              title: this.$t('company.careers'),
              url: this.joinUsUrl,
            },
            {
              title: this.$t('company.pressKit'),
              url: 'https://hk.tpstatic.net/TokenPocket_Brand.zip',
            },
            {
              title: this.$t('company.swagShop'),
              url: this.isZH
                ? 'https://shop95838799.m.youzan.com/v2/showcase/homepage?alias=sptfzUCg0j'
                : 'https://keypalwallet.mystrikingly.com/',
            },
          ],
        },
        {
          title: this.$t('support.title'),
          data: (() => {
            var base = [
              {
                title: this.$t('support.helpCenter'),
                url: this.developerUrl,
              },
              {
                title: this.$t('support.contactUs'),
                url: this.contactUsUrl,
              },
            ];

            return base;
          })(),
        },
        {
          title: this.$t('legal.title'),
          data: [
            {
              title: this.$t('legal.privacyPolicy'),
              url: this.isZH
                ? '/privacy-zh/index.html'
                : '/privacy-en/index.html',
            },
            {
              title: this.$t('legal.terms'),
              url: this.isZH ? '/terms-zh/index.html' : '/terms-en/index.html',
            },
          ],
        },
      ];
    },
  },
  methods: {
    openFollow(item) {
      if (item.isTelegram) {
        this.show = true;
        this.url = item.url;
      } else {
        window.open(item.url);
      }
    },
    close() {
      this.show = false;
    },
    footerUrl(item, el) {
      el.preventDefault();
      // return false
      if (item.scrollTop) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        return false;
      }
      window.open(item.url);
    },

    subscribeEmail() {
      const isEmail = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      );
      if (!isEmail.test(this.email)) {
        const emailMsg =
          this.language === 'zh' ? '请输入正确的邮箱地址' : 'Error Email!';
        this.$message.error(emailMsg);
        return false;
      }

      if (process.client) {
        let url =
          window.origin ||
          window.location.protocol +
            '//' +
            window.location.hostname +
            (window.location.port ? ':' + window.location.port : '');
        this.$axios
          .post(`${url}/api/tokenPocket/subscribe`, {
            email: this.email,
          })
          .then((res) => {
            if (res.data.result === 0) {
              const message =
                this.language === 'zh' ? '订阅成功' : 'Subscribe sucess';
              this.email = '';
              this.$message.success(message);
            } else {
              this.$message.error(res.data.message);
            }
          })
          .catch((error) => {
            this.$message.error(error);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@for $i from 1 through 8 {
  .footer-follow-#{$i} {
    background: url(../../assets/footer/#{$i}.png) no-repeat 100% / contain;
    cursor: pointer;
    &:hover {
      background: url(../../assets/footer/#{$i}-on.png)
        no-repeat
        100% /
        contain;
    }
  }
}
.footer {
  background: #1c1c1f;
  .content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 80px 0 164px;
    .follow-wrap {
      .logo {
        width: 225px;
      }
      .footer-follows {
        display: flex;
        margin: 32px 0 16px;
        .footer-follow {
          width: 32px;
          height: 32px;
          &:nth-child(n + 2) {
            margin-left: 10px;
          }
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
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-left: 131px;
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
  .footer {
    .content {
      padding: 80px 20px 164px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .footer {
    .content {
      padding: 80px 28px 164px;
      flex-direction: column;
      .footer-wrap {
        margin-left: 0;
        margin-top: 40px;
        .footer-list {
          .title {
            text-align: left;
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
      background: url(../../assets/footer/#{$i}.png) no-repeat 100% / contain;
      cursor: pointer;
      &:hover {
        background: url(../../assets/footer/#{$i}.png) no-repeat 100% / contain;
      }
    }
  }
  .footer {
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
