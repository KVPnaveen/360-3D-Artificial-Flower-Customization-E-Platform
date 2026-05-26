import api from './api'

export const fetchInventory = async () => {
  return api.get('/warehouse/inventory')
}

export const updateInventory = async (id, payload) => {
  return api.put(`/warehouse/inventory/${id}`, payload)
}

export const fetchStock = async (productId) => {
  return api.get(`/warehouse/stock/${productId}`)
}

export const createStockEntry = async (payload) => {
  return api.post('/warehouse/stock', payload)
}
