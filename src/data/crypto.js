// Mock cryptocurrency data for demonstration
export const cryptos = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 67234.56,
    change: 1245.78,
    changePercent: 1.89,
    volume: 28_456_000_000,
    marketCap: 1.32e12,
    high24h: 68100.00,
    low24h: 65890.00,
    circulatingSupply: 19_600_000,
    maxSupply: 21_000_000,
    category: 'Layer 1',
    description: 'Bitcoin is the first decentralized cryptocurrency, created in 2009 by an unknown person or group using the name Satoshi Nakamoto.',
    priceHistory: [
      { time: '00:00', price: 66200 },
      { time: '04:00', price: 65890 },
      { time: '08:00', price: 66500 },
      { time: '12:00', price: 67100 },
      { time: '16:00', price: 67800 },
      { time: '20:00', price: 68100 },
      { time: '24:00', price: 67234 },
    ],
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    price: 3456.78,
    change: -45.23,
    changePercent: -1.29,
    volume: 15_234_000_000,
    marketCap: 415.8e9,
    high24h: 3520.00,
    low24h: 3410.00,
    circulatingSupply: 120_200_000,
    maxSupply: null,
    category: 'Layer 1',
    description: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform.',
    priceHistory: [
      { time: '00:00', price: 3502 },
      { time: '04:00', price: 3520 },
      { time: '08:00', price: 3480 },
      { time: '12:00', price: 3450 },
      { time: '16:00', price: 3410 },
      { time: '20:00', price: 3430 },
      { time: '24:00', price: 3456 },
    ],
  },
  {
    symbol: 'BNB',
    name: 'BNB',
    price: 584.32,
    change: 12.45,
    changePercent: 2.18,
    volume: 1_456_000_000,
    marketCap: 87.2e9,
    high24h: 592.00,
    low24h: 568.00,
    circulatingSupply: 149_500_000,
    maxSupply: 200_000_000,
    category: 'Exchange Token',
    description: 'BNB is the cryptocurrency coin that powers the BNB Chain ecosystem and is used to pay for transaction fees on Binance.',
    priceHistory: [
      { time: '00:00', price: 572 },
      { time: '04:00', price: 568 },
      { time: '08:00', price: 575 },
      { time: '12:00', price: 580 },
      { time: '16:00', price: 588 },
      { time: '20:00', price: 592 },
      { time: '24:00', price: 584 },
    ],
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    price: 142.87,
    change: 8.34,
    changePercent: 6.20,
    volume: 3_678_000_000,
    marketCap: 65.4e9,
    high24h: 148.50,
    low24h: 132.00,
    circulatingSupply: 458_000_000,
    maxSupply: null,
    category: 'Layer 1',
    description: 'Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale.',
    priceHistory: [
      { time: '00:00', price: 134 },
      { time: '04:00', price: 132 },
      { time: '08:00', price: 136 },
      { time: '12:00', price: 140 },
      { time: '16:00', price: 145 },
      { time: '20:00', price: 148 },
      { time: '24:00', price: 142 },
    ],
  },
  {
    symbol: 'XRP',
    name: 'XRP',
    price: 0.6234,
    change: 0.0156,
    changePercent: 2.57,
    volume: 1_234_000_000,
    marketCap: 34.5e9,
    high24h: 0.6400,
    low24h: 0.6050,
    circulatingSupply: 55_400_000_000,
    maxSupply: 100_000_000_000,
    category: 'Payment',
    description: 'XRP is designed for enterprise use and powers the XRP Ledger, an open-source, decentralized blockchain.',
    priceHistory: [
      { time: '00:00', price: 0.608 },
      { time: '04:00', price: 0.605 },
      { time: '08:00', price: 0.612 },
      { time: '12:00', price: 0.620 },
      { time: '16:00', price: 0.635 },
      { time: '20:00', price: 0.640 },
      { time: '24:00', price: 0.623 },
    ],
  },
  {
    symbol: 'ADA',
    name: 'Cardano',
    price: 0.4567,
    change: -0.0123,
    changePercent: -2.62,
    volume: 456_000_000,
    marketCap: 16.2e9,
    high24h: 0.4750,
    low24h: 0.4490,
    circulatingSupply: 35_500_000_000,
    maxSupply: 45_000_000_000,
    category: 'Layer 1',
    description: 'Cardano is a proof-of-stake blockchain platform that aims to be a decentralized application development platform with a multi-asset ledger and verifiable smart contracts.',
    priceHistory: [
      { time: '00:00', price: 0.469 },
      { time: '04:00', price: 0.475 },
      { time: '08:00', price: 0.468 },
      { time: '12:00', price: 0.460 },
      { time: '16:00', price: 0.452 },
      { time: '20:00', price: 0.449 },
      { time: '24:00', price: 0.456 },
    ],
  },
  {
    symbol: 'DOGE',
    name: 'Dogecoin',
    price: 0.1234,
    change: 0.0089,
    changePercent: 7.78,
    volume: 1_890_000_000,
    marketCap: 17.8e9,
    high24h: 0.1320,
    low24h: 0.1140,
    circulatingSupply: 144_200_000_000,
    maxSupply: null,
    category: 'Meme',
    description: 'Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer as a joke, featuring a Shiba Inu dog from the "Doge" meme as its logo.',
    priceHistory: [
      { time: '00:00', price: 0.115 },
      { time: '04:00', price: 0.114 },
      { time: '08:00', price: 0.118 },
      { time: '12:00', price: 0.122 },
      { time: '16:00', price: 0.128 },
      { time: '20:00', price: 0.132 },
      { time: '24:00', price: 0.123 },
    ],
  },
  {
    symbol: 'AVAX',
    name: 'Avalanche',
    price: 35.67,
    change: 1.23,
    changePercent: 3.57,
    volume: 567_000_000,
    marketCap: 14.2e9,
    high24h: 37.20,
    low24h: 34.10,
    circulatingSupply: 398_000_000,
    maxSupply: 720_000_000,
    category: 'Layer 1',
    description: 'Avalanche is a layer one blockchain that functions as a platform for decentralized applications and custom blockchain networks.',
    priceHistory: [
      { time: '00:00', price: 34.4 },
      { time: '04:00', price: 34.1 },
      { time: '08:00', price: 34.8 },
      { time: '12:00', price: 35.5 },
      { time: '16:00', price: 36.8 },
      { time: '20:00', price: 37.2 },
      { time: '24:00', price: 35.67 },
    ],
  },
  {
    symbol: 'DOT',
    name: 'Polkadot',
    price: 7.23,
    change: -0.18,
    changePercent: -2.43,
    volume: 234_000_000,
    marketCap: 9.8e9,
    high24h: 7.50,
    low24h: 7.10,
    circulatingSupply: 1_360_000_000,
    maxSupply: null,
    category: 'Layer 0',
    description: 'Polkadot is a sharded multichain protocol that connects and secures a network of specialized blockchains, facilitating cross-chain transfer of any data or asset types.',
    priceHistory: [
      { time: '00:00', price: 7.41 },
      { time: '04:00', price: 7.50 },
      { time: '08:00', price: 7.35 },
      { time: '12:00', price: 7.28 },
      { time: '16:00', price: 7.15 },
      { time: '20:00', price: 7.10 },
      { time: '24:00', price: 7.23 },
    ],
  },
  {
    symbol: 'MATIC',
    name: 'Polygon',
    price: 0.8934,
    change: 0.0456,
    changePercent: 5.38,
    volume: 678_000_000,
    marketCap: 8.9e9,
    high24h: 0.9200,
    low24h: 0.8400,
    circulatingSupply: 10_000_000_000,
    maxSupply: 10_000_000_000,
    category: 'Layer 2',
    description: 'Polygon is a scaling solution for Ethereum that provides faster and cheaper transactions on Ethereum using Layer 2 sidechains.',
    priceHistory: [
      { time: '00:00', price: 0.848 },
      { time: '04:00', price: 0.840 },
      { time: '08:00', price: 0.860 },
      { time: '12:00', price: 0.880 },
      { time: '16:00', price: 0.905 },
      { time: '20:00', price: 0.920 },
      { time: '24:00', price: 0.893 },
    ],
  },
]

