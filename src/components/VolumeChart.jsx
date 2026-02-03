import { useMemo } from 'react'
import { formatMarketCap } from '../data/stocks'

export function VolumeChart({ cryptos }) {
  const chartData = useMemo(() => {
    if (!cryptos || cryptos.length === 0) return null

    // Sort by volume and take top 8
    const sorted = [...cryptos].sort((a, b) => b.volume - a.volume).slice(0, 8)
    const maxVolume = Math.max(...sorted.map((c) => c.volume))

    return sorted.map((crypto) => ({
      symbol: crypto.symbol,
      volume: crypto.volume,
      percent: (crypto.volume / maxVolume) * 100,
      isPositive: crypto.changePercent >= 0,
    }))
  }, [cryptos])

  if (!chartData) return null

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">24h Trading Volume</h3>

      <div className="space-y-3">
        {chartData.map((item) => (
          <div key={item.symbol} className="group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{item.symbol}</span>
              <span className="text-sm text-gray-500">{formatMarketCap(item.volume)}</span>
            </div>
            <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2 ${
                  item.isPositive
                    ? 'bg-gradient-to-r from-purple-400 to-purple-600'
                    : 'bg-gradient-to-r from-indigo-400 to-indigo-600'
                }`}
                style={{ width: `${item.percent}%` }}
              >
                {item.percent > 25 && (
                  <span className="text-xs text-white font-medium">
                    {item.percent.toFixed(0)}%
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
