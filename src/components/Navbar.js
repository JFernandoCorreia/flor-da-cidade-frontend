import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();  // Pega a rota atual

  // Verifica se a rota atual é uma das rotas de Cadastro ou Login
  const showNavbar = location.pathname === '/register' ||
                     location.pathname === '/login-funcionario' ||
                     location.pathname === '/login-usuario';

  // Estado para controlar o menu de hambúrguer (mobile)
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna entre abrir e fechar o menu
  };

  return (
    showNavbar && (
      <nav className="bg-recifeBlue text-recifeGold p-4">
        <div className="container mx-auto flex justify-start items-center">
          
          <div className="text-lg font-bold mr-4">
            <Link to="/">Homepage</Link>
          </div>

          {/* Botão Hamburger para mobile */}
          <div className="md:hidden">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              onClick={toggleMenu}
              className="text-recifeGold focus:outline-none">
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>

          {/* Links da Navbar - visível apenas em telas maiores (md e acima) */}
          <div className="hidden md:flex space-x-4">
            {/* Lógica para mostrar os botões com base na página atual */}
            {location.pathname === '/login-funcionario' && (
              <>
                <Link className="hover:text-recifeLight font-bold text-lg mr-4" to="/login-usuario">Login de Usuário</Link>
                <Link className="hover:text-recifeLight font-bold text-lg mr-4" to="/register">Cadastrar</Link>
              </>
            )}
            {location.pathname === '/login-usuario' && (
              <>
                <Link className="hover:text-recifeLight font-bold text-lg mr-4" to="/login-funcionario">Login de Funcionário</Link>
                <Link className="hover:text-recifeLight font-bold text-lg mr-4" to="/register">Cadastrar</Link>
              </>
            )}
          </div>
        </div>

        {/* Menu Mobile - visível apenas se isOpen for verdadeiro */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link
              className="block text-recifeGold hover:text-recifeLight font-bold text-lg mr-4"
              to="/"
              onClick={toggleMenu}>Homepage</Link>

            {/* Mesma lógica para exibir os botões no mobile */}
            {location.pathname === '/login-funcionario' && (
              <>
                <Link
                  className="block text-recifeGold hover:text-recifeLight font-bold text-lg mr-4"
                  to="/login-usuario"
                  onClick={toggleMenu}>Login de Usuário</Link>
                <Link
                  className="block text-recifeGold hover:text-recifeLight font-bold text-lg mr-4"
                  to="/register"
                  onClick={toggleMenu}>Cadastrar</Link>
              </>
            )}
            {location.pathname === '/login-usuario' && (
              <>
                <Link
                  className="block text-recifeGold hover:text-recifeLight font-bold text-lg mr-4"
                  to="/login-funcionario"
                  onClick={toggleMenu}>Login de Funcionário</Link>
                <Link
                  className="block text-recifeGold hover:text-recifeLight font-bold text-lg mr-4"
                  to="/register"
                  onClick={toggleMenu}>Cadastrar</Link>
              </>
            )}
          </div>
        )}
      </nav>
    )
  );
}

export default Navbar;
