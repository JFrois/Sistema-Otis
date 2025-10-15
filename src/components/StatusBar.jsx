import React from 'react';
import '../styles/dashboard.css';
import { statusSteps } from '../data/mockData'; 

function StatusBar() {
  // Exemplo: definir qual passo está "ativo". Isso viria dos dados reais no futuro.
  const currentStatus = "Fabricação";
  const activeIndex = statusSteps.indexOf(currentStatus);

  return (
    <div className="status-bar-container">
      {statusSteps.map((step, index) => (
        <div
          key={step}
          className={`status-step ${index <= activeIndex ? 'active' : ''}`}
        >
          {step}
        </div>
      ))}
    </div>
  );
}

export default StatusBar;