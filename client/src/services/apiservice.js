import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:5000'
})

export const getVerifiedUsers = async () => {
  const response = await apiClient.get('/verifiedusers')
  return response
}

export const getUnverifiedUsers = async () => {
  const response = await apiClient.get('/unverifiedusers')
  return response
}

export const updateUser = async (id, payload) => {
  const response = await apiClient.patch(`/user/${id}`, payload)
  return response
}

export const deleteUser = async (id) => {
  const response = await apiClient.delete(`/user/${id}`)
  return response
}
