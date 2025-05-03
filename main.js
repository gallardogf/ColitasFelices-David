// Carrusel automático
const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  const contenedor = document.querySelector('.carrusel-contenedor');
  contenedor.style.transform = `translateX(-${i * 100}%)`;
}

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 3000);