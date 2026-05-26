import React from 'react'

export default function PresetSelector() {
  const presets = [
    { id: 1, name: 'Rose Garden', color: '#ff1493' },
    { id: 2, name: 'Spring Blossom', color: '#ffb6c1' },
    { id: 3, name: 'Sunset', color: '#ff7f50' },
  ]

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h4 className="font-semibold mb-3">Design Presets</h4>
      <div className="grid grid-cols-3 gap-2">
        {presets.map((preset) => (
          <button
            key={preset.id}
            className="p-3 border rounded hover:border-indigo-600 transition"
            style={{ borderColor: preset.color }}
          >
            <div className="text-2xl mb-1" style={{ color: preset.color }}>
              ◉
            </div>
            <p className="text-xs text-center">{preset.name}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
