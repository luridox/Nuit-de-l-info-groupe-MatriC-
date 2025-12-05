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

function reset_score() {
    localStorage.setItem("score", 0);
}

function init_score() {
    let s = localStorage.getItem("score");
    if (s === null) {
        localStorage.setItem("score", 0);   // Première visite → score = 0
    }
}


function incrementer_game_score() {
    let s = parseInt(localStorage.getItem("score"));
    if (isNaN(s)) s = 0;

    s++;
    localStorage.setItem("score", s);

    return s;
}

function show_final_score() {
    let s = localStorage.getItem("score");
    if (!s) s = 0;

    document.getElementById("finalScore").textContent = s;
}
