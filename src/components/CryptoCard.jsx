import { TrendingUp, TrendingDown } from 'lucide-react'
import { formatCryptoPrice } from '../data/crypto'
import { formatMarketCap, formatPercent } from '../data/stocks'
import { MiniPriceChart } from './MiniPriceChart'

export function CryptoCard({ crypto, onClick }) {
  const isPositive = crypto.change >= 0

  return (
    <div
      onClick={() => onClick?.(crypto)}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{crypto.symbol}</h3>
          <p className="text-sm text-gray-500 truncate max-w-[180px]">{crypto.name}</p>
        </div>
        <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">
          {crypto.category}
        </span>
      </div>

      {/* Mini Price Chart */}
      <div className="h-16 mb-3">
        <MiniPriceChart data={crypto.priceHistory} isPositive={isPositive} />
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold text-gray-900">{formatCryptoPrice(crypto.price)}</p>
          <div className={`flex items-center gap-1 mt-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span className="text-sm font-medium">
              {formatPercent(crypto.changePercent)}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Market Cap</p>
          <p className="text-sm font-medium text-gray-700">{formatMarketCap(crypto.marketCap)}</p>
        </div>
      </div>
    </div>
  )
}
