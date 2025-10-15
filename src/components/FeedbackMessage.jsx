// src/components/FeedbackMessage.jsx
import React from 'react';
import '../styles/styles.css'; 

function FeedbackMessage({ message, type }) {
    if (!message) {
        return null; 
    }

    // Define a classe CSS com base no tipo de mensagem (success ou error)
    const messageClass = `feedback-message ${type}`;

    return (
        <div className={messageClass}>
            <p>{message}</p>
        </div>
    );
}

export default FeedbackMessage;