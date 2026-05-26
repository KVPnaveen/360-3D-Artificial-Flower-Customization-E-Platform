import React from 'react'

export default function EmployeeLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-white shadow p-4">
        <h3 className="font-semibold mb-4">Employee Menu</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>📝 Tasks</li>
          <li>📈 Performance</li>
          <li>🎯 Goals</li>
        </ul>
      </aside>
      <main className="flex-1 p-4">{children}</main>
    </div>
  )
}
