import { useMemo } from 'react'
import { formatMarketCap } from '../data/stocks'

export function MarketDistributionChart({ cryptos }) {
  const chartData = useMemo(() => {
    if (!cryptos || cryptos.length === 0) return null

    const totalMarketCap = cryptos.reduce((sum, c) => sum + c.marketCap, 0)

    // Sort by market cap and take top 5, rest becomes "Others"
    const sorted = [...cryptos].sort((a, b) => b.marketCap - a.marketCap)
    const top5 = sorted.slice(0, 5)
    const others = sorted.slice(5)
    const othersMarketCap = others.reduce((sum, c) => sum + c.marketCap, 0)

    const colors = [
      '#8b5cf6', // purple-500
      '#6366f1', // indigo-500
      '#3b82f6', // blue-500
      '#0ea5e9', // sky-500
      '#14b8a6', // teal-500
      '#64748b', // slate-500 (for Others)
    ]

    const segments = top5.map((crypto, i) => ({
      symbol: crypto.symbol,
      name: crypto.name,
      value: crypto.marketCap,
      percent: (crypto.marketCap / totalMarketCap) * 100,
      color: colors[i],
    }))

    if (othersMarketCap > 0) {
      segments.push({
        symbol: 'Others',
        name: `${others.length} other cryptos`,
        value: othersMarketCap,
        percent: (othersMarketCap / totalMarketCap) * 100,
        color: colors[5],
      })
    }

    return { segments, totalMarketCap }
  }, [cryptos])

  // Calculate the donut segments with cumulative percentages
  const donutSegments = useMemo(() => {
    if (!chartData) return []

    let cumulative = 0
    return chartData.segments.map((segment) => {
      const startPercent = cumulative
      cumulative += segment.percent
      return {
        ...segment,
        startPercent,
        endPercent: cumulative,
      }
    })
  }, [chartData])

  if (!chartData) return null

  // Create SVG arc paths
  const createArc = (startPercent, endPercent, radius, innerRadius) => {
    const startAngle = (startPercent / 100) * 360 - 90
    const endAngle = (endPercent / 100) * 360 - 90

    const startRad = (startAngle * Math.PI) / 180
    const endRad = (endAngle * Math.PI) / 180

    const x1 = 50 + radius * Math.cos(startRad)
    const y1 = 50 + radius * Math.sin(startRad)
    const x2 = 50 + radius * Math.cos(endRad)
    const y2 = 50 + radius * Math.sin(endRad)

    const x3 = 50 + innerRadius * Math.cos(endRad)
    const y3 = 50 + innerRadius * Math.sin(endRad)
    const x4 = 50 + innerRadius * Math.cos(startRad)
    const y4 = 50 + innerRadius * Math.sin(startRad)

    const largeArcFlag = endPercent - startPercent > 50 ? 1 : 0

    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Cap Distribution</h3>

      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Donut Chart */}
        <div className="relative w-48 h-48 flex-shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
            {donutSegments.map((segment) => (
              <path
                key={segment.symbol}
                d={createArc(segment.startPercent, segment.endPercent, 45, 28)}
                fill={segment.color}
                className="transition-opacity hover:opacity-80 cursor-pointer"
              />
            ))}
          </svg>
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xs text-gray-500">Total</p>
              <p className="text-sm font-bold text-gray-900">{formatMarketCap(chartData.totalMarketCap)}</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 grid grid-cols-2 gap-2">
          {chartData.segments.map((segment) => (
            <div key={segment.symbol} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: segment.color }}
              />
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{segment.symbol}</p>
                <p className="text-xs text-gray-500">{segment.percent.toFixed(1)}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
