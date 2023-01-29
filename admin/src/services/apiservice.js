import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://aadhaar-kiosk-server.onrender.com",
});

export const getVerifiedUsers = async () => {
  const response = await apiClient.get("/users/verified");
  return response;
};

export const getUnverifiedUsers = async () => {
  const response = await apiClient.get("/users/unverified");
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

export const getUpdatingUsers = async () => {
  const response = await apiClient.get(`/users/updating`);
  return response;
};

export const sendMessage = async (payload) => {
  const response = await apiClient.post("/messages", payload);
  return response;
};
