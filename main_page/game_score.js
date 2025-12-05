function snake_score() {
    // Lecture du score actuel
    let score = parseInt(localStorage.getItem("pommesTrouvees")) || 0;

    // Mise à jour de l'affichage
    const compteur = document.getElementById("compteur");
    if (compteur) compteur.textContent = score;

    // Récupérer l'unique bouton pomme
    const pomme = document.querySelector(".pomme");
    if (!pomme) return;

    // Vérifier si cette page a déjà cliqué sa pomme
    const key = "pommeClicked_" + location.pathname;
    if (localStorage.getItem(key) === "true") {
        pomme.disabled = true;
        pomme.style.opacity = "0.4";
    }

    // Clic sur la pomme
    pomme.addEventListener("click", () => {
        if (pomme.disabled) return;

        // Incrémenter le score
        score++;
        localStorage.setItem("pommesTrouvees", score);
        localStorage.setItem(key, "true");

        // Désactiver la pomme
        pomme.disabled = true;
        pomme.style.opacity = "0.4";

        // Mettre à jour l'affichage
        if (compteur) compteur.textContent = score;
    });
}

// Appeler au chargement de chaque page
document.addEventListener("DOMContentLoaded", snake_score);

function resetSnake() {
    localStorage.removeItem("pommesTrouvees");
    localStorage.removeItem("pommeClicked_" + location.pathname);
    //localStorage.removeItem("compteur");
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

function getLevel() {
    const snake = parseInt(localStorage.getItem("pommesTrouvees")) || 0;
    const game  = parseInt(localStorage.getItem("score")) || 0;

    if (snake >= 0 && game >= 3) return 1; // Gagné
    //else(snake = 4 && game >= 3) return 3; // Fin snake
    //else(snake < 4 && game >= 3) return 4; // Perdu Python
    else return 2;// Perdu
}

function switch_Level() {
    switch (getLevel()) {
   case 1:
        window.location.href = "gagne_page.html";
        break;
    case 2:
        window.location.href = "perdu_page.html";
        break;
}
}