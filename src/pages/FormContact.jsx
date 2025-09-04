import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init("14op60W9c1h0olQZa");

function FormularioContato() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceID = "service_ekgmlsj";
        const templateID = "template_00gm37s";

        emailjs.send(serviceID, templateID, formData)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Mensagem enviada com sucesso!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('FAILED...', error);
                alert('Falha ao enviar mensagem. Tente novamente.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact">
            <h2>Entre em contato</h2>
            <form id="form" onSubmit={handleSubmit}>
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
                <textarea
                    id="message"
                    name="message"
                    placeholder="Sua mensagem"
                    minLength="30"
                    maxLength="500"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                ></textarea>
                <button
                    id="enviar"
                    type="submit"
                    className="btn-default"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </section>
    );
}

export default FormularioContato;