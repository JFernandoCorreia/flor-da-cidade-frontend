import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',  // Ajuste conforme o ambiente de desenvolvimento/produção
  headers: {
    'Content-Type': 'application/json',
  }
});

// Interceptando as requisições para adicionar o token JWT
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');  // Supondo que o token JWT está armazenado no localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
