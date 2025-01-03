import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3337/api",
  headers: { "Content-Type": "application/json" },
  timeout: 30000,
});

export default api;
