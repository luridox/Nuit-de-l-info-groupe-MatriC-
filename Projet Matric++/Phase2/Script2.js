// On sélectionne le titre
const titre = document.getElementById('titrePrincipal');

// On ajoute un écouteur d'événement "mouseenter" (survol de la souris)
titre.addEventListener('mouseenter', () => {
    titre.style.transform = "scale(1.1)"; // Le titre grossit un peu
    console.log("Tu es prêt à te battre !"); // Message caché dans la console (F12)
});

// Quand la souris quitte le titre
titre.addEventListener('mouseleave', () => {
    titre.style.transform = "scale(1)"; // Retour à la taille normale
});