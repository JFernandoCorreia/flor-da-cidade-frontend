// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import AccessibilityMenu from '../components/AccessibilityMenu';

const HomePage = () => {
  return (
    <div className="relative h-screen flex flex-col">
      <header className="bg-recifeBlue p-4 shadow-lg">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          {/* Texto da Secretaria */}
          <div className="w-full sm:w-1/3 text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-recifeWhite font-bold text-lg">Secretaria de Agricultura Urbana</h1>
          </div>

          {/* Centralizar Flor da Cidade */}
          <div className="w-full sm:w-1/3 flex justify-center mb-4 sm:mb-0">
            <h1 className="text-recifeWhite text-2xl sm:text-4xl font-bold text-center">Flor da Cidade</h1>
          </div>

          <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
            <AccessibilityMenu />
          </div>
        </div>
      </header>

      {/* Corpo principal */}
      <main className="flex-grow flex flex-col items-center justify-center bg-white bg-opacity-80 p-4 sm:p-8 rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/baoba3.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-recifeWhite">Bem-vindo ao Cultiva Cursos</h1>
        <div className="space-y-4 w-full sm:w-3/4 max-w-md text-center">
          <Link to="/login" className="bg-recifeBlue text-recifeWhite px-4 sm:px-6 py-3 rounded-lg shadow-xl hover:bg-recifeGold hover:text-recifeBlue transition duration-300 block">
            Acesso para Todos
          </Link>
          <Link to="/register" className="bg-recifeBlue text-recifeWhite px-4 sm:px-6 py-3 rounded-lg shadow-xl hover:bg-recifeGold hover:text-recifeBlue transition duration-300 block">
            Cadastro para Interessados
          </Link>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-recifeBlue p-4 shadow-lg flex flex-col sm:flex-row justify-center items-center relative">
        {/* Redes sociais */}
        <div className="flex justify-center space-x-4 mb-4 sm:mb-0">
          {/* ... Links de redes sociais ... */}
        </div>

        {/* Texto centralizado */}
        <div className="flex items-center space-x-4 text-center">
          <p className="text-recifeWhite">&copy; 2024 Prefeitura do Recife</p>
          <img src={`${process.env.PUBLIC_URL}/images/transferir7.png`} alt="Prefeitura do Recife" className="w-16 h-auto" />
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
