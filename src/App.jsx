import React, { useState } from 'react';
// A importação do BrowserRouter foi removida, pois ele já está no main.jsx
import { Routes, Route, Navigate } from 'react-router-dom';

// Importe suas páginas, garantindo que os nomes dos arquivos estejam corretos
import LoginPage from './pages/LoginPage.jsx';
import CreateAccountPage from './pages/CreateAccountPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';

/**
 * Componente principal que gerencia a navegação e o estado da aplicação.
 */
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
   * Em uma aplicação real, validaria as credenciais contra a lista de usuários.
   * @param {object} credentials - As credenciais do usuário (email, senha).
   */
  const handleLogin = (credentials) => {
    // Lógica de validação (atualmente simplificada)
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
      {/* Rota para a página de Login */}
      {/* Passa a lista de usuários e a função de login como props */}
      <Route
        path="/login"
        element={<LoginPage onLogin={handleLogin} />}
      />

      {/* Rota para a página de Criar Conta */}
      {/* Passa a função de adicionar usuário como prop */}
      <Route
        path="/criar-conta"
        element={<CreateAccountPage onAddUser={handleAddUser} />}
      />

      {/* Rota protegida para o Dashboard */}
      {/* Só renderiza o Dashboard se isAuthenticated for true, caso contrário, redireciona para /login */}
      <Route
        path="/dashboard"
        element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />}
      />

      {/* Rota de fallback */}
      {/* Redireciona qualquer outra URL (incluindo a inicial "/") para a página de login */}
      <Route
        path="*"
        element={<Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
