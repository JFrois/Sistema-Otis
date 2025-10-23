// src/pages/DashboardPage.jsx

import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CasesGrid from '../components/CasesGrid';
import CaseDetailModal from '../components/CaseDetailModal';
import LoadingSpinner from '../components/LoadingSpinner';
import { casesData } from '../data/mockData';
import '../styles/dashboard.css';

function DashboardPage() {
  const [allCases, setAllCases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCase, setSelectedCase] = useState(null);

  useEffect(() => {
    console.log("Simulando busca de dados...");
    setTimeout(() => {
      setAllCases(casesData);
      setIsLoading(false);
      console.log("Dados carregados!");
    }, 1000);
  }, []);

  const filteredCases = useMemo(() => {
    return allCases.filter(c =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.client.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allCases, searchTerm]);

  const handleOpenModal = (caseItem) => setSelectedCase(caseItem);
  const handleCloseModal = () => setSelectedCase(null);

  // Esta função recebe o card atualizado do modal e atualiza a lista principal
  const handleUpdateCase = (updatedCase) => {
    setAllCases(prevCases =>
      prevCases.map(caseItem =>
        caseItem.id === updatedCase.id ? updatedCase : caseItem
      )
    );
    console.log("Caso atualizado:", updatedCase);
  };

  return (
    <div className="dashboard-container">
      <Header />
      <main className="dashboard-content">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <CasesGrid cases={filteredCases} onCardClick={handleOpenModal} />
          </>
        )}
      </main>

      {selectedCase && (
        <CaseDetailModal
          caseData={selectedCase}
          onClose={handleCloseModal}
          onCaseUpdate={handleUpdateCase}
        />
      )}
    </div>
  );
}

export default DashboardPage;