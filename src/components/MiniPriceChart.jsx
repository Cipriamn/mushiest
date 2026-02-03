import { useMemo } from 'react'

export function MiniPriceChart({ data, isPositive = true, height = 64 }) {
  const chartData = useMemo(() => {
    if (!data || data.length === 0) return null

    const prices = data.map((d) => d.price)
    const min = Math.min(...prices)
    const max = Math.max(...prices)
    const range = max - min || 1

    // Calculate points for the SVG path
    const points = data.map((d, i) => {
      const x = (i / (data.length - 1)) * 100
      const y = 100 - ((d.price - min) / range) * 100
      return { x, y }
    })

    // Create SVG path
    const pathD = points
      .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
      .join(' ')

    // Create area fill path
    const areaD = `${pathD} L 100 100 L 0 100 Z`

    return { pathD, areaD, points }
  }, [data])

  if (!chartData) return null

  const strokeColor = isPositive ? '#22c55e' : '#ef4444'

  return (
    <svg
      width="100%"
      height={height}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="overflow-visible"
    >
      {/* Gradient fill under the line */}
      <defs>
        <linearGradient id={`gradient-${isPositive}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={strokeColor} stopOpacity="0.3" />
          <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Area fill */}
      <path
        d={chartData.areaD}
        fill={`url(#gradient-${isPositive})`}
        strokeWidth="0"
      />

      {/* Line */}
      <path
        d={chartData.pathD}
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
