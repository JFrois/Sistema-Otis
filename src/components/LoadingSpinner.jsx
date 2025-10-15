import React from 'react';
import '../styles/dashboard.css';

function LoadingSpinner() {
    return (
        <div className="spinner-container">
            <div className="spinner"></div>
            <p>Carregando dados...</p>
        </div>
    );
}

export default LoadingSpinner;