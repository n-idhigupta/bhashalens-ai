import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

console.log("API URL =", API_URL);

const API = axios.create({
  baseURL: `${API_URL}/api`,
});

API.interceptors.request.use((req) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  if (userInfo?.token) {
    req.headers.Authorization = `Bearer ${userInfo.token}`;
  }

  return req;
});

export default API;