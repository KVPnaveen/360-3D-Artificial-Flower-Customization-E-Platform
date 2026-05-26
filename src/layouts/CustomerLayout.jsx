import React from 'react'

export default function CustomerLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold">Customer Dashboard</h1>
        </div>
      </header>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  )
}
