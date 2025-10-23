import React from 'react';
import Header from '../components/Header.jsx';
import BarChart from '../components/charts/BarChart.jsx';
import PieChart from '../components/charts/PieChart.jsx';
import '../styles/reporte.css';

import { casesData } from '../data/mockData.js';

function ReportePage() {

    const hoje = new Date();
    const totalAtivos = casesData.filter(c => c.status !== "Pós-venda").length;
    const projetosAtrasados = casesData.filter(c =>
        c.status !== "Pós-venda" && new Date(c.dataPrevista) < hoje
    ).length;
    const projetosEmDia = totalAtivos - projetosAtrasados;

    const kpiPrazoData = {
        labels: ['Em Dia', 'Atrasados'],
        datasets: [
            {
                label: 'Status dos Projetos Ativos',
                data: [projetosEmDia, projetosAtrasados],
                backgroundColor: ['#4caf50', '#f44336'], // Verde e Vermelho
            },
        ],
    };

    // --- KPI de Custo (Cálculo) ---
    const projetosConcluidos = casesData.filter(c => c.status === "Pós-venda");

    const mediaCustoReal = projetosConcluidos.length > 0
        ? projetosConcluidos.reduce((acc, c) => acc + c.details.custoFinal, 0) / projetosConcluidos.length
        : 0;

    const mediaOrcamento = projetosConcluidos.length > 0
        ? projetosConcluidos.reduce((acc, c) => acc + c.details.orcamento, 0) / projetosConcluidos.length
        : 0;

    const kpiCustoData = {
        labels: ['Custo Médio dos Projetos Concluídos'],
        datasets: [
            {
                label: 'Orçado (R$)',
                data: [mediaOrcamento],
                backgroundColor: '#6c757d', // Cinza
            },
            {
                label: 'Realizado (R$)',
                data: [mediaCustoReal],
                backgroundColor: '#0d6efd', // Azul
            },
        ],
    };

    return (
        <div className="dashboard-container">
            <Header />
            <main className="dashboard-content">
                <h1>Relatórios e Análises</h1>
                <p>Acompanhe os principais indicadores de performance da sua operação.</p>

                <div className="reports-grid">

                    <div className="chart-widget">
                        <h3>KPI: Custo (Orçado vs. Realizado)</h3>
                        <BarChart chartData={kpiCustoData} />
                    </div>
                    <div className="chart-widget">
                        <h3>KPI: Prazo (Projetos Ativos)</h3>
                        <PieChart chartData={kpiPrazoData} />
                    </div>

                    <div className="chart-widget">
                    </div>

                </div>
            </main>
        </div>
    );
}

export default ReportePage;