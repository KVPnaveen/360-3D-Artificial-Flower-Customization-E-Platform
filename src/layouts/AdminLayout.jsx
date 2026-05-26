import React from 'react'

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-indigo-900 text-white shadow p-4">
        <h3 className="font-semibold mb-4">⚙️ Admin Panel</h3>
        <ul className="space-y-2 text-sm">
          <li>👤 Users</li>
          <li>⚙️ Settings</li>
          <li>📋 Logs</li>
          <li>🔍 Audit Trail</li>
        </ul>
      </aside>
      <main className="flex-1 p-4">{children}</main>
    </div>
  )
}
