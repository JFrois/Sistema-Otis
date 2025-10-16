import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage.jsx';
import CreateAccountPage from './pages/CreateAccountPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ReportePage from './pages/ReportePage.jsx';
import FormContact from './pages/FormContact.jsx';

function App() {
  const [users, setUsers] = useState([{ email: 'admin@otis.com', password: 'admin' }]);

  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

  const handleAddUser = (newUser) => {
    if (users.some(user => user.email === newUser.email)) {
      return false;
    }
    setUsers(prevUsers => [...prevUsers, newUser]);
    return true;
  };

  const handleLogin = (credentials) => {
    const foundUser = users.find(
      user => user.email === credentials.email && user.password === credentials.password
    );

    if (foundUser) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    } else {
      return false;
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/criar-conta" element={<CreateAccountPage onAddUser={handleAddUser} />} />

      <Route
        path="/dashboard"
        element={isAuthenticated ? <DashboardPage onLogout={handleLogout} /> : <Navigate to="/login" />}
      />
      <Route
        path="/relatorios"
        element={isAuthenticated ? <ReportePage onLogout={handleLogout} /> : <Navigate to="/login" />}
      />

      <Route 
        path="/contato"
        element={isAuthenticated ? <FormContact onLogout={handleLogout} /> : <Navigate to="/login" />}
      />

      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
      />
    </Routes>
  );
}

export default App;