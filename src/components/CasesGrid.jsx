import React from 'react';
import CaseCard from './CaseCard';
import '../styles/dashboard.css';
import { statusSteps } from '../data/mockData';

function CasesGrid({ cases, onCardClick }) { 
  return (
    <div className="cases-grid-container">
      {statusSteps.map(status => (
        <section key={status} className="case-section">
          <h3>{status}</h3>
          <div className="cards-container">
            {cases
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