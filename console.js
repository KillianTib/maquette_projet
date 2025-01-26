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


const joursSemaine = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const joursDansMois = 30;

function toggleCalendar() {
  const calendrier = document.getElementById('calendrier');
  calendrier.style.display = calendrier.style.display === 'none' ? 'block' : 'none';
  genererCalendrier();
}

function genererCalendrier() {
  const corpsCalendrier = document.getElementById('corps-calendrier');
  corpsCalendrier.innerHTML = '';

  joursSemaine.forEach(jour => {
    const divJour = document.createElement('div');
    divJour.textContent = jour;
    corpsCalendrier.appendChild(divJour);
  });

  for (let i = 1; i <= joursDansMois; i++) {
    const divJour = document.createElement('div');
    divJour.textContent = i;

    const jourDeSemaine = (i - 1) % 7;
    if (jourDeSemaine >= 0 && jourDeSemaine <= 4) {
      divJour.classList.add('jour-ouvert');
    }

    const aujourdHui = new Date();
    if (
      aujourdHui.getDate() === i &&
      aujourdHui.getMonth() === 0 &&
      aujourdHui.getFullYear() === 2025
    ) {
      divJour.classList.add('aujourdhui');
    }

    corpsCalendrier.appendChild(divJour);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  genererCalendrier();
  const calendrierJaune = document.getElementById('calendrier-jaune');
  calendrierJaune.addEventListener('click', toggleCalendar);
});
