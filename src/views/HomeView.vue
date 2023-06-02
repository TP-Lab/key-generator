<template>
  <div class="home">
    <Header />
    <main>
      <div class="container">
        <div class="main-left">
          <img class="left-img" src="../assets/left-img.png" alt="" />
          <div class="title">{{ $t('main.title') }}</div>
          <div class="desc">{{ $t('main.intro') }}</div>
          <div class="address">{{ $t('main.githubUrl') }}</div>
          <a
            class="github"
            href="https://github.com/TP-Lab/key-generator"
            target="_blank"
          >
            <div class="left">
              <img src="../assets/main/github.png" alt="" />
              <span>Github</span>
            </div>
            <img class="arrow" src="../assets/arrow.png" alt="" />
          </a>
        </div>
        <div class="main-right">
          <div class="chain-list">
            <div
              class="chain-item"
              :class="{ active: network === chain.network }"
              v-for="(chain, index) in chainList"
              :key="index"
              @click="onSelectChain(chain, index)"
            >
              <img :src="chain.icon" alt="" />
              <span>{{ chain.name }}</span>
            </div>
          </div>
          <div class="key-content">
            <div>
              <div class="mobile-chain" @click="showMobileChain">
                <div class="left">
                  <img :src="chainObj[0].icon" alt="" />
                  <span>{{ chainObj[0].name }}</span>
                </div>
                <img class="arrow" src="../assets/arrow.png" alt="" />
              </div>
              <div class="title">{{ chainObj[0].name }} keys</div>
              <div class="warn">{{ $t('main.tips') }}</div>
              <div class="key-list">
                <div class="key-box ethereum" v-show="network === 'ETH'">
                  <KeyItem :title="$t('main.publicKey')" :value="ethAddress" />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="ethPrivateKey"
                  />
                </div>
                <div class="key-box eos" v-show="network === 'EOS'">
                  <KeyItem :title="$t('main.publicKey')" :value="eosAddress" />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="eosPrivateKey"
                  />
                </div>
                <div class="key-box dogecoin" v-show="network === 'DOGE'">
                  <KeyItem :title="$t('main.publicKey')" :value="dogeAddress" />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="dogePrivateKey"
                  />
                </div>
                <div class="key-box iost" v-show="network === 'IOST'">
                  <KeyItem :title="$t('main.publicKey')" :value="iostAddress" />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="iostPrivateKey"
                  />
                </div>
                <div class="key-box tron" v-show="network === 'TRX'">
                  <KeyItem :title="$t('main.publicKey')" :value="tronAddress" />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="tronPrivateKey"
                  />
                </div>
                <div class="key-box btc" v-show="network === 'BTC'">
                  <KeyItem :title="$t('main.normalAddr')" :value="btcAddress" />
                  <KeyItem
                    :title="'P2SH ' + $t('main.address')"
                    :value="btcP2SHAddress"
                  />
                  <KeyItem
                    :title="'P2WPK ' + $t('main.address')"
                    :value="btcSegwitAddress"
                  />
                  <KeyItem
                    :title="'Taproot ' + $t('main.address')"
                    :value="btcTaprootAddress"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="btcPrivateKey"
                  />
                </div>
                <div class="key-box cosmos" v-show="network === 'ATOM'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="cosmosAddress"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="cosmosPrivateKey"
                  />
                </div>
                <div class="key-box binance" v-show="network === 'BNB'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="binanceAddress"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="binancePrivateKey"
                  />
                </div>
                <div class="key-box nervos" v-show="network === 'CKB'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="nervosAddress"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="nervosPrivateKey"
                  />
                </div>
                <div class="key-box jingtum" v-show="network === 'JMB'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="jingtumAddress"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="jingtumPrivateKey"
                  />
                </div>
                <div class="key-box solana" v-show="network === 'SOL'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="solanaAddress"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="solanaPrivateKey"
                  />
                </div>
                <div class="key-box aptos" v-show="network === 'APT'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="aptosAddress"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="aptosPrivateKey"
                  />
                </div>
                <div class="key-box polkadot" v-show="network === 'DOT'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="polkadotAddress"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="polkadotPrivateKey"
                  />
                </div>
                <div class="key-box bch" v-show="network === 'BCH'">
                  <KeyItem :title="$t('main.publicKey')" :value="bchAddress" />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="bchPrivateKey"
                  />
                </div>
                <div class="key-box ltc" v-show="network === 'LTC'">
                  <KeyItem
                    :title="'SegWit ' + $t('main.address')"
                    :value="ltcAddress"
                  />
                  <KeyItem
                    :title="'Legacy ' + $t('main.address')"
                    :value="ltcP2SHAddress"
                  />
                  <KeyItem
                    :title="'Native SegWit ' + $t('main.address')"
                    :value="ltcNativeSegwitAddress"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="ltcPrivateKey"
                  />
                </div>
                <div class="key-box cfx" v-show="network === 'CFX'">
                  <KeyItem :title="$t('main.normalAddr')" :value="cfxAddress" />
                  <KeyItem
                    :title="'Conflux Mainnet ' + $t('main.address')"
                    :value="cfxMainnetAddress"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="cfxPrivateKey"
                  />
                </div>
                <div class="key-box nostr" v-show="network === 'NOSTR'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="nostrAddress"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="nostrPrivateKey"
                  />
                </div>
                <div class="key-box sui" v-show="network === 'SUI'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="suiAddress"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="suiPrivateKey"
                  />
                </div>
              </div>
            </div>
            <div class="generate-btn" @click="onGenerate">
              {{ $t('main.gen') }}
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    <div class="change-chain" v-show="isMobileChain">
      <div class="container">
        <div class="title-header">
          <span>{{ $t('main.changeChain') }}</span>
          <img src="../assets/share-close.png" alt="" @click="onClose" />
        </div>
        <div class="line"></div>
        <div class="mobile-chain-list">
          <div
            class="mobile-chain-item"
            v-for="(chain, index) in chainList"
            :key="index"
            @click="onSelectChain(chain, index)"
          >
            <img :src="chain.icon" alt="" />
            <span>{{ chain.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ec as EC } from 'elliptic';
import { Wallet } from 'jingtum-base-lib';
import Address from '@nervosnetwork/ckb-sdk-address';
import ecc from 'eosjs-ecc';
import iost from 'iost';
import TronWeb from 'tronweb';
import Web3 from 'web3';
import BncClient from '@binance-chain/javascript-sdk';
import Irisnet from 'irisnet-crypto';
import { Keypair } from '@solana/web3.js';
import { AptosAccount } from 'aptos';
import {
  mnemonicGenerate,
  mnemonicToMiniSecret,
  cryptoWaitReady,
} from '@polkadot/util-crypto';
import Keyring from '@polkadot/keyring';
import { u8aToHex } from '@polkadot/util';
import {
  PrivateKey as BCHPrivateKey,
  PublicKey as BCHPublicKey,
  Address as BCHAddress,
} from 'bitcore-lib-cash';
import { format } from 'js-conflux-sdk';
import { Ed25519Keypair } from '@mysten/sui.js';
import { toHEX } from "@mysten/bcs";
import bs58 from 'bs58';
import { generatePrivateKey, getPublicKey } from 'nostr-tools';
import * as secp256k1 from '@noble/secp256k1';
import { bech32 } from '@scure/base';
import { generateMnemonic, mnemonicToSeed, mnemonicToSeedSync } from 'bip39';

const Bech32MaxSize = 5000;

const ec = new EC('secp256k1');

import * as bitcoin from 'bitcoinjs-lib';
import eccObj from '../utils/ecc';
import BIP32Factory from 'bip32';
bitcoin.initEccLib(eccObj);
const bip32Obj = BIP32Factory(eccObj);

import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';
import KeyItem from '../components/common/KeyItem.vue';

export default {
  name: 'HomeView',
  components: { Header, Footer, KeyItem },
  data() {
    return {
      dogeAddress: '',
      dogePrivateKey: '',
      nostrAddress: '',
      nostrPrivateKey: '',
      suiAddress: '',
      suiPrivateKey: '',
      cfxMainnetAddress: '',
      cfxAddress: '',
      cfxPrivateKey: '',
      ltcAddress: '',
      ltcP2SHAddress: '',
      ltcNativeSegwitAddress: '',
      ltcPrivateKey: '',
      bchAddress: '',
      bchPrivateKey: '',
      polkadotAddress: '',
      polkadotPrivateKey: '',
      aptosAddress: '',
      aptosPrivateKey: '',
      solanaAddress: '',
      solanaPrivateKey: '',
      eosAddress: '',
      eosPrivateKey: '',
      ethAddress: '',
      ethPrivateKey: '',
      iostAddress: '',
      iostPrivateKey: '',
      tronAddress: '',
      tronPrivateKey: '',
      binanceAddress: '',
      binancePrivateKey: '',
      cosmosAddress: '',
      cosmosPrivateKey: '',
      nervosAddress: '',
      nervosPrivateKey: '',
      jingtumAddress: '',
      jingtumPrivateKey: '',
      btcAddress: '',
      btcPrivateKey: '',
      btcP2SHAddress: '',
      btcSegwitAddress: '',
      btcTaprootAddress: '',
      copyEnable: true,
      clipboard: '',
      clipboard1: '',
      tronWeb: '',
      web3: '',
      BncClient: '',
      crypto: '',
      network: 'ETH',
      chainId: '',
      ss58: '',
      curIndex: 12,
      isMobileChain: false,
    };
  },

  computed: {
    chainList() {
      return [
        {
          network: 'BTC',
          icon: require('../assets/main/btc.png'),
          name: this.$t('chain.btc'),
        },
        {
          network: 'ETH',
          icon: require('../assets/main/eth.png'),
          name: this.$t('chain.ethereum'),
        },
        {
          chainId: 728126428,
          network: 'TRX',
          icon: require('../assets/main/tron.png'),
          name: this.$t('chain.tron'),
        },
        {
          network: 'SOL',
          icon: require('../assets/main/solana.png'),
          name: this.$t('chain.solana'),
        },
        {
          network: 'APT',
          icon: require('../assets/main/aptos.png'),
          name: this.$t('chain.aptos'),
        },
        {
          chainId: 1030,
          network: 'CFX',
          icon: require('../assets/main/conflux.png'),
          name: this.$t('chain.conflux'),
        },
        {
          network: 'DOGE',
          icon: require('../assets/main/dogecoin.png'),
          name: this.$t('chain.dogecoin'),
        },
        {
          network: 'EOS',
          icon: require('../assets/main/eos.png'),
          name: this.$t('chain.eos'),
        },
        {
          network: 'ATOM',
          icon: require('../assets/main/cosmos.png'),
          name: this.$t('chain.cosmos'),
        },
        {
          network: 'IOST',
          icon: require('../assets/main/iost.png'),
          name: this.$t('chain.iost'),
        },
        {
          network: 'DOT',
          ss58: '0',
          icon: require('../assets/main/Polkadot.png'),
          name: this.$t('chain.polkadot'),
        },
        {
          network: 'CKB',
          icon: require('../assets/main/nervos.png'),
          name: this.$t('chain.nervos'),
        },
        {
          network: 'BNB',
          icon: require('../assets/main/binance.png'),
          name: this.$t('chain.binance'),
        },
        {
          network: 'NOSTR',
          icon: require('../assets/main/nostr.jpg'),
          name: this.$t('chain.nostr'),
        },
        {
          network: 'SUI',
          icon: require('../assets/main/sui.png'),
          name: this.$t('chain.sui'),
        },
        {
          network: 'BCH',
          icon: require('../assets/main/bch.png'),
          name: this.$t('chain.bch'),
        },
        {
          network: 'LTC',
          icon: require('../assets/main/ltc.png'),
          name: this.$t('chain.ltc'),
        },
        {
          network: 'JMB',
          icon: require('../assets/main/jingtum.png'),
          name: this.$t('chain.jingtum'),
        },
      ];
    },
    urlObj() {
      let obj = {
        network: this.network,
      };
      if (this.ss58) {
        obj.ss58 = this.ss58;
      }
      if (this.chainId) {
        obj.chainId = this.chainId;
      }
      return obj;
    },
    chainObj() {
      return this.chainList.filter((item) => item.network === this.network);
    },
  },

  watch: {
    urlObj(n) {
      this.$router.replace({
        path: `/`,
        query: { ...n },
      });
    },
  },

  created() {
    const { network, chainId, ss58 } = this.$route.query;
    this.network = network || 'BTC';
    this.chainId = chainId || '';
    this.ss58 = ss58 || '';
    this.tronWeb = new TronWeb({
      fullHost: 'https://api.trongrid.io',
      privateKey: '',
    });

    this.web3 = new Web3(
      new Web3.providers.HttpProvider('https://eth49he73m.jccdex.cn')
    );

    this.BncClient = BncClient;
    this.crypto = Irisnet.getCrypto('cosmos');
  },

  mounted() {
    setTimeout(() => {
      this.genEosKey();
      this.genEthKey();
      this.genIostKey();
      this.genBtcKey();
      this.genNervosKey();
      this.genTronKey();
      this.genBinanceKey();
      this.genCosmosKey();
      this.genJingtumKey();
      this.genSolanaKey();
      this.genAptosKey();
      this.genPolkadotKey();
      this.genLTCKey();
      this.genBCHKey();
      this.genConfluxKey();
      this.genSuiKey();
      this.genNostrKey();
      this.genDogeKey();
    }, 1000);
  },
  methods: {
    async genDogeKey() {
      const DOGE_NETWORK = {
        messagePrefix: '\x19Dogecoin Signed Message:\n',
        bip32: {
          public: 0x02facafd,
          private: 0x02fac398,
        },
        pubKeyHash: 0x1e,
        scripthash: 0x16,
        wif: 0x9e,
      };
      const doge_path = "m/44'/3'/0'/0/0";
      const mnemonic = generateMnemonic();
      const seed = await mnemonicToSeed(mnemonic);
      const doge_master = bip32Obj.fromSeed(seed, DOGE_NETWORK);
      const doge_keypair = doge_master.derivePath(doge_path);
      const doge_data = bitcoin.payments.p2pkh({
        pubkey: doge_keypair.publicKey,
        network: DOGE_NETWORK,
      });
      this.dogeAddress = doge_data.address;
      this.dogePrivateKey = doge_keypair.toWIF();
    },

    genNostrKey() {
      let sk = generatePrivateKey(); // `sk` is a hex string
      let pk = getPublicKey(sk); // `pk` is a hex string
      this.nostrPrivateKey = this.nsecEncode(sk);
      this.nostrAddress = this.npubEncode(pk);
    },

    nsecEncode(hex) {
      return this.encodeBytes('nsec', hex);
    },

    npubEncode(hex) {
      return this.encodeBytes('npub', hex);
    },

    encodeBytes(prefix, hex) {
      let data = secp256k1.utils.hexToBytes(hex);
      let words = bech32.toWords(data);
      return bech32.encode(prefix, words, Bech32MaxSize);
    },

    genSuiKey() {
      const keypair = new Ed25519Keypair();
      this.suiAddress = keypair.getPublicKey().toSuiAddress();
      this.suiPrivateKey = toHEX(keypair.keypair.secretKey.slice(0, 32))
    },

    genConfluxKey() {
      var account = this.web3.eth.accounts.create();
      this.cfxAddress = account.address;
      this.cfxPrivateKey = account.privateKey;
      this.cfxMainnetAddress = format.address(
        `0x1${account.address.toLowerCase().slice(3)}`,
        1029
      );
    },

    genBCHKey() {
      let privateKey = new BCHPrivateKey();
      this.bchPrivateKey = privateKey.toWIF();
      let publicKey = new BCHPublicKey(privateKey);
      let address = new BCHAddress(publicKey);
      this.bchAddress = address.toString().slice(12);
    },

    // generate LTC path
    getLTCPath(type) {
      let path = '';
      // p2pkh
      if (type == 'p2pkh') {
        path = "m/44'/2'/0'/0/0";
      }
      // p2sh-p2wpkh
      else if (type == 'p2sh-p2wpkh') {
        path = "m/49'/2'/0'/0/0";
      }
      // p2wpkh
      else if (type == 'p2wpkh') {
        path = "m/84'/2'/0'/0/0";
      }
      return path;
    },

     // generate LTC address
    getLTCAddress(type, keyPair, network) {
      var data;
      // p2pkh
      if (type == 'p2pkh') {
        data = bitcoin.payments.p2pkh({
          pubkey: keyPair.publicKey,
          network: network,
        });
      }
      // p2sh-p2wpkh
      else if (type == 'p2sh-p2wpkh') {
        data = bitcoin.payments.p2sh({
          redeem: bitcoin.payments.p2wpkh({
            pubkey: keyPair.publicKey,
            network: network,
          }),
        });
      }
      // p2wpkh
      else if (type == 'p2wpkh') {
        data = bitcoin.payments.p2wpkh({
          pubkey: keyPair.publicKey,
          network: network,
        });
      }
      if (typeof data == 'undefined') {
        return '';
      }

      return data.address;
    },

    async genLTCKey() {
      const addressTypes = ['p2pkh', 'p2sh-p2wpkh', 'p2wpkh'];
      const LTC_NETWORK = {
        messagePrefix: '\x19Litecoin Signed Message:\n',
        bech32: 'ltc',
        bip32: {
          public: 0x019da462,
            private: 0x019d9cfe,
        },
        pubKeyHash: 0x30,
        scriptHash: 0x32,
        wif: 0xb0,
      };
      const mnemonic = generateMnemonic();
      const seed = await mnemonicToSeed(mnemonic);
      const master = bip32Obj.fromSeed(seed, LTC_NETWORK);
      const path = this.getLTCPath(addressTypes[0]);
      const keyPair = master.derivePath(path);
      this.ltcPrivateKey = keyPair.toWIF();
       for (let index = 0; index < addressTypes.length; index++) {
        let addressType = addressTypes[index];
        switch (index) {
          case 0:
            this.ltcAddress = this.getLTCAddress(
              addressType,
              keyPair,
              LTC_NETWORK
            );
            break;
          case 1:
            this.ltcP2SHAddress = this.getLTCAddress(
              addressType,
              keyPair,
              LTC_NETWORK
            );
            break;
          case 2:
            this.ltcNativeSegwitAddress = this.getLTCAddress(
              addressType,
              keyPair,
              LTC_NETWORK
            );
            break;
          default:
            break;
        }
      }
    },

    async genPolkadotKey() {
      const mnemonic = mnemonicGenerate(12);
      // PrivateKey
      const seed = mnemonicToMiniSecret(mnemonic);
      this.polkadotPrivateKey = u8aToHex(seed);
      // address
      await cryptoWaitReady();
      const keyring = new Keyring({
        ss58Format: '0',
        type: 'sr25519',
      });
      const pair = keyring.addFromUri(mnemonic);
      this.polkadotAddress = pair.address;
    },

    genAptosKey() {
      const account = new AptosAccount();
      this.aptosAddress = account.authKey().hexString;
      this.aptosPrivateKey = account.toPrivateKeyObject().privateKeyHex;
    },

    genSolanaKey() {
      const account = Keypair.generate();
      this.solanaAddress = account.publicKey.toBase58();
      this.solanaPrivateKey = bs58.encode(account.secretKey);
    },

    genEosKey() {
      ecc.randomKey().then((privateKey) => {
        this.eosPrivateKey = privateKey;
        this.eosAddress = ecc.privateToPublic(privateKey);
      });
    },

    genBinanceKey() {
      this.binancePrivateKey = BncClient.crypto.generatePrivateKey();
      this.binanceAddress = BncClient.crypto.getAddressFromPrivateKey(
        this.binancePrivateKey,
        'bnb'
      );
    },

    genJingtumKey() {
      let wallet = Wallet.generate();
      this.jingtumAddress = wallet.address;
      this.jingtumPrivateKey = wallet.secret;
    },

    genCosmosKey() {
      let account = this.crypto.create();
      this.cosmosAddress = account.address;
      this.cosmosPrivateKey = account.privateKey;
    },

    genEthKey() {
      var account = this.web3.eth.accounts.create();
      this.ethAddress = account.address;
      this.ethPrivateKey = account.privateKey;
    },

    genTronKey() {
      this.tronWeb.createAccount().then((res) => {
        this.tronAddress = res.address.base58;
        this.tronPrivateKey = res.privateKey;
      });
    },

    genIostKey() {
      var kp = IOST.KeyPair.newKeyPair();
      this.iostPrivateKey = kp.B58SecKey();
      this.iostAddress = kp.B58PubKey();
    },

    // generate path
    getBtcPath(type) {
      let path = '';
      // p2pkh
      if (type == 'p2pkh') {
        path = "m/44'/0'/0'/0/0";
      }
      // p2sh-p2wpkh
      else if (type == 'p2sh-p2wpkh') {
        path = "m/49'/0'/0'/0/0";
      }
      // p2wpkh
      else if (type == 'p2wpkh') {
        path = "m/84'/0'/0'/0/0";
      }
      // taproot
      else if (type == 'p2tr') {
        path = "m/86'/0'/0'/0/0";
      }
      return path;
    },

    // generate address
    getBtcAddress(type, keyPair, network) {
      var data;
      // p2pkh
      if (type == 'p2pkh') {
        data = bitcoin.payments.p2pkh({
          pubkey: keyPair.publicKey,
          network: network,
        });
      }
      // p2sh-p2wpkh
      else if (type == 'p2sh-p2wpkh') {
        data = bitcoin.payments.p2sh({
          redeem: bitcoin.payments.p2wpkh({
            pubkey: keyPair.publicKey,
            network: network,
          }),
        });
      }
      // p2wpkh
      else if (type == 'p2wpkh') {
        data = bitcoin.payments.p2wpkh({
          pubkey: keyPair.publicKey,
          network: network,
        });
      }
      // taproot
      else if (type == 'p2tr') {
        data = bitcoin.payments.p2tr({
          internalPubkey: keyPair.publicKey.slice(1, 33),
        });
      }
      if (typeof data == 'undefined') {
        return '';
      }

      return data.address;
    },

    async genBtcKey() {
      const addressTypes = ['p2pkh', 'p2sh-p2wpkh', 'p2wpkh', 'p2tr'];
      const network = bitcoin.networks.bitcoin;
      const mnemonic = generateMnemonic();
      const seed = await mnemonicToSeedSync(mnemonic);
      const master = bip32Obj.fromSeed(seed, network);
      const path = this.getBtcPath(addressTypes[0]);
      const keyPair = master.derivePath(path);
      this.btcPrivateKey = keyPair.toWIF();
      for (let index = 0; index < addressTypes.length; index++) {
        let addressType = addressTypes[index];
        switch (index) {
          case 0:
            this.btcAddress = this.getBtcAddress(
              addressType,
              keyPair,
              network
            );
            break;
          case 1:
            this.btcP2SHAddress = this.getBtcAddress(
              addressType,
              keyPair,
              network
            );
            break;
          case 2:
            this.btcSegwitAddress = this.getBtcAddress(
              addressType,
              keyPair,
              network
            );
            break;
          case 3:
            this.btcTaprootAddress = this.getBtcAddress(
              addressType,
              keyPair,
              network
            );
            break;
          default:
            break;
        }
      }
    },

    genNervosKey() {
      let privateKey = ec.genKeyPair().priv;
      let address = new Address(privateKey, { prefix: 'ckb' });
      this.nervosPrivateKey = '0x' + address.getPrivateKey();
      this.nervosAddress = address.value;
    },

    onGenerate() {
      switch (this.network) {
        case 'ETH':
          this.genEthKey();
          break;
        case 'EOS':
          this.genEosKey();
          break;
        case 'DOGE':
          this.genDogeKey();
          break;
        case 'IOST':
          this.genIostKey();
          break;
        case 'TRX':
          this.genTronKey();
          break;
        case 'BTC':
          this.genBtcKey();
          break;
        case 'ATOM':
          this.genCosmosKey();
          break;
        case 'BNB':
          this.genBinanceKey();
          break;
        case 'CKB':
          this.genNervosKey();
          break;
        case 'JMB':
          this.genJingtumKey();
          break;
        case 'SOL':
          this.genSolanaKey();
          break;
        case 'APT':
          this.genAptosKey();
          break;
        case 'DOT':
          this.genPolkadotKey();
          break;
        case 'BCH':
          this.genBCHKey();
          break;
        case 'LTC':
          this.genLTCKey();
          break;
        case 'CFX':
          this.genConfluxKey();
          break;
        case 'NOSTR':
          this.genNostrKey();
          break;
        case 'SUI':
          this.genSuiKey();
          break;
        default:
          break;
      }
    },

    onSelectChain(chain, index) {
      this.network = chain.network;
      this.chainId = chain.chainId;
      this.ss58 = chain.ss58;
      this.curIndex = index;
      this.isMobileChain = false;
    },

    showMobileChain() {
      this.isMobileChain = true;
    },

    onClose() {
      this.isMobileChain = false;
    },
  },
};
</script>

<style lang="scss">
@import '../style/home.scss';
</style>
