import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
});

export const getVerifiedUsers = async () => {
  const response = await apiClient.get('/users/verified');
  return response;
};

export const getUnverifiedUsers = async () => {
  const response = await apiClient.get('/users/unverified');
  return response;
};

export const updateUser = async (id, payload) => {
  const response = await apiClient.patch(`/user/${id}`, payload);
  return response;
};

export const deleteUser = async (id) => {
  const response = await apiClient.delete(`/user/${id}`);
  return response;
};

export const updatingUsers = async () => {
  const response = await apiClient.get(`/users/updating`);
  return response;
};

export const sendMessage = async (payload) => {
  const response = await apiClient.post('/message', payload);
  return response;
};
