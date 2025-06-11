
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.govibe-carousel-slide');
  const wrapper = document.querySelector('.govibe-carousel-wrapper');
  const prevBtn = document.querySelector('.govibe-prev');
  const nextBtn = document.querySelector('.govibe-next');
  let currentIndex = 2; // Começa no meio

  function updateCarousel() {
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndex);
    });

    const slideWidth = slides[0].offsetWidth + 16; // largura + margem
    const visibleWidth = wrapper.parentElement.offsetWidth;
    const totalWidth = slideWidth * slides.length;

    let offset = slideWidth * currentIndex - (visibleWidth - slideWidth) / 2;

    // Corrigir excesso de movimento (loop visual)
    if (offset < 0) offset = 0;
    if (offset > totalWidth - visibleWidth) offset = totalWidth - visibleWidth;

    wrapper.style.transform = `translateX(-${offset}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  updateCarousel();
});

const modal = document.getElementById('infoModal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const closeModal = document.querySelector('.govibe-close');

// Dados fictícios dos países
const paisesInfo = {
  'Brasil': 'Brasil é conhecido por suas praias, carnaval e rica biodiversidade.',
  'França': 'França é famosa pela Torre Eiffel, gastronomia e cultura.',
  'Japão': 'Japão oferece tecnologia avançada e tradição milenar.',
  'Itália': 'Itália encanta com sua arquitetura histórica e culinária.',
  'Canadá': 'Canadá é reconhecido por suas belezas naturais e qualidade de vida.'
};

// Adicionar evento aos botões "Saiba Mais"
document.querySelectorAll('.govibe-saiba-mais').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const nomePais = btn.parentElement.querySelector('h3').innerText;
    modalTitle.textContent = nomePais;
    modalDesc.textContent = paisesInfo[nomePais] || 'Informações ainda não disponíveis.';
    modal.style.display = 'block';
  });
});

// Fechar modal
closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => {
  if (e.target == modal) modal.style.display = 'none';
});
