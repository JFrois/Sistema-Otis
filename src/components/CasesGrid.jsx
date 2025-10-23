import React from 'react';
import CaseCard from './CaseCard';
import '../styles/dashboard.css';
import { statusSteps } from '../data/mockData';


function CasesGrid({ cases, onCardClick }) {
  return (
    <div className="cases-grid-container">
      {/* 3. Mapeia sobre as 5 etapas (Venda, Fabricação, etc.) */}
      {statusSteps.map(status => (
        <section key={status} className="case-section">
          {/* 4. O título da coluna é o nome da etapa */}
          <h3>{status}</h3>
          <div className="cards-container">
            {cases
              // 5. Filtra os casos pelo status exato da coluna
              .filter(caseItem => caseItem.status === status)
              .map(caseItem => (
                <CaseCard key={caseItem.id} caseData={caseItem} onCardClick={onCardClick} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
export default CasesGrid;