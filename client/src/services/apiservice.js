import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:5000'
})

export const createUser = async (payload) => {
  const response = await apiClient.post('/user', payload)
  return response
}
