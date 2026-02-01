import { StockCard } from './StockCard'

export function StockList({ stocks, onStockClick }) {
  if (!stocks || stocks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No stocks found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stocks.map((stock) => (
        <StockCard key={stock.symbol} stock={stock} onClick={onStockClick} />
      ))}
    </div>
  )
}
