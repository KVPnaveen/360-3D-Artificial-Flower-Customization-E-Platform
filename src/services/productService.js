import api from './api'

export const fetchProducts = async (params) => {
  return api.get('/products', { params })
}

export const fetchProductById = async (id) => {
  return api.get(`/products/${id}`)
}

export const createProduct = async (payload) => {
  return api.post('/products', payload)
}

export const updateProduct = async (id, payload) => {
  return api.put(`/products/${id}`, payload)
}

export const deleteProduct = async (id) => {
  return api.delete(`/products/${id}`)
}
