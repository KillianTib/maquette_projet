const curseur = document.getElementById('slider');
const boutonPrecedent = document.getElementById('prev');
const boutonSuivant = document.getElementById('next');
const barreProgressionInterne = document.createElement('div');
barreProgressionInterne.classList.add('progress-bar-inner');
document.getElementById('progress-bar').appendChild(barreProgressionInterne);

const images = document.querySelectorAll('.slider-image');
const totalDiapositives = images.length;
const largeurDiapositive = images[0].offsetWidth;
const largeurCurseur = curseur.offsetWidth;
const largeurBarreProgression = document.querySelector('.progress-bar').offsetWidth;

let indexActuel = 0;

function mettreAJourBarreProgression() {
  const maxDefilement = curseur.scrollWidth - curseur.clientWidth;
  const defilementActuel = curseur.scrollLeft;

  const pourcentageProgression = (defilementActuel / maxDefilement) * 100;

  if (defilementActuel > 0) {
    barreProgressionInterne.style.display = 'block';  
  }

  const maxPositionCurseur = largeurBarreProgression - barreProgressionInterne.offsetWidth;
  const positionCurseur = (pourcentageProgression / 100) * maxPositionCurseur;

  barreProgressionInterne.style.left = `${Math.min(positionCurseur, maxPositionCurseur)}px`;
}

function mettreAJourCarrousel() {
  const diapositiveAMouvement = indexActuel * largeurDiapositive;
  curseur.scrollTo({ left: diapositiveAMouvement, behavior: 'smooth' });

  mettreAJourBarreProgression();
}

boutonPrecedent.addEventListener('click', () => {
  if (indexActuel > 0) {
    indexActuel--;
  }
  mettreAJourCarrousel();
});

boutonSuivant.addEventListener('click', () => {
  if (indexActuel < totalDiapositives - 1) {
    indexActuel++;
  }
  mettreAJourCarrousel();
});

curseur.addEventListener('scroll', mettreAJourBarreProgression);

mettreAJourCarrousel();
