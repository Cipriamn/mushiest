import { BarChart3, Bitcoin } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const location = useLocation()
  const isCryptoPage = location.pathname.startsWith('/crypto')

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <BarChart3 className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">StockView</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                !isCryptoPage
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Stocks
            </Link>
            <Link
              to="/crypto"
              className={`flex items-center gap-1 font-medium transition-colors ${
                isCryptoPage
                  ? 'text-purple-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Bitcoin className="w-4 h-4" />
              Crypto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
