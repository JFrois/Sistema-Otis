import React from 'react';
import '../styles/dashboard.css'; 

function CaseDetailModal({ caseData, onClose }) {
    const handleContentClick = (e) => e.stopPropagation();

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={handleContentClick}>
                <button className="modal-close-button" onClick={onClose}>&times;</button>
                <h2>{caseData.title}</h2>
                <p><strong>Cliente:</strong> {caseData.client}</p>
                <p><strong>Status Atual:</strong> {caseData.status}</p>
                <hr />
                <p>Aqui viriam mais detalhes sobre o caso, histórico, tarefas, etc.</p>
            </div>
        </div>
    );
}

export default CaseDetailModal;