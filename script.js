/* **************** Slider code start ******************** */

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider');
    const sliderMain = document.querySelector('.slider-main');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const newTransform = -currentIndex * 100;
    sliderMain.style.transform = `translateX(${newTransform}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
