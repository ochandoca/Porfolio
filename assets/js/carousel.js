
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const dotsContainer = document.getElementById('carouselDots');

    // Crear los puntos
    items.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => moveSlideTo(index));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('span');

    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
            dots[i].classList.toggle('active-dot', i === index);
        });
    }

    function moveSlide(step) {
        currentIndex = (currentIndex + step + items.length) % items.length;
        showSlide(currentIndex);
    }

    function moveSlideTo(index) {
        currentIndex = index;
        showSlide(currentIndex);
    }

    window.moveSlide = moveSlide; // Para que funcione con los botones onclick

    setInterval(() => {
        moveSlide(1);
    }, 3000);

    showSlide(currentIndex);
});