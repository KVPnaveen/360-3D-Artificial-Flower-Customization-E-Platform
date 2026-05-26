import React from 'react'

export default function ThreeViewer() {
  return (
    <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-2">🌸</div>
        <p className="text-gray-600">3D Viewer (react-three-fiber)</p>
        <p className="text-sm text-gray-500 mt-2">Rotating flower model will display here</p>
      </div>
    </div>
  )
}
