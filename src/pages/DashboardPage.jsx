import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CasesGrid from '../components/CasesGrid';
import CaseDetailModal from '../components/CaseDetailModal';
import LoadingSpinner from '../components/LoadingSpinner';
import ProjectSelector from '../components/ProjectSelector';
import ProjectProgress from '../components/ProjectProgress';
import { casesData } from '../data/mockData';
import '../styles/dashboard.css';

function DashboardPage() {
  const [allCases, setAllCases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    console.log("Simulando busca de dados...");
    setTimeout(() => {
      const casesWithProjectId = casesData.map(caseItem => ({
        ...caseItem,
        projectId: caseItem.projectId || `${caseItem.client} - ${caseItem.title}`,
        project: caseItem.project || `${caseItem.client} - ${caseItem.title}`,
        subStatus: caseItem.subStatus || 'Não iniciado'
      }));
      
      setAllCases(casesWithProjectId);
      setIsLoading(false);
    }, 1000);
  }, []);

  const projects = useMemo(() => {
    const projectMap = new Map();
    
    allCases.forEach(caseItem => {
      if (caseItem.projectId && caseItem.project) {
        projectMap.set(caseItem.projectId, caseItem.project);
      }
    });
    
    const projectsArray = Array.from(projectMap.entries()).map(([id, name]) => ({
      id,
      name
    })).sort((a, b) => a.name.localeCompare(b.name));
    
    return projectsArray;
  }, [allCases]);

  const projectCases = useMemo(() => {
    if (!selectedProject) return [];
    return allCases.filter(caseItem => caseItem.projectId === selectedProject);
  }, [selectedProject, allCases]);

  const getProjectOverallStatus = (cases) => {
    if (cases.length === 0) return 'Não iniciado';

    const subStatusCount = {};
    cases.forEach(caseItem => {
      const subStatus = caseItem.subStatus || 'Não iniciado';
      subStatusCount[subStatus] = (subStatusCount[subStatus] || 0) + 1;
    });

    console.log("Contagem de subStatus:", subStatusCount);

    const subStatusPriority = [
      'Concluído',
      'Bloqueado',
      'Aguardando Otis', 
      'Aguardando cliente',
      'Em andamento',
      'Não iniciado'
    ];

    for (let subStatus of subStatusPriority) {
      if (subStatusCount[subStatus]) {
        console.log("SubStatus geral determinado:", subStatus);
        return subStatus;
      }
    }

    return 'Não iniciado';
  };

  const selectedProjectStatus = useMemo(() => {
    if (!selectedProject || projectCases.length === 0) return null;
    
    const overallStatus = getProjectOverallStatus(projectCases);
    return overallStatus;
  }, [selectedProject, projectCases]);

  const selectedProjectName = useMemo(() => {
    if (!selectedProject) return null;
    const project = projects.find(p => p.id === selectedProject);
    return project ? project.name : selectedProject;
  }, [selectedProject, projects]);

  const filteredCases = useMemo(() => {
    let filtered = allCases;
    
    if (selectedProject) {
      filtered = filtered.filter(c => c.projectId === selectedProject);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(c =>
        c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (c.project && c.project.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return filtered;
  }, [allCases, searchTerm, selectedProject]);

  const handleOpenModal = (caseItem) => setSelectedCase(caseItem);
  const handleCloseModal = () => setSelectedCase(null);

  const handleUpdateCase = (updatedCase) => {
    setAllCases(prevCases =>
      prevCases.map(caseItem =>
        caseItem.id === updatedCase.id ? updatedCase : caseItem
      )
    );
  };

  return (
    <div className="dashboard-container">
      <Header />
      <main className="dashboard-content">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        <ProjectSelector
          projects={projects}
          selectedProject={selectedProject}
          onProjectSelect={setSelectedProject}
        />

        {selectedProject && selectedProjectStatus && projectCases.length > 0 && (
          <div className="progress-section">
            <ProjectProgress 
              currentStatus={selectedProjectStatus}
              projectName={selectedProjectName}
              totalCases={projectCases.length}
            />
          </div>
        )}

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="results-info">
              <p>Mostrando {filteredCases.length} caso(s)</p>
              {selectedProject && (
                <div>
                  <p>Projeto selecionado: <strong>{selectedProjectName}</strong></p>
                  <p className="project-stats">
                    Total de casos no projeto: <strong>{projectCases.length}</strong>
                  </p>
                </div>
              )}
            </div>
            
            {filteredCases.length === 0 ? (
              <div className="no-results">
                <h3>Nenhum caso encontrado</h3>
                <p>
                  {selectedProject 
                    ? `Nenhum caso encontrado para o projeto "${selectedProjectName}"`
                    : "Nenhum caso corresponde aos critérios de busca"
                  }
                </p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedProject(null);
                  }}
                  className="clear-filters-btn"
                >
                  Limpar Filtros
                </button>
              </div>
            ) : (
              <CasesGrid cases={filteredCases} onCardClick={handleOpenModal} />
            )}
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