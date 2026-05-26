import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/guest/Home'
import ProductPage from '../pages/customer/ProductPage'
import AdminPanel from '../pages/admin/AdminPanel'
import EmployeeDashboard from '../pages/employee/EmployeeDashboard'
import ManagerDashboard from '../pages/manager/ManagerDashboard'
import ProtectedRoutes from './ProtectedRoutes'

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/products" element={<MainLayout><ProductPage /></MainLayout>} />

        {/* Protected Routes */}

        <Route
          path="/employee"
          element={
            <ProtectedRoutes allowedRoles={['employee']}>
              <EmployeeDashboard />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/manager"
          element={
            <ProtectedRoutes allowedRoles={['manager']}>
              <ManagerDashboard />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoutes allowedRoles={['admin']}>
              <AdminPanel />
            </ProtectedRoutes>
          }
        />

        {/* 404 & Catch All */}
        <Route path="/404" element={<div className="text-center py-20">Page Not Found</div>} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Suspense>
  )
}
