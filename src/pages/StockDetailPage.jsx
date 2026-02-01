import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, TrendingUp, TrendingDown, Activity, DollarSign, BarChart2, Calendar } from 'lucide-react'
import { getStockBySymbol, formatPrice, formatPercent, formatMarketCap, formatVolume } from '../data/stocks'

export function StockDetailPage() {
  const { symbol } = useParams()
  const navigate = useNavigate()
  const stock = getStockBySymbol(symbol)

  if (!stock) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Stock Not Found</h2>
          <p className="text-gray-600 mb-4">The stock symbol "{symbol}" was not found.</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Stocks
          </button>
        </div>
      </div>
    )
  }

  const isPositive = stock.change >= 0

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Stocks
        </button>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-gray-900">{stock.symbol}</h1>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {stock.sector}
                </span>
              </div>
              <p className="text-lg text-gray-600 mt-1">{stock.name}</p>
            </div>
          </div>

          <div className="flex items-end gap-4 mb-6">
            <span className="text-4xl font-bold text-gray-900">{formatPrice(stock.price)}</span>
            <div className={`flex items-center gap-1 pb-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? (
                <TrendingUp className="w-5 h-5" />
              ) : (
                <TrendingDown className="w-5 h-5" />
              )}
              <span className="text-lg font-semibold">
                {isPositive ? '+' : ''}{stock.change.toFixed(2)} ({formatPercent(stock.changePercent)})
              </span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">{stock.description}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            icon={DollarSign}
            label="Market Cap"
            value={formatMarketCap(stock.marketCap)}
          />
          <StatCard
            icon={Activity}
            label="Volume"
            value={formatVolume(stock.volume)}
          />
          <StatCard
            icon={TrendingUp}
            label="52W High"
            value={formatPrice(stock.high52Week)}
            iconColor="text-green-500"
          />
          <StatCard
            icon={TrendingDown}
            label="52W Low"
            value={formatPrice(stock.low52Week)}
            iconColor="text-red-500"
          />
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, iconColor = 'text-blue-500' }) {
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
