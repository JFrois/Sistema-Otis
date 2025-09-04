import React from 'react';

// Aceita 'props' para exibir informações dinâmicas no futuro
function CaseCard({ title, id }) {
  return (
    <div className="case-card">
      <p className="case-id">{id || 'ID do Caso'}</p>
      <h4 className="case-title">{title || 'Título do Caso'}</h4>
    </div>
  );
}

export default CaseCard;