// Helper function to get crypto by symbol
export const getCryptoBySymbol = (symbol) => {
  return cryptos.find((crypto) => crypto.symbol === symbol.toUpperCase())
}

// Helper function to format crypto price (handles different decimal places)
export const formatCryptoPrice = (value) => {
  if (value >= 1000) {
    return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }
  if (value >= 1) {
    return `$${value.toFixed(2)}`
  }
  return `$${value.toFixed(4)}`
}

// Helper function to format supply numbers
export const formatSupply = (value) => {
  if (!value) return 'Unlimited'
  if (value >= 1e12) {
    return `${(value / 1e12).toFixed(2)}T`
  }
  if (value >= 1e9) {
    return `${(value / 1e9).toFixed(2)}B`
  }
  if (value >= 1e6) {
    return `${(value / 1e6).toFixed(2)}M`
  }
  return value.toLocaleString()
}

// Calculate market statistics for overview
export const getMarketStats = () => {
  const totalMarketCap = cryptos.reduce((sum, c) => sum + c.marketCap, 0)
  const totalVolume = cryptos.reduce((sum, c) => sum + c.volume, 0)
  const avgChange = cryptos.reduce((sum, c) => sum + c.changePercent, 0) / cryptos.length
  const gainers = cryptos.filter((c) => c.changePercent > 0).length
  const losers = cryptos.filter((c) => c.changePercent < 0).length

  return {
    totalMarketCap,
    totalVolume,
    avgChange,
    gainers,
    losers,
    totalCryptos: cryptos.length,
  }
}
