import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage.jsx';
import CreateAccountPage from './pages/CreateAccountPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';

function App() {
  // Estado para armazenar a lista de usuários cadastrados
  const [users, setUsers] = useState([]);
  // Estado para controlar se o usuário está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Adiciona um novo usuário à lista de usuários.
   * @param {object} newUser - O novo usuário a ser adicionado.
   */
  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    // Em uma aplicação real, você faria validações adicionais aqui
    return true;
  };

  /**
   * Processa o login do usuário.
   * @param {object} credentials - As credenciais do usuário (email, senha).
   */
  const handleLogin = (credentials) => {
    const foundUser = users.find(
      user => user.email === credentials.email && user.password === credentials.password
    );

    if (foundUser) {
      setIsAuthenticated(true);
      console.log('Login bem-sucedido!');
      return true;
    } else {
      console.error('Falha no login: credenciais inválidas.');
      return false;
    }
  };

  // O 'return' renderiza as rotas da aplicação
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage onLogin={handleLogin} />}
      />
      <Route
        path="/criar-conta"
        element={<CreateAccountPage onAddUser={handleAddUser} />}
      />

      <Route
        path="/dashboard"
        element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />}
      />

      <Route
        path="*"
        element={<Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
