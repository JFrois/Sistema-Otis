// src/components/Header.jsx (Corrigido)
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/dashboard.css';

function Header() {
  const location = useLocation();

  return (
    <header className="dashboard-header">
      <nav className="header-nav">
        <Link
          to="/dashboard"
          className={location.pathname === '/dashboard' ? 'nav-link active' : 'nav-link'}
        >
          Início
        </Link>
        <Link
          to="/relatorios"
          className={location.pathname === '/relatorios' ? 'nav-link active' : 'nav-link'}
        >
          Relatórios
        </Link>
        <Link
          to="/contato"
          className={location.pathname === '/contato' ? 'nav-link active' : 'nav-link'}
        >
          Contato
        </Link>
        <Link
          to="/perfil"
          className={location.pathname === '/perfil' ? 'nav-link active' : 'nav-link'}
        >
          Perfil
        </Link>
      </nav>
    </header>
  );
}

export default Header;