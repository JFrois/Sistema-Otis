import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import StatusBar from '../components/StatusBar';
import CasesGrid from '../components/CasesGrid';
import '../styles/dashboard.css'; // Importe o CSS específico

function DashboardPage() {
  return (
    <div className="dashboard-container">
      <Header />
      <main className="dashboard-content">
        <SearchBar />
        <StatusBar />
        <CasesGrid />
      </main>
    </div>
  );
}

export default DashboardPage;