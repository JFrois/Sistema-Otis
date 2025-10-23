import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FeedbackMessage from '../components/FeedbackMessage';
import '../styles/styles.css';

import { casesData } from '../data/mockData.js';

function FormContact() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        projetoId: '',
        tipoFeedback: 'Dúvida', // Valor padrão
        area: 'Vendas',         // Valor padrão
        mensagem: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState({ message: '', type: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFeedback({ message: '', type: '' });

        console.log("Feedback Estruturado Enviado:", formData);

        setTimeout(() => {
            setFeedback({ message: 'Feedback enviado com sucesso! (Simulação)', type: 'success' });
            setFormData({ projetoId: '', tipoFeedback: 'Dúvida', area: 'Vendas', mensagem: '' });
            setIsSubmitting(false);

        }, 1000);
    };

    const handleGoBack = () => {
        navigate('/dashboard');
    };

    return (
        <main className="login-wrapper">
            <div className="login-card">
                <div className="card-header">
                    <h2>Registrar Feedback de Projeto</h2>
                    <p>Nos ajude a melhorar nossos processos e seu acompanhamento.</p>
                </div>

                <form id="form" onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label htmlFor="projetoId" style={{ fontSize: '0.8rem', color: '#6c757d', marginBottom: '5px', display: 'block' }}>
                            Selecione o Projeto:
                        </label>
                        <select
                            id="projetoId"
                            name="projetoId"
                            value={formData.projetoId}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            required
                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        >
                            <option value="" disabled>-- Escolha um projeto --</option>
                            {/* Mapeia os dados do mockData para criar as opções */}
                            {casesData.map(caseItem => (
                                <option key={caseItem.id} value={caseItem.id}>
                                    {caseItem.title} (Cliente: {caseItem.client})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="input-group" style={{ textAlign: 'left', paddingBottom: '10px' }}>
                        <label style={{ fontSize: '0.8rem', color: '#6c757d', marginBottom: '10px', display: 'block' }}>
                            Tipo de Feedback:
                        </label>
                        <div>
                            <input type="radio" id="tipo-duvida" name="tipoFeedback" value="Dúvida" checked={formData.tipoFeedback === 'Dúvida'} onChange={handleChange} />
                            <label htmlFor="tipo-duvida" style={{ marginRight: '15px' }}> Dúvida</label>

                            <input type="radio" id="tipo-problema" name="tipoFeedback" value="Problema" checked={formData.tipoFeedback === 'Problema'} onChange={handleChange} />
                            <label htmlFor="tipo-problema" style={{ marginRight: '15px' }}> Problema</label>

                            <input type="radio" id="tipo-elogio" name="tipoFeedback" value="Elogio" checked={formData.tipoFeedback === 'Elogio'} onChange={handleChange} />
                            <label htmlFor="tipo-elogio"> Elogio</label>
                        </div>
                    </div>

                    {/* 6. ÁREA RELACIONADA (SELECT) */}
                    <div className="input-group">
                        <label htmlFor="area" style={{ fontSize: '0.8rem', color: '#6c757d', marginBottom: '5px', display: 'block' }}>
                            Área Relacionada:
                        </label>
                        <select
                            id="area"
                            name="area"
                            value={formData.area}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            required
                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        >
                            <option value="Vendas">Vendas</option>
                            <option value="Fabricação">Fabricação</option>
                            <option value="Instalação">Equipe de Instalação</option>
                            <option value="Qualidade">Qualidade</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>


                    <div className="input-group">
                        <label htmlFor="message" style={{ fontSize: '0.8rem', color: '#6c757d', marginBottom: '5px', display: 'block' }}>
                            Sua Mensagem:
                        </label>
                        <textarea
                            id="message"
                            name="message" 
                            placeholder="Descreva seu feedback aqui..."
                            minLength="20"
                            maxLength="500"
                            value={formData.message}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            required
                            rows="4"
                            style={{ paddingTop: '12px', height: 'auto', width: '100%', boxSizing: 'border-box' }}
                        ></textarea>
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Enviando...' : 'Enviar Feedback'}
                    </button>

                    <button
                        type="button"
                        onClick={handleGoBack}
                        style={{ marginTop: '10px', backgroundColor: '#6c757d' }}
                    >
                        Voltar para Dashboard
                    </button>
                </form>

                <div className="card-footer">
                    <FeedbackMessage message={feedback.message} type={feedback.type} />
                </div>
            </div>
        </main>
    );
}

export default FormContact;