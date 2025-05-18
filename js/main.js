document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuIcon = document.getElementById('mobileMenuIcon');
  const nav = document.querySelector('.nav');

  if (mobileMenuIcon && nav) {
    mobileMenuIcon.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      mobileMenuIcon.classList.toggle('open');
    });
  }

  // Carrossel (mantido igual)
  const track = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');

  if (track && prevButton && nextButton) {
    const slides = Array.from(track.children);
    const totalSlides = slides.length;
    let currentSlide = 0;

    function updateCarousel() {
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
      currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
      updateCarousel();
    });

    nextButton.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    });

    let autoSlide = setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    }, 5000);

    [prevButton, nextButton].forEach(button => {
      button.addEventListener('click', () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
          currentSlide = (currentSlide + 1) % totalSlides;
          updateCarousel();
        }, 5000);
      });
    });

    updateCarousel();
  }

  // ✅ Destacar o link ativo dinamicamente
  const currentPath = window.location.pathname.split('/').pop(); // pega o nome do arquivo atual
  const menuLinks = document.querySelectorAll('.nav a');

  menuLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();

    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
});
