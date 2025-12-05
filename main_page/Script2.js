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
        window.location.href = "Introduction.html"; 
    }, 1000);
}