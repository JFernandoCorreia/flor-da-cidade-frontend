import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

// Interceptor para adicionar o token JWT ao cabeçalho Authorization
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    // biome-ignore lint/complexity/useLiteralKeys: <explanation>
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Interceptor de resposta para lidar com erros de autenticação (401)
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      console.error("Sessão expirada. Faça login novamente.");
      // Exemplo: redirecionar para a página de login
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
