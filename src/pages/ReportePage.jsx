import React from 'react';
// Corrigindo o caminho da importação para ser mais explícito
import Header from '../components/Header.jsx';

/**
 * Página de placeholder para a seção de Relatórios.
 */
function ReportsPage() {
    return (
        <div className="dashboard-container">
            <Header />
            <main className="dashboard-content">
                <h1>Página de Relatórios</h1>
                <p>Aqui ficará o conteúdo relacionado aos relatórios.</p>
            </main>
        </div>
    );
}

export default ReportsPage;

