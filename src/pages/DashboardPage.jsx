import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import StatusBar from '../components/StatusBar';
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

  const filteredCases = allCases.filter(c =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = (caseItem) => setSelectedCase(caseItem);
  const handleCloseModal = () => setSelectedCase(null);

  return (
    <div className="dashboard-container">
      <Header />
      <main className="dashboard-content">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* A renderização condicional funciona da mesma forma */}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <StatusBar currentStatus="Fabricação" />
            <CasesGrid cases={filteredCases} onCardClick={handleOpenModal} />
          </>
        )}
      </main>

      {selectedCase && <CaseDetailModal caseData={selectedCase} onClose={handleCloseModal} />}
    </div>
  );
}

export default DashboardPage;