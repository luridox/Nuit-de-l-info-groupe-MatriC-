// Déclarer une variable
let compteur = 0;

// Définir une fonction qui s'exécutera lors d'un clic
function incrementerCompteur() {
    compteur = compteur + 1;
    // Modifier le contenu d'une balise HTML (par exemple, un paragraphe avec l'id="affichage")
    document.getElementById("affichage").innerHTML = "Clics: " + compteur;
}

  const mot = document.getElementById('motMagique');
  const popup = document.getElementById('popupLien');
  const fermer = document.getElementById('btnFermer');

  // Quand on clique sur le mot
  mot.addEventListener('click', () => {
    popup.showModal();
  });

  // Quand on clique sur "Annuler"
  fermer.addEventListener('click', () => {
    popup.close();
  });

  // (Optionnel) Fermer si on clique à côté du pop-up
  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.close();
    }
  });




