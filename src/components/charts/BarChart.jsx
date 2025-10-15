import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Precisamos registrar todos os elementos que vamos usar no gráfico.
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BarChart() {
    // Opções de configuração do gráfico (títulos, responsividade, etc.)
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Leads por Origem (Exemplo)',
                font: { size: 16 }
            },
        },
    };

    // Dados que serão exibidos no gráfico
    const data = {
        labels: ['Website', 'Indicação', 'Feira', 'Anúncio', 'Outros'],
        datasets: [
            {
                label: 'Número de Leads',
                data: [12, 19, 3, 5, 2], // Dados de exemplo
                backgroundColor: 'rgba(0, 123, 255, 0.7)', // Azul primário com transparência
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    return <Bar options={options} data={data} />;
}

export default BarChart;