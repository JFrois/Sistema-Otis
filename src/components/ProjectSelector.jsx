// src/components/ProjectSelector.jsx

import React from 'react';
import '../styles/project-selector.css';

function ProjectSelector({ projects, selectedProject, onProjectSelect }) {
  console.log("Projects no selector:", projects);
  
  return (
    <div className="project-selector-container">
      <label htmlFor="project-select" className="project-selector-label">
        Selecione o Projeto:
      </label>
      <select
        id="project-select"
        className="project-selector"
        value={selectedProject || ''}
        onChange={(e) => onProjectSelect(e.target.value || null)}
      >
        <option value="">Todos os projetos</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
      
      {projects.length === 0 && !selectedProject && (
        <p style={{ color: '#666', fontSize: '12px', marginTop: '5px' }}>
          Nenhum projeto encontrado nos dados
        </p>
      )}
    </div>
  );
}

export default ProjectSelector;