function snake_score() {
    let score = parseInt(localStorage.getItem("pommesTrouvees")) || 0;
    const compteur = document.getElementById("compteur");
    const pomme = document.querySelector(".pomme");
    const snakeLink = document.getElementById("snakeLink");

    if (compteur) compteur.textContent = score;
    if (!pomme) return;

    const key = "pommeClicked_" + location.pathname;

    // Désactiver la pomme si déjà cliquée
    if (localStorage.getItem(key) === "true") {
        pomme.disabled = true;
        pomme.style.opacity = "0.4";
    }

    pomme.addEventListener("click", () => {
        if (pomme.disabled) return;

        score++;
        localStorage.setItem("pommesTrouvees", score);
        localStorage.setItem(key, "true");

        pomme.disabled = true;
        pomme.style.opacity = "0.4";

        if (compteur) compteur.textContent = score;

        // Débloquer le lien Snake si 4 pommes atteintes
        if (score >= 4 && snakeLink) {
            snakeLink.style.display = "inline-block";
        }
    });

    // Vérifier si le score actuel débloque déjà Snake
    if (score >= 4 && snakeLink) {
        snakeLink.style.display = "inline-block";
    }
}

document.addEventListener("DOMContentLoaded", snake_score);

function resetSnake() {
    // Remet à zéro le score global
    localStorage.setItem("pommesTrouvees", 0);
    localStorage.setItem("compteur", 0);
    // Supprime tous les flags de pommes sur toutes les pages
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith("pommeClicked_")) {
            localStorage.removeItem(key);
        }
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