import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:1130",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
