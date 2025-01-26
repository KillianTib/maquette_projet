const carrousel = document.querySelector('.carrousel');
const images = document.querySelectorAll('.image-carrousel');

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

function changerImage(image) {
  document.getElementById('imagePrincipale').src = image;

  const boutons = document.querySelectorAll('.cercle-bouton');
  boutons.forEach((bouton) => bouton.classList.remove('active'));

  const boutonActif = Array.from(boutons).find(
    (bouton) => bouton.getAttribute('data-image') === image
  );
  if (boutonActif) {
    boutonActif.classList.add('active');
  }
}

window.onload = () => {
  const boutons = document.querySelectorAll('.cercle-bouton');

  boutons.forEach((bouton) => {
    const image = bouton.getAttribute('data-image');
    bouton.addEventListener('click', () => changerImage(image));
  });

  if (boutons.length > 0) {
    boutons[0].classList.add('active');
  }
};
