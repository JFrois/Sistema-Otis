import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./perfil.css";
import Header from "../components/Header";
import Swal from "sweetalert2";

function Perfil({ user, onLogout }) {
  const navigate = useNavigate();

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

  const handleLogoutClick = () => {
    Swal.fire({
      title: "Você tem certeza?",
      text: "Sua sessão será encerrada.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sim, sair!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Chama a função de logout passada pelo componente pai
        if (onLogout) onLogout();

        // Mostra alerta de confirmação e redireciona
        Swal.fire("Sessão encerrada!", "Você saiu do perfil.", "success").then(() => {
          navigate("/"); // Redireciona para a página inicial
        });
      }
    });
  };

  return (
    <div className="perfil-container">
      <Header />
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
        <button id="sair" onClick={handleLogoutClick}>
          Sair
        </button>
      </div>
    </div>
  );
}

export default Perfil;