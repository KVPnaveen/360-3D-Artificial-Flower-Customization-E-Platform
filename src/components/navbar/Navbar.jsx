import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          🌸 RedShan360
        </Link>
        <div className="flex gap-6">
          <Link to="/products" className="text-gray-700 hover:text-indigo-600">Products</Link>
          <Link to="/customize" className="text-gray-700 hover:text-indigo-600">Customize</Link>
          <Link to="/cart" className="text-gray-700 hover:text-indigo-600">Cart</Link>
        </div>
      </div>
    </nav>
  )
}
