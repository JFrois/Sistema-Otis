import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importe o BrowserRouter

import App from './App.jsx'; // O componente principal com as rotas

// Seus arquivos de estilo globais
import './styles/styles.css';
import './styles/colors.css';

// Adicione o novo CSS do dashboard se quiser que ele seja global
import './styles/dashboard.css';


// Encontra a div com id 'root' no seu index.html
const rootElement = document.getElementById('root');

// Cria a raiz da aplicação React
const root = ReactDOM.createRoot(rootElement);

// Renderiza a aplicação
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);