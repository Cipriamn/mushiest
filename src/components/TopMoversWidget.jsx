import { useMemo } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { formatCryptoPrice } from '../data/crypto'
import { formatPercent } from '../data/stocks'

export function TopMoversWidget({ cryptos, onCryptoClick }) {
  const { gainers, losers } = useMemo(() => {
    if (!cryptos || cryptos.length === 0) {
      return { gainers: [], losers: [] }
    }

    const sorted = [...cryptos].sort((a, b) => b.changePercent - a.changePercent)
    const gainers = sorted.filter((c) => c.changePercent > 0).slice(0, 3)
    const losers = sorted.filter((c) => c.changePercent < 0).slice(-3).reverse()

    return { gainers, losers }
  }, [cryptos])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Top Gainers */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Top Gainers</h3>
        </div>

        <div className="space-y-3">
          {gainers.map((crypto, index) => (
            <MoverItem
              key={crypto.symbol}
              crypto={crypto}
              rank={index + 1}
              onClick={() => onCryptoClick?.(crypto)}
              isPositive
            />
          ))}
          {gainers.length === 0 && (
            <p className="text-gray-500 text-sm text-center py-4">No gainers today</p>
          )}
        </div>
      </div>

      {/* Top Losers */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
            <TrendingDown className="w-4 h-4 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Top Losers</h3>
        </div>

        <div className="space-y-3">
          {losers.map((crypto, index) => (
            <MoverItem
              key={crypto.symbol}
              crypto={crypto}
              rank={index + 1}
              onClick={() => onCryptoClick?.(crypto)}
              isPositive={false}
            />
          ))}
          {losers.length === 0 && (
            <p className="text-gray-500 text-sm text-center py-4">No losers today</p>
          )}
        </div>
      </div>
    </div>
  )
}

function MoverItem({ crypto, rank, onClick, isPositive }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
    >
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
          isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}
      >
        {rank}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{crypto.symbol}</p>
        <p className="text-xs text-gray-500 truncate">{crypto.name}</p>
      </div>

      <div className="text-right">
        <p className="text-sm font-medium text-gray-900">{formatCryptoPrice(crypto.price)}</p>
        <p className={`text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {formatPercent(crypto.changePercent)}
        </p>
      </div>

      {/* Mini visual bar */}
      <div className="w-16 h-4 bg-gray-100 rounded overflow-hidden">
        <div
          className={`h-full rounded transition-all ${
            isPositive ? 'bg-green-500' : 'bg-red-500'
          }`}
          style={{ width: `${Math.min(Math.abs(crypto.changePercent) * 10, 100)}%` }}
        />
      </div>
    </div>
  )
}
