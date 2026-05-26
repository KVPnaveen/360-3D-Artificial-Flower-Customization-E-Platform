import React from 'react'

export default function CustomizerPanel() {
  return (
    <aside className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">🎨 Customization Panel</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Color</label>
          <input type="color" className="w-full h-10 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Style</label>
          <select className="w-full px-3 py-2 border rounded">
            <option>Romantic</option>
            <option>Modern</option>
            <option>Classic</option>
          </select>
        </div>
        <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Apply Changes
        </button>
      </div>
    </aside>
  )
}
