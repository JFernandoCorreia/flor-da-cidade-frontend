import React from 'react';
import { Link } from 'react-router-dom';
import AccessibilityMenu from '../components/AccessibilityMenu';

const HomePage = () => {
  return (
    <div className="relative h-screen flex flex-col">
      <header className="bg-recifeBlue p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Texto da Secretaria */}
          <div className="w-1/3">
            <h1 className="text-recifeWhite font-bold text-lg">Secretaria de Agricultura Urbana</h1>
          </div>

          {/* Centralizar Flor da Cidade */}
          <div className="w-1/3 flex justify-center">
            <h1 className="text-recifeWhite text-4xl font-bold text-center">Flor da Cidade</h1>
          </div>
  
          <div className="w-1/3 flex justify-end">
            <AccessibilityMenu />
          </div>
        </div>
      </header>

      {/* Corpo principal */}
      <main
        className="flex-grow flex flex-col items-center justify-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/baoba3.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        
        <h1 className="text-3xl font-bold mb-8 text-recifeWhite">Bem-vindo ao Cultiva Cursos</h1>
        <div className="space-y-4 w-3/4 max-w-md text-center">
          <Link
            to="/login"
            className="bg-recifeBlue text-recifeWhite px-6 py-3 rounded-lg shadow-xl hover:bg-recifeGold hover:text-recifeBlue transition duration-300 block"
          >
            Acesso para Todos
          </Link>
          <Link
            to="/register"
            className="bg-recifeBlue text-recifeWhite px-6 py-3 rounded-lg shadow-xl hover:bg-recifeGold hover:text-recifeBlue transition duration-300 block"
          >
            Cadastro para Interessados
          </Link>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-recifeBlue p-4 shadow-lg flex justify-center items-center relative">
        {/* Redes sociais à direita */}
        <div className="absolute right-4 flex space-x-4">
          <a href="https://www.facebook.com/prefeituradorecife" target="_blank" rel="noopener noreferrer">
            <img src="/images/Facebook_logo.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/prefeiturarecife/" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.jpeg" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://x.com/prefrecife" target="_blank" rel="noopener noreferrer">
            <img src="/images/x.png" alt="X" className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com/channel/UCxMRq-Mv3UimnqOl6aRrM6Q" target="_blank" rel="noopener noreferrer">
            <img src="/images/youtube.png" alt="YouTube" className="w-6 h-6" />
          </a>
          <a href="https://www.flickr.com/photos/prefeituradorecife/" target="_blank" rel="noopener noreferrer">
            <img src="/images/flickr.png" alt="Flickr" className="w-6 h-6" />
          </a>
        </div>

        {/* Texto centralizado */}
        <div className="flex items-center space-x-4 text-center sm:text-left">
            <p className="text-recifeWhite">&copy; 2024 Prefeitura do Recife</p>
            <img
              src={`${process.env.PUBLIC_URL}/images/transferir7.png`}
              alt="Prefeitura do Recife"
              className="w-20 h-auto"
            />
          </div>
      </footer>
    </div>
  );
};

export default HomePage;
