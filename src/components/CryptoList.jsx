import { CryptoCard } from './CryptoCard'

export function CryptoList({ cryptos, onCryptoClick }) {
  if (!cryptos || cryptos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No cryptocurrencies found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cryptos.map((crypto) => (
        <CryptoCard key={crypto.symbol} crypto={crypto} onClick={onCryptoClick} />
      ))}
    </div>
  )
}
