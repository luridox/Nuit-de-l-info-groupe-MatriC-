function snake_score() {
    // Récupération du compteur dans localStorage (0 par défaut)
    let score = localStorage.getItem("pommesTrouvees");
    if (!score) score = 0;

	window.addEventListener("beforeunload", () => {
		localStorage.removeItem("pommesTrouvees");
	});

    // On met à jour l'affichage
    document.getElementById("compteur").textContent = score;

    // Récupérer toutes les pommes (boutons)
    const pommes = document.querySelectorAll('.pomme');

    // Ajouter un clic à chaque pomme
    pommes.forEach(pomme => {
        pomme.addEventListener('click', () => {
            score++;
            localStorage.setItem("pommesTrouvees", score);
            document.getElementById("compteur").textContent = score;

            // On peut désactiver la pomme une fois trouvée
            pomme.disabled = true;
            pomme.style.opacity = "0.4";
        });
    });
}