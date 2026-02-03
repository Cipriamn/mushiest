import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { CryptoList } from '../components/CryptoList'
import { SearchBar } from '../components/SearchBar'
import { MarketOverview } from '../components/MarketOverview'
import { cryptos, getMarketStats } from '../data/crypto'

export function CryptoPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const filteredCryptos = useMemo(() => {
    if (!searchQuery.trim()) {
      return cryptos
    }
    const query = searchQuery.toLowerCase()
    return cryptos.filter(
      (crypto) =>
        crypto.symbol.toLowerCase().includes(query) ||
        crypto.name.toLowerCase().includes(query) ||
        crypto.category.toLowerCase().includes(query)
    )
  }, [searchQuery])

  const marketStats = useMemo(() => getMarketStats(), [])

  const handleCryptoClick = (crypto) => {
    navigate(`/crypto/${crypto.symbol}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Crypto Market</h1>
          <p className="text-gray-600">Track and visualize cryptocurrency prices</p>
        </div>

        <MarketOverview stats={marketStats} />

        <div className="mb-6 max-w-md">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by symbol, name, or category..."
          />
        </div>

        <CryptoList cryptos={filteredCryptos} onCryptoClick={handleCryptoClick} />
      </div>
    </div>
  )
}
