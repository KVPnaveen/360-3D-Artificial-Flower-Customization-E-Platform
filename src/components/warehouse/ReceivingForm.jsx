import React from 'react'

export default function ReceivingForm() {
  return (
    <form className="bg-white shadow rounded-lg p-6 max-w-md">
      <h3 className="text-lg font-semibold mb-4">📦 Receive Shipment</h3>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Shipment ID</label>
          <input type="text" placeholder="SHP-001" className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <input type="number" placeholder="0" className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Product</label>
          <select className="w-full px-3 py-2 border rounded">
            <option>Select product</option>
            <option>Rose Petals</option>
            <option>Stems</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Receive
        </button>
      </div>
    </form>
  )
}
