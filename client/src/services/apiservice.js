import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://aadhaar-kiosk-server.onrender.com'
})

export const createUser = async (payload) => {
  const response = await apiClient.post('/user', payload)
  return response
}

export const getUserByAadhaar = async (aadhaarNumber) => {
  const response = await apiClient.get(`/user/aadhaar/${aadhaarNumber}`)
  return response
}

export const getUser = async (id, payload) => {
  const response = await apiClient.get(`/user/${id}`, payload)
  return response
}

export const updateUser = async (id, payload) => {
  const response = await apiClient.patch(`/user/${id}`, payload)
  return response
}

export const sendOTP = async (payload) => {
  const response = await apiClient.post('/otp', payload)
  return response
}

export const sendMessage = async (payload) => {
  const response = await apiClient.post('/message', payload)
  return response
}
