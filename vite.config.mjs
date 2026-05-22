import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const manualChunkGroups = [
  {
    name: 'vue-core',
    patterns: [
      '/node_modules/vue/',
      '/node_modules/vue-router/',
      '/node_modules/vuex/',
      '/node_modules/vue-i18n/',
    ],
  },
  {
    name: 'bitcoin-suite',
    patterns: [
      '/node_modules/bitcoinjs-lib/',
      '/node_modules/bip32/',
      '/node_modules/bip39/',
      '/node_modules/bitcore-lib-cash/',
      '/node_modules/eosjs-ecc/',
      '/node_modules/jingtum-base-lib/',
      '/node_modules/@nervosnetwork/ckb-sdk-address/',
      '/node_modules/elliptic/',
    ],
  },
  {
    name: 'polkadot-suite',
    patterns: ['/node_modules/@polkadot/'],
  },
  {
    name: 'web3-suite',
    patterns: [
      '/node_modules/web3',
      '/node_modules/ethereumjs-util/',
      '/node_modules/js-conflux-sdk/',
    ],
  },
  {
    name: 'tron-suite',
    patterns: [
      '/node_modules/tronweb/',
      '/node_modules/ethers/',
      '/node_modules/bignumber.js/',
      '/node_modules/validator/',
      '/node_modules/injectpromise/',
    ],
  },
  {
    name: 'cosmos-suite',
    patterns: [
      '/node_modules/irisnet-crypto/',
      '/node_modules/@binance-chain/javascript-sdk/',
    ],
  },
  {
    name: 'modern-chains',
    patterns: [
      '/node_modules/@solana/',
      '/node_modules/@mysten/',
      '/node_modules/aptos/',
      '/node_modules/@noble/',
      '/node_modules/@scure/',
      '/node_modules/bs58/',
    ],
  },
  {
    name: 'iost-suite',
    patterns: ['/node_modules/iost/'],
  },
  {
    name: 'shared-vendor',
    patterns: ['/node_modules/lodash/'],
  },
];

function manualChunks(id) {
  if (!id.includes('/node_modules/')) {
    return;
  }

  for (const group of manualChunkGroups) {
    if (group.patterns.some((pattern) => id.includes(pattern))) {
      return group.name;
    }
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const appEnv = env.VITE_APP_ENV;
  const base = appEnv === 'production' ? '/' : appEnv === 'beta' ? './' : '/key-generator/';

  return {
    base,
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('tp-'),
          },
        },
      }),
      nodePolyfills({
        include: ['buffer', 'process', 'stream', 'util', 'events', 'crypto'],
        globals: {
          Buffer: true,
          global: true,
          process: true,
        },
        protocolImports: true,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    define: {
      global: 'globalThis',
    },
    server: {
      host: '0.0.0.0',
      port: 12306,
      open: base,
    },
    preview: {
      host: '0.0.0.0',
      port: 12306,
      open: base,
    },
    build: {
      rolldownOptions: {
        output: {
          manualChunks,
        },
      },
    },
    optimizeDeps: {
      include: ['buffer', 'process', 'lodash'],
    },
  };
});