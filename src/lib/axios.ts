import axios from 'axios';
import { API_BASE_URL } from '@/app/config';

export const http = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
  timeout: 15000,
});

http.interceptors.request.use((config) => {
  // Example: attach auth token if you have one
  // const token = localStorage.getItem('token');
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

http.interceptors.response.use(
  (res) => res,
  (err) => {
    // Simple global error logging
    console.error('[HTTP Error]', err?.response?.status, err?.message);
    return Promise.reject(err);
  },
);
