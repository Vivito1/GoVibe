// Scroll suave e botão ativo
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });

  document.querySelectorAll(".btn").forEach(btn => btn.classList.remove("active"));
  const targetBtn = Array.from(document.querySelectorAll(".btn"))
    .find(btn => btn.innerText.toLowerCase().includes(id));
  if (targetBtn) targetBtn.classList.add("active");
}




// Sistema de etapas do formulário de pesquisa inteligente
const steps = document.querySelectorAll('.step');
const nextBtn = document.getElementById('nextStep');
const prevBtn = document.getElementById('prevStep');
const submitBtn = document.getElementById('submitForm');
const comentariosContainer = document.getElementById('comentarios');
const form = document.getElementById('quizForm');
const progressBar = document.getElementById('progressBar');
let currentStep = 0;

function showStep(index) {
  steps.forEach(step => {
    step.classList.remove('active');
    const msg = step.querySelector('.error-message');
    if (msg) msg.style.display = 'none';
    step.classList.remove('shake');
  });
  steps[index].classList.add('active');
  prevBtn.style.display = index > 0 ? 'inline-block' : 'none';
  nextBtn.style.display = index < steps.length - 1 ? 'inline-block' : 'none';
  submitBtn.style.display = index === steps.length - 1 ? 'inline-block' : 'none';


  const progressPercent = ((index + 1) / steps.length) * 100;
  if (progressBar) progressBar.style.width = `${progressPercent}%`;
}

function validateStep() {
  const current = steps[currentStep];
  const currentInputs = current.querySelectorAll('input');
  const isChecked = [...currentInputs].some(input => input.checked);

  let error = current.querySelector('.error-message');
  if (!error) {
    error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = 'Por favor, selecione uma opção antes de continuar.';
    current.appendChild(error);
  }

  if (!isChecked) {
    error.style.display = 'block';
    current.classList.add('shake');
    setTimeout(() => current.classList.remove('shake'), 400);
    return false;
  }

  error.style.display = 'none';
  return true;
}

nextBtn.addEventListener('click', () => {
  if (validateStep() && currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

form.addEventListener('submit', (e) => {
  if (!validateStep()) {
    e.preventDefault();
  }
});

showStep(currentStep);

let selectedRating = 0;
const stars = document.querySelectorAll('#ratingStars span');
const feedbackForm = document.getElementById('feedbackForm');
const respostaAPI = document.getElementById('respostaAPI');
const nomeInput = document.getElementById('nome');
const comentarioInput = document.getElementById('comentario');

function toggleMenu() {
  document.getElementById('menu').classList.toggle('active');
}

stars.forEach(star => {
  star.addEventListener('mouseover', () => highlightStars(star.dataset.value));
  star.addEventListener('mouseout', () => highlightStars(selectedRating));
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.dataset.value);
    highlightStars(selectedRating);
    document.getElementById('ratingStars').classList.remove('focus-ativo'); 
  });
});

function highlightStars(value) {
  stars.forEach(star => {
    const starValue = parseInt(star.dataset.value);
    star.classList.toggle('hover', starValue <= value);
    star.classList.toggle('selected', starValue <= value);
  });
}

// Envio do feedback
feedbackForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const comentario = comentarioInput.value.trim();
  const nome = nomeInput.value.trim() || 'Anônimo';

  if (selectedRating === 0 || comentario === '') {
    respostaAPI.textContent = 'Por favor, selecione uma nota e escreva um comentário.';
    return;
  }

  enviarBtn.disabled = true; // Desativa botão para evitar spam
  respostaAPI.textContent = 'Enviando...';

  try {
    const response = await fetch('https://api-govibe-feedback.glitch.me/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nota: selectedRating,
        comentario,
        nome 
      })
    });

    if (response.ok) {
      respostaAPI.textContent = 'Obrigado pelo seu feedback!';
      feedbackForm.reset();
      selectedRating = 0;
      highlightStars(0);
      carregarComentarios();
    } else {
      respostaAPI.textContent = 'Erro ao enviar. Tente novamente mais tarde.';
    }
  } catch (error) {
    respostaAPI.textContent = 'Falha na conexão com o servidor.';
  } finally {
    setTimeout(() => {
      enviarBtn.disabled = false;
      // respostaAPI.textContent = ''; // remova se quiser manter a mensagem
    }, 2000); // botão reativado após 2 segundos
  }
});



let todosComentarios = [];
let paginaAtual = 0;
const comentariosPorPagina = 4;

async function carregarComentarios() {
  try {
    const resposta = await fetch('https://api-govibe-feedback.glitch.me/api/feedback');
    const data = await resposta.json();

    todosComentarios = data.reverse();
    paginaAtual = 0;
    renderizarComentarios();
    calcularMediaAvaliacoes(todosComentarios);
    } catch (err) {
      comentariosContainer.innerHTML = '<p>Erro ao carregar comentários.</p>';
    }
  }

