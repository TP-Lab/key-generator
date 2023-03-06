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
                <div class="ethereum" v-show="network === 'ETH'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="ethPublicKey"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="ethPrivateKey"
                  />
                </div>
                <div class="eos" v-show="network === 'EOS'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="eosPublicKey"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="eosPrivateKey"
                  />
                </div>
                <div class="dogecoin" v-show="network === 'DOGE'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="dogePublicKey"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="dogePrivateKey"
                  />
                </div>
                <div class="iost" v-show="network === 'IOST'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="iostPublicKey"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="iostPrivateKey"
                  />
                </div>
                <div class="tron" v-show="network === 'TRX'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="tronPublicKey"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="tronPrivateKey"
                  />
                </div>
                <div class="btc" v-show="network === 'BTC'">
                  <KeyItem
                    :title="$t('main.normalAddr')"
                    :value="btcPublicKey"
                  />
                  <KeyItem
                    :title="'P2SH ' + $t('main.address')"
                    :value="btcP2SHPublicKey"
                  />
                  <KeyItem
                    :title="'P2WPK ' + $t('main.address')"
                    :value="btcSegwitPublicKey"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="btcPrivateKey"
                  />
                </div>
                <div class="cosmos" v-show="network === 'ATOM'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="cosmosPublicKey"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="cosmosPrivateKey"
                  />
                </div>
                <div class="binance" v-show="network === 'BNB'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="binancePublicKey"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="binancePrivateKey"
                  />
                </div>
                <div class="nervos" v-show="network === 'CKB'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="nervosPublicKey"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="nervosPrivateKey"
                  />
                </div>
                <div class="jingtum" v-show="network === 'JMB'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="jingtumPublicKey"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="jingtumPrivateKey"
                  />
                </div>
                <div class="solana" v-show="network === 'SOL'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="solanaPublicKey"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="solanaPrivateKey"
                  />
                </div>
                <div class="aptos" v-show="network === 'APT'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="aptosPublicKey"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="aptosPrivateKey"
                  />
                </div>
                <div class="polkadot" v-show="network === 'DOT'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="polkadotPublicKey"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="polkadotPrivateKey"
                  />
                </div>
                <div class="bch" v-show="network === 'BCH'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="bchPublicKey"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="bchPrivateKey"
                  />
                </div>
                <div class="ltc" v-show="network === 'LTC'">
                  <KeyItem
                    :title="'SegWit ' + $t('main.address')"
                    :value="ltcPublicKey"
                  />
                  <KeyItem
                    :title="'Legacy ' + $t('main.address')"
                    :value="ltcP2SHPublicKey"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="ltcPrivateKey"
                  />
                </div>
                <div class="cfx" v-show="network === 'CFX'">
                  <KeyItem
                    :title="$t('main.normalAddr')"
                    :value="cfxPublicKey"
                  />
                  <KeyItem
                    :title="'Conflux Mainnet ' + $t('main.address')"
                    :value="cfxMainnetPublicKey"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="cfxPrivateKey"
                  />
                </div>
                <div class="nostr" v-show="network === 'NOSTR'">
                  <KeyItem
                    :title="$t('main.publicKey')"
                    :value="nostrPublicKey"
                  />
                  <KeyItem
                    :title="$t('main.privateKey')"
                    :value="nostrPrivateKey"
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
import ClipboardJS from 'clipboard';
import ecc from 'eosjs-ecc';
import { ECPair, payments, address as bjsAddress, bip32 } from 'bitcoinjs-lib';
import iost from 'iost';
import { setTimeout } from 'timers';
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
  PrivateKey as LTCPrivateKey,
  PublicKey as LTCPublicKey,
  Address as LTCAddress,
} from 'litecore-lib';
import {
  PrivateKey as BCHPrivateKey,
  PublicKey as BCHPublicKey,
  Address as BCHAddress,
} from 'bitcore-lib-cash';
import { format } from 'js-conflux-sdk';
import { Ed25519Keypair } from '@mysten/sui.js';
import bs58 from 'bs58';
import { generatePrivateKey, getPublicKey } from 'nostr-tools';
import * as secp256k1 from '@noble/secp256k1';
import { bech32 } from '@scure/base';
import { generateMnemonic, mnemonicToSeed } from 'bip39';

const Bech32MaxSize = 5000;

const ec = new EC('secp256k1');

