AOS.init();

const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselDots = document.querySelector('.carousel-dots');

let activeIndex = 0;

function showSlide(index) {
  carouselItems.forEach((item, i) => {
    if (i === index) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function setActiveDot(index) {
  const dots = document.querySelectorAll('.carousel-dot');
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function createDots() {
  for (let i = 0; i < carouselItems.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('carousel-dot');
    if (i === activeIndex) {
      dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
      activeIndex = i;
      showSlide(activeIndex);
      setActiveDot(activeIndex);
    });
    carouselDots.appendChild(dot);
  }
}

createDots();
showSlide(activeIndex);