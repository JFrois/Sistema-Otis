import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage.jsx";
import CreateAccountPage from "./pages/CreateAccountPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ReportePage from "./pages/ReportePage.jsx";
import FormContact from "./pages/FormContact.jsx";
import Perfil from "./pages/Perfil.jsx";

function App() {
  const [users, setUsers] = useState([
    { email: "admin@otis.com", password: "admin", nome: "Admin", cargo: "Admin", setor: "TI" },
  ]);

  // Recupera o estado de autenticação e o e-mail do usuário salvos
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");
  const [currentUserEmail, setCurrentUserEmail] = useState(localStorage.getItem("userEmail") || "");

  // Função para adicionar novo usuário
  const handleAddUser = (newUser) => {
    if (users.some((user) => user.email === newUser.email)) {
      return false;
    }
    setUsers((prevUsers) => [...prevUsers, newUser]);
    return true;
  };

  // Função de login
  const handleLogin = (credentials) => {
    const foundUser = users.find(
      (user) => user.email === credentials.email && user.password === credentials.password
    );

    if (foundUser) {
      setIsAuthenticated(true);
      setCurrentUserEmail(foundUser.email);

      // Salva no localStorage
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", foundUser.email);

      return true;
    } else {
      return false;
    }
  };

  // Função de logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUserEmail("");

    // Limpa localStorage
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
  };

  // Recupera o usuário logado (com base no email salvo)
  const currentUser = users.find((u) => u.email === currentUserEmail) || {
    nome: "Usuário",
    cargo: "Analista",
    setor: "Instalação",
  };

  return (
    <Routes>
      {/* Página de Login */}
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

      {/* Criação de conta */}
      <Route path="/criar-conta" element={<CreateAccountPage onAddUser={handleAddUser} />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? (
            <DashboardPage onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Relatórios */}
      <Route
        path="/relatorios"
        element={
          isAuthenticated ? (
            <ReportePage onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Contato */}
      <Route
        path="/contato"
        element={
          isAuthenticated ? (
            <FormContact onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Perfil */}
      <Route
        path="/perfil"
        element={
          isAuthenticated ? (
            <Perfil user={currentUser} onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Redirecionamento padrão */}
      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
      />
    </Routes>
  );
}

export default App;