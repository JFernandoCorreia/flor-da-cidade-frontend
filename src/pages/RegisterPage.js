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
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCepChange = async (event) => {
    const cep = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = response.data;

        if (!data.erro) {
          setUser({
            ...user,
            cep: cep,
            address: data.logradouro,
            neighborhood: data.bairro,
            city: data.localidade,
            state: data.uf
          });
        } else {
          alert("CEP inválido");
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
      const response = await api.post('/register', user);
      console.log(response.data);
      setSuccessMessage('Cadastro realizado com sucesso!');
      toast.success('Cadastro realizado com sucesso!');
      navigate('/login-usuario', '/login-funionario');
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setErrorMessage('Erro ao cadastrar. Por favor, tente novamente.');
      toast.error('Erro ao cadastrar. Por favor, tente novamente.');
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
        <label htmlFor="name" className="block mb-2 text-recifeGold">Nome Completo</label>
        <input type="text" name="name" value={user.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} placeholder="Nome Completo" className="block w-full p-2 border rounded text-black" />

        <label htmlFor="email" className="block mb-2 text-recifeGold">E-mail</label>
        <input type="email" name="email" value={user.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} placeholder="Email" className="block w-full p-2 border rounded text-black" />

        <label htmlFor="cpf" className="block mb-2 text-recifeGold">CPF</label>
        <input type="text" name="cpf" value={user.cpf} onChange={(e) => setUserData({ ...userData, cpf: e.target.value })} placeholder="CPF" className="block w-full p-2 border rounded text-black" />

        <label htmlFor="cep" className="block mb-2 text-recifeGold">CEP</label>
        <input type="text" name="cep" value={user.cep} onChange={(e) => setUserData({ ...userData, cep: e.target.value })} placeholder="CEP" className="block w-full p-2 border rounded text-black" />

        <label htmlFor="address" className="block mb-2 text-recifeGold">Endereço</label>
        <input type="text" name="address" value={user.address} onChange={(e) => setUserData({ ...userData, address: e.target.value })} placeholder="Endereço" className="block w-full p-2 border rounded text-black" />

        <label htmlFor="bairro" className="block mb-2 text-recifeGold">Bairro</label>
        <input type="text" name="bairro" value={user.neighborhood} onChange={(e) => setUserData({ ...userData, neighborhood: e.target.value })} placeholder="Bairro" className="block w-full p-2 border rounded text-black" />

        <label htmlFor="city" className="block mb-2 text-recifeGold">Cidade</label>
        <input type="text" name="city" value={user.city} onChange={(e) => setUserData({ ...userData, city: e.target.value })} placeholder="Cidade" className="block w-full p-2 border rounded text-black" />

        <label htmlFor="state" className="block mb-2 text-recifeGold">Estado</label>
        <select name="state" value={user.state} onChange={(e) => setUserData({ ...userData, state: e.target.value })} placeholder="Estado" className="block w-full p-2 border rounded text-black">
          <option value="">Selecione um estado</option>
          {estados.map(estado => (
            <option key={estado.value} value={estado.value}>{estado.label}</option>
          ))}
        </select>

        <label htmlFor="phone" className="block mb-2 text-recifeGold">Telefone</label>
        <input type="text" name="phone" value={user.phone}onChange={(e) => setUserData({ ...userData, phone: e.target.value })} placeholder="Telefone" className="block w-full p-2 border rounded text-black" />

        <label htmlFor="matricula" className="block mb-2 text-recifeGold">Matrícula</label>
        <input type="text" name="matricula" value={user.matricula} onChange={(e) => setUserData({ ...userData, matricula: e.target.value })} placeholder="Matricula" className="block w-full p-2 border rounded text-black" />

        <label htmlFor="setor" className="block mb-2 text-recifeGold">Setor</label>
        <input type="text" name="setor" value={user.setor} onChange={(e) => setUserData({ ...userData, setor: e.target.value })} placeholder="Setor"   className="block w-full p-2 border rounded text-black" />

        <label htmlFor="password" className="block mb-2 text-recifeGold">Senha</label>
        <input type="password" name="password" value={user.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} placeholder="Senha" className="block w-full p-2 border rounded text-black" />

        <button type="submit" className="bg-recifeBlue text-recifeGold px-4 py-2 rounded w-full">Cadastrar</button>

        <div className="mt-6 text-center">
          <p className="mb-4 text-recifeGold">Conecte-se com:</p>
          <button className="bg-recifeBlue text-recifeGold px-4 py-2 rounded w-full mb-2" type="button" onClick={handleConectaRecifeClick}>Conecta Recife</button>
          <button className="bg-recifeBlue text-recifeGold px-4 py-2 rounded w-full" type="button" onClick={handleGovBrClick}>Gov.br</button>
        </div>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={false} // Desabilitar auto-close
        hideProgressBar={true} // Remover a barra de progresso
        newestOnTop
        closeOnClick={false} // Prevenir fechamento ao clicar
        draggable={false} // Prevenir o arrasto das notificações
        style={{
          width: "30%", // Ajuste para diminuir o tamanho da janela
          minWidth: "200px", // Largura mínima
          maxWidth: "300px", // Largura máxima
          top: "10%", // Posicionamento fixo no topo
          left: "50%", // Alinhar ao centro horizontalmente
          transform: "translateX(-50%)", // Centralizar no eixo X
          position: "center" // Tornar a posição fixa
          }}
        />
    </div>
  );
};

export default RegisterPage;
