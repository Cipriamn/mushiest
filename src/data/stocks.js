// Mock stock data for demonstration
export const stocks = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 178.72,
    change: 2.45,
    changePercent: 1.39,
    volume: 52_847_000,
    marketCap: 2.78e12,
    high52Week: 199.62,
    low52Week: 143.90,
    sector: 'Technology',
    description: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.',
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 378.91,
    change: -1.23,
    changePercent: -0.32,
    volume: 18_234_000,
    marketCap: 2.82e12,
    high52Week: 420.82,
    low52Week: 309.45,
    sector: 'Technology',
    description: 'Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide.',
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 141.80,
    change: 0.87,
    changePercent: 0.62,
    volume: 21_567_000,
    marketCap: 1.76e12,
    high52Week: 153.78,
    low52Week: 115.35,
    sector: 'Technology',
    description: 'Alphabet Inc. offers various products and platforms in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America.',
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 178.25,
    change: 3.12,
    changePercent: 1.78,
    volume: 45_890_000,
    marketCap: 1.86e12,
    high52Week: 191.70,
    low52Week: 118.35,
    sector: 'Consumer Cyclical',
    description: 'Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions through online and physical stores in North America and internationally.',
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    price: 495.22,
    change: 12.45,
    changePercent: 2.58,
    volume: 38_456_000,
    marketCap: 1.22e12,
    high52Week: 505.48,
    low52Week: 222.97,
    sector: 'Technology',
    description: 'NVIDIA Corporation provides graphics, and compute and networking solutions in the United States, Taiwan, China, and internationally.',
  },
  {
    symbol: 'META',
    name: 'Meta Platforms Inc.',
    price: 474.99,
    change: -2.87,
    changePercent: -0.60,
    volume: 12_345_000,
    marketCap: 1.21e12,
    high52Week: 531.49,
    low52Week: 274.38,
    sector: 'Technology',
    description: 'Meta Platforms, Inc. engages in the development of products that enable people to connect and share with friends and family through mobile devices, personal computers, virtual reality headsets, and wearables worldwide.',
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    price: 248.48,
    change: 5.67,
    changePercent: 2.33,
    volume: 98_765_000,
    marketCap: 790.5e9,
    high52Week: 299.29,
    low52Week: 152.37,
    sector: 'Consumer Cyclical',
    description: 'Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, and internationally.',
  },
  {
    symbol: 'JPM',
    name: 'JPMorgan Chase & Co.',
    price: 195.76,
    change: 1.34,
    changePercent: 0.69,
    volume: 8_234_000,
    marketCap: 567.8e9,
    high52Week: 200.94,
    low52Week: 135.19,
    sector: 'Financial Services',
    description: 'JPMorgan Chase & Co. operates as a financial services company worldwide. It operates through four segments: Consumer & Community Banking, Corporate & Investment Bank, Commercial Banking, and Asset & Wealth Management.',
  },
  {
    symbol: 'V',
    name: 'Visa Inc.',
    price: 275.82,
    change: 0.98,
    changePercent: 0.36,
    volume: 5_678_000,
    marketCap: 565.2e9,
    high52Week: 290.96,
    low52Week: 227.68,
    sector: 'Financial Services',
    description: 'Visa Inc. operates as a payments technology company worldwide. The company facilitates digital payments among consumers, merchants, financial institutions, businesses, strategic partners, and government entities.',
  },
  {
    symbol: 'JNJ',
    name: 'Johnson & Johnson',
    price: 156.74,
    change: -0.45,
    changePercent: -0.29,
    volume: 6_789_000,
    marketCap: 378.9e9,
    high52Week: 175.97,
    low52Week: 143.13,
    sector: 'Healthcare',
    description: 'Johnson & Johnson researches and develops, manufactures, and sells various products in the healthcare field worldwide.',
  },
]

// Helper function to get stock by symbol
export const getStockBySymbol = (symbol) => {
  return stocks.find((stock) => stock.symbol === symbol.toUpperCase())
}

// Helper function to format market cap
export const formatMarketCap = (value) => {
  if (value >= 1e12) {
    return `$${(value / 1e12).toFixed(2)}T`
  }
  if (value >= 1e9) {
    return `$${(value / 1e9).toFixed(2)}B`
  }
  if (value >= 1e6) {
    return `$${(value / 1e6).toFixed(2)}M`
  }
  return `$${value.toLocaleString()}`
}

// Helper function to format volume
export const formatVolume = (value) => {
  if (value >= 1e6) {
    return `${(value / 1e6).toFixed(2)}M`
  }
  if (value >= 1e3) {
    return `${(value / 1e3).toFixed(2)}K`
  }
  return value.toLocaleString()
}

// Helper function to format price
export const formatPrice = (value) => {
  return `$${value.toFixed(2)}`
}

// Helper function to format percentage
export const formatPercent = (value) => {
  const sign = value >= 0 ? '+' : ''
  return `${sign}${value.toFixed(2)}%`
}
