import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { StockList } from '../components/StockList'
import { SearchBar } from '../components/SearchBar'
import { stocks } from '../data/stocks'

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const filteredStocks = useMemo(() => {
    if (!searchQuery.trim()) {
      return stocks
    }
    const query = searchQuery.toLowerCase()
    return stocks.filter(
      (stock) =>
        stock.symbol.toLowerCase().includes(query) ||
        stock.name.toLowerCase().includes(query) ||
        stock.sector.toLowerCase().includes(query)
    )
  }, [searchQuery])

  const handleStockClick = (stock) => {
    navigate(`/stock/${stock.symbol}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Stock Market</h1>
          <p className="text-gray-600">View and track your favorite stocks</p>
        </div>

        <div className="mb-6 max-w-md">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by symbol, name, or sector..."
          />
        </div>

        <StockList stocks={filteredStocks} onStockClick={handleStockClick} />
      </div>
    </div>
  )
}