import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';
import KeyItem from '../components/common/KeyItem.vue';

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    KeyItem,
  },
  data() {
    return {
      dogePublicKey: '',
      dogePrivateKey: '',
      nostrHexPublicKey: '',
      nostrHexPrivateKey: '',
      nostrPublicKey: '',
      nostrPrivateKey: '',
      suiPublicKey: '',
      suiPrivateKey: '',
      cfxMainnetPublicKey: '',
      cfxPublicKey: '',
      cfxPrivateKey: '',
      ltcPublicKey: '',
      ltcP2SHPublicKey: '',
      ltcPrivateKey: '',
      bchPublicKey: '',
      bchPrivateKey: '',
      polkadotPublicKey: '',
      polkadotPrivateKey: '',
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
      btcP2SHPublicKey: '',
      btcSegwitPublicKey: '',
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
    var clipboards = new ClipboardJS('.copy-btn');
    clipboards.on('success', (e) => {
      alert(this.$t('i18nView.copied'));
    });

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
      // this.genSuiKey()
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
      const doge_master = bip32.fromSeed(seed, DOGE_NETWORK);
      const doge_keypair = doge_master.derivePath(doge_path);
      const doge_data = payments.p2pkh({
        pubkey: doge_keypair.publicKey,
        network: DOGE_NETWORK,
      });
      this.dogePublicKey = doge_data.address;
      this.dogePrivateKey = doge_keypair.toWIF();
    },

    genNostrKey() {
      let sk = generatePrivateKey(); // `sk` is a hex string
      let pk = getPublicKey(sk); // `pk` is a hex string
      this.nostrHexPrivateKey = sk;
      this.nostrHexPublicKey = pk;
      this.nostrPrivateKey = this.nsecEncode(sk);
      this.nostrPublicKey = this.npubEncode(pk);
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
      this.suiPrivateKey = bs58.encode(keypair.keypair.secretKey);
      this.suiPublicKey = '0x' + keypair.getPublicKey().toSuiAddress();
    },

    genConfluxKey() {
      var account = this.web3.eth.accounts.create();
      this.cfxPublicKey = account.address;
      this.cfxPrivateKey = account.privateKey;
      this.cfxMainnetPublicKey = format.address(
        `0x1${account.address.toLowerCase().slice(3)}`,
        1029
      );
    },

    genBCHKey() {
      let privateKey = new BCHPrivateKey();
      this.bchPrivateKey = privateKey.toWIF();
      let publicKey = new BCHPublicKey(privateKey);
      let address = new BCHAddress(publicKey);
      this.bchPublicKey = address.toString().slice(12);
    },

    genLTCKey() {
      let privateKey = new LTCPrivateKey();
      this.ltcPrivateKey = privateKey.toWIF();
      let publicKey = new LTCPublicKey(privateKey);
      let address = new LTCAddress(publicKey);
      this.ltcPublicKey = address.toString();

      let segwitP2SH = payments.p2sh({
        redeem: payments.p2wpkh({
          pubkey: publicKey.toDER(),
        }),
      });
      const decoded = bjsAddress.fromBase58Check(segwitP2SH.address);
      let version = decoded['version'];
      // Mainnet p2sh address:
      if (version === 5) {
        version = 50;
      }
      const p2shAddress = bjsAddress.toBase58Check(decoded['hash'], version);
      this.ltcP2SHPublicKey = p2shAddress;
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
      this.polkadotPublicKey = pair.address;
    },

    genAptosKey() {
      const account = new AptosAccount();
      this.aptosPublicKey = account.authKey().hexString;
      this.aptosPrivateKey = account.toPrivateKeyObject().privateKeyHex;
    },

    genSolanaKey() {
      const account = Keypair.generate();
      this.solanaPublicKey = account.publicKey.toBase58();
      this.solanaPrivateKey = bs58.encode(account.secretKey);
    },

    genEosKey() {
      ecc.randomKey().then((privateKey) => {
        this.eosPrivateKey = privateKey;
        this.eosPublicKey = ecc.privateToPublic(privateKey);
      });
    },

    genBinanceKey() {
      this.binancePrivateKey = BncClient.crypto.generatePrivateKey();
      this.binancePublicKey = BncClient.crypto.getAddressFromPrivateKey(
        this.binancePrivateKey,
        'bnb'
      );
    },

    genJingtumKey() {
      let wallet = Wallet.generate();
      this.jingtumPublicKey = wallet.address;
      this.jingtumPrivateKey = wallet.secret;
    },

    genCosmosKey() {
      let account = this.crypto.create();
      this.cosmosPublicKey = account.address;
      this.cosmosPrivateKey = account.privateKey;
    },

    genEthKey() {
      var account = this.web3.eth.accounts.create();
      this.ethPublicKey = account.address;
      this.ethPrivateKey = account.privateKey;
    },

    genTronKey() {
      this.tronWeb.createAccount().then((res) => {
        this.tronPublicKey = res.address.base58;
        this.tronPrivateKey = res.privateKey;
      });
    },

    genIostKey() {
      var kp = IOST.KeyPair.newKeyPair();
      this.iostPrivateKey = kp.B58SecKey();
      this.iostPublicKey = kp.B58PubKey();
    },

    genBtcKey() {
      var keyPair = ECPair.makeRandom();

      this.btcPrivateKey = keyPair.toWIF();

      var { address } = payments.p2pkh({
        pubkey: keyPair.publicKey,
      });

      this.btcPublicKey = address;

      var segwit = payments.p2wpkh({
        pubkey: keyPair.publicKey,
      });

      this.btcSegwitPublicKey = segwit.address;

      var segwitP2SH = payments.p2sh({
        redeem: payments.p2wpkh({
          pubkey: keyPair.publicKey,
        }),
      });

      this.btcP2SHPublicKey = segwitP2SH.address;
    },

    genNervosKey() {
      let privateKey = ec.genKeyPair().priv;
      let address = new Address(privateKey, { prefix: 'ckb' });

      this.nervosPrivateKey = '0x' + address.getPrivateKey();
      this.nervosPublicKey = address.value;
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
