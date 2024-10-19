import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AccessibilityMenu from '../components/AccessibilityMenu';

const HomePage = () => {
  useEffect(() => {
    // Certifica-se de que Tawk_API esteja no escopo global
    window.Tawk_API = window.Tawk_API || {}; // Garante que Tawk_API está definido no escopo global
    window.Tawk_LoadStart = new Date();

    // Carregar o script do Tawk.to
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/your-property-id/default';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  }, []); // Executa apenas na montagem do componente

  return (
    <div className="relative h-screen flex flex-col">
      <header className="bg-recifeBlue p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-recifeGold font-bold text-lg">Secretaria de Agricultura Urbana</h1>
          </div>
          <h1 className="text-recifeGold text-4xl font-bold mx-auto text-center">Flor da Cidade</h1>
          <AccessibilityMenu />
        </div>
      </header>

    <main
      className="flex-grow flex flex-col items-center justify-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg bg-cover"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/baoba.jpg)` }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/images/transferir.png`}
        alt="Prefeitura do Recife"
        className="mx-auto" // Removido o tamanho fixo e centrado
        style={{
          width: "450px", // Aumentar o tamanho da imagem conforme desejado
          height: "200px", // Manter a proporção da imagem
          border: "none", // Garantir que não haja bordas
          marginBottom: "20px" // Adicionar espaçamento se necessário
        }}
      />
      <h1 className="text-3xl font-bold mb-8 text-recifeGold">Bem-vindo ao Cultiva Cursos</h1>
      <div className="space-y-4 w-3/4 max-w-md text-center">
        <Link
          to="/login-funcionario"
          className="bg-recifeBlue text-recifeGold px-6 py-3 rounded-lg shadow-xl hover:bg-recifeGold hover:text-recifeBlue transition duration-300 block"
        >
          Acesso para Funcionários
        </Link>
        <Link
          to="/login-usuario"
          className="bg-recifeBlue text-recifeGold px-6 py-3 rounded-lg shadow-xl hover:bg-recifeGold hover:text-recifeBlue transition duration-300 block"
        >
          Acesso para Usuários
        </Link>
        <Link
          to="/register"
          className="bg-recifeBlue text-recifeGold px-6 py-3 rounded-lg shadow-xl hover:bg-recifeGold hover:text-recifeBlue transition duration-300 block"
        >
          Novo Cadastro
        </Link>
      </div>
  </main>

      <footer className="bg-recifeBlue p-4 shadow-lg text-recifeGold text-center">
        <p>&copy; 2024 Prefeitura do Recife</p>
      </footer>
    </div>
  );
};

export default HomePage;
