import React from 'react'

export default function StockCard({ product, quantity, status }) {
  const statusColor = {
    low: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-green-100 text-green-800',
  }

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h4 className="font-semibold mb-2">{product}</h4>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">{quantity}</span>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[status] || statusColor.medium}`}>
          {status.toUpperCase()}
        </span>
      </div>
    </div>
  )
}
