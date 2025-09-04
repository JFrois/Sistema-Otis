import React from 'react';

function StatusBar() {
  // No futuro, você pode controlar o status ativo com estado (useState)
  const totalSteps = 8;

  return (
    <div className="status-bar-container">
      <p>Status por atividade</p>
      <div className="status-bar">
        {[...Array(totalSteps)].map((_, index) => (
           // Adiciona a classe 'active' para estilizar o progresso
          <div key={index} className={`step ${index < 3 ? 'active' : ''}`}></div>
        ))}
      </div>
    </div>
  );
}

export default StatusBar;