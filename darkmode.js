	window.aplicarLightMode = function() {
  let styleTag = document.getElementById('lightmode-style');
  if (styleTag) {
    // Se já existe, remove para desativar modo claro
    styleTag.remove();
  } else {
    // CSS do modo claro - coloque aqui seu CSS de modo claro
    const estiloGoVibe = `
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #fff; /* fundo branco */
  color: #222; /* texto escuro para contraste no claro */
  line-height: 1.6;
}

.govibe h1, .govibe h2, .govibe h3 {
  font-weight: 600;
}

.govibe .section-title {
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.govibe .section-title span {
  color: hsl(120, 70%, 65%);
}

.govibe .btn {
  background-color: hsl(120, 60%, 70%);
  color: #000;
  padding: 0.75rem 1.8rem;
  border-radius: 40px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  display: inline-block;
}

.govibe .btn:hover {
  background-color: hsl(120, 80%, 50%);
  color: #fff;
  transform: translateY(-2px);
}

/* Header */
.govibe .topo {
  background-color: hsl(120, 60%, 20%); /* verde mais escuro, menor saturação */
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25); /* sombra mais forte para separar bem */
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
}

.logo span {
  color: hsl(120, 80%, 70%);
}

.govibe .topo nav {
  display: flex;
  gap: 1rem;
}

.govibe .topo .btn {
  background: transparent;
  border: 1px solid hsl(120, 70%, 30%);
  color: hsl(120, 70%, 30%);
}

.govibe .topo .btn.active,
.govibe .topo .btn:hover {
  background-color: hsl(120, 80%, 50%);
  color: #fff;
}

.icons img {
  width: 24px;
  margin-left: 15px;
  cursor: pointer;
}

/* Hero */
.govibe .hero {
  background: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.7)), url('img/nature.png') no-repeat center center/cover;
  padding: 6rem 2rem;
  text-align: center;
}

.govibe .hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #222;
}

.govibe .hero h1 span {
  color: hsl(120, 70%, 65%);
}

.govibe .hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-inline: auto;
  color: #444;
}

/* Grid e Cards */
.govibe .grid-2, .grid-3 {
  display: grid;
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.govibe .grid-2 {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

/* Card padrão */
.card {
  background-color: #fff; /* fundo branco no card */
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 0 15px rgba(98, 218, 0, 0.1);
  transition: all 0.3s ease;
  color: #222;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 25px hsl(120, 80%, 50%);
  cursor: pointer;
}

/* Card específico de avaliação - fundo branco garantido */
.card.avaliacao {
  background-color: #fff !important; /* fundo branco obrigatório */
  color: #222 !important;
  box-shadow: 0 0 15px rgba(98, 218, 0, 0.15);
}

/* Listas de Benefícios */
.benefit-list {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-size: 1rem;
  color: #222;
}

.benefit-list li {
  background: #f9f9f9;
  padding: 1rem;
  border-left: 5px solid hsl(120, 70%, 65%);
  border-radius: 8px;
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
}

.benefit-list li strong {
  color: #000;
}

/* CTA */
.cta {
  background-color: hsl(120, 70%, 30%);
  color: #fff;
  text-align: center;
  padding: 1rem 2rem;
}

.cta h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #ddd;
}

/* Espaçamento entre seções */
.section {
  margin-top: 5rem;
}

.cta {
  margin-top: 4rem;
}

.govibe .topo button {
  cursor: pointer;
}

/* Ajustes para formulários, feedbacks e outros componentes */
.step-form .step {
  display: none;
  animation: fade 0.5s ease-in-out;
  padding: 2.5rem;
  max-width: 700px;
  margin: 2rem auto;
  background: linear-gradient(135deg, #fff, #f1f1f1);
  border: 1px solid #ddd;
  border-radius: 24px;
  box-shadow: 0 0 25px rgba(164, 230, 29, 0.08);
  position: relative;
  color: #222;
}

.step-form .step.active {
  display: block;
}

.step label {
  display: block;
  margin: 0.8rem 0;
  cursor: pointer;
  background-color: #fafafa;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  transition: all 0.2s ease-in-out;
  color: #222;
}

.step label:hover {
  background-color: #eee;
}

.step input[type="radio"],
.step input[type="checkbox"] {
  margin-right: 10px;
  transform: scale(1.1);
}

.step h3 {
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  color: hsl(120, 70%, 65%);
  text-align: center;
}

.step-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.error-message {
  color: #d9534f;
  font-size: 0.95rem;
  margin-top: 0.5rem;
  display: none;
  text-align: center;
}

.step.shake {
  animation: shake 0.4s;
}

.progress-bar-container {
  width: 100%;
  height: 10px;
  background-color: #eee;
  border-radius: 10px;
  overflow: hidden;
  margin: 1rem auto 2rem;
  max-width: 700px;
}

.progress-bar {
  height: 100%;
  width: 0%;
  background: linear-gradient(to right, hsl(120, 80%, 50%), hsl(120, 60%, 60%));
  transition: width 0.4s ease-in-out;
}

/* Rodapé */
.footer {
  background-color: hsl(120, 70%, 30%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 40px;
  flex-wrap: wrap;
  color: #fff;
}

.footer-item {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-family: sans-serif;
  gap: 10px;
}

.footer-item img {
  width: 24px;
  height: 24px;
}

/* Responsivo */
@media (max-width: 768px) {
  .govibe .hero h1 {
    font-size: 2.2rem;
  }

  .cta h2 {
    font-size: 1.6rem;
  }
}

/* Paginação */
.paginacao {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.paginacao .btn {
  background-color: hsl(120, 70%, 50%);
  color: #fff;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;
  font-weight: 600;
}

.paginacao .btn:hover {
  background-color: hsl(120, 80%, 60%);
}

.paginacao .btn.active {
  background-color: hsl(120, 80%, 60%);
  color: #000;
}

/* Animação de shake para erro */
@keyframes shake {
  0% { transform: translateX(0px); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0px); }
}

/* Fade para steps */
@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Estilo para Feedback Section */
.feedback-section {
  background-color: #fff !important; /* Fundo branco garantido */
  color: #222 !important; /* Texto escuro para contraste */
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 0 15px rgba(98, 218, 0, 0.1);
  transition: all 0.3s ease;
}

.feedback-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 25px hsl(120, 80%, 50%);
}

#feedbackForm textarea {
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  resize: vertical;
  font-size: 1rem;
  background: hsl(120, 60%, 85%); /* verde claro que combina com o resto do site */
  color: #000; /* texto preto */
  margin-bottom: 1rem;
}

#feedbackForm input[type="text"] {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 0.8rem;
  border-radius: 10px;
  background-color: hsl(120, 60%, 85%); /* verde claro que combina */
  color: #000; /* texto preto */
  border: none;
  font-size: 1rem;
}

#feedbackForm button {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  background: hsl(120, 60%, 70%); /* verde claro vibrante, combinando com o site */
  color: #000; /* texto preto */
  cursor: pointer;
  transition: 0.3s;
}

.comentarios-lista {
  margin-top: 2rem;
  border-top: 1px solid #ccc; /* borda suave */
  padding-top: 1.2rem;
}

.comentario {
  background-color: hsl(120, 60%, 92%); /* verde bem clarinho para contraste máximo */
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  color: #000; /* texto preto para ótima legibilidade */
}

.comentario strong {
  color: hsl(120, 40%, 35%); /* verde médio-escuro para destacar sem prejudicar a leitura */
  display: block;
  margin-bottom: 0.4rem;
}


.govibe-carousel-section {
  padding: 2rem;
  background-color:rgb(61, 119, 61); /* Fundo verde escuro elegante */
  text-align: center;
  color: #fff; /* texto branco para contraste */
}

.govibe-carousel {
  position: relative;
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
}

.govibe-carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease;
}

.govibe-carousel-slide {
  flex: 0 0 33.3333%;
  margin: 0 0.5rem;
  opacity: 0.6; /* levemente mais visível */
  transform: scale(0.9);
  transition: transform 0.5s, opacity 0.5s;
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6); /* sombra para destacar as imagens */
}

.govibe-carousel-slide.active {
  opacity: 1;
  transform: scale(1.08); /* maior para destacar ainda mais */
}

.govibe-carousel-slide img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 14px;
}

/* Faixa semitransparente na parte inferior da imagem */
.govibe-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6); /* mais escuro para maior legibilidade */
  color: #fff;
  text-align: center;
  padding: 0.6rem 0;
}

.govibe-saiba-mais {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.9); /* mais sólido */
  color: #000;
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 0.3rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.govibe-saiba-mais:hover {
  background-color: #fff;
  transform: translateY(-3px);
}

.govibe-overlay h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #a4e61d;
}

/* Botões das setas */
.govibe-carousel-controls {
  margin-top: 1rem;
}

.govibe-prev, .govibe-next {
  background-color:rgb(58, 216, 63); /* verde mais vibrante */
  color: #fff;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 50%;
  font-size: 1.4rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.govibe-prev:hover, .govibe-next:hover {
  background-color: #66bb6a;
  transform: scale(1.1);
}

.govibe-item {
  position: absolute;
  width: 300px;
  height: 100%;
  background: #66bb6a; /* Fundo verde escuro elegante */
  color:rgb(0, 0, 0);
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  opacity: 0.3;
  transition: all 0.5s ease;
  transform: translateX(0) scale(0.8);
}


#resultado,
#resultadoIA {
  color: #222;
  background-color: #fff;
}

.cta {
  background-color: hsl(120, 70%, 30%);
  color: #fff;
}

.cta .btn {
  background-color: hsl(84, 50%, 58%);
  color: #000;
}








    `;


 styleTag = document.createElement('style');
    styleTag.id = 'lightmode-style';
    styleTag.innerHTML = estiloGoVibe;
    document.head.appendChild(styleTag);
  }
}
