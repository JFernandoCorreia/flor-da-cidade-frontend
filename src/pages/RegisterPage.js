/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import api from '../services/api';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    cpf: '',
    cep: '',
    address: '',
    neighborhood: '',
    city: '',
    state: '',
    phone: '',
    matricula: '',
    setor: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleCepChange = async (event) => {
    const cep = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    setUserData({ ...userData, cep: cep }); // Permite a digitação do CEP

    if (cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = response.data;

        if (!data.erro) {
          setUserData({
            ...userData,
            cep: cep,
            address: data.logradouro,
            neighborhood: data.bairro,
            city: data.localidade,
            state: data.uf
          });
        } else {
          toast.error("CEP inválido");
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      }
    }
  };

  const estados = [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await api.post('/register', userData);
      console.log(response.data);
      setSuccessMessage('Cadastro realizado com sucesso!');
      toast.success('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setErrorMessage('Erro ao cadastrar. Por favor, tente novamente.');
      toast.error('Erro ao cadastrar. Por favor, tente novamente.');
    }
  };

  return (
    <div className="bg-cover bg-center min-h-screen flex justify-center items-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4 w-3/4 max-w-md">
        <label htmlFor="name" className="block mb-2 text-recifeGold">Nome Completo</label>
        <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Nome Completo" className="block w-full p-2 border rounded text-black" required />

        <label htmlFor="email" className="block mb-2 text-recifeGold">E-mail</label>
        <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" className="block w-full p-2 border rounded text-black" required />

        <label htmlFor="cpf" className="block mb-2 text-recifeGold">CPF</label>
        <input type="text" name="cpf" value={userData.cpf} onChange={handleChange} placeholder="CPF" className="block w-full p-2 border rounded text-black" required />

        <label htmlFor="cep" className="block mb-2 text-recifeGold">CEP</label>
        <input type="text" name="cep" value={userData.cep} onChange={handleCepChange} placeholder="CEP" className="block w-full p-2 border rounded text-black" required />

        <label htmlFor="address" className="block mb-2 text-recifeGold">Endereço</label>
        <input type="text" name="address" value={userData.address} onChange={handleChange} placeholder="Endereço" className="block w-full p-2 border rounded text-black" required />

        <label htmlFor="bairro" className="block mb-2 text-recifeGold">Bairro</label>
        <input type="text" name="bairro" value={userData.neighborhood} onChange={handleChange} placeholder="Bairro" className="block w-full p-2 border rounded text-black" required />

        <label htmlFor="city" className="block mb-2 text-recifeGold">Cidade</label>
        <input type="text" name="city" value={userData.city} onChange={handleChange} placeholder="Cidade" className="block w-full p-2 border rounded text-black" required />

        <label htmlFor="state" className="block mb-2 text-recifeGold">Estado</label>
        <select name="state" value={userData.state} onChange={handleChange} placeholder="Estado" className="block w-full p-2 border rounded text-black" required>
          <option value="">Selecione um estado</option>
          {estados.map(estado => (
            <option key={estado.value} value={estado.value}>{estado.label}</option>
          ))}
        </select>

        <label htmlFor="phone" className="block mb-2 text-recifeGold">Telefone</label>
        <input type="text" name="phone" value={userData.phone} onChange={handleChange} placeholder="Telefone" className="block w-full p-2 border rounded text-black" required />

        <label htmlFor="password" className="block mb-2 text-recifeGold">Senha</label>
        <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Senha" className="block w-full p-2 border rounded text-black" required />

        <button type="submit" className="bg-recifeBlue text-recifeGold px-4 py-2 rounded w-full">Cadastrar</button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
