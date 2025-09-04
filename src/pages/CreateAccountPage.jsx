import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUser, faEnvelope, faEyeSlash, faCheck } from '@fortawesome/free-solid-svg-icons';

function CriarConta({ onAddUser }) {
    // Hooks agora estão DENTRO do componente
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        birthdate: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false,
        userType: '',
    });

    // Este useEffect lê o parâmetro da URL e atualiza o estado
    useEffect(() => {
        const userTypeFromURL = searchParams.get('tipo');
        if (userTypeFromURL) {
            setFormData(prevData => ({ ...prevData, userType: userTypeFromURL }));
        }
    }, [searchParams]);

    // Este useEffect é para a animação ScrollReveal
    useEffect(() => {
        if (window.ScrollReveal) {
            const sr = window.ScrollReveal({
                distance: '50px',
                duration: 2000,
                reset: false,
            });
            sr.reveal('#form_header', { origin: 'top' });
            sr.reveal('.input-box', { origin: 'bottom', interval: 100 });
            sr.reveal('.btn-default', { origin: 'bottom', delay: 500 });
        }
    }, []);


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validações
        if (formData.password !== formData.confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }
        if (!formData.terms) {
            alert("Você precisa aceitar os termos de uso.");
            return;
        }
        if (!formData.userType) {
            alert("Você precisa informar sua identificação: Gestor ou Analista");
            return;
        }

        const newUser = {
            email: formData.email,
            password: formData.password,
            userType: formData.userType
        };

        const wasUserAdded = onAddUser(newUser);

        if (wasUserAdded) {
            alert("Conta criada com sucesso!");
            if (formData.userType === 'Gestor') {
                navigate('/Gestor');
            } else {
                navigate('/Analista');
            }
        }
    };

    // O resto do seu JSX continua o mesmo
    return (
        <main className="form-container">
            <div className="form-header">
                <h1 className="form-title">Criar conta</h1>
                <Link to="/" className="btn-default">
                    <FontAwesomeIcon icon={faRightToBracket} />
                </Link>
            </div>

            <form className="form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <div className="input-box">
                        <label htmlFor="firstName" className="form-label">Primeiro nome</label>
                        <div className="input-field">
                            <input type="text" name="firstName" id="firstName" className="form-control" placeholder="Primeiro nome" value={formData.firstName} onChange={handleChange} required />
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                    <div className="input-box">
                        <label htmlFor="lastName" className="form-label">Último nome</label>
                        <div className="input-field">
                            <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Sobrenome" value={formData.lastName} onChange={handleChange} required />
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                    <div className="input-box">
                        <label htmlFor="birthdate" className="form-label">Nascimento</label>
                        <div className="input-field">
                            <input type="date" name="birthdate" id="birthdate" className="form-control" value={formData.birthdate} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="input-box">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <div className="input-field">
                            <input type="email" name="email" id="email" className="form-control" placeholder="exemplo@gmail.com" value={formData.email} onChange={handleChange} required />
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                    </div>
                    <div className="input-box">
                        <label htmlFor="password" className="form-label">Senha</label>
                        <div className="input-field">
                            <input type="password" name="password" id="password" className="form-control" placeholder="*******" value={formData.password} onChange={handleChange} required />
                            <FontAwesomeIcon icon={faEyeSlash} />
                        </div>
                    </div>
                    <div className="input-box">
                        <label htmlFor="confirmPassword" className="form-label">Confirmar senha</label>
                        <div className="input-field">
                            <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" placeholder="*******" value={formData.confirmPassword} onChange={handleChange} required />
                            <FontAwesomeIcon icon={faEyeSlash} />
                        </div>
                    </div>
                </div>

                <div className="checkbox-container">
                    <input type="checkbox" name="terms" id="terms" className="form-checkbox" checked={formData.terms} onChange={handleChange} />
                    <label htmlFor="terms" className="form-label">
                        Eu li e aceito os <a href="/termos-de-uso" target="_blank" rel="noopener noreferrer">termos de uso</a>
                    </label>
                </div>

                <div className="radio-group">
                    <p className="form-label">Identificação:</p>
                    <div className="radio-option">
                        <input type="radio" name="userType" id="gerente_vendas" value="gerente_vendas" checked={formData.userType === 'consumidor'} onChange={handleChange} />
                        <label htmlFor="consumidor" className="form-label">Gerente Vendas</label>
                    </div>
                    <div className="radio-option">
                        <input type="radio" name="userType" id="vendedor" value="vendedor" checked={formData.userType === 'consumidor'} onChange={handleChange} />
                        <label htmlFor="consumidor" className="form-label">Vendedor</label>
                    </div>
                    <div className="radio-option">
                        <input type="radio" name="userType" id="gerente_logistica" value="gerente_logistica" checked={formData.userType === 'consumidor'} onChange={handleChange} />
                        <label htmlFor="consumidor" className="form-label">Gerente Logística</label>
                    </div>
                    <div className="radio-option">
                        <input type="radio" name="userType" id="logistica" value="logistica" checked={formData.userType === 'consumidor'} onChange={handleChange} />
                        <label htmlFor="consumidor" className="form-label">Logística</label>
                    </div>
                    <div className="radio-option">
                        <input type="radio" name="userType" id="gerente_producao" value="gerente_producao" checked={formData.userType === 'consumidor'} onChange={handleChange} />
                        <label htmlFor="consumidor" className="form-label">Gerente de Produção</label>
                    </div>
                    <div className="radio-option">
                        <input type="radio" name="userType" id="producao" value="producao" checked={formData.userType === 'agricultor'} onChange={handleChange} />
                        <label htmlFor="agricultor" className="form-label">Produção</label>
                    </div>
                </div>

                <button type="submit" className="btn-default">
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Criar conta</span>
                </button>
            </form>
        </main>
    );
}

export default CriarConta;