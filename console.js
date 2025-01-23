const carrousel = document.querySelector('.carrousel');
const images = document.querySelectorAll('.image-carrousel');

let index = 4;

function updateCarrousel() {
  const containerWidth = document.querySelector('.conteneur-carrousel').offsetWidth;
  const centerOffset = (containerWidth - 210) / 2;
  const translation = -(index * 290) + centerOffset;


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