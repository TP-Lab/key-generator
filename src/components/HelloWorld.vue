<template>
  <div class="hello">
    <h1>{{$t('i18nView.title')}}</h1>
    <div>
      <p>{{$t('i18nView.intro')}}</p>
      <p class="red">{{$t('i18nView.tips')}}</p>
      <button @click="genKey()">{{$t('i18nView.gen')}}</button>
      <div v-if="privateKey">
        <p>
          {{$t('i18nView.publicKey')}}:
          <b>{{publicKey}}</b>
          <button v-if="copyEnable" class="copy-public">{{$t('i18nView.copy')}}</button>
        </p>
        <p>
          {{$t('i18nView.privateKey')}}:
          <b>{{privateKey}}</b>
          <button v-if="copyEnable" class="copy-private">{{$t('i18nView.copy')}}</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ec as EC } from "elliptic";
import Address from "@nervosnetwork/ckb-sdk-address";
import ClipboardJS from "clipboard";

const ec = new EC("secp256k1");

export default {
  name: "HelloWorld",
  data() {
    return {
      publicKey: "",
      privateKey: "",
      copyEnable: true,
      clipboard: "",
      clipboard1: ""
    };
  },
  methods: {
    genKey() {
      let privateKey = ec.genKeyPair().priv;

      let address = new Address(privateKey, { prefix: "ckb" });

      this.privateKey = "0x" + address.getPrivateKey();
      this.publicKey = address.value;

      this.initCodeCopy(privateKey);
    },
    initCodeCopy() {
      var _this = this;
      if (ClipboardJS.isSupported()) {
        if (this.clipboard && this.clipboard1) {
          this.clipboard.destroy();
          this.clipboard1.destroy();
        }

        this.clipboard = new ClipboardJS(".copy-public", {
          text: function() {
            return _this.publicKey;
          }
        });

        this.clipboard1 = new ClipboardJS(".copy-private", {
          text: function() {
            return _this.privateKey;
          }
        });

        this.clipboard.on("success", e => {
          alert(_this.$t("i18nView.copied"));
        });

        this.clipboard.on("error", e => {
          alert(_this.$t("i18nView.failed"));
        });

        this.clipboard1.on("success", e => {
          alert(_this.$t("i18nView.copied"));
        });

        this.clipboard1.on("error", e => {
          alert(_this.$t("i18nView.copied"));
        });
      } else {
        this.copyEnable = false;
      }
    }
  }
};
</script>

<style scoped lang="less">
.red {
  color: red;
}

h1 {
  font-size: 24px;
  margin-bottom: 60px;
}

button {
  background: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  -webkit-appearance: none;
  outline: none;
  border: 1px solid #999;
}

.copy-public,
.copy-private {
  margin-left: 4px;
  padding: 4px 8px;
}
</style>
