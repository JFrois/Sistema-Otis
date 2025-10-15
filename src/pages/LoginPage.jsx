import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FeedbackMessage from '../components/FeedbackMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (e) => {
    // 1. IMPEDE O RECARREGAMENTO DA PÁGINA
    e.preventDefault();

    setIsLoading(true);
    setFeedback({ message: '', type: '' });

    setTimeout(() => {
      const loginSuccess = onLogin(formData);

      if (loginSuccess) {
        // 2. SE O LOGIN ESTIVER CORRETO, NAVEGA PARA O DASHBOARD
        navigate('/dashboard');
      } else {
        setFeedback({ message: 'E-mail ou senha incorretos.', type: 'error' });
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <main className="login-wrapper">
      <div className="login-card">
        <div className="card-header">
          <h2>Acesso ao Sistema</h2>
          <p>Monitore suas instalações em tempo real.</p>
        </div>

        {/* 3. CONECTA O FORMULÁRIO À FUNÇÃO handleSubmit */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Seu usuário (admin@otis.com)"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              placeholder="Sua senha (admin)"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon
              icon={isPasswordVisible ? faEye : faEyeSlash}
              onClick={togglePasswordVisibility}
              style={{ cursor: 'pointer', position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: '#aaa' }}
            />
          </div>
          {/* 4. O BOTÃO É DO TIPO "SUBMIT" PARA ACIONAR O onSubmit DO FORMULÁRIO */}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="card-footer">
          <FeedbackMessage message={feedback.message} type={feedback.type} />
        </div>
      </div>
    </main>
  );
}

export default LoginPage;