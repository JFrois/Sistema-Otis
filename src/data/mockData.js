
export const casesData = [
  {
    id: 1,
    title: "Elevador Ed. Paulista",
    client: "Acme Inc.",
    status: "Venda",
    subStatus: "Aguardando cliente", 
    responsavel: "Ana Silva (Vendas)", 
    dataInicio: "2025-10-01",
    dataPrevista: "2026-02-15",
    details: {
      tipo: "Gen2",
      orcamento: 150000.00,
      consultor: "Ana Silva",
      unidades: 2,
    }
  },
  {
    id: 2,
    title: "Escada Rolante Shopping Morumbi",
    client: "Global Media",
    status: "Venda",
    subStatus: "Não iniciado", 
    responsavel: "Ana Silva (Vendas)",
    dataInicio: "2025-11-01",
    dataPrevista: "2026-03-01",
    details: {
      tipo: "Escada Rolante 515",
      orcamento: 350000.00,
      consultor: "Ana Silva",
      unidades: 4,
    }
  },
  {
    id: 3,
    title: "Elevador Corp. Tower",
    client: "Universal Tech",
    status: "Fabricação",
    subStatus: "Em andamento", 
    responsavel: "Carlos Borges (Fábrica)",
    dataInicio: "2025-09-20",
    dataPrevista: "2025-12-10",
    details: {
      orcamento: 220000.00,
      unidades: 4,
      numeroPedido: "PED-8374B",
      etapaFabrica: "Montagem da cabine",
      progresso: 0.40 // 40%
    }
  },
  {
    id: 6,
    title: "Elevador Residencial",
    client: "Innovate LLC",
    status: "Fabricação",
    subStatus: "Aguardando Otis", 
    responsavel: "Carlos Borges (Fábrica)", 
    dataInicio: "2025-10-05",
    dataPrevista: "2026-01-20",
    details: {
      orcamento: 95000.00,
      unidades: 1,
      numeroPedido: "PED-8375C",
      etapaFabrica: "Corte de materiais",
      progresso: 0.10 // 10%
    }
  },
  {
    id: 4,
    title: "Manutenção Preventiva",
    client: "Lee Enterprises",
    status: "Instalação",
    subStatus: "Bloqueado", 
    responsavel: "Equipe Bravo (Campo)", 
    dataInicio: "2025-10-15",
    dataPrevista: "2025-10-30",
    details: {
      tecnicoLider: "Marcos Lira",
      etapaInstalacao: "Alinhamento dos trilhos",
      visitasRealizadas: 3,
      progresso: 0.65 // 65%
    }
  },
  {
    id: 7,
    title: "Inspeção Residencial",
    client: "Private Invest",
    status: "Qualidade",
    subStatus: "Não iniciado",
    responsavel: "Juliana Costa (Qualidade)",
    dataInicio: "2025-11-01",
    dataPrevista: "2025-11-05",
    details: {
      tipoInspecao: "Final",
      laudo: "Pendente",
      itensVerificados: 0,
      itensTotais: 50
    }
  },
  {
    id: 5,
    title: "Esteira Aeroporto",
    client: "Green Dot",
    status: "Pós-venda",
    subStatus: "Aguardando Otis",
    responsavel: "Suporte Nível 2",
    dataInicio: "2025-08-01",
    dataPrevista: "2025-08-30", 
    dataConclusao: "2025-08-28", 
    details: {
      dataEntrega: "2025-08-28",
      feedbackCliente: "Muito satisfeito.",
      garantiaAte: "2027-08-28",
      custoFinal: 195000.00,
    }
  },
  {
    id: 8,
    title: "Revisão Shopping",
    client: "Global Media",
    status: "Pós-venda",
    subStatus: "Em andamento",
    responsavel: "Suporte Nível 1", 
    dataInicio: "2025-11-10",
    dataPrevista: "2025-11-12",
    details: {
      tipoServico: "Revisão Semestral",
      tecnico: "Ricardo Alves",
    }
  }
];

// As 5 colunas no CasesGrid
export const statusSteps = ["Venda", "Fabricação", "Instalação", "Qualidade", "Pós-venda"];