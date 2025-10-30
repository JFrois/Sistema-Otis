import React, { useState, useEffect } from 'react';
import '../styles/dashboard.css';

// Lista de status para o dropdown (Requisição 1)
const subStatusOptions = [
    "Não iniciado",
    "Em andamento",
    "Aguardando cliente",
    "Aguardando Otis",
    "Concluído",
    "Bloqueado"
];

function CaseDetailModal({ caseData, onClose, onCaseUpdate }) {
    const [formData, setFormData] = useState(caseData);

    useEffect(() => {
        setFormData(caseData);
    }, [caseData]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prevData => ({
                ...prevData,
                [parent]: {
                    ...prevData[parent],
                    [child]: value
                }
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    // Função para salvar as mudanças
    const handleSubmit = (e) => {
        e.preventDefault();
        onCaseUpdate(formData); 
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>
                    &times;
                </button>

                <form className="modal-form" onSubmit={handleSubmit}>
                    <h2>Editar Projeto</h2>

                    <div className="form-group">
                        <label htmlFor="subStatus">Status Atual:</label>
                        <select
                            id="subStatus"
                            name="subStatus"
                            value={formData.subStatus}
                            onChange={handleChange}
                        >
                            {subStatusOptions.map(status => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="title">Título do Projeto:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="client">Cliente:</label>
                        <input
                            type="text"
                            id="client"
                            name="client"
                            value={formData.client}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="responsavel">Responsável:</label>
                        <input
                            type="text"
                            id="responsavel"
                            name="responsavel"
                            value={formData.responsavel}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="dataPrevista">Data Prevista:</label>
                        <input
                            type="date"
                            id="dataPrevista"
                            name="dataPrevista"
                            value={formData.dataPrevista}
                            onChange={handleChange}
                        />
                    </div>

                    {formData.details.orcamento !== undefined && (
                        <div className="form-group">
                            <label htmlFor="details.orcamento">Orçamento (R$):</label>
                            <input
                                type="number"
                                id="details.orcamento"
                                name="details.orcamento"
                                value={formData.details.orcamento}
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    {formData.details.progresso !== undefined && (
                        <div className="form-group">
                            <label htmlFor="details.progresso">Progresso (0.0 a 1.0):</label>
                            <input
                                type="number"
                                id="details.progresso"
                                name="details.progresso"
                                step="0.01"
                                min="0"
                                max="1"
                                value={formData.details.progresso}
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <button type="submit" className="modal-save-button">
                        Salvar Alterações
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CaseDetailModal;