<template>
  <div class="hello">
    <h1>{{ $t('i18nView.title') }}</h1>
    <div>
      <p>{{ $t('i18nView.intro') }}</p>
      <p class="red">{{ $t('i18nView.tips') }}</p>

      <vue-tabs>
        <v-tab icon="icon-eth" title="ETH / EVMs">
          <i class="icon icon-eth"></i>
          <div>
            <h3>ETH / EVMs keys</h3>
            <p>
              {{ $t('i18nView.publicKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="eth-public-key"
                :value="ethPublicKey"
              />
              <button
                data-clipboard-target="#eth-public-key"
                v-if="copyEnable"
                class="copy-btn copy-public"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>
            <p>
              {{ $t('i18nView.privateKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="eth-private-key"
                :value="ethPrivateKey"
              />
              <button
                data-clipboard-target="#eth-private-key"
                v-if="copyEnable"
                class="copy-btn copy-private"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>

            <button @click="genEthKey()">{{ $t('i18nView.gen') }}</button>
          </div>
        </v-tab>
        <v-tab icon="icon-eos" title="EOS">
          <i class="icon icon-eos test"></i>
          <div>
            <h3>EOS keys</h3>
            <p>
              {{ $t('i18nView.publicKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="eos-public-key"
                :value="eosPublicKey"
              />
              <button
                data-clipboard-target="#eos-public-key"
                v-if="copyEnable"
                class="copy-btn copy-public"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>
            <p>
              {{ $t('i18nView.privateKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="eos-private-key"
                :value="eosPrivateKey"
              />
              <button
                data-clipboard-target="#eos-private-key"
                v-if="copyEnable"
                class="copy-btn copy-private"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>

            <button @click="genEosKey()">{{ $t('i18nView.gen') }}</button>
          </div>
        </v-tab>

        <v-tab icon="icon-iost" title="IOST">
          <i class="icon icon-iost"></i>
          <div>
            <h3>IOST keys</h3>
            <p>
              {{ $t('i18nView.publicKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="iost-public-key"
                :value="iostPublicKey"
              />
              <button
                data-clipboard-target="#iost-public-key"
                v-if="copyEnable"
                class="copy-btn copy-public"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>
            <p>
              {{ $t('i18nView.privateKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="iost-private-key"
                :value="iostPrivateKey"
              />
              <button
                data-clipboard-target="#iost-private-key"
                v-if="copyEnable"
                class="copy-btn copy-private"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>

            <button @click="genIostKey()">{{ $t('i18nView.gen') }}</button>
          </div>
        </v-tab>
        <v-tab icon="icon-tron" title="TRON">
          <i class="icon icon-tron"></i>
          <div>
            <h3>TRON keys</h3>
            <p>
              {{ $t('i18nView.publicKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="tron-public-key"
                :value="tronPublicKey"
              />
              <button
                data-clipboard-target="#tron-public-key"
                v-if="copyEnable"
                class="copy-btn copy-public"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>
            <p>
              {{ $t('i18nView.privateKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="tron-private-key"
                :value="tronPrivateKey"
              />
              <button
                data-clipboard-target="#tron-private-key"
                v-if="copyEnable"
                class="copy-btn copy-private"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>

            <button @click="genTronKey()">{{ $t('i18nView.gen') }}</button>
          </div>
        </v-tab>
        <v-tab icon="icon-btc" title="BTC">
          <i class="icon icon-btc"></i>
          <div>
            <h3>BTC keys</h3>

            <p>
              {{ $t('i18nView.normalAddr') }}
              <br />
              <input
                readonly
                type="text"
                id="btc-public-key"
                :value="btcPublicKey"
              />
              <button
                data-clipboard-target="#btc-public-key"
                v-if="copyEnable"
                class="copy-btn copy-public"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>

            <p>
              P2SH {{ $t('i18nView.address') }}
              <br />
              <input
                readonly
                type="text"
                id="btcP2SH-public-key"
                :value="btcP2SHPublicKey"
              />
              <button
                data-clipboard-target="#btcP2SH-public-key"
                v-if="copyEnable"
                class="copy-btn copy-public"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>

            <p>
              P2WPK {{ $t('i18nView.address') }}
              <br />
              <input
                readonly
                type="text"
                id="btcSegwit-public-key"
                :value="btcSegwitPublicKey"
              />
              <button
                data-clipboard-target="#btcSegwit-public-key"
                v-if="copyEnable"
                class="copy-btn copy-public"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>

            <p>
              {{ $t('i18nView.privateKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="btc-private-key"
                :value="btcPrivateKey"
              />
              <button
                data-clipboard-target="#btc-private-key"
                v-if="copyEnable"
                class="copy-btn copy-private"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>

            <button @click="genBtcKey()">{{ $t('i18nView.gen') }}</button>
          </div>
        </v-tab>
        <v-tab icon="icon-cosmos" title="Cosmos">
          <i class="icon icon-cosmos"></i>
          <div>
            <h3>Cosmos keys</h3>
            <p>
              {{ $t('i18nView.publicKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="cosmos-public-key"
                :value="cosmosPublicKey"
              />
              <button
                data-clipboard-target="#cosmos-public-key"
                v-if="copyEnable"
                class="copy-btn copy-public"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>
            <p>
              {{ $t('i18nView.privateKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="cosmos-private-key"
                :value="cosmosPrivateKey"
              />
              <button
                data-clipboard-target="#cosmos-private-key"
                v-if="copyEnable"
                class="copy-btn copy-private"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>

            <button @click="genCosmosKey()">{{ $t('i18nView.gen') }}</button>
          </div>
        </v-tab>
        <v-tab icon="icon-binance" title="Binance">
          <i class="icon icon-binance"></i>
          <div>
            <h3>Binance keys</h3>
            <p>
              {{ $t('i18nView.publicKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="binance-public-key"
                :value="binancePublicKey"
              />
              <button
                data-clipboard-target="#binance-public-key"
                v-if="copyEnable"
                class="copy-btn copy-public"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>
            <p>
              {{ $t('i18nView.privateKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="binance-private-key"
                :value="binancePrivateKey"
              />
              <button
                data-clipboard-target="#binance-private-key"
                v-if="copyEnable"
                class="copy-btn copy-private"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>

            <button @click="genBinanceKey()">{{ $t('i18nView.gen') }}</button>
          </div>
        </v-tab>
        <v-tab icon="icon-nervos" title="Nervos">
          <i class="icon icon-nervos"></i>
          <div>
            <h3>Nervos keys</h3>
            <p>
              {{ $t('i18nView.publicKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="nervos-public-key"
                :value="nervosPublicKey"
              />
              <button
                data-clipboard-target="#nervos-public-key"
                v-if="copyEnable"
                class="copy-btn copy-public"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>
            <p>
              {{ $t('i18nView.privateKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="nervos-private-key"
                :value="nervosPrivateKey"
              />
              <button
                data-clipboard-target="#nervos-private-key"
                v-if="copyEnable"
                class="copy-btn copy-private"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>

            <button @click="genNervosKey()">{{ $t('i18nView.gen') }}</button>
          </div>
        </v-tab>
        <v-tab icon="icon-jingtum" title="Jingtum">
          <i class="icon icon-jingtum"></i>
          <div>
            <h3>Jingtum keys</h3>
            <p>
              {{ $t('i18nView.publicKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="jingtum-public-key"
                :value="jingtumPublicKey"
              />
              <button
                data-clipboard-target="#jingtum-public-key"
                v-if="copyEnable"
                class="copy-btn copy-public"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>
            <p>
              {{ $t('i18nView.privateKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="jingtum-private-key"
                :value="jingtumPrivateKey"
              />
              <button
                data-clipboard-target="#jingtum-private-key"
                v-if="copyEnable"
                class="copy-btn copy-private"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>
            <button @click="genJingtumKey()">{{ $t('i18nView.gen') }}</button>
          </div>
        </v-tab>
        <v-tab icon="icon-solana" title="Solana">
          <i class="icon icon-solana"></i>
          <div>
            <h3>Solana keys</h3>
            <p>
              {{ $t('i18nView.publicKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="solana-public-key"
                :value="solanaPublicKey"
              />
              <button
                data-clipboard-target="#solana-public-key"
                v-if="copyEnable"
                class="copy-btn copy-public"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>
            <p>
              {{ $t('i18nView.privateKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="solana-private-key"
                :value="solanaPrivateKey"
              />
              <button
                data-clipboard-target="#solana-private-key"
                v-if="copyEnable"
                class="copy-btn copy-private"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>
            <button @click="genSolanaKey()">{{ $t('i18nView.gen') }}</button>
          </div>
        </v-tab>
        <v-tab icon="icon-aptos" title="Aptos">
          <i class="icon icon-aptos"></i>
          <div>
            <h3>Aptos keys</h3>
            <p>
              {{ $t('i18nView.publicKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="aptos-public-key"
                :value="aptosPublicKey"
              />
              <button
                data-clipboard-target="#aptos-public-key"
                v-if="copyEnable"
                class="copy-btn copy-public"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>
            <p>
              {{ $t('i18nView.privateKey') }}:
              <br />
              <input
                readonly
                type="text"
                id="aptos-private-key"
                :value="aptosPrivateKey"
              />
              <button
                data-clipboard-target="#aptos-private-key"
                v-if="copyEnable"
                class="copy-btn copy-private"
              >
                {{ $t('i18nView.copy') }}
              </button>
            </p>
            <button @click="genAptosKey()">{{ $t('i18nView.gen') }}</button>
          </div>
        </v-tab>
      </vue-tabs>
    </div>
  </div>
</template>

<script>
import { ec as EC } from 'elliptic'
import { Wallet } from 'jingtum-base-lib'
import Address from '@nervosnetwork/ckb-sdk-address'
import ClipboardJS from 'clipboard'
import ecc from 'eosjs-ecc'
import { ECPair, payments } from 'bitcoinjs-lib'
import iost from 'iost'
import { setTimeout } from 'timers'
import TronWeb from 'tronweb'
import Web3 from 'web3'
import BncClient from '@binance-chain/javascript-sdk'
import Irisnet from 'irisnet-crypto'
import { Keypair } from '@solana/web3.js'
import { AptosAccount } from 'aptos'
import bs58 from 'bs58'

const ec = new EC('secp256k1')

export default {
  name: 'HelloWorld',
  data() {
    return {
      aptosPublicKey: '',
      aptosPrivateKey: '',
      solanaPublicKey: '',
      solanaPrivateKey: '',
      eosPublicKey: '',
      eosPrivateKey: '',
      ethPublicKey: '',
      ethPrivateKey: '',
      iostPublicKey: '',
      iostPrivateKey: '',
      tronPublicKey: '',
      tronPrivateKey: '',
      binancePublicKey: '',
      binancePrivateKey: '',
      cosmosPublicKey: '',
      cosmosPrivateKey: '',
      nervosPublicKey: '',
      nervosPrivateKey: '',
      jingtumPublicKey: '',
      jingtumPrivateKey: '',
      btcPublicKey: '',
      btcPrivateKey: '',
      // btcP2SHPrivateKey: "",
      btcP2SHPublicKey: '',
      // btcSegwitPrivateKey: "",
      btcSegwitPublicKey: '',
      copyEnable: true,
      clipboard: '',
      clipboard1: '',
      tronWeb: '',
      web3: '',
      BncClient: '',
      crypto: '',
    }
  },
  created() {
    this.tronWeb = new TronWeb({
      fullHost: 'https://api.trongrid.io',
      privateKey: '',
    })

    this.web3 = new Web3(
      new Web3.providers.HttpProvider('https://eth49he73m.jccdex.cn')
    )

    this.BncClient = BncClient

    this.crypto = Irisnet.getCrypto('cosmos')
  },
  mounted() {
    var clipboards = new ClipboardJS('.copy-btn')
    clipboards.on('success', (e) => {
      alert(this.$t('i18nView.copied'))
    })

    setTimeout(() => {
      this.genEosKey()
      this.genEthKey()
      this.genIostKey()
      this.genBtcKey()
      this.genNervosKey()
      this.genTronKey()
      this.genBinanceKey()
      this.genCosmosKey()
      this.genJingtumKey()
      this.genSolanaKey()
      this.genAptosKey()
    }, 1000)
  },
  methods: {
    genAptosKey() {
      const account = new AptosAccount()
      this.aptosPublicKey = account.authKey().hexString
      this.aptosPrivateKey = account.toPrivateKeyObject().privateKeyHex
      // console.log('accountAddress', account.toPrivateKeyObject())
    },
    genSolanaKey() {
      const account = Keypair.generate()
      this.solanaPublicKey = account.publicKey.toBase58()
      this.solanaPrivateKey = bs58.encode(account.secretKey)
    },
    genEosKey() {
      ecc.randomKey().then((privateKey) => {
        this.eosPrivateKey = privateKey
        this.eosPublicKey = ecc.privateToPublic(privateKey)
      })
    },
    genBinanceKey() {
      this.binancePrivateKey = BncClient.crypto.generatePrivateKey()
      this.binancePublicKey = BncClient.crypto.getAddressFromPrivateKey(
        this.binancePrivateKey,
        'bnb'
      )
    },
    genJingtumKey() {
      let wallet = Wallet.generate()
      this.jingtumPublicKey = wallet.address
      this.jingtumPrivateKey = wallet.secret
    },
    genCosmosKey() {
      let account = this.crypto.create()
      this.cosmosPublicKey = account.address
      this.cosmosPrivateKey = account.privateKey
    },
    genEthKey() {
      var account = this.web3.eth.accounts.create()
      this.ethPublicKey = account.address
      this.ethPrivateKey = account.privateKey
    },
    genTronKey() {
      this.tronWeb.createAccount().then((res) => {
        this.tronPublicKey = res.address.base58
        this.tronPrivateKey = res.privateKey
      })
    },
    genIostKey() {
      var kp = IOST.KeyPair.newKeyPair()
      this.iostPrivateKey = kp.B58SecKey()
      this.iostPublicKey = kp.B58PubKey()
    },
    genBtcKey() {
      var keyPair = ECPair.makeRandom()

      this.btcPrivateKey = keyPair.toWIF()

      var { address } = payments.p2pkh({
        pubkey: keyPair.publicKey,
      })

      this.btcPublicKey = address

      var segwit = payments.p2wpkh({
        pubkey: keyPair.publicKey,
      })

      this.btcSegwitPublicKey = segwit.address

      var segwitP2SH = payments.p2sh({
        redeem: payments.p2wpkh({
          pubkey: keyPair.publicKey,
        }),
      })

      this.btcP2SHPublicKey = segwitP2SH.address
    },

    genNervosKey() {
      let privateKey = ec.genKeyPair().priv
      let address = new Address(privateKey, { prefix: 'ckb' })

      this.nervosPrivateKey = '0x' + address.getPrivateKey()
      this.nervosPublicKey = address.value
    },
  },
}
</script>

<style lang="less">
.red {
  color: red;
}

p {
  line-height: 1.5;
}

input {
  width: 300px;
  height: 20px;
  padding: 4px 8px;
  -webkit-appearance: none;
  border-radius: 4px;
  border: 1px solid #666;
}

.tab .title i {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  margin-right: 4px;
}
@media screen and (max-width: 768px) {
  .home {
    .vue-tabs .nav-tabs > li > a {
      padding: 8px;
      font-size: 12px;
    }

    input {
      width: 240px;
    }

    .title i {
      width: 16px;
      height: 16px;
    }
  }
}

.icon-eos {
  background-image: url('https://tokenpocket.gz.bcebos.com/EOS_MAINNET.png');
}

.icon-bos {
  background-image: url('https://tp-statics.cdn.bcebos.com/dapp/BOSclaimdapp.png');
}

.icon-binance {
  background-image: url('https://tp-statics.tokenpocket.pro/token/1564726829685-BIANdapp.png');
}

.icon-cosmos {
  background-image: url('https://gz.bcebos.com/v1/tokenpocket/COSMOS_MAINNET.png');
}

.icon-tron {
  background-image: url('https://tp-statics.tokenpocket.pro/token/1567672348424-trxnewtoken.png');
}

.icon-btc {
  background-image: url('https://tp-statics.tokenpocket.pro/token/1568174455217-btc1.jpeg');
}

.icon-eth {
  background-image: url('https://dapp.mytokenpocket.vip/token-logo/ETH.png');
}

.icon-moac {
  background-image: url('http://tokenpocket.gz.bcebos.com/MOAC.png');
}

.icon-iost {
  background-image: url('https://tp-statics.cdn.bcebos.com/dapp/1551934888429-IOSTlogo.png');
}
.icon-nervos {
  background-image: url('https://dapp.tokenpocket.pro/nervos-icon.png');
}

.icon-jingtum {
  background-image: url('https://dapp.mytokenpocket.vip/token-logo/SWTC.png');
}

.icon-solana {
  background-image: url('https://tp-statics.tokenpocket.pro/explorer/tokenpocket-1632796225175.png');
}

.icon-aptos {
  background-image: url('https://tp-statics.tokenpocket.pro/explorer/tokenpocket-1632796225175.png');
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.hello {
  .vue-tabs {
    margin-top: 20px;
    .nav-tabs > li {
      float: none;
      display: inline-block;
    }
  }
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
  padding: 6px 12px;
}
</style>