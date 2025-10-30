// src/components/ProjectProgress.jsx

import React from 'react';
import '../styles/project-progress.css';

function ProjectProgress({ currentStatus, projectName, totalCases }) {
  const stages = [
    'Não iniciado',
    'Em andamento', 
    'Aguardando cliente',
    'Aguardando Otis',
    'Concluído'
  ];

  const normalizedStatus = currentStatus && stages.includes(currentStatus) 
    ? currentStatus 
    : 'Não iniciado';

  const currentStageIndex = stages.indexOf(normalizedStatus);

  const isBlocked = currentStatus === 'Bloqueado';

  return (
    <div className="project-progress-container">
      <div className="project-header">
        <h3 className="project-progress-title">
          Status do Projeto: <span className="project-name">{projectName}</span>
        </h3>
        {totalCases && (
          <div className="project-cases-count">
            {totalCases} caso{totalCases !== 1 ? 's' : ''} no projeto
          </div>
        )}
      </div>
      
      {!isBlocked && (
        <div className="progress-stages">
          {stages.map((stage, index) => {
            const isCompleted = index < currentStageIndex;
            const isActive = index === currentStageIndex;
            const isFuture = index > currentStageIndex;

            return (
              <div
                key={stage}
                className={`progress-stage ${isActive ? 'active' : ''} ${
                  isCompleted ? 'completed' : ''
                } ${isFuture ? 'future' : ''}`}
              >
                <div className="stage-indicator">
                  {isCompleted ? '✓' : index + 1}
                </div>
                <span className="stage-label">{stage}</span>
                {isActive && (
                  <div className="current-stage-marker">Atual</div>
                )}
              </div>
            );
          })}
        </div>
      )}
      
      {isBlocked && (
        <div className="blocked-status">
          <div className="blocked-icon">⛔</div>
          <div className="blocked-message">
            <strong>Projeto Bloqueado</strong>
            <p>Este projeto requer atenção especial antes de continuar</p>
          </div>
        </div>
      )}
      
      <div className="status-info-container">
        <div className="current-status-info">
          Status atual: <strong>{normalizedStatus}</strong>
          {isBlocked && <span className="blocked-badge">BLOQUEADO</span>}
        </div>
        <div className="progress-description">
          {isBlocked && "Projeto bloqueado - requer intervenção"}
          {!isBlocked && currentStageIndex === 0 && "Projeto ainda não iniciado"}
          {!isBlocked && currentStageIndex === 1 && "Projeto em desenvolvimento ativo"}
          {!isBlocked && currentStageIndex === 2 && "Aguardando feedback ou ação do cliente"}
          {!isBlocked && currentStageIndex === 3 && "Aguardando recursos ou aprovação interna"}
          {!isBlocked && currentStageIndex === 4 && "Projeto concluído com sucesso"}
        </div>
      </div>
    </div>
  );
}

export default ProjectProgress;