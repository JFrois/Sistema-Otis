import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import FeedbackMessage from '../components/FeedbackMessage'; 
import '../styles/styles.css'; 

function FormularioContato() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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

        const serviceID = "service_ekgmlsj";
        const templateID = "template_00gm37s";

        emailjs.send(serviceID, templateID, formData)
            .then(() => {
                setFeedback({ message: 'Mensagem enviada com sucesso!', type: 'success' });
                setFormData({ name: '', email: '', message: '' }); 
            })
            .catch((error) => {
                console.error('FAILED...', error);
                setFeedback({ message: 'Falha ao enviar. Tente novamente mais tarde.', type: 'error' });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <main className="login-wrapper">
            <div className="login-card">
                <div className="card-header">
                    <h2>Entre em Contato</h2>
                    <p>Tem alguma dúvida ou sugestão? Nos envie uma mensagem!</p>
                </div>

                <form id="form" onSubmit={handleSubmit}>
                    {/* Campo Nome com Label */}
                    <div className="input-group">
                        <label htmlFor="name" style={{ display: 'none' }}>Nome</label>
                        <i className="fas fa-user"></i>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Seu nome"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            required
                        />
                    </div>
                    {/* Campo Email com Label */}
                    <div className="input-group">
                        <label htmlFor="email" style={{ display: 'none' }}>Email</label>
                        <i className="fas fa-envelope"></i>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Seu email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            required
                        />
                    </div>
                    {/* Campo Mensagem com Label */}
                    <div className="input-group">
                        <label htmlFor="message" style={{ display: 'none' }}>Mensagem</label>
                        <i className="fas fa-comment-dots" style={{ top: '20px' }}></i>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Sua mensagem..."
                            minLength="20"
                            maxLength="500"
                            value={formData.message}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            required
                            rows="5"
                            style={{ paddingTop: '12px', height: 'auto' }}
                        ></textarea>
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </button>
                </form>

                {/* 4. Renderizando o feedback aqui */}
                <div className="card-footer">
                    <FeedbackMessage message={feedback.message} type={feedback.type} />
                </div>
            </div>
        </main>
    );
}

export default FormularioContato;