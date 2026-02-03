import { useMemo } from 'react'
import { formatCryptoPrice } from '../data/crypto'

export function PriceChart({ data, isPositive = true, height = 200 }) {
  const chartData = useMemo(() => {
    if (!data || data.length === 0) return null

    const prices = data.map((d) => d.price)
    const min = Math.min(...prices)
    const max = Math.max(...prices)
    const range = max - min || 1
    const padding = range * 0.1

    // Calculate points for the SVG path
    const points = data.map((d, i) => {
      const x = (i / (data.length - 1)) * 100
      const y = 100 - ((d.price - (min - padding)) / (range + 2 * padding)) * 100
      return { x, y, price: d.price, time: d.time }
    })

    // Create SVG path
    const pathD = points
      .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
      .join(' ')

    // Create area fill path
    const areaD = `${pathD} L 100 100 L 0 100 Z`

    return { pathD, areaD, points, min: min - padding, max: max + padding }
  }, [data])

  if (!chartData) return null

  const strokeColor = isPositive ? '#22c55e' : '#ef4444'
  const gradientId = `chart-gradient-${isPositive ? 'positive' : 'negative'}`

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4">
      <h3 className="text-sm font-medium text-gray-700 mb-4">24H Price Chart</h3>

      <div className="relative" style={{ height }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="overflow-visible"
        >
          {/* Gradient definition */}
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={strokeColor} stopOpacity="0.3" />
              <stop offset="100%" stopColor={strokeColor} stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Horizontal grid lines */}
          {[0, 25, 50, 75, 100].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="#e5e7eb"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
          ))}

          {/* Area fill */}
          <path
            d={chartData.areaD}
            fill={`url(#${gradientId})`}
            strokeWidth="0"
          />

          {/* Main line */}
          <path
            d={chartData.pathD}
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />

          {/* Data points */}
          {chartData.points.map((point, i) => (
            <circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="3"
              fill="white"
              stroke={strokeColor}
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              className="opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
            />
          ))}
        </svg>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-16 flex flex-col justify-between text-xs text-gray-500 -ml-16">
          <span>{formatCryptoPrice(chartData.max)}</span>
          <span>{formatCryptoPrice((chartData.max + chartData.min) / 2)}</span>
          <span>{formatCryptoPrice(chartData.min)}</span>
        </div>
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between mt-2 text-xs text-gray-500">
        {data.filter((_, i) => i % 2 === 0).map((d, i) => (
          <span key={i}>{d.time}</span>
        ))}
      </div>
    </div>
  )
}
