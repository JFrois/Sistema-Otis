// src/components/Header.jsx (Atualizado)
import React from 'react';
import { useLocation } from 'react-router-dom'; 
import '../styles/dashboard.css';

function Header() {
  const location = useLocation(); 

  return (
    <header className="dashboard-header">
      {/* ... (header-logo) ... */}
      <nav className="header-nav">
        <a
          href="/dashboard"
          className={location.pathname === '/dashboard' ? 'nav-link active' : 'nav-link'}
        >
          Dashboard
        </a>
        <a
          href="/relatorios"
          className={location.pathname === '/relatorios' ? 'nav-link active' : 'nav-link'}
        >
          Relatórios
        </a>
      </nav>
      {/* ... (header-user) ... */}
    </header>
  );
}

export default Header;