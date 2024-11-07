/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '', matricula: '', setor: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Para navegação

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(credentials.email);
    const isMatriculaValid = /^[0-9]*$/.test(credentials.matricula);

    if (!isEmailValid) {
      setErrorMessage('E-mail inválido.');
      return false;
    }
    if (!isMatriculaValid) {
      setErrorMessage('Matrícula deve conter apenas números.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateForm()) return;

    try {
      const response = await api.post('/login', credentials);
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      setErrorMessage('Falha ao realizar login. Verifique suas credenciais.');
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleConectaRecifeClick = () => {
    window.open('https://conectarecife.recife.pe.gov.br/', '_blank');
  };

  const handleGovBrClick = () => {
    window.open('https://sso.acesso.gov.br/login?client_id=portal-logado.estaleiro.serpro.gov.br&authorization_id=1928af70229', '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4" style={{ backgroundImage: "url('/images/baoba3.jpg')" }}>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-transparent p-8 rounded-lg shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Login</h2>
        
        <label htmlFor="email" className="block mb-2 text-recifeWhite">E-mail</label>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-3 w-full rounded-md border-2"
        />
        <label htmlFor="password" className="block mb-2 text-recifeWhite">Senha</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Senha"
          className="p-3 w-full rounded-md border-2"
        />
        <label htmlFor="matricula" className="block mb-2 text-recifeWhite">Matricula</label>
        <input
          type="text"
          name="matricula"
          value={credentials.matricula}
          onChange={handleChange}
          placeholder="Matricula"
          className="p-3 w-full rounded-md border-2"
        />

        <button
          type="submit"
          className="w-full bg-recifeGold text-recifeBlue px-6 py-3 rounded-lg shadow-md hover:bg-recifeBlue hover:text-recifeWhite transition duration-300"
        >
          Login
        </button>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        {/* Botões de login externo */}
        <div className="text-center mt-6">
          <p className=" text-2xl font-bold text-recifeWhite mb-2">Logar com:</p>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button onClick={handleConectaRecifeClick} className="bg-recifeGold text-recifeBlue px-4 py-2 m-2 rounded-lg hover:bg-recifeBlue hover:text-recifeWhite">Conecta Recife</button>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button onClick={handleGovBrClick} className="bg-recifeGold text-recifeBlue px-4 py-2 m-2 rounded-lg hover:bg-recifeBlue hover:text-recifeWhite">Gov.br</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
