import React from 'react';
import { Link } from 'react-router-dom';
import AccessibilityMenu from '../components/AccessibilityMenu';

const HomePage = () => {
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
          className="mx-auto"
          style={{
            width: "450px",
            height: "200px",
            border: "none",
            marginBottom: "20px"
          }}
        />
        <h1 className="text-3xl font-bold mb-8 text-recifeGold">Bem-vindo ao Cultiva Cursos</h1>
        <div className="space-y-4 w-3/4 max-w-md text-center">
          <Link
            to="/login"
            className="bg-recifeBlue text-recifeGold px-6 py-3 rounded-lg shadow-xl hover:bg-recifeGold hover:text-recifeBlue transition duration-300 block"
          >
            Acesso para Todos
          </Link>
          <Link
            to="/register"
            className="bg-recifeBlue text-recifeGold px-6 py-3 rounded-lg shadow-xl hover:bg-recifeGold hover:text-recifeBlue transition duration-300 block"
          >
            Cadastro para Interessados
          </Link>
        </div>
      </main>

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
        <p className="text-recifeGold">&copy; 2024 Prefeitura do Recife</p>
      </footer>
    </div>
  );
};

export default HomePage;
