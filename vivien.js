// Attendre que tout le HTML soit chargé
document.addEventListener('DOMContentLoaded', () => {

    // Sélectionner les éléments du DOM
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    // Écouter le clic sur le bouton hamburger
    hamburger.addEventListener('click', () => {
        // Ajouter ou enlever la classe 'active' pour afficher/cacher le menu
        navLinks.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien (utile sur mobile)
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

});