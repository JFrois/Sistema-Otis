import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Registrando os elementos necessários para um gráfico de pizza
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
    // Dados para o gráfico de pizza
    const data = {
        labels: ['Equipe Alpha', 'Equipe Beta', 'Equipe Gamma'],
        datasets: [
            {
                label: 'Vendas por Equipe',
                data: [300, 150, 100], // Dados de exemplo
                backgroundColor: [
                    'rgba(0, 86, 179, 0.7)',  // Azul escuro
                    'rgba(0, 123, 255, 0.7)', // Azul primário
                    'rgba(108, 117, 125, 0.7)', // Cinza secundário
                ],
                borderColor: [
                    'rgba(0, 86, 179, 1)',
                    'rgba(0, 123, 255, 1)',
                    'rgba(108, 117, 125, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Opções para o gráfico de pizza
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Vendas por Equipe (Exemplo)',
                font: { size: 16 }
            },
        },
    };

    return <Pie data={data} options={options} />;
}

export default PieChart;