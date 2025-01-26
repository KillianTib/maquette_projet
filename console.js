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

curseur.addEventListener('scroll', mettreAJourBarreProgression);

mettreAJourCarrousel();

updateCarrousel();

document.addEventListener('DOMContentLoaded', () => {
  const boutonRecherche = document.getElementById('icon-loupe');
  const barreRecherche = document.querySelector('.barre-recherche');

  boutonRecherche.addEventListener('click', () => {
      barreRecherche.classList.toggle('actif');
  });
});


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

