import api from './api'

export const createOrder = async (payload) => {
  return api.post('/orders', payload)
}

export const fetchOrders = async (params) => {
  return api.get('/orders', { params })
}

export const fetchOrderById = async (id) => {
  return api.get(`/orders/${id}`)
}

export const updateOrderStatus = async (id, status) => {
  return api.put(`/orders/${id}`, { status })
}
