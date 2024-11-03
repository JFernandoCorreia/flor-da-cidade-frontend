import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();  // Pega a rota atual

  // Verifica se a rota atual é uma das rotas de Cadastro ou Login
  const showNavbar = location.pathname === '/register' || location.pathname === '/login';

  return (
    showNavbar && (
      <nav className="bg-recifeBlue text-recifeWhite p-4">
        <div className="container mx-auto flex justify-start items-center">
          <div className="text-lg font-bold mr-4">
            <Link to="/">Homepage</Link>
          </div>
        </div>
      </nav>

    )
  );
}

export default Navbar;