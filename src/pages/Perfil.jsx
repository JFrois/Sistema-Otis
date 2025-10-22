import React, { useState, useEffect } from "react";
import "./perfil.css";

function Perfil({ user }) {
  const [dados, setDados] = useState({
    nome: user?.nome || "",
    setor: user?.setor || "",
    etapa: user?.etapa || "",
  });

  const [editavel, setEditavel] = useState(user?.cargo === "Admin");
  const [preenchido, setPreenchido] = useState(false);

  const handleChange = (e) => {
    if (!editavel) return;
    const { name, value } = e.target;
    setDados((prev) => ({ ...prev, [name]: value }));
  };

  const handleSalvar = () => {
    if (user?.cargo === "Analista" && preenchido) {
      Swal.fire("Atenção!", "Você já preencheu uma vez.", "warning");
      return;
    }

    setPreenchido(true);
    Swal.fire("Sucesso!", "Dados salvos com sucesso.", "success");
  };

  return (
    <div className="perfil-container">
      <h1>Perfil do Usuário</h1>

      <div className="perfil-form">
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={dados.nome}
          onChange={handleChange}
          disabled={!editavel}
        />

        <label>Setor:</label>
        <input
          type="text"
          name="setor"
          value={dados.setor}
          onChange={handleChange}
          disabled={!editavel}
        />

        <label>Etapa da Esteira:</label>
        <input
          type="text"
          name="etapa"
          value={dados.etapa}
          onChange={handleChange}
          disabled={!editavel}
        />

        <button onClick={handleSalvar}>Salvar</button>
      </div>
    </div>
  );
}

export default Perfil;