function renderizarComentarios() {
  comentariosContainer.innerHTML = '';

  if (todosComentarios.length === 0) {
    comentariosContainer.innerHTML = '<p>Sem comentários ainda.</p>';
    document.getElementById('paginacaoComentarios').style.display = 'none';
    return;
  }

  const inicio = paginaAtual * comentariosPorPagina;
  const fim = inicio + comentariosPorPagina;
  const comentariosPagina = todosComentarios.slice(inicio, fim);

comentariosPagina.forEach(comentario => {
  const estrelas = "★".repeat(comentario.nota) + "☆".repeat(5 - comentario.nota);
  const div = document.createElement('div');
  div.className = 'comentario';
  div.innerHTML = `
    <strong style="color: #a4e61d;">
      ${comentario.nome || 'Anônimo'} 
      <span style="color: #ffc107; font-size: 1rem;">(${estrelas})</span>
    </strong>
    <p>${comentario.comentario}</p>
  `;
  comentariosContainer.appendChild(div);
});


  // Controle dos botões
  document.getElementById('btnAnterior').disabled = paginaAtual === 0;
  document.getElementById('btnProximo').disabled = fim >= todosComentarios.length;
  document.getElementById('paginacaoComentarios').style.display = 'flex';
}

document.getElementById('btnAnterior').addEventListener('click', () => {
  if (paginaAtual > 0) {
    paginaAtual--;
    renderizarComentarios();
  }
});

document.getElementById('btnProximo').addEventListener('click', () => {
  if ((paginaAtual + 1) * comentariosPorPagina < todosComentarios.length) {
    paginaAtual++;
    renderizarComentarios();
  }
});

calcularMediaAvaliacoes(todosComentarios);

// Carrega ao iniciar
document.addEventListener('DOMContentLoaded', carregarComentarios);

document.getElementById('ratingStars').classList.add('focus-ativo');

function calcularMediaAvaliacoes(lista) {
  if (lista.length === 0) {
    document.getElementById('mediaEstrelas').innerHTML = '★ ★ ★ ★ ★';
    document.getElementById('mediaTexto').textContent = 'Ainda sem avaliações.';
    return;
  }

  const total = lista.reduce((acc, atual) => acc + (atual.nota || 0), 0);
  const media = total / lista.length;
  const estrelas = Math.round(media);

  const estrelasHTML = Array.from({ length: 5 }, (_, i) => {
    return i < estrelas ? '★' : '☆';
  }).join(' ');

  document.getElementById('mediaEstrelas').innerHTML = estrelasHTML;
  document.getElementById('mediaTexto').textContent = `Nota média ${media.toFixed(1)} - baseado em ${lista.length} avaliações`;
}

// Função para rolar suavemente até a seção
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80, // ajuste conforme altura do header
      behavior: 'smooth'
    });
  }
}

// Função para atualizar os botões de navegação com base na rolagem
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navButtons = document.querySelectorAll('.topo nav .btn');
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navButtons.forEach(button => {
    const target = button.getAttribute('onclick').match(/'(.+)'/)[1];
    if (target === currentSection) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
});
if (!window.govibeModalInitialized) {
  window.govibeModalInitialized = true;

  const saibaMaisBtns = document.querySelectorAll('.govibe-saiba-mais');
const modal = document.getElementById('govibe-modal');
const modalContent = document.getElementById('govibe-modal-content');
const modalTitle = document.getElementById('govibe-modal-title');
const modalMap = document.getElementById('govibe-map');
const modalDescricao = document.getElementById('govibe-description');
const modalMoeda = document.getElementById('govibe-moeda');
const modalClima = document.getElementById('govibe-clima');
const modalEstacao = document.getElementById('govibe-estacao');
const modalFuso = document.getElementById('govibe-fuso');
const modalClose = document.querySelector('.govibe-close');

const paises = {
  "Japão": {
    mapa: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!...' width='100%' height='100%' style='border:0;' allowfullscreen></iframe>",
    descricao: "Um país de rica cultura e tecnologia avançada, conhecido por templos antigos, jardins tranquilos e cidades vibrantes como Tóquio e Quioto.",
    moeda: "Iene japonês (JPY)",
    clima: "Primavera - 18ºC",
    estacao: "Março a maio",
    fuso: "12:45 (+9h)"
  },
  // Adicione outros países com o mesmo formato!
};

saibaMaisBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const pais = btn.getAttribute('data-pais');
    const dados = paises[pais];
    if (dados) {
      modal.style.display = 'flex';
      modalTitle.textContent = `Explore o destino: ${pais}`;
      modalMap.innerHTML = dados.mapa;
      modalDescricao.textContent = dados.descricao;
      modalMoeda.textContent = dados.moeda;
      modalClima.textContent = dados.clima;
      modalEstacao.textContent = dados.estacao;
      modalFuso.textContent = dados.fuso;
    }
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
  modalMap.innerHTML = '';
});
}

