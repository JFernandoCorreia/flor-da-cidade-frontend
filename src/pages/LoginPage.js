import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '', matricula: '', setor: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Para navegação

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/login', credentials);
      setSuccessMessage('Login bem-sucedido!');
      navigate('/'); // Redireciona para a página inicial após o login
    } catch (error) {
      setErrorMessage('Falha ao realizar login. Verifique suas credenciais.');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-recifeBlue p-8 rounded-lg shadow-lg flex flex-col space-y-4 w-1/3"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Login</h2>
        
        <label htmlFor="email" className="block mb-2 text-recifeWhite">E-mail</label>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 rounded-md border-2"
        />
        <label htmlFor="password" className="block mb-2 text-recifeWhite">Senha</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Senha"
          className="p-2 rounded-md border-2"
        />
        <label htmlFor="matricula" className="block mb-2 text-recifeWhite">Matricula</label>
        <input
          type="text"
          name="matricula"
          value={credentials.matricula}
          onChange={handleChange}
          placeholder="Matricula"
          className="p-2 rounded-md border-2"
        />

        <button
          type="submit"
          className="bg-recifeGold text-recifeBlue px-6 py-3 rounded-lg shadow-md hover:bg-recifeBlue hover:text-recifeWhite transition duration-300"
        >
          Login
        </button>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
      </form>
    </div>
    
  );
};

export default LoginPage;
