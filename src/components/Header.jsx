import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente de cabeçalho com os links de navegação para o painel.
 */
function Header() {
  return (
    <header className="dashboard-header">
      <nav className="nav-menu">
        {/* O botão "Início" leva para o painel principal (pesquisa) */}
        <Link to="/dashboard" className="nav-button">
          Início
        </Link>
        {/* O botão "Casos" também leva para o painel principal (pesquisa) */}
        <Link to="/dashboard" className="nav-button">
          Casos
        </Link>
        {/* O botão "Relatórios" leva para a página de relatórios */}
        <Link to="/relatorios" className="nav-button">
          Relatórios
        </Link>
      </nav>
      <div className="user-profile">
        {/* Este é o círculo para o perfil do usuário */}
      </div>
    </header>
  );
}

export default Header;
