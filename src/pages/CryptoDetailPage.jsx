import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, TrendingUp, TrendingDown, Activity, DollarSign, Coins } from 'lucide-react'
import { getCryptoBySymbol, formatCryptoPrice, formatSupply } from '../data/crypto'
import { formatMarketCap, formatPercent } from '../data/stocks'
import { PriceChart } from '../components/PriceChart'

export function CryptoDetailPage() {
  const { symbol } = useParams()
  const navigate = useNavigate()
  const crypto = getCryptoBySymbol(symbol)

  if (!crypto) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Cryptocurrency Not Found</h2>
          <p className="text-gray-600 mb-4">The crypto symbol "{symbol}" was not found.</p>
          <button
            onClick={() => navigate('/crypto')}
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Crypto
          </button>
        </div>
      </div>
    )
  }

  const isPositive = crypto.change >= 0
  const priceRangePercent = ((crypto.price - crypto.low24h) / (crypto.high24h - crypto.low24h)) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/crypto')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Crypto
        </button>

        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-gray-900">{crypto.symbol}</h1>
                <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                  {crypto.category}
                </span>
              </div>
              <p className="text-lg text-gray-600 mt-1">{crypto.name}</p>
            </div>
          </div>

          <div className="flex items-end gap-4 mb-6">
            <span className="text-4xl font-bold text-gray-900">{formatCryptoPrice(crypto.price)}</span>
            <div className={`flex items-center gap-1 pb-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? (
                <TrendingUp className="w-5 h-5" />
              ) : (
                <TrendingDown className="w-5 h-5" />
              )}
              <span className="text-lg font-semibold">
                {isPositive ? '+' : ''}{formatCryptoPrice(crypto.change).slice(1)} ({formatPercent(crypto.changePercent)})
              </span>
            </div>
          </div>

          {/* 24h Price Range Visualization */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>24h Low: {formatCryptoPrice(crypto.low24h)}</span>
              <span>24h High: {formatCryptoPrice(crypto.high24h)}</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full relative"
              >
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-purple-600 rounded-full shadow-md"
                  style={{ left: `calc(${priceRangePercent}% - 8px)` }}
                />
              </div>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">{crypto.description}</p>
        </div>

        {/* Price Chart */}
        <div className="mb-6">
          <PriceChart data={crypto.priceHistory} isPositive={isPositive} height={200} />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <StatCard
            icon={DollarSign}
            label="Market Cap"
            value={formatMarketCap(crypto.marketCap)}
          />
          <StatCard
            icon={Activity}
            label="24h Volume"
            value={formatMarketCap(crypto.volume)}
          />
          <StatCard
            icon={Coins}
            label="Circulating Supply"
            value={formatSupply(crypto.circulatingSupply)}
          />
          <StatCard
            icon={Coins}
            label="Max Supply"
            value={formatSupply(crypto.maxSupply)}
            iconColor="text-purple-500"
          />
        </div>

        {/* Additional Metrics Visualization */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Supply Distribution</h3>
          <SupplyVisualization
            circulating={crypto.circulatingSupply}
            max={crypto.maxSupply}
          />
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, iconColor = 'text-purple-500' }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-4 h-4 ${iconColor}`} />
        <span className="text-sm text-gray-500">{label}</span>
      </div>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
    </div>
  )
}

function SupplyVisualization({ circulating, max }) {
  if (!max) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-500">No max supply limit</p>
        <p className="text-2xl font-bold text-purple-600 mt-2">
          {formatSupply(circulating)} in circulation
        </p>
      </div>
    )
  }

  const percentCirculating = (circulating / max) * 100

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-600">Circulating: {formatSupply(circulating)}</span>
        <span className="text-gray-600">Max: {formatSupply(max)}</span>
      </div>
      <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
          style={{ width: `${percentCirculating}%` }}
        >
          <span className="text-white text-xs font-medium">
            {percentCirculating.toFixed(1)}%
          </span>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 mt-2">
        {(100 - percentCirculating).toFixed(1)}% remaining to be mined/released
      </p>
    </div>
  )
}
