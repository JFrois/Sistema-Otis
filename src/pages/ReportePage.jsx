import React from 'react';
import Header from '../components/Header.jsx';
import BarChart from '../components/charts/BarChart.jsx';
import PieChart from '../components/charts/PieChart.jsx';
import '../styles/reporte.css';

function ReportePage() {
    return (
        <div className="dashboard-container">
            <Header />
            <main className="dashboard-content">
                <h1>Relatórios e Análises</h1>
                <p>Acompanhe os principais indicadores de performance da sua operação.</p>

                <div className="reports-grid">
                    <div className="chart-widget">
                        <BarChart />
                    </div>
                    <div className="chart-widget">
                        <PieChart />
                    </div>
                    <div className="chart-widget">
                    </div>
                    <div className="chart-widget">
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ReportePage;