const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;

// Botón siguiente
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) {
        counter = -1; // Reinicia el carrusel al inicio
    }
    counter++;
    carouselSlide.style.transform = `translateX(${-50 * counter}%)`;
});

// Botón anterior
prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        counter = carouselImages.length; // Reinicia el carrusel al final
    }
    counter--;
    carouselSlide.style.transform = `translateX(${-50 * counter}%)`;
});