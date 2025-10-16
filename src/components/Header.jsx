// src/components/Header.jsx (Melhorado)
import React from 'react';
// IMPORTANTE: Importar Link junto com useLocation
import { useLocation, Link } from 'react-router-dom'; 
import '../styles/dashboard.css';

function Header() {
  const location = useLocation(); 

  return (
    <header className="dashboard-header">
      {/* ... (header-logo) ... */}
      <nav className="header-nav">
        <Link // Usar Link ao invés de <a>
          to="/dashboard" // Usar 'to' ao invés de 'href'
          className={location.pathname === '/dashboard' ? 'nav-link active' : 'nav-link'}
        >
          Dashboard
        </Link>
        <Link
          to="/relatorios"
          className={location.pathname === '/relatorios' ? 'nav-link active' : 'nav-link'}
        >
          Relatórios
        </Link>
        <Link
          to="/contato" // Nova rota de contato
          className={location.pathname === '/contato' ? 'nav-link active' : 'nav-link'}
        >
          Contato
        </Link>
      </nav>
      {/* ... (header-user) ... */}
    </header>
  );
}

export default Header;