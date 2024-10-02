let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlidePosition() {
  const carrusel = document.querySelector('.carrusel');
  carrusel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(n) {
  currentSlide = (currentSlide + n + totalSlides) % totalSlides;
  updateSlidePosition();
}
