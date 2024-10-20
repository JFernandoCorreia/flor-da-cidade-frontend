/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '', matricula: '', setor: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Validação dos campos
    if (!credentials.email || !credentials.password) {
      setErrorMessage('Por favor, preencha o email e a senha.');
      return;
    }

    try {
      const response = await axios.post('/login', credentials); 
      const token = response.data.jwt; // Obtenha o token JWT da resposta
      localStorage.setItem('token', token);
      setSuccessMessage('Login bem-sucedido!');
      navigate('/');
    } catch (error) {
      setErrorMessage('Erro ao fazer login.');
    }
  };

  const handleConectaRecifeClick = () => {
    window.open('https://conectarecife.recife.pe.gov.br/', '_blank');
  };

  const handleGovBrClick = () => {
    window.open('https://sso.acesso.gov.br/login?client_id=portal-logado.estaleiro.serpro.gov.br&authorization_id=1928af70229', '_blank');
  };

  return (
    <div className="bg-cover bg-center min-h-screen flex justify-center items-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4 w-3/4 max-w-md">
        <label htmlFor="email" className="block mb-2 text-recifeGold">E-mail</label>
        <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" className="block w-full p-2 border rounded text-black" />

        <label htmlFor="matricula" className="block mb-2 text-recifeGold">Matrícula</label>
        <input type="text" name="matricula" value={credentials.matricula} onChange={handleChange} placeholder="Matrícula" className="block w-full p-2 border rounded text-black" />

        <label htmlFor="password" className="block mb-2 text-recifeGold">Senha</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Senha" className="block w-full p-2 border rounded text-black" />

        <button type="submit" className="bg-recifeBlue text-recifeGold px-4 py-2 rounded w-full">Login</button>

        <div className="mt-6 text-center">
          <p className="mb-4 text-recifeGold">Conecte-se com:</p>
          <button className="bg-recifeBlue text-recifeGold px-4 py-2 rounded w-full mb-2" type="button" onClick={handleConectaRecifeClick}>Conecta Recife</button>
          <button className="bg-recifeBlue text-recifeGold px-4 py-2 rounded w-full" type="button" onClick={handleGovBrClick}>Gov.br</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;