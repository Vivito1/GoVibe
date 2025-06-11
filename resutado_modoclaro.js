// darkmode.js

window.aplicarLightMode = function () {
  let styleTag = document.getElementById('lightmode-style');

  if (styleTag) {
    // Se já está ativado, remover e voltar para o dark
    styleTag.remove();
    localStorage.setItem('theme', 'dark');
  } else {
    // Aplica o modo claro
    const estiloGoVibe = `
      /* SEU CSS de MODO CLARO aqui */
      body {
        background-color: #fff;
        color: #222;
      }

      .card {
        background-color: #fff;
        color: #222;
      }

      .modal-content {
        background-color: #f9f9f9;
        color: #222;
      }

      header span,
      .card h2,
      .card strong,
      .close-modal,
      .modal-header h2,
      .modal-section h3 {
        color: #4d7c0f;
      }

      .modal-section {
        border-bottom: 1px solid #ccc;
      }

      .voltar-btn {
        background-color: #ddd;
        color: #0b1d0b;
      }

      .voltar-btn:hover {
        background-color: #bbb;
      }

      #alternar-modo {
        background-color: #ccc;
        color: #000;
      }

      #alternar-modo:hover {
        background-color: #bbb;
      }
    `;

    styleTag = document.createElement('style');
    styleTag.id = 'lightmode-style';
    styleTag.innerHTML = estiloGoVibe;
    document.head.appendChild(styleTag);

    localStorage.setItem('theme', 'light');
  }
};

// Evento do botão
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("alternar-modo");
  btn.addEventListener("click", window.aplicarLightMode);

  // Verifica o tema salvo
  const temaSalvo = localStorage.getItem('theme');
  if (temaSalvo === 'light') {
    window.aplicarLightMode();
  }
});
