import React from 'react';
import '../styles/dashboard.css'; 

// Função para pegar a classe CSS para cada sub-status
const getSubStatusClass = (subStatus) => {
  switch (subStatus) {
    case 'Aguardando cliente':
      return 'status-cliente';
    case 'Aguardando Otis':
      return 'status-otis';
    case 'Bloqueado':
      return 'status-bloqueado';
    case 'Em andamento':
      return 'status-andamento';
    case 'Não iniciado':
      return 'status-nao-iniciado';
    default:
      return '';
  }
};

// Função para formatar a data 
const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
};


function CaseCard({ caseData, onCardClick }) {
  const handleClick = () => {
    onCardClick(caseData);
  };

  return (
    <div className="case-card" onClick={handleClick}>

      <div className="case-card-substatus-wrapper">
        <span className={`case-card-substatus ${getSubStatusClass(caseData.subStatus)}`}>
          {caseData.subStatus}
        </span>
      </div>

      <h4>{caseData.title}</h4>
      <p className="case-card-client">{caseData.client}</p>

      <div className="case-card-details">
        <p>
          <strong>Responsável:</strong> {caseData.responsavel}
        </p>
        <p>
          <strong>Data Prevista:</strong> {formatDate(caseData.dataPrevista)}
        </p>

        {(caseData.status === 'Fabricação' || caseData.status === 'Instalação') && caseData.details.progresso && (
          <p>
            <strong>Progresso:</strong> {caseData.details.progresso * 100}%
          </p>
        )}
      </div>
    </div>
  );
}

export default CaseCard;