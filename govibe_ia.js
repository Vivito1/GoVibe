document.getElementById("quizForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const respostas = Object.fromEntries(formData.entries());

  const opcoesBinarias = [
    "orcamento_ate2000", "orcamento_2000_5000", "orcamento_5000_10000", "orcamento_mais10000",
    "duracao_curta", "duracao_media", "duracao_longa", "duracao_muito_longa",
    "clima_frio", "clima_ameno", "clima_quente", "clima_arido",
    "paisagem_montanha", "paisagem_praia", "paisagem_historica", "paisagem_moderna",
    "estilo_descanso", "estilo_cultura", "estilo_aventura", "estilo_gastronomia",
    "idioma_portugues", "idioma_ingles", "idioma_espanhol", "idioma_qualquer",
    "regiao_america", "regiao_europa", "regiao_asia", "regiao_africa_oceania",
    "cultura_local_parecida", "cultura_local_diferente", "cultura_local_forte", "cultura_local_misturada",
    "interesse_cultura_alto", "interesse_cultura_medio", "interesse_cultura_baixo", "interesse_cultura_nenhum",
    "fama_pais_famoso", "fama_pais_diferente", "fama_pais_equilibrado", "fama_pais_tanto_faz",
    "comida_exotica", "comida_familiar", "comida_variada", "comida_indiferente",
    "liberdade_aberta", "liberdade_regras", "liberdade_visual", "liberdade_evitar",
    "companhia_sozinho", "companhia_casal", "companhia_familia", "companhia_amigos"
  ];

  const binarios = {};
  opcoesBinarias.forEach(op => binarios[op] = 0);

  for (let campo in respostas) {
    const valor = respostas[campo];
    const chaveFinal = `${campo}_${valor}`;
    if (binarios.hasOwnProperty(chaveFinal)) {
      binarios[chaveFinal] = 1;
    }
  }

  const preferencias = {
    idioma: respostas.idioma,
    continente: respostas.regiao,
    cultura: respostas.cultura_local,
    orcamento: respostas.orcamento
  };

  try {
    const response = await fetch("http://localhost:5000/prever", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        binarios,
        preferencias
      })
    });

    const data = await response.json();

    if (data.destinos && data.destinos.length > 0) {
      localStorage.setItem("paisesRecomendados", JSON.stringify(data.destinos));
      localStorage.setItem("motivoRecomendado", data.mensagem);

      window.location.href = "resultado.html"; // redireciona para a tela de resultados
    } else {
      alert(`Perfil: ${data.perfil}. Nenhum país encontrado com essas preferências.`);
    }


  } catch (err) {
    console.error("Erro ao enviar dados:", err);
    alert("Erro ao conectar com a API.");
  }
});
