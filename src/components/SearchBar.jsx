// src/components/SearchBar.jsx (Atualizado)
import React from 'react';
import '../styles/dashboard.css';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Pesquisar por título ou cliente..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
export default SearchBar;