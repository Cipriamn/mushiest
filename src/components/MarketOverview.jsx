import { TrendingUp, TrendingDown, BarChart3, Coins, Activity } from 'lucide-react'
import { formatMarketCap, formatPercent } from '../data/stocks'

export function MarketOverview({ stats }) {
  const { totalMarketCap, totalVolume, avgChange, gainers, losers } = stats
  const isPositive = avgChange >= 0

  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white mb-6">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="w-6 h-6" />
        <h2 className="text-xl font-bold">Crypto Market Overview</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-1">
            <Coins className="w-4 h-4 opacity-80" />
            <span className="text-sm text-white/80">Total Market Cap</span>
          </div>
          <p className="text-2xl font-bold">{formatMarketCap(totalMarketCap)}</p>
        </div>

        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-4 h-4 opacity-80" />
            <span className="text-sm text-white/80">24h Volume</span>
          </div>
          <p className="text-2xl font-bold">{formatMarketCap(totalVolume)}</p>
        </div>

        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-1">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 opacity-80" />
            ) : (
              <TrendingDown className="w-4 h-4 opacity-80" />
            )}
            <span className="text-sm text-white/80">Avg Change</span>
          </div>
          <p className={`text-2xl font-bold ${isPositive ? 'text-green-300' : 'text-red-300'}`}>
            {formatPercent(avgChange)}
          </p>
        </div>

        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm text-white/80">Market Sentiment</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-300 font-bold">{gainers}</span>
            <span className="text-white/60">/</span>
            <span className="text-red-300 font-bold">{losers}</span>
            <span className="text-xs text-white/60 ml-1">gainers/losers</span>
          </div>
          <SentimentBar gainers={gainers} losers={losers} />
        </div>
      </div>
    </div>
  )
}

function SentimentBar({ gainers, losers }) {
  const total = gainers + losers
  const gainerPercent = (gainers / total) * 100

  return (
    <div className="mt-2 h-2 bg-red-400/50 rounded-full overflow-hidden">
      <div
        className="h-full bg-green-400 rounded-full transition-all duration-500"
        style={{ width: `${gainerPercent}%` }}
      />
    </div>
  )
}
