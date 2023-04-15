import axios from "axios";

const API_URL = "/api/users";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const checkUser = async (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(`${API_URL}/me/${userId}`, config);
  return res.data;
};

const logout = () => localStorage.removeItem("user");

const authService = { register, logout, login, checkUser };

export default authService;
