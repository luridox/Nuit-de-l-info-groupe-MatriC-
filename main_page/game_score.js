function snake_score() {
    // Récupération du compteur dans localStorage (0 par défaut)
    let snake_score = localStorage.getItem("pommesTrouvees");
    if (!snake_score) snake_score = 0;

	window.addEventListener("beforeunload", () => {
		localStorage.removeItem("pommesTrouvees");
	});

    // On met à jour l'affichage
    document.getElementById("compteur").textContent = snake_score;

    // Récupérer toutes les pommes (boutons)
    const pommes = document.querySelectorAll('.pomme');

    // Ajouter un clic à chaque pomme
    pommes.forEach(pomme => {
        pomme.addEventListener('click', () => {
            snake_score++;
            localStorage.setItem("pommesTrouvees", snake_score);
            document.getElementById("compteur").textContent = snake_score;

            // On peut désactiver la pomme une fois trouvée
            pomme.disabled = true;
            pomme.style.opacity = "0.4";
        });
    });
}

function game_score() {
    let game_score = localStorage.getItem("score");
    if (!game_score) game_score = 0;

    // Nettoyage du stockage à la fermeture de la page si tu veux
    window.addEventListener("beforeunload", () => {
        localStorage.removeItem("score");
    });

    // Retourner le score si besoin
    return game_score;
}

function increment_game_score() {
    let current = parseInt(localStorage.getItem("score"));
    if (isNaN(current)) current = 0;

    current++;                     // Incrémentation
    localStorage.setItem("score", current);

    return current;                // Pour éventuellement afficher en direct
}