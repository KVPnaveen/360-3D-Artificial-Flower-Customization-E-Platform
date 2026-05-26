import React from 'react'

export default function InventoryTable() {
  const items = [
    { id: 1, name: 'Rose Petals', stock: 150, unit: 'pcs' },
    { id: 2, name: 'Stems', stock: 200, unit: 'pcs' },
    { id: 3, name: 'Leaves', stock: 300, unit: 'pcs' },
  ]

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold">Product</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Stock</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Unit</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.stock}</td>
              <td className="px-4 py-2">{item.unit}</td>
              <td className="px-4 py-2">
                <button className="text-indigo-600 hover:text-indigo-700 text-sm">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
