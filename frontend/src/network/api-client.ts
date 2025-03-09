import axios from 'axios';

export const apiClient = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});
