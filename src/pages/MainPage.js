// MainPage.js
import React from 'react';
import AccessibilityMenu from '../components/AccessibilityMenu';

console.log("App 1 URL:", process.env.REACT_APP_APP_1_URL);
console.log("App 2 URL:", process.env.REACT_APP_APP_2_URL);
console.log("API URL:", process.env.REACT_APP_API_URL);

const MainPage = () => {
  return (
    <div className="relative h-screen flex flex-col">
      {/* Cabeçalho */}
      <header className="bg-recifeBlue bg-opacity-100 p-4 shadow-lg">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          {/* Logo da Secretaria */}
          <div className="w-full sm:w-1/3 text-center sm:text-left mb-4 sm:mb-auto">
            <img src={`${process.env.PUBLIC_URL}/images/logo-seau.png`} alt="Prefeitura do Recife" className="logo-seau" />
          </div>

          {/* Título Centralizado */}
          <div className="w-full sm:w-1/3 flex justify-center mb-4 sm:mb-0">
            <h1 className="text-3xl font-bold text-center text-recifeWhite">Projeto Flor da Cidade</h1>
          </div>

          {/* Menu de Acessibilidade */}
          <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
            <AccessibilityMenu />
          </div>
        </div>
      </header>

      {/* Corpo principal */}
      <main className="flex-grow bg-white bg-opacity-80 p-4 sm:p-8 rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/flores.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <h2 className="text-2xl font-bold text-center text-recifeWhite mb-4">Bem vindo ao Projeto Flor da Cidade</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Aplicação Hortas */}
          <div className="text-center">
            <img src={`${process.env.PUBLIC_URL}/images/hortas.jpeg`} alt="Hortas" className="w-full h-50 object-cover rounded" />
            <p className="text-lg mt-2 text-recifeWhite">Conheça o projeto Hortas, que promove o cultivo sustentável nas comunidades.</p>
            <a
              href={process.env.REACT_APP_APP_1_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-recifeBlue text-recifeWhite px-6 py-3 mt-2 rounded-lg shadow-md hover:bg-recifeGold hover:text-recifeBlue transition duration-300 inline-block"
            >
              Acessar Hortas
            </a>
          </div>

          {/* Aplicação Feiras */}
          <div className="text-center">
            <img src={`${process.env.PUBLIC_URL}/images/feiras.jpeg`} alt="Feiras" className="w-full h-50 object-cover rounded" />
            <p className="text-lg mt-2 text-recifeWhite">Explore as Feiras de produtos locais promovidas pela comunidade.</p>
            <a
              href={process.env.REACT_APP_APP_2_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-recifeBlue text-recifeWhite px-6 py-3 mt-2 rounded-lg shadow-md hover:bg-recifeGold hover:text-recifeBlue transition duration-300 inline-block"
            >
              Acessar Feiras
            </a>
          </div>

          {/* Aplicação Cultiva Cursos */}
          <div className="text-center">
            <img src={`${process.env.PUBLIC_URL}/images/cursos.jpeg`} alt="Cultiva Cursos" className="w-full h-50 object-cover rounded" />
            <p className="text-lg mt-2 text-recifeWhite">Participe dos cursos oferecidos pelo programa Cultiva Cursos.</p>
            <a
              href="/home" 
              className="bg-recifeBlue text-recifeWhite px-6 py-3 mt-2 rounded-lg shadow-md hover:bg-recifeGold hover:text-recifeBlue transition duration-300 inline-block"
            >
              Acessar Cultiva Cursos
            </a>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-recifeBlue bg-opacity-100 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center justify-center space-x-1 mx-auto">
            <p className="text-recifeWhite text-base md:text-lg">&copy; 2024 Prefeitura do Recife</p>
            <img src={`${process.env.PUBLIC_URL}/images/transferir7.png`} alt="Prefeitura do Recife" className="w-16 h-auto" />
          </div>

          {/* Redes Sociais */}
          <div className="flex items-center space-x-2 md:space-x-2">
            <a href="https://www.facebook.com/prefeituradorecife" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={`${process.env.PUBLIC_URL}/images/Facebook_logo.png`} alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="https://x.com/prefrecife" target="_blank" rel="noopener noreferrer" aria-label="X">
              <img src={`${process.env.PUBLIC_URL}/images/x.png`} alt="X" className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/prefeiturarecife/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={`${process.env.PUBLIC_URL}/images/instagram.jpeg`} alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/channel/UCxMRq-Mv3UimnqOl6aRrM6Q" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src={`${process.env.PUBLIC_URL}/images/youtube.png`} alt="YouTube" className="w-5 h-5" />
            </a>
            <a href="https://www.flickr.com/photos/prefeituradorecife/" target="_blank" rel="noopener noreferrer" aria-label="Flickr">
              <img src={`${process.env.PUBLIC_URL}/images/flickr.png`} alt="Flickr" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
