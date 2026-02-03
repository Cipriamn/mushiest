import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { StockDetailPage } from './pages/StockDetailPage'
import { CryptoPage } from './pages/CryptoPage'
import { CryptoDetailPage } from './pages/CryptoDetailPage'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stock/:symbol" element={<StockDetailPage />} />
        <Route path="/crypto" element={<CryptoPage />} />
        <Route path="/crypto/:symbol" element={<CryptoDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
