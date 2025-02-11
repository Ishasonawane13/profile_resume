const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentSlide = 0;

function showSlide(n) {
    slider.style.transform = `translateX(-${n * 100}%)`; // Calculate the translation
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Wrap around to the beginning
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Wrap around to the end
    showSlide(currentSlide);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Optional: Auto-play
let autoPlayInterval;

function startAutoPlay() {
    if (!autoPlayInterval) { // Prevent multiple intervals
        autoPlayInterval = setInterval(nextSlide, 3000);
    }
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null; // Reset the interval variable
}

// Start auto-play when the page loads (optional)
startAutoPlay();

//Stop auto-play on hover (optional)
sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', stopAutoPlay);
sliderContainer.addEventListener('mouseleave', startAutoPlay);