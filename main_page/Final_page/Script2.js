function demarrerAventure() {
    const bouton = document.querySelector('.btn-start');
    
    bouton.innerText = "Chargement...";
    bouton.style.backgroundColor = "#8A2BE2";
    bouton.style.color = "white";

    setTimeout(() => {
        // 1. ON DONNE LE BADGE (La Clé)
        // On enregistre "vrai" dans la variable "accesAutorise" du navigateur
        localStorage.setItem('accesAutorise', 'true');

        // 2. ON REDIRIGE VERS LA PAGE
        window.location.href = "../introduction_page.html"; 
    }, 1000);
}

const lien = document.getElementById("monLien");

lien.addEventListener("mouseover", () => {
    lien.style.color = "orange";
});

lien.addEventListener("mouseout", () => {
    lien.style.color = "blue"; // couleur par défaut
});