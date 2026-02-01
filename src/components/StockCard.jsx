import { TrendingUp, TrendingDown } from 'lucide-react'
import { formatPrice, formatPercent, formatMarketCap } from '../data/stocks'

export function StockCard({ stock, onClick }) {
  const isPositive = stock.change >= 0

  return (
    <div
      onClick={() => onClick?.(stock)}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{stock.symbol}</h3>
          <p className="text-sm text-gray-500 truncate max-w-[180px]">{stock.name}</p>
        </div>
        <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded">
          {stock.sector}
        </span>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold text-gray-900">{formatPrice(stock.price)}</p>
          <div className={`flex items-center gap-1 mt-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span className="text-sm font-medium">
              {isPositive ? '+' : ''}{stock.change.toFixed(2)} ({formatPercent(stock.changePercent)})
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Market Cap</p>
          <p className="text-sm font-medium text-gray-700">{formatMarketCap(stock.marketCap)}</p>
        </div>
      </div>
    </div>
  )
}
