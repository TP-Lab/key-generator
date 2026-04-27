export const chain = {
  btc: 'BTC',
  ethereum: 'ETH / EVMs',
  dogecoin: 'Dogecoin',
  eos: 'EOS',
  iost: 'IOST',
  tron: 'TRON',
  cosmos: 'COSMOS',
  binance: 'Binance',
  nervos: 'Nervos',
  jingtum: 'Jingtum',
  solana: 'Solana',
  aptos: 'Aptos',
  polkadot: 'Polkadot',
  bch: 'BCH',
  ltc: 'LTC',
  conflux: 'Conflux',
  nostr: 'Nostr',
  sui: 'SUI',
}

export function createLocale(layout, main, follow) {
  return {
    chain,
    main,
    follow,
    COMMON: {
      LAYOUT: layout,
    },
  }
}