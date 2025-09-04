import React from 'react';
import CaseCard from './CaseCard';

function CasesGrid() {
  const sections = ['Vendas', 'Produção', 'Instalação', 'Relacionamento com cliente'];

  return (
    <div className="cases-grid-container">
      <h3>Informações dos casos por área</h3>
      {sections.map(section => (
        <section key={section} className="case-section">
          <h4>{section}</h4>
          <div className="cards-container">
            {/* Exemplo: Renderizando 5 cards por seção */}
            {[...Array(5)].map((_, index) => (
              <CaseCard key={index} id={`ID-${section.slice(0,3)}-00${index + 1}`} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default CasesGrid;