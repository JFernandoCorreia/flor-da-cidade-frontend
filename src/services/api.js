import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',  // Ajuste conforme o ambiente de desenvolvimento/produção
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

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Token inválido ou expirado - redirecionar para a página de login ou realizar logout
      console.error("Sessão expirada. Faça login novamente.");
    }
    return Promise.reject(error);
  }
);

export default api;
