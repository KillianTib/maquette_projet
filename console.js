const carrousel = document.querySelector('.carrousel');
const images = document.querySelectorAll('.image-carrousel');

const slider = document.getElementById('slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let index = 4;

function updateCarrousel() {
  const containerWidth = document.querySelector('.conteneur-carrousel').offsetWidth;
  const centerOffset = (containerWidth - 210) / 2;
  const translation = -(index * 280) + centerOffset;


  carrousel.style.transition = 'transform 0.5s ease-in-out';
  carrousel.style.transform = `translateX(${translation}px)`;
}

images.forEach((image, i) => {
  image.addEventListener('click', () => {
    index = i;
    updateCarrousel();
  });
});

window.addEventListener('resize', () => {
  carrousel.style.transition = 'none';
  updateCarrousel();
});

updateCarrousel();

prevButton.addEventListener('click', () => {
  slider.scrollBy({ left: -300, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
  slider.scrollBy({ left: 300, behavior: 'smooth' });
});


