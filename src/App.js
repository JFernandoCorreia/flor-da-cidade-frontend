import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginFuncionarioPage from './pages/LoginFuncionarioPage';
import LoginUsuarioPage from './pages/LoginUsuarioPage';

function App() {
  return (
    <Router>
      <div className="relative h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login-funcionario" element={<LoginFuncionarioPage />} />
          <Route path="/login-usuario" element={<LoginUsuarioPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
