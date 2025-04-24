// src/data/baseCryptoData.js
import bitcoinLogo from './assets/bitcoin-btc-logo.png';
import cosmosLogo from './assets/cosmos-atom-logo.png';
import ethereumLogo from './assets/ethereum-eth-logo.png';
import flokiLogo from './assets/floki-inu-floki-logo.png';
import tronLogo from './assets/tron-trx-logo.png';
import toncoinLogo from './assets/toncoin-ton-logo.png';

import pattern1 from './assets/pattern-1.png';
import pattern2 from './assets/pattern-2.png';
import pattern3 from './assets/pattern-3.png';
import pattern4 from './assets/pattern-4.png';
import pattern5 from './assets/pattern-5.png';
import pattern6 from './assets/pattern-6.png';

const baseCryptoData = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: bitcoinLogo,
    short: 'BTC',
    price: 93759.48,
    change1h: -0.43,
    change24h: 0.93,
    change7d: 11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    volumeToken: '467.81K',
    supply: '19.85M',
    supplyValue: 19850000,
    supplyPercent: 94,
    chart: pattern1,
  },
  {
    id: 2,
    name: 'Cosmos',
    symbol: cosmosLogo,
    short: 'ATOM',
    price: 1802.46,
    change1h: 0.60,
    change24h: 3.21,
    change7d: 13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    volumeToken: '362.21K',
    supply: '120.71M',
    supplyValue: 120710000,
    supplyPercent: 65,
    chart: pattern2,
  },
  {
    id: 3,
    name: 'Ethereum',
    symbol: ethereumLogo,
    short: 'ETH',
    price: 1.00,
    change1h: 0.00,
    change24h: 0.00,
    change7d: 0.04,
    marketCap: 145320022085,
    volume24h: 92288882007,
    volumeToken: '120.90K',
    supply: '145.27B',
    supplyValue: 145270000000,
    supplyPercent: 78,
    chart: pattern3,
  },
  {
    id: 4,
    name: 'Floki',
    symbol: flokiLogo,
    short: 'FLOKI',
    price: 2.22,
    change1h: 0.46,
    change24h: 0.54,
    change7d: 6.18,
    marketCap: 130073814966,
    volume24h: 5131481491,
    volumeToken: '210.12K',
    supply: '58.39B',
    supplyValue: 58390000000,
    supplyPercent: 49,
    chart: pattern4,
  },
  {
    id: 5,
    name: 'Tron',
    symbol: tronLogo,
    short: 'TRX',
    price: 151.51,
    change1h: 0.53,
    change24h: 1.26,
    change7d: 14.74,
    marketCap: 78381958631,
    volume24h: 4881674486,
    volumeToken: '320.99K',
    supply: '517.31M',
    supplyValue: 517310000,
    supplyPercent: 81,
    chart: pattern5,
  },
  {
    id: 6,
    name: 'Toncoin',
    symbol: toncoinLogo,
    short: 'TON',
    price: 65.51,
    change1h: 0.32,
    change24h: 1.96,
    change7d: 13.74,
    marketCap: 78381958631,
    volume24h: 4881674486,
    volumeToken: '180.00K',
    supply: '517.31M',
    supplyValue: 517310000,
    supplyPercent: 77,
    chart: pattern6,
  },
];

export default baseCryptoData;
