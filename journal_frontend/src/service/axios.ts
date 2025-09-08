import axios from "axios";

export const Axios = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
});