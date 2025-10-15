import React from 'react';
import '../styles/dashboard.css';

function CaseCard({ caseData, onCardClick }) {
  return (
    <div className="case-card" onClick={() => onCardClick(caseData)}>
      <h4>{caseData.title}</h4>
      <p>{caseData.client}</p>
    </div>
  );
}
export default CaseCard